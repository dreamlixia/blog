------ JavaScript ------
---
异步加载的几种方式
---
1. defer: script被异步加载后并不会立即执行，而是等待文档被解析后执行。
    - 只适用于外联脚本，如果script没有制定src属性，只是内联脚本，不要使用defer；
    - 如果有多个声明了defer的sript，则会按顺序下载和执行；
    - defer脚本会在DOMContentLoader和load事件之前执行
```
<script defer src=""></script>
<script src="">defer</script>
```
2. async: html5为script元素定义的属性，只能异步加载外部的链接文件，不能加载内部脚本
    - 在js文件加载完后立即执行；
    - 如果有多个声明了async的脚本，其下载和执行也是异步的，不能确保彼此的先后顺序；
    - async会在load事件之前执行，但并不能确保与DOMContentLoaded的执行先后顺序
```
<script src="" async></script>
```
3. 动态创建script标签，按需加载，节省资源，在需要用到的时候再去引入。
```
function loadScript(url, callback) {
    var script = document.createElement('script');
    if(script.readyState) {
        script.onreadystatechange = function() {
            if(script.readyState == 'loaded' || script.readyState == 'complate') {
                callback();
            }
        }
    } else {
        script.onload = function() {
            callback();
        }
    }
    script.url = url;
    document.body.appendChild(script);
}
```

防抖（debounce）
---
不管事件的触发频率多高，一定在事件触发的 n 秒后才执行，如果你在事件触发后 n 秒内又触发了这个事件，那么以新的时间为准，n 秒后再执行。
```
function debounce(event, time) {
    let timer = null;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            event.apply(this, args);
        }, time);
    }
}
```
有时候我们需要立即执行一次函数，再等后面事件触发后等待 n 秒执行，我们给 debounce 函数一个 flag 标示。
```
function debounce(event, time) {
    let timer = null;
    let flag = true;
    return function(...args) {
        clearTimeout(timer);
        if(flag && !timer) {
            event.apply(this, args);
            flag = false;
        }
        timer = setTimeout(() => {
            event.apply(this, args);
        }, time);
    }
}
```

节流（throttle）
---
不管事件的触发频率有多高，只在单位时间内执行一次。

<span style="text-decoration: underline; color: blue;">时间戳</span>和定时器结合，第一次和最后一次都会触发的版本。
```
function throttle(event, time) {
    let pre = 0; // 记录上次的时间
    let timer = null;
    return function(...args) {
        if(Date.now() - pre > time) { // 当前时间-上次时间 > 等待时间
            clearTimeout(timer);
            pre = Date.now(); // 重置上次的时间
            event.apply(this, args); // 执行函数
        } else if(!timer) {
            timer = setTimeout(() => {
                event.apply(this, args);
            }, time);
        }
    }
}
```

介绍下Promise和all方法
---
Promise是异步编程的一种解决方案。有以下两个特点，对象的状态不受外界影响和一旦状态改变，就不会再变，任何时候都可以得到这个结果，promise对象有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）。Promise对象是一个构造函数，用来生成promise实例，接受一个函数作为参数，该函数的两个参数分别是resolve和reject。promise的方法有then、catch、finally、resolve、reject等。

Promise.all()方法可以将多个Promise实例包装成一个新的Promise实例。同时，成功和失败的返回值是不同的，成功时返回一个数组，失败的时候则返回最先被reject失败状态的值。

需要特别注意的是， Promise.all获得的成功结果的数据里面的数据顺序和Promise.all接收到的数组顺序是一致的，即使前面的结果后返回，得到的数组顺序也是在前的。适用场景：前端开发请求数据的过程中，发送多个请求并根据请求顺序获取和使用数据。

promise和async await的区别
---
Promise的出现解决了传统callback函数导致的地域回调问题，但他的语法导致了它向纵向发展成了一个回调连，遇到复杂的业务场景，这样的语法显然也是不美观的。而async await代码看起来会简洁些，使异步代码看起来像同步代码，await的本质是可以提供等同于“同步效果”的等待异步返回能力的语法糖，只有这一句执行完，才会执行下一句。

async await与Promise一样，是非阻塞的。

async await是基于Promise实现的，可以说是改良版的Promise，他不能用于普通的回调函数。

数组的常用方法
---
1. push(): 后增一个或多个元素，返回新增后的数组长度，改变原数组；
2. unshift()： 前增一个或多个元素，返回新增后的数组长度，改变原数组；
3. pop()： 删除并返回数组的最后一个元素，返回删除的元素，若数组为空，返回undefined，改变原数组；
4. shift()：删除并返回数组的第一个元素，返回删除的元素，若数组为空，返回undefined，改变原数组；
5. slice()：按条件查找内容
    - slice(n, m): n其实下标，m结束下标，包含起始，不包含结束，截取出中间的内容，返回一个新数组，不改变原数组；
    - slice(n): 从n截取到末尾；
    - slice(0): 从头到尾截取，原样输出，可用于数组的克隆；
    - slice(-n, -m): 支持负数，代表从末尾开始数第n位至第m位，截取中间的内容。
