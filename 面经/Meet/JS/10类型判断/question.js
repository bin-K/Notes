//#region 基础数据类型
/* 
	Undefined Null Number String Boolean Object Symbol BigInt (后面两个ES6新增)
	基础数据类型（存放在栈中）：Undefined Null Number String Boolean Symbol BigInt 
	引用数据类型（存放在堆中）：Object (对象、数组、函数)
*/
//#endregion

//#region isNaN 和 Number.isNaN
/* 
	NaN 是一个特殊的警戒值，它表示非数字，并且它不等于自身 NaN !== NaN (true)
	typeof NaN === 'number' (true)

	isNaN 会将传入的值进行数字转换，任何不能进行数字转换的值都返回true
	Number.isNaN 会判断传入的值是否是数字，判断为数字再判断是不是NaN,不进行数据转换
*/
//#endregion

//#region 转换到字符串
/* 
	undefined -> 'undefined' null -> 'null' true -> 'true' false -> 'false'
	数字正常转换(极大极小值使用指数形式)
	Symbol直接转换(只允许显式强制转换，隐式强制转换会报错)
	引用类型转换会调用toString()方法（toSting可以自定义）返回内部 [[class]] 的值
*/
//#endregion

//#region 转换到数字
/* 
	undefined -> NaN null -> 0 true -> 1 false -> 0
	'' -> 0 含有非数字的字符串 -> NaN
	Symbol 不能转数字
*/
//#endregion

//#region 转换到boolean
/* 
	undfeined null +0 -0 '' NaN false 都为false 其余的逻辑上都为true
*/
//#endregion

//#region typeof
;(() => {
	function Typeof(context) {
		return Object.prototype.toString.call(context).slice(8, -1).toLowerCase()
	}
	const foo = () => {}
	const str = '1'
	const boo = false
	const n = null
	const u = undefined
	const s = Symbol()
	const b = BigInt(9007199254740991)
	console.log(Typeof(foo))
	console.log(Typeof(str))
	console.log(Typeof(boo))
	console.log(Typeof(n))
	console.log(Typeof(u))
	console.log(Typeof(s))
	console.log(Typeof(b))
})()
//#endregion

//#region instanceof
;(() => {
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

	const foo = () => {}
	const o = new Object()
	const a = new Array()
	const m = new Map()
	const w = new WeakMap()
	const s = new Set()

	console.log(Instanceof(foo, Function))
	console.log(Instanceof(o, Object))
	console.log(Instanceof(a, Array))
	console.log(Instanceof(m, Map))
	console.log(Instanceof(w, WeakMap))
	console.log(Instanceof(s, Set))
})()
//#endregion

//#region || && 的返回值
//  || -> true: 返回第一个操作数的值（不是条件结果） false: 返回第二个操作数的值（不是条件结果）
//  && -> true: 返回第二个操作数的值（不是条件结果） false: 返回第一个操作数的值（不是条件结果）
//#endregion

//#region map 和 Object 的区别
/* 
	意外的键：
		map不存在任何额外的键,只包含显示插入
		object存在原型对象，可能会跟原型上的键名重复
	键的类型
		map的键值可以是任何类型
		object的键值只能是string 或者 Symbol
	键的顺序
		map的键是有序的
		object的键是无序的
	大小
		map 可以通过size轻松获取
		object 只能手动计算
	迭代
		map可以直接迭代
		object 需要获取键后才能迭代
	性能
		频繁删减下map优于object
*/
//#endregion

//#region map 和 WeakMap
/* 
	Map 数据结构。它类似于对象，也是键值对的集合，
		但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键
	WeakMap 结构与 Map 结构类似，也是用于生成键值对的集合。
		但是 WeakMap 只接受对象作为键名（ null 除外），不接受其他类型的值作为键名。
		而且 WeakMap 的键名所指向的对象，不计入垃圾回收机制
*/
//#endregion
