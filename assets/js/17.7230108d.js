(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{416:function(t,r,n){"use strict";n.r(r);var e=n(56),s=Object(e.a)({},(function(){var t=this.$createElement,r=this._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[r("h4",{attrs:{id:"js快排"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#js快排"}},[this._v("#")]),this._v(" js快排")]),this._v(" "),r("hr"),this._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[this._v("function sort(arr) {\n    // 临界条件\n    if (arr.length <= 1) return arr\n    // 取基准点\n    let index = Math.floor(arr.length / 2)\n    // 取基准元素\n    let cur = arr.splice(index, 1)[0]\n    // 定义两个数组\n    let left = []\n    let right = []\n    // 循环\n    for (var i = 0; i < arr.length; i++) {\n        // 元素小于基准元素，追加到left[]\n        // 元素大于基准元素，追加到right[]\n        if (arr[i] < cur) {\n            left.push(arr[i])\n        } else {\n            right.push(arr[i])\n        }\n    }\n    // 递归\n    return sort(left).concat([cur], sort(right))\n}\n\nvar arr = [3, 10, 4, 5, 6, 23, 50, 12, 44, 9]\n\nconsole.log(sort(arr))\n\n//[3, 4, 5, 6, 9, 10, 12, 23, 44, 50]\n")])])])])}),[],!1,null,null,null);r.default=s.exports}}]);