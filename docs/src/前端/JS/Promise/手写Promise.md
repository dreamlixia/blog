基础版本
---
设定三个状态 PENDING、FULFILLED、REJECTED, 只能由 PENDING 改为 FULFILLED、REJECTED, 并且只能改变一次
```
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

function MyPromise(executor) {
    this.state = PENDING;
    this.value = null;
    this.reason = null;

    const resolve = (value) => {
        if(this.state == PENDING) {
            this.state = FULFILLED;
            this.value = value;
        }
    }

    const reject = (reason) => {
        if(this.state == PENDING) {
            this.state = REJECTED;
            this.reason = reason;
        }
    }

    try{
        executor(resolve, reject);
    } catch (reason) {
        reject(reason);
    }
}
```
then方法
---
- then方法接受两个参数，onFulfilled、onRejected, 他们分别在 PENDING 改变为 FULFILLED 、REJECTED 后调用。
- 一个 primose 可绑定多个 then 方法
- then方法可以同步调用也可以异步调用
- 同步调用：状态已经改变，直接调用 onFulfilled 方法
- 异步调用：状态还是PENDING，将 onFulfilled、onRejected 分别加入两个函数数组 onFulfilledCallbacks、onRejectedCallbacks ，当异步调用 resolve 和 reject 时，将两个数组中绑定的事件循环执行。
```
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

function MyPromise(executor) {
    this.state = PENDING;
    this.value = null;
    this.reason = null;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = (value) => {
        if(this.state == PENDING) {
            this.state = FULFILLED;
            this.value = value;
            this.onFulfilledCallbacks.forEach(fun => {
                fun();
            })
        }
    }

    const reject = (reason) => {
        if(this.state == PENDING) {
            this.state = REJECTED;
            this.reason = reason;
            this.onRejectedCallbacks.forEach(fun => {
                fun();
            })
        }
    }

    try{
        executor(resolve, reject);
    } catch (reason) {
        reject(reason);
    }
}

MyPromise.prototype.then = function (onFulfilled, onRejected) {
    switch(this.state) {
        case FULFILLED:
            onRejected(this.value);
            break;
        case REJECTED:
            onFulfilled(this.value);
            break;
        case PENDING:
            this.onFulfilledCallbacks.push(() => {
                onFulfilled(this.value);
            })
            this.onRejectedCallbacks.push(() => {
                onRejected(this.reason);
            })
            break;
    }
}
```