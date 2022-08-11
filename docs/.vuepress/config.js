const getConfig = require('./lib')
const config = getConfig('src')

module.exports = {
    title: "Lynsey's blog", //"My Blog",
    description: "This is a blog.",
    base: '/blog/',
    themeConfig: {
        ...config,
        author: 'jinglixia',
        logo: "https://cdn4.buysellads.net/uu/1/41334/1550855401-cc_light.png",
        // tags:"/tags",
        nav: [
            // { text: 'Home', link: '/' },
            { text: '前端', link: '/src/前端/基础知识/DNS/' },
            { text: '算法题', link: '/src/算法题/JS/' },
            { text: '操作手册', link: '/src/操作手册/开发运行此项目/' },
            // { text: '关于我', link: "/src/关于我/主页/" }
        ],
        displayAllHeaders: true, //显示所有页面的标题链接
        lastUpdated: '上次更新时间'
    },
    search: true,
    searchMaxSuggestions: 10,
    // 项目开始时间
    startYear: '2022',
    // plugins: [
    //     'meting', {
    //       metingApi: "https://music.163.com/#/playlist?id=5312894314", // "https://meting.sigure.xyz/api/music",
    //       meting: {
    //         auto: 'https://music.163.com/#/playlist?id=5312894314',
    //         server: "netease",
    //         type: "playlist",
    //         mid: "5312894314",
    //       },          // 不配置该项的话不会出现全局播放器
    //       aplayer: {
    //         // 歌单为随机
    //         order: 'random',
    //         // 0为不显示歌词
    //         lrcType: 3,
    //         // 音量
    //         volume: 0.15,
    //         // 开启迷你模式
    //         mini: true,
    //         // 自动播放
    //         autoplay: true
    //       }
    //     }
    // ],
    plugins: [
      'meting', {
        metingApi: "https://meting.sigure.xyz/api/music",
        meting: {
          auto: "https://music.163.com/#/playlist?id=5312894314",
          server: "netease",
          type: "song", //playlist",
          mid: "5312894314",
        },          // 不配置该项的话不会出现全局播放器
        aplayer: {
          fixed: true,
          order: 'random',
          lrcType: 3,
          volume: 0.15,
          mini: true,
          autoplay: true
        }
      }
    ]
}