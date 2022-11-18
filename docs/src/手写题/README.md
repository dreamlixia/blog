---
title: 目录
---

1.手写Object.create
---
思路：将传入的对象作为原型
```
function create(obj) {
    function F() {}
    f.prototype = obj
    return new F()
}
```