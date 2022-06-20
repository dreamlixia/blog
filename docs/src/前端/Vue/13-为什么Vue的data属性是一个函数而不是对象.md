### 为什么Vue的data属性是一个函数而不是对象
---

#### 实例和组件定义的区别
- 实例定义既可以是对象，也可以是函数
```
const app = new Vue({
    el: "#app",
    // 对象格式
    data: {
        foo: 'foo'
    },
    // 函数格式
    data () {
        return {
            foo: 'foo'
        }
    }
})
```
- 组件定义只能是函数

如果为组件的data直接定一个对象
```
Vue.component({
    template: `<div>组件</div>`,
    data: {
        foo: 'foo'
    }
})
```
会看到报错信息：
```
[Vue warn]: The "data" option should be a function that returns a per-instance value in component defintions.
```

#### 原因：

根实例是单例，不会产生数据污染的情况。
如果一个组件有多个Vue实例，就会造成多个组件实例对象共用一个data对象（共用一个内存地址，对象A的值发生改变，同样对象B的值也发生改变），产生数据污染，而使用函数，初始化data时，就会返回全新的data对象。