Axios是对XMLHttpRequest的封装，而fetch是一种新的资源请求方式。

他们最大的不同点在于fetch是浏览器原生支持，而axios需要引入axios库。

1.兼容性
---
axios可以兼容IE浏览器，fetch在IE浏览器和一些老版本的浏览器没有受到支持。但是有个库whatwg-fetch可以使在老版本浏览器中使用fetch。

注意：在比较旧的浏览器上面可能还需要使用promise兼容库。

2请求方式
---
axios:
```
const options = {
    url: "http://www.baidu.com/",
    method: "POST",
    headers: {
        Accept: "application/json",
        "Content-type": "application/json;charset:UTF-8"
    },
    data: {
        a: 1, 
        b: 2
    }
}
axios(options).then((response) => {
    console.log(response.status)
})
```
fetch:
```
const url = "http://www.baidu.com/"
const options = {
    method: "POST",
    headers: {
        Accept: "application/json",
        "Content-type": "application/json;charset:UTF-8"
    },
    body: JSON.stringify({
        a: 1,
        b: 2
    })
}
fetch(url,  options).then((response) => {
    console.log(response.status)
})
```
其中的不同点在于数据传递方式的不同，axios在data属性中，fetch在body属性中以字符串的形式传递。

3.响应超时
---
axios可以直接加上timeout属性，fetch却需要封装。

axios:
```
axios({
    url: "http://www.baidu.com/",
    method: "POST",
    timeout: 4000,
    headers: {
        Accept: "application/json",
        "Content-type": "application/json;charset:UTF-8"
    },
    data: {
        a: 1, 
        b: 2
    }
}).then(res => {
    console.log(res)
}).catch(error => console.error('响应超时'))
```
fetch:
```
const controlls = new AbortController();
const url = "http://www.baidu.com/"
const options = {
    method: "POST",
    singal: controlls.singal,
    headers: {
        Accept: "application/json",
        "Content-type": "application/json;charset:UTF-8"
    },
    body: JSON.stringify({
        a: 1,
        b: 2
    })
}
const timeoutId = setTimeout(() => controlls.abort(), 4000)
fetch(url,  options).then((response) => {
    console.log(response.status)
}).catch(error => console.error('响应超时'))
```

4.对数据的转化
---
axios会对数据自动进行转化，fetch需要手动处理

axios:
```
axios.get(url).then(
    (res) => {
        console.log(res.data)
    },
    (err) =>{
        console.log(error)
    }
)
```
fetch:
```
fetch(url, options).then(res => res.json())
                .then(data => console.log(data))
                .catch(error => console.log(error))
```
fetch提供的转化API包含以下几种：
> arrayBuffer();
>
> blob();
>
> text();
>
> json();
>
> formData();

5.HTTP拦截器
---
Axios提供了拦截器，可以同意对请求或响应进行一些处理。使用它可以为请求附加token，为请求增加时间戳防止缓存，以及拦截响应，状态码不符合预期可以直接将响应消息通过弹窗展示在界面上。
```
axios.interceptors.request.use((config) => {
    // 在请求之前对参数进行处理
    // 设置token
    config.headers.token= 'xxjkdfkfskxxxx'
    return config;
})
```
```
axios.interceptors.response.use(response => {
    // 在响应后对数据进行处理
    let res = response.data
    // 在返回特定状态码时弹窗相应提示信息
    if(res.status == 500){
        message.error('服务器错误')
    }else if(res.status == 304){
        message.error('xxx')
    }
    // ...
    return response;
}, error => {
    console.log(error.response.data)
})
```
fetch本身没有拦截器功能，需要手动封装。
```
fetch = ((originalFetch) => {
    return (...argument) => {
        const result = originalFetch.apply(this, arguments);
        return result.then(console.log('请求已发送'))
    }
})(fetch)

fetch(url).then(response => response.json())
        .then((data) => console.log(data))
```

6.同时请求
---
axios： 
```
axios.all([
    axios.get(url1),
    axios.get(url2)
]).then(
    axios.spread((obj1, obj2) => {
        // ...
    })
)
```
fetch:
```
Promise.all([
    fetch(url1),
    fetch(url2)
]).then(async [res1, res2] => {
    const a = await res1.json();
    const b = await res2.json();
}).catch(error => {
    console.log(error);
})
```

7.浏览器原生支持
---
fetch现代浏览器原生支持，当网页打开控制台使用fetch几乎不需要什么配置就可以直接进行请求。