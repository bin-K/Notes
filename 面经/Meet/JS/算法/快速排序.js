const arr1 = [2, 8, 9, 4, 6, 3, 5, 1, 7]
function quick(arr) {
  //4.结束递归〔当ARY中小于等于一项，则不用处理)
  if (arr.length <= 1) {
    return arr;
  }
  // 1.找到数组的中间项，在原有的数组中把它移除
  let middleIndex = Math.floor(arr.length / 2);
  let middleValue = arr.splice(middleIndex, 1)[0];
  //2.准备左右两个数组，循环剩下数组中的每一项，比当前项小的放到左边数组中，反之放到右边数组中
  let aryLeft = [],
    aryRight = [];
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    item < middleValue ? aryLeft.push(item) : aryRight.push(item);
  }
  //3.递归方式让左右两边的数组持续这样处理，一直到左右两边都排好序为止（最后让左边+中间+右边拼接成为最后的结果)
  return quick(aryLeft).concat(middleValue, quick(aryRight));
}

console.log(quick(arr1));