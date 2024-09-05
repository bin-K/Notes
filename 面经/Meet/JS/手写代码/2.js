Array.prototype.Reduce = function (fn, initialValue) {
	if (typeof fn !== 'function') {
		throw new TypeError(`${fn} is not a function`)
	}
	let index, pre
	const arr = this.slice()
	if (initialValue === undefined) {
		for (let i = 0; i < arr.length; i++) {
			if (!arr.hasOwnProperty(i)) continue
			index = i + 1
			pre = arr[i]
			break
		}
	} else {
		index = 0
		pre = initialValue
	}
	for (let i = index; i < arr.length; i++) {
		if (arr.hasOwnProperty(i)) {
			pre = fn.call(undefined, pre, arr[i], i, this)
		}
	}

	return pre
}

Array.prototype.Map = function (fn, context) {
	if (typeof fn !== 'function') {
		throw new TypeError(`${fn} is not a function`)
	}
	const arr = this.slice()
	const list = new Array(arr.length)
	for (let i = 0; i < arr.length; i++) {
		if (arr.hasOwnProperty(i)) {
			list[i] = fn.call(context, arr[i], i, this)
		}
	}
	return list
}

Array.prototype.Filter = function (fn, context) {
	if (typeof fn !== 'function') {
		throw new TypeError(`${fn} is not a function`)
	}
	const list = []
	for (let i = 0; i < this.length; i++) {
		if (fn.call(context, this[i], i, this)) {
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
		if (fn(this[i], i)) {
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
		if (fn(this[i], i)) {
			index++
			if (index === this.length) {
				result = true
			}
		}
	}
	return result
}

Array.prototype.Flat = function (deep) {
	const arr = this.slice()
	if (deep === 0) return arr
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
		return list.reduce((pre, cur) => {
			return pre.then((res) => {
				return cur.call(undefined, res)
			})
		}, Promise.resolve(init.apply(undefined, args)))
	}
}

function curry(fn) {
	if (fn.length < 1) return fn
	const generator = (...args) => {
		if (fn.length === args.length) {
			return fn(...args)
		} else {
			return (...args1) => {
				return generator(...args, ...args1)
			}
		}
	}
	return generator
}

function mySetInterval(fn, wait) {
	let timer = null
	const interval = () => {
		fn()
		timer = setTimeout(interval, wait)
	}
	interval()
	return {
		cancel() {
			clearTimeout(timer)
		},
	}
}

function mySetTimeout(fn, wait) {
	let timer = setInterval(() => {
		fn()
		clearInterval(timer)
	}, wait)
}
