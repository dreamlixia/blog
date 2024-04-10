react+vite+mindmap 搭建项目启动报错
---

<img src="./../../../images/viterunerr.jpeg" alt="vite_run_error"/>

(node:7716) UnhandledPromiseRejectionWarning: SyntaxError: Unexpected token '??='
    at Loader.moduleStrategy (internal/modules/esm/translators.js:149:18)

**报错原因：**
node 版本问题（逻辑空赋值(??=)是ES2021的语法，node v15.0.0以上才支持逻辑空赋值(??=)的语法。之前为了兼容旧代码使用的node版本是14。使用nvm切换16的node，成功解决。

<img src="./../../../images/vite_err_resolve.jpeg" alt="vite_run_error_resolve"/>