(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{479:function(t,a,s){"use strict";s.r(a);var e=s(27),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"同一电脑不同sshkey配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#同一电脑不同sshkey配置"}},[t._v("#")]),t._v(" 同一电脑不同sshKey配置")]),t._v(" "),s("hr"),t._v(" "),s("h3",{attrs:{id:"_1-github账号ssh-key配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-github账号ssh-key配置"}},[t._v("#")]),t._v(" 1. github账号SSH Key配置")]),t._v(" "),s("h4",{attrs:{id:"设置全局名字和邮箱"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置全局名字和邮箱"}},[t._v("#")]),t._v(" 设置全局名字和邮箱")]),t._v(" "),s("blockquote",[s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('git config --global user.name "你github的用户名"\ngit config --global user.email "你github的邮箱"\n或者强制修改用户名和邮箱\ngit config --global --replace-all user.name "你github的用户名"\ngit config --global --replace-all user.email "你github的邮箱"\n')])])])]),t._v(" "),s("h4",{attrs:{id:"生成ssh-key"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生成ssh-key"}},[t._v("#")]),t._v(" 生成SSH Key")]),t._v(" "),s("blockquote",[s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('ssh-keygen -t rsa -C "你的github账号对应的邮箱"\n一路回车直到看见key\'s randomart image.\n')])])])]),t._v(" "),s("h4",{attrs:{id:"获取公钥"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取公钥"}},[t._v("#")]),t._v(" 获取公钥")]),t._v(" "),s("blockquote",[s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("cat id_rsa.pub\n复制公钥\n")])])])]),t._v(" "),s("h4",{attrs:{id:"将公钥加入到github中-选择setting-ssh-key添加即可"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#将公钥加入到github中-选择setting-ssh-key添加即可"}},[t._v("#")]),t._v(" 将公钥加入到github中，选择setting->SSH KEY添加即可")]),t._v(" "),s("h3",{attrs:{id:"_2-gitlab账号ssh-key配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-gitlab账号ssh-key配置"}},[t._v("#")]),t._v(" 2. gitlab账号SSH Key配置")]),t._v(" "),s("h4",{attrs:{id:"设置全局名字和邮箱-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置全局名字和邮箱-2"}},[t._v("#")]),t._v(" 设置全局名字和邮箱")]),t._v(" "),s("blockquote",[s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('git config --global user.name "你gitlab的用户名"\ngit config --global user.email "你gitlab的邮箱"\n')])])])]),t._v(" "),s("h4",{attrs:{id:"生成ssh-key-方法和上面类似"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生成ssh-key-方法和上面类似"}},[t._v("#")]),t._v(" 生成SSH Key，方法和上面类似")]),t._v(" "),s("blockquote",[s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('ssh-keygen -t rsa -C "GitLab" -b 4096\n填写生成的文件名称（存储gitlab公钥的地方）：自行输入hty\nEnter file in which to save the key(./User/Administrator/.ssh/id_rsa): hty\n覆盖文件：自行输入y\nOverwrite(y/n)? y\n直到看见key\'s randomart image.\n')])])])]),t._v(" "),s("h4",{attrs:{id:"获取公钥-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取公钥-2"}},[t._v("#")]),t._v(" 获取公钥")]),t._v(" "),s("blockquote",[s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("cat id_rsa.pub\n复制公钥\n")])])])]),t._v(" "),s("h4",{attrs:{id:"将公钥加入到gitlab中-选择setting-ssh-key添加即可"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#将公钥加入到gitlab中-选择setting-ssh-key添加即可"}},[t._v("#")]),t._v(" 将公钥加入到gitlab中，选择setting->SSH KEY添加即可")]),t._v(" "),s("h4",{attrs:{id:"这里取名为hty-pub。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#这里取名为hty-pub。"}},[t._v("#")]),t._v(" 这里取名为hty.pub。")]),t._v(" "),s("h3",{attrs:{id:"_3-配置两种不同的ssh-key"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-配置两种不同的ssh-key"}},[t._v("#")]),t._v(" 3. 配置两种不同的SSH key")]),t._v(" "),s("h4",{attrs:{id:"将密钥添加到ssh-agent中"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#将密钥添加到ssh-agent中"}},[t._v("#")]),t._v(" 将密钥添加到SSH agent中")]),t._v(" "),s("blockquote",[s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("ssh-add ~/.ssh/hty\n注意hty文件路径一定要正确，可自行验证\n")])])])]),t._v(" "),s("h5",{attrs:{id:"如果出现could-not-open-a-connection-to-your-authentication-agent的错误-就试着用以下命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如果出现could-not-open-a-connection-to-your-authentication-agent的错误-就试着用以下命令"}},[t._v("#")]),t._v(" 如果出现Could not open a connection to your authentication agent的错误，就试着用以下命令：")]),t._v(" "),s("blockquote",[s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("ssh-agent bash\nssh-add ~/.ssh/hty\n")])])])]),t._v(" "),s("h4",{attrs:{id:"找到并切换到-ssh的默认目录-一般在c-users-administrator目录下"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#找到并切换到-ssh的默认目录-一般在c-users-administrator目录下"}},[t._v("#")]),t._v(" 找到并切换到.ssh的默认目录，一般在C:\\Users\\Administrator目录下")]),t._v(" "),s("blockquote",[s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("cd C:\\Users\\Administrator\\.ssh 或 cd ~/.ssh\n")])])])]),t._v(" "),s("h4",{attrs:{id:"修改ssh-config文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改ssh-config文件"}},[t._v("#")]),t._v(" 修改ssh/config文件")]),t._v(" "),s("blockquote",[s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("vim ~/.ssh/config\n")])])]),s("p",[t._v("内容如下")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Host github.com  \n   HostName github.com  \n   PreferredAuthentications publickey  \n   IdentityFile ~/.ssh/id_rsa  \n\nHost gitlab  \n   HostName 你的gitlab项目域名 \n   PreferredAuthentications publickey  \n   IdentityFile ~/.ssh/hty  \n")])])])]),t._v(" "),s("h3",{attrs:{id:"_4-验证是否正确"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-验证是否正确"}},[t._v("#")]),t._v(" 4. 验证是否正确")]),t._v(" "),s("h4",{attrs:{id:"针对github-输入指令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#针对github-输入指令"}},[t._v("#")]),t._v(" 针对github，输入指令：")]),t._v(" "),s("blockquote",[s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("ssh -T git@github.com\n如果看到Hi!你的用户名或successfully等字样则代表成功。\n")])])])]),t._v(" "),s("h4",{attrs:{id:"针对gitlab-输入指令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#针对gitlab-输入指令"}},[t._v("#")]),t._v(" 针对gitlab，输入指令：")]),t._v(" "),s("blockquote",[s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("ssh -T git@gitlab.com\n同上则表示配置成功。\n")])])])]),t._v(" "),s("comment-comment")],1)}),[],!1,null,null,null);a.default=r.exports}}]);