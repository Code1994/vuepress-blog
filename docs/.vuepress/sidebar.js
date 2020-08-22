// 数组形式 所有的侧边栏都一样 而且该侧边栏包含所有配置路由
// 对象形式 侧边栏分为多个 每个侧边栏只会匹配当前满足的路由
module.exports = {
  // 前端基础
  '/FE/HTML5/': [
    '/FE/HTML5/',
    '/FE/HTML5/1.semantic.md',
    '/FE/HTML5/5.graphic.md',
  ],
  '/FE/CSS3/': [
  ],

  // 部署
  '/deploy/Nginx/': [
    '/deploy/Nginx/',
    '/deploy/Nginx/1.install.md',
    '/deploy/Nginx/2.introduce.md',
    '/deploy/Nginx/3.separation.md',
    '/deploy/Nginx/4.reverseProxy.md',
    '/deploy/Nginx/5.loadBalance.md',
  ],

  // 工具
  '/tool/Charles/': [
    '/tool/Charles/',
    '/tool/Charles/1.PC.md',
    '/tool/Charles/2.mobile.md',
  ]
}
