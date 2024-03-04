class Observer {
  constructor(fn) {
    if (typeof fn === 'function') {
      this.fn = fn
    } else {
      throw new Error('请传入函数')
    }
  }

  update() {
    this.fn()
  }

}

class Subject {
  constructor() {
    this.observerList = []
  }
  addObserver(observer) {
    this.observerList.push(observer)
  }

  notify() {
    this.observerList.forEach(observer => {
      observer.update()
    })
  }
}