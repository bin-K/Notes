;() => {
	window.onload = function () {
		const vue = new Vue({
			el: '#app',
			data: {
				name: '加载中...',
				age: '加载中...',
			},
		})
		setTimeout(() => {
			;(vue.$data.name = '小明'), (vue.$data.age = 20)
		}, 2000)
	}
	class Dep {
		constructor() {
			this.watcherList = []
		}
		add(node) {
			this.watcherList.push(node)
		}
		update(value) {
			this.watcherList.forEach((node) => {
				node.textContent = value
			})
		}
	}

	class Vue {
		constructor(options) {
			this.options = options
			this.$data = options.data
			this.observe(options.data)
			this.complie(document.querySelector(options.el))
		}
		observe(data) {
			Object.keys(data).forEach((key) => {
				let observe = new Dep()
				let value = data[key]
				Object.defineProperty(data, key, {
					get() {
						Dep.target && observe.add(Dep.target)
						return value
					},
					set(newValue) {
						value = newValue
						observe.update(newValue)
					},
				})
			})
		}
		complie(dom) {
			dom.childNodes.forEach((child) => {
				const mustache = /{\{(.*)\}}/
				if (child.nodeType === 3 && mustache.test(child.textContent)) {
					let key = mustache.exec(child.textContent)[1].trim()
					let keyNoTrim = mustache.exec(child.textContent)[1]
					Dep.target = child
					child.textContent = child.textContent.replace(
						`{{${keyNoTrim}}}`,
						this.$data[key]
					)
					Dep.target = null
				}
				if (child.childNodes.length) {
					this.complie(child)
				}
			})
		}
	}
}
;() => {
	window.onload = function () {
		const vue = new Vue({
			el: '#app',
			data: {
				info: {
					person: {
						name: '加载中',
					},
				},
				job: '程序猿',
			},
		})
		setTimeout(() => {
			vue.info.person.name = '小明'
		}, 2000)
	}

	class Dep {
		constructor() {
			this.watcherList = []
		}
		add(node) {
			this.watcherList.push(node)
		}
		update(value) {
			this.watcherList.forEach((node) => {
				if (node.tagName === 'INPUT' || node.tagName === 'TEXTAREA') {
					node.value = value
				} else {
					node.textContent = value
				}
			})
		}
	}

	class Vue {
		constructor(options) {
			this.options = options
			this.$data = options.data
			this.$el = document.querySelector(options.el)
			this.observe(this.$data)
			this.complie(this.$el, this)
			this.proxy(this.$data, this)
		}
		observe(data) {
			if (data && typeof data === 'object') {
				const _this = this
				Object.keys(data).forEach((key) => {
					let dep = new Dep()
					let value = data[key]
					_this.observe(value)
					Object.defineProperty(data, key, {
						get() {
							Dep.target && dep.add(Dep.target)
							return value
						},
						set(newValue) {
							value = newValue
							_this.observe(value)
							dep.update(value)
						},
					})
				})
			}
		}
		complie(dom, vm) {
			const mustache = /{\{(.*)\}}/
			Array.from(dom.childNodes).forEach((child) => {
				if (child.nodeType === 1) {
					Array.from(child.attributes).forEach((attr) => {
						if (attr.name.includes('v-model')) {
							Dep.target = child
							child.value = vm.$data[attr.value]
							Dep.target = null
						}
						child.addEventListener('input', (e) => {
							vm.$data[attr.value] = e.target.value
						})
					})
				}
				if (child.nodeType === 3 && mustache.test(child.textContent)) {
					const key = mustache.exec(child.textContent)[1].trim()
					const keyNoTrim = mustache.exec(child.textContent)[1]
					const keyList = key.split('.')
					let value = vm.$data
					keyList.forEach((item) => (value = value[item]))
					Dep.target = child
					child.textContent = child.textContent.replace(
						`{{${keyNoTrim}}}`,
						value
					)
					Dep.target = null
				}
				if (child.childNodes.length) {
					this.complie(child)
				}
			})
		}
		proxy(data, vm) {
			Object.keys(data).forEach((key) => {
				Object.defineProperty(vm, key, {
					get() {
						return data[key]
					},
					set(newValue) {
						data[key] = newValue
					},
				})
			})
		}
	}
}
;() => {
	function isObject(target) {
		if (typeof target === 'object' && target !== null) {
		} else {
			return target
		}
	}

	function observe(target) {
		return new Proxy(target, {
			get(target, key) {
				let result = Reflect.get(target, key)
				return isObject(result)
			},
			set(target, key, value) {
				return Reflect.set(target, key, value)
			},
		})
	}
}
;() => {
	function dom2Json(dom) {
		if (!dom.tagName) return
		let obj = {}
		obj.tag = dom.tagName
		obj.props = {}
		Array.from(dom.attributes).forEach((attr) => {
			obj.props[attr.name] = attr.value
		})
		obj.children = []
		Array.from(dom.childNodes).forEach((child) => {
			dom2Json(child) && obj.children.push(dom2Json(child))
		})
		return obj
	}

	function render() {
		class Element {
			constructor(type, props, children) {
				this.type = type
				this.props = props
				this.children = children
			}
		}
		let el = document.querySelector(domObj)
		Object.keys(domObj.props).forEach((key) => {
			let value = domObj.props[key]
			switch (key) {
				case 'value':
					if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
						el.value = value
					} else {
						el.setAttribute(key, value)
					}
					break
				case 'style':
					el.style.cssText = value
					break
				default:
					el.setAttribute(key, value)
			}
		})
		domObj.children.forEach((child) => {
			child =
				child instanceof Element
					? render(child)
					: document.createTextNode(child)
		})
		return el
	}
}
