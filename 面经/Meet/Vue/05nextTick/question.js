/* 
Vue.$nextTick 为什么优先使用微任务实现：
  根据 event loop 与浏览器更新渲染时机，宏任务 → 微任务 → 渲染更新，使用微任务，本次event loop轮询就可以获取到更新的dom
  如果使用宏任务，要到下一次event loop中，才能获取到更新的dom


*/
