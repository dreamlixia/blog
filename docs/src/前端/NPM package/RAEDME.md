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
通过使用 @lynseyjen/jlxtrysch 代替 jlxtrysch，我们会创建一个在我们**用户名** scope 下的一个包。这个叫做 scoped package（域级包）。
```json
{
    "name": "@lynseyjen/jlxtrysch",
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

打包
---
Webpack、Parcel、Rollup 等打包工具。配置文件去 /面试题/打包工具/Rollup中查看。

版本
---
发布前需要升级包版本，每发布一次都需要执行更新一次版本，三种方式：
- 递增主版本号：
```bash
npm version major
```
- 递增次版本号：
```bash
npm version minor
```
- 递增补丁版本号：
```bash
npm version patch
```
注意事项  
Git 提交和标签：npm version 命令会自动创建一个新的 Git 提交和标签。如果你不希望创建 Git 提交和标签，可以使用 --no-git-tag-version 选项：
`npm version major --no-git-tag-version`
手动修改版本号：你也可以手动修改 package.json 文件中的版本号，然后提交更改。

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

如果某版本的包有问题，我们还可以将其**撤回**
---
```bash
npm unpublish [pkg]@[version]
```

指定发布到npm市场中的文件包含哪些
---
1. 创建.npmignore文件，其中写需要忽略的文件。
2. 在package.json 中增加files:[]项，其中包含在npm市场中能看到的文件。

验证发布的包内容
---
你可以使用 npm pack 命令在本地创建一个 tarball 文件，检查包中包含的文件：
```bash
npm pack
```
这将创建一个 .tgz 文件，你可以解压缩并检查其中包含的文件。
```bash
tar -xvzf your-package-name-1.0.0.tgz
```