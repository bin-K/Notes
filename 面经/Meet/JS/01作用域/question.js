//作用域和值类型引用类型的值传递
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
