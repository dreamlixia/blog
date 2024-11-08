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
  const diffFiles = await execGitCommand(`git diff --name-only ${currentBranch} master`);
  return diffFiles.split('\n').filter(file => file);
};

const main = async () => {
  try {
    const currentBranch = await getCurrentBranch();
    console.log(`当前分支: ${currentBranch}`);

    const diffFiles = await getDiffFiles(currentBranch);
    console.log(`当前分支和 master 分支之间的差异文件列表:`);
    diffFiles.forEach(file => console.log(file));
  } catch (error) {
    console.error(error);
  }
};

main();