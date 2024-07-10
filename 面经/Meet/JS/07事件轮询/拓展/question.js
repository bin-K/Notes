/* 
  event loop中的Update the rendering（更新渲染）
    渲染的基本流程：
      1、处理 HTML 标记并构建 DOM 树。
      2、处理 CSS 标记并构建 CSSOM 树， 将 DOM 与 CSSOM 合并成一个渲染树。
      3、根据渲染树来布局，以计算每个节点的几何信息。
      4、将各个节点绘制到屏幕上。
    可以看到渲染树的一个重要组成部分是CSSOM树，绘制会等待css样式全部加载完成才进行，所以css样式加载的快慢是首屏呈现快慢的关键点。

  event loop和浏览器渲染时机
    浏览器更新渲染会在event loop中的 宏任务 和 微任务 完成后进行，即宏任务 → 微任务 → 渲染更新（先宏任务 再微任务，然后再渲染更新
    宏任务队列中，如果有大量任务等待执行时，将dom的变动作为微任务，能更快的将变化呈现给用户，这样就可以在这一次的事件轮询中更新dom
*/

/* 
  event loop 和 vue nextTick
    vue nextTick为什么要优先使用微任务实现？
      1、vue nextTick的源码实现，优先级判断，总结就是Promise > MutationObserver > setImmediate > setTimeout
      2、优先使用Promise，因为根据event loop与浏览器更新渲染时机，使用微任务，本次event loop轮询就可以获取到更新的dom
      3、如果使用宏任务，要到下一次event loop中，才能获取到更新的dom

*/

//#region node事件轮询
;(() => {
	/**
   * 
   * process.nextTick 是 Node.js 自身定义实现的一种机制，有自己的 nextTickQueue
     process.nextTick执行顺序早于微任务
 * 
 * process.nextTick()
   setTimeout()
   setImmediate()

   nodejs的事件轮询机制 :借助libnv库实现的
   概括事件轮询机制,分为六个阶段
   1. timers定时器阶段
      计时和执行到点的定时器回调函数
  2. pending callbacks
      某些系统操作（例如TCP错误类型）的回调函数
  3. idle， prepare
      准备工作
  4. poll轮询阶段(轮询队列)
      如果轮询队列不为空，依次同步取出轮询队列中第一个回调函数执行，直到轮询队列为空或者达到系统最大的限制
      如果轮询队列为空
        如果之前设置过setImmediate函数
            直接进入下一个check阶段
        如果之前没有设置过setImmediate函数
          在当前poll阶段等待直到轮询队列添加回调函数，就去第一个情况执行
        如果定时器到点了，也会去下一个阶段
  5. check查阶段
      执行setImmediate设置的回调函数
  6. close callbacks
      关闭阶段执行close事件回调函数

  process.nextTick能在任意阶段优先执行

 */

	setTimeout(() => {
		console.log('setTimeout()')
	}, 0)

	setImmediate(() => {
		console.log('setImmediate()')
	})

	process.nextTick(() => {
		console.log('process.nextTick()')
	})
})()
//#endregion
