区别
---
- 都用来改变 this 指向；
- call 、apply 在改变 this 指向的同时会执行函数，一次性的。不同的是 call 方法传递函数调用的形参是散列的形式，apply 的行参是一个数组。在传参的情况下，call 的性能要高于 apply， 因为 apply 还需要解析数组。
- bind 在改变 this 指向后是返回一个全新的绑定函数，不直接执行函数。**一个函数被 bind 绑定后，那么这个返回的新函数无法再通过 call 、 apply 改变 this 指向。**

用法
---
### call
+ call 方法使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数。
> 
> function.call(thisArg, arg1, arg2, ...);
> 
> [thisArg] 必填， [arg1, arg2, ...] 可选；
>
> 在 function 函数运行时使用的 this 值，指定为 null 或 undefined 时，this 自动替换为指向全局对象。 
```
let callObj = {
    name: '我是call'
}
function fn() {
    console.log('参数 =>', ...arguments);
    console.log('name =>', this.name);
}
fn.call(callObj, 1, 2, 3)
// 参数 => 1 2 3
// name => 我是call
```

### apply
+ 方法调用一个具有给定 this 值的函数，以及以一个数组（或类数组对象）的形式提供参数。
> function.apply(thisArg, [argsArray]);
> 
> [thisArg] 必填；[argsArray] 可选；
```
let objApply = {
    name: '我是apply'
}
function fn() {
    console.log('参数 =>', ...arguments);
    console.log('name =>', this.name);
}
fn.apply(objApply, [1, 2, 3]);
// 参数 => 1 2 3
// name => 我是apply
```

### bind
+ 方法创建一个新的函数，在 bind() 被调用时，这个新的函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。
> function.bind(thisArg, [, arg1[, arg2[, arg3[, ...]]]])
>
> [thisArg] 
>
> [arg1, arg2, arg3, ...] 当目标函数被调用时，被预置入绑定函数参数列表中的参数。
```
let objBind = {
    name: '我是bind'
}
let objApply = {
    name: '我是apply'
}
let callObj = {
    name: '我是call'
}
function fn() {
    console.log('参数 =>', ...arguments);
    console.log('name =>', this.name);
}
let bfn = fn.bind(objBind, 1, 2, 3); // 或 fn.bind(objBind)(1, 2, 3);
bfn();
// 参数 => 1 2 3
// name => 我是bind

bfn.call(objCall);
bfn.apply(objApply);
// 参数 => 1 2 3
// name => 我是bind // 无法再改变
// 参数 => 1 2 3
// name => 我是bind
```

手写
---
