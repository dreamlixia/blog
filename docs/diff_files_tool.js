/**
 * 实现打印当前分支与master分支对比的所有diff文件列表
 */
const { exec } = require('child_process');

// 执行 Git 命令
const execGitCommand = (command) => {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(`Error: ${stderr}`);
      } else {
        resolve(stdout.trim());
      }
    });
  });
};

// 获取当前分支名称
const getCurrentBranch = async () => {
  const branch = await execGitCommand('git rev-parse --abbrev-ref HEAD'); // git version < 2.22
//   const branch = await execGitCommand('git branch --show-current'); // git version >= 2.22
//   console.log('branch =', branch);
  return branch;
};

// 获取当前分支和 master 分支之间的差异文件列表
const getDiffFiles = async (currentBranch) => {

//   const diffFiles = await execGitCommand(`git diff --name-only ${currentBranch} master`);

/**
 * 关键点：
 * 时间较久的分支会出现 diff 出来许多无用其他文件的问题，解决办法是需要寻找两个分支的共同祖先提交
 * 
 * const  base_commit =`$(git merge-base HEAD origin/master)`;
 * const diffFiles = await execGitCommand(`git diff --relative --name-only ${base_commit}`);
 * 
 */
 
  const  base_commit =`$(git merge-base HEAD origin/master)`;

  const diffFiles = await execGitCommand(`git diff --relative --name-only ${base_commit}`);
 
  return diffFiles.split('\n').filter(file => file);
};

const main = async () => {
  try {
    const currentBranch = await getCurrentBranch();
    console.log(`当前分支: ${currentBranch}`);

    const diffFiles = await getDiffFiles(currentBranch);
    console.log(`当前分支和 master 分支之间的差异文件列表共${diffFiles.length}个:`);
    diffFiles.forEach(file => console.log(file));
  } catch (error) {
    console.error(error);
  }
};

main();