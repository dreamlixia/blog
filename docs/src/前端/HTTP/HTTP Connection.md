<!-- 可以一次请求获取很多资源 --> 
<!-- 一次链接，多次请求 -->
<!-- 长链接的作用 -->

HTTP Connection 一次链接，多次请求
---

- HTTP的请求是在TCP连接上发送的
- TCP的链接又分为长链接、短链接
- HTTP的请求要先创建一个TCP链接
- 然后在TCP的链接上将HTTP请求发送并返回
- 这个时候一次HTTP请求就结束了，浏览器和服务端会考虑是否关闭这个TCP链接
- 如果不关闭，TCP链接就会一直开着，会有一定的消耗
- 如果接下来还有请求，就可以在这个TCP连接上发送，就不需要进行三次握手去创建链接的消耗
- 如果直接关闭，就代表下次请求还要去重新创建链接，会有一个网络延迟的开销，但会减少客户端和服务端链接的并发数
- 但实际使用中，每次创建并关闭的策略会影响效率，实际网站的并发量比较大，这样实际的开销会远远超过保持长链接的策略
- 长链接可以设置超时功能，如果一段时间没有请求的话就自动关闭，所以保持长链接才是最好的策略

**如何保证浏览器创建的是长链接而非短链接呢？**
- 在network点击任意一个链接，Response Headers内一般有一个Connection: keep-alive
- 这就代表链接是被保持的，不会一下关闭
- Request Headers内一般也有Connection: keep-alive
- 此header的含义是当client和server通信时对于长链接如何进行处理
- 在http1.1中,client和server都是默认对方支持长链接的
- 如果client使用http1.1协议，但又不希望使用长链接，则需要在header中指明connection的值为close
>```
>    const http = require('http');
>    const fs = require('fs');
>
>    http.createServer((req, res) => {
>        console.log('req come: ', req.url);
>        if(req.url === '/') {
>            const html = fs.readFileSync('test.html', 'utf8');
>            res.writeHead(200, {
>                'Content-Type': 'text/html',
>                'Connection': 'close' // 添加这行
>            });
>            res.end(html);
>        } else {
>            // 此处显示图片
>            const img = fs.readFileSync('test.jpg');
>            res.writeHead(200, {
>                'Content-Type': 'image/jpg',
>                'Connection': 'close' // 添加这行
>            });
>            res.end(img);
>        }
>    }).listen(8000, () => {
>        console.log('server is running on port 8000');
>    });
>
>```

- 我们在开发服务器时，可以合理利用这个Connection: Keep-Alive
- 可以给当前TCP链接设置一个自动关闭的时间，这是服务端的设置和HTTP协议没有太大关系
- 在HTTP2版本中, 有了一个信道复用的概念, 在TCP链接上可以并发的发送HTTP请求
- 这表示着我们在访问网站时，可以使用一个TCP链接就可以了，这样就可以极大的降低开销、提升速度
- 可以打开谷歌网站查看HTTP2版本的使用，在同域下基本都是使用同一个Connection ID