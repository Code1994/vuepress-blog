const nav = require('./nav')
const sidebar = require('./sidebar')
module.exports = {
  title: 'JsGoShu’s Blog',
  description: '个人技术博客',
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/blog/', // 这是部署到github相关的配置 下面会讲。 静态资源配置的时候直接用绝对路径。如果不是根目录'/'访问的话，需要设置前缀。
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  
  themeConfig: {
    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
    // 顶部导航栏
    nav,
    // 侧边栏
    sidebar,
    // 启用页面滚动
    smoothScroll: true
  }
};
