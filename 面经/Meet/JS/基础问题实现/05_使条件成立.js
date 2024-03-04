// 当a等于什么的时候能使下面的条件成立
// var a = ?
// if (a == 1 && a == 2 && a == 3) {
//   console.log(1);
// }

/**
 *  == 的转换规则
 * 
 *  对象==字符串 对象.toString

    null==undefined 相等 但是和其他值不相等

    NaN！=NaN

    剩下的都转换成数字
 */
// 对象==字符串 对象.toString
// 利用这个思想，将a写为一个对象，并且重写其toSrting方法，在第一次执行的时候返回1
// 在第二次执行的时候返回2，第三次执行的时候返回3，使条件成立
/*var a = {
  i:1,
  toString() {
    if (i = 1) {
      return this.i++
    } else if (i = 2) {
      return this.i++
    } else {
      return this.i
    }
  }
}*/

// 利用Object.defineProperty进行数据劫持
// var i = 0
// Object.defineProperty(window, 'a', {
//   get() {
//     return ++i
//   }
// })

// 数组弹出
var a = [1, 2, 3]
a.toString = a.shift;

if (a == 1 && a == 2 && a == 3) {
  console.log('成立');
}

