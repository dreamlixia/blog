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
function debounce(event, time, flag) {
    let timer = null;
    return function(...args) {
        clearTimeout(timer);
        if(flag && !timer) {
            event.apply(this, args);
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

时间戳和定时器结合，第一次和最后一次都会触发的版本。
```
function throttle(event, time) {
    let pre = 0; 
    let timer = null;
    return function(...args) {
        if(Date.now() - pre > time) {
            clearTimeout(timer);
            timer = null;
            pre = Date.now();
            event.apply(this, args);
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