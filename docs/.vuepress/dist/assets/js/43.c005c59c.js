(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{460:function(v,t,s){"use strict";s.r(t);var a=s(27),e=Object(a.a)({},(function(){var v=this,t=v.$createElement,s=v._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[s("h3",{attrs:{id:"v-if、v-show、v-html原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v-if、v-show、v-html原理"}},[v._v("#")]),v._v(" v-if、v-show、v-html原理")]),v._v(" "),s("hr"),v._v(" "),s("h4",{attrs:{id:"v-html"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v-html"}},[v._v("#")]),v._v(" v-html")]),v._v(" "),s("p",[v._v("更新元素的innerHTML。按普通HTML插入，不会进行Vue模板编译。")]),v._v(" "),s("blockquote",[s("p",[v._v("1、coped样式不会应中在v-html内部, 因为那部分HTML不会进行Vue模板编译；")]),v._v(" "),s("p",[v._v("2、在网上站动态渲染HTML是非常危险的，容易导致XSS攻击。只在可信内容上使用v-html，永不用在提交内容上。")])]),v._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[v._v('<div v-html="html"></div>\n')])])]),s("h4",{attrs:{id:"v-show"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v-show"}},[v._v("#")]),v._v(" v-show")]),v._v(" "),s("p",[v._v("条件渲染，display: none，会生成vnode，render的时候会渲染真实节点，只是在render的过程中会修改属性display")]),v._v(" "),s("h4",{attrs:{id:"v-if"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v-if"}},[v._v("#")]),v._v(" v-if")]),v._v(" "),s("p",[v._v("根据表达式值的truthiness来有条件渲染元素。在切换元素及它他的数据绑定/组件被销毁或重建。")]),v._v(" "),s("blockquote",[s("p",[v._v("当v-if和v-for一起使用，v-for的优先级高。")])]),v._v(" "),s("h4",{attrs:{id:"v-if和v-show的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v-if和v-show的区别"}},[v._v("#")]),v._v(" v-if和v-show的区别")]),v._v(" "),s("ol",[s("li",[v._v("v-if是dom操作，添加或删除dom元素，有局部编译/卸载的过程，v-show是改变css的display；")]),v._v(" "),s("li",[v._v("v-if用于运行条件不经常改变的场景，v-show适用于频繁变化；")]),v._v(" "),s("li",[v._v("v-if是惰性的，第一次如果不为真不进行编译，只有当条件第一次为真时才开始局部编译，v-show在任何条件下都会被编译，然后被缓存，dom元素保留；")]),v._v(" "),s("li",[v._v("v-if有更高的切换消耗，v-show有更高的初始渲染消耗；")])]),v._v(" "),s("comment-comment")],1)}),[],!1,null,null,null);t.default=e.exports}}]);