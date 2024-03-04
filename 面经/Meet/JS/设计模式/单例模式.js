// 懒汉式
class SingleLH {
  constructor(name) {
    this.name = name;
  }
  static getInstance(name) {
    // 静态方法
    if (!this.instance) {
      // 关键代码 this指向的是Single这个构造函数
      this.instance = new SingleLH(name);
    }
    return this.instance;
  }
}

let single1 = SingleLH.getInstance("name1");
let single2 = SingleLH.getInstance("name2");
console.log(single1 === single2);  // true


// 饿汉式
class SingleEH {
  constructor() { }
  static instance = new SingleEH()
  static getInstance() {
    return SingleEH.instance;
  }
}

let single3 = SingleEH.getInstance();
let single4 = SingleEH.getInstance();
console.log(single3 === single4);  // true
