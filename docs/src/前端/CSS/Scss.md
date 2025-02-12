---
title: Scss
---

官网 [https://sass.nodejs.cn/](https://sass.nodejs.cn/)

SCSS（Sass 的一种语法）作为 CSS 的预处理器，提供了许多语法糖和高级特性，使得样式编写更加高效和模块化。主要包括以下几个方面：
- 变量 (Variables)
通过变量可以统一管理颜色、字体、尺寸等值，避免硬编码。例如：
```scss
$primary-color: #3498db;
.button {
  background-color: $primary-color;
}
```
- 嵌套 (Nesting)
SCSS 允许你将样式规则嵌套在一起，体现 HTML 结构的层级关系，减少重复代码。例如：
```scss
.nav {
  ul {
    list-style: none;
    li {
      display: inline-block;
    }
  }
}
```
Mixin（混入）
Mixin 允许定义可重用的样式块，并在需要的地方通过 @include 引入，支持传参。例如：
```scss
@mixin flex-center($direction: row) {
  display: flex;
  flex-direction: $direction;
  justify-content: center;
  align-items: center;
}

.container {
  @include flex-center;
}
```
- Extend（继承）
使用 @extend 可以让一个选择器继承另一个选择器的样式，减少重复代码：
```scss
.message {
  border: 1px solid #ccc;
  padding: 10px;
}

.success {
  @extend .message;
  border-color: green;
}
```
运算与函数
SCSS 支持基本的数学运算（加减乘除）以及内置函数（如颜色处理函数 lighten、darken 等），便于计算尺寸和动态生成颜色。例如：
```scss
.box {
  width: 100px + 20px;
  background-color: lighten($primary-color, 10%);
}
```
- 条件判断和循环
SCSS 提供了 @if、@for、@each 和 @while 等控制指令，能够根据条件生成不同的样式，适合动态生成类似网格布局或响应式设计的代码：
```scss
@for $i from 1 through 3 {
  .col-#{$i} {
    width: (100% / 3) * $i;
  }
}
```
- 模块化管理
通过 partials（部分文件）和 @import（在新版 Sass 中建议使用 @use），可以将样式拆分到不同的文件中，便于团队协作与维护。

这些 SCSS 的特性极大地提高了 CSS 的开发效率、可维护性和代码复用性，减少了大量冗余代码，是现代前端开发中常用的简便方法。