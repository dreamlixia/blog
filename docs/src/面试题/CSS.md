------ CSS ------
---
CSS引入的方式有哪些，link和@import的区别是什么
---
1. \<style\>: 内嵌；
2. link: 外链，支持使用javascript改变样式，无兼容性；
3. @import: 导入独立的css文件，不支持使用javasceipt改变样式，在CSS2.1以下浏览器不支持。
```
<head>
    <meta charset="utf-8">
    <title>title</title>
    <style type="text/css">
        /* 一、这里添加css样式 */
        /* 三、*/
        @import './index.css'
    </style>
    /* 二、*/
    <link href="./index.css" rel="stylesheet" type="text/css" />
</head>
```