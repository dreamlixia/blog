一、var、let、const的区别
---
1. var存在变量提升，let和const不存在变量提升，只能先声明，后使用，否则报错；
> 变量提升：在声明之前就可以输出，值为undefined；
2. let和const是块级作用域，只在声明的作用域内有效；
3. let可以先声明，后赋值，const声明时必须进行初始化赋值；
4. let声明变量，const声明常量，const只能进行一次赋值，声明后不可改变，var和let可以修改变量值；
5. 在同一作用域下let和const不能声明同名变量，而var可以重复声明变量；
6. 在es5中，顶层对象的属性和全局变量是等价的，用var声明的对象既是全局变量，也是顶层对象；
> 顶层对象，在浏览器中指的是window对象，nodejs中指的是global对象；

能用const的情况尽量使用const，其他情况下大多数使用let，避免使用var

二、数组新增拓展
---
1. 扩展运算符 ... 
> 扩展运算符(…)用于取出参数对象中的所有可遍历属性，拷贝到当前对象之中
- 可以将数组转化为参数序列
```
let arr = [1, 2, 3]
console.log(...arr) // 1 2 3
```
- 可以复制数组
```
const arr1 = [1, 2, 3]
const arr2 = [...arr1]
console.log(arr2) // [1, 2, 3]
```
- 与解构赋值结合起来，生成新数组
```
const [first, ...reset] = [1,2,3,4,5]
console.log(first) // 1
console.log(reset) // [2,3,4,5]
```
> 如果将扩展运算符用于数组赋值，只能放在参数的最后一位，否则会报错。
- 将字符串转化为真正的数组
```
console.log([...'hello']) // ["h", "e", "l", "l", "o"]
```
- 实现了 Iterator 接口的对象, 任何定义了遍历器（Iterator）接口的对象（参阅 Iterator 一章），都可以用扩展运算符转为真正的数组。
```
let nodeList = document.querySelectorAll('div');
let array = [...nodeList];
```
上面代码中，querySelectorAll()方法返回的是一个NodeList对象。它不是数组，而是一个类似数组的对象。这时，扩展运算符可以将其转为真正的数组，原因就在于NodeList对象实现了 Iterator。
> 把某些数据结构转化为数组
>```
>function foo() {
>    const args = [...arguments];
>}
>```
>用于替换es5中的Array.prototype.slice.call(arguments)写法。

2. 构造函数新增方法
* Array.from()：将两类对象转化为真正的数组（包括 ES6 新增的数据结构 Set 和 Map）
    - 类似数组的对象
    ```
    let arrayLike = {
        '0': 'a',
        '1': 'b',
        '2': 'c',
        length: 3
    };

    // ES5 的写法
    var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']

    // ES6 的写法
    let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']
    ```
    实际应用中，常见的类似数组的对象是 DOM 操作返回的 NodeList 集合，以及函数内部的arguments对象。Array.from()都可以将它们转为真正的数组。
    ```
    // NodeList 对象
    let ps = document.querySelectorAll('p'); // querySelectorAll()方法返回的是一个类似数组的对象
    Array.from(ps).filter(p => {
        return p.textContent.length > 100;
    });

    // arguments 对象
    function foo() {
        var args = Array.from(arguments);
        // ...
    }
    ```
    - 可遍历（iterable）的对象: 只要是部署了 Iterator 接口的数据结构，Array.from()都能将其转为数组
    ```
    Array.from('hello')
    // ['h', 'e', 'l', 'l', 'o']

    let namesSet = new Set(['a', 'b'])
    Array.from(namesSet) // ['a', 'b']
    ```
    上面代码中，字符串和 Set 结构都具有 Iterator 接口，因此可以被Array.from()转为真正的数组。

    >Array.from()还可以接受一个函数作为第二个参数，作用类似于数组的map()方法，用来对每个元素进行处理，将处理后的值放入返回的数组。
    >```
    >Array.from(arrayLike, x => x * x);
    >// 等同于
    >Array.from(arrayLike).map(x => x * x);
    >
    >Array.from([1, 2, 3], (x) => x * x)
    >// [1, 4, 9]
    >```

