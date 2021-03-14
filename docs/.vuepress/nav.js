module.exports = [
  // 内部链接 以docs为根目录
  { 
    text: '前端基础', 
    items: [
      {
        text: 'html5',
        link: '/FE/html5/'
      },
      {
        text: 'css3',
        link: '/FE/css3/'
      },
      {
        text: 'javascript',
        items: [
          { text: 'BOM', link: '/FE/javascript/BOM/1.start.md' },
          { text: 'DOM', link: '/FE/javascript/DOM/1.start.md' },
          { text: 'ECMAScript', link: '/FE/javascript/ECMAScript/1.start.md' }
        ]
      },
    ] 
  }, 
  {
    text: 'TCP/IP',
    link: '/tcp/',
    items: [
      {
        text: 'http',
        link: '/tcp/http/'
      }
    ]
  },
  {
    text: '跨平台',
    link: '/cross/',
    items: [
      {
        text: 'H5',
        link: '/cross/h5/'
      },
      {
        text: '微信公众号',
        link: '/cross/weChat-public/'
      }
    ]
  },
  {
    text: '工程化',
    link: '/engineer/',
    items: [
      {
        text: 'babel',
        link: '/engineer/babel/1.start.md'
      },
      {
        text: 'postcss',
        link: '/engineer/postcss/'
      },
      {
        text: 'webpack',
        link: '/engineer/webpack/1.start.md'
      },
      {
        text: 'git',
        link: '/engineer/git/'
      }
    ]
  },
  { 
    text: '后端', 
    link: '/BE/',
    items: [
      {
        text: 'node',
        link: '/BE/node/'
      }
    ]
  },
  {
    text: '数据库',
    link: '/DB/',
    items: [
      {
        text: 'mysql',
        link: '/DB/mysql/'
      },
      {
        text: 'mongodb',
        link: '/DB/mongodb/'
      }
    ]
  },
  {
    text: '部署',
    link: '/deploy/',
    items: [
      {
        text: 'nginx',
        link: '/deploy/nginx/'
      },
      {
        text: 'docker',
        link: '/deploy/docker/'
      },
      {
        text: 'CI/CD',
        link: '/deploy/CI-CD/'
      }
    ]
  },
  {
    text: '工具',
    link: '/tool/',
    items: [
      {
        text: 'vuepress',
        link: '/tool/vuepress/'
      },
      {
        text: 'charles',
        link: '/tool/charles/'
      }
    ]
  },
  {
    text: 'GitHub',
    link: 'https://github.com/Code1994'
  }
]
