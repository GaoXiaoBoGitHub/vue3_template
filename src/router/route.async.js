// 需要鉴权的业务路由
const asyncRoutes = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: '',
      icon: '',
    },
    component: () => import('@/views/home/index.vue'),
  },
];

// 开发环境使用定义好的路由
// 生产环境根据接口返回数据生成路由
export default import.meta.env.DEV ? asyncRoutes : [];
