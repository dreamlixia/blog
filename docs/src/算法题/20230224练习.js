/**
 * apply\call\bind
 */
function applyThis(f, otarget) {
    return function() {
        return f.apply(otarget, arguments)
    }
}
function callThis(f, otarget) {
    return function() {
        return f.call(otarget, ...arguments)
    }
}
function bindThis(f, otarget) {
    return function() {
        return f.bind(otarget)
    }
}
/**
 * 用promise、async、await实现异步循环打印
 */
var sleep = function(time, i) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(i)
        }, time)
    })

}
var start = async function() {
    for(var i = 0; i < 6; i ++) {
        const result = await sleep(1000, i)
        console.log('result =', result)
    }
}
start()
// Promise {<pending>}
// VM44795:13 result = 0
// VM44795:13 result = 1
// VM44795:13 result = 2
// VM44795:13 result = 3
// VM44795:13 result = 4
// VM44795:13 result = 5
/**
 * 原生xhr
 */
/**
 * get
 * 1. 创建xhr对象
 * 2. open 请求方式，url
 * 3. send发送请求
 * 4. 监听xhr状态
 */
var xhr = new XHRHttpRequest()
xhr.open('GET', url)
xhr.send()
xhr.onreadystatechange = function() {
    if(xhr.readyState == 4 && xhr.status == 200) {
        console.log(xhr.responseText)
    }
}
/**
 * post
 * 1. 创建xhr对象
 * 2. open post， url
 * 3. 定义请求头
 * 4. send formData
 * 5， 监听xhr状态
 */
var xhrPost = new XMLHttpRequest()
xhrPost.open('POST', url)
xhrPost.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
xhrPost.send('a=1&b=2&c=3')
xhrPost.onreadystatechange = function() {
    if(xhrPost.readyState == 4 && xhrPost.status == 200) {
        console.log(xhrPost.responseText)
    }
}
/**
 * 浅拷贝
 * 遍历对象，依次添加到新对象
 */
function clone(target) {
    let cloneTarget = {}
    for(var key in target) {
        cloneTarget[key] = target[key]
    }
    return cloneTarget
}
/**
 * 深拷贝
 * 递归
 */

/**
 * 深拷贝
 * JSON.stringify()
 */
var obj = { a: 1, b: 2, c: 3 }
var obj2 = JSON.stringify(obj)
obj.a = 'a'
obj2 = JSON.parse(obj2)
console.log(obj, obj2)