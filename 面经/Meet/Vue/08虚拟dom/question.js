//#region 什么是虚拟Dom
/* 
  使用JS对象模拟真实DOM节点，但是对比真实DOM更加轻量级
  1、前端性能的优化，尽量减少真实DOM的操作，频繁的操作DOM会导致浏览器的回流会重绘
  2、使用虚拟DOM，当数据变化，页面需要更新的时候，通过diff算法，对新旧的虚拟dom节点进行对比，比较两棵树的差异生成差异对象，一次性对DOM进行批量操作
  3、虚拟DOM本质上是JS对象，使用虚拟DOM可以进行更方便的跨平台操作
*/
//#endregion

//#region 虚拟dom 互相转 真实Dom
;(() => {
	// 真实 转 虚拟
	function dom2Json(dom) {
		if (!dom.tagName) return
		let obj = {}
		obj.tag = dom.tagName
		obj.props = {}
		Array.from(dom.attributes).forEach((attr) => {
			obj.props[attr.name] = attr.value
		})
		obj.children = []
		dom.childNodes.forEach((item) => {
			// 去除空的节点
			dom2Json(item) && obj.children.push(dom2Json(item))
		})
		return obj
	}

	class Element {
		constructor(type, props, children) {
			this.type = type
			this.props = props
			this.children = children
		}
	}

	// 虚拟 转 真实
	function render(domObj) {
		let el = document.querySelector(domObj.type)
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
		domObj.childeren.forEach((child) => {
			child =
				child instanceof Element
					? render(child)
					: document.createTextNode(child)
		})
		return el
	}
})()

//#endregion
