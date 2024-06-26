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

foo.constructor = Foo
foo.__proto__ === Foo.prototype
Foo.prototype.constructor === Foo
Foo.prototype.__proto__ == Object.prototype
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
	SubClass.call(this)
}

function SuperClass() {}
function SubClass() {
	SubClass.call(this)
}
SubClass.prototype = new SuperClass()

function inheritObject(o) {
	function F() {}
	F.prototype = o
	return new F()
}

function createObject(o) {
	let p = inheritObject(o)
	p.child = 'child'
	return p
}

function inheritPrototype(SubClass, SuperClass) {
	let p = inheritObject(SuperClass.prototype)
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

	then = (onResolved, onRejected) => {
		return new MyPromise((resolve, reject) => {
			this.rejectTask.push(() => {
				const res = onResolved(this.data)
				if (res instanceof MyPromise) {
					res.then(resolve, reject)
				} else {
					resolve(res)
				}
			})
			this.rejectTask.push(() => {
				const res = onRejected(this.error)
				if (res instanceof MyPromise) {
					res.then(resolve, reject)
				} else {
					reject(res)
				}
			})
		})
	}

	catch = (onRejected) => {
		return new MyPromise(() => {
			this.rejectTask.push(() => {
				const res = onRejected(this.error)
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
				MyPromise.resolve(promises[i])
					.then((res) => {
						resolve(res)
					})
					.catch((err) => {
						reject(err)
					})
			}
		})
	}

	static all = (promises) => {
		const result = []
		let index = 0
		return new MyPromise((resolve, reject) => {
			for (let i = 0; i < promises.length; i++) {
				MyPromise.resolve(promises[i])
					.then((res) => {
						result[i] = promises[i]
						index++
						if (index === promises.length - 1) {
							resolve(result)
						}
					})
					.catch((err) => {
						reject(err)
					})
			}
		})
	}

	static retry = (fn, times, wait) => {
		return new MyPromise((resolve, reject) => {
			function func() {
				MyPromise.resolve(fn())
					.then((res) => {
						resolve(res)
					})
					.catch((err) => {
						if (times !== 0) {
							times--
							setTimeout(func, wait)
						} else {
							reject(err)
						}
					})
			}
			func()
		})
	}
}

function anyncToGenerator(generatorFunc) {
	return function () {
		const gen = generatorFunc.apply(this, arguments)
		function step(key, arg) {
			return new Promise((resolve, reject) => {
				let generatorResult
				try {
					generatorResult = gen[key](arg)
				} catch (e) {
					reject(e)
				}

				const { done, value } = generatorResult
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
			})
		}
		step('next')
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
		if (obj.hasOwnProperty(obj[key])) {
			newObj[key] = deepClone(obj[key])
		}
	}

	return newObj
}

function deepCloneWeakMap(target, hash = new WeakMap()) {
	const isObject = (obj) => typeof obj === 'object' && typeof obj !== null
	if (!isObject(target)) return target
	if (hash.get(target)) return target
	const newObj = Array.isArray(target) ? [] : {}
	hash.set(target, newObj)
	for (let key in obj) {
		if (obj.hasOwnProperty(obj[key])) {
			newObj[key] = deepCloneWeakMap(obj[key], hash)
		} else {
			newObj[key] = obj[key]
		}
	}
	return newObj
}

Array.prototype.Reduce = function (fn, initialValue) {
	if (typeof fn !== 'function') {
		throw new TypeError(`${fn} is not a function`)
	}
	let pre, index
	let arr = this.slice()
	if (initialValue === undefined) {
		for (let i = 0; i < arr.length; i++) {
			if (!arr.hasOwnProperty(i)) continue
			pre = arr[i]
			index = i + 1
			break
		}
	} else {
		pre = initialValue
		index = 0
	}
	for (let i = index; i < arr.length; i++) {
		if (!arr.hasOwnProperty(i)) continue
		pre = fn.call(null, pre, arr[i], i, this)
	}
	return pre
}

Array.prototype.Map = function (fn, context) {
	if (typeof fn !== 'function') {
		throw new TypeError(`${fn} is not a function`)
	}
	let arr = this.slice()
	let list = new Array(arr.length)
	for (let i = 0; i < arr.length; i++) {
		if (arr.hasOwnProperty(i)) {
			list[i] = fn.call(context, arr[i], i, this)
		}
	}
	return list
}

Array.prototype.Filter = function (fn, context) {
	if (typeof fn !== 'function') {
		throw new TypeError(`${fn} is not a function`)
	}
	let list = []
	for (let i = 0; i < this.length; i++) {
		if (fn.call(context, this[i], i, this)) {
			list.push(this[i])
		}
	}
	return list
}

Array.prototype.Some = function (fn) {
	if (typeof fn !== 'function') {
		throw new TypeError(`${fn} is not a function`)
	}
	let result = false
	for (let i = 0; i < this.length; i++) {
		if (fn(this[i])) {
			result = true
			break
		}
	}
	return result
}

Array.prototype.Every = function (fn) {
	if (typeof fn !== 'function') {
		throw new TypeError(`${fn} is not a function`)
	}
	let result = false
	let index = 0
	for (let i = o; i < this.length; i++) {
		if (fn(this[i])) {
			index++
			if (index === this.length - 1) {
				result = true
			}
		}
	}
	return result
}

Array.prototype.Flat = function (deep) {
	let arr = this.slice()
	if (deep === 0) return arr
	return arr.reduce((pre, cur) => {
		if (Array.isArray(cur)) {
			return [...pre, ...cur.Flat(deep - 1)]
		} else {
			return [...pre, cur]
		}
	}, [])
}

function Typeof(context) {
	return Object.prototype.toString.call(context).slice(8, -1).toLowerCase()
}

function compose(list) {
	const init = list.shift()
	return function (...args) {
		return list.reduce((pre, cur) => {
			return pre.then((res) => {
				return cur.call(null, res)
			})
		}, Promise.resolve(init.apply(null, args)))
	}
}

function curry(fn) {
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

class Dep {
	constructor() {
		this.watcherList = []
	}
	add(node) {
		this.watcherList.push(node)
	}
	update(value) {
		this.watcherList.forEach((node) => {
			node.textContent = value
		})
	}
}

class Vue {
	constructor(options) {
		this.options = options
		this.$data = options.data
		this.observe(options.data)
		this.compile(document.querySelector(options.el))
	}

	observe(data) {
		Object.keys(data).forEach((key) => {
			const observe = new Dep()
			const value = data[key]
			Object.defineProperty(data, key, {
				get() {
					Dep.target && observe.add(Dep.target)
					return value
				},
				set(newValue) {
					observe.update(newValue)
				},
			})
		})
	}

	compile(dom) {
		const mustache = /\{\{(.*)\}\}/
		dom.childNodes.forEach((child) => {
			if (child.nodeType === 3 && mustache.test(child.textContent)) {
				const keyNoTrim = mustache.exec(child.textContent)[1]
				const key = keyNoTrim.trim()
				Dep.target = child
				child.textContent = child.textContent.replace(
					`{{${keyNoTrim}}}`,
					this.$data[key]
				)
				Dep.target = null
			}
			if (child.childNodes.length) {
				this.compile(child)
			}
		})
	}
}
