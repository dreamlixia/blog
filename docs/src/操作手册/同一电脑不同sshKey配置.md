---
title : 同一电脑不同sshKey配置
---

### 同一电脑不同sshKey配置
---

### 1. github账号SSH Key配置

#### 设置全局名字和邮箱
>```
>git config --global user.name "你github的用户名"
>git config --global user.email "你github的邮箱"
>或者强制修改用户名和邮箱
>git config --global --replace-all user.name "你github的用户名"
>git config --global --replace-all user.email "你github的邮箱"
>```

#### 生成SSH Key
>```
>ssh-keygen -t rsa -C "你的github账号对应的邮箱"
>一路回车直到看见key's randomart image.
>```

#### 获取公钥
>```
>cat id_rsa.pub
>复制公钥
>```

#### 将公钥加入到github中，选择setting->SSH KEY添加即可


### 2. gitlab账号SSH Key配置

#### 设置全局名字和邮箱
>```
>git config --global user.name "你gitlab的用户名"
>git config --global user.email "你gitlab的邮箱"
>```

#### 生成SSH Key，方法和上面类似
>```
>ssh-keygen -t rsa -C "GitLab" -b 4096
>填写生成的文件名称（存储gitlab公钥的地方）：自行输入hty
>Enter file in which to save the key(./User/Administrator/.ssh/id_rsa): hty
>覆盖文件：自行输入y
>Overwrite(y/n)? y
>直到看见key's randomart image.
>```

#### 获取公钥
>```
>cat id_rsa.pub
>复制公钥
>```

#### 将公钥加入到gitlab中，选择setting->SSH KEY添加即可

#### 这里取名为hty.pub。


### 3. 配置两种不同的SSH key

#### 将密钥添加到SSH agent中
>```
>ssh-add ~/.ssh/hty
>注意hty文件路径一定要正确，可自行验证
>```

##### 如果出现Could not open a connection to your authentication agent的错误，就试着用以下命令：
>```
>ssh-agent bash
>ssh-add ~/.ssh/hty
>```

#### 找到并切换到.ssh的默认目录，一般在C:\Users\Administrator目录下
>```
>cd C:\Users\Administrator\.ssh 或 cd ~/.ssh
>```

#### 修改ssh/config文件
>```
>vim ~/.ssh/config
>```
>内容如下
>```
>Host github.com  
>    HostName github.com  
>    PreferredAuthentications publickey  
>    IdentityFile ~/.ssh/id_rsa  
>
>Host gitlab  
>    HostName 你的gitlab项目域名 
>    PreferredAuthentications publickey  
>    IdentityFile ~/.ssh/hty  
>```

### 4. 验证是否正确

#### 针对github，输入指令：
>```
>ssh -T git@github.com
>如果看到Hi!你的用户名或successfully等字样则代表成功。
>```

#### 针对gitlab，输入指令：
>```
>ssh -T git@gitlab.com
>同上则表示配置成功。
>```