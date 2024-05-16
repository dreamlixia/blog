git pull失败不能合自动合并时：强制pull合并：
---
>```
>git pull origin master --allow-unrelated-histories
>```

git fetch和git pull的区别
---
- 远端跟踪分支不同
    - git fetch能够直接修改远端分支
    - git pull不能直接对远端跟踪分支操作，需要切回本地分创建一个新的commit提交
- 拉取不同
    - git fetch会将数据拉取到本地，不会自动合并或修改当前的工作
    - git pull会将远程最新的版本并merge到本地，会自动合并或修改当前的工作
- commitId不同
    - 使用git fetch更新代码，本地master的commitId不变，还是等于1
    - 使用git pull更新代码，本地master的commitId会改变，会变成2

常用命令
---
1. ```git reset --soft HEAD^``` 或 ```git reset --soft HEAD~1```
(回退)撤销上一次的本地commit并退回到暂存区，不删除工作区改动的代码；
2. ```git reset --mixed HEAD^```
撤销上一次的本地commit并退回到工作区，不删除工作区改动的代码；
3. ```git commmit --amend``` 
修改上一次的commit信息；进入 vim 模式后编辑(i)，保存退出（:wq）；

git rebse
---
a、`git log` 查看需要合并的 commit 个数

b、`git rebase -i HEAD~2`（2为个数，根据自己需求）

c、弹出 pick 开头的 `commit` 哈希记录，把需要合并的记录中的 `pick` 改为 `s`，注意第一个不支持修改，会提示错误，第一个及以后的支持修改。
>- 如总共有3条 `commit` 记录，修改后两条为 `s`，则会保存第一条 `commit` 的时间和 `commit` 信息作为代码最后修改的 `commit` 记录。
>
>- 如总共有3条 `commit` 记录，修改中间记录为 `s`，则会合并第一条和第二条，保留第一条和第三条的 `commit` 信息，代码最后修改时间最后一条 `commit` 记录。

d、修改 `pick` 为 `s` 保存退出后，会弹出 `commit` 信息，同样 `vim` 进入修改注释掉不需要的信息，也可以不修改，那么记录会被自动合并为 `* feat: xxx \n * feat: xxx` 这种格式的 `commit` 信息；

e、中途在自动 `rebase` 的过程中，如果遇到冲突，`bash` 分支名会变成冲突的哈希，此时可以 `git status` 查看冲突的工作区文件，解决完冲突，执行 `git add .`, `git rebase --continue`, 就可以继续完成 `rebase`，但如果发现冲突解决不了想要退出此次 `rebase` 操作，可以执行 `git rebase --abort` 去放弃本次操作，回到 `git rebase` 之前的状态，`commit` 回到之前的样子。