6. splice()：添加或删除数组中的元素
    - splice(n, howmany, arr1, arr2, ...): n起始下标，howmany删除长度，可以为0，代表不删除元素，arr1,arr2为新增的数组，改变原数组；
7. concat()： 拼接，合并两个或者多个数组，生成一个新的数组，不改变原数组；
8. join()： 将数组的每一项用指定字符链接起来形成一个字符串，默认链接符卫','逗号；
    - join(): var arr = [1,2,3]; var str = arr.join(); // str = '1,2,3'
    - join('-'): var arr = [1,2,3]; var str = arr.join('-'); // str = '1-2-3'
9. reverse(): 倒序数组，改变原数组；
10. sort()： 排序，按照字符Unicode码进行排序，改变原数组；
    - 从小到大排序： arr.sort((a, b) => a - b)
    - 从大到小排序： arr.sort((a, b) => b - a)
    - 按照数组对象中某个值进行排序：
    ```
    var arr = [
        { name: '名字一', age: '13' },
        { name: '名字二', age: '12' },
        { name: '名字三', age: '10' },
    ]
    function compare(param) {
        return function(a, b) {
            return a[param] - b[param]
        }
    }
    arr.sort(compare('age')) 
    // arr = [
    //    { name: '名字三', age: '10' }
    //    { name: '名字二', age: '12' },
    //    { name: '名字一', age: '13' },
    // ]
    ```
11. map()：原数组的每一项执行函数后，返回一个新的数组，有返回值，不改变原数组；
12. forEach()： 没有返回值, 改变原数组；
13. filter()： 过滤数组中符合条件的元素并返回一个新的数组；
14. every(function)：对数组的每一项进行判断，如果每一项都符合则返回true，否则返回false；
    - 从迭代开始，一旦有一个不符合条件，就返回false，不继续迭代下去
15. some(function)：对数组的任一项进行判断，如果有一项符合就返回true，都不符合则返回false；
    - 一直在查找符合条件的值，一旦找到，则不继续迭代下去
16. reduce()： 接收一个函数作为累加器，最终计算为一个值；
17. indexOf()：检测当前值在数组中第一次出现的位置索引，不改变原数组；
    - indexOf(item, start): item查找的元素，start从这个位置开始检索，找不到返回-1
18. includes()：判断一个数组是否包含一个指定的值，返回布尔值，不改变原数组；

reduce这个方法通常用于什么场景？
---
1. 计算数组元素之和或乘积；
2. 数组去重；
3. 计算数组中元素出现的次数；
4. 将二维或多维数组转化为一维数组；
5. 数组对象里的属性求和；

字符串的常用方法
---
1. charAt(index)：返回字符串中指定位置的字符；

2. charCodeAt()：没有参数，str.charCodeAt(); 返回对应字符的ASCII码，如有多个值，则返回字符串中第一个值的ASCII码；

3. fromCharCode(ASCII码)：String.fromCharCode(65); 填入ASCII码，就会得到对应的字符；

4. includes(searchValue， start)：用于判断字符串是否包含指定字符，返回布尔值，searchValue必填，start选填，设置查找开始的位置，默认为0；

5. concat()：拼接两个或多个字符串，不改变原字符串，返回拼接后的新字符串；

6. split(separtator, limit)：用于把字符串分割成字符串数组，参数可以是符号也可以是字符串中的元素，两个参数都是可选的，separtator表示字符串或正则表达式，从该参数指定的地方分割，limit 指定返回的数组的最大长度；

7. slice(start, end)：提取字符串的某个部分，包含起始位置，不包含结束位置，返回新的被提取部分的字符串；

8. substr(start, howmany)：from开始裁切的下标，howmany要裁切的长度；

9. substring(from, to)：from必须，to可选，不支持负数，提取两个指定字符之间的字符，to不填表示到结尾；

10. indexOf(searchValue, start)：返回某个指定字符在字符串中首次出现的位置，没有匹配到返回-1， start选填；

11. lastIndexOf()：同上，倒序查找；

12. search()：检索字符串中的指定字符，或于正则表达式相匹配的字符串，返回起始位置下标；

13. match()：可在字符串中根据正则找到一个或者多个匹配的值；

14. trim()：去除收尾空格，没有参数；

15. toLowerCase()：转化成小写；

16. toUpperCase()：转化成大写；

17. replace(searchValue, newValue)：用一些字符替换另一些字符，或者替换一个与正则表达式匹配的子串；

18. replaceAll()：该函数会替换掉所有匹配到的子字符串；

