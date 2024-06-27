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

class Vue {
	constructor(options) {
		this.options = options
		this.$data = options.data
		this.$el = document.querySelector(options.el)
		this.observe(options.data)
		this.compile(this.$el, this)
		this.proxy(this.$data, this)
	}

	observe(data) {
		if (data && typeof data === 'object') {
			const _this = this
			Object.keys(data).forEach((key) => {
				let value = data[key]
				let dep = new Dep()
				// 递归
				_this.observe(value)
				Object.defineProperty(data, key, {
					get() {
						Dep.target && dep.add(Dep.target)
						return value
					},
					set(newValue) {
						value = newValue
						// 如果新设置的值是一个对象，该对象也要变成响应式的
						_this.observe(newValue)
						dep.update(newValue)
					},
				})
			})
		}
	}

	compile(dom, vm) {
		const mustache = /\{\{(.*)\}\}/
		Array.from(dom.childNodes).forEach((child) => {
			// 元素节点，匹配input textArea
			if (child.nodeType === 1) {
				Array.from(child.attributes).forEach((attr) => {
					if (attr.name.includes('v-model')) {
						Dep.target = child
						child.value = vm.$data[attr.value]
						Dep.target = null
						// 给节点绑定原生input事件
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
				child.textContent = child.textContent.replace(`{{${keyNoTrim}}}`, value)
				Dep.target = null
			}
			if (child.childNodes.length) {
				this.compile(child, vm)
			}
		})
	}

	// this代理 this.$data
	// vm.info.person.name 相当于 vm.$data.info.person.name
	proxy($data, vm) {
		Object.keys($data).forEach((key) => {
			Object.defineProperty(vm, key, {
				get() {
					return $data[key]
				},
				set(newValue) {
					$data[key] = newValue
				},
			})
		})
	}
}

class Dep {
	constructor() {
		this.watchList = []
	}
	add(node) {
		this.watchList.push(node)
	}
	update(value) {
		this.watchList.forEach((node) => {
			if (node.tagName === 'INPUT' || node.tagName === 'TEXTAREA') {
				node.value = value
			} else {
				node.textContent = value
			}
		})
	}
}
