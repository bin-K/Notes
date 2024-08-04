//#region 作用域和值类型引用类型的值传递
;(() => {
	// 1、作用域
	var num1 = 55
	var num2 = 66
	function f1(num, num1) {
		// 根据传入的参数，变量的提升，预编译
		// var num = 55
		// var num1 = 66

		// 此时变量num和num1被改为了100
		num = 100
		num1 = 100

		// 变量提升，全局变量的num2被改为了100
		num2 = 100
		console.log(num) //100
		console.log(num1) //100
		console.log(num2) //100
	}
	f1(num1, num2)
	console.log(num1) //55
	console.log(num2) //100，全局变量num2在函数种被改为了100
	// console.log(num); //not define 报错
})()
//#endregion
;(() => {
	//第2题值类型和引用类型的传递
	function Person(name, age, salary) {
		this.name = name
		this.age = age
		this.salary = salary
	}
	function f2(person) {
		//var person = p
		// 此时person和p指向堆内存中的同一个Person对象
		person.name = 'ls' //改变了堆内存的Person对象的name值
		person = new Person('aa', 18, 10) //将person指向新的Person对象
	}
	var p = new Person('zs', 18, 1000)
	console.log(p.name) //'zs'
	f2(p)
	console.log(p.name) //'ls' 此时打印的仍然是堆内存中第一个Person的name值
})()
//#region 变量提升
;() => {
	// 变量提升/预处理
	/**
 * js引擎在代码正式执行之前会做一个预处理的工作:
 *    1．收集变量
      2．收集函数
  依据:
      var  将var后边的变量定义但是不赋值 var username = undefined;
      function(){} 提前定义该函数

 */

	console.log(username) //undefined

	var username = 'kobe'

	console.log(username) //kobe

	fun() //fun()

	function fun() {
		console.log('fun()')
	}

	// 执行上下文
	/**
 * 执行上下文(execute context) EC
 * 理解: 代码执行的环境
   时机: 代码正式执行之前会进入到执行环境工作:
      1．创建变量对象:
          1) 变量
          2) 西数及函数的参数
          3) 全局: window
          4) 局部: 抽象的但是确实存在
      2．确认this的指向
          1) 全局: this -- -> window
          2) 局部: this -- -> 调用其的对象
      3.创建作用域链
          父级作用域链 + 当前的变量对象

      4．扩展:
        ECobj = {
            变量对象:{变量，函数，函数的形参}
            scopeChain:父级作用域链+当前的变最对象，
            this: {window |/调用其的对象}
        }

 */

	/*
      首先题目会进行函数和变量的提升
      function Foo(){
      getName = function(){console.log(1);}
      return this
    }
    变量的提升是变量名的提升,函数提升是整体的提升
    变量与函数同名，提升以函数为准
    // var getName
    function getName(){console.log(5);}
    */

	function Foo() {
		getName = function () {
			console.log(1)
		}
		return this
	}
	Foo.getName = function () {
		console.log(2)
	}
	Foo.prototype.getName = function () {
		console.log(3)
	}
	// 在变量提升之后，此时5的函数会被4给替换，因为前面的getName在变量提升之后是5函数
	var getName = function () {
		console.log(4)
	}
	function getName() {
		console.log(5)
	}

	// 请写出以下的输出结果
	Foo.getName() // 2
	getName() //4
	// 这里的执行顺序是先执行Foo函数，也就是(Foo()).getName(),
	// Foo执行后，函数中的getName没有变量修饰符，也就是会在全局变量中找，那么此时全局变量中的getName被1函数赋值了
	// Foo返回了一个this值,this指向window,最后的变成window.getName(),此时getName是全局函数,因此会执行,输出1
	Foo().getName() //1
	// 此时getName已经被修改了
	getName() //1
	new Foo.getName() //2 new (Foo.getName)() ==> new (function(){console.log(2);})() 会执行该函数并产生一个实例对象
	// new Foo()是一个实例对象,此时类的原型对象上有一个getName函数,输出
	new Foo().getName() //3

	new new Foo().getName() //3 new ((new Foo()).getName)() ==> new (function(){console.log(3);})() 执行该函数

	// 类似题目
	function A() {
		console.log(1)
	}
	function Fn() {
		A = function () {
			console.log(2)
		}
		return this
	}
	Fn.A = A
	Fn.prototype = {
		A: () => {
			console.log(3)
		},
	}
	A() //1
	Fn.A() //1
	Fn().A() //2
	new Fn.A() //1
	new Fn().A() //3
	new new Fn().A() //报错
}
//#endregion
