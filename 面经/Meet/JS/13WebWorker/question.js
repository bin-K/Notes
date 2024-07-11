/* 
  Web Worker
    专门处理复杂计算的，从此让前端拥有后端的计算能力
  页面大量计算，造成假死
    浏览器有GUI渲染线程与JS引擎线程，这两个线程是互斥的关系
    当js有大量计算时，会造成UI 阻塞，出现界面卡顿、掉帧等情况，严重时会出现页面卡死的情况，俗称假死

  计算时长超过多久适合用Web Worker
    原则：
      运算时间超过50ms会造成页面卡顿，属于Long task，这种情况就可以考虑使用Web Worker
      但还要先考虑通信时长的问题，假如一个运算执行时长为100ms, 但是通信时长为300ms, 用了Web Worker可能会更慢
  最终标准：
    计算的运算时长 - 通信时长 > 50ms，推荐使用Web Worker

  Web Worker的限制
    1、在 Worker 线程的运行环境中没有 window 全局对象，也无法访问 DOM 对象
    2、Worker中只能获取到部分浏览器提供的 API，如定时器、navigator、location、XMLHttpRequest等
    3、由于可以获取XMLHttpRequest 对象，可以在 Worker 线程中执行ajax请求
    4、每个线程运行在完全独立的环境中，需要通过postMessage、 message事件机制来实现的线程之间的通信
*/
