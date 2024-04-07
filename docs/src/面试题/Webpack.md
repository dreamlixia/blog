---
title: Webpack
---

css-loader、style-loader、scss-loader、less-loader区别
---


Tree-shaking 的基本原理
---

1. **导入和导出分析：** 静态分析工具会检查 ES2015 模块的 `import` 和 `export` 语句，找出哪些模块被导入和导出。

2. **未引用代码识别：** 通过分析，工具可以确定哪些导出模块没有在其它地方被导入或引用。这些就是"未使用代码"或者可以"摇掉"的"死代码"。

3. **删除未引用代码：** 最终，这些未引用的模块代码将不会包含在最终的代码包中。

值得注意的是，Tree-shaking 一般只对 ES6 的 `import` 和 `export` 有效，不适用于 CommonJS 的 `require`，因为 ES6 模块的结构是静态的（即 `import` 和 `export` 必须位于顶级作用域，且不能动态调用），而 CommonJS 模块是动态的。

Tree-shaking 可以帮助优化项目，使得最终打包的代码文件尽可能的小，只包含用到的模块代码，从而提高代码的加载和执行效率。