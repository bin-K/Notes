//#region this的绑定方式
/* 
  1）默认绑定(非严格模式下this指向全局对象，严格模式下函数内的this指向undefined)
  2）隐式绑定(当函数引用有上下文对象时, 如 obj.foo()的调用方式, foo内的this指向obj)
  3）显示绑定(通过call或者apply方法直接指定this的绑定对象, 如foo.call(obj))
  4）new构造函数绑定，this指向新生成的对象
  5）箭头函数，this指向的是定义该函数时，外层环境中的this，箭头函数的this在定义时就决定了，不能改变
*/
//#endregion

//#region 1
;() => {
	var a = 10
	function foo() {
		// 默认模式下 函数的this执行window
		console.log(this.a) // 10
	}
	foo()
}
//#endregion

//#region 2
;() => {
	'use strict'
	var a = 10
	function foo() {
		// 严格模式下 函数的this 指向 undefined
		console.log('this1', this) // undefined
		console.log(window.a) // 10
		console.log(this.a) // 报错，undefined上没a
	}
	console.log(window.foo) // f foo(){...}
	console.log('this2', this) // windiow
	foo()
}
//#endregion

//#region 3
;() => {
	// let const 声明的变量不存在变量提升 window下无 a,b 变量
	let a = 10
	const b = 20

	function foo() {
		console.log(this.a) // undefined
		console.log(this.b) // undefined
	}
	foo()
	console.log(window.a) // undefined
}
//#endregion

//#region 4
;() => {
	var a = 1
	function foo() {
		var a = 2
		console.log(this) // window
		console.log(this.a) // 1
	}
	foo()
}
//#endregion

//#region 5
;() => {
	var a = 1
	function foo() {
		var a = 2
		function inner() {
			// 默认模式下，函数的this指向widow
			console.log(this.a) // 1
		}
		inner()
	}
	foo()
}

//#endregion

//#region 6
;() => {
	function foo() {
		console.log(this.a)
	}
	var obj = { a: 1, foo }
	var a = 2
	foo() // 2 显示绑定，window调用，函数this默认指向window
	obj.foo() // 1 隐式绑定，由obj调用foo，obj中存在a变量为1，谁调用指向谁
}
//#endregion

//#region 7
;() => {
	function foo() {
		console.log(this.a)
	}
	var obj = { a: 1, foo }
	var a = 2
	var foo2 = obj.foo

	obj.foo() //1  隐式绑定，由obj调用foo，obj中存在a变量为1，谁调用指向谁
	foo2() // 2 显示绑定，window调用，函数this默认指向window
}
//#endregion

//#region 8
;() => {
	function foo() {
		console.log(this.a)
	}
	var obj = { a: 1, foo }
	var a = 2
	var foo2 = obj.foo
	var obj2 = { a: 3, foo2: obj.foo }

	obj.foo() // 1
	foo2() // 2
	obj2.foo2() // 3
}
//#endregion

//#region 9
;() => {
	function foo() {
		console.log(this.a)
	}
	function doFoo(fn) {
		// doFoo 作用域下 fn = foo
		console.log(this)
		fn()
	}
	var obj = { a: 1, foo }
	var a = 2
	doFoo(obj.foo) // window 2 显式绑定
}
//#endregion

//#region 10
;() => {
	function foo() {
		console.log(this.a)
	}
	function doFoo(fn) {
		// doFoo 作用域下 fn = foo
		console.log(this)
		fn()
	}
	var obj = { a: 1, foo }
	var a = 2
	var obj2 = { a: 3, doFoo }

	obj2.doFoo(obj.foo) // obj2 2 隐式绑定
}
//#endregion

//#region 11
;() => {
	'use strict'
	function foo() {
		console.log(this.a)
	}
	function doFoo(fn) {
		console.log(this)
		fn()
	}
	var obj = { a: 1, foo }
	var a = 2
	var obj2 = { a: 3, doFoo }

	obj2.doFoo(obj.foo) // obj2 undefined 没有 a，严格模式下this指向undefined
}
//#endregion

//#region 12
;() => {
	function foo() {
		console.log(this.a)
	}
	var obj = { a: 1 }
	var a = 2

	foo() // 2
	foo.call(obj) // 1
	foo.apply(obj) // 1
	foo.bind(obj)() // 1
}

//#endregion

