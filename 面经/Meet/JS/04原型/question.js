//#region 原型和原型链
;(() => {
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
})()

//#endregion

//#region 手写instanceof
;(() => {
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
})
//#endregion

//#region 原型链继承 
// 缺点：引用类型的属性会被所有的实例共享
;(() => {
  function SuperClass() {
    this.name = 'Super',
    this.info = {
      child: 'Sub'
    }
  }
  function SubClass () {}

  SubClass.prototype = new SuperClass()

  const sub1 = new SubClass()
  const sub2 = new SubClass()

  sub1.name = 'sub1'
  console.log(sub1.name, sub2.name, '原型链继承 普通类型属性') // sub1, Super

  sub1.info.child = 'sub1'
  console.log(sub1.info.child, sub2.info.child, '原型链继承 引用类型属性') // sub1， sub1
})()
//#endregion

//#region 构造函数继承
;(() => {
 function SuperClass() {
    this.name = 'Super',
    this.info = {
      child: 'Sub'
    }
  }
  function SubClass () {
    SuperClass.call(this)
  }

  SuperClass.prototype.super = 'prototype'

  const sub1 = new SubClass()
  const sub2 = new SubClass()

  sub1.name = 'sub1'
  console.log(sub1.name, sub2.name, '盗用构造函数继承 普通类型属性') // sub1, Super

  sub1.info.child = 'sub1'
  console.log(sub1.info.child, sub2.info.child, '盗用构造函数继承 引用类型属性') // sub1， Sub

  console.log(sub1.super, '盗用构造函数继承 访问父类的原型') // undefined
})()
//#endregion

//#region 组合式继承
// 结合原型链继承和盗用构造函数继承的优点
// 缺点：父类构造函数会执行两遍
;(() => {
  function SuperClass() {
    this.name = 'Super',
    this.info = {
      child: 'Sub'
    }
    console.log('组合式继承 父类执行了')
  }
  function SubClass () {
    SuperClass.call(this)
  }
  SubClass.prototype = new SuperClass()
  SuperClass.prototype.super = 'prototype'

  
  const sub1 = new SubClass()
  const sub2 = new SubClass()

  sub1.name = 'sub1'
  console.log(sub1.name, sub2.name, '组合式继承 普通类型属性') // sub1, Super

  sub1.info.child = 'sub1'
  console.log(sub1.info.child, sub2.info.child, '组合式继承 引用类型属性') // sub1， Sub

  console.log(sub1.super, '组合式继承 访问父类的原型') // prototype
})()
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
;(() => {
  function SuperClass() {
    this.name = 'Super',
    this.info = {
      child: 'Sub'
    }
    console.log('寄生式继承 父类执行了')
  }
  SuperClass.prototype.super = 'prototype'
   const superClass = new SuperClass()

  function createObject(obj) {
    //通过原型方式创建新的对象
    let o = inheritObject(obj)
    // 在这可以添加自定义的属性和方法
    // 子类属性
    o.childName = 'childName'
    return o
  }

  const sub1 = createObject(superClass)
  const sub2 = createObject(superClass)

  console.log(sub1.info.child, '寄生式继承 sub1.info.child before') // Sub
  sub1.info.child = 'child'
  console.log(sub1.info.child, '寄生式继承 sub1.info.child after') // child
  console.log(sub2.info.child) // Sub

  console.log(sub1.super, '寄生式继承 sub1.super') // prototype
  console.log(sub1.childName, '寄生式继承 sub1 childName') // childName
})()
//#endregion

//#region 寄生组合式继承
;(() => {
  function SuperClass() {
    this.name = 'Super',
    this.info = {
      child: 'Sub'
    }
    console.log('寄生组合式继承 父类执行了')
  }
  function SubClass () {
    SuperClass.call(this)
  }
  SuperClass.prototype.super = 'prototype'

  function inheritProtype(SubClass, SuperClass) {
    let p = inheritObject(SuperClass.prototype)
    p.constructor = SubClass
    SubClass.prototype = p
  }

  inheritProtype(SubClass, SuperClass)
  const sub1 = new SubClass()
  const sub2 = new SubClass()

  console.log(sub1.info.child, '寄生组合式继承 sub1.info.child before') // Sub
  sub1.info.child = 'child'
  console.log(sub1.info.child, '寄生组合式继承 sub1.info.child after') // child
  console.log(sub2.info.child) // Sub

  console.log(sub1.super, '寄生组合式继承 sub1.super') // prototype
})()
//#endregion