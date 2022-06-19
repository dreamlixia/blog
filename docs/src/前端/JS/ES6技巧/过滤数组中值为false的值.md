### 过滤数组中值为false的值
---

```
const list = [1,2,undefined,'aadfjlkfj', null,99,11.22]

let newList = list.filter(Boolean)

console.log(newList)

// [1, 2, "aadfjlkfj", 99, 11.22]
```