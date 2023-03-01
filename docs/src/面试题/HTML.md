---
title: html
---

html语义化的理解
---
1. html语义化就是让页面的内容结构化，便于对浏览器、搜索引擎解析；
2. 在没有样式CSS的情况下也以一种文档格式显示，并且是容易阅读的；
3. 搜索引擎的爬虫依赖于标签来确定上下文和各个关键字的权重，有利于SEO；
4. 使阅读源代码的人更容易将网站分块，便于维护理解。
#### html语义化常见的标签
\<header\> \<nav\> \<aside\> \<article\> \<section\> \<main\> \<footer\> \<small\> \<strong\> …… 等

\<iframe\>标签有哪些缺点？为什么要尽量少用\<iframe\>标签
---
1. iframe会阻塞页面的onload事件；
2. iframe和主页面共享链接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载，会产生很多页面，不容易管理；
3. 如果框架个数多的话，可能会出现上下、左右滚动条，用户体验差；
4. 代码复杂，无法被一些搜索引擎索引到，这一点很关键，现在的搜索引擎爬虫还不能很好的处理iframe中的内容，所以使用iframe不利于搜索引擎优化（SEO）；
5. 很多的移动设备无法完全显示框架，设备兼容性差；
6. iframe框架页面会增加服务器的http请求，对于大型网站是不可取的。

Label的作用是什么？怎么用的
---
label标签来定义表单控件间的关系，当用户选择该标签时，浏览器会自动将焦点转移到和标签相关的表单控件上。
```
<label for="number">号码：</label>
<input type="text" name="number" id="number" />
```

\<meta\>标签的viewport的作用和原理是什么
---
作用：让viewport的宽度等于设备的宽度，同时不允许手动进行缩放。

原理：移动端浏览器通常会在一个比移动端屏幕更宽的虚拟窗口中渲染页面，这个虚拟窗口就是viewport，目的是正常展示没有做移动端适配的页面，让他们完整的展示给用户。

属性值：
> width、height、initial-scale(页面初始缩放值)、minimum-scale(允许用户最小缩放值)、maximum-scale(允许用户最大缩放值)、user-scalable(是否允许用户进行缩放)，属性值'no'或'yes'
>
>```
><meta name='viewport' 
>content='width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no'>
>```

html5的新特性
---
1. 绘画canvas：html5的一个新元素，使用javascript在网页上绘制图形；
2. video和audio：用于视频和音频的播放；
3. 本地离线存储：localStorage长期存储数据，浏览器关闭后数据不丢失，sessionStorage的数据在浏览器关闭后自动删除；
4. 新的结构标签：语义化更好的内容元素，article、footer、header、nav等；
5. 增强表单：input的type属性值新增calendar、date、time、email、url等；
6. 新的技术：webworker、websocket、Geolocation。

本地存储cookie、localStorage、sessionStorage的区别及优缺点
---
cookie：是服务端发给客户端的特殊信息，以文本形式存储在客户端，每次请求都会带上cookie

cookie的缺点：
1. 大小受限，单个cookie大小不超过4kb；
2. 用户可以禁用cookie，使功能受限；
3. 安全性较低，有些状态不能保存在客户端；
4. 每次访问都要传送cookie给服务器，浪费带宽；
5. cookie数据有路径（path）的概念，可以限制cookie只属于某个路径下；

区别：

对比项目|cookie|localStorage|sessionStorage|
:-:|:-:|:-:|:-:|
数据存储时间|可设置失效时间，浏览器关闭不会清除，保存在硬盘中；如果不设置过期时间，保存在内存中，浏览器关闭后消失。|永久，除非主动删除，否则不会消失|仅当前会话|
容量|<=4kb|<=5mb|<=5mb|
特点|随请求携带，可被服务端随意修改|保存在客户端，不与服务端进行交互|同localStorage|
保存格式|只能是字符串类型，对于复杂的json可以进行stringify和parse处理|以key value形式的字符串存储|同localStorage|

前端页面分为哪三层
---
结构层、表示层、行为层

结构层：页面的骨架，由HTML和XHTML标记语言创建，用于搭建文档的结构。

表示层：页面的样式，由CSS（层叠样式表）负责创建，用于设置文档的呈现效果。

行为层（behaviorlayer）：页面的行为，由javascript语言创建，用于实现文档的行为。

前端需要注意哪些SEO
---
1. 合理的title、description、keywords，搜索对这三项的权重逐个减小；
2. 语义化的html代码，符合W3C规范，语义化代码让搜索引擎容易理解网页；
3. 重要内容html放在最前，搜索引擎抓取html的顺序是从上到下，有的搜索引擎对抓取的长度有限制，保证重要的内容一定会被抓取；
4. 重要内容不要用js输出，爬虫不会执行js获取内容；
5. 少用iframe，搜索引擎不会抓取iframe中的内容；
6. 非装饰性图片要用alt；
7. 提高网站速度，网站速度是搜索引擎排序的一个重要指标。

介绍下你对浏览器内核的理解
---

主流浏览器|浏览器内核
:-:|:-:|
IE|trident|
Chrome|webkit/bink|
firefox|Gecko|
Opera|presto|
Safari|webkit|
主要分为两部分：渲染引擎(layout engineer或Rendering Engine)和JS引擎。

渲染引擎： 负责取得网页的内容（HTML、XML、图像等）、整理讯息（列入加入CSS等），以及计算网页的显示方式，然后会输出至显示器或打印机。浏览器的内核的不同对于网页的语法解释会有不同，所以算然的效果也不相同，所有网页浏览器、电子邮件客户端以及其他需要编辑、显示网络内容的应用程序都需要内核。

JS引擎规则：解析和执行javascript来实现网页的动态效果。

最开始渲染引擎和JS引擎并没有区分的很明确， 后来JS引擎越来越独立，内核就倾向于只指渲染引擎。

html标签中的src和href有什么区别
---
href是超文本引用，它是指向资源位置，建立与目标文件的联系；

src是把资源下载到页面中

浏览器解析herf不会阻塞对文档的处理（这是官方建议使用link而不是@import的原因），src会阻塞对文档的处理。

html渲染页面的过程
---
1. 解析html文件，创建dom树；
2. 解析css，形成css对象模型；
3. 将css和DOM合并，构建渲染树；
4. 布局和绘制。

重绘：改变不影响元素在网页中的位置的元素样式

重排（回流）：渲染绘制，根据计算好的信息绘制整个页面，渲染出最终的页面。

重绘不一定重排，重排必然会导致重绘。

