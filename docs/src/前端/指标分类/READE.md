做告警或看板的指标分类

性能指标
---
FCP、FP、CDN耗时、接口耗时等

1. **首次内容绘制（First Contentful Paint, FCP）**：从页面开始加载至任何部分的内容（包括文本、图片、SVG等）被浏览器渲染所需要的时间。这是一个重要的性能指标，标志着用户看到来自网站的第一个可视反馈，从而可以开始与页面交互。

2. **最大内容绘制（Largest Contentful Paint, LCP）**：渲染页面主要内容所需的时间。它度量的是用户何时看到页面主要内容的可视反馈。Google 通常推荐这个指标在2.5秒以内。

3. **可交互时间（First Input Delay, FID 或 Time to Interactive, TTI）**：页面首次完全可交互的时间点。这个指标度量了页面从加载开始到可靠地、快速响应用户输入所需的时间。

4. **累计布局偏移（Cumulative Layout Shift, CLS）**：测量网页中所有的布局偏移量，以评估网页的总体布局稳定性。目标值应当小于0.1，表示网页的可视区域在加载过程中的稳定性。

5. **速度指数（Speed Index）**：表示页面内容渲染的可视完成程度在时间维度上的指标，主要反映页面平均呈现速度。值越小，用户感知的加载速度就越快。

6. **时间到首字节（Time to First Byte, TTFB）**：这是服务器响应第一个请求的总时间，从浏览器发送请求到收到响应的第一个字节所经过的时间。

7. **FMP（First Meaningful Paint）**：即首次绘制有意义内容的时间,当整体页面的布局和文字内容全部渲染完成后,即可认为是完成了首次有意义内容的绘制。

这些指标都可以通过使用谷歌的 [Lighthouse](https://developers.google.com/web/tools/lighthouse) 工具，以及其他性能分析工具（如WebPageTest、PageSpeed Insights等）进行测量和分析。

稳定性指标
---
JS错误率、请求成功率、白屏率、新增 JS 错误等等

业务指标
---
PV、UV、MAU、留存率等