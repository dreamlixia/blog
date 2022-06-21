<!--
 * @Author: your name
 * @Date: 2022-06-21 18:09:08
 * @LastEditTime: 2022-06-22 00:18:12
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /Blog/docs/src/前端/基础知识/npm i报proxy错误解决.md
-->


在npm i的时候报proxy错的解决办法：
---

在npm install安装依赖的时候，出现如下报错：
```
npm ERR! code ENOTFOUND
npm ERR! syscall getaddrinfo
npm ERR! errno ENOTFOUND
npm ERR! network request to http://artifactory.intra.xiaojukeji.com/artifactory/api/npm/npm/whatwg-fetch/-/whatwg-fetch-3.6.2.tgz?dl=https%3A%2F%2Fregistry.npmmirror.com%2Fwhatwg-fetch%2F-%2Fwhatwg-fetch-3.6.2.tgz failed, reason: getaddrinfo ENOTFOUND artifactory.intra.xiaojukeji.com
npm ERR! network This is a problem related to network connectivity.
npm ERR! network In most cases you are behind a proxy or have bad network settings.
npm ERR! network
npm ERR! network If you are behind a proxy, please make sure that the
npm ERR! network 'proxy' config is set properly.  See: 'npm help config'

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/didi/.npm/_logs/2022-06-21T10_01_52_148Z-debug-0.log
```
解决办法：
1. 先清除掉以前的代理设置
```
$ npm config set proxy null
$ npm config set https-proxy null
```
也可以先通过以下代码查看代理设置，如果返回null那就不需要清理。
```
$ npm config get proxy
$ npm config get https-proxy
```
2. 清除缓存
```
npm cache clean --force
```
3. 重新设置
```
$ npm config registry http://registry.cnpmjs.org/
```
也可以使用国内淘宝镜像
```
npm config set registry https://registry.npm.taobao.org
```
4. 重新进行npm i, 可能会出现另一个错误
```
npm notice Beginning October 4, 2021, all connections to the npm registry - including for package installation - must use TLS 1.2 or higher. You are currently using plaintext http to connect. Please visit the GitHub blog for more information: https://github.blog/2021-08-23-npm-registry-deprecating-tls-1-0-tls-1-1/
npm WARN deprecated source-map-url@0.4.1: See https://github.com/lydell/source-map-url#deprecated
npm WARN deprecated har-validator@5.1.5: this library is no longer supported
npm WARN deprecated source-map-resolve@0.5.3: See https://github.com/lydell/source-map-resolve#deprecated
npm WARN deprecated fsevents@1.2.13: fsevents 1 will break on node v14+ and could be using insecure binaries. Upgrade to fsevents 2.
npm WARN deprecated chokidar@2.1.8: Chokidar 2 does not receive security updates since 2019. Upgrade to chokidar 3 with 15x fewer dependencies
npm WARN deprecated uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.
npm WARN deprecated request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142
npm notice Beginning October 4, 2021, all connections to the npm registry - including for package installation - must use TLS 1.2 or higher. You are currently using plaintext http to connect. Please visit the GitHub blog for more information: https://github.blog/2021-08-23-npm-registry-deprecating-tls-1-0-tls-1-1/
npm WARN deprecated svgo@1.3.2: This SVGO version is no longer supported. Upgrade to v2.x.x.
npm WARN deprecated docsearch.js@2.6.3: This package has been deprecated and is no longer maintained. Please use @docsearch/js.
npm WARN deprecated highlight.js@9.18.5: Support has ended for 9.x series. Upgrade to @latest
npm ERR! Cannot read properties of null (reading 'pickAlgorithm')

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/didi/.npm/_logs/2022-06-21T10_15_53_602Z-debug-0.log
```
5. 确保现在在官方镜像上
```
npm config set registry http://registry.npmjs.org/
```
6. 把npm更新到最新
```
npm i -g npm
```
7. 进行npm i