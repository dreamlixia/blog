(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{449:function(r,a,n){"use strict";n.r(a);var e=n(27),t=Object(e.a)({},(function(){var r=this,a=r.$createElement,n=r._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[n("h3",{attrs:{id:"数组去重"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#数组去重"}},[r._v("#")]),r._v(" 数组去重")]),r._v(" "),n("hr"),r._v(" "),n("h4",{attrs:{id:"_1-new-set"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-new-set"}},[r._v("#")]),r._v(" 1. ...new Set")]),r._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[r._v("const arr = [1, 1, 2, 3, 3, 4, 4, 5, 5];\n\nconst setArr = (arr) => [...new Set(arr)]\n\nconsole.log(setArr(arr))\n\n// [1, 2, 3, 4, 5]\n")])])]),n("h4",{attrs:{id:"_2-array-from-new-set"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-array-from-new-set"}},[r._v("#")]),r._v(" 2. Array.from(new Set)")]),r._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[r._v("const uniq = (arr) => {\n    return Array.from(new Set(arr))\n}\n\nconst arr = [null, undefined, false, true, true, 1, 1, 2, 3, 3, 4, NaN, null, NaN]\n\nconsole.log(uniq(arr))\n\n// [null, undefined, false, true, 1, 2, 3, 4, NaN]\n")])])]),n("blockquote",[n("h5",{attrs:{id:"附-array-from-把伪数组转化成数组"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#附-array-from-把伪数组转化成数组"}},[r._v("#")]),r._v(" 附：Array.from(): 把伪数组转化成数组")]),r._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[r._v("const uniqObj = {\n   0: 'React',\n   1: 'Vue',\n   2: 'Angular',\n   3: 'Node.js',\n   'length': 4\n}\n\nconst uniqArr = (arr) => Array.from(arr)\n\nconsole.log(uniqArr(uniqObj))\n\n// [\"React\", \"Vue\", \"Angular\", \"Node.js\"]\n")])])])]),r._v(" "),n("h4",{attrs:{id:"_3-indexof"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-indexof"}},[r._v("#")]),r._v(" 3. indexOf")]),r._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[r._v("function uniqArrList (arr) {\n    let list = []\n    arr.forEach((item, i, arr) => {\n        if(list.indexOf(item) === -1){\n            list.push(item)\n        }\n    })\n    return list\n}\n\nconst arr = ['a', 'a', 'b', 'c', 11, 22, 45, 11, 99, 80, 80, 'ok']\n\nconsole.log(uniqArrList(arr))\n\n// [\"a\", \"b\", \"c\", 11, 22, 45, 99, 80, \"ok\"]\n")])])]),n("h4",{attrs:{id:"_4-reduce"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-reduce"}},[r._v("#")]),r._v(" 4. reduce")]),r._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[r._v("const arr = [null, undefined, false, true, true, 1, 1, 2, 3, 3, 4, NaN, null, NaN]\n\nlet list = arr.reduce((pre, cur)=> {\n    if(!pre.includes(cur)){\n        return pre.concat(cur)\n    } else {\n        return pre\n    }\n}, [])\n\nconsole.log(list)\n\n// [null, undefined, false, true, 1, 2, 3, 4, NaN]\n")])])]),r._v(" "),n("comment-comment")],1)}),[],!1,null,null,null);a.default=t.exports}}]);