//#region 浏览器进程
/* 
  主进程（browser）：界面显示，用户交互，子进程管理，提供存储
  渲染进程（render）：浏览器内核，将html，CSS， js转换成用户可以交互的页面，出于安全考虑，渲染进程都是运行在沙箱下
  GPU进程：绘制UI页面以及实现3D CSS效果
  第三方插件进程：负责插件的运行
*/
//#endregion

//#region 渲染进程的5种线程

/* 
  GUI渲染线程：页面渲染，构建DOM树和CSSOM树
  JS引擎线程：处理JS脚本，与GUI线程互斥
  事件触发线程：将准备好的事件交给JS引擎执行
  定时器触发线程：负责执行定时器函数
  异步请求线程：执行异步请求函数
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
