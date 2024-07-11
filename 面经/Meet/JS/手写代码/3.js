//#region 手写简易双向数据绑定
;(() => {
	class Dep {
		watchList = []

		add(node) {
			this.watchList.push(node)
		}

		update(value) {
			this.watchList.forEach((node) => {
				if (node.tagName === 'INPUT' || node.tagName === 'TEXTAREA') {
					node.target = value
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
			this.compile(this.$el, this)
			this.proxy(this.$data, this)
		}

		observe(data) {
			if (data && typeof data === 'object') {
				const _this = this
				Object.keys(data).forEach((key) => {
					const dep = new Dep()
					let value = data[key]
					this.observe(value)
					Object.defineProperty(data, key, {
						get() {
							Dep.target && dep.add(Dep.target)
							return value
						},
						set(newValue) {
							value = newValue
							this.observe(newValue)
							dep.update(newValue)
						},
					})
				})
			}
		}

		compile(dom, vm) {
			const mustache = /\{\{(.*)\}\}/
			Array.from(dom.childNodes).forEach((child) => {
				if (child.nodeType === 1) {
					Array.from(child.attributes).forEach((attr) => {
						if (attr.name.includes('v-model')) {
							Dep.target = child
							child.value = vm.$data[attr.value]
							Dep.target = null
							child.addEventListener('input', (e) => {
								vm.$data[attr.value] = e.target.value
							})
						}
					})
				}
				if (child.nodeType === 3 && mustache.test(child.textContent)) {
					const key = mustache.exec(child.textContent)[1].trim()
					const keyNoTrim = mustache.exec(child.textContent)[1]
					const keyList = key.split('.')
					let value = vm.$data
					Dep.target = child
					keyList.forEach((item) => (value = value[item]))
					child.textContent = child.textContent.replace(
						`{{${keyNoTrim}}}`,
						value
					)
					Dep.target = null
				}
				if (child.childNodes.length) {
					this.compile(child)
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
})()
//#endregion

//#region Proxy
;(() => {
	function Observe(data) {
		return new Proxy(data, {
			get(target, key, reciver) {
				const value = Reflect.get(target, key, reciver)
				return isObject(value)
			},
			set(target, key, reciver) {
				return Reflect.set(target, key, reciver)
			},
		})
	}

	function isObject(target) {
		if (typeof target === 'object' && typeof target !== null) {
			return new Observe(target)
		} else {
			return target
		}
	}

	let target = { name: '测试', info: { age: 18 } }
	let proxy = Observe(target)
	proxy.info.age = 20
})()
//#endregion
