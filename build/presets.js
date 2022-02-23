import vue from '@vitejs/plugin-vue'; // vue解析
import AutoImport from 'unplugin-auto-import/vite'; // 自动引入组件
import Components from 'unplugin-vue-components/vite'; // 自动解析成组件
import { TDesignResolver } from 'unplugin-vue-components/resolvers'; // 组件resolvers
import importToCDN from 'vite-plugin-cdn-import'; // CDN引入
import viteCompression from 'vite-plugin-compression'; // 打包压缩
import WindiCSS from 'vite-plugin-windicss'; // 下一代工具优先的 CSS 框架

export default () => {
  return [
    vue(),
    AutoImport({
      dts: './build/auto-imports.d.ts',
      imports: ['vue', 'pinia', 'vue-router', '@vueuse/core'],
      resolvers: [
        TDesignResolver({
          library: 'vue-next',
        }),
      ],
    }),
    Components({
      dts: './build/components.d.ts',
      extensions: ['vue'],
      include: [/\.vue$/],
      // imports 指定组件所在位置，默认为 src/components; 有需要也可以加上 view 目录
      dirs: ['src/components/'],
      resolvers: [
        TDesignResolver({
          library: 'vue-next',
        }),
      ],
    }),
    viteCompression({
      verbose: true, // 是否在控制台输出压缩结果
      disable: false, // 是否禁用
      // filter:()=>{}, // 过滤哪些资源不压缩 RegExp or (file: string) => boolean
      threshold: 1024 * 50, // 体积大于50KB才会被压缩，单位 b
      deleteOriginFile: false, // 压缩后是否删除源文件
      algorithm: 'gzip', // 压缩算法,可选 [ 'gzip' , 'brotliCompress' ,'deflate' , 'deflateRaw']
      ext: '.gz', // 生成的压缩包后缀
    }),
    importToCDN({
      modules: [
        // {
        //   name: 'vue',
        //   var: 'Vue',
        //   path: 'https://lib.baomitu.com/vue/3.2.31/vue.global.min.js',
        // },
      ],
    }),
    WindiCSS(),
  ];
};
