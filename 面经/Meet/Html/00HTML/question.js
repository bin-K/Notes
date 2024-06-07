//#region 语义化
/* 
  header nav aside section footer
  article em strong 

  优点：
  - 代码结构清晰，易于阅读，利于开发和维护
  - 提高用户体验，在样式加载失败时，页面结构清晰
  - 方便其他设备解析（如屏幕阅读器）根据语义渲染网页
  - 有利于搜索引擎优化（SEO），搜索引擎爬虫会根据不同的标签来赋予不同的权重
*/
//#endregion

//#region defer和async
/* 
（1）defer 和 async属性都是去异步加载外部的JS脚本文件，它们都不会阻塞页面的解析

（2）defer会在文档加载完成之后再执行，多个defer存在时，会按顺序执行

（3）async会在js加载完成后立即执行、会阻塞页面的加载、多个async存在时，不能保证执行顺序

（4）async与defer同时存在，以async为准
*/
//#endregion

//#region src和link
/* 
  （1）src和link都是对外部资源的引用

  （2）src表示对资源的引用，下载会阻塞页面的加载，并且嵌入到标签所在位置

  （3）link表示对超文本的引用，下载不会阻塞页面的加载
*/
//#endregion

//#region meta标签
/* 
（1）charset：字符集

（2）keyword：关键词

（3）description：描述

（4）viewport：视窗

（5）refresh：刷新
*/
//#endregion
