(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{419:function(t,n,e){"use strict";e.r(n);var s=e(56),l=Object(s.a)({},(function(){var t=this.$createElement,n=this._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[n("h4",{attrs:{id:"字符串翻转"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#字符串翻转"}},[this._v("#")]),this._v(" 字符串翻转")]),this._v(" "),n("hr"),this._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v("function reverseStr(str) {\n    // 字符串转化为数组\n    let list = str.split('')\n    let len = list.length\n    // 定义左右指针，左从下标0开始，右从最后一位下标开始\n    let left_p = 0\n    let right_p = len - 1\n    // 定义条件\n    while (left_p < right_p) {\n        // 定义一个容器去存放第一个要替换位置的元素\n        let tem = list[left_p]\n        // 左替换为右\n        list[left_p] = list[right_p]\n        // 右替换为左\n        list[right_p] = tem\n        // 左指针递增\n        left_p++\n        // 右指针递减\n        right_p--\n    }\n    // 转回字符串\n    return list.join('')\n}\n\nlet str = '题法算转翻串符字道一是这'\n\nconsole.log(reverseStr(str))\n\n// 这是一道字符串翻转算法题\n")])])])])}),[],!1,null,null,null);n.default=l.exports}}]);