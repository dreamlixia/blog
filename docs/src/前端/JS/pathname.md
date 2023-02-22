### 获取当前访问的pathname
---

获取当前访问的pathname
---

```
// 获取当前访问的pathname
const { pathname } = location
let activeUrl = pathname
let getPathName = (/(\/\w*)\//).exec(activeUrl)
activeUrl = getPathName ? getPathName[1] : activeUrl;
console.log('activeUrl:', activeUrl)
```