* Array.of(): 用于将一组值，转换为数组。
    ```
    Array.of(3, 11, 8) // [3,11,8]
    Array.of(3) // [3]
    Array.of(3).length // 1
    ```
    - 没有参数的时候，返回一个空数组
    ```
    Array.of() // []
    ```
    - 当参数只有一个的时候，实际上是指定数组的长度
    - 参数个数不少于 2 个时，Array()才会返回由参数组成的新数组

3. 实例对象新增方法
* copyWithin()：将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组
    - target（必需）：从该位置开始替换数据。如果为负值，表示倒数。
    - start（可选）：从该位置开始读取数据，默认为 0。如果为负值，表示从末尾开始计算。
    - end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示从末尾开始计算。
* find()、findIndex()：find()用于找出第一个符合条件的数组成员
    - 参数是一个回调函数，接受三个参数依次为当前的值、当前的位置和原数组
    - findIndex返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1
    - 这两个方法都可以接受第二个参数，用来绑定回调函数的this对象
* fill()：使用给定值，填充一个数组
    - 还可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置
    - 注意，如果填充的类型为对象，则是浅拷贝
* entries()，keys()，values()：
    - keys()是对键名的遍历
    - values()是对键值的遍历
    - entries()是对键值对的遍历
* includes()：用于判断数组是否包含给定的值
    - 方法的第二个参数表示搜索的起始位置，默认为0
    - 参数为负数则表示倒数的位置
* flat()，flatMap()：将数组扁平化处理，返回一个新数组，对原数据没有影响
    - flat()：默认只会“拉平”一层，如果想要“拉平”多层的嵌套数组，可以将flat()方法的参数写成一个整数，表示想要拉平的层数，默认为1
    - flatMap()方法对原数组的每个成员执行一个函数相当于执行Array.prototype.map()，然后对返回值组成的数组执行flat()方法。该方法返回一个新数组，不改变原数组。flatMap()方法还可以有第二个参数，用来绑定遍历函数里面的this

4. 数组的空位
> 数组的空位指，数组的某一个位置没有任何值
- es6明确将数组的空位转为undefined

三、对象新增拓展
---
1. 属性的简写
```
var payload = { 
    id: id
}
// 可以写成
var payload = { id }
```

2. 属性名表达式
* ES6 允许字面量定义对象时，将表达式放在括号内。表达式还可以用于定义方法名：
    - 注意，属性名表达式与简洁表示法，不能同时使用，会报错
    - 注意，属性名表达式如果是一个对象，默认情况下会自动将对象转为字符串[object Object]

3. super关键字
* this关键字总是指向函数所在的当前对象，ES6 又新增了另一个类似的关键字super，指向当前对象的原型对象

4. 扩展运算符的应用
* 在解构赋值中，未被读取的可遍历的属性，分配到指定的对象上面：
    - 注意：解构赋值必须是最后一个参数，否则会报错
    - 解构赋值是浅拷贝。对象的扩展运算符等同于使用Object.assign()方法

5. 属性的遍历
* ES6 一共有 5 种方法可以遍历对象的属性：
```
for...in：循环遍历对象自身的和继承的可枚举属性（不含 Symbol 属性）
Object.keys(obj)：返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）的键名
Object.getOwnPropertyNames(obj)：回一个数组，包含对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性）的键名
Object.getOwnPropertySymbols(obj)：返回一个数组，包含对象自身的所有 Symbol 属性的键名
Reflect.ownKeys(obj)：返回一个数组，包含对象自身的（不含继承的）所有键名，不管键名是 Symbol 或字符串，也不管是否可枚举
```
* 上述遍历，都遵守同样的属性遍历的次序规则：
    - 首先遍历所有数值键，按照数值升序排列
    - 其次遍历所有字符串键，按照加入时间升序排列
    - 最后遍历所有 Symbol 键，按照加入时间升序排

