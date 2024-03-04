class Combine {
  constructor() {
    this.list = [];
  }
  add(fn) {
    this.list.push(fn);
    return this; // 链式调用
  }
  excute() {
    for (let i = 0; i < this.list.length; i++) {
      this.list[i].excute();
    }
  }
}
let comb1 = new Combine();
comb1
  .add({
    excute() {
      console.log(1);
    }
  })
  .add({
    excute() {
      console.log(2);
    }
  });

let comb2 = new Combine();
comb2
  .add({
    excute() {
      console.log(3);
    }
  })
  .add({
    excute() {
      console.log(4);
    }
  });

let comb3 = new Combine();
comb3
  .add({
    excute() {
      console.log(5);
    }
  })
  .add({
    excute() {
      console.log(6);
    }
  });
comb2.add(comb3);

let comb4 = new Combine();
comb4.add(comb1).add(comb2);
comb4.excute();

// 最终打印结果：1 2 3 4 5 6