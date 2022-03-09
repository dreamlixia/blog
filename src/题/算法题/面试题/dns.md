### DNS-prefetch: 

#### DNS
>Domain Name Systerm, 域名系统，作为域名和IP地址相互映射的一个分布式数据库。

#### DNS-Prefetching
>根据浏览器自定义规则，提前解析可能用到的域名，加快忘网站的访问速度。即提前解析域名，避免延迟。

#### 使用方式
>```
> <link rel="dns-prefetch" href="wwww.test.com">
> 默认加载条件：所有的a标签都会自动去启动DNS Prefetching，但在https下不起作用，解决：强制启动
> <meta http-equiv="x-dns-prefetch-control" conteny="on">
>```

#### 扩展

1. 数据库的类型有哪些？（分布式、……？）
2. web下的性能优化（网络方向）