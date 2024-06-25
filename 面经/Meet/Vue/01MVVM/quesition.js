window.onload = function () {
	const vue = new Vue({
		el: '#app',
		data: {
			name: '加载中...',
			age: '加载中...',
		},
	})
	setTimeout(() => {
		vue.$data.name = '小明'
		vue.$data.age = 20
	}, 2000)
}

/* 
[observe 函数]：
  利用Object.defineProperty把data中的属性变成响应式的，同时给每一个属性添加一个dep对象(用来存储对应的watcher观察者)
  首先我们会对需要响应式的 data 对象进行 for 循环遍历，为 data 的每一个 key 映射一个观察者对象
  在 ES6 中，for 循环每次执行，都可以形成闭包，因此这个观察者对象就存放在闭包中
[compile 函数]：
  我们从根节点向下遍历 DOM，遇到 mustache 形式的文本，则映射成 data.key 对应的值，同时记录到观察者中
  当遍历到 {{xxx}} 形式的文本，我们正则匹配出其中的变量，将它替换成 data 中的值
当data的数据变化时，调用dep对象的update方法，更新所有观察者中的dom节点

*/
class Vue {
	constructor(options) {
		this.options = options
		this.$data = options.data
		this.observe(options.data)
		this.compile(document.querySelector(options.el))
	}

	observe(data) {
		Object.keys(data).forEach((key) => {
			// 给data中的每一个属性添加一个dep对象（该对象用来存储对应的watcher观察者）
			let observe = new Dep()
			// 利用闭包 获取和设置属性的时候，操作的都是value
			let value = data[key]
			Object.defineProperty(data, key, {
				get() {
					// 观察者对象添加对应的dom节点
					Dep.target && observe.add(Dep.target)
					return value
				},
				set(newValue) {
					// 属性值变化时，更新观察者中所有节点
					observe.update(newValue)
				},
			})
		})
	}

	compile(dom) {
		dom.childNodes.forEach((child) => {
			// nodeType 为3时为文本节点，并且该节点的内容包含`mustache`（双大括号{{}})
			const mustache = /\{\{(.*)\}\}/
			if (child.nodeType === 3 && mustache.test(child.textContent)) {
				// RegExp.$1是正则表达式匹配的第一个字符串，这里对应的就是data中的key值
				// RegExp.$1已废弃 用exec代替
				let key = mustache.exec(child.textContent)[1].trim()
				let keyNoTrim = mustache.exec(child.textContent)[1]
				// 将该节点添加到对应的观察者对象中，在下面的的this.options.data[key]中触发对应的get方法
				Dep.target = child
				child.textContent = child.textContent.replace(
					`{{${keyNoTrim}}}`,
					this.$data[key]
				)
				Dep.target = null
			}
			// 递归遍历子节点
			if (child.childNodes.length) {
				this.compile(child)
			}
		})
	}
}

// dep对象存储所有的观察者
class Dep {
	constructor() {
		this.watchList = []
	}
	// 添加watcher
	add(node) {
		this.watchList.push(node)
	}
	// 更新watcher
	update(value) {
		this.watchList.forEach((node) => {
			node.textContent = value
		})
	}
}
