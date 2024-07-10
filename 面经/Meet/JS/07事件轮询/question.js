/**
 * 事件轮询机制 Event loop
 * 	JS的一大特点是单线程，所有任务都得排队，前一个任务结束，后一个任务才会执行，如果前一个任务执行时间过长，后一个任务就不得不等着
 * 		这里的任务分为两种： 宏任务 和 微任务
 * 		当宏任务执行完成后，会判断微任务队列中是否有任务，如果有，则把微任务放到主线程中并执行，如果没有，执行下一个宏任务
 * *宏任务：在主线程上排队执行的任务，前一个任务执行完毕，才能执行下一个任务
      分类:script全部代码（注意同步代码也属于宏任务）、setTimeout、setInterval、setImmediate、requestAnimationFrame （task 任务源）
      1.宏任务所处的队列就是宏任务队列
      2.第一个宏任务队列中只有一个任务:执行主线程的js代码
      3．宏任务队列可以有多个
      4．当宏任务队列的中的任务压部执行完以后会查看是否有微任务队列如果有先执行微任务队列中的所有任务，
          最后再执行宏任务队列中的函数
*   微任务：不进入主线程，进入微任务队列的任务
        分类:new Promise( ).then(回调) process.nextTick、MutationObserver
        1．微任务所处的队列就是微任务队列
        2．只有一个微任务队列
        3．在上一个宏任务队列执行完毕后如果有微任务队列就会执行微任务队列中的所有任务
		事件轮询机制的执行过程
			1、代码执行过程中，宏任务和微任务分别放在不同的队列中
			2、当某个宏任务执行完成后，会查看微任务队列是否任务，如果有，执行微任务队列中的所有微任务
			3、微任务执行完成后，读取宏任务队列中排在第一个的宏任务（注意宏任务是一个一个读取），执行该宏任务，执行过程中遇到微任务，依次加入到微任务队列
			4、宏任务执行完成，再次读取微任务队列中的微任务，并执行，以此类推
		举个简单的例子，假设一个script标签的代码如下：
			Promise.resolve().then(function promise1 () {
       console.log('promise1');
    	})
			setTimeout(function setTimeout1 (){
					console.log('setTimeout1')
					Promise.resolve().then(function  promise2 () {
						console.log('promise2');
					})
			}, 0)

			setTimeout(function setTimeout2 (){
				console.log('setTimeout2')
			}, 0)

		script里的代码被列为一个task，放入task队列。

		循环1：

			【task队列：script ；microtask队列：】
				从task队列中取出script任务，推入栈中执行。
				promise1列为microtask，setTimeout1列为task，setTimeout2列为task。
			【task队列：setTimeout1 setTimeout2；microtask队列：promise1】
				script任务执行完毕，执行microtask checkpoint，取出microtask队列的promise1执行。
		循环2：

			【task队列：setTimeout1 setTimeout2；microtask队列：】
				从task队列中取出setTimeout1，推入栈中执行，将promise2列为microtask。
			【task队列：setTimeout2；microtask队列：promise2】
				执行microtask checkpoint，取出microtask队列的promise2执行。
		循环3：
			【task队列：setTimeout2；microtask队列：】
				从task队列中取出setTimeout2，推入栈中执行。
				setTimeout2任务执行完毕，执行microtask checkpoint。
			【task队列：；microtask队列：】
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

//#region 4
;(() => {
	Promise.resolve()
		.then(() => {
			console.log(0)
			return Promise.resolve(4)
		})
		.then((res) => {
			console.log(res)
		})
	Promise.resolve()
		.then(() => {
			console.log(1)
		})
		.then(() => {
			console.log(2)
		})
		.then(() => {
			console.log(3)
		})
		.then(() => {
			console.log(5)
		})
		.then(() => {
			console.log(6)
		})
	/* 
		依次打印 1 2 3 4 5 6
		按照正常的执行逻辑 如果不return Promise.resolve, 俩个Promise.resolve()的then会依次交叉打印，
		但每return Promise.resolve 会使得下一次打印慢两步
	*/
})()
//#endregion
