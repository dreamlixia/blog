(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{337:function(t,a,r){"use strict";r.r(a);var s=r(14),e=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"复制到剪贴板"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#复制到剪贴板"}},[t._v("#")]),t._v(" 复制到剪贴板")]),t._v(" "),a("hr"),t._v(" "),a("h4",{attrs:{id:"一、web应用程序中-使用window-navigator下的方法复制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、web应用程序中-使用window-navigator下的方法复制"}},[t._v("#")]),t._v(" 一、web应用程序中，使用window.navigator下的方法复制")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("const copyToClipboard = (text) => \nnavigator.clipboard?.writeText && navigator.clipboard.writeText(text)\n\nconsole.log(copyToClipboard('Hello World'))\n")])])]),a("p",[t._v("根据caniuse，此方法针对93%以上的人群有效。局限性：必须检查用户的浏览器是否支持此API。")]),t._v(" "),a("h4",{attrs:{id:"二、clipboard-js-开源项目-地址-https-github-com-zenorocha-clipboard-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、clipboard-js-开源项目-地址-https-github-com-zenorocha-clipboard-js"}},[t._v("#")]),t._v(" 二、clipboard.js，开源项目，地址："),a("a",{attrs:{href:"https://github.com/zenorocha/clipboard.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/zenorocha/clipboard.js"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("使用方法:")]),t._v(" "),a("ol",[a("li",[t._v("引入")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<script type="text/script" src="./public/js/clipboard.min.js"><\/script>\n')])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("点击复制")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<a data-clipboard-text="待复制内容" class="copy" target="_blank">点击复制</a>\n')])])]),a("p",[t._v("也可以这样")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<input type="text" id="url" value="www.cnblogs.com" name="title"/>\n<input type="submit" data-clipboard-text="#url" class="btn primary btn2" value="点击复制" id="copy"/>\n')])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("初始化组件")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("<script>\nvar clipboard = new Clipboard('.copy') // 或者'#id'\n\nclipboard.on('success', function(e){\n    alert('复制成功')\n})\n\nclipboard.on('error', function(e){\n    console.log('e')\n})\n\n<\/script>\n")])])]),t._v(" "),a("comment-comment")],1)}),[],!1,null,null,null);a.default=e.exports}}]);