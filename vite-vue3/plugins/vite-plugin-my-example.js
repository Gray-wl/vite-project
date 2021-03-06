export default function myExample() {
  // 返回的是插件对象
  return {
    name: 'my-example', // 名称用于警告和错误展示
    // enforce: 'pre' | 'post',
    // 初始化hooks，只走一次
    options(opts) {
      console.log('options', opts);
    },
    buildStart() {
      console.log('buildStart');
    },
    config(config) {
      console.log('config', config);
      return {};
    },
    configResolved(resolvedConfig) {
      console.log('configResolved', resolvedConfig);
    },
    configureServer(server) {
      console.log('configureServer');
      // 例如做mock server必须使用的hook
      // server.app.use((req, res, next) => {});
    },
    transformIndexHtml(html) {
      console.log('transformIndexHtml');
      return html;
      // return html.replace(/<title>(.*?)<\/title>/, `<title>Title Replace</title>`);
    },
    // id确认
    resolveId(source) {
      if(source === 'virtual-module') {
        console.log('resolveId', source);
        return source; // 返回source表明命中，vite不再询问其他插件处理该id请求
      }
      return null; // 返回null表明是其他id要继续处理
    },
    // 加载模块代码
    load(id) {
      if(id === 'virtual-module') {
        console.log('load');
        return 'export default "This is virtual"'; // 返回virtual-module模块
      }
      return null; // 其他id继续处理
    },
    // 转换
    transform(code, id) {
      if(id === 'virtual-module') {
        console.log('transform');
      }
      return code;
    }
  }
}
