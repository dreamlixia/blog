(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{493:function(t,e,n){"use strict";n.r(e);var r=n(27),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h3",{attrs:{id:"解决浏览器缓存-url添加时间戳"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解决浏览器缓存-url添加时间戳"}},[t._v("#")]),t._v(" 解决浏览器缓存：URL添加时间戳")]),t._v(" "),n("hr"),t._v(" "),n("p",[t._v("在开发过程中，需要给html的静态资源加上一个随机数，避免版本迭代的时候使用本地缓存文件（如果地址一样，浏览器会认为是同一个请求），可以给css、js文件自动加上一个时间戳。")]),t._v(" "),n("p",[t._v("html")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('<fieldset>\n    <legend>给url添加时间戳</legend>\n    <img id="bgimg" alt="">\n </fieldset>\n')])])]),n("p",[t._v("js")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("    // 给html的img标签添加src属性\n    let cacheImg = document.querySelector('[id=\"bgimg\"]')\n    cacheImg.setAttribute('src', timeStamp('bicycle.gif'))\n\n    // 解决项目更换图片浏览器缓存问题\n    function timeStamp(url) {\n      let currentTime_stamp = new Date().getTime()\n      if (url.indexOf('?') > -1) {\n        url = url.substr(0, url.indexOf(\"?\")) + \"?timestamp=\" + currentTime_stamp\n        // url = url + '&timestamp=' + currentTime_stamp\n      } else {\n        url = url + \"?timestamp=\" + currentTime_stamp\n      }\n      return url\n    }\n\n    var Url = window.location.href;\n    // 网页URL添加时间戳\n    // window.history.pushState 不刷新页面，但是改变页面的url地址\n    window.history.pushState({}, 0, timeStamp(Url));\n    console.log(window.location.href);\n    // https://www.jianshu.com/p/bf16cd4ae663?timestamp=1655433408419\n")])])]),t._v(" "),n("comment-comment")],1)}),[],!1,null,null,null);e.default=s.exports}}]);