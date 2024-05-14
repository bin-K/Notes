// 1
/*
var a = 10;
function foo () {
  console.log(this.a) // 10
}
foo();
*/

// 2

/*
"use strict";
var a = 10;
function foo () {
  console.log('this1', this) // undefined
  console.log(window.a) // 10
  console.log(this.a) // 报错，undefined上没a
}
console.log(window.foo) // f foo(){...}
console.log('this2', this) // windiow
foo();
*/

// 3

/* let a = 10
const b = 20

function foo () {
  console.log(this.a) // undefined
  console.log(this.b) // undefined
}
foo();
console.log(window.a) // undefined */

// 4

/* var a = 1
function foo () {
  var a = 2
  console.log(this) // window
  console.log(this.a) // 1
}

foo() */

// 5 

/* var a = 1
function foo () {
  var a = 2
  function inner () { 
    console.log(this.a) // 1
  }
  inner()
}

foo() */

// 6
/* function foo () {
  console.log(this.a) // 1
}
var obj = { a: 1, foo }
var a = 2
obj.foo() */

// 7

/* function foo () {
  console.log(this.a)
};
var obj = { a: 1, foo };
var a = 2;
var foo2 = obj.foo;

obj.foo(); // 1
foo2(); // 2
 */

// 8

/* function foo () {
  console.log(this.a)
};
var obj = { a: 1, foo };
var a = 2;
var foo2 = obj.foo;
var obj2 = { a: 3, foo2: obj.foo }

obj.foo(); // 1
foo2(); // 2
obj2.foo2(); // 3 */

// 9
/* 
function foo () {
  console.log(this.a)
}
function doFoo (fn) {
  console.log(this)
  fn()
}
var obj = { a: 1, foo }
var a = 2
doFoo(obj.foo) // window 2 */

// 10

/* function foo () {
  console.log(this.a) // 2
}
function doFoo (fn) {
  console.log(this) // obj2
  fn()
}
var obj = { a: 1, foo }
var a = 2
var obj2 = { a: 3, doFoo }

obj2.doFoo(obj.foo) */

// 11
/* "use strict"
function foo () {
  console.log(this.a) // undefined 没有 a
}
function doFoo (fn) {
  console.log(this) // obj2
  fn()
}
var obj = { a: 1, foo }
var a = 2
var obj2 = { a: 3, doFoo }

obj2.doFoo(obj.foo) */


// 12

/* function foo () {
  console.log(this.a)
}
var obj = { a: 1 }
var a = 2

foo() // 2
foo.call(obj) // 1
foo.apply(obj) // 1
foo.bind(obj)
 */

// 13 

/* var obj1 = {
  a: 1
}
var obj2 = {
  a: 2,
  foo1: function () {
    console.log(this.a)
  },
  foo2: function () {
    setTimeout(function () {
      console.log(this)
      console.log(this.a)
    }, 0)
  }
}
var a = 3

obj2.foo1() // 2
obj2.foo2() // window 3 */

// 14

// var obj1 = {
//   a: 1
// }
// var obj2 = {
//   a: 2,
//   foo1: function () {
//     console.log(this.a)
//   },
//   foo2: function () {
//     setTimeout(function () {
//       console.log(this)
//       console.log(this.a)
//     }.call(obj1), 0)
//   }
// }
// var a = 3
// obj2.foo1() // 2
// obj2.foo2() // obj1 1

// 15

/* var obj1 = {
  a: 1
}
var obj2 = {
  a: 2,
  foo1: function () {
    console.log(this.a)
  },
  foo2: function () {
    function inner () {
      console.log(this)
      console.log(this.a)
    }
    inner()
  }
}
var a = 3
obj2.foo1() // 2
obj2.foo2() // window 3 */

// 16
/* 
function foo () {
  console.log(this.a)
}
var obj = { a: 1 }
var a = 2

foo() // 2
foo.call(obj) // 1
foo().call(obj) // 2,  Cannot read property 'call' of undefined */

// 17

/* function foo () {
  console.log(this.a)
  return function () {
    console.log(this.a)
  }
}
var obj = { a: 1 }
var a = 2

foo() // 2
foo.call(obj) // 1
foo().call(obj) // 2 1 */

// 18
/* 
function foo () {
  console.log(this.a)
  return function () {
    console.log(this.a)
  }
}
var obj = { a: 1 }
var a = 2

foo() // 2
foo.bind(obj)
foo().bind(obj) // 2
 */

// 19

