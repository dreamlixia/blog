### Fetch
---

fetch的功能与XMLHttpRequest基本相同，但只要有三个差异。

（1）fetch使用Promise，不使用回调函数，因此大大简化了写法，更简洁。

（2）fetch采用模块化设计，api分散在多个对象上（request对象、response对象、headers对象），更合理。相比XMLHttpRequest的api设计，输入、输出、状态都在同一个接口管理，容易写出混乱的代码。

（3）fetch通过数据流（Stream对象）处理数据，分块读取，有利于提高网站性能，减少内存占用，对于请求大文件和网速慢的场景非常有用。XMLHttpRequest对象不支持数据流，所有数据必须放在缓存里面，不支持分块读取，必须等待全部拿到后再一次性吐出来。

#### Response对象：处理HTTP回应

（1）Response对象的同步属性，可以立即读取。
```
async function fetchText() {
    let response = await fetch(url);
    console.log(response.status);
    console.log(response.statusText);
}
```
response.status、response.statusText就是Response对象的同步属性。

标头信息（Headers）属性有以下：
>Response.ok
>
>Response.status
>
>Response.statusText
>
>Response.url
>
>Response.type：返回请求的类型。可能的值如下：
>
>>basic: 普通请求
>>
>>cors: 跨域请求
>>
>>error: 网络错误
>>
>>opaque: fetch请求的type属性为no-cores时，返回这个值。
>>
>>opaqueredirect: fetch请求的redirect属性为manual时，返回这个值。
>
>Response.redirected

（2）判断请求是否成功

fetch发出请求后，又一个重要的点是，只有网络错误、或者无法连接时，fetch()才会报错，其他情况都不会报错，而认为是请求成功。

也就是说服务器返回的状态码是4xx或者5xx，fetch()也不会报错（Promise不会变成rejected）。

通过Response.status属性，得到 HTTP 回应的真实状态码，才能判断请求是否成功
```
async fetchText() {
    let response = await fetch(url);
    if(response.status >= 200 && response.status <= 300){
        return await response.text()
    }else{
        throw new Error(response.statusText)
    }
}
// 或者判断response.ok是否为true
if(response.ok){
    // 请求成功
}else{
    // 请求失败
}
```

（3）response对象的headers属性
```
const response = await fetch(url); 
for (let [key, value] of response.headers) { 
    console.log(`${key} : ${value}`); 
} // 或者 for (let [key, value] of response.headers.entries()) { console.log(`${key} : ${value}`); }
```
Headers 对象提供了以下方法，用来操作标头。

>Headers.get()：根据指定的键名，返回键值。
>
>Headers.has()： 返回一个布尔值，表示是否包含某个标头。
>
>Headers.set()：将指定的键名设置为新的键值，如果该键名不存在则会添加。
>
>Headers.append()：添加标头。
>
>Headers.delete()：删除标头。
>
>Headers.keys()：返回一个遍历器，可以依次遍历所有键名。
>
>Headers.values()：返回一个遍历器，可以依次遍历所有键值。
>
>Headers.entries()：返回一个遍历器，可以依次遍历所有键值对（[key, value]）。
>
>Headers.forEach()：依次遍历标头，每个标头都会执行一次参数函数。