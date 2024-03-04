// Object.create
function create(obj) {
  let F = function () { }
  F.prototype = obj
  return new F()
}

// instanceof
function Instanceof(obj, fn) {
  let proto = Object.getPrototypeOf(obj)
  if (proto) {
    if (proto === fn.prototype) {
      return true
    } else {
      return Instanceof(proto, fn)
    }
  } else {
    return false
  }
}

// new
function New(fn, ...args) {
  let instance = Object.create(fn.prototype)

  const res = fn.apply(instance, args)

  return typeof res === 'object' || typeof res === 'function' ? res : instance
}

// Promise
class Promise {
  constructor(excutor) {
    this.state = 'pending'
    this.value = undefined
    this.reason = undefined
    this.resolveCallback = []
    this.rejectCallback = []
    let resolve = (value) => {
      if (this.state === 'pending') {
        this.state = 'fulfiled'
        this.value = value
        this.resolveCallback.forEach(fn => fn())
      }
    }
    let reject = (reason) => {
      if (this.state === 'pending') {
        this.state = 'rejected'
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
    return new Promise((resolve, reject) => {
      this.resolveCallback.push(() => {
        const res = OnResolved(this.value)
        if (res instanceof Promise) {
          res.then(resolve, reject)
        } else {
          resolve(res)
        }
      })
      this.rejectCallback.push(() => {
        const res = OnRejected(this.reason)
        if (res instanceof Promise) {
          res.then(resolve, reject)
        } else {
          reject(res)
        }
      })
    })
  }

  catch(OnRejected) {
    return new Promise((resolve, reject) => {
      this.rejectCallback.push(() => {
        const res = OnRejected(this.reason)
        if (res instanceof Promise) {
          res.then(resolve, reject)
        } else {
          reject(res)
        }
      })
    })
  }


  static all(promies) {
    const result = []
    let index = 0
    return new Promise((resolve, reject) => {
      for (let i = 0; i < promies.length; i++) {
        Promise.resolve(promies[i])
          .then(res => {
            result[i] = res
            index++
            if (index === promies.length) {
              resolve(result)
            }
          })
          .catch(err => {
            reject(err)
          })
      }
    })
  }

  static race(promies) {
    return new Promise((resolve, reject) => {
      for (let i = 0; i < promies.length; i++) {
        Promise.resolve(promies[i])
          .then(res => {
            resolve(res)
          })
          .catch(err => {
            reject(err)
          })
      }
    })
  }
}

// debounce
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

// throttle
function throttle(fn, delay) {
  let curTime = Date.now()
  return function () {
    let nowTime = Date.now()
    if (nowTime - curTime >= delay) {
      curTime = Date.now()
      return fn.apply(this, arguments)
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

// 深拷贝
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
  //不直接创建空对象目的: 克隆的结果和之前保持相同的所属类
  let newObj = new obj.constructor;
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = deepClone(obj[key]);
    }
  }
  return newObj
}

// 数组扁平化
// 1、自定义
function flatten(array) {
  const arr = []
  array.forEach(item => {
    if (Array.isArray(item)) {
      arr = arr.concat(flatten(item))
    } else {
      arr.push(item)
    }
  })
  return arr
}

// 2、ES6 flat
function flatten(arr) {
  return arr.flat(Infinity);
}

// 3、扩展运算符
function flatten(arr) {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
}

// 4、split,toString
function flatten(arr) {
  return arr.toString().split(',');
}

//5、reduce
function flatten(arr) {
  return arr.reduce(function (prev, next) {
    return prev.concat(Array.isArray(next) ? flatten(next) : next)
  }, [])
}

// 对象扁平化
function objectFlat(obj = {}) {
  const res = {}
  function flat(item, preKey = '') {
    Object.entries(item).forEach(([key, val]) => {
      const newKey = preKey ? `${preKey}.${key}` : key
      if (val && typeof val === 'object') {
        flat(val, newKey)
      } else {
        res[newKey] = val
      }
    })
  }
  flat(obj)
  return res
}

// 数组去重
// 1、ES6 set
Array.from(new Set(array))

// 2、自定义
function unique(array) {
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

// 3、reduce
let resNew = arr.reduce((pre, cur) => {
  if (!pre.includes(cur)) {
    return pre.concat(cur)
  } else {
    return pre
  }
}, [])


// 继承
// 1、原型链继承
function Sub() { }
function Super() { }

Sub.prototype = new Super()


// 2、盗用构造函数继承
function Super() { }

function Sub() {
  Super.call(this)
}

// 3、组合式继承
function Super() { }
function Sub() {
  Super.call(this)
}
Sub.prototype = new Super()

// 4、原型式继承
function inheritObject(obj) {
  function F() { }
  F.prototype = obj
  return new F()
}

// 5、寄生式继承
function createObject(obj) {
  let o = inheritObject(obj)
  return o
}

// 6、寄生组合式继承
function inheritPrototype(Sub, Super) {
  let p = inheritObject(Super.prototype)
  p.constructor = Sub
  Sub.prototype = p
}


