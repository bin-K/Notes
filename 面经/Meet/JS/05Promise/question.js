//#region  手写Promise
;(() => {
	class MyPromise {
		constructor(executor) {
			this.state = 'pending'
			this.data = undefined
			this.error = undefined
			this.resolveTask = []
			this.rejectTask = []
			try {
				executor(this.resolve.bind(this), this.reject.bind(this))
			} catch (error) {
				this.reject(error)
			}
		}

		resolve = (value) => {
			if (this.state !== 'pending') return
			this.state = 'fullfilled'
			this.data = value
			setTimeout(() => {
				this.resolveTask.forEach((cb) => cb(value))
			})
		}

		reject = (error) => {
			if (this.state !== 'pending') return
			this.state = 'rejected'
			this.error = error
			setTimeout(() => {
				this.rejectTask.forEach((cb) => cb(error))
			})
		}

		then(onResolveCallback, onRejectCallback) {
			onResolveCallback = onResolveCallback
				? onResolveCallback
				: (value) => value
			onRejectCallback = onRejectCallback
				? onRejectCallback
				: (error) => {
						throw error
				  }
			return new MyPromise((resolve, reject) => {
				this.resolveTask.push(() => {
					setTimeout(() => {
						const res = onResolveCallback(this.data)
						if (res instanceof MyPromise) {
							res.then(resolve, reject)
						} else {
							resolve(res)
						}
					})
				})
				this.rejectTask.push(() => {
					const res = onRejectCallback(this.error)
					if (res instanceof MyPromise) {
						res.then(resolve, reject)
					} else {
						reject(res)
					}
				})
			})
		}

		catch(onRejectCallback) {
			return new MyPromise((resolve, reject) => {
				this.rejectTask.push(() => {
					const res = onRejectCallback(this.error)
					if (res instanceof MyPromise) {
						res.then(resolve, reject)
					} else {
						reject(res)
					}
				})
			})
		}

		static resolve = (value) => {
			return new MyPromise((resolve, reject) => {
				if (value instanceof MyPromise) {
					value.then(resolve, reject)
				} else {
					resolve(value)
				}
			})
		}

		static reject = (error) => {
			return new MyPromise((resolve, reject) => {
				if (error instanceof MyPromise) {
					error.then(resolve, reject)
				} else {
					reject(error)
				}
			})
		}

		static race = (promises) => {
			return new MyPromise((resolve, reject) => {
				for (let i = 0; i < promises.length; i++) {
					MyPromise.resolve(promises[i]).then(
						(res) => {
							resolve(res)
						},
						(err) => {
							reject(err)
						}
					)
				}
			})
		}

		static all = (promises) => {
			const result = []
			let index = 0
			return new MyPromise((reslove, reject) => {
				for (let i = 0; i < promises.length; i++) {
					MyPromise.resolve(promises[i]).then(
						(res) => {
							result[i] = res
							index++
							if (index === promises.length - 1) {
								reslove(result)
							}
						},
						(err) => {
							reject(err)
						}
					)
				}
			})
		}

		static retry(fn, delay, times) {
			return new MyPromise((resolve, reject) => {
				function func() {
					MyPromise.resolve(fn())
						.then((res) => {
							resolve(res)
						})
						.catch((err) => {
							// 接口失败后，判断剩余次数不为0时，继续重发
							if (times !== 0) {
								setTimeout(func, delay)
								times--
							} else {
								reject(err)
							}
						})
				}
				func()
			})
		}
	}
	// 与原生的Promise的差别 1 2 4 3 5 6
	// 原生Promise 执行Priomise.resolve会慢两步
	MyPromise.resolve()
		.then(() => {
			console.log(0)
			return MyPromise.resolve(4)
		})
		.then((res) => {
			console.log(res)
		})

	MyPromise.resolve()
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
	// 打印结果：依次打印1、2
	new MyPromise((resolve, reject) => {
		setTimeout(() => {
			resolve(1)
		}, 500)
	})
		.then((res) => {
			console.log(res)
			return new MyPromise((resolve) => {
				setTimeout(() => {
					resolve(2)
				}, 1000)
			})
		})
		.then((data) => {
			console.log(data)
		})
})()
//#endregion

//#region async await generator
/* 
  async 是 generator 的语法糖，返回一个Promise对象
  await 只能写在 async 函数中，作用就是获取Promise中返回的reslove或者reject值

  generator函数跟普通函数在写法上的区别就是，多了一个星号*
  只有在generator函数中才能使用yield，相当于generator函数执行的中途暂停点
  generator函数是不会自动执行的，每一次调用它的next方法，会停留在下一个yield的位置
*/
;(() => {
	function generatorToAsync(generatorFunc) {
		// 返回的是一个新的函数
		return function () {
			// 先调用generator函数 生成迭代器
			// 对应 var gen = testG()
			const gen = generatorFunc.apply(this, arguments)

			// 返回一个promise 因为外部是用.then的方式 或者await的方式去使用这个函数的返回值的
			// var test = generatorToAsync(testG)
			// test().then(res => console.log(res))
			return new Promise((resolve, reject) => {
				// 内部定义一个step函数 用来一步一步的跨过yield的阻碍
				// key有next和throw两种取值，分别对应了gen的next和throw方法
				// arg参数则是用来把promise resolve出来的值交给下一个yield
				function step(key, arg) {
					let generatorResult

					// 这个方法需要包裹在try catch中
					// 如果报错了 就把promise给reject掉 外部通过.catch可以获取到错误
					try {
						generatorResult = gen[key](arg)
					} catch (error) {
						return reject(error)
					}

					// gen.next() 得到的结果是一个 { value, done } 的结构
					const { value, done } = generatorResult

					if (done) {
						// 如果已经完成了 就直接resolve这个promise
						// 这个done是在最后一次调用next后才会为true
						// 以本文的例子来说 此时的结果是 { done: true, value: 'success' }
						// 这个value也就是generator函数最后的返回值
						return resolve(value)
					} else {
						// 除了最后结束的时候外，每次调用gen.next()
						// 其实是返回 { value: Promise, done: false } 的结构，
						// 这里要注意的是Promise.resolve可以接受一个promise为参数
						// 并且这个promise参数被resolve的时候，这个then才会被调用
						return Promise.resolve(
							// 这个value对应的是yield后面的promise
							value
						).then(
							// value这个promise被resove的时候，就会执行next
							// 并且只要done不是true的时候 就会递归的往下解开promise
							// 对应gen.next().value.then(value => {
							//    gen.next(value).value.then(value2 => {
							//       gen.next()
							//
							//      // 此时done为true了 整个promise被resolve了
							//      // 最外部的test().then(res => console.log(res))的then就开始执行了
							//    })
							// })
							function onResolve(val) {
								step('next', val)
							},
							// 如果promise被reject了 就再次进入step函数
							// 不同的是，这次的try catch中调用的是gen.throw(err)
							// 那么自然就被catch到 然后把promise给reject掉啦
							function onReject(err) {
								step('throw', err)
							}
						)
					}
				}
				step('next')
			})
		}
	}
	// 测试generatorToAsync

	// 1秒后打印data1 再过一秒打印data2 最后打印success
	const getData = () =>
		new Promise((resolve) => setTimeout(() => resolve('data'), 1000))
	const test = generatorToAsync(function* testG() {
		// await被编译成了yield
		const data = yield getData()
		console.log('data1: ', data)
		const data2 = yield getData()
		console.log('data2: ', data2)
		return 'success'
	})

	test().then((res) => console.log(res))
})()
//#endregion
