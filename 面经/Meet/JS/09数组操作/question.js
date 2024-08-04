//#region for...in和for...of的区别
/* 
	for…of 遍历获取的是对象的键值，for…in 获取的是对象的键名；
	for… in 会遍历对象的整个原型链，性能非常差不推荐使用，而 for … of 只遍历当前对象不会遍历原型链；
	对于数组的遍历，for…in 会返回数组中所有可枚举的属性(包括原型链上可枚举的属性)，for…of 只返回数组的下标对应的属性值；
*/
//#endregion

//#region reduce
;(() => {
	Array.prototype.Reduce = function (fn, initialValue) {
		if (typeof fn !== 'function') {
			throw new TypeError(`${fn} is not a function `)
		}
		let pre, index
		let arr = this.slice()
		// 如果没有提供initialValue，找到数组中的第一个存在的值作为pre，下一个元素的下标作为index
		if (initialValue === undefined) {
			for (let i = 0; i < arr.length; i++) {
				// 排除空值，undefined等存在的值
				if (!arr.hasOwnProperty(i)) continue
				pre = arr[i]
				index = i + 1
				break
			}
		} else {
			// 如果提供了initialValue时，则作为pre的初始值，index从0开始
			pre = initialValue
			index = 0
		}
		for (let i = index; i < arr.length; i++) {
			if (!arr.hasOwnProperty(i)) continue
			// 函数接收4个参数 pre, cur, index, array
			pre = fn.call(null, pre, arr[i], i, this)
		}
		return pre
	}

	console.log([, , , 1, 2, 3, 4].Reduce((pre, cur) => pre + cur)) // 10
})()
//#endregion

//#region map
;(() => {
	// map第二参数作为第一个参数的this
	Array.prototype.Map = function (fn, content) {
		if (typeof fn !== 'function') {
			throw new TypeError(`${fn} is not a function`)
		}
		let arr = this.slice()
		let list = new Array(arr.length)
		for (let i = 0; i < arr.length; i++) {
			if (arr.hasOwnProperty(i)) {
				list[i] = fn.call(content, arr[i], i, this)
			}
		}
		return list
	}
	console.log([1, 2, 3].Map((item) => item * 2))
})()
//#endregion

//#region filter
;(() => {
	// 创建给定数组一部分的浅拷贝，其包含通过所提供函数实现的测试的所有元素
	Array.prototype.Filter = function (fn, content) {
		if (typeof fn !== 'function') {
			throw new TypeError(`${fn} is not a function`)
		}
		let list = []
		for (let i = 0; i < this.length; i++) {
			if (fn.call(content, this[i], i, this)) {
				list.push(this[i])
			}
		}
		return list
	}
	console.log([1, 2, 3, 4].Filter((item) => item > 2)) // [3, 4]
})()
//#endregion

//#region some
;(() => {
	// 检测数组中是否存在元素满足指定条件，只要有一个存在，后面的元素不再检测
	Array.prototype.Some = function (fn) {
		if (typeof fn !== 'function') {
			throw new TypeError(`${fn} is not a function`)
		}
		let result = false
		for (let i = 0; i < this.length; i++) {
			if (fn(this[i], i)) {
				result = true
				break
			}
		}
		return result
	}
	console.log([1, 2, 3, 4].Some((item) => item > 6)) // false
	console.log([1, 2, 3, 4].Some((item) => item > 2)) // true
})()
//#endregion

//#region every
;(() => {
	// 检测数组中是否所有元素满足指定条件
	Array.prototype.Every = function (fn) {
		if (typeof fn !== 'function') {
			throw new TypeError(`${fn} is not a function`)
		}
		let result = false
		let index = 0
		for (let i = 0; i < this.length; i++) {
			if (fn(this[i], i)) {
				index++
				if (index === this.length - 1) {
					result = true
				}
			}
		}
		return result
	}
	console.log([1, 2, 3, 4].Every((item) => item > 4)) // false
	console.log([1, 2, 3, 4].Every((item) => item > 0)) // true
})()
//#endregion

//#region flat
;(() => {
	// 数组扁平化 deep表示扁平的层级，默认为1
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
	const arr1 = [0, 1, [2, [3, [4, 5]]]]
	console.log(arr1.flat())
	console.log(arr1.flat(2))
	console.log(arr1.flat(Infinity))
})()
//#endregion
