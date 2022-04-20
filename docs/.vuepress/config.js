const getConfig = require('./lib')
const config = getConfig('src')

module.exports = {
    title: "My Blog",
    description: "This is a blog.",
    base: '/blog/',
    themeConfig: {
        ...config,
        author: 'jinglixia',
        logo: "https://cdn4.buysellads.net/uu/1/41334/1550855401-cc_light.png",
        // tags:"/tags",
        nav: [
            // { text: 'Home', link: '/' },
            { text: '一些记录', link: '/src/一些记录/' },
            { text: '算法题', link: '/src/算法题/JS' },
            { text: '操作手册', link: '/src/操作手册/开发运行此项目' }
        ],
        displayAllHeaders: true //显示所有页面的标题链接
    },
    search: true,
    searchMaxSuggestions: 10,
    // 项目开始时间
    startYear: '2022'
}