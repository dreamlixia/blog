export default ({
    Vue, // VuePress 正在使用的 Vue 构造函数
    options, // 附加到根实例的一些选项
    router, // 当前应用的路由实例
    siteData // 站点元数据
}) => {
    Vue.mixin({
        mounted () {
            // const allItems = document.querySelectorAll('.page .sidebar-sub-header');
            const allItems = document.querySelectorAll('.sidebar-heading');
            allItems.forEach((item, index) => {
                // setTimeout(() => {
                //     item.click();
                // }, index*200);
                item.click();
            });
        }
    });
}