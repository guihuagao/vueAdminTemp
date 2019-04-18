export default [
  {
    path: '/components/count-to',
    component: () => import(/* webpackChunkName: "components-count-to" */ '@/views/components/count-to/index.vue')
  }
]
