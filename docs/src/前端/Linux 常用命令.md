---
title: Linux 常用命令
---

[https://juejin.cn/post/7381652250815250483](https://juejin.cn/post/7381652250815250483)

#### 文件目录操作
- cp: 复制文件或目录

`cp file.txt /home/user` 复制 file.txt 到 /home/user 目录

- cd: 切换目录

- mikdir: 创建目录

`mkdir new_directory` 创建一个名为 new_directory 的新目录。

- ls: 列出目录内容

`ls -l` 列出当前目录下的文件和目录的详细信息，包括权限、所有者、文件大小和修改时间等。

- pwd: 显示当前目录

- rm: 删除文件或目录

`rm file.txt` 删除 file.txt 文件；

> - `rm -r directory` 删除目录：递归删除 directory 及其内容。慎用
> - f：（force）强制删除，不提示任何警告信息。
> - i：（interact）交互式删除，删除前确认是否删除。
> - r：（recursive）递归删除，用于删除目录及其内容。
> - v：（verbose）显示详细信息，列出每个被删除的文件和目录。

- mv: 移动或重命名文件或目录

`mv file.txt newfile.txt` 将 file.txt 重命名为 newfile.txt。

#### 文件权限管理
- chmod：修改文件权限

`chmod a+x ex1` 命令的作用是将文件 ex1 设置为可执行文件

> - a 表示所有用户，包括文件的所有者（owner）、所属组（group）和其他用户（others）。
> - +x 表示增加可执行权限。+x 将允许相应的用户执行该文件。
> - ex1 是要修改权限的文件名。

- chown: 修改文件所有者

`chown user:usergroup file.txt` 将 file.txt 的所有者修改为 user，所属组修改为 usergroup。

#### 系统信息查看
- df：显示文件系统磁盘使用情况

`df -h` 以人类可读的形式显示磁盘使用情况。

- du: 显示目录或文件的磁盘使用情况

`du -sh /home/user` 显示 /home/user 目录的总大小。

- top: 动态显示系统进程(实时监控系统资源使用情况，如CPU、内存等。)

#### 进程管理
- ps - 显示当前进程

`ps aux` 显示所有用户的所有进程。

- kill - 终止进程

`kill 1234` 终止进程号为1234的进程。

- pkill - 按名称终止进程

`pkill python` 终止所有名称为 python 的进程。