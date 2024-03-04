let arr = [
  [1, 2, 2],
  [3, 4, 5, 5],
  [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10
];

//第一种方法:使用ES6中提供的 Array.prototype.flat处理

// arr = arr.flat(Infinity);

//第二种方法把数组直接变为字符串即可（数组ToSTRING之后，不管你有多少级，
// 最后都会变为以逗号分隔的字符串，没有中括号和所谓的层级了），相当于直接的扁平化了

// arr = arr.toString().split(',').map(item => {
//   return Number(item);
// });

//JSON .stringify也可以扁平化数组

// arr = JSON.stringify(arr).replace(/(\[|\])/g, '').split(',').map(item => Number(item));


//=>基于数组的some方法进行判断检测:验证数组中的某一项有没有符合函数中提供的规则的

// while (arr.some(item => Array.isArray(item))) {
//   arr = [].concat(...arr);
// }

// 自己封装方法
(function () {
  function myFlat() {
    let result = [],
      _this = this;
    //=> 循环ARR中的每一项，把不是数组的存储到新数组中
    let fn = (arr) => {
      for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        if (Array.isArray(item)) {
          fn(item);
          continue;
        }
        result.push(item);
      }
    };
    fn(_this);
    return result;
  }
  Array.prototype.myFlat = myFlat;
})();

arr = arr.myFlat()
console.log(arr);
