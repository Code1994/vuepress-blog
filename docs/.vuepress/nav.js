module.exports = [
  // 内部链接 以docs为根目录
  { 
    text: '前端基础', 
    items: [
      {
        text: 'HTML5',
        link: '/FE/html5/'
      },
      {
        text: 'CSS3',
        link: '/FE/css3/'
      },
      {
        text: 'JavaScript',
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
        text: 'HTTP',
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
        text: 'Babel',
        link: '/engineer/babel/1.start.md'
      },
      {
        text: 'Postcss',
        link: '/engineer/postcss/'
      },
      {
        text: 'Webpack',
        link: '/engineer/webpack/1.start.md'
      },
      {
        text: 'Git',
        link: '/engineer/git/1.start.md'
      }
    ]
  },
  { 
    text: '后端', 
    link: '/BE/',
    items: [
      {
        text: 'Node',
        link: '/BE/node/'
      }
    ]
  },
  {
    text: '数据库',
    link: '/DB/',
    items: [
      {
        text: 'Mysql',
        link: '/DB/mysql/'
      },
      {
        text: 'Mongodb',
        link: '/DB/mongodb/'
      }
    ]
  },
  {
    text: '部署',
    link: '/deploy/',
    items: [
      {
        text: 'Nginx',
        link: '/deploy/nginx/'
      },
      {
        text: 'Docker',
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
        text: 'Vuepress',
        link: '/tool/vuepress/'
      },
      {
        text: 'Charles',
        link: '/tool/charles/'
      }
    ]
  },
  {
    text: 'GitHub',
    link: 'https://github.com/Code1994'
  }
]
