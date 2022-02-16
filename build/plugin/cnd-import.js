import importToCDN from 'vite-plugin-cdn-import'; // cdn引入

export default () => {
  // CDN引入 [文档](https://github.com/mmf-fe/vite-plugin-cdn-import/blob/HEAD/README.zh-CN.md)
  return importToCDN({
    modules: [
      {
        name: 'vue',
        var: 'Vue',
        path: `https://unpkg.com/vue@next`,
      },
    ],
  });
};
