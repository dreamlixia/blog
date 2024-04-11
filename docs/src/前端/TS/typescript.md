TypeScript 基础
---

1.```type``` 和 ```interface``` 的区别
---
- interface: 接口，TS 用于定义对象类型，可以对对象的形状进行描述；
- type：类型别名，为类型创建一个新的名称，只是一个别名，并不是一个类型；

优劣势：

- interface 可以重复定义，TS 会将他们合并，interface 可以扩展属性；
    ```
    interface One {
        a: string;
    }
    interfacee One {
        b: string;
    }
    const numbersOne: One {
        a: 'a',
        b: 'b'
    }
    ```
- type 一旦定义就不可添加其他属性，也就是创建后不可更改，不可以使用同一个名称去扩展，只能使用 & 去扩展；

type 声明方式
1. ```type StringType = string;``` 基本类型别名
2. ```type paramType = number | string;``` 联合类型
3. ```type arrType = [string, number, number]``` 元组类型（一个已知元素数量和类型的数组）

扩展方式
- interface 使用 extends
    ```
    interface Animal {
        name: string;
    }
    interface Bear extends Animal {
        age: number;
    }
    const bear: Bear = {
        name: 'bear',
        age: 3
    }
    ```
- type 使用 & 交叉扩展
    ```
    type Animal {
        name: string;
    }
    type Bear & Animal {
        name: string;
        age: number;
    }
    ```
**总结**
1. 如果需要被 extends 或者 implements(实现接口), 则尽量使用接口。
2. 如果需要使用联合类型或者元组类型，类型别名会更合适。
3. 如果是定义对象或函数，则都可以。
4. 如果实在不想选择的话，就能用interface实现，用interface，如果不能就用type。

2.```Record```、```Pick```、```Partial```、```Required```、```Omit```的用法
---
```
interface IInfo {
    name: string;
    age: number;
    phone?: number;
    email?: string;
    adress?: string;
}
```
- Record

    接受两个泛型参数，一个是对象的 key， 一个是 value。
    ```
    interface ObjTest {
        person1: string;
        person2: string;
    }
    type ObjTestKeys = keyof ObjTest;
    type RecordIInfoProps = Record<ObjTestKeys, IInfo>;
    ```
    那么 RecordIInfoProps 的类型就如下
    ```
    RecordIInfoProps {
        person1: {
            name: string;
            age: number;
            phone?: number;
            email?: string;
            adress?: string;
        };
        person2: {
            name: string;
            age: number;
            phone?: number;
            email?: string;
            adress?: string;
        }
    }
    ```

- Pick

    Pick 类型可以从一个对象类型中 取出 某些属性

    例如我们只需要 IInfo 中的 name 和 age 字段以及相应的类型，就可以使用 Pick，当然可以新写一个接口，但是后期维护起来并不友好，因为我们后期用的所有属性都应该是由 IInfo 推导出来的。
    ```
    type PickIInfoProps = Pick<IInfo, 'name' | 'age'>;
    ```
    那么 PickIInfoProps 的类型就如下
    ```
    PickIInfoProps {
        name: string;
        age: number;
    }
    ```

- Partial

    partial 类型可以把传入的对象的所有属性变为可选的
    ```
    type PartialIInfoProps = Partial<IInfo>;
    ```
    那么 PartialIInfoProps 的类型就如下
    ```
    PartialIInfoProps {
        name?: string;
        age?: number;
        phone?: number;
        email?: string;
        adress?: string;
    }
    ```

- Required

    要求传入的类型所有属性必须为必填项
    ```
    type RequiredIInfoProps = Required<IInfo>;
    ```
    那么 RequiredIInfoProps 的类型就如下
    ```
    RequiredIInfoProps {
        name: string;
        age: number;
        phone: number;
        email: string;
        adress: string;
    }
    ```

- Omit

    Omit 类型可以从一个对象类型中 忽略/排除 某些属性，支持排除单个属性或多个属性，用```|```分隔即可
    ```
    type OmitIInfoProps = Omit<IInfo, 'adress' | 'phone'>;
    ```
    那么 OmitIInfoProps 的类型就如下
    ```
    OmitIInfoProps {
        name: string;
        age: number;
        email?: string;
    }
    ```

