React Context
---
Context 提供了一个全局的局部作用域，使用 Context 则无需再手动传递 props。

示例： [代码](https://codesandbox.io/p/sandbox/react-context-test-vmq7gk?file=%2Fsrc%2Fcomponents%2FContextCom.tsx%3A14%2C26)

先搭建好 context 基础环境，后续的代码都是基于此环境

```js
// context.ts
import { createContext } from "react";

export default createContext();

```

引入 context，使用 context 提供的 provider 包裹，圈定局部的全局作用域，传值后可以提供给子组件进行消费。
```js
// contextComBox.tsx // 容器组件
import React, { createContext } from 'react';
import MyContext from './context';
// import Com1, 2, 3 from './Com1';

export default function ContextComBox () {
    return (
        <MyContext.Provider value={{ name: 'Hi' }}>
            <Com1 />
            <Com2 />
            <Com3Class />
        </MyContext.Provider>
    )
}

```
订阅 context 的三种方法
---

一、React.createContext 提供的 Provider 和 Consumer

引入 context，使用 context 提供的 consumer 订阅 context 的变更，需要一个函数作为子元素，第一个行参就是 provider 提供的 value。
```js
// Com1.tsx
import React, { CreateContext } from 'react';
import MyContext from './context';

const Com1 = () => {
    return (
        <MyContext.Consumer>
            {(value) => {
                return <>{JSON.stringify(value)}</>
            }}
        </MyContext.Consumer>
    );
}

export default Com1;
```
二、函数组件：React.createContext 提供的 provider 和 useContext 钩子
```js
// Com2.tsx;
import React, { useContext } from 'react';
import MyContext from './context';

const Com2 = () => {
    const context = useContext(MyContext);
    return (
        <>{JSON.stringify(context)}</>
    );
}

export default Com2;
```
三、Class 组件：React.createContext 提供的 provider 和 class 的 contextType 属性
```js
// ClassCom.tsx;
import MyContext from './context';

class ClassCom extends Raect.Component {
    static contextType = MyContext;

    render () {
        const value = this.context;
        return (
            <>{JSON.stringify(value)}</>
        )
    }
}

export default ClassCom;
```

传递给孙子组件，方法是相同的

写 Context 的两种场景：
---

一、在父组件中修改 context，通过调用自身的 setStore
```js
// contextComBox.tsx

import React, { CreateContext, useState } from "react";
import MyContext from "../context";

export default function Com() {
  const [store, setStore] = useState({
    name: "xiaohong",
  });
  return (
    <MyContext.Provider value={{ store, setStore }}>
        <button
          onClick={() =>
          setStore({
              name: "xiaosun",
          })
          }
        >
          change to xiaosun
        </button>
    </MyContext.Provider>
  );
}
```

二、在子组件中修改 context， 通过调用context 传入的 setStore 函数
```js
// Com2_1.tsx // Com2 的子组件
import React, { useContext } from "react";
import MyContext from "../context";

const Com2_1 = () => {
  const context = useContext(MyContext);
  return (
    <button
        onClick={() =>
        context.setStore({
            name: "com2_1",
        })
        }
    >
        change to com2_1
    </button>
  );
};

export default Com2_1;
```

问：如何获取多个 context ？
---
1. 嵌套 Context.Consumer 来消费 context，示例：[代码](https://codesandbox.io/p/sandbox/boring-nobel-hq92x4?file=%2Fsrc%2FApp.js%3A19%2C26)

会导致嵌套炸弹的问题。

```js
import React, { createContext } from "react";

const contextA = createContext(null);
const contextB = createContext(null);

export default function App() {
  return (
    <contextA.Provider value={"a"}>
      <contextB.Provider value={"b"}>
        <Child />
      </contextB.Provider>
    </contextA.Provider>
  );
}

class Child extends React.Component {
  render() {
    return (
      <contextA.Consumer>
        {(aValue) => {
          return (
            <contextB.Consumer>
              {(bValue) => {
                return (
                  <>
                    <div>aValue:{aValue}</div>
                    <div>bValue:{bValue}</div>
                  </>
                );
              }}
            </contextB.Consumer>
          );
        }}
      </contextA.Consumer>
    );
  }
}
```

2. 创建一个包含所有 Context 的全局 Context 提供方 Provider，避免嵌套，在需要时只需要从单个 Context 中获取素有所需值。
```js
// GlobalContextProvider.tsx
import React, { createContext, useState, useContext } from 'react';

const Context1 = createContext();

const GlobalContextProvider = ({ children }) => {
  const [id, setId] = useState(0);
  const [name, setName] = useState('init');

  const value = {
    id,
    setId,
    name,
    setName
  }

  return <Context1.Provider>{children}</Context1.Provider>
}

export const useContextCom = () => {
  const context = useContext(Context1);
  if (!context) {
    return '-';
  }
  return context;
}

export default GlobalContextProvider;
```
```js
import GlobalContextProvider, { useContextCom } from './GlobalContextProvider';

const MyComponent = () => {
  const { id, setId, name, setName } = useContextCom();
  return (
    <>result: name: { name }; id: { id }</>
  )
}

const Com = () => {
  return (
    <GlobalContextProvider>
      <MyComponent />
    </GlobalContextProvider>
  )
};

export default Com;
```
在这个示例中，GlobalContextProvider 包裹了 <MyComponent /> 和其他 Component，所以在 MyComponent 和 其他 Component 内部，以及它们的子组件中，我们都可以通过 useContextCom hook 来访问 id 和 setId 这两个值。

需要在 GlobalContextProvider 中提供一个初始 id 和 name 的值，如示例。