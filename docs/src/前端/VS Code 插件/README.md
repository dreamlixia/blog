---
title: vs code 插件
---

镜像
---
```bash
npm config set registry https://registry.npmmirror.com
```
安装
---
```bash
sudo npm install -g yo generator-code
yo code
```
<img src="./../../../../images/vscode.jpg" />

package.json
---
```json
{
  "name": "xxxx",
  "displayName": "xxxx",
  "description": "xxxx",
  "version": "0.0.1",
  "publisher": "vscode user id (name)",
  "engines": {
    "vscode": "^1.54.0"
  },
  "repository": {
    "type": "git",
    "url": "git@github.com:xxx/xxx.git"
  },
  "categories": [
    "Other"
  ],
  "activationEvents": [
    "onCommand:extension.xxx",
    "onStartupFinished"
  ],
  "activationEvents": [],
  "main": "./dist/extension.js",
  "contributes": {
    "commands": [
      {
        "command": "xxxx.xxx",
        "title": "XXX"
      }
    ]
  },
  "scripts": {
    "vscode:prepublish": "npm run package",
    "compile": "webpack",
    "watch": "webpack --watch",
    "package": "webpack --mode production --devtool hidden-source-map",
    "compile-tests": "tsc -p . --outDir out",
    "watch-tests": "tsc -p . -w --outDir out",
    "pretest": "npm run compile-tests && npm run compile && npm run lint",
    "lint": "eslint src",
    "test": "vscode-test"
  },
  "devDependencies": {
    "@types/vscode": "^1.54.0",
    "@types/mocha": "^10.0.9",
    "@types/node": "20.x",
    "@typescript-eslint/eslint-plugin": "^8.10.0",
    "@typescript-eslint/parser": "^8.7.0",
    "eslint": "^9.13.0",
    "typescript": "^5.6.3",
    "ts-loader": "^9.5.1",
    "webpack": "^5.95.0",
    "webpack-cli": "^5.1.4",
    "@vscode/test-cli": "^0.0.10",
    "@vscode/test-electron": "^2.4.1"
  }
}
```

Submit
---
绑定github仓库提交代码
```bash
git add . && git commit -m 'feat: release plugin' && git push
```

发布
---
- 安装vsce
```bash
npm i vsce -g
```
- 创建个人访问令牌、创建组织
`https://learn.microsoft.com/zh-cn/azure/devops/organizations/projects/create-project?view=azure-devops&tabs=browser`
- 登陆vsce
```bash
vsce login <publisher name>
```
- 打包
```bash
vsce package
```
- 发布
```bash
vsce publish
```
去vscode插件市场上传打包出来的 .vsix 包即可。 `https://marketplace.visualstudio.com/manage/publishers/lynsey`