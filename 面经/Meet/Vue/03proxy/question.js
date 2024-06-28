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
	watcherList = new Map()
	add(key, node) {
		this.watcherList.set(key, node)
	}
	update(key, value) {
		if (this.watcherList.size) {
			const node = this.watcherList.get(key)
			if (node.tagName === 'INPUT' || node.tagName === 'TEXTAREA') {
				node.value = value
			} else {
				node.textContent = value
			}
		}
	}
}

function observe(data) {
	if (!data || typeof data !== 'object') return data
	return new Observe(data)
}

class Observe {
	constructor(data) {
		for (let key in data) {
			data[key] = observe(data[key])
		}
		return this.proxy(data)
	}
	proxy(data) {
		const dep = new Dep()
		return new Proxy(data, {
			get: (target, key, receiver) => {
				Dep.target && dep.add(key, Dep.target)
				return Reflect.get(target, key, receiver)
			},
			set: (target, key, value) => {
				dep.update(key, value)
				return Reflect.set(target, key, observe(value))
			},
		})
	}
}

class Vue {
	constructor(options) {
		this.options = options
		this.$el = document.querySelector(options.el)
		this.$data = observe(options.data)
		this.compile(this.$el, this)
		this.proxy(this.$data, this)
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
			vm[key] = observe($data[key])
		})
	}
}