6. 对象新增的方法
```
1、Object.is()：严格判断两个值是否相等，与严格比较运算符（===）的行为基本一致，不同之处只有两个：一是+0不等于-0，二是NaN等于自身

2、Object.assign()：

Object.assign()方法用于对象的合并，将源对象source的所有可枚举属性，复制到目标对象target
Object.assign()方法的第一个参数是目标对象，后面的参数都是源对象
注意：Object.assign()方法是浅拷贝，遇到同名属性会进行替换
3、Object.getOwnPropertyDescriptors()：返回指定对象所有自身属性（非继承属性）的描述对象

4、Object.setPrototypeOf()：用来设置一个对象的原型对象

5、Object.getPrototypeOf()：用于读取一个对象的原型对象

6、Object.keys()：返回自身的（不含继承的）所有可遍历（enumerable）属性的键名的数组

7、Object.values()：返回自身的（不含继承的）所有可遍历（enumerable）属性的键对应值的数组

8、Object.entries()：返回一个对象自身的（不含继承的）所有可遍历（enumerable）属性的键值对的数组

9、Object.fromEntries()：用于将一个键值对数组转为对象
```

四、函数新增拓展
---
1. 参数：es6允许函数的参数设置默认值，可以与解构赋值的默认值结合起来使用，当没有提供参数时避免报错；
2. 属性
    + length
        - length将返回没有指定默认值的参数个数；
        - rest 参数也不会计入length属性；
    + name： 返回该函数的函数名
        - 将一个具名函数赋值给一个变量，则name属性都返回这个具名函数原本的名字；
        - Function构造函数返回的函数实例，name属性的值为anonymous；
        - bind返回的函数，name属性值会加上bound前缀；
3. 作用域：一旦设置了参数的默认值，函数进行声明初始化时，参数会形成一个单独的作用域；等到初始化结束，这个作用域就会消失。这种语法行为，在不设置参数默认值时，是不会出现的；
4. 严格模式：只要使用了默认值、解构赋值、或者扩展运算符，函数内部都不能显示的设定为严格模式，否则会报错；
5. 箭头函数；

五、Set 和 Map
---
Set是一种叫做集合的数据结构，Map是一种叫做字典的数据结构。
>集合：是由一堆无序的、相关联的，且不重复的内存结构（数学中称为元素）组成的组合。
>
>字典：是一些元素的集合。每个元素都有一个称作key的域，不同元素的key各不相同。

区别：
* 共同点：集合和字典都是可以存储不重复的值
* 不同点：集合以[值, 值]的形式存储，字典以[key, 值]的形式存储

##### Set：
es6新增的数据结构，类似于数组，值唯一，无重复，我们一般称为集合。Set本身是一个构造函数，用于生成Set数据结构
```
const s = new Set()

[1,1,1,2,2,2,3,3,4,5,6,3,4,2,1].forEach(x => s.add(x))

console.log(s) // Set(6) { 1, 2, 3, 4, 5, 6 }

for(let item of s){
    console.log(item)
}
// 1 2 3 4 5 6
```
以上代码使用add()向Set结构加入成员，表明Set结构不会添加重复的值

去除字符串中的重复字符
```
[...new Set('aabbccabc')].join('') // "abc"
```

属性：
- Set.prototype.constructor: 构造函数，默认就是Set函数
- Set.prototype.size: Set函数的成员总数

操作方法：
- add(value) 返回Set结构本身
- delete(value) 返回一个Boolean，表示是否删除成功
- has(value) 返回一个Boolean，表示是否包含
- clear() 清除所有成员，没有返回

遍历方法：
- keys() 返回键名的遍历器
- values() 返回键值的遍历器
- entries() 返回键值对的遍历器
- forEach() 使用回调函数遍历每个成员
```
let set = new Set(['React', 'Vue', 'Angular'])

for(let item of set.keys()){
    console.log(item) // React Vue Angular
}

for(let item of set.values()){
    console.log(item) // React Vue Angular
}

for(let item of set.entries()){
    console.log(item)
}
// [ 'React', 'React' ]
// [ 'Vue', 'Vue' ]
// [ 'Angular', 'Angular' ]
```
```
let set = new Set([1, 4, 9]);
set.forEach((key, value) => console.log(key+':'+value))
// 1:1
// 4:4
// 9:9
```

##### Map
Map类型是键值对的有序列表，而键和值都可以是任意类型，Map本身是一个构造函数，用来生成 Map 数据结构

六、Promise
---
1.
> 
* 
    - 
    >
2. 

七、Generator
---
1.
> 
* 
    - 
    >
2. 

八、Proxy
---
1.
> 
* 
    - 
    >
2. 

九、Module
---
1.
> 
* 
    - 
    >
2. 

十、Decorator
---
1.
> 
* 
    - 
    >
2. 