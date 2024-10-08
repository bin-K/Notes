/**
 * 什么是闭包?
 *    1.密闭的容器.类似于set,map
 *    2.闭包是一个对象.存放数据的格式:key:value
 * 形成的条件:
 *    1.函数嵌套
 *    2.内部函数引用外部函数的局部变量
 *
 * 闭包的优点:
 *    1.延长外部函数局部变量的生命周期
 * 闭包的缺点:
 *    容易造成内存泄漏
 * 注意点:
 *    1.合理使用闭包
 *    2.用完闭包要及时销毁
 */

//#region  1
;() => {
	function fun() {
		var count = 1
		// 此时已经形成闭包了
		function fun2() {
			console.log(count)
		}
		// 在fun2执行之后,闭包会被立即销毁
		fun2()
	}
	fun() // 1
}

//#endregion

//#region 2
;() => {
	function fun() {
		var count = 1
		return function () {
			count++
			console.log(count)
		}
	}

	var fun2 = fun()
	// 此函数执行完闭包还未销毁
	fun2() //2
	// 此函数执行完后，闭包会销毁
	fun2() //3
}
//#endregion

//#region 3
;() => {
	//输出情况
	function fun(n, o) {
		// var n ,o
		// fun(0)时 n = 0,o = undefined
		console.log(o)
		return {
			fun: function (m) {
				return fun(m, n)
			},
		}
	}
	var a = fun(0) //undefined
	/* 
  此时fun是一个函数,返回的是全局函数执行的结果,此时m是传入的1,而n则是第一次执行时修改后的0,
  所以此时fun的结果为0,并且此时n是外部函数的局部变量,这里形成了闭包,此时传入的值也只改变了
  返回的函数的值,没有改变外部函数n的值

*/
	a.fun(1) //0
	a.fun(2) //0
	a.fun(3) //0
	/**
	 * 这里需要拆开来看,
	 * 首先是fun(0) 输出的结果肯定是undefinded
	 * 然后是fun(0).fun(1)  此时fun(0)已经给n赋值了,因此输出的是0
	 * 然后是(fun(0).fun(1)).fun(2) 此时(fun(0).fun(1))返回的闭包与fun(0)返回的是新的对象,执行新的函数,
	 *                             形成新的闭包, 因此,此时相当于n的值应该是1
	 * 然后是(fun(0).fun(1).fun(2)).fun(3) 与上面同理
	 */
	var b = fun(0).fun(1).fun(2).fun(3) //undefined, 0 , 1 , 2
	/**
	 * 上面两种情况的混合
	 * 首先是 fun(0) 输出的结果是undefined
	 * 然后是fun(0).fun(1),输出的结果是 0,并将返回对象赋给c
	 * 然后是c.fun(2),相当于(fun(0).fun(1)).fun(2),此时的n已经改为1了,输出的是1
	 * 然后是c.fun(3),相当于(fun(0).fun(1)).fun(3),此时的n仍然是1,输出1
	 */
	var c = fun(0).fun(1)
	c.fun(2)
	c.fun(3) //undefined, 0 ,1 , 1
	//#endregion

	//#region 4
	var test = (function (i) {
		return function () {
			alert((i *= 2))
		}
	})(2)
	test(5)

	// 弹出的是字符串 '4'
	/**
	 * 这里是一个自调用闭包
	 * 外面的函数执行时：
	 * 创建一个局部变量i并且赋值为2，然后将一个函数返回出去，将函数赋给test
	 * test(5)执行时，实际执行的是第一个函数返回出去的函数，不会执行第一个
	 * 函数，第一个函数只会执行一次，由于返回出去的函数不接收变量，因此，传入的5不起作用
	 * 并且alert中需要的变量是i，自身函数并没有对应的变量，根据作用域链会在第一个函数中
	 * 找到对应的i，i = 2*2 = 4，并且这里形成了闭包，因为返回函数中对外面函数的变量
	 * 还有引用，所以外面函数中的变量i在函数执行完之后并不会被销毁
	 */
}
//#endregion

//#region 5
;() => {
	var a = 0,
		b = 0
	function A(a) {
		A = function (b) {
			alert(a + b++)
		}
		alert(a++)
	}
	A(1) // '1'
	A(2) // '4'

	/**
	 * 函数执行前进行变量提升，定义 a ，b 未赋值，定义并且对函数赋值
	 * 函数执行，全局变量 a 被赋值为 0 ，全局 b被赋值为0
	 * A(1)执行，函数的局部变量 a 被赋值为 1 ，此时函数A被重新赋值，弹出执行，弹出 '1' ,并且将局部变量a改为 2
	 * A(2)执行，此时函数已经被更改了，执行的是里面的那个函数，因为还用到变量a，自身没有a，根据作用域链
	 * 找到外面函数的局部变量a，此时形成了闭包，此时 a = 2 ，b 的值由传入的值决定 ，因此弹出 '4'
	 */
}
//#endregion

