### 判断链接是否为图片或pdf
---

#### 场景：遇到需要实现上传的文件/图片预览功能的时候，后端给我们的是一个链接的情况，使用图片预览组件的话只能支持png,jpg等图片，pdf类的会失败，因此，需要通过浏览器解析链接，用CURL获取图片URL的response header，区分是图片还是pdf，然后使用各自的预览方法去实现。

#### PHP
1. 创建一个curl，并将头文件的信息，作为数据流输出
```
$url = "http://*************";  //图片的链接地址

$ch = curl_init();

curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1); //是否跟着爬取重定向的页面

curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); //将curl_exec()获取的值以文本流的形式返回，而不是直接输出。

curl_setopt($ch, CURLOPT_HEADER,  1); // 启用时会将头文件的信息作为数据流输出

curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 5); //设置超时时间

curl_setopt($ch, CURLOPT_URL, $url);  //设置URL

$content = curl_exec($ch);

$httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);  //curl的httpcode

$headerSize = curl_getinfo($ch, CURLINFO_HEADER_SIZE); //获取头大小

curl_close($ch);
```
2. 此时content中包含头信息和图片的二进制内容，然后根据头的大小（$headerSize）截取出头信息，剩下的就是图片的二进制内容了
```
$headers = substr($content, 0, $headerSize); //根据头大小截取头信息
```
>头信息输出结构
```
HTTP/1.1 200 OK

Server: JSP3/2.0.14

Date: Sun, 30 Jul 2017 06:54:47 GMT

Content-Type: image/jpeg

Content-Length: 152094

Connection: keep-alive

ETag: "7751852900776331536"

Last-Modified: Tue, 02 May 2017 10:33:16 GMT

Expires: Wed, 18 Jul 2018 06:25:38 GMT

Age: 879492

Cache-Control: max-age=31536000

Accept-Ranges: bytes

Error-Message: OK

Ohc-Response-Time: 1 0 0 0 0 0
```
3. 可以看到里面有个Content-Type: image/jpeg，然后处理头信息，取出想要的内容
```
$head_data=preg_split('/\n/',$headers);  //逐行放入数组中

$head_data = array_filter($head_data);  //过滤空数组

$headers_arr = [];

foreach($head_data as $val){  //按:分割开

    list($k,$v) = explode(":",$val); //:前面的作为key，后面的作为value，放入数组中

    $headers_arr[$k] = $v;

}

$img_type = explode("/",trim($headers_arr['Content-Type']));  //然后将获取到的Content-Type中的值用/分隔开

if ($httpcode == 200 && strcasecmp($img_type[0],'image') == 0) {//如果httpcode为200，并且Content-type前面的部分为image，则说明该链接可以访问成功，并且是一个图片类型的

    $type = $img_type[1];

    .............

} else {//否则........

 ............

}
```

#### Vue
1. 使用axios获取响应头
2. 从响应头中取出content-type
3. 判断格式：/pdf或/images
4. 相应的，图片则使用组件库中的图片预览组件，pdf则使用弹窗内打开，或者新开标签页的方式
```
axios.get('url')
.then(response => {
    const isPDF = (type) => {
        return type && type.indexOf('/pdf') > -1
    }
    const isImage = (type) => {
        return type && type.indexOf('/image) > -1
    }
    let fileType = response.headers['content-type'] // "application/pdf"
    let fileTypes = {
        pdf: isPDF(fileType),
        image: isImage(fileType)
    }
    if(fileType.pdf){
        return // 弹窗
    }else if(fileType.images){
        return // 图片组件
    }
})
```