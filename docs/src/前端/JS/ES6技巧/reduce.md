### reduce
---

1.计算数组之和或乘积
---
```
 *  var numbers = [1,2,3,4,5]
 *  function getSum (total, num) {
 *      return total + num // total * num
 *  }
 *  var sum = numbers.reduce(getSum)
 *  console.log('sum= ', sum)
```
2.数组去重
---
```
 *  var arr = [1,2,2,3,4,5,5,6]
 *  var list = arr.reduce((pre, cur) => {
 *      if(!pre.includes(cur)){
 *          return pre.concat(cur)
 *      }else{
 *          return pre    
 *      }
 *  }, [])
 *  console.log(list)
```
3.计算数组中每个元素出现的次数
---
```
let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
let result = names.reduce( (pre, cur) => {
    if(cur in pre){
        pre[cur]++
    }else{
        pre[cur] = 1
    }
    return pre
}, {})
console.log(result)
```
4.二维数组转化为一维数组
---
````
let arr = [[0, 1], [2, 3], [4, 5]]
let result = arr.reduce((pre, cur) => {
    return pre.concat(cur)
}, [])
console.log(result)
```
5.多维数组转化为一维数组
---
```
let arr = [[0, 1], [2, 3], [4,[5,6,7]]]
let newArr = function(arr) {
    return arr.reduce((pre, cur) => pre.concat(Array.isArray(cur) ? newArr(cur) : cur), [])
}
let result = newArr(arr)
console.log(result)
```
6.数组中对象里的属性求和
---
```
var objArr = [
    {
        subject: 'math',
        score: 10
    },
    {
        subject: 'chinese',
        score: 20
    },
    {
        subject: 'english',
        score: 30
    }
];
var result = objArr.reduce((pre, cur) => (pre + cur.score), 0)
console.log(result)
```