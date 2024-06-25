//#region compose
/* 
  在函数式编程当中有一个很重要的概念就是函数组合
  将一系列函数，通过compose函数组合起来，像管道一样连接起来，比如函数结合[f, g, h ]，通过compose最终达到这样的效果： f(g(h()))
  compose函数要求：可执行同步方法，也可执行异步方法，两者都可以兼容
*/
;(() => {
	function compose(list) {
		// 取出第一个函数为reduce初始值
		const init = list.shift()
		return function (...args) {
			return list.reduce((pre, cur) => {
				return pre.then((res) => {
					return cur.call(null, res)
				})
			}, Promise.resolve(init.apply(null, args)))
		}
	}

	// 同步方法案例
	let sync1 = (data) => {
		console.log('sync1')
		return data
	}
	let sync2 = (data) => {
		console.log('sync2')
		return data + 1
	}
	let sync3 = (data) => {
		console.log('sync3')
		return data + 2
	}
	let syncFn = compose([sync1, sync2, sync3])
	syncFn(0).then((res) => {
		console.log(res)
	})
	// 依次打印 sync1 → sync2 → sync3 → 3

	// 异步方法案例
	let async1 = (data) => {
		return new Promise((resolve) => {
			setTimeout(() => {
				console.log('async1')
				resolve(data)
			}, 1000)
		})
	}
	let async2 = (data) => {
		return new Promise((resolve) => {
			setTimeout(() => {
				console.log('async2')
				resolve(data + 1)
			}, 1000)
		})
	}
	let async3 = (data) => {
		return new Promise((resolve) => {
			setTimeout(() => {
				console.log('async3')
				resolve(data + 2)
			}, 1000)
		})
	}
	let composeFn = compose([async1, async2, async3])
	composeFn(0).then((res) => {
		console.log(res)
	})
	// 依次打印 async1 → async1 → async1 → 3
})()

//#endregion

//#region 函数柯里化
/* 
  函数柯里化： 将使用多个参数的一个函数，转换成一系列使用一个参数的函数
  函数柯里化的原理： 用闭包把参数保存起来，当参数的长度等于原函数时，就开始执行原函数
*/
;(() => {
	function curry(fn) {
		// fn.length 表示函数中参数的长度
		// 函数的length属性，表示形参的个数，不包含剩余参数，仅包括第一个有默认值之前的参数个数（不包含有默认值的参数）
		if (fn.length <= 1) return fn
		const generator = (...args) => {
			if (fn.length === args.length) {
				return fn(...args)
			} else {
				return (...args1) => {
					return generator(...args, ...args1)
				}
			}
		}
		return generator
	}
	function fn(a, b, c, d) {
		return a + b + c + d
	}
	let fn1 = curry(fn)
	console.log(fn1(1)(2)(3)(4)) // 10
})()

//#endregion
