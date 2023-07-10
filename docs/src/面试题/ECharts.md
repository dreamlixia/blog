响应容器大小的变化
---

监听图表容器的大小并改变图表大小

在有些场景下，我们希望当容器大小改变时，图表的大小也相应地改变。

比如，图表容器是一个高度为 400px、宽度为页面 100% 的节点，你希望在浏览器宽度改变的时候，始终保持图表宽度是页面的 100%。

这种情况下，可以监听页面的 <span style="color: #c7254e; font-weight: 600;">resize</span> 事件获取浏览器大小改变的事件，然后调用 echartsInstance.resize 改变图表的大小。

```
<style>
  #main,
  html,
  body {
    width: 100%;
  }
  #main {
    height: 400px;
  }
</style>
<div id="main"></div>
<script type="text/javascript">
  var myChart = echarts.init(document.getElementById('main'));
  window.addEventListener('resize', function() {
    myChart.resize();
  });
</script>
```