//#region 原型和原型链

function Foo() { }

const foo = new Foo()

/* console.log(foo.constructor === Foo)
console.log(foo.__proto__ === Foo.prototype)
console.log(Foo.prototype.constructor === Foo)
console.log(Foo.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.constructor === Object)
console.log(Object.prototype.__proto__ === null)
console.log(Foo.constructor === Function)
console.log(Foo.__proto__ === Function.prototype)
console.log(Object.__proto__ === Function.prototype)
console.log(Object.constructor === Function)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Function.prototype.constructor === Function)
console.log(Function.constructor === Function)
console.log(Function.__proto__ === Function.prototype) */

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
 console.log(Instanceof([], Array))
//#endregion

//#region 原型链继承 
// 缺点：引用类型的属性会被所有的实例共享
function SuperClass() {
  this.name = 'Super',
  this.info = {
    child: 'Sub'
  }
}
function SubClass () {}
// 子类构造函数的原型对象指向父类的实例对象
SubClass.prototype = new SuperClass()
const instance = new SubClass()
const instanceOther = new SubClass()

console.log(instance.name, 'instance.name before') // Super
instance.name = 'instance'
console.log(instance.name, 'instance.name after') // instance
console.log(instanceOther.name) // Super

console.log(instance.info.child, 'instance.info.child before') // Sub
instance.info.child = 'child'
console.log(instance.info.child, 'instance.info.child after') // child
console.log(instanceOther.info.child) // child 父类引用对象被所有实例对象共用
//#endregion

//#region 构造函数继承
function SuperClass() {
  this.name = 'Super',
  this.info = {
    child: 'Sub'
  }
}
SuperClass.prototype.supername = 'supername'
// 每次实例化，都会给父类中的对象都会被初始化，
// 就不存在属性被实例共享的情况，但此时子类是无法访问父类的原型对象的
function SubClass() {
  SuperClass.call(this)
}
const instance1 = new SubClass()
const instance2 = new SubClass()

// 子类只能访问到父类的数据，无法访问到父类的原型对象
console.log(instance1.info.child, 'instance1.info.child before') // Sub
instance1.info.child = 'child'
console.log(instance1.info.child, 'instance1.info.child after') // child
console.log(instance2.info.child) // Sub 每次实例化，都会给父类中的对象都会被初始化

console.log(instance1.supername, 'instance1.supername') // undefined
//#endregion

//#region 组合式继承
// 结合原型链继承和盗用构造函数继承的优点
// 缺点：父类构造函数会执行两遍
function SuperClass() {
  this.name = 'Super',
  this.info = {
    child: 'Sub'
  }
  console.log('父类执行了')
}
SuperClass.prototype.supername = 'supername'
function SubClass() {
  SuperClass.call(this)
}
SubClass.prototype = new SuperClass()

// 父类构造函数会执行两遍
const instance3 = new SubClass()
const instance4 = new SubClass()

console.log(instance3.info.child, 'instance3.info.child before') // Sub
instance3.info.child = 'child'
console.log(instance3.info.child, 'instance3.info.child after') // child
console.log(instance4.info.child) // Sub

console.log(instance3.supername, 'instance3.supername') // supername
//#endregion

//#region 原型式继承 亦是Object.create的实现
// 原型链继承的封装，未解决引用类型的属性会被所有的实例共享
function inheritObject(o) {
  function F() { }
  F.prototype = o
  return new F()
}
//#endregion

//#region 寄生式继承
function createObject(obj) {
  //通过原型方式创建新的对象
  let o = inheritObject(obj)
  // 在这可以添加自定义的属性和方法
  // 子类属性
  o.childName = 'childName'
  return o
}

const instance5 = createObject(new SuperClass())
const instance6 = createObject(new SuperClass())

console.log(instance5.info.child, 'instance5.info.child before') // Sub
instance5.info.child = 'child'
console.log(instance5.info.child, 'instance5.info.child after') // child
console.log(instance6.info.child) // Sub

console.log(instance5.supername, 'instance5.supername') // supername
console.log(instance5.childName, 'instance5 childName') // childName
//#endregion

//#region 寄生组合式继承
function inheritProtype(SubClass, SuperClass) {
  let p = inheritObject(SuperClass.prototype)
  p.constructor = SubClass
  SubClass.prototype = p
}

inheritProtype(SubClass, SuperClass)
const instance7 = new SubClass()
const instance8 = new SubClass()

console.log(instance7.info.child, 'instance7.info.child before') // Sub
instance7.info.child = 'child'
console.log(instance7.info.child, 'instance7.info.child after') // child
console.log(instance8.info.child) // Sub

console.log(instance7.supername, 'instance6.supername') // supername
//#endregion