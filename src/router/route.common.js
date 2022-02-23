// 不需要鉴权的业务路由
const commonRoutes = [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录',
      icon: '',
    },
    component: () => import('@/views/login/index.vue'),
  },
];

export default commonRoutes;
