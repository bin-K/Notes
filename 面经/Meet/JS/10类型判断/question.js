//#region 数据类型
/* 
  基础数据类型：Number、String、Boolean、undefined、null、BingInt、Symbol
  引用数据类型：Object
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
