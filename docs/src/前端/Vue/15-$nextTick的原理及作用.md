$nextTick的原理和作用

1.全局方法
---
将回调推迟到下一个DOM更新周期后执行。在更改了一些数据等待DOM更新后立即使用它。
```
import { createApp, nextTick } from 'vue'
const App = createApp({
    setUp () {
        const message = ref('Hello')
        const changeMessage = async newMessage => {
            message.value = newMessage
            await nextTick()
            console.log('DOM updated')
        }
    }
})

```
2.实例方法
---
它跟全局方法 nextTick 一样，不同的是回调的 this 自动绑定到调用它的实例上。
```
createApp({
    methods: {
        doSomeThing() {
            this.message = 'message'
            // dom未更新
            this.$nextTick(function(){
                // dom更新了，this被绑定到当前实例
                this.forExample()
            })
        }
    }
})
```