//#region 13
;() => {
	var obj1 = {
		a: 1,
	}
	var obj2 = {
		a: 2,
		foo1: function () {
			console.log(this.a)
		},
		foo2: function () {
			setTimeout(function () {
				console.log(this)
				console.log(this.a)
			}, 0)
		},
	}
	var a = 3

	obj2.foo1() // 2
	obj2.foo2() // window 3
}
//#endregion

//#region 14
;() => {
	var obj1 = {
		a: 1,
	}
	var obj2 = {
		a: 2,
		foo1: function () {
			console.log(this.a)
		},
		foo2: function () {
			setTimeout(
				function () {
					console.log(this)
					console.log(this.a)
				}.call(obj1),
				0
			)
		},
	}
	var a = 3
	obj2.foo1() // 2
	obj2.foo2() // obj1 1
}

//#endregion

//#region 15
;() => {
	var obj1 = {
		a: 1,
	}
	var obj2 = {
		a: 2,
		foo1: function () {
			console.log(this.a)
		},
		foo2: function () {
			function inner() {
				console.log(this)
				console.log(this.a)
			}
			inner()
		},
	}
	var a = 3
	obj2.foo1() // 2
	obj2.foo2() // window 3
}
//#endregion

//#region 16
;() => {
	function foo() {
		console.log(this.a)
	}
	var obj = { a: 1 }
	var a = 2

	foo() // 2
	foo.call(obj) // 1
	foo().call(obj) // 2,  Cannot read property 'call' of undefined
}
//#endregion

//#region 17
;() => {
	function foo() {
		console.log(this.a)
		return function () {
			console.log(this.a)
		}
	}
	var obj = { a: 1 }
	var a = 2

	foo() // 2
	foo.call(obj) // 1
	foo().call(obj) // 2 1
}

//#endregion

//#region 18
;() => {
	function foo() {
		console.log(this.a)
		return function () {
			console.log(this.a)
		}
	}
	var obj = { a: 1 }
	var a = 2

	foo() // 2
	foo.bind(obj)
	foo().bind(obj) // 2
}
//#endregion

//#region 19
;() => {
	function foo() {
		console.log(this.a)
		return function () {
			console.log(this.a)
		}
	}
	var obj = { a: 1 }
	var a = 2
	foo.call(obj)() // 1 2
}
//#endregion

//#region 20
;() => {
	var obj = {
		a: 'obj',
		foo: function () {
			console.log('foo:', this.a)
			return function () {
				console.log('inner:', this.a)
			}
		},
	}
	var a = 'window'
	var obj2 = { a: 'obj2' }

	obj.foo()() // 'foo:obj' 'inner:window'
	obj.foo.call(obj2)() // 'foo:obj2' 'inner:window'
	obj.foo().call(obj2) // foo:'obj' 'inner:obj2'
}
//#endregion

//#region 21
;() => {
	var obj = {
		a: 1,
		foo: function (b) {
			b = b || this.a
			return function (c) {
				console.log(this.a + b + c)
			}
		},
	}
	var a = 2
	var obj2 = { a: 3 }

	obj.foo(a).call(obj2, 1) // 6 a = 3 b = 2 c = 1
	obj.foo.call(obj2)(1) // 6 a = 2 b = 3 c = 1
}
//#endregion

//#region 22
;() => {
	function foo1() {
		console.log(this.a)
	}
	var a = 1
	var obj = {
		a: 2,
	}

	var foo2 = function () {
		foo1.call(obj)
	}

	foo2() // 2
	foo2.call(window) // 2
}
//#endregion

//#region 23
;() => {
	function foo1(b) {
		console.log(`${this.a} + ${b}`)
		return this.a + b
	}
	var a = 1
	var obj = {
		a: 2,
	}

	var foo2 = function () {
		return foo1.call(obj, ...arguments)
	}

	var num = foo2(3) // 2 + 3
	console.log(num) // 5
}
//#endregion

//#region 24
;() => {
	function foo(item) {
		console.log(item, this.a)
	}
	var obj = {
		a: 'obj',
	}
	var a = 'window'
	var arr = [1, 2, 3]

	arr.forEach(foo, obj) // 1 "obj", 2 'obj' 3 'obj'
	arr.map(foo, obj) // 1 'obj' 2 'obj' 3 'obj'
	arr.filter(function (i) {
		console.log(i, this.a) // 1 "obj" 2 "obj" 3 "obj"
		return i > 2
	}, obj)
}
//#endregion

//#region 25
;() => {
	function Person(name) {
		this.name = name
	}
	var name = 'window'
	var person1 = new Person('LinDaiDai')
	console.log(person1.name) // 'LinDaiDai'
}