//#region  6
;() => {
	var x = 2
	var y = {
		x: 3,
		z: (function (x) {
			this.x *= x
			x += 2
			return function (n) {
				this.x *= n
				x += 3
				console.log(x)
			}
		})(x),
	}
	/*
  m(4)此时调用函数的是m,第一个函数是window执行的,this指向的是window,第二个函数是m执行的,m是普通的变量
  this依旧指向window
  自调用函数执行,在函数中会定义var x = 2,局部变量由全局变量赋值,
  因此全局的 x = 2*2 = 6,函数中的x改为 x= 2 + 2=4
  返回一个函数,这个函数由m调用,this指向window,也就是说,全局的 x = 4 * 4 = 16
  返回的函数没有x,会根据作用域链找到第一个函数的 x = 4,此时形成闭包, x = 4 + 3 = 7
  因此打印x=7
*/
	var m = y.z
	m(4)

	/*
  y.z(5)调用的函数的是y中的z,第一个函数的this指向是window,返回的函数this指向的是y,因为此时执行的函数的是z
  上面的函数执行完之后,形成了闭包,此时全局的x为16,函数内部的x为7
  执行返回的函数:此时this指向的y,this.x = 3 * 5 =15,第一个函数的 x = 7 + 3 =10
  因此打印的x为10
*/

	y.z(5)
	// 经过两次执行,全局的x已经被改为了16,y中的x被改为了15
	console.log(x, y.x)
}

//#endregion

//#region 7
;() => {
	for (var i = 0; i < 5; i++) {
		setTimeout(function () {
			console.log(new Date(), i)
		}, 1000)
	}

	console.log(new Date(), i)
	// 5,5,5,5,5,5

	// 用箭头表示其前后的两次输出之间有 1 秒的时间间隔，
	// 而逗号表示其前后的两次输出之间的时间间隔可以忽略，代码实际运行的结果该如何描述？
	// 5 -> 5,5,5,5,5

	// 如果期望代码的输出变成：5 -> 0,1,2,3,4，该怎么改造代码？
	// 闭包
	for (var i = 0; i < 5; i++) {
		;(function (j) {
			// j = i
			setTimeout(function () {
				console.log(new Date(), j)
			}, 1000)
		})(i)
	}

	console.log(new Date(), i)

	// 增补
	for (var i = 0; i < 5; i++) {
		setTimeout(
			function (j) {
				console.log(new Date(), j)
			},
			1000,
			i
		)
	}

	console.log(new Date(), i)

	//  JS 中基本类型（Primitive Type）的参数传递是按值传递（Pass by Value）的特征
	// 利用了函数作用域
	var output = function (i) {
		setTimeout(function () {
			console.log(new Date(), i)
		}, 1000)
	}

	for (var i = 0; i < 5; i++) {
		output(i) // 这里传过去的 i 值被复制了
	}

	console.log(new Date(), i)

	/* 
  如果期望代码的输出变成 0 -> 1 -> 2 -> 3 -> 4 -> 5，
  并且要求原有的代码块中的循环和两处 console.log 不变，该怎么改造代码？
  新的需求可以精确的描述为：代码执行时，立即输出 0，之后每隔 1 秒依次输出 1,2,3,4，
  循环结束后在大概第 5 秒的时候输出 5
  这里使用大概，是为了避免钻牛角尖的同学陷进去，因为 JS 中的定时器触发时机有可能是不确定的
  */

	/* const tasks = [];
  for (var i = 0; i < 5; i++) {   // 这里 i 的声明不能改成 let，如果要改该怎么做？
      ((j) => {
          tasks.push(new Promise((resolve) => {
              setTimeout(() => {
                  console.log(new Date, j);
                  resolve();  // 这里一定要 resolve，否则代码不会按预期 work
              }, 1000 * j);   // 定时器的超时时间逐步增加
          }));
      })(i);
  }
  
  Promise.all(tasks).then(() => {
      setTimeout(() => {
          console.log(new Date, i);
      }, 1000);   // 注意这里只需要把超时设置为 1 秒
  }); */

	const tasks = [] // 这里存放异步操作的 Promise
	const output = (i) =>
		new Promise((resolve) => {
			setTimeout(() => {
				console.log(new Date(), i)
				resolve()
			}, 1000 * i)
		})

	// 生成全部的异步操作
	for (var i = 0; i < 5; i++) {
		tasks.push(output(i))
	}

	// 异步操作完成之后，输出最后的 i
	Promise.all(tasks).then(() => {
		setTimeout(() => {
			console.log(new Date(), i)
		}, 1000)
	})

	// async await

	// 模拟其他语言中的 sleep，实际上可以是任何异步操作
	const sleep = (timeountMS) =>
		new Promise((resolve) => {
			setTimeout(resolve, timeountMS)
		})

	;(async () => {
		// 声明即执行的 async 函数表达式
		for (var i = 0; i < 5; i++) {
			if (i > 0) {
				await sleep(1000)
			}
			console.log(new Date(), i)
		}

		await sleep(1000)
		console.log(new Date(), i)
	})()
}

//#endregion

//#region 防抖

// debounce
// 就是指触发事件后 n 秒后才执行函数，如果在 n 秒内又触发了事件，则会重新计算函数执行时间
function debounce(fn, wait) {
	let timer = null
	return function () {
		const _this = this
		const args = arguments
		if (timer) {
			clearTimeout(timer)
		}
		timer = setTimeout(() => {
			fn.apply(_this, args)
		}, wait)
	}
}
//#endregion

//#region 节流
// throttle
// 就是指连续触发事件但是在 n 秒中只执行一次函数
function throttle(fn, delay) {
	let curTime = Date.now()
	return function () {
		let nowTime = Date.now()
		if (nowTime - curTime >= delay) {
			curTime = Date.now()
			return fn.apply(this, arguments)
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
