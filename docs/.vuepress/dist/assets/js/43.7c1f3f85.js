(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{466:function(t,a,_){"use strict";_.r(a);var s=_(27),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,_=t._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h3",{attrs:{id:"dns-prefetch"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#dns-prefetch"}},[t._v("#")]),t._v(" DNS-prefetch:")]),t._v(" "),_("h2",{attrs:{id:"_1-dns"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-dns"}},[t._v("#")]),t._v(" 1.DNS")]),t._v(" "),_("p",[t._v("Domain Name Systerm, 域名系统，作为域名和IP地址相互映射的一个分布式数据库。")]),t._v(" "),_("h2",{attrs:{id:"_2-dns-prefetching"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-dns-prefetching"}},[t._v("#")]),t._v(" 2.DNS-Prefetching")]),t._v(" "),_("p",[t._v("根据浏览器自定义规则，提前解析可能用到的域名，加快忘网站的访问速度。即提前解析域名，避免延迟。")]),t._v(" "),_("h4",{attrs:{id:"使用方式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#使用方式"}},[t._v("#")]),t._v(" 使用方式")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('<link rel="dns-prefetch" href="wwww.test.com">\n默认加载条件：所有的a标签都会自动去启动DNS Prefetching，但在https下不起作用，解决：强制启动\n<meta http-equiv="x-dns-prefetch-control" conteny="on">\n')])])]),_("h4",{attrs:{id:"扩展"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#扩展"}},[t._v("#")]),t._v(" 扩展")]),t._v(" "),_("h2",{attrs:{id:"_3-数据库"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-数据库"}},[t._v("#")]),t._v(" 3.数据库")]),t._v(" "),_("ol",[_("li",[t._v("数据库的类型：")])]),t._v(" "),_("ul",[_("li",[t._v("关系数据库，有【MySQL、MariaDB】；")]),t._v(" "),_("li",[t._v("非关系型数据库，【Cassandra、MongoDB】；")]),t._v(" "),_("li",[t._v("键值【key-value】数据库，有【Dynamo、LevelDB】。")])]),t._v(" "),_("ol",{attrs:{start:"2"}},[_("li",[t._v("数据库模型：")])]),t._v(" "),_("ul",[_("li",[t._v("对象模型、层次模型（轻量级数据访问协议）、网状模型（大型数据储存）、关系模型、面向对象模型、半结构化模型、平面模型（表格模型，一般在形式上是一个二维数组。如表格模型数据Excel)。")])]),t._v(" "),_("ol",{attrs:{start:"3"}},[_("li",[t._v("数据库的架构：")])]),t._v(" "),_("ul",[_("li",[t._v("可以大致区分为三个概括层次：内层、概念层和外层。")])]),t._v(" "),_("ol",{attrs:{start:"4"}},[_("li",[t._v("web下的性能优化（网络方向）")])]),t._v(" "),_("ul",[_("li",[t._v("DNS解析过程的优化")]),t._v(" "),_("li",[t._v("TCP传输阶段优化")])]),t._v(" "),_("blockquote",[_("p",[t._v("这个前端方面好像能做的有限, 我们都知道 http协议 是基于 tcp的;\n升级http协议版本可以考虑下, 比如把 http/1.0 -> http/1.1 -> http/2;")])]),t._v(" "),_("h2",{attrs:{id:"_4-http2-的优势"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-http2-的优势"}},[t._v("#")]),t._v(" 4.http2 的优势")]),t._v(" "),_("ol",[_("li",[t._v("多路复用: 同一个tcp连接传输多个资源")])]),t._v(" "),_("ul",[_("li",[t._v("这样可以突破统一域名下只允许有限个tcp同时连接")]),t._v(" "),_("li",[t._v("这样http1.1所做的减少请求数优化就没有太大必要了")]),t._v(" "),_("li",[t._v("如多张小图合成一张大图(雪碧图),合并js和css文件")])]),t._v(" "),_("ol",{attrs:{start:"2"}},[_("li",[t._v("报文头压缩和二进制编码: 减少传输体积")])]),t._v(" "),_("ul",[_("li",[t._v("http1 中第一次请求有完整的http报文头部,第二次请求的也是;")]),t._v(" "),_("li",[t._v("http2 中第一次请求有完整的http报文头部,第二次请求只会携带 path 字段;")]),t._v(" "),_("li",[t._v("这样就大大减少了发送的量。这个的实现要求客户端和服务同时维护一个报文头表。")])]),t._v(" "),_("ol",{attrs:{start:"3"}},[_("li",[t._v("Server Push\nhttp2可以让服务先把其它很可能客户端会请求的资源(比如图片)先push发给你,\n不用等到请求的时候再发送,这样可以提高页面整体的加载速度")])]),t._v(" "),_("ul",[_("li",[t._v("http 请求响应阶段优化\n"),_("ul",[_("li",[t._v("为了让数据包传输的更快, 我们可以从两个方面入手: 请求的数据包大小(服务器), 请求数据包的频率(客户端)")]),t._v(" "),_("li",[t._v("打包工具了(比如webpack, rollup, glup 等)")])])])]),t._v(" "),_("p",[t._v("待续")]),t._v(" "),_("comment-comment")],1)}),[],!1,null,null,null);a.default=e.exports}}]);