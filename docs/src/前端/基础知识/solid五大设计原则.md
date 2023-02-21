### solid五大设计原则
---

#### 单一职责原则 The Single-Responsibility Principle (SRP)

>单一职责原则，就是说一个类仅有一个引起它变化的原因。也有人把它解释为只做一件事情

#### 开放闭合原则 The Open/Closed Principle (OCP)

>所有的系统在其生命周期里都会改变，需求会变是正常的，好的系统不会拒绝变化，只会需要添加code或者修改很少的code就能支持这些变化。
>
>它强调对扩展开放，对修改闭合。办法：
>
>抽象、多态

#### 里氏替换原则 The Liskov Substitution Principle (LSP)

>自类型必须能够替换它的基类型。
>
>强调继承。 

#### 接口分离原则 The Interface Segregation Principle (ISP)

>客户端不应该被迫依赖于它不使用的方法。简单来说就是更小更具体的瘦接口比庞大臃肿的胖接口好。

#### 依赖倒置原则 The Dependency-Inversion Principle (DIP)

>高层模块不应该依赖低层模块，两者都应该依赖其抽象。抽象不应该依赖细节，细节应该依赖于抽象。低层模块不应该影响高层模块，否则高层模块很难做到复用。