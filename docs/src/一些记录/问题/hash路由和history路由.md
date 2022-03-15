---
title : hash路由和history路由的区别
---

### hash路由和history路由的区别
---

1.hash路由在地址栏URL上有#，而history路由没有会好看一点

2.我们进行回车刷新操作，hash路由会加载到地址栏对应的页面，而history路由一般就404报错了（刷新是网络请求，没有后端准备时会报错）。

3.hash路由支持低版本的浏览器，而history路由是HTML5新增的API。

4.hash的特点在于它虽然出现在了URL中，但是不包括在http请求中，所以对于后端是没有一点影响的，所以改变hash不会重新加载页面，所以这也是单页面应用的必备。

5.history运用了浏览器的历史记录栈，之前有back,forward,go方法，之后在HTML5中新增了pushState（）和replaceState（）方法（需要特定浏览器的支持），它们提供了对历史记录进行修改的功能，不过在进行修改时，虽然改变了当前的URL，但是浏览器不会马上向后端发送请求。