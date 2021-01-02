// 数组形式 所有的侧边栏都一样 而且该侧边栏包含所有配置路由
// 对象形式 侧边栏分为多个 每个侧边栏只会匹配当前满足的路由
module.exports = {
  // 前端基础
  '/FE/html5/': [
    '/FE/html5/',
    '/FE/html5/1.semantic.md',
    '/FE/html5/5.graphic.md',
  ],
  '/FE/CSS3/': [
  ],

  // 跨平台
  '/cross/h5/': [],
  '/cross/weChat-public/': [
    '/cross/weChat-public/'
  ],

  // 工程化
  '/engineer/babel/': [
    '/engineer/babel/1.start.md',
    '/engineer/babel/2.cli.md',
    // '/engineer/babel/3.config-files.md',
    // '/engineer/babel/4.plugins.md',
    // '/engineer/babel/5.presets.md',
    // '/engineer/babel/6.polyfill.md',
  ],
  '/engineer/webpack/': [
    '/engineer/webpack/1.start.md',
    '/engineer/webpack/2.entry.md',
    '/engineer/webpack/3.output.md',
    '/engineer/webpack/4.resolve.md',
    '/engineer/webpack/5.module.md',
    '/engineer/webpack/6.plugins.md',
    '/engineer/webpack/7.devServer.md',
    '/engineer/webpack/8.environment.md',
    '/engineer/webpack/9.optimization.md'
  ],

  // 部署
  '/deploy/nginx/': [
    '/deploy/nginx/',
    '/deploy/nginx/1.install.md',
    '/deploy/nginx/2.introduce.md',
    '/deploy/nginx/3.separation.md',
    '/deploy/nginx/4.reverseProxy.md',
    '/deploy/nginx/5.loadBalance.md',
  ],

  // 工具
  '/tool/charles/': [
    '/tool/charles/',
    '/tool/charles/1.PC.md',
    '/tool/charles/2.mobile.md',
  ]
}
