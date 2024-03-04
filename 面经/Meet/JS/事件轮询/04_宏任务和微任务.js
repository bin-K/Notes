async function async1() {
  console.log('async1 start');
  await async2();
  console.log('async1 end');
}
async function async2() {
  console.log('async2');
}
console.log('script start');
setTimeout(function () {
  console.log('setTimeout');
}, 0)
async1();
new Promise(function (resolve) {
  console.log('promise1'); resolve();
}).then(function () {
  console.log('promise2');
});
console.log('script end');

//输出的顺序是：script start 、async1 start、 async2、 promise1、 script end 、async1 end、promise2、setTimeout
/**
 * 首先同步任务先执行：script start 、遇到定时器，放到宏任务队列中，async1 start，遇到await，放入微任务队列中，执行async2，等待返回值async2
 * 后面的代码将在同步任务执行完之后再执行，继续执行promise，第一个函数仍然是同步代码，执行promise1，后面的函数放入微任务队列
 * 执行script end 同步任务执行完，执行异步微任务 async1 end、 promise2，这两者的顺序没有定论，看浏览器，最后执行宏任务setTimeout
 */