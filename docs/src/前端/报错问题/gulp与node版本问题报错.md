
### 解决终端报错：primordials is not defined 问题
---

#### 原因：gulp与node版本不兼容

#### 解决: 回退node版本
+ 方法一
安装node11.15.0版本
```
npm install -g n
sudo n 11.15.0
```
+ 方法二
安装nvm，管理node版本
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
或
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```
 * 验证 nvm 是否已安装
```
command -v nvm
```
>mac在键入后从终端收到或看不到任何反馈，只需关闭当前终端，打开一个新终端，然后再次尝试验证。
> - nvm使用方法
>```
>$ nvm use 14
>Now using node v14.18.0 (npm v6.14.15)
>$ node -v
>v14.18.0
>$ nvm install 12
>Now using node v12.22.6 (npm v6.14.5)
>$ node -v
>v12.22.6
>```