//#endregion

//#region 26
;() => {
	function Person(name) {
		this.name = name
		this.foo1 = function () {
			console.log(this.name)
		}
		this.foo2 = function () {
			return function () {
				console.log(this.name)
			}
		}
	}
	var person1 = new Person('person1')
	person1.foo1() // person1
	person1.foo2()() // undefined
}

//#endregion

//#region 27
;() => {
	var name = 'window'
	function Person(name) {
		this.name = name
		this.foo = function () {
			console.log(this.name)
			return function () {
				console.log(this.name)
			}
		}
	}
	var person2 = {
		name: 'person2',
		foo: function () {
			console.log(this.name)
			return function () {
				console.log(this.name)
			}
		},
	}

	var person1 = new Person('person1')
	person1.foo()() // 'person1' window
	person2.foo()() // 'person2' window
}
//#endregion

//#region 28
;() => {
	var name = 'window'
	function Person(name) {
		this.name = name
		this.foo = function () {
			console.log(this.name)
			return function () {
				console.log(this.name)
			}
		}
	}
	var person1 = new Person('person1')
	var person2 = new Person('person2')

	person1.foo.call(person2)() // 'person2' window
	person1.foo().call(person2) // 'person1' 'person2'
}
//#endregion

//#region 29
;() => {
	var obj = {
		name: 'obj',
		foo1: () => {
			console.log(this.name)
		},
		foo2: function () {
			console.log(this.name)
			return () => {
				console.log(this.name)
			}
		},
	}
	var name = 'window'
	obj.foo1() // window
	obj.foo2()() // obj obj
}

//#endregion

//#region 30
;() => {
	var name = 'window'
	var obj1 = {
		name: 'obj1',
		foo: function () {
			console.log(this.name)
		},
	}

	var obj2 = {
		name: 'obj2',
		foo: () => {
			console.log(this.name)
		},
	}

	obj1.foo() // obj1
	obj2.foo() // window
}
//#endregion

//#region 31
;() => {
	var name = 'window'
	var obj1 = {
		name: 'obj1',
		foo: function () {
			console.log(this.name)
			return function () {
				console.log(this.name)
			}
		},
	}
	var obj2 = {
		name: 'obj2',
		foo: function () {
			console.log(this.name)
			return () => {
				console.log(this.name)
			}
		},
	}
	var obj3 = {
		name: 'obj3',
		foo: () => {
			console.log(this.name)
			return function () {
				console.log(this.name)
			}
		},
	}
	var obj4 = {
		name: 'obj4',
		foo: () => {
			console.log(this.name)
			return () => {
				console.log(this.name)
			}
		},
	}

	obj1.foo()() // obj1 window
	obj2.foo()() // obj2 obj2
	obj3.foo()() // window window
	obj4.foo()() // window window
}
//#endregion

//#region 32
;() => {
	var name = 'window'
	function Person(name) {
		this.name = name
		this.foo1 = function () {
			console.log(this.name)
		}
		this.foo2 = () => {
			console.log(this.name)
		}
	}
	var person2 = {
		name: 'person2',
		foo2: () => {
			console.log(this.name)
		},
	}
	var person1 = new Person('person1')
	person1.foo1() // person1
	person1.foo2() // person1
	person2.foo2() // window
}
//#endregion

//#region 33
;() => {
	var name = 'window'
	function Person(name) {
		this.name = name
		this.foo1 = function () {
			console.log(this.name)
			return function () {
				console.log(this.name)
			}
		}
		this.foo2 = function () {
			console.log(this.name)
			return () => {
				console.log(this.name)
			}
		}
		this.foo3 = () => {
			console.log(this.name)
			return function () {
				console.log(this.name)
			}
		}
		this.foo4 = () => {
			console.log(this.name)
			return () => {
				console.log(this.name)
			}
		}
	}
	var person1 = new Person('person1')
	person1.foo1()() // person1 window
	person1.foo2()() // person1 person1
	person1.foo3()() // person1 window
	person1.foo4()() // person1 person1
}
//#endregion

//#region 34
;() => {
	var name = 'window'
	var obj1 = {
		name: 'obj1',
		foo1: function () {
			console.log(this.name)
			return () => {
				console.log(this.name)
			}
		},
		foo2: () => {
			console.log(this.name)
			return function () {
				console.log(this.name)
			}
		},
	}
	var obj2 = {
		name: 'obj2',
	}
	obj1.foo1.call(obj2)() // obj2 obj2
	obj1.foo1().call(obj2) // obj1 obj1
	obj1.foo2.call(obj2)() // window window
	obj1.foo2().call(obj2) // window obj2
}

