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
	let timer = null
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
	let timer = null
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

function Instanceof(context, fn) {
	const proto = context.__proto__
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
Object.constructor === Object
Object.__proto__ === Function.prototype
Function.prototype.constructor === Function
Function.prototype.__proto__ === Object.prototype

Function.constructor === Function
Function.__proto__ === Function.prototype

function SuperClass() {}
function SubClass() {}
SubClass.prototype = new SuperClass()

function SuperClass() {}
function SubClass() {
	SuperClass.call(this)
}

function SuperClass() {}
function SubClass() {
	SuperClass.call(this)
}
SubClass.prototype = new SuperClass()

function createObject(o) {
	function F() {}
	F.prototype = o
	return new F()
}

function inheritObject(o) {
	let p = createObject(o)
	p.child = 'child'
	return p
}

function inheritPrototype(SubClass, SuperClass) {
	let p = createObject(SuperClass.prototype)
	p.constructor = SubClass
	SubClass.prototype = p
}

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
			this.resolveTask.forEach((cb) => cb())
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

	then = (onResloved, onRejected) => {
		return new MyPromise((resolve, reject) => {
			this.resolveTask.push(() => {
				const res = onResloved(this.data)
				if (res instanceof MyPromise) {
					res.then(resolve, reject)
				} else {
					resolve(res)
				}
			})
			this.rejectTask.push(() => {
				const error = onRejected(this.error)
				if (error instanceof MyPromise) {
					error.then(resolve, reject)
				} else {
					reject(error)
				}
			})
		})
	}

	catch = (onRejected) => {
		return new MyPromise((resolve, reject) => {
			this.rejectTask.push(() => {
				const error = onRejected(this.error)
				if (error instanceof MyPromise) {
					error.then(resolve, reject)
				} else {
					reject(error)
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
				reject(value)
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
						if (times !== 0) {
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
