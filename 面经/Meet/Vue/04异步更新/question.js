/* 
  Vue数据更新频繁，但dom只会更新一次，为什么？
  1、Vue更新dom是异步更新，当Vue的数据更新后，不会立即更新dom
  2、侦听到数据变化，Vue会开启一个队列， 并缓存在同一事件循环中发生的所有数据变更
  3、同一个watcher被多次出发，只会被推入队列中一次，避免重复修改相同的dom
  4、同步任务执行完，执行异步watcher队列任务，一次性更新dom
*/

;(() => {
	let queue = [] //定义watcher队列
	let has = {} // 使用对象保存id，进行去重操作
	let pending = false // 如果异步队列正在执行，将不会再执行

	// 定义Wacther类
	class Watcher {
		update() {
			// 放到队列中异步更新
			queueWatcher(this)
		}
		// 触发更新
		run() {
			this.get()
		}
	}

	// 队列中添加watcher
	function queueWatcher(watcher) {
		const id = watcher.id
		// 判断watcher是否存在 去掉重复的watcher
		if (!has[id]) {
			queue.push(watcher)
			has[id] = true
			if (!pending) {
				pending = true
				// 异步更新watcher
				nextTick(flushSchedulerQueue)
			}
		}
	}

	function flushSchedulerQueue() {
		queue.forEach((watcher) => {
			watcher.run()
			if (watcher.options.render) {
				// 在更新之后执行对应的回调，执行钩子函数（update）
				watcher.cb()
			}
		})
		queue = []
		has = {}
		pending = false
	}
})()
