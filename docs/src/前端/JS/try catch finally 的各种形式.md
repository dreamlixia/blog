---
title: try/catch/finally
---

[https://juejin.cn/post/7195357321554296892?searchId=20240708192445D953746FC076B71084C3](https://juejin.cn/post/7195357321554296892?searchId=20240708192445D953746FC076B71084C3)

try...catch
---



try...finally
---



try...catch...finally
---
- try 代码块的执行是最先执行，只有当 try 代码块抛出了异常，才会进入 catch 代码块。
- try...finally 中，如果 try 代码块中抛出了异常，那么这个异常会被外层最近的 catch 代码块捕获。
- finally 代码块总是会执行的，不管 try 代码块是否抛出异常，以及 catch 代码块是否执行。
- finally 代码块的执行时机：如果 try/catch 代码块中包含流程控制语句（例如：return，break，continue，throw），
那么 finally 代码块会在这些流程控制语句执行之前执行。如果不包含流程控制语句，则在对应的代码块执行完成之后开始执行。如果 finally 代码块
包含流程控制语句，那么 finally 代码块的流程控制语句就会先执行，进而替换掉原来 try/catch 中的流程控制语句。这个需要注意。