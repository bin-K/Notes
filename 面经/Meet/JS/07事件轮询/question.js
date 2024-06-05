/**
 * *宏任务
      分类:setTimeout setInterval requestAnimationFrame
      1.宏任务所处的队列就是宏任务队列
      2.第一个宏任务队列中只有一个任务:执行主线程的js代码
      3．宏任务队列可以有多个
      4．当宏任务队列的中的任务压部执行完以后会查看是否有微任务队列如果有先执行微任务队列中的所有任务，
          最后再执行宏任务队列中的函数

*
*   微任务
        分类:new Promise( ).then(回调) process.nextTick
        1．微任务所处的队列就是微任务队列
        2．只有一个微任务队列
        3．在上一个宏任务队列执行完毕后如果有微任务队列就会执行微任务队列中的所有任务

 */

//#region 1
;() => {
	console.log('-------start------')

	setTimeout(() => {
		console.log('setTimeout()')
	}, 0)

	new Promise((resolve, reject) => {
		for (var i = 0; i < 5; i++) {
			console.log(i)
		}
		resolve()
	}).then(() => {
		console.log('Promise()')
	})

	console.log('----end----')

	// 执行结果： start 0 1 2 3 4 end Promise() setTimeout()
}

//#endregion

//#region 2
;() => {
	Promise.resolve()
		.then(function () {
			console.log('promise0')
		})
		.then(function () {
			console.log('promise5')
		})
	setTimeout(() => {
		console.log('timer1')
		Promise.resolve().then(function () {
			console.log('promise2')
		})
		Promise.resolve().then(function () {
			console.log('promise4')
		})
	}, 0)
	setTimeout(() => {
		console.log('timer2')
		Promise.resolve().then(function () {
			console.log('promise3')
		})
	}, 0)
	Promise.resolve().then(function () {
		console.log('promise1')
	})
	console.log('start')

	// 打印结果：start promise0 promise1 promise5 timer1 promise2 promise4 timer2 promise3
}
//#endregion

//#region 3
;() => {
	console.log('script start')
	async function async1() {
		await async2() // await 隐式返回promise
		console.log('async1 end') // 这里的执行时机：在执行微任务时执行
	}
	async function async2() {
		console.log('async2 end') // 这里是同步代码
	}
	async1()
	setTimeout(function () {
		console.log('setTimeout')
	}, 0)
	new Promise((resolve) => {
		console.log('Promise') // 这里是同步代码
		resolve()
	})
		.then(function () {
			console.log('promise1')
		})
		.then(function () {
			console.log('promise2')
		})
	console.log('script end')

	/**
	 * 首先同步任务先执行：script start 、遇到定时器，放到宏任务队列中，async1 start，遇到await，放入微任务队列中，执行async2，等待返回值async2
	 * 后面的代码将在同步任务执行完之后再执行，继续执行promise，第一个函数仍然是同步代码，执行promise1，后面的函数放入微任务队列
	 * 执行script end 同步任务执行完，执行异步微任务 async1 end、 promise2，这两者的顺序没有定论，看浏览器，最后执行宏任务setTimeout
	 */
	// 结果：script start -->  async2 end --> Promise -->
	// script end --> async1 end --> promise1 --> promise2 --> setTimeout
}
//#endregion

//#region node事件轮询
;(() => {
	/**
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