//#endregion

//#region 35
;() => {
	var name = 'window'
	var person1 = {
		name: 'person1',
		foo1: function () {
			console.log(this.name)
		},
		foo2: () => console.log(this.name),
		foo3: function () {
			return function () {
				console.log(this.name)
			}
		},
		foo4: function () {
			return () => {
				console.log(this.name)
			}
		},
	}
	var person2 = { name: 'person2' }

	person1.foo1() // person1
	person1.foo1.call(person2) // preson2

	person1.foo2() // window
	person1.foo2.call(person2) // window

	person1.foo3()() // window
	person1.foo3.call(person2)() // window
	person1.foo3().call(person2) // person2

	person1.foo4()() // person1
	person1.foo4.call(person2)() // person2
	person1.foo4().call(person2) // person1
}
//#endregion

//#region 36
;() => {
	var name = 'window'
	function Person(name) {
		this.name = name
		this.foo1 = function () {
			console.log(this.name)
		}
		this.foo2 = () => console.log(this.name)
		this.foo3 = function () {
			return function () {
				console.log(this.name)
			}
		}
		this.foo4 = function () {
			return () => {
				console.log(this.name)
			}
		}
	}
	var person1 = new Person('person1')
	var person2 = new Person('person2')

	person1.foo1() // person1
	person1.foo1.call(person2) // person2

	person1.foo2() // person1
	person1.foo2.call(person2) // person1

	person1.foo3()() // winodw
	person1.foo3.call(person2)() // window
	person1.foo3().call(person2) // person2

	person1.foo4()() // person1
	person1.foo4.call(person2)() // person2
	person1.foo4().call(person2) // person1
}
//#endregion

//#region 37
;() => {
	var name = 'window'
	function Person(name) {
		this.name = name
		this.obj = {
			name: 'obj',
			foo1: function () {
				return function () {
					console.log(this.name)
				}
			},
			foo2: function () {
				return () => {
					console.log(this.name)
				}
			},
		}
	}
	var person1 = new Person('person1')
	var person2 = new Person('person2')

	person1.obj.foo1()() // window
	person1.obj.foo1.call(person2)() // window
	person1.obj.foo1().call(person2) // person2

	person1.obj.foo2()() // obj
	person1.obj.foo2.call(person2)() // person2
	person1.obj.foo2().call(person2) //  obj
}
//#endregion

//#region 38
;() => {
	function foo() {
		console.log(this.a) // 2
	}
	var a = 2
	;(function () {
		'use strict'
		foo() // window调用
	})()
}

//#endregion

//#region 手写new
;() => {
	function New(fn, ...args) {
		// 创建一个空的对象并链接到构造函数的原型，使它能访问原型中的属性
		const instance = Object.create(fn.prototype)
		// 使用apply改变构造函数中this的指向实现继承，使obj能访问到构造函数中的属性
		const res = fn.apply(instance, args)
		// 优先返回构造函数返回的对象
		return typeof res === 'object' || typeof res === 'function' ? res : instance
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
}
//#endregion

//#region 手写Call, 手写Apply  手写Bind
;() => {
	Function.prototype.Call = (context, ...args) => {
		if (!context) context = window

		const f = Symbol()

		context[f] = this

		const res = context[f](...args)

		delete context[f]

		return res
	}

	Function.prototype.Apply = (context, args) => {
		if (!context) context = window

		const f = Symbol()

		context[f] = this

		const res = context[f](args)

		delete context[f]

		return res
	}

	Function.prototype.Bind = (context, ...args) => {
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
	consoleInfo('man', 100) // 'globalName' 'man' 100

	consoleInfo.Call(obj, 'man', 100) // 'objName' 'man' 100
	consoleInfo.Call(obj, 'woman', 120) // 'objName' 'woman' 120

	consoleInfo.Apply(obj, ['man', 100]) // 'objName' 'man' 100
	consoleInfo.Apply(obj, ['woman', 120]) // 'objName' 'woman' 120

	consoleInfo.Bind(obj, 'man', 100)() // 'objName' 'man' 100
	consoleInfo.Bind(obj, 'woman', 120)() // 'objName' 'woman' 120
}
//#endregion
