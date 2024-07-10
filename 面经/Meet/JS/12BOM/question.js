//#region 定时器
/* 
  setTimeout固定时长后执行
  setInterval间隔固定时间重复执行
  setTimeout、setInterval最短时长为4ms

  定时器不准的原因
    setTimeout/setInterval执行的时间并不是确定的，由于 setTimeout/setInterval 是宏任务，
    根据事件轮询，如果上一个宏任务阻塞延迟了，代码执行时间超过了定时器的时间就会出现定时器不准的情况
  动画卡顿
    不同屏幕的刷新频率不同，定时器只能设置固定的时间间隔，这个时间间隔可能跟屏幕的刷新间隔不同

  requestAnimationFrame
    requestAnimationFrame 是浏览器专门为动画提供的API
    requestAnimationFrame刷新频率与显示器的刷新频率保持一致，使用该api可以避免使用setTimeout/setInterval造成动画卡顿的情况
    requestAnimationFrame：告诉浏览器在下次重绘之前执行传入的回调函数(通常是操纵dom，更新动画的函数)

  setTimeout、setInterval、requestAnimationFrame 三者的区别
    1）引擎层面
      setTimeout属于 JS引擎 ，存在事件轮询
      requestAnimationFrame 属于 GUI引擎
      JS引擎与GUI引擎是互斥的，也就是说 GUI引擎在渲染时会阻塞JS引擎的计算
      这样设计的原因，如果在GUI渲染的时候，JS同时又改变了dom，那么就会造成页面渲染不同步
    2）性能层面
      当页面被隐藏或最小化时，定时器 setTimeout仍会在后台执行动画任务
      当页面处于未激活的状态下，该页面的屏幕刷新任务会被系统暂停，requestAnimationFrame也会停止
*/
// setTimeout 模拟 setInterval
;(() => {
	function mySetInterval(fn, t) {
		let timer = null
		function interval() {
			fn()
			timer = setTimeout(interval, t)
		}
		interval()
		return {
			cancle() {
				clearTimeout(timer)
			},
		}
	}

	mySetInterval(() => {
		console.log(11)
	}, 1000)
})()

// setInterval 模拟 setTimeout
;(() => {
	function mySetTimeout(fn, t) {
		let timer = setInterval(() => {
			clearInterval(timer)
			fn()
		}, t)
	}

	mySetTimeout(() => {
		console.log(22)
	}, 1000)
})()
//#endregion
