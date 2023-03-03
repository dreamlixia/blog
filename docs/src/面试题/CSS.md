---
titile: CSS
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

Less Sass Scss Stylus（css预处理器）
---
[转载来自原文：https://blog.csdn.net/Rock_clip/article/details/120996388](https://blog.csdn.net/Rock_clip/article/details/120996388)

#### Scss：

预处理器（例如，Less、Sass、 Stylus）是用来把Sass或Less预编译成CSS的工具，増强了CSS代码的复用性。它有层级、 mixin、变量、循环、函数等，具有很方便的UI组件模块化开发能力，能极大地提高工作效率。

后处理器（如 PostCSS）通常被视为在完成的样式表中根据CSS规范处理CSS，让其更有效。目前最常做的是给CSS属性添加浏览器私有前缀，解决跨浏览器兼容性的问题。

scss是Sass语言中一套语法的拓展名。scss的特征是可以将CSS当作函数编写，可以定义变量，可以嵌套定义，可以使用语句等。

安装使用：

（1）通过npm安装css-loader、 node-loader、sass- loader等加载器模块。

（2）在 webpack .config. js配置文件中定义Sass加载器。

#### Less和Sass区别：
1. 编译环境：Sass是在服务端上面处理的，之前是Ruby，现在dart-sass或node-sass，但是less在编译时需要引入less.js来处理less代码输出css到浏览器上，也可以在开发服务器上将less语法编译成css文件，输出到生产包目录，也有在线编译地址。
2. 变量符：
less是@，sass是$
```
//Less-变量定义
@color: #008c8c; 
#footer {
  border: 1px solid @color; 
}
//scss-变量定义
$color: #008c8c;
#footer {
  border: 1px solid $color; 
}
```
3. 输出设置：less没有输出设置,而sass有四种选项
- nested：嵌套缩进的css代码
- expanded：展开的多行css代码
- compact：简洁格式的css代码
- compressed：压缩后的css代码
4. sass支持条件语句，if{}else{},for{}循环等，less不支持
```
@mixin txt($weight) { 
  color: white; 
  @if $weight == bold { 
    font-weight: bold;
  } 
  @else if $weight == light { 
    font-weight: 100;
  } 
  @else { 
    font-weight: normal;
  } 
}
.txt1 { 
  @include txt(bold); 
}
```
编译结果
```
.txt1 {
  color: white;
  font-weight: bold; 
}
```
5. 插值语法不同，Less中使用@{key}，Sass中使用#{$key}。

总体优点：
1. 提供CSS缺失的样式层复用机制
2. 减少冗余代码
3. 提高样式代码的可维护性
4. 结构清晰，便于扩展可以方便的屏蔽浏览器私有的语法差异
5. 轻松实现多重继承，完全兼容了CSS代码，提高了开发效率。