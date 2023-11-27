## html2canvas 踩坑
---

[html2canvas.js实现html生成图片-稀土掘金](https://juejin.cn/post/7121631173549228069)

代码实现
---
```
  import html2canvas from 'html2canvas';

   // dom元素转为图片
  const handleDomToImg = async () => {
    // 获取dom元素
    const graphImg = document.getElementById('htmlToImgBox');
    // 创建canvas元素
    const canvasdom = document.createElement('canvas');

    // 获取dom宽高
    const w = parseInt(window.getComputedStyle(graphImg).width, 10);
    const h = parseInt(window.getComputedStyle(graphImg).height, 10);
    
    // 设定 canvas 元素属性宽高为 DOM 节点宽高 * 像素比 
    const scaleBy = 2; //也可以用window.devicePixelRatio，
    canvasdom.width = width * scaleBy; 
    canvasdom.height = height * scaleBy;
    
    //scale:2 按比例增加分辨率，将绘制内容放大对应比例
    const canvas = await html2canvas(graphImg, { canvas: canvasdom, scale: scaleBy,useCORS:true });
    
    //将canvas转为base64
    const url = canvas.toDataURL();
    
    //配置下载的文件名
    const fileName = `下载报告${new Date().valueOf()}`;
    downloadFile(url, fileName);
  };

  const downloadFile = (href, fileName = '报告') => {
    const downloadElement = document.createElement('a');
    downloadElement.href = href;
    downloadElement.download = `${fileName}.png`;
    document.body.appendChild(downloadElement);
    downloadElement.click();
    document.body.removeChild(downloadElement);
    window.URL.revokeObjectURL(href);
  };
```

```
<div className={style.preview} id="htmlToImgBox">
    <div className={style['preview-title']}>
    <span>测试学校</span>
    <span>学习笔记完成情况</span>
    </div>
    <div className={style['preview-sub-title']}>
    <span>2022-12-12 18:00:00</span>
    <span>高一年级</span>
    </div>
    <div className={style['preview-content']}>
    <div className={classnames(style['preview-card'], style.blue)}>
        <div>笔记上传数</div>
        <div>
        共计
        <span className={style['preview-num']}>3000</span>
        份
        </div>
    </div>
    <div className={classnames(style['preview-card'], style.orange)}>
        <div>优秀笔记上传数 </div>
        <div>
        共计
        <span className={style['preview-num']}>1002</span>
        份
        </div>
    </div>
    <div className={classnames(style['preview-card'], style.zise)}>
        <div>参与人数</div>
        <div>
        共计
        <span className={style['preview-num']}>3002</span>
        人
        </div>
    </div>
    <div className={classnames(style['preview-card'], style.red)}>
        <div>参与人数占比</div>
        <div>
        <span className={style['preview-num']}>37</span>
        %
        </div>
    </div>
    </div>
    <div className={style['preview-footer']}>
    学习笔记有助于帮助学生养成良好的学习习惯，促进对内容的理解，加强记忆知识点
    </div>
</div>
```

生成倍图
---

```canvasdom.width``` 以及 ```html2canvas``` 的 ```scale``` 配置

1. canvasdom.width=2*w 、scale=2
<div style="text-align:center">
    <img width="100%" src="./../../../images/canva2scale2.png" alt="" >
</div> 

2. canvasdom.width=2*w 、scale=1
<div style="text-align:center">
    <img width="100%" src="./../../../images/canva2scale1.png" alt="" >
</div>

3. canvasdom.width=1*w 、scale=1
<div style="text-align:center">
    <img width="100%" src="./../../../images/canva1scale1.png" alt="" >
</div>

4. canvasdom.width=1*w 、scale=2
<div style="text-align:center">
    <img width="100%" src="./../../../images/canva1scale2.png" alt="" >
</div>

总结：
--- 
**canvasdom.width影响最终生成的图片的尺寸，scale配置项代表将绘制内容放大对应比例，如果需要生成2倍图，则需要同时将两个地方设置为2。**

图片清晰度优化
---
1. canvas.width和canvas.style.width
- canvas.width / canvas.height 表示画布真实大小，我们并不可见
- canvas.style.width / canvas.style.height 表示画布输出到浏览器我们最终可见的的大小
- 不提供canvas真实大小时，默认按300*150处理，如果指定canvas.width / canvas.height,没有指定canvas.style，则两者相同
- canvas绘制的时候先是参考自己本身画布大小进行绘制，绘制完毕，由style指定的大小，渲染在浏览器页面上。

canvas.width和canvas.style.width也是影响图片模糊的关键
```
 <canvas id="diagonal" style="border:1px solid;width:200px;height:200px;" width="100px" height="100px">
 
 function drawDiagonal(id) {
      var canvas = document.getElementById(id);
      var context = canvas.getContext("2d");
      context.beginPath();
      context.moveTo(0, 0);
      context.lineTo(100, 100);
      context.stroke();
 }

window.onload = function() {
   drawDiagonal("diagonal");
}
```

**将canvas的属性width和height属性放大为2倍（或者设置为devicePixelRatio倍），最后将canvas的CSS样式width和height设置为原先1倍的大小，可以达到提高清晰度的目的。**
```
convert2canvas() {
    var shareContent = YourTargetElem; 
    var width = shareContent.offsetWidth; 
    var height = shareContent.offsetHeight; 
    var canvas = document.createElement("canvas"); 
    var scale = 2; 

    canvas.width = width * scale; 
    canvas.height = height * scale; 
    canvas.getContext("2d").scale(scale, scale); 

    var opts = {
        scale: scale, 
        canvas: canvas, 
        logging: true, 
        width: width, 
        height: height 
    };
    html2canvas(shareContent, opts).then(function (canvas) {
        var context = canvas.getContext('2d');
        var img = Canvas2Image.convertToImage(canvas, canvas.width, canvas.height);
        document.body.appendChild(img);
        $(img).css({ 
            "width": canvas.width / 2 + "px", //缩小图片尺寸
            "height": canvas.height / 2 + "px",
        })
    });
}
```