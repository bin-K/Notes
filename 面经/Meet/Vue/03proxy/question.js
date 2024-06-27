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
		vue.$data.info.person.name = '小明'
	}, 2000)
}

class Dep {
	watcherList = []
	add(node) {
		this.watcherList.push(node)
	}
	update(value) {
		console.log(value, this.watcherList, 1111)
		this.watcherList.forEach((node) => {
			console.log(node, 1)
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
		this.$el = document.querySelector(options.el)
		this.$data = this.observe(options.data)
		this.compile(this.$el, this)
		// this.proxy(this.$data, this)
	}

	observe(data) {
		const _this = this
		const dep = new Dep()
		return new Proxy(data, {
			get(target, key) {
				const result = Reflect.get(target, key)
				if (result && typeof result === 'object') {
					return _this.observe(result)
				} else {
					Dep.target && dep.add(Dep.target)
					return result
				}
			},
			set(target, key, value) {
				console.log(value)
				dep.update(value)
				return Reflect.set(target, key, value)
			},
		})
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
				const keyNoTrim = mustache.exec(child.textContent)[1]
				const key = keyNoTrim.trim()
				const keyList = key.split('.')
				let value = vm.$data
				Dep.target = child
				keyList.forEach((item) => (value = value[item]))
				console.log(value)
				child.textContent = child.textContent.replace(`{{${keyNoTrim}}}`, value)
				Dep.tagName = null
			}
			if (child.childNodes.length) {
				this.compile(child, vm)
			}
		})
	}

	// this代理 this.$data
	// vm.info.person.name 相当于 vm.$data.info.person.name
	// proxy($data, vm) {
	// 	Object.keys($data).forEach((dataKey) => {
	// 		vm[dataKey] = $data[dataKey]
	// 		return new Proxy(vm, {
	// 			get(target, key) {
	// 				console.log(target, key, 1)
	// 				const result = Reflect.get(target, key)
	// 				return result
	// 			},
	// 			set(target, key, value) {
	// 				console.log(target, key, value, 1)
	// 				Reflect.set(target, key, value)
	// 			},
	// 		})
	// 	})
	// }
}
