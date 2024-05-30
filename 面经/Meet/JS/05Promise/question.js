//#region  手写Promise
;(() => {

  class MyPromise {
    constructor(executor) {
      // 三种状态 pending fullfilled rejected
      this.state = 'pending'
      // resolve时的回调函数列表
      this.resolveTask = [];
      // reject时的回调函数列表
      this.rejectTask = []

      let reslove = value => {
        // 状态只允许修改一次 已经是fullfilled、和rejected状态不允许修改
        if(this.state !== 'pending') return
        this.state = 'fullfilled'
        this.data = value
        setTimeout(() => {
          this.resolveTask.forEach(cb => cb())
        })
      }

      let reject = error => {
        // 状态只允许修改一次 已经是fullfilled、和rejected状态不允许修改
        if(this.state !== 'pending') return
        this.state = 'rejected'
        this.error = error
        setTimeout(() => {
          this.rejectTask.forEach(cb => cb())
        })
      }

      try {
        executor(reslove, reject)
      } catch(error) {
        reject(error)
      }
    }

    then(resolveCallback, rejectCallback) {
      return new MyPromise((reslove, reject) => {
        this.resolveTask.push(() => {
          const res = resolveCallback(this.data)
          if(res instanceof MyPromise) {
            res.then(reslove, reject)
          } else {
            reslove(res)
          }
        })
        this.rejectTask.push(() => {
          const res = rejectCallback(this.error)
          if(res instanceof MyPromise) {
            res.then(reslove, reject)
          } else {
            reslove(res)
          }
        })
      })
    }

    catch(rejectCallback) {
      return new MyPromise((reslove, reject) => {
        this.rejectTask.push(() => {
          const res = rejectCallback(this.error)
          if(res instanceof MyPromise) {
            res.catch(reslove, reject)
          }else {
            reslove(res)
          }
        })
      })
    }

    static race(promises) {
      return new MyPromise((resolve, reject) => {
        for (let i = 0; i < promises.length; i++) {
            // Promise.resolve包一下，防止promises[i]不是Promise类型
            MyPromise.resolve(promises[i])
              .then(res => {
                resolve(res);
              })
              .catch(err => {
                reject(err);
              });
          }
      })
    }

    // all静态方法， 返回promises列表中全部执行完的结果
    static all(promises) {
      let result = [];
      let index = 0;
      return new MyPromise((resolve, reject) => {
        for (let i = 0; i < promises.length; i++) {
          MyPromise.resolve(promises[i])
            .then(res => {
              // 输出结果的顺序和promises的顺序一致
              result[i] = res;
              index++;
              if (index === promises.length) {
                resolve(result);
              }
            })
            .catch(err => {
              reject(err);
            });
        }
      });
    }
    static retry(fn, delay, times) {
      return new MyPromise((resolve, reject) => {
        function func() {
          MyPromise.resolve(fn()).then(res => {
            resolve(res);
          })
            .catch(err => {
              // 接口失败后，判断剩余次数不为0时，继续重发
              if (times !== 0) {
                setTimeout(func, delay);
                times--;
              } else {
                reject(err);
              }
            });
        }
        func();
      });
    }
  }

  // 打印结果：依次打印1、2
  new MyPromise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 500);
  }).then(
    res => {
      console.log(res);
      return new MyPromise(resolve => {
        setTimeout(() => {
          resolve(2);
        }, 1000);
      });
    }
  ).then(data => {
    console.log(data);
  });
})()
//#endregion