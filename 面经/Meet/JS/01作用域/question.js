//#region 执行上下文
/* 
	1、JS代码都是在执行上下文中执行的
	2、执行上下文： 指当前执行环境中的变量、函数声明、作用域链、this等信息
	3、执行上下文分为全局、函数、Eval执行上下文
		1）全局执行上下文（浏览器环境下，为全局的 window 对象）
		2）函数执行上下文，每当一个函数被调用时, 都会为该函数创建一个新的上下文
		3）Eval 函数执行上下文，如eval("1 + 2")
	4、对于每个执行上下文，都有三个重要属性：变量对象、作用域链(Scope chain)、this
*/
/* 
	执行上下文的特点：
		1）单线程，只在主线程上运行
		2）同步执行，从上向下按顺序执行
		3）全局上下文只有一个，也就是window对象
		4）函数每调用一次就会产生一个新的执行上下文环境
*/
//#endregion

//#region 执行上下文的生命周期
/* 
	1、创建阶段：生成变量对象、建立作用域链、确定this指向
	2、执行阶段: 变量赋值、函数引用、执行其他代码
*/
//#endregion

//#region 执行栈
/* 
	执行栈是一种先进后出的数据结构，用来存储代码运行的所有执行上下文
		1）当 JS 引擎第一次遇到js脚本时，会创建一个全局的执行上下文并且压入当前执行栈
		2）每当JS 引擎遇到一个函数调用，它会为该函数创建一个新的执行上下文并压入栈的顶部
		3）当该函数执行结束时，执行上下文从栈中弹出，控制流程到达当前栈中的下一个上下文
		4）一旦所有代码执行完毕，JS 引擎从当前栈中移除全局执行上下文
*/
//#endregion

//#region 作用域
/* 
	作用域：可访问变量的集合，最大的作用就是隔离变量，不同的作用域下同名变量不会有冲突
	作用域类型：全局作用域、函数作用域、块级作用域（ES6）
		全局作用域：全局上下文的变量
		函数作用域：是指声明在函数内部的变量，函数的作用域在函数定义的时候就决定了
		块级作用域：块作用域由{ }包括，if和for语句里面的{ }也属于块作用域，在块级作用域中，可通过let和const声明变量，该变量在指定块的作用域外无法被访问
*/
//#endregion

//#region var let const的区别
/* 
	1）var定义的变量，没有块的概念，可以跨块访问, 可以变量提升
	2）let定义的变量，只能在块作用域里访问，不能跨块访问，也不能跨函数访问，无变量提升，不可以重复声明
	3）const用来定义常量，使用时必须初始化(即必须赋值)，只能在块作用域里访问，而且不能修改，无变量提升，不可以重复声明
*/
//#endregion

//#region 作用域链
/* 
	当查找变量的时候，首先会先从当前上下文的变量对象（作用域）中查找，
	如果没有找到，就会从父级的执行上下文的变量对象中查找，
	如果还没有找到，一直找到全局上下文的变量对象，也就是全局对象。
	这样由多个执行上下文的变量对象构成的链表就叫做作用域链
*/
//#endregion

//#region 作用域和值类型引用类型的值传递
;(() => {
	// 1、作用域
	// 全局作用域下有 num1 : 55 ,num2: 66,俩个变量
	var num1 = 55
	var num2 = 66
	function f1(num, num1) {
		// 根据传入的参数，变量的提升，预编译
		// 函数作用域下有 num：55 ，num1：66
		// var num = 55
		// var num1 = 66

		// 此时变量num和num1被改为了100
		num = 100
		num1 = 100

		// 根据作用域链，函数内部无num2变量，往上一级作用域寻找，变量提升，全局变量的num2被改为了100
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
;(() => {
	//第2题值类型和引用类型的传递
	function Person(name, age, salary) {
		// 函数作用域下有 name age salary 三个变量
		this.name = name
		this.age = age
		this.salary = salary
	}
	function f2(person) {
		// f2的作用域下 person: p
		//var person = p
		// 此时person和p指向堆内存中的同一个Person对象
		person.name = 'ls' //改变了堆内存的Person对象的name值
		// person和p的作用域下：name: aa, age: 18, salary: 10
		person = new Person('aa', 18, 10) //将person指向新的Person对象
	}
	// p的作用域下 name: zs, age: 18, salary: 1000
	var p = new Person('zs', 18, 1000)
	console.log(p.name) //'zs'
	f2(p)
	console.log(p.name) //'ls' 此时打印的仍然是堆内存中第一个Person的name值
})()
//#endregion

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
	new new Fn().A() //报错,箭头函数不能new
}
//#endregion
