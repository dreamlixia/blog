### 对keep-alive的理解，如何实现，具体缓存的是什么

1.概念
---
如果需要在组件切换的时候，保留一些组件的状态防止多次渲染，就需要使用\<keep-alive\>包裹需要保存的组件。

用法
```
<keep-alive> // 基本
    <component :is="view"></component>
</keep-alive>
```
```
<keep-alive> // 多个条件判断的子组件
    <compo-a v-if="a > 1"></compo-a>
    <compo-b v-else></compo-b>
</keep-alive>
```

2.Props
---
- includes: 只能缓存名称匹配的组件
- exculdes: 任何名称匹配的组件都不会被缓存
- max: 最多可以缓存组件实例的个数

\<keep-alive\>包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。

当组件在\<keep-alive\>内被切换时，生命周期 activated 和 deactivated 会被调用。

3.render函数
---
- 会在\<keep-alive\>组件内部去写自己的内容，所以可以获取slot的内容，然后根据这个去获取组件
- \<keep-alive\>只对第一个组件有效，所以只获取第一个子组件
- 和\<keep-alive\>搭配使用的一般有：动态组件和router-view

内容待更新……

LRU （least recently used）缓存策略
---
LRU 缓存策略∶ 从内存中找出最久未使用的数据并置换新的数据。
LRU（Least rencently used）算法根据数据的历史访问记录来进行淘汰数据，其核心思想是 "如果数据最近被访问过，那么将来被访问的几率也更高"。 最常见的实现是使用一个链表保存缓存数据，详细算法实现如下∶

- 新数据插入到链表头部
- 每当缓存命中（即缓存数据被访问），则将数据移到链表头部
- 链表满的时候，将链表尾部的数据丢弃。