### Vue基本原理
---

当一个Vue实例创建时，Vue会遍历Data中的属性，用Object.defineProperty(Vue3.0使用Proxy)将它们转化为getter/setter，并且在内部追踪相关依赖，在属性被访问和修改时通知变化。每个组件实例都有相应的watcher程序实例，它会在组件渲染的过程中把属性记录为依赖，之后当依赖项的setter被调用时，会通知watcher重新计算，从而致使它关联的组件得已更新。

<div style="text-align:center">
    <img width="100%" src="./../../../images/Vue基本原理.jpg" alt="" >
</div> 