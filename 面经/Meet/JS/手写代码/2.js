Array.prototype.Reduce = function (fn, initalValue) {
	if (typeof fn !== 'function') {
		throw new TypeError(`${fn} is not a function`)
	}
	let pre, index
	let arr = this.slice()
	if (initalValue === undefined) {
		for (let i = 0; i < arr.length; i++) {
			if (!arr.hasOwnProperty(i)) continue
			pre = arr[i]
			index = i
			break
		}
	} else {
		pre = initalValue
		index = 0
	}

	for (let i = index; i < arr.length; i++) {
		if (!arr.hasOwnProperty(i)) continue
		pre = fn.apply(null, pre, arr[i], i, this)
	}
	return pre
}

Array.prototype.Map = function (fn, context) {
	if (typeof fn !== 'function') {
		throw new TypeError(`${fn} is not a function`)
	}
	let arr = this.slice()
	let list = new Array(arr.length)
	for (let i = 0; i < arr.length; i++) {
		if (arr.hasOwnProperty(i)) {
			list[i] = fn.apply(context, arr[i], i, this)
		}
	}
	return list
}

Array.prototype.Filter = function (fn, context) {
	if (typeof fn !== 'function') {
		throw new TypeError(`${fn} is not a function`)
	}
	let list = []
	for (let i = 0; i < this.length; i++) {
		if (fn.apply(context, this[i], i, this)) {
			list.push(this[i])
		}
	}
	return list
}

Array.prototype.Some = function (fn) {
	if (typeof fn !== 'function') {
		throw new TypeError(`${fn} is not a function`)
	}

	let result = false
	for (let i = 0; i < this.length; i++) {
		if (fn(this[i])) {
			result = true
			break
		}
	}
	return result
}

Array.prototype.Every = function (fn) {
	if (typeof fn !== 'function') {
		throw new TypeError(`${fn} is not a function`)
	}
	let result = false
	let index = 0
	for (let i = 0; i < this.length; i++) {
		if (fn(this[i])) {
			index++
			if (index === this.length) {
				result = true
			}
		}
	}
	return false
}

Array.prototype.Flat = function (deep) {
	let arr = this.slice()
	if (deep <= 0) return arr
	return arr.reduce((pre, cur) => {
		if (Array.isArray(cur)) {
			return [...pre, ...cur.Flat(deep - 1)]
		} else {
			return [...pre, cur]
		}
	}, [])
}

function Typeof(context) {
	return Object.prototype.toString.call(context).slice(8, -1).toLowerCase()
}

function compose(list) {
	const init = list.shift()
	return function (...args) {
		list.reduce((pre, cur) => {
			return pre.then((res) => {
				return cur.call(null, res)
			})
		}, Promise.resolve(init.apply(null, args)))
	}
}

function curry(fn) {
	if (fn.length < 1) return fn
	const generator = (...arg) => {
		if (fn.length === arg.length) {
			return fn(...arg)
		} else {
			return (...args1) => {
				return generator(...arg, ...args1)
			}
		}
	}
	return generator
}
