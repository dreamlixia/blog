(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{323:function(e,n,t){"use strict";t.r(n);var l=t(14),i=Object(l.a)({},(function(){var e=this,n=e._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"http-connection-一次链接-多次请求"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#http-connection-一次链接-多次请求"}},[e._v("#")]),e._v(" HTTP Connection 一次链接，多次请求")]),e._v(" "),n("ul",[n("li",[e._v("HTTP的请求是在TCP连接上发送的")]),e._v(" "),n("li",[e._v("TCP的链接又分为长链接、短链接")]),e._v(" "),n("li",[e._v("HTTP的请求要先创建一个TCP链接")]),e._v(" "),n("li",[e._v("然后在TCP的链接上将HTTP请求发送并返回")]),e._v(" "),n("li",[e._v("这个时候一次HTTP请求就结束了，浏览器和服务端会考虑是否关闭这个TCP链接")]),e._v(" "),n("li",[e._v("如果不关闭，TCP链接就会一直开着，会有一定的消耗")]),e._v(" "),n("li",[e._v("如果接下来还有请求，就可以在这个TCP连接上发送，就不需要进行三次握手去创建链接的消耗")]),e._v(" "),n("li",[e._v("如果直接关闭，就代表下次请求还要去重新创建链接，会有一个网络延迟的开销，但会减少客户端和服务端链接的并发数")]),e._v(" "),n("li",[e._v("但实际使用中，每次创建并关闭的策略会影响效率，实际网站的并发量比较大，这样实际的开销会远远超过保持长链接的策略")]),e._v(" "),n("li",[e._v("长链接可以设置超时功能，如果一段时间没有请求的话就自动关闭，所以保持长链接才是最好的策略")])]),e._v(" "),n("p",[n("strong",[e._v("如何保证浏览器创建的是长链接而非短链接呢？")])]),e._v(" "),n("ul",[n("li",[e._v("在network点击任意一个链接，Response Headers内一般有一个Connection: keep-alive")]),e._v(" "),n("li",[e._v("这就代表链接是被保持的，不会一下关闭")]),e._v(" "),n("li",[e._v("Request Headers内一般也有Connection: keep-alive")]),e._v(" "),n("li",[e._v("此header的含义是当client和server通信时对于长链接如何进行处理")]),e._v(" "),n("li",[e._v("在http1.1中,client和server都是默认对方支持长链接的")]),e._v(" "),n("li",[e._v("如果client使用http1.1协议，但又不希望使用长链接，则需要在header中指明connection的值为close")])]),e._v(" "),n("blockquote",[n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("   const http = require('http');\n   const fs = require('fs');\n\n   http.createServer((req, res) => {\n       console.log('req come: ', req.url);\n       if(req.url === '/') {\n           const html = fs.readFileSync('test.html', 'utf8');\n           res.writeHead(200, {\n               'Content-Type': 'text/html',\n               'Connection': 'close' // 添加这行\n           });\n           res.end(html);\n       } else {\n           // 此处显示图片\n           const img = fs.readFileSync('test.jpg');\n           res.writeHead(200, {\n               'Content-Type': 'image/jpg',\n               'Connection': 'close' // 添加这行\n           });\n           res.end(img);\n       }\n   }).listen(8000, () => {\n       console.log('server is running on port 8000');\n   });\n\n")])])])]),e._v(" "),n("ul",[n("li",[e._v("我们在开发服务器时，可以合理利用这个Connection: Keep-Alive")]),e._v(" "),n("li",[e._v("可以给当前TCP链接设置一个自动关闭的时间，这是服务端的设置和HTTP协议没有太大关系")]),e._v(" "),n("li",[e._v("在HTTP2版本中, 有了一个信道复用的概念, 在TCP链接上可以并发的发送HTTP请求")]),e._v(" "),n("li",[e._v("这表示着我们在访问网站时，可以使用一个TCP链接就可以了，这样就可以极大的降低开销、提升速度")]),e._v(" "),n("li",[e._v("可以打开谷歌网站查看HTTP2版本的使用，在同域下基本都是使用同一个Connection ID")])]),e._v(" "),n("comment-comment")],1)}),[],!1,null,null,null);n.default=i.exports}}]);