(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{295:function(e,n,t){e.exports=t.p+"assets/img/usePromiseToAjax.b924d52c.jpg"},367:function(e,n,t){"use strict";t.r(n);var a=t(14),r=Object(a.a)({},(function(){var e=this,n=e._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"手写object-create"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#手写object-create"}},[e._v("#")]),e._v(" 手写Object.create")]),e._v(" "),n("p",[e._v("思路：将传入的对象作为原型")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("function create(obj) {\n    function F() {}\n    f.prototype = obj\n    return new F()\n}\n")])])]),n("h2",{attrs:{id:"防抖-debounce"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#防抖-debounce"}},[e._v("#")]),e._v(" 防抖(debounce)")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://dreamlixia.github.io/blog/#/src/%E9%9D%A2%E8%AF%95%E9%A2%98/JavaScript.html#%E9%98%B2%E6%8A%96-debounce",target:"_blank",rel:"noopener noreferrer"}},[e._v("本博客面试题模块有解析"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("不管事件的触发频率有多高，一定在事件触发后的n秒后才执行，如果在n秒内再次触发了事件，那么以新的时间为准，n秒后再执行。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("function debounce(event, time) {\n    let timer = null\n    return function(...args) {\n        if(timer) clearTimeout(timer)\n        timer = setTimeout(() => {\n            event.apply(this, args)\n        }, time)\n    }\n}\n")])])]),n("p",[e._v("有时候需要立即执行一次，再等后面事件触发后等待n秒执行。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("function debounce1(event, time) {\n    let timer = null\n    let flag = true\n    return function(...args) {\n        if(flag && !timer) {\n            event.apply(this, args)\n            flag = false\n        }\n        if(timer) clearTimeout(timer)\n        timer = setTimeout(() => {\n            event.apply(this, args)\n        }, time)\n    }\n}\n")])])]),n("h2",{attrs:{id:"节流-throttle"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#节流-throttle"}},[e._v("#")]),e._v(" 节流(throttle)")]),e._v(" "),n("p",[e._v("不管事件的触发频率有多高，只在单位时间内执行一次。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("function throttle(event, time) {\n    let timer = null\n    return function(...args) {\n        if(!timer) {\n            timer = setTimeout(() => {\n                clearTimeout(timer)\n                event.apply(this, args)\n            }, time)\n        }\n    }\n}\n")])])]),n("p",[e._v("时间戳方式 ？")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("function throttleTime(event, time) {\n    let prev = 0\n    let timer = null\n    return function(...args) {\n        if(Date.now() - prev > time) {\n            \x3c!-- ？？？ clearTimeout(timer) --\x3e\n            event.apply(this, args)\n            prev = Date.now()\n        } else if(!timer) {\n            timer = setTimeout(() => {\n                clearTimeout(timer)\n                event.apply(this, args)\n            }, time)\n        }\n    }\n}\n")])])]),n("h2",{attrs:{id:"promise"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#promise"}},[e._v("#")]),e._v(" Promise")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("const PENDING = 'pending'\nconst FULFILLED = 'fulfilled'\nconst REJECTED = 'rejected'\n\nfunction MyPromise(executor) {\n    this.state = PENDING\n    this.value = null\n    this.reason = null\n\n    const resolve = (value) => {\n        if(this.state == PENDING) {\n            this.state = FULFILLED\n            this.value = value\n        }\n    }\n    const reject = (reason) => {\n        if(this.state == PENDING) {\n            this.state = REJECTED\n            this.reason = reason\n        }\n    }\n\n    try {\n        executor && executor(resolve, reject)\n    } catch (reason) {\n        reject(reason)\n    }\n}\n")])])]),n("h2",{attrs:{id:"原生xhr"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#原生xhr"}},[e._v("#")]),e._v(" 原生xhr")]),e._v(" "),n("p",[e._v("get")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("/**\n * 1. 创建xhr对象\n * 2. open 请求方式，url\n * 3. send发送请求\n * 4. 监听xhr状态\n */\nvar xhr = new XHRHttpRequest()\nxhr.open('GET', url)\nxhr.send()\nxhr.onreadystatechange = function() {\n    if(xhr.readyState == 4 && xhr.status == 200) {\n        console.log(xhr.responseText)\n    }\n}\n")])])]),n("p",[e._v("post")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("/**\n * 1. 创建xhr对象\n * 2. open post， url\n * 3. 定义请求头\n * 4. send formData\n * 5， 监听xhr状态\n */\nvar xhrPost = new XMLHttpRequest()\nxhrPost.open('POST', url)\nxhrPost.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')\nxhrPost.send('a=1&b=2&c=3')\nxhrPost.onreadystatechange = function() {\n    if(xhrPost.readyState == 4 && xhrPost.status == 200) {\n        console.log(xhrPost.responseText)\n    }\n}\n")])])]),n("h2",{attrs:{id:"使用promise封装ajax"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用promise封装ajax"}},[e._v("#")]),e._v(" 使用Promise封装ajax")]),e._v(" "),n("div",[n("img",{attrs:{src:t(295)}})]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("\n")])])]),n("h2",{attrs:{id:"深浅拷贝"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#深浅拷贝"}},[e._v("#")]),e._v(" 深浅拷贝")]),e._v(" "),n("p",[n("strong",[e._v("浅拷贝")])]),e._v(" "),n("ul",[n("li",[e._v("for...in 遍历原对象的属性 / Object.keys()")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("const obj = { a: { d: 1 }, b: 2, c: 3 }\nfunction clone(target) {\n    let cloneTarget = {}\n    for(var key in target) { // for(var key of Object.keys(obj))\n        cloneTarget[key] = target[key]\n    }\n    return cloneTarget\n}\nlet obj1 = clone(obj)\nobj.a.d = 'a'\nconsole.log(obj1) // { a: { d: 'a' }, b: 2, c: 3 } 浅拷贝只有一层的对象不变，有子对象会变\n")])])]),n("ul",[n("li",[e._v("Object.entries")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("const obj = { a: { d: 1 }, b: 2, c: 3 }\nfunction clone(target) {\n    let cloneTarget = {}\n    for(var [key, value] of Object.entries(obj)){\n        cloneTarget[key] = value\n    }\n    return cloneTarget\n}\nvar obj1 = clone(obj)\nobj.a.d = 'd'\nconsole.log(obj1) // 变了 { a: { d: 'd' }, b: 2, c: 3 }\n")])])]),n("ul",[n("li",[e._v("Object.assign / ...")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("let obj1 = {\n    a: undefined,\n    b: 1, \n    c: function() { console.log(1) },\n    d: { x: '2' }\n}\nlet obj2 = Object.assign({}, obj1) // 或 { ...obj1 }\nobj1.d.x = '3'\nconsole.log(obj2)\n")])])]),n("ul",[n("li",[e._v("lodash库的_.clone方法")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("var _ = require('lodash')\nvar obj = {\n    a: 1,\n    b: { f: { g: 1 } },\n    c: [1, 2, 3]\n}\nvar obj1 = _.clone(obj)\nconsole.log(obj.b.f === obj1.b.f) // true\n")])])]),n("ul",[n("li",[e._v("数组的concat / slice")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("var c = [2, { age: '12' }]\nvar d = c.concat()\nd[1].age = '100'\nconsole.log(c) // c的值变了 [2, {age: '100'}]\n\nvar a = [1, { name: 'name' }]\nvar b = a.slice()\nb[1].name = '111'\nconsole.log(a) // a的值变了 [1, { name: '111' }]\n")])])]),n("p",[n("strong",[e._v("深拷贝")])]),e._v(" "),n("ul",[n("li",[e._v("JSON.stringify：弊端：忽略value为function, undefind, symbol, 并且在序列化BigInt时会抛出语法错误：TypeError: Do not know how to serialize a BigInt")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("var obj = { a: 1, b: 2, c: 3 }\nvar obj2 = JSON.stringify(obj)\nobj.a = 'a'\nobj2 = JSON.parse(obj2)\nconsole.log(obj, obj2) // {a: 'a', b: 2, c: 3} '{\"a\":1,\"b\":2,\"c\":3}'\n")])])]),n("ul",[n("li",[e._v("lodash库中的_.cloneDeep方法")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("var _ = require('lodash')\nvar obj1 = {\n    a: 1,\n    b: { f: { g: 1 } },\n    c: [1, 2, 3]\n}\nvar obj2 = _.cloneDeep(obj1)\nconsole.log(obj1.b.f === obj2.b.f) // true\n")])])]),n("ul",[n("li",[e._v("递归，for...in循环，如果为属性对象则递归")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("let obj10 = { a: { d: 'd' }, b: [1, 2], c: undefined }\nfunction cloneObj(obj) {\n    let clone = {}\n    for(let key in obj) {\n        if(typeof obj[key] == 'object' && obj[key] != null) {\n            clone[key] = cloneObj(obj[key])\n        } else {\n            clone[key] = obj[key]\n        }\n    }\n    return clone\n}\nlet res = cloneObj(obj10)\nobj10.a.d = 'ddd'\nconsole.log(res) // 不变\n")])])]),n("h2",{attrs:{id:"异步循环打印"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#异步循环打印"}},[e._v("#")]),e._v(" 异步循环打印")]),e._v(" "),n("p",[e._v("用promise、async、await实现")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("var sleep = function(time, i) {\n    return new Promise((resolve, reject) => {\n        setTimeout(() => {\n            resolve(i)\n        }, time)\n    })\n\n}\nvar start = async function() {\n    for(var i = 0; i < 6; i ++) {\n        const result = await sleep(1000, i)\n        console.log('result =', result)\n    }\n}\nstart()\n\n// Promise {<pending>}\n// VM44795:13 result = 0\n// VM44795:13 result = 1\n// VM44795:13 result = 2\n// VM44795:13 result = 3\n// VM44795:13 result = 4\n// VM44795:13 result = 5\n")])])]),n("h2",{attrs:{id:"call、apply、bind"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#call、apply、bind"}},[e._v("#")]),e._v(" call、apply、bind")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://www.nowcoder.com/profile/539362727/codeBookDetail?submissionId=118943499",target:"_blank",rel:"noopener noreferrer"}},[e._v("牛客题解"),n("OutboundLink")],1)]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("function applyThis(f, otarget) {\n    return function() {\n        return f.apply(otarget, arguments)\n    }\n}\nfunction callThis(f, otarget) {\n    return function() {\n        return f.call(otarget, ...arguments)\n    }\n}\nfunction bindThis(f, otarget) {\n    return function() {\n        return f.bind(otarget)\n    }\n}\n")])])]),n("h2",{attrs:{id:"快排"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#快排"}},[e._v("#")]),e._v(" 快排")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("\n")])])]),n("h2",{attrs:{id:"去重"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#去重"}},[e._v("#")]),e._v(" 去重")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// 数组单个元素去重\n/**\n * new Set\n */\nvar a1 = [1,1,3,4,5,5]\nconsole.log([...new Set(a1)])\n/**\n * Array.from(new Set(arr))\n */\nconsole.log(Array.from(new Set(a1)))\n/**\n * for [].push indexOf === -1 \n */\nlet list = []\nfor(var i = 0; i < a1.length; i ++) { // forEach\n    if(list.indexOf(a1[i]) == -1) {\n        list.push(a1[i])\n    }\n}\nconsole.log(list)\n/**\n * reduce [] includes concat\n */\nlet res = a1.reduce((pre, cur) => {\n    if(!pre.includes(cur)) {\n        return pre.concat(cur)\n    } else {\n        return pre\n    }\n}, [])\nconsole.log(res)\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// 数组对象去重\n// 待续……\n")])])]),n("h2",{attrs:{id:"数组扁平化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#数组扁平化"}},[e._v("#")]),e._v(" 数组扁平化")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("var arr = [1,2,[3,4,[5],6],7,8]\n\n// 待续……\n")])])]),n("h2",{attrs:{id:"reduce使用场景-6种"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#reduce使用场景-6种"}},[e._v("#")]),e._v(" reduce使用场景(6种)")]),e._v(" "),n("p",[e._v("求和、求乘积、去重、计算元素在数组中出现的次数、将二维或多维数组转化成一维数组、数组对象里的属性求和")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://dreamlixia.github.io/blog/#/src/%E5%89%8D%E7%AB%AF/JS/ES6%E6%8A%80%E5%B7%A7/reduce.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("本博客前端JS模块有解析"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("求和")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("const arr = [1,2,3,4,5]\nlet sum = arr.reduce((pre, next) => {\n    return pre + next\n}, 0)\nconsole.log(sum) // 15\n")])])]),n("p",[e._v("求乘积")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("const arr = [1,2,3,4,5]\nlet product = arr.reduce((pre, next) => {\n    return pre * next\n})\nconsole.log(product) // 120\n")])])]),n("p",[e._v("去重")]),e._v(" "),n("div",{staticClass:"language-const arr1 = [1,1,2,3,4,5,5,6] extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("const single = arr1.reduce((pre, cur) => {\n    if(!pre.includes(cur)){\n        return pre.concat(cur)\n    } else {\n        return pre\n    }\n}, [])\nconsole.log(single) // [1, 2, 3, 4, 5, 6]\n")])])]),n("p",[e._v("计算元素在数组中出现的次数")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("let nums = arr1.reduce((pre, next) => {\n    if(next in pre) {\n        pre[next] ++\n    } else {\n        pre[next] = 1\n    }\n    return pre\n}, {})\nconsole.log(nums) // {1: 2, 2: 1, 3: 1, 4: 1, 5: 2, 6: 1}\n")])])]),n("p",[e._v("多维数组转化成一维数组")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("const arr2 = [1,2,[3,[4,[5],6]],7]\nlet flat = function(arr) {\n    return arr.reduce((pre, next) => pre.concat(Array.isArray(next) ? flat(next) : next), [])\n}\nconsole.log(flat(arr2)) // [1, 2, 3, 4, 5, 6, 7]\n")])])]),n("p",[e._v("二维数组转化成一维数组")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("const arr3 = [[1,2],[3,4],[5,6]]\nconst result = function(arr) {\n    return arr.reduce((pre, next) => pre.concat(next))\n}\nconsole.log(result(arr3)) // [1, 2, 3, 4, 5, 6]\n")])])]),n("p",[e._v("数组对象里的属性求和")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("let arrObj = [\n    { name: 'name1', age: 10 },\n    { name: 'name2', age: 20 },\n    { name: 'name3', age: 30 },\n    { name: 'name4', age: 40 },\n]\nlet sums = function(arr, param) {\n    return arr.reduce((pre, next) => (pre + next[param]), 0)\n}\nconsole.log(sums(arrObj, 'age')) // 100\n")])])]),n("h2",{attrs:{id:"斐波那契数列"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#斐波那契数列"}},[e._v("#")]),e._v(" 斐波那契数列")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://leetcode.cn/problems/fei-bo-na-qi-shu-lie-lcof/",target:"_blank",rel:"noopener noreferrer"}},[e._v("力扣原题"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。")]),e._v(" "),n("p",[e._v("0,1,1,2,3,5,8,13,21,34,…… 从第三项开始，每一项都等于前两项之和。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("var fib = function(n) {\n    let data = 1000000007;\n    if(n < 2) {\n        return n;\n    } else {\n        let p = 0, q = 0, r = 1;\n        for(var i = 2; i <= n; i ++) {\n            p = q;\n            q = r; \n            r = (p + q) % data;\n        }\n        return r;\n    }\n}\n")])])]),n("h2",{attrs:{id:"杨辉三角"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#杨辉三角"}},[e._v("#")]),e._v(" 杨辉三角")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("\n")])])]),n("p",[e._v("自定义hook")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v(" import React, { useState, useEffect } from 'react'\n\n function usePosition() {\n    const [x, setX] = useState(0)\n    const [y, setY] = useState(0)\n\n    const handleMouseMove = (e) => {\n       const { clientX, clientY } = e\n       setX(clientX)\n       setY(clientY)\n    }\n\n    useEffect(() => {\n        document.addEventListener('mousemove', handleMouseMove)\n        return () => {\n            document.removeEventListener('mousemove', handleMouseMove)\n        }\n    })\n\n    return [\n        {x, y}\n    ]\n }\n\n function Index () {\n    const [ position ] = usePosition()\n    return (\n        <div>\n            <p>x: {position.x} y: {position.y}</p>\n        </div>\n    )\n }\n\n export default Index\n")])])]),n("h2",{attrs:{id:"函数柯里化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#函数柯里化"}},[e._v("#")]),e._v(" 函数柯里化")]),e._v(" "),n("p",[e._v("把接受多个参数的函数变成接受一个单一参数的函数，返回接受其余参数并且返回结果的新函数的技术。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("function currying(fn, ...args) {\n    if(args.length >= fn.length) {\n        return fn(...args)\n    } else {\n        return (...args2) => currying(fn, ...args, ...args2)\n    }\n}\nfunction fun(a,b,c) {\n    return a+b+c\n}\nconst resFun = currying(fun)\nresFun(1)(2)(3)\n")])])]),n("h2",{attrs:{id:"es6类继承"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#es6类继承"}},[e._v("#")]),e._v(" ES6类继承")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("class Animal {\n    head: 1,\n    legs: 4,\n    run: () => {\n        console.log('run')\n    }\n}\nvar Cat extends Animal{}\nCat.hasFather = true\nCat.miaow = () => {\n    console.log('miaow')\n}\n")])])]),n("h2",{attrs:{id:"给定一个整数数组-nums-和一个目标值-target-请你在该数组中找出和为目标值的那-两个-整数-并返回他们的数组下标"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#给定一个整数数组-nums-和一个目标值-target-请你在该数组中找出和为目标值的那-两个-整数-并返回他们的数组下标"}},[e._v("#")]),e._v(" 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("/**\n * @param {number[]} nums\n * @param {number} target\n * @return {number[]}\n */\nvar twoSum = function(nums, target) {\n    for(var i = 0; i < nums.length; i ++){\n        for(var j = i + 1; j < nums.length; j ++){\n            if(nums[i] == target - nums[j]){\n                return [i, j]\n            }\n        }\n    }\n};\n")])])]),n("h2",{attrs:{id:"手写promise-all"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#手写promise-all"}},[e._v("#")]),e._v(" 手写Promise.all")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("\n")])])]),e._v(" "),n("comment-comment")],1)}),[],!1,null,null,null);n.default=r.exports}}]);