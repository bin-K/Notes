/**
 * *宏任务
      分类:setTimeout setInterval requestAnimationFrame
      1.宏任务所处的队列就是宏任务队列
      2.第一个宏任务队列中只有一个任务:执行主线程的js代码
      3．宏任务队列可以有多个
      4．当宏任务队列的中的任务压部执行完以后会查看是否有微任务队列如果有先执行微任务队列中的所有任务，
          最后再执行宏任务队列中的函数

*
*   微任务
        分类:new Promise( ).then(回调) process.nextTick
        1．微任务所处的队列就是微任务队列
        2．只有一个微任务队列
        3．在上一个宏任务队列执行完毕后如果有微任务队列就会执行微任务队列中的所有任务

 */
/**
 * 输出的结果是:
 * -------start------
 * 0
 * 1
 * 2
 * 3
 * 4
 * ----end----
 * Promise()
 * setTimeout()
 */
console.log('-------start------');

setTimeout(() => {
  console.log('setTimeout()');
}, 0)

new Promise((resolve, reject) => {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  resolve()
}).then(() => {
  console.log('Promise()');
})

console.log('----end----');


Promise.resolve()
  .then(function () {
    console.log("promise0");
  })
  .then(function () {
    console.log("promise5");
  });
setTimeout(() => {
  console.log("timer1");
  Promise.resolve().then(function () {
    console.log("promise2");
  });
  Promise.resolve().then(function () {
    console.log("promise4");
  });
}, 0);
setTimeout(() => {
  console.log("timer2");
  Promise.resolve().then(function () {
    console.log("promise3");
  });
}, 0);
Promise.resolve().then(function () {
  console.log("promise1");
});
console.log("start");

// 打印结果： start promise0 promise1 promise5 timer1 promise2 promise4 timer2 promise3


// async await
console.log("script start");
async function async1() {
  await async2(); // await 隐式返回promise
  console.log("async1 end"); // 这里的执行时机：在执行微任务时执行
}
async function async2() {
  console.log("async2 end"); // 这里是同步代码
}
async1();
setTimeout(function () {
  console.log("setTimeout");
}, 0);
new Promise(resolve => {
  console.log("Promise"); // 这里是同步代码
  resolve();
})
  .then(function () {
    console.log("promise1");
  })
  .then(function () {
    console.log("promise2");
  });
console.log("script end");

// 打印结果:  script start => async2 end => Promise => script end => async1 end => promise1 => promise2 => setTimeout


setTimeout(() => {
  console.log(1);
})

const p1 = Promise.resolve(() => {
  console.log(2);
})

const p2 = new Promise((resolve, reject) => {
  console.log(3);
  resolve();
})

Promise.race([p1, p2]).then(() => {
  console.log(4);
})

Promise.all([p1, p2]).then(() => {
  console.log(5);
})

console.log(6);

//  3 6 4 5 1