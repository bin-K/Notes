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
