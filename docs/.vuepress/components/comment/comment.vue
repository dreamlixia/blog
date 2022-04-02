<template>
  <div class="gitalk-container">
    <div id="gitalk-container"></div>
  </div>
</template>
<script>
export default {
  name: 'comment',
  data() {
    return {};
  },
  mounted() {
    let body = document.querySelector('.gitalk-container');

    function loadJs (url) {
      let script = document.createElement('script');
      script.type="text/javascript";
      script.src = url;
      body.appendChild(script);
    }
    loadJs('https://cdn.bootcss.com/blueimp-md5/2.10.0/js/md5.js')
    loadJs('https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js');
    
    var headHTML = document.getElementsByTagName('head')[0].innerHTML;
    headHTML += '<link type="text/css" rel="stylesheet" href="//cdn.bootcss.com/gitalk/1.5.0/gitalk.min.css">';
    document.getElementsByTagName('head')[0].innerHTML = headHTML;

    script.onload = () => {
      const commentConfig = {
        clientID: 'cc97c48ea73de9896594',
        clientSecret: '3c6e53b4ff2e6992e249ca6af1007ca0429227d4',
        repo: 'blog',
        owner: 'dreamlixia',
        // 这里接受一个数组，可以添加多个管理员
        admin: ['dreamlixia'],
        // id 用于当前页面的唯一标识，一般来讲 pathname 足够了，
       
        // 但是如果你的 pathname 超过 50 个字符，GitHub 将不会成功创建 issue，此情况可以考虑给每个页面生成 hash 值的方法.
        id: md5(location.pathname),
        distractionFreeMode: false,
      };
      const gitalk = new Gitalk(commentConfig);
      gitalk.render('gitalk-container');
    };
  },
};
</script>