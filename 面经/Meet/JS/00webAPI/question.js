//#region 获取元素
;() => {
	document.getElementById()
	document.getElementsByTagName()
	// H5
	document.getElementsByClassName()
	document.querySelector()
	document.querySelectorAll()

	// 获取html
	document.documentElement
	// 获取body
	document.body
}
//#endregion

//#region 事件
;() => {
	// 鼠标事件
	window.onclick = () => {}
	window.onblur = () => {}
	window.onfocus = () => {}
	window.onmousedown = () => {}
	window.onmousemove = () => {}
	window.onmouseup = () => {}
	window.onmouseover = () => {}
	window.onmouseout = () => {}
	// 不支持冒泡，与mouseover一样
	window.onmouseenter = () => {}
	window.onmouseleave = () => {}
	// 键盘事件
	window.onkeypress = () => {}
	window.onkeydown = () => {}
	window.onkeyup = () => {}
}

//#endregion

//#region 操作元素
;() => {
	document.documentElement.innerHTML = ''
	document.documentElement.innerText = ''
	document.documentElement.style
	document.documentElement.className
	document.documentElement.getAttribute()
	document.documentElement.setAttribute()
	document.documentElement.removeAttribute()
}
//#endregion

//#region 节点
;() => {
	// 父节点
	document.body.parentNode
	// 子节点（包含空格）
	document.body.childNodes
	// 子元素
	document.body.children
	// 第一个，最后一个节点（包含元素节点和文本节点）
	document.body.firstChild
	document.body.lastChild
	// 第一个，最后一个节点（包含元素节点,不包含文本节点）
	document.body.firstElementChild
	document.body.lastElementChild
	// 下一个，上一个节点（包含元素节点和文本节点）
	document.body.nextSibling
	document.body.previousSibling
	// 下一个，上一个节点（包含元素节点,不包含文本节点）
	document.body.nextElementSibling
	document.body.previousElementSibling

	// 节点增删改
	document.createElement()
	document.body.appendChild()
	document.body.insertBefore()
	document.body.removeChild()
	document.body.cloneNode()
}
//#endregion

//#region 元素属性
;() => {
	// 偏移量 offset 距离带有定位父元素的位置
	document.body.offsetLeft
	document.body.offsetTop
	document.body.offsetHeight // 包含边框
	document.body.offsetWidth // 包含边框

	// 自身元素大小 client
	document.body.clientHeight // 不包含边框
	document.body.clientWidth // 不包含边框
	document.body.clientLeft // 边框大小
	document.body.clientTop // 边框大小

	// 滚动元素 scroll
	document.body.scrollHeight
	document.body.scrollWidth
	document.body.scrollLeft // 左边滚动距离
	document.body.scrollTop // 上遍滚动距离

	const { x, y, left, top, bottom, right } =
		document.body.getBoundingClientRect()

	// 事件源的位置
	/* 
- clientX、clientY：
  相对于浏览器窗口可视区域的X，Y坐标（窗口坐标）、
  可视区域不包括工具栏和滚动条、IE事件和标准事件都定义了这2个属性。
- pageX、pageY：
  类似于event.clientX、event.clientY，但它们使用的是文档坐标而非窗口坐标。
  这2个属性不是标准属性，但得到了广泛支持。IE事件中没有这2个属性。
- offsetX、offsetY：
  相对于事件源元素（target或srcElement）的X,Y坐标，
  只有IE事件有这2个属性，标准事件没有对应的属性。
- screenX、screenY：
  相对于用户显示器屏幕左上角的X,Y坐标。标准事件和IE事件都定义了这2个属性
 */
}

//#endregion

//#region BOM 对象
;() => {
	// 所有元素加载完成
	window.onload = () => {}
	// 计时器
	setTimeout
	setInterval
	// location
	const {
		hash,
		host,
		href,
		pathname,
		port,
		protocol,
		search,
		assign,
		reload,
		replace,
	} = location

	// localstorage
	localStorage.setItem('localStorage', 1)
	localStorage.getItem('localStorage')
	localStorage.removeItem('localStorage')
	localStorage.clear()
	// sessionstorage
	sessionStorage.setItem('sessionStorage', 1)
	sessionStorage.getItem('sessionStorage')
	sessionStorage.removeItem('sessionStorage')
	sessionStorage.clear()
}

//#endregion
