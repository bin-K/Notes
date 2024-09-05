Function.prototype.Call = function (context, ...args) {
	if (!context) context = window
	const f = Symbol()
	context[f] = this
	const res = context[f](...args)
	delete context[f]
	return res
}

Function.prototype.Apply = function (context, args) {
	if (!context) context = window
	const f = Symbol()
	context[f] = this
	const res = context[f](args)
	delete context[f]
	return res
}

Function.prototype.Bind = function (context, ...args) {
	if (!context) context = window
	const f = Symbol()
	context[f] = this
	return function (...args1) {
		const res = context[f](...args, ...args1)
		delete context[f]
		return res
	}
}

function New(fn, ...args) {
	const instance = Object.create(fn.prototype)
	const res = fn.apply(instance, args)
	return typeof res === 'function' || typeof res === 'object' ? res : instance
}

function debounce(fn, wait) {
	let timer
	return function () {
		const _this = this
		const args = arguments
		if (timer) clearTimeout(timer)
		timer = setTimeout(() => {
			fn.apply(_this, args)
		}, wait)
	}
}

function throttle(fn, delay) {
	let curTime = Date.now()
	return function () {
		let nowTime = Date.now()
		if (nowTime - curTime >= delay) {
			curTime = Date.now()
			fn.apply(this, arguments)
		}
	}
}

function throttleSetTimeout(fn, delay) {
	let timer
	return function () {
		const _this = this
		const args = arguments
		if (!timer) {
			timer = setTimeout(() => {
				timer = null
				fn.apply(_this, args)
			}, delay)
		}
	}
}

function Foo() {}
const foo = new Foo()

foo.constructor === Foo
foo.__proto__ === Foo.prototype
Foo.prototype.constructor === Foo
Foo.prototype.__proto__ === Object.prototype
Object.prototype.constructor === Object
Object.prototype.__proto__ === null

Foo.constructor === Function
Foo.__proto__ === Function.prototype
Object.constructor === Function
Object.__proto__ === Function.prototype
Function.prototype.constructor === Function
Function.prototype.__proto__ === Object.prototype

Function.constructor === Function
Function.__proto__ === Function.prototype

function Instanceof(context, fn) {
	const proto = Object.getPrototypeOf(context)
	if (proto) {
		if (proto === fn.prototype) {
			return true
		} else {
			return Instanceof(proto, fn)
		}
	} else {
		return false
	}
}

function Super() {}
function Sub() {}
Sub.prototype = new Super()

function Super() {}
function Sub() {
	Super.call(this)
}

function Super() {}
function Sub() {
	Super.call(this)
}
Sub.prototype = new Super()

function inheritObject(o) {
	function F() {}
	F.prototype = o
	return new F()
}

function createObject(o) {
	let p = inheritObject(o)
	p.name = 'child'
	return p
}

function inheritPrototype(SuperClass, SubClass) {
	let p = inheritObject(SuperClass.prototype)
	SubClass.prototype = p
	p.constructor = SubClass
}

class MyPromise {
	constructor(executor) {
		this.state = 'pending'
		this.data = undefined
		this.error = undefined
		this.resloveTask = []
		this.rejectTask = []

		try {
			executor(this.resolve.bind(this), this.reject.bind(this))
		} catch (e) {
			this.reject(e)
		}
	}

	resolve = (value) => {
		if (this.state !== 'pending') return
		this.state = 'fulfilled'
		this.data = value
		setTimeout(() => {
			this.resloveTask.forEach((cb) => cb())
		})
	}

	reject = (error) => {
		if (this.state !== 'pending') return
		this.state = 'rejected'
		this.error = error
		setTimeout(() => {
			this.rejectTask.forEach((cb) => cb())
		})
	}

	then = (onReslove, onReject) => {
		onReslove = typeof onReslove === 'function' ? onReslove : (value) => value
		onReject =
			typeof onReject === 'function'
				? onReject
				: (error) => {
						throw error
				  }
		return new MyPromise((resolve, reject) => {
			this.resloveTask.push(() => {
				const res = onReslove(this.data)
				if (res instanceof MyPromise) {
					res.then(resolve, reject)
				} else {
					resolve(res)
				}
			})
			this.rejectTask.push(() => {
				const res = onReject(this.error)
				if (res instanceof MyPromise) {
					res.then(resolve, reject)
				} else {
					reject(res)
				}
			})
		})
	}

	catch = (onReject) => {
		this.then(undefined, onReject)
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
		return new MyPromise((resolve, reject) => {
			for (let i = 0; i < promises.length; i++) {
				MyPromise.resolve(promises[i]).then(
					(res) => {
						result[i] = res
						index++
						if (index === promises.length) {
							resolve(result)
						}
					},
					(err) => {
						reject(err)
					}
				)
			}
		})
	}

	static retry = (fn, times, wait) => {
		return new MyPromise((resolve, reject) => {
			function func() {
				MyPromise.resolve(fn()).then(
					(res) => {
						resolve(res)
					},
					(err) => {
						if (times > 0) {
							times--
							setTimeout(func, wait)
						} else {
							reject(err)
						}
					}
				)
			}
			func()
		})
	}
}

function asyncToGenerator(generatorFunc) {
	return function (...args) {
		const gen = generatorFunc.apply(this, args)
		return new Promise((resolve, reject) => {
			function step(key, arg) {
				let generatorResult
				try {
					generatorResult = gen[key](arg)
				} catch (e) {
					return reject(e)
				}

				const { value, done } = generatorResult
				if (done) {
					resolve(value)
				} else {
					Promise.resolve(value)
						.then((res) => {
							step('next', res)
						})
						.catch((err) => {
							step('throw', err)
						})
				}
			}
			step('next')
		})
	}
}

function deepClone(obj) {
	if (obj === null) return null
	if (typeof obj !== 'object') return obj
	if (obj instanceof Function) return obj
	if (obj instanceof RegExp) {
		return new RegExp(obj)
	}
	if (obj instanceof Date) {
		return new Date(obj)
	}

	const newObj = new obj.constructor()
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			newObj[key] = deepClone(obj[key])
		}
	}
	return newObj
}

function deepCloneWeakMap(target, hash = new WeakMap()) {
	const isObject = (obj) => typeof obj === 'object' && obj !== null
	if (!isObject(target)) return target
	if (hash.get(target)) return hash.get(target)
	const newObj = Array.isArray(target) ? [] : {}
	hash.set(target, newObj)
	for (let key in target) {
		if (target.hasOwnProperty(key)) {
			if (isObject(target[key])) {
				newObj[key] = deepCloneWeakMap(target[key], hash)
			} else {
				newObj[key] = target[key]
			}
		}
	}
	return newObj
}