19. repeat(n)：复制指定次数, var str = 'Hello'; var s = str.repeat(2); // s = 'HelloHello'

对象的常用方法
---
1. new：new对象
```
// 1.创建控对象后添加属性
const obj = {}
obj.uname = 'name'
obj.fn = () => {
    console.log('ggg')
}
console.log(obj)// { uname: 'name', fn: ƒ }
// 2. 创建对象并且直接添加属性(常用)
const obj1 = {
    uname: 'name',
    fn: () => {
        console.log('ggg')
    }
}
console.log(obj1) // { uname: 'name', fn: ƒ }
```
2. Object.create(Person.prototype, {})：创建一个新对象，使用第一个参数来提供新创建对象的_proto__(以第一个参数作为对象的构造函数的原型对象)，第二个参数为可选参数，添加到新创建的对象中的属性；
```
const a = Object.create(Person.prototype, {
    age: {
        value: 12,
        writable: true,
        configurable: true
    }
})
```
new和Object.create()的区别
---
new产生的对象，优化获取构造函数上的属性，找不到才回去原型上找；

如果构造函数中以及原型上都没有对应的属性，就会报错；

Object.create() 产生的对象，只会在原型上进行查找属性，原型上没有对应的属性，就会报错；

3. delete：删除属性，const o = { p: 10, m: 20 }; delete o.p; console.log(o); // { m: 20 }

4. Object.assign(target, ...sources)：将所有可枚举的自身属性从一个或多个源对象复制到目标对象，返回修改后的对象；

5. Object.getOwnPropertyNames()：返回自有属性的名称（不管是不是可枚举的）

6. for in：遍历对象中所有的可枚举属性（包括自身属性和继承属性）

7. Object.keys(obj)：返回给定对象自己的可枚举属性名称的数组；

8. Object.values(obj)：返回给定对象自己的可枚举属性值的数组；
```
const object2 = {
    a: 'a',
    b: 'b',
    c: 'c'
}
Object.values(object2); // ['a', 'b', 'c'] // 按顺序
```

9. Object.entries(obj)：返回给定对象自己的可枚举属性[key, value]的数组
```
const object1 = { name: 'David', age: 23 }
Object.entries(object1) // [['name', 'David'], ['age', 23]]
```

10. Object.fromEntries(iterable)：参数iterable类似Array、Map或者其他实现了可迭代协议的可迭代对象，返回一个由该迭代对象条目提供对应属性的新对象。该方法把键值对列表转换为一个对象，与Object.entries()相反。
```
const entries = new Map([
    [ 'name', '姓名' ],
    [ 'age',  13 ]
])
const obj = Object.fromEntries(entries); // { name: '姓名', age: 13 } 
```

11. Object.prototype.hasOwnProperty(prop)：返回一个布尔值，指示对象是否具有指定的属性作为他自己的属性，如果是对象的直接属性，则返回true，即使值为null或未定义；如果该属性是继承的或根本没有声明，则返回false；
```
const object3 = {}
object3.prototype1 = 1
Object.prototype.hasOwnProperty('prototype1'); // true
Object.prototype.hasOwnProperty('toString'); // false
```

12. Object.prototype.toString()：返回一个表示对象的字符串。

13. Object.is(val1, val2)：判读两个值是否相同，返回布尔值；

对this对象的理解
---
this是执行上下文中的一个属性，他指向最后一次调用这个方法的对象。在实际开发中，this的指向可以通过四种调用模式来判断。

1. 函数调用模式，当一个函数不是一个对象的属性时，直接作为函数来调用，this指向全局对象；
2. 方法调用模式，如果一个函数作为一个对象的方法来调用，this指向这个对象；
3. 构造器调用模式，如果一个函数用new调用，函数执行前会新创建一个对象，this指向这个新创建的对象。
4. apply、call和bind调用模式，这三个方法都可以显示的指定调用函数的this指向；
    - apply方法接收两个参数，一个是this绑定的对象，第二个是参数数组；
    - call方法接收的参数，一个是this绑定的对象，其余是逐个列举的传入函数执行的参数；
    - bind方法接收一个对象，返回一个this绑定了传入对象的新函数，这个函数的this指向除了使用new时会被改变，其他情况都不会改变。

- 优先级： 构造器调用模式 > apply > call > bind > 方法调用模式 > 函数调用模式

深浅拷贝
---
浅拷贝：创建一个对象，这个对象有着原始对象属性值的一份精确拷贝。如果属性是基本数据类型，拷贝的就是基本类型的值，如果属性是引用类型，拷贝的就是内存地址，如果其中一个对象改变了这个地址中的值，另一个就会影响。

深拷贝：将一个对象从内存中完整的拷贝一份出来，从堆内存中开辟一个新的区域存放新对象，并且修改这个对象不会影响原对象。