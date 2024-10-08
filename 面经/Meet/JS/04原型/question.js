//#region
/* 
	原型的作用：原型被定义为给其它对象提供共享属性的对象，函数的实例可以共享原型上的属性和方法
	原型链:
		它的作用就是当你在访问一个对象上属性的时候，
		如果该对象内部不存在这个属性，那么就会去它__proto__属性所指向的对象（原型对象）上查找。
		如果原型对象依旧不存在这个属性，那么就会去其原型的__proto__属性所指向的原型对象上去查找。
		以此类推，直到找到null，而这个查找的线路，也就构成了我们常说的原型链
	原型链和作用域的区别： 原型链是查找对象上的属性，作用域链是查找当前上下文中的变量
*/
//#endregion

//#region proto、prototype、constructor属性介绍
/* 
	1）js中对象分为两种，普通对象和函数对象
	2）__proto__和constructor是对象独有的。
		prototype属性是函数独有的，它的作用是包含可以给特定类型的所有实例提供共享的属性和方法；
		但是在 JS 中，函数也是对象，所以函数也拥有__proto__和 constructor属性
	3）constructor属性是对象所独有的，它是一个对象指向一个函数，这个函数就是该对象的构造函数
		构造函数.prototype.constructor === 该构造函数本身
	4）一个对象的__proto__指向其构造函数的prototype
		函数创建的对象.__proto__ === 该函数.prototype
*/
//#endregion

//#region 原型和原型链
;(() => {
	function Foo() {}

	const foo = new Foo()

	/* console.log(foo.constructor === Foo)
  console.log(foo.__proto__ === Foo.prototype)
  console.log(Foo.prototype.constructor === Foo)
  console.log(Foo.prototype.__proto__ === Object.prototype)
  console.log(Object.prototype.constructor === Object)
  console.log(Object.prototype.__proto__ === null)
  console.log(Foo.constructor === Function)
  console.log(Foo.__proto__ === Function.prototype)
  console.log(Object.__proto__ === Function.prototype)
  console.log(Object.constructor === Function)
  console.log(Function.prototype.__proto__ === Object.prototype)
  console.log(Function.prototype.constructor === Function)
  console.log(Function.constructor === Function)
  console.log(Function.__proto__ === Function.prototype) */

	// 实例化对象的原型等于构造函数的原型对象
	console.log(foo.__proto__ === Foo.prototype) // true
	// 构造函数的原型对象的原型等于Object构造函数的原型对象
	console.log(Foo.prototype.__proto__ === Object.prototype) //true
	// Object构造函数的原型对象的原型为null
	console.log(Object.prototype.__proto__ === null) // true
	// 实例对象的构造函数为构造函数本身
	console.log(foo.constructor === Foo) // true
	// 函数原型对象的构造函数等于函数本身
	console.log(Foo.prototype.constructor === Foo) // true
	// 函数原型对象的构造函数等于函数本身
	console.log(Object.prototype.constructor === Object) // true
	// 构造函数的原型等于Function构造函数的原型对象
	console.log(Foo.__proto__ === Function.prototype) //true
	console.log(Object.__proto__ === Function.prototype) // true
	// Function构造函数的原型对象的原型等于 Object构造函数的原型对象
	console.log(Function.prototype.__proto__ === Object.prototype) // true
	// 函数原型对象的构造函数等于函数本身
	console.log(Function.prototype.constructor === Function) // true
	// 实例对象的构造函数为构造函数本身
	console.log(Foo.constructor === Function) // true
	console.log(Object.constructor === Function) // true
	console.log(Function.constructor === Function) // true
	// 构造函数的原型等于Function构造函数的原型对象
	console.log(Function.__proto__ === Function.prototype) // true
})()

//#endregion

//#region 手写instanceof
;() => {
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
	console.log(Instanceof([], Array))
}
//#endregion

//#region 原型链继承
// 缺点：引用类型的属性会被所有的实例共享
;(() => {
	function SuperClass() {
		this.name = 'Super'
		this.info = {
			child: 'Sub',
		}
	}
	function SubClass() {}

	SubClass.prototype = new SuperClass()

	const sub1 = new SubClass()
	const sub2 = new SubClass()

	sub1.name = 'sub1'
	console.log(sub1.name, sub2.name, '原型链继承 普通类型属性') // sub1, Super

	sub1.info.child = 'sub1'
	console.log(sub1.info.child, sub2.info.child, '原型链继承 引用类型属性') // sub1， sub1
})()
//#endregion

//#region 构造函数继承
;(() => {
	function SuperClass() {
		this.name = 'Super'
		this.info = {
			child: 'Sub',
		}
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
//#endregion

//#region 组合式继承
// 结合原型链继承和盗用构造函数继承的优点
// 缺点：父类构造函数会执行两遍
;(() => {
	function SuperClass() {
		this.name = 'Super'
		this.info = {
			child: 'Sub',
		}
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
//#endregion

//#region 原型式继承 亦是Object.create的实现
// 原型链继承的封装，未解决引用类型的属性会被所有的实例共享
function inheritObject(o) {
	function F() {}
	F.prototype = o
	return new F()
}
//#endregion

//#region 寄生式继承
;(() => {
	function SuperClass() {
		this.name = 'Super'
		this.info = {
			child: 'Sub',
		}
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
//#endregion

//#region 寄生组合式继承
;(() => {
	function SuperClass() {
		this.name = 'Super'
		this.info = {
			child: 'Sub',
		}
		console.log('寄生组合式继承 父类执行了')
	}
	function SubClass() {
		SuperClass.call(this)
	}
	SuperClass.prototype.super = 'prototype'

	function inheritProtype(SubClass, SuperClass) {
		let p = inheritObject(SuperClass.prototype)
		SubClass.prototype = p
		p.constructor = SubClass
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

//#region ES6 类
/* 
1） Class 类可以看作是构造函数的语法糖
2） Class 类中定义的方法，都是定义在该构造函数的原型上
3）使用static关键字，作为静态方法（静态方法，只能通过类调用，实例不能调用）

了避免与访问器属性冲突，在构造函数中使用了一个带有下划线前缀的私有属性_myProperty。这是一种常见的命名约定，用于表示该属性应该被视为私有的，以防止直接访问

*/
;(() => {
	function Foo() {
		getName = function () {
			console.log(1)
		}
		return this
	}
	// 静态方法
	Foo.getName = function () {
		console.log(2)
	}
	// 成员方法
	Foo.prototype.getName = function () {
		console.log(3)
	}

	// 函数提升优先级高于变量提升，且不会被同名变量声明时覆盖，但是会被同名变量赋值后覆盖
	var getName = function () {
		console.log(4)
	}
	function getName() {
		console.log(5)
	}

	//请写出以下输出结果：
	Foo.getName() // 2
	getName() // 4
	// Foo().getName(); // undefined is not a function
	getName() // 4
	new Foo.getName() // 2
	new Foo().getName() // 3
	new new Foo().getName() // 3
})()
