(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{470:function(t,e,n){"use strict";n.r(e);var a=n(27),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"_1-在老版本的react中-为什么写jsx文件要默认引入react"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-在老版本的react中-为什么写jsx文件要默认引入react"}},[t._v("#")]),t._v(" 1.在老版本的React中，为什么写jsx文件要默认引入react？")]),t._v(" "),n("p",[t._v("因为jsx在被babel编译后，jsx会变成React.createElement的形式。")]),t._v(" "),n("h2",{attrs:{id:"_2-使用-react-fragment-解决多组件并列问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-使用-react-fragment-解决多组件并列问题"}},[t._v("#")]),t._v(" 2.使用 <React.Fragment> 解决多组件并列问题")]),t._v(" "),n("p",[t._v("比如自定义组件时常常有需要多个组件并列显示的场景，而 render 中规定必须有一个根节点存在，否则报错，使用 <div> 包裹的话会增加页面渲染的负担，于是 React 16 版本中提供了两种方法：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("// 一、\nimport React from 'react';\n\nexport default function () {\n    return [\n        <Component1 />\n        <Component2 />\n        <Component3 />\n    ]\n}\n// 二、\nimport React from 'react';\n\nexport default function () {\n    return <React.Fragment>\n        <Component1 />\n        <Component2 />\n        <Component3 />\n    </React.Fragment/>\n}\n")])])]),n("p",[n("strong",[t._v("React.Fragment标签做为不可见的包裹元素, 简写为 <></> 。")])]),t._v(" "),n("comment-comment")],1)}),[],!1,null,null,null);e.default=r.exports}}]);