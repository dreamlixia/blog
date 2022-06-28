### 对keep-alive的理解，如何实现，具体缓存的是什么
---

Props：
- includes: 只能缓存名称匹配的组件
- exculdes: 任何名称匹配的组件都不会被缓存
- max: 最多可以缓存组件实例的个数

\<keep-alive\>包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。

当组件在\<keep-alive\>内被切换时，生命周期 activated 和 deactivated 会被调用。