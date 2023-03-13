---
title: React
---
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