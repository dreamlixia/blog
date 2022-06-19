### 解决浏览器缓存：URL添加时间戳
---

在开发过程中，需要给html的静态资源加上一个随机数，避免版本迭代的时候使用本地缓存文件（如果地址一样，浏览器会认为是同一个请求），可以给css、js文件自动加上一个时间戳。

html
```
<fieldset>
    <legend>给url添加时间戳</legend>
    <img id="bgimg" alt="">
 </fieldset>
```
js
```
    // 给html的img标签添加src属性
    let cacheImg = document.querySelector('[id="bgimg"]')
    cacheImg.setAttribute('src', timeStamp('bicycle.gif'))

    // 解决项目更换图片浏览器缓存问题
    function timeStamp(url) {
      let currentTime_stamp = new Date().getTime()
      if (url.indexOf('?') > -1) {
        url = url.substr(0, url.indexOf("?")) + "?timestamp=" + currentTime_stamp
        // url = url + '&timestamp=' + currentTime_stamp
      } else {
        url = url + "?timestamp=" + currentTime_stamp
      }
      return url
    }

    var Url = window.location.href;
    // 网页URL添加时间戳
    // window.history.pushState 不刷新页面，但是改变页面的url地址
    window.history.pushState({}, 0, timeStamp(Url));
    console.log(window.location.href);
    // https://www.jianshu.com/p/bf16cd4ae663?timestamp=1655433408419
```