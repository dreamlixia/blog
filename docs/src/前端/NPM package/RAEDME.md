---
title: 尝试开发一个NPM包
---

切换镜像到 npm 源
---
`npm config set registry https://registry.npmjs.org`

登陆
---
`npm login` 或者 `npm adduser`，会提示跳转到 npm 登陆网页，输入密码后邮箱会收到一个验证码，输入验证码，登陆成功后回到终端，可以看到提示登录成功。

创建目录
---
```bash
md jlxtrysch
```

进入目录创建 package.json
---
```bash
cd jlxtrysch && touch package.json
```

添加包信息
---
```json
{
    "name": "@bamlehorse/jlxtrysch",
    "version": "1.0.0"
}
```

添加 README
---
[使用好看的标签徽章 https://shields.io/badges](https://shields.io/badges)

```md
[![Static Badge](https://img.shields.io/badge/jlxtrysch-v1.0.0-blue?labelColor=gray)](https://github.com/dreamlixia/jlxtrysch)
```

绑定github仓库
---
git init ~ git push

代码许可
---
每个 GitHub 仓库中都有一个名为 insights，找到社区项目标准 Community Standards - License。我将要从那里添加我的许可。

添加包代码
---
新建一个index.js文件
```js
module.exports = function jlxtrysch(string) {
    if (typeof string !== "string") throw new TypeError("jlxtrysch wants a string!");
    return console.log(`Hi, you entered ${string.replace(/\s/g, "")}`);
};
```
补全package.json介绍
```json
{
    "name": "@lynseyjen/jlxtrysch",
    "version": "2.0.0",
    "description": "Removes all spaces from a string and console log it",
    "license": "MIT",
    "repository": {
        "type": "git",
        "url": "git+https://github.com/bamblehorse/jlxtrysch.git"
    },
    "main": "index.js",
    "keywords": [
        "jlxtrysch",
        "npm",
        "package",
        "bamblehorse"
    ]
}
```

版本
---
发布前需要升级包版本，每发布一次都需要执行更新一次版本
```bash
npm version major
```

发布包
---
```bash
npm publish
```

指定发布成公共包
---
Scoped packages 会被自动发布为私有包，因为这样不但对我们这样的独立用户有用，需要让每个人都可以使用这个模块，不要把它锁进 npm 的保险库中
```bash
npm publish --access=public
```

就可以在npm上找到自己发布的包了
---
[https://www.npmjs.com/](https://www.npmjs.com/)