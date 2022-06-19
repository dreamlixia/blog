### MVVM、MVC、MVP的区别
---

MVVM、MVC、MVP是是三种常见的软件架构设计模式。主要通过分离关注点的方式来组织代码结构，优化开发效率。

**背景：** 在开发单页面应用时，往往一个路由页面对应了一个脚本文件，所有的页面逻辑都在一个脚本文件里。页面的渲染、数据的获取，对用户事件的响应所有的应用逻辑都混合在一起，这样在开发简单项目时，可能看不出什么问题，如果项目变得复杂，那么整个文件就会变得冗长、混乱，这样对项目开发和后期的项目维护是非常不利的。

1. MVC（Model View Controller）

View和Model应用了观察者模式，当Model层发生改变的时候他会通知View层更新页面，而Controller是Mode层和View层的纽带，主要负责用户与应用的响应操作，当用户与页面产生交互时，Controller的事件触发器开始工作，调用Model层，来完成对Model层的修改，然后Model层再去通知View更新。

2. MVVM（Model View ViewModel）

- Model代表数据模型，数据和业务逻辑都在Model层中定义；
- View代表UI视图，负责数据的展示；
- ViewModel负责监听Model中数据的改变并且控制视图的更新，处理用户交互操作；

这种模式实现了 Model和View的数据自动同步，因此开发者只需要专注于数据的维护操作即可，而不需要自己操作DOM。

<div style="text-align:center">
    <img width="100%" src="../../../../docs/images/MVVM.jpg" alt="">
</div> 

3. MVP（Model View Presenter）

- 各部分之间的通信，都是双向的；
- View和Model不发生联系，都是通过Presenter传递。可以将一个presenter用于多个视图，而不需要改变Presenter的逻辑。这个特性非常有用，因为视图的变化总是要比模型变化频繁；
- View非常薄，不部署任何业务逻辑，被称为“被动视图”，既没有任何主动性。Presenter非常厚，业务逻辑都在那里。
> 缺点：
> 由于对视图的渲染都放在了presenter里，两者的交互就比较频繁。一旦视图需要变更，Presenter也需要变更。
