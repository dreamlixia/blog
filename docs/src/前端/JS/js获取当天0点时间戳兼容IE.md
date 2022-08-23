### js获取当天0点时间戳兼容IE
---

当前时间

let time = new Date();

当天0点(京8时区写法)

let day = time - time % (24 * 60 * 60 * 1000) - 8 * 60 * 60 * 1000;

网上大部分的写法是

new Date( new Date( new Date().toLocaleDateString() ).getTime() );

在IE上获取到的是NaN