// 跟鉴权无关的特殊路由
const exceptionRoutes = [
  {
    path: '/403',
    name: '403',
    meta: {
      title: '无访问权限',
    },
    component: () => import('@/views/exception/403.vue'),
  },
  {
    path: '/404',
    name: '404',
    meta: {
      title: '页面走丢了',
    },
    component: () => import('@/views/exception/404.vue'),
  },
  {
    path: '/500',
    name: '500',
    meta: {
      title: '服务器出错了',
    },
    component: () => import('@/views/exception/500.vue'),
  },
  {
    path: '/:pathMatch(.*)',
    meta: {},
    redirect: '/404',
  },
];

export default exceptionRoutes;
