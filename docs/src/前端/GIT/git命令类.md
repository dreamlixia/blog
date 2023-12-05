#### 1.git pull失败不能合自动合并时：强制pull合并：
>```
>git pull origin master --allow-unrelated-histories
>```

#### 2.git fetch和git pull的区别
- 远端跟踪分支不同
    - git fetch能够直接修改远端分支
    - git pull不能直接对远端跟踪分支操作，需要切回本地分创建一个新的commit提交
- 拉取不同
    - git fetch会将数据拉取到本地，不会自动合并或修改当前的工作
    - git pull会将远程最新的版本并merge到本地，会自动合并或修改当前的工作
- commitId不同
    - 使用git fetch更新代码，本地master的commitId不变，还是等于1
    - 使用git pull更新代码，本地master的commitId会改变，会变成2

#### 3. git修改最后一次提交注释：git commit --amend

#### 常用命令
1. ```git reset --soft HEAD^``` 或 ```git reset --soft HEAD~1```
撤销上一次的本地commit并退回到暂存区，不删除工作区改动的代码；
2. ```git reset --mixed HEAD^```
撤销上一次的本地commit并退回到工作区，不删除工作区改动的代码；
3. ```git commmit --amend``` 进入 vim 模式后编辑(i)，保存退出（:wq）；
修改上一次的commit信息；