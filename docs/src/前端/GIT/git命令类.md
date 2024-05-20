强制pull合并
---
`git pull` 失败不能合自动合并时使用 `git pull origin master --allow-unrelated-histories`

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

git stash
---
[掘金](https://juejin.cn/post/6844904085716467720?searchId=20240520104628D5A405AA6BC7343A69A2)

当我们在分支进行开发中，遇到需要切换到其他分支进行紧急修复bug的情况时，当前分支的修改可能会丢失，或者拒绝切换分支，此时，我们就需要把当前的修改暂存到一个地方，这时就会用到 `git stash` 命令。

- `git stash` 暂存
- `git stash pop` 取出暂存的内容
- `git stash list` 查看暂存的记录（也就代表可以执行多次暂存）
```bash
git stash list
输出：
stash@{0}: WIP on master: 709627d Initial commit
stash@{1}: WIP on master: 709627d Initial commit
注释：
stash@{index}: WIP on [分支名]: [最近一次的commitID] [最近一次的提交信息]
```
我们发现两次储藏记录的标识信息完全一致，只有其前面的index有别。

由于我们在功能分支下的两次储藏中均未发生提交，所以其提交ID是一致的。

这样明显会带来问题，需要标识下储藏记录

- `git stash -m [stashMessage]` 标记储藏记录
如果不带 -m message 而是直接 `git stash`，则会记录最近一次 commit 的信息：`stash@{index}: WIP on [分支名]: [最近一次的commitID] [最近一次的提交信息]`
- `git stash apply index` 取出指定index的储藏的修改到工作区中
- `git stash drop index` 删除指定index的储藏记录
- `git stash clear` 批量删除储藏记录
- `git stash -u` 对未追踪文件也进行储藏 (git stash [-u|--include-untracked])
- `git stash -S` 只对暂存区文件进行储藏（git stash [-S|--staged]）
- `git stash -a` 对所有文件进行储藏（git stash [-a|--all]）

可以通过命令 `git stash --help` 查阅更多相关命令