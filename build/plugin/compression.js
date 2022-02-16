import viteCompression from 'vite-plugin-compression'; // 开启压缩

export default () => {
  // 开启压缩 [文档](https://github.com/anncwb/vite-plugin-compression/blob/main/README.zh_CN.md)
  return viteCompression({
    verbose: true, // 是否在控制台输出压缩结果
    disable: false, // 是否禁用
    // filter:()=>{}, // 过滤哪些资源不压缩 RegExp or (file: string) => boolean
    threshold: 1024 * 50, // 体积大于50KB才会被压缩，单位 b
    deleteOriginFile: false, // 压缩后是否删除源文件
    algorithm: 'gzip', // 压缩算法,可选 [ 'gzip' , 'brotliCompress' ,'deflate' , 'deflateRaw']
    ext: '.gz', // 生成的压缩包后缀
  });
};
