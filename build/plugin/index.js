import vue from '@vitejs/plugin-vue'; // vue解析
import compression from './compression'; // 打包压缩
import cdnImport from './cnd-import'; // CDN引入

export default () => {
  return [vue(), compression(), cdnImport()];
};
