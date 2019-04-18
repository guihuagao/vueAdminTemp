export default [
  {
    name: '首页',
    path: '/dashboard',
    icon: 'dashboard'
  },
  {
    name: '组件',
    path: '/components',
    icon: 'component',
    children: [
      {
        name: '数字渐变',
        path: '/components/count-to',
        icon: 'rise'
      }
    ]
  },
  {
    name: '优化',
    path: '/optimization',
    icon: 'optimization',
    children: [
      {
        name: '图片自动压缩',
        path: '/optimization/image-compression',
        icon: 'compression'
      }
    ]
  }

]
