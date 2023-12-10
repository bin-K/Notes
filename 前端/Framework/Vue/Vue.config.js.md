### 基本配置

```js
module.exports = {
  // 部署应用包时包含的基础URL，与webpack的output.publicPath一致
  publicPath: './',
  // 生产环境是否生成SourceMap
  productionSoureMap: false,
  // build 时输出的文件目录
  outputDir: './dist',
  // 静态文件目录
  assetsDir: './src/assets',
  // 保存时是否使用eslint true, false, error, error时出现错误会编译失败
  lintOnSave: false,
  // 代理服务器
  devServer: {
    port: 3000,
    host: '0.0.0.0',
    https: false,
    open: false
  }
}
```

- productionSourceMap： 生产环境是否生成SourceMap
- publicPath: 部署应用包时包含的基础URL，与webpack的output.publicPath一致
- outputDir: build时输出的文件目录
- assetsDir: 静态文件目录
- devServer: 代理服务器配置
  - port: 端口
  - host:开发运行时的域名
  - https:是否启用https
  - open: `npm run serve`是否打开浏览器

### webpack配置

```

```

