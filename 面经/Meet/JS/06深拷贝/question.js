let obj = {
	a: 100,
	b: [10, 20, 30],
	c: {
		x: 10,
	},
	d: /^\d+$/,
}

let arr = [
	10,
	[100, 200],
	{
		x: 10,
		y: 20,
	},
]

// 深拷贝第一种方法（开发中比较常用，但是有局限性）
// JSON.parse(JSON.stringify(obj))不能对函数、正则、时间对象、数字对象的时候会不好用

//#region 手写deepClone
;(() => {
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
;(() => {
	function deepClone(target, hash = new WeakMap()) {
		const isObject = (obj) => typeof obj === 'object' && obj !== null
		if (!isObject(target)) return target
		if (hash.get(target)) return hash.get(target)
		const newObj = Array.isArray(target) ? [] : {}
		hash.set(target, newObj)
		for (let key in target) {
			if (target.hasOwnProperty(key)) {
				if (isObject(target[key])) {
					newObj[key] = deepClone(target[key], hash) // 递归拷贝
				} else {
					newObj[key] = target[key]
				}
			}
		}
		return newObj
	}

	let obj1 = deepClone(obj)
	obj1.a = 200
	console.log(obj, obj1)
})()
