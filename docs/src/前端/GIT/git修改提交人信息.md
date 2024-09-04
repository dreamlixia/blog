
git 修改提交人信息
---
在 Git 中，你可以使用 `git commit --amend` 命令来修改最近一次提交的提交人信息。如果你需要修改多个提交的提交人信息，可以使用 `git rebase -i` 命令进行交互式变基。

### 修改最近一次提交的提交人信息

如果你只需要修改最近一次提交的提交人信息，可以使用以下步骤：

1. 使用 `git commit --amend --author` 命令修改提交人信息：

    ```bash
    git commit --amend --author="New Author Name <new.email@example.com>"
    ```

2. 保存并退出编辑器。

### 修改多个提交的提交人信息

如果你需要修改多个提交的提交人信息，可以使用交互式变基：

1. 启动交互式变基：

    ```bash
    git rebase -i HEAD~n
    ```

    其中 `n` 是你想要修改的提交数。例如，如果你想修改最近的 3 个提交，可以使用 `HEAD~3`。

2. 在打开的编辑器中，将需要修改的提交前的 `pick` 改为 `edit`，然后保存并退出。

3. Git 会逐个停留在你标记为 `edit` 的提交上。此时，你可以使用 `git commit --amend --author` 命令修改提交人信息：

    ```bash
    git commit --amend --author="New Author Name <new.email@example.com>"
    ```

    保存并退出编辑器。

4. 继续变基过程：

    ```bash
    git rebase --continue
    ```

5. 重复步骤 3 和 4，直到所有标记为 `edit` 的提交都被修改。

### 示例操作

以下是一个具体的示例，假设你需要修改最近 3 个提交的提交人信息：

1. 启动交互式变基：

    ```bash
    git rebase -i HEAD~3
    ```

2. 在打开的编辑器中，将需要修改的提交前的 `pick` 改为 `edit`：

    ```plaintext
    edit abc1234 Commit message 1
    edit def5678 Commit message 2
    edit ghi9012 Commit message 3
    ```

    保存并退出编辑器。

3. 修改第一个提交的提交人信息：

    ```bash
    git commit --amend --author="New Author Name <new.email@example.com>"
    git rebase --continue
    ```

4. 修改第二个提交的提交人信息：

    ```bash
    git commit --amend --author="New Author Name <new.email@example.com>"
    git rebase --continue
    ```

5. 修改第三个提交的提交人信息：

    ```bash
    git commit --amend --author="New Author Name <new.email@example.com>"
    git rebase --continue
    ```

6. 完成变基过程。

### 注意事项

- 修改提交人信息会更改提交的哈希值，因此会影响到这些提交之后的所有提交。如果你已经将这些提交推送到远程仓库，需要强制推送（`git push --force`）来更新远程仓库。
- 强制推送可能会影响其他协作者，因此在执行强制推送之前，请确保所有协作者都了解并同意这次操作。

通过以上步骤，你可以修改 Git 提交的提交人信息，并确保提交记录符合你的要求。