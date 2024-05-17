position 属性 sticky
---
```css
{
    position: sticky;
}
```
#### 用法 ####
- sticky：粘性定位元素。
- 在目标区域以内，它的行为就像 position:relative; 在滑动过程中，某个元素距离其父元素的距离达到 sticky 粘性定位的要求时(比如top：100px)；position:sticky 这时的效果相当于fixed定位，固定到适当位置。
- 可以说是相对定位relative和固定定位fixed的结合。
- 元素固定的相对偏移是相对于离它最近的具有滚动框的祖先元素，如果祖先元素都不可以滚动，那么是相对于 viewport 来计算元素的偏移量。

#### 使用条件 ####
1. 父元素不能 overflow:hidden 或者 overflow:auto 属性。
2. 必须指定 top、bottom、left、right 4个值之一，否则只会处于相对定位
3. 父元素的高度不能低于 sticky 元素的高度
4. sticky 元素仅在其父元素内生效

#### 示例 ####
<div style="width: 100%; height: 100%;">
    <img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/3/11/170c9c195a0a9254~tplv-t2oaga2asx-jj-mark:3024:0:0:0:q75.awebp" loading="lazy" class="medium-zoom-image">
</div>

```html
<tab-control class="tab-control" :titles="['流行','新款','精选']"></tab-control>
```
```css
.tab-control {
    position: sticky;
    top: 44px;
}
```

> position 的属性值：static、relative、absolute、fixed、inherit和sticky

#### 兼容 ####
目前几乎只有 IE 和 Opera 不支持，具体更新情况可查看 caniuse 网站 
[https://caniuse.com/?search=position%3A%20sticky](https://caniuse.com/?search=position%3A%20sticky)