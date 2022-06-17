### v-if、v-show、v-html原理
---

#### v-html
更新元素的innerHTML。按普通HTML插入，不会进行Vue模板编译。
>1、coped样式不会应中在v-html内部, 因为那部分HTML不会进行Vue模板编译；
>
>2、在网上站动态渲染HTML是非常危险的，容易导致XSS攻击。只在可信内容上使用v-html，永不用在提交内容上。
```
<div v-html="html"></div>
```

#### v-show
条件渲染，display: none，会生成vnode，render的时候会渲染真实节点，只是在render的过程中会修改属性display

#### v-if
根据表达式值的truthiness来有条件渲染元素。在切换元素及它他的数据绑定/组件被销毁或重建。
>当v-if和v-for一起使用，v-for的优先级高。

#### v-if和v-show的区别
1. v-if是dom操作，添加或删除dom元素，有局部编译/卸载的过程，v-show是改变css的display；
2. v-if用于运行条件不经常改变的场景，v-show适用于频繁变化；
3. v-if是惰性的，第一次如果不为真不进行编译，只有当条件第一次为真时才开始局部编译，v-show在任何条件下都会被编译，然后被缓存，dom元素保留；
4. v-if有更高的切换消耗，v-show有更高的初始渲染消耗；