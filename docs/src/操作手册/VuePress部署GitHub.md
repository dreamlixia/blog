---
title : 操作手册
---

### VuePress部署GitHub Pages
---

### 1. 初始化github仓库

>####  在github上新建仓库

###  2. 初始化项目
>####  初始化本地项目，将 VuePress 作为本地依赖安装
>```
>cd ~/Desktop
>mkdir my-vuepress
>cd my-vuepress
>npm init -y
>```
>####  将 VuePress 作为一个本地依赖安装
>```
>yarn add -D vuepress 或者：npm install -D vuepress
>```
>####  新建一个 docs 文件夹
>```
>mkdir docs
>```
>####  新建一个 markdown 文件
>```
>echo '#### Hello VuePress!' > docs/README.md
>```
>#### 在 package.json 里添加脚本
>```
>{
>  "scripts": {
>    "docs:dev": "vuepress dev docs",
>    "docs:build": "vuepress build docs",
>    "deploy-gh": "GH=1 yarn docs:build && bash scripts/deploy-gh.sh"
>  }
>}
>```
>#### 运行本地开发环境或构建线上静态文件
>```
>npm run docs:dev 或 npm run docs:build
>```

### 3. 配置 GitHub Pages

> ####  在 docs/.vuepress/config.js 中配置 base
>```
>module.exports = {
>  title: "My Blog",
>  description: "This is a blog.",
>  base: '/blog/' 
>}
>```
> ####  新建脚本 my-vuepress/scripts/deploy-gh.sh
>```
>set -e
>npm run build
>cd docs/.vuepress/dist
>git init
>git add -A
>git commit -m 'deploy'
> <USERNAME> 换成你自己的 Github 用户名，<REPO> 换成仓库名
>git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages（本仓库运行 git push -f git@github.com:dreamlixia/blog.git master:gh-pages 即可）
>
>(如需要，关联远程仓库：git remote add origin git@github.com:dreamlixia/blog.git)
>cd -
>```
> ####  执行脚本进行部署
>```
>npm run deploy-gh
>```
> ####  返回 Git 仓库，点击 settings查看pages，可以看到访问地址(https:xxx.github.io/xxx/)
