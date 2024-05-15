//#region 原型和原型链

function Foo() { }

const foo = new Foo()

// 实例化对象的原型等于构造函数的原型对象
console.log(foo.__proto__ === Foo.prototype) // true
// 构造函数的原型对象的原型等于Object构造函数的原型对象
console.log(Foo.prototype.__proto__ === Object.prototype) //true
// Object构造函数的原型对象的原型为null
console.log(Object.prototype.__proto__ === null) // true
// 实例对象的构造函数为构造函数本身
console.log(foo.constructor === Foo) // true
// 函数原型对象的构造函数等于函数本身
console.log(Foo.prototype.constructor === Foo) // true
// 函数原型对象的构造函数等于函数本身
console.log(Object.prototype.constructor === Object) // true
// 构造函数的原型等于Function构造函数的原型对象
console.log(Foo.__proto__ === Function.prototype) //true
console.log(Object.__proto__ === Function.prototype) // true
// Function构造函数的原型对象的原型等于 Object构造函数的原型对象
console.log(Function.prototype.__proto__ === Object.prototype) // true  
// 函数原型对象的构造函数等于函数本身
console.log(Function.prototype.constructor === Function) // true
// 实例对象的构造函数为构造函数本身
console.log(Foo.constructor === Function) // true
console.log(Object.constructor === Function) // true
console.log(Function.constructor === Function) // true
// 构造函数的原型等于Function构造函数的原型对象
console.log(Function.__proto__ === Function.prototype) // true
// Object构造函数的原型等于Function构造函数的原型对象
console.log(Object.__proto__ === Function.prototype) // true

//#endregion

//#region 手写instanceof
function Instanceof(context, fn) {
  const proto = context.__proto__
  if(proto) {
    if(proto === fn.prototype) {
      return true
    } else {
      return Instanceof(proto, fn)
    }
  } else {
    return false
  }
}
 console.log(instanceOf({}, Array))
//#endregion