// function foo () {
//   console.log(this.a)
//   return function () {
//     console.log(this.a)
//   }
// }
// var obj = { a: 1 }
// var a = 2

// foo.call(obj)() // 1 2

// 20
/* var obj = {
  a: 'obj',
  foo: function () {
    console.log('foo:', this.a)
    return function () {
      console.log('inner:', this.a)
    }
  }
}
var a = 'window'
var obj2 = { a: 'obj2' }

obj.foo()() // 'foo:obj' 'inner:window'
obj.foo.call(obj2)() // 'foo:obj2' 'inner:window'
obj.foo().call(obj2) // foo:'obj' 'inner:obj2' */

// 21

/* var obj = {
  a: 1,
  foo: function (b) {
    b = b || this.a
    return function (c) {
      console.log(this.a + b + c)
    }
  }
}
var a = 2
var obj2 = { a: 3 }

obj.foo(a).call(obj2, 1) // 6
obj.foo.call(obj2)(1) // 6 */

// 22

/* function foo1 () {
  console.log(this.a)
}
var a = 1
var obj = {
  a: 2
}

var foo2 = function () {
  foo1.call(obj)
}

foo2() // 2
foo2.call(window) // 2 */

// 23

/* function foo1 (b) {
  console.log(`${this.a} + ${b}`)
  return this.a + b
}
var a = 1
var obj = {
  a: 2
}

var foo2 = function () {
  return foo1.call(obj, ...arguments)
}

var num = foo2(3) // 2 + 3
console.log(num) // 5 */

// 24

/* function foo (item) {
  console.log(item, this.a)
}
var obj = {
  a: 'obj'
}
var a = 'window'
var arr = [1, 2, 3]

// arr.forEach(foo, obj)
// arr.map(foo, obj)
arr.filter(function (i) {
  console.log(i, this.a) // 1 "obj" 2 "obj" 3 "obj"
  return i > 2
}, obj) */

// 25

/* function Person (name) {
  this.name = name
}
var name = 'window'
var person1 = new Person('LinDaiDai')
console.log(person1.name) // 'LinDaiDai' */

// 26

/* function Person (name) {
  this.name = name
  this.foo1 = function () {
    console.log(this.name)
  }
  this.foo2 = function () {
    return function () {
      console.log(this.name)
    }
  }
}
var person1 = new Person('person1')
person1.foo1() // person1
person1.foo2()() // undefined */

// 27
/* 
var name = 'window'
function Person (name) {
  this.name = name
  this.foo = function () {
    console.log(this.name)
    return function () {
      console.log(this.name)
    }
  }
}
var person2 = {
  name: 'person2',
  foo: function() {
    console.log(this.name)
    return function () {
      console.log(this.name)
    }
  }
}
  
var person1 = new Person('person1')
person1.foo()() // 'person1' window
person2.foo()() // 'person2' window */

// 28

/* var name = 'window'
function Person (name) {
  this.name = name
  this.foo = function () {
    console.log(this.name)
    return function () {
      console.log(this.name)
    }
  }
}
var person1 = new Person('person1')
var person2 = new Person('person2')

person1.foo.call(person2)() // 'person2' window
person1.foo().call(person2) // 'person1' 'person2' */

// 29

/* var obj = {
  name: 'obj',
  foo1: () => {
    console.log(this.name)
  },
  foo2: function () {
    console.log(this.name)
    return () => {
      console.log(this.name)
    }
  }
}
var name = 'window'
obj.foo1() // window
obj.foo2()() // obj obj */

// 30
/* var name = 'window'
var obj1 = {
	name: 'obj1',
	foo: function () {
		console.log(this.name)
	}
}

var obj2 = {
	name: 'obj2',
	foo: () => {
		console.log(this.name)
	}
}

obj1.foo() // obj1
obj2.foo() // window */

// 31
var name = 'window'
var obj1 = {
  name: 'obj1',
  foo: function () {
    console.log(this.name)
    return function () {
      console.log(this.name)
    }
  }
}
var obj2 = {
  name: 'obj2',
  foo: function () {
    console.log(this.name)
    return () => {
      console.log(this.name)
    }
  }
}
var obj3 = {
  name: 'obj3',
  foo: () => {
    console.log(this.name)
    return function () {
      console.log(this.name)
    }
  }
}
var obj4 = {
  name: 'obj4',
  foo: () => {
    console.log(this.name)
    return () => {
      console.log(this.name)
    }
  }
}

obj1.foo()() // obj1 window
obj2.foo()() // obj2 obj2
obj3.foo()() // obj
obj4.foo()()
















