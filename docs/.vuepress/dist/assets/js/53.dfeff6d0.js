(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{345:function(n,r,e){"use strict";e.r(r);var t=e(14),s=Object(t.a)({},(function(){var n=this,r=n._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[r("h2",{attrs:{id:"函数柯里化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#函数柯里化"}},[n._v("#")]),n._v(" 函数柯里化")]),n._v(" "),r("p",[n._v("把接受多个参数的函数变成接受一个单一参数的函数，并且返回接受其余参数且返回结果的新函数的技术。")]),n._v(" "),r("blockquote",[r("p",[n._v("通俗的讲，就是用闭包把参数保存起来，当参数数量足够了，就开始执行函数。")])]),n._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[n._v("function getSum(x, y) {\n    return x + y\n}\nfunction currying(x) {\n    return function (y) {\n        return x + y\n    }\n}\ngetSum(1, 2)\ncurrying(1)(2)\n")])])]),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[n._v("function fun(a, b, c) {\n    return a+b+c\n}\n// 判断当前函数传入的参数是否大于或等于fun需要的参数，如果是，则返回fun，如果参数数量不够，返回一个闭包，把数暂存起来，重新返回currying函数\nfunction currying(fn, ...args) {\n    if(args.length >= fn.length) {\n        return fn(...args)\n    } else {\n        return (...args2) => currying(fn, ...args, ...args2)\n    }\n}\nconst resFun = currying(fun)\nresFun(1)(2)(3)\nresFun(1,2)(3)\nresFun(1,2,3)\n// 6\n")])])]),r("p",[n._v("好处，可以减少代码冗余，如下例子，用正则验证一个字符串是否符合规定")]),n._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[n._v("// 一般写法：\nconst reg = function(reg, str) {\n    return reg.test(str)\n}\nconst res1 = reg(/\\s/g, 'Hello World')\nconst res12 = reg(/\\s/g, 'HelloWorld')\nconsole.log(res1) // true\nconsole.log(res2) // false\n")])])]),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[n._v("// 柯里化\nconst reg = function(reg) {\n    return function(str) {\n        return reg.test(str)\n    }\n}\nconst regFun = reg(/\\s/g)\nconst res3 = regFun('Hello World')\nconst res4 = regFun('HelloWorld')\nconsole.log(res3) // true\nconsole.log(res4) // false\n")])])]),r("p",[n._v("这样就不用每次都传正则进去，减少代码量。")]),n._v(" "),r("comment-comment")],1)}),[],!1,null,null,null);r.default=s.exports}}]);