(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{450:function(a,t,e){"use strict";e.r(t);var n=e(27),s=Object(n.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h3",{attrs:{id:"为什么vue的data属性是一个函数而不是对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么vue的data属性是一个函数而不是对象"}},[a._v("#")]),a._v(" 为什么Vue的data属性是一个函数而不是对象")]),a._v(" "),e("hr"),a._v(" "),e("h4",{attrs:{id:"实例和组件定义的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实例和组件定义的区别"}},[a._v("#")]),a._v(" 实例和组件定义的区别")]),a._v(" "),e("ul",[e("li",[a._v("实例定义既可以是对象，也可以是函数")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("const app = new Vue({\n    el: \"#app\",\n    // 对象格式\n    data: {\n        foo: 'foo'\n    },\n    // 函数格式\n    data () {\n        return {\n            foo: 'foo'\n        }\n    }\n})\n")])])]),e("ul",[e("li",[a._v("组件定义只能是函数")])]),a._v(" "),e("p",[a._v("如果为组件的data直接定一个对象")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("Vue.component({\n    template: `<div>组件</div>`,\n    data: {\n        foo: 'foo'\n    }\n})\n")])])]),e("p",[a._v("会看到报错信息：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('[Vue warn]: The "data" option should be a function that returns a per-instance value in component defintions.\n')])])]),e("h4",{attrs:{id:"原因"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#原因"}},[a._v("#")]),a._v(" 原因：")]),a._v(" "),e("p",[a._v("根实例是单例，不会产生数据污染的情况。\n如果一个组件有多个Vue实例，就会造成多个组件实例对象共用一个data对象（共用一个内存地址，对象A的值发生改变，同样对象B的值也发生改变），产生数据污染，而使用函数，初始化data时，就会返回全新的data对象。")]),a._v(" "),e("comment-comment")],1)}),[],!1,null,null,null);t.default=s.exports}}]);