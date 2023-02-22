<!--
 * @Author: dreamlixia 1763112943@qq.com
 * @Date: 2022-06-21 17:46:45
 * @LastEditors: dreamlixia 1763112943@qq.com
 * @LastEditTime: 2022-06-24 22:49:20
 * @FilePath: /MyBlog/blog/docs/src/前端/基础知识/npm i 报错.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

### npm i 报错
---

```
npm ERR! network This is a problem related to network connectivity.
npm ERR! network In most cases you are behind a proxy or have bad network settings.
npm ERR! network
npm ERR! network If you are behind a proxy, please make sure that the
npm ERR! network 'proxy' config is set properly.  See: 'npm help config'
```

#### 原因：代理问题
#### 解决：
>一：切换镜像源  npm config set registry http://registry.npmjs.org/

>二：删除本机代理：npm config delete proxy 或者 npm config rm proxy

如果接着遇到报错：
```
npm ERR! code EACCES
npm ERR! syscall open
npm ERR! path /Users/xxxxx/.npm/_cacache/index-v5/42/0b/
npm ERR! errno -13
npm ERR!
npm ERR! Your cache folder contains root-owned files, due to a bug in
npm ERR! previous versions of npm which has since been addressed.
npm ERR!
npm ERR! To permanently fix this problem, please run:
npm ERR! sudo chown -R 601:20 "/Users/user/.npm"
npm ERR! code EACCES
npm ERR! syscall open
npm ERR! path /Users/xxxxx/.npm/_cacache/index-v5/4d/c3/
```

不必惊慌，按照提示操作即可
```
sudo chown -R 601:20 "/Users/user/.npm"
```
再次执行npm i，大功告成