class MyPromise {
  constructor(excutor) {
    this.state = 'Pending'
    this.value = undefined
    this.reason = undefined
    this.resolveCallback = []
    this.rejectCallback = []

    let resolve = (value) => {
      if (this.state === 'Pending') {
        this.state = 'Fulfill'
        this.value = value
        this.resolveCallback.forEach(fn => fn())
      }
    }

    let reject = (reason) => {
      if (this.state === 'Pending') {
        this.state = 'Reject'
        this.reason = reason
        this.rejectCallback.forEach(fn => fn())
      }
    }

    try {
      excutor(resolve, reject)
    } catch (err) {
      reject(err)
    }
  }

  then(OnResolved, OnRejected) {
    return new MyPromise((resolve, reject) => {
      this.resolveCallback.push(() => {
        const res = OnResolved(this.value)
        if (res instanceof MyPromise) {
          res.then(resolve, reject)
        } else {
          resolve(res)
        }
      })

      this.rejectCallback.push(() => {
        const res = OnRejected(this.reason)
        if (res instanceof MyPromise) {
          res.then(resolve, reject)
        } else {
          reject(res)
        }
      })
    })
  }

  catch(OnRejected) {
    return new MyPromise((resolve, reject) => {
      this.rejectCallback.push(() => {
        const res = OnRejected(this.reason)
        if (res instanceof MyPromise) {
          res.then(resolve, reject)
        } else {
          reject(res)
        }
      })
    })
  }

  static all(promises) {
    const result = []
    let index = 0
    for (let i = 0; i < promises.length; i++) {
      return new MyPromise((resolve, reject) => {
        MyPromise.resolve(promises[i])
          .then(res => {
            result.push(res)
            index++
            if (index === promises.length) {
              resolve(result)
            }
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  }

  static race(promises) {
    for (let i = 0; i < promises.length; i++) {
      return new MyPromise((resolve, reject) => {
        MyPromise.resolve(promises[i])
          .then(res => {
            resolve(res)
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  }
}

function create(obj) {
  function F() { }
  F.prototype = obj
  return new F()
}

function MyInstance(obj, fn) {
  let proto = Object.getPrototypeOf(obj)

  if (proto) {
    if (fn.prototype === proto) {
      return true
    } else {
      MyInstance(proto, fn)
    }
  } else {
    return false
  }
}

function MyNew(fn, ...args) {
  const instance = Object.create(fn.prototype)

  const res = fn.apply(instance, ...args)

  return typeof res === 'function' || typeof res === 'object' ? res : instance
}

// 原型链继承
function Super() { }
function Sub() { }

Sub.prototype = new Super()

// 盗用构造函数继承
function Super() { }
function Sub() {
  Super.call(this)
}

// 组合式继承
function Super() { }
function Sub() {
  Super.call(this)
}

Sub.prototype = new Super()

// 原型式继承
function inheritObject(obj) {
  function F() { }
  F.prototype = obj
  return new F()
}

// 寄生式继承
function inheritObject(obj) {
  function F() { }
  F.prototype = obj
  return new F()
}

function createObject(obj) {
  let o = inheritObject(obj)
  return o
}

// 寄生组合式继承
function inheritObject(obj) {
  function F() { }
  F.prototype = obj
  return new F()
}

function inheritPrototype(Super, Sub) {
  let p = inheritObject(Super.prototype)
  Sub.prototype = p
  p.constructor = Sub
}

function deepClone(obj) {

  if (obj === null) return obj
  if (typeof obj !== 'object') return obj
  if (obj instanceof Function) return obj
  if (obj instanceof RegExp) {
    return new RegExp(obj)
  }
  if (obj instanceof Date) {
    return new Date(obj)
  }

  let newObj = new obj.constructor

  for (let key in obj) {
    if (obj.hasOwnPrototype(key)) {
      newObj[key] = deepClone(obj[key])
    }
  }

  return newObj
}


// 防抖，事件触发n秒后执行，在n秒内触发则重新计时
function debounce(fn, wait) {
  let timer = null

  return function () {
    const _this = this
    const args = arguments

    if (timer) {
      clearTimeout(timer)
    }

    timer = setTimeout(() => {
      fn.apply(_this, args)
    }, wait)
  }
}

// 节流，在一个单位时间内，只触发一次函数
function throttle(fn, delay) {
  let curTime = Date.now()
  return function () {
    let nowTime = Date.now()
    if (nowTime - curTime >= delay) {
      curTime = Date.now()
      fn.apply(this, arguments)
    }
  }
}

// call, apply
Function.prototype.Apply = function (context, ...args) {
  if (!context || context === null) {
    context = window
  }

  let fn = Symbol()

  context[fn] = this

  const res = context[fn](...args)

  delete context[fn]

  return res
}

// bind
Function.prototype.Bind = function (context, ...args) {
  if (!context || context === null) {
    context = window
  }

  let f = Symbol()
  context[f] = this
  return function (...args1) {
    const res = context[f](...args, ...args1)
    return res
  }
}

// 扁平化
// 对象扁平化
function objectFlat(obj = {}) {
  const res = {}

  function flat(item, preKey = '') {
    Object.entries(item).forEach(([key, val]) => {
      const newKey = preKey ? `${preKey}.${key}` : key
      if (val && typeof val === 'object') {
        flat(val, newKey)
      } else {
        res[key] = val
      }
    })
  }

  flat(obj)

  return res
}

// 数组扁平化
function arrayFlat(arr) {
  const res = []
  arr.forEach(item => {
    if (Array.isArray(item)) {
      res = res.concat(arrayFlat(item))
    } else {
      res.push(item)
    }
  })

  return res
}

// ES6扁平化
function es6Flat(arr) {
  return arr.flat(Infinity)
}

//split,toString
function toStringFlat(arr) {
  return arr.toString().split(',');
}

// 数组去重
function unique(arr) {
  let map = {};
  let res = [];
  for (let i = 0; i < array.length; i++) {
    if (!map.hasOwnProperty([array[i]])) {
      map[array[i]] = 1;
      res.push(array[i]);
    }
  }
  return res;
}

// ES6 set
Array.from(new Set(array))

// 原型。原型链
function Foo() { }

const foo = new Foo()

// 函数原型对象的构造函数等于函数本身
console.log(Foo.prototype.constructor === Foo) // true

// 实例化对象的原型等于构造函数的原型对象
console.log(foo.__proto__ === Foo.prototype) // true

// 构造函数的原型对象的原型等于Object构造函数的原型对象
console.log(Foo.prototype.__proto__ === Object.prototype) //true

// Function构造函数的原型对象的原型等于 Object构造函数的原型对象
console.log(Function.prototype.__proto__ === Object.prototype) // true

// 构造函数的原型等于Function构造函数的原型对象
console.log(Foo.__proto__ === Function.prototype) //true

// Object构造函数的原型等于Function构造函数的原型对象
console.log(Object.__proto__ === Function.prototype) // true

// Object构造函数的原型对象的原型为null
console.log(Object.prototype.__proto__ === null) // true
