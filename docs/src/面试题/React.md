---
title: React
---

[CSDN React 21年常见面试题](https://blog.csdn.net/qq_44182284/article/details/116979015)
---
[前端进阶笔记](https://note.buging.cn/react/4-1.html)
---
[面试题笔记](https://blog.ori8.cn/#/?id=main)

类组件和函数组件的区别
---
相同点：都不能修改他的props。

不同点：

类组件：
1. React组件都必须是纯函数，不能修改props；
2. 单向数据流，父组件属性变化，子组件视图相应更新；
3. props是从父级传过来的，state状态是组件本身的，state可以随意修改；
4. 组件的属性和状态修改都会更新视图;
5. 可以写入状态，生命周期，构造函数。

- 编写形式：
    1. 类组件：继承export defult Index extends React.component{constructor(name, age, grade){ super(name, age);this.grade = grade }},super调用父类的构造器
    2. 函数组件：export default function FnNames() {return(<div>{children}</div>)}  <FnNames chilren={<div>hello</div>} />
- 状态管理：
    1. 类组件：有自己的state，可用setState任意修改
    2. 函数组件：在hooks出来之前，就是无状态组件，不能保管组件的状态。useState。
- 生命周期：
    1. 类组件：有生命周期，来自于继承的React.Component.
    2. 函数组件：不存在生命周期，但是可以使用useEffect代替生命周期的作用， 相当于类组件的componentDidMount,如果在useEffect中return一个函数，则return函数会在组件卸载的时候执行，正如componentWillUmMount
    ```
        const FunctionCoompent = () => {
            useEfffect(() => { 
                console.log('hello')
                // 或者 return 一个函数
                // return () => {
                //      console..log('hello')   
                // }
            }, [])
            return <h1>hello, world</h1>
        }
    ```
- 状态管理：
    1. 类组件：有状态管理。
    2. 函数组件：没有状态管理。

函数组件：
1. 只能实现非常简单的渲染功能，知识进行页面的展示和数据渲染，没有逻辑处理，也就是组件的内部是没有自己的数据和状态的，无状态组。没有state，只根据props，不用this.props; 
2. 接受一个单一的props对象并返回一个React元素；
3. 性能比类组件高，类组件需要实例化，函数组件直接执行函数并返回结果即可。为了提高性能，尽量使用函数组件。

受控组件和非受控组件
---
**非受控组件**

非受控组件，即组件的状态不受React控制的组件，例如下边这个

```
import React, { Component } from 'react';

import ReactDOM from 'react-dom';

class Demo1 extends Component {

    render() {

        return (

            <input />

        )

    }

}
```
 
ReactDOM.render(<Demo1/>, document.getElementById('content'))

在这个最简单的输入框组件里,我们并没有干涉input中的value展示,即用户输入的内容都会展示在上面。如果我们通过props给组件设置一个初始默认值,defaultValue属性是React内部实现的一个属性,目的类似于input的placeholder属性。

ps: 此处如果使用value代替defaultValue,会发现输入框的值无法改变

**受控组件**

同样的，受控组件就是组件的状态受React控制。上面提到过，既然通过设置input的value属性, 无法改变输入框值,那么我们把它和state结合在一起,再绑定onChange事件,实时更新value值就行了。
```
class Demo1 extends Component {

    constructor(props) {

        super(props);

        this.state = {

            value: props.value

        }

    }

    handleChange(e) {

        this.setState({

            value: e.target.value

        })

    }

    render() {

        return (

            <input value={this.state.value} onChange={e => this.handleChange(e)}/>

        )

    }

}
```

React hook使用的限制是什么？ 为什么有这样的限制
---

1. 不要在循环、条件或嵌套函数中调用 Hook
> - 只要 Hook 的调用顺序在多次渲染之间保持一致，React 就能正确地将内部 state 和对应的 Hook 进行关联 
>
> - hook是基于链表实现的 要确保 Hooks 在每次渲染时都保持同样的执行顺序 如果在循环、条件或者嵌套中调用hook会导致取值错位 执行错误的hook 
2. 在 React 的函数组件中调用 Hook 
> 基于类组件中的this指向问题 所以只能在函数组件中使用

fiber节点保存数据
---
每个组件都有对应的用于保存组件信息的 fiber节点 

获取流程

- 有一个全局变量 currentlyRenderingFiber 保存着当前处理的 fiber 节点 
- 每次 FunctionCompoent render（函数组件render）时, currentlyRenderingFiber 就变成了当前 FunctionComponent 对应的 fiber 节点
- hook 从 currentlyRenderingFiber 中获取状态信息

#### 单向链表让多个hook获取数据

**hook调用顺序不能变的原因**，多hook的保存

currentlyRenderingFiber 的 memoizedState 属性保存着 hook 和对应数据的单向链表 

- 一个 hook 的 next 属性 指向下一个 hook 
- hook的数据保存在memoizedState 
- 所有的hook 以链表形式保存 连接