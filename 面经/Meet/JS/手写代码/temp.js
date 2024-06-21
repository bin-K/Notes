//#region this指向问题
;(() => {
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
			return res
		}
	}
	var obj = {
		name: 'objName',
	}
	var name = 'globalName'

	function consoleInfo(sex, weight) {
		console.log(this.name, sex, weight, 'this指向 call apply bind')
	}

	function consoleInfoApply() {
		console.log(this.name, arguments[0], 'this指向 call apply bind')
	}
	consoleInfo('man', 100) // 'globalName' 'man' 100

	consoleInfo.Call(obj, 'man', 100) // 'objName' 'man' 100
	consoleInfo.Call(obj, 'woman', 120) // 'objName' 'woman' 120

	consoleInfoApply.Apply(obj, ['man', 100]) // 'objName' 'man' 100
	consoleInfoApply.Apply(obj, ['woman', 120]) // 'objName' 'woman' 120

	consoleInfo.Bind(obj, 'man', 100)() // 'objName' 'man' 100
	consoleInfo.Bind(obj, 'woman', 120)() // 'objName' 'woman' 120
})()
;(() => {
	function New(fn, ...args) {
		const instance = Object.create(fn.prototype)

		const res = fn.apply(instance, args)

		return typeof res === 'function' || typeof res === 'object' ? res : instance
	}

	function Person(name) {
		this.name = name
	}
	Person.prototype.eat = function () {
		console.log('Eatting')
	}

	var lindaidai = New(Person, 'LinDaiDai')
	console.log(lindaidai, 'New') // Person{ name: 'LinDaiDai' }
	lindaidai.eat() // 'Eatting'
})()
//#endregion

//#region 闭包
// n秒后执行，n秒内触发，重新计时
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

// n秒内触发多次，只执行最后一次
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
//#endregion

//#region 原型
;(() => {
	function Foo() {}
	const foo = new Foo()

	console.log('原型 ==== start ==== ')
	console.log(foo.constructor === Foo)
	console.log(foo.__proto__ === Foo.prototype)
	console.log(Foo.prototype.constructor == Foo)
	console.log(Foo.prototype.__proto__ === Object.prototype)
	console.log(Object.prototype.constructor === Object)
	console.log(Object.prototype.__proto__ === null)
	console.log(Foo.constructor === Function)
	console.log(Object.constructor === Function)
	console.log(Foo.__proto__ === Function.prototype)
	console.log(Object.__proto__ === Function.prototype)
	console.log(Function.prototype.constructor === Function)
	console.log(Function.prototype.__proto__ === Object.prototype)
	console.log(Function.constructor === Function)
	console.log(Function.__proto__ === Function.prototype)
	console.log('原型 ==== end ==== ')
})()
;(() => {
	function Instanceof(fn, context) {
		const proto = context.__proto__

		if (proto) {
			if (proto === fn.prototype) {
				return true
			} else {
				return Instanceof(fn, proto)
			}
		} else {
			return false
		}
	}

	console.log(Instanceof(Array, []), 'Instanceof')
})()
//#endregion

//#region 继承
// 原型链继承，子类的原型对象指向父类的实例对象
// 缺点: 引用类型的属性会被所有的实例共享
;(() => {
	function SuperClass() {
		;(this.name = 'Super'),
			(this.info = {
				child: 'Sub',
			})
	}
	function SubClass() {}

	SubClass.prototype = new SuperClass()

	const sub1 = new SubClass()
	const sub2 = new SubClass()

	sub1.name = 'sub1'
	console.log(sub1.name, sub2.name, '原型链继承 普通类型属性') // sub1, Super

	sub1.info.child = 'sub1'
	console.log(sub1.info.child, sub2.info.child, '原型链继承 引用类型属性') // sub1, sub1
})()

// 盗用构造函数继承
// 缺点：无法访问父类的原型对象
;(() => {
	function SuperClass() {
		;(this.name = 'Super'),
			(this.info = {
				child: 'Sub',
			})
	}
	function SubClass() {
		SuperClass.call(this)
	}

	SuperClass.prototype.super = 'prototype'

	const sub1 = new SubClass()
	const sub2 = new SubClass()

	sub1.name = 'sub1'
	console.log(sub1.name, sub2.name, '盗用构造函数继承 普通类型属性') // sub1, Super

	sub1.info.child = 'sub1'
	console.log(sub1.info.child, sub2.info.child, '盗用构造函数继承 引用类型属性') // sub1， Sub

	console.log(sub1.super, '盗用构造函数继承 访问父类的原型') // undefined
})()

// 组合式继承
// 缺点：父类构造函数会执行两次
;(() => {
	function SuperClass() {
		;(this.name = 'Super'),
			(this.info = {
				child: 'Sub',
			})
		console.log('组合式继承 父类执行了')
	}
	function SubClass() {
		SuperClass.call(this)
	}
	SubClass.prototype = new SuperClass()
	SuperClass.prototype.super = 'prototype'

	const sub1 = new SubClass()
	const sub2 = new SubClass()

	sub1.name = 'sub1'
	console.log(sub1.name, sub2.name, '组合式继承 普通类型属性') // sub1, Super

	sub1.info.child = 'sub1'
	console.log(sub1.info.child, sub2.info.child, '组合式继承 引用类型属性') // sub1， Sub

	console.log(sub1.super, '组合式继承 访问父类的原型') // prototype
})()

// 原型链继承的封装，未解决引用类型的属性会被所有的实例共享
function inheritObject(o) {
	function F() {}
	F.prototype = o
	return new F()
}

// 寄生式继承
;(() => {
	function SuperClass() {
		;(this.name = 'Super'),
			(this.info = {
				child: 'Sub',
			})
		console.log('寄生式继承 父类执行了')
	}
	SuperClass.prototype.super = 'prototype'
	const superClass = new SuperClass()

	function createObject(obj) {
		//通过原型方式创建新的对象
		let o = inheritObject(obj)
		// 在这可以添加自定义的属性和方法
		// 子类属性
		o.childName = 'childName'
		return o
	}

	const sub1 = createObject(superClass)
	const sub2 = createObject(superClass)

	console.log(sub1.info.child, '寄生式继承 sub1.info.child before') // Sub
	sub1.info.child = 'child'
	console.log(sub1.info.child, '寄生式继承 sub1.info.child after') // child
	console.log(sub2.info.child) // Sub

	console.log(sub1.super, '寄生式继承 sub1.super') // prototype
	console.log(sub1.childName, '寄生式继承 sub1 childName') // childName
})()

// 寄生组合式继承
;(() => {
	function SuperClass() {
		;(this.name = 'Super'),
			(this.info = {
				child: 'Sub',
			})
		console.log('寄生组合式继承 父类执行了')
	}
	function SubClass() {
		SuperClass.call(this)
	}
	SuperClass.prototype.super = 'prototype'

	function inheritProtype(SubClass, SuperClass) {
		let p = inheritObject(SuperClass.prototype)
		p.constructor = SubClass
		SubClass.prototype = p
	}

	inheritProtype(SubClass, SuperClass)
	const sub1 = new SubClass()
	const sub2 = new SubClass()

	console.log(sub1.info.child, '寄生组合式继承 sub1.info.child before') // Sub
	sub1.info.child = 'child'
	console.log(sub1.info.child, '寄生组合式继承 sub1.info.child after') // child
	console.log(sub2.info.child) // Sub

	console.log(sub1.super, '寄生组合式继承 sub1.super') // prototype
})()
//#endregion

//#region promise
;(() => {
	class MyPromise {
		constructor(executor) {
			this.state = 'pending'
			this.resolveTask = []
			this.rejectTask = []
			this.data = undefined
			this.error = undefined

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

		then(OnResolved, OnRejected) {
			return new MyPromise((reslove, reject) => {
				this.resolveTask.push(() => {
					const res = OnResolved(this.data)
					if (res instanceof MyPromise) {
						res.then(reslove, reject)
					} else {
						reslove(res)
					}
				})
				this.rejectTask.push(() => {
					const res = OnRejected(this.error)
					if (res instanceof MyPromise) {
						res.then(reslove, reject)
					} else {
						reject(res)
					}
				})
			})
		}

		catch(OnRejected) {
			this.rejectTask.push(() => {
				const res = OnRejected(this.error)
				if (res instanceof MyPromise) {
					res.then(reslove, reject)
				} else {
					reject(res)
				}
			})
		}

		static reslove = (value) => {
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
					MyPromise.reslove(promises[i]).then(
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
					MyPromise.reslove(promises[i]).then(
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

		static retry = (fn, time, delay) => {
			return new MyPromise((reslove, reject) => {
				function func() {
					MyPromise.reslove(fn()).then(
						(res) => {
							reslove(res)
						},
						(err) => {
							if (time !== 0) {
								setTimeout(func, delay)
								time--
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

//#region 手写async await
;(() => {
	function asyncToGenerator(generatorFunc) {
		return function () {
			const gen = generatorFunc(this, arguments)

			return new Promise((reslove, reject) => {
				function step(key, arg) {
					let generatorResult

					try {
						generatorResult = gen[key](arg)
					} catch (err) {
						reject(err)
					}

					const { value, done } = generatorResult

					if (done) {
						reslove(value)
					} else {
						Promise.resolve(value).then(
							(val) => {
								step('next', val)
							},
							(err) => {
								step('throw', err)
							}
						)
					}
				}
				step('next')
			})
		}
	}

	const getData = () =>
		new Promise((reslove) => {
			setTimeout(() => {
				reslove('data')
			}, 1000)
		})

	const test = asyncToGenerator(function* testG() {
		const data = yield getData()
		console.log('data1: ', data)
		const data2 = yield getData()
		console.log('data2: ', data2)
		return 'success'
	})

	test().then((res) => console.log(res))
})()
//#endregion

//#region 深拷贝1
;(() => {
	let obj = {
		a: 100,
		b: [10, 20, 30],
		c: {
			x: 10,
		},
		d: /^\d+$/,
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
		for (key in obj) {
			if (obj.hasOwnProperty(key)) {
				newObj[key] = deepClone(obj[key])
			}
		}
		return newObj
	}

	let obj1 = deepClone(obj)
	obj1.a = 200
	console.log(obj, obj1)
})()
//#endregion

//#region 深拷贝2
;() => {
	let obj = {
		a: 100,
		b: [10, 20, 30],
		c: {
			x: 10,
		},
		d: /^\d+$/,
	}
	function deepClone(target, hash = new WeakMap()) {
		const isObject = (obj) => typeof obj === 'object' && obj !== null
		if (!isObject(target)) return target
		if (hash.get(target)) return target
		const newObj = Array.isArray(target) ? [] : {}
		hash.set(target, newObj)
		for (key in target) {
			if (target.hasOwnProperty(key)) {
				newObj[key] = deepClone(target[key], hash)
			} else {
				newObj[key] = target[key]
			}
		}
		return newObj
	}

	let obj1 = deepClone(obj)
	obj1.a = 200
	console.log(obj, obj1)
}
//#endregion
