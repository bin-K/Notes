const arr1 = [2, 8, 9, 4, 6, 3, 5, 1, 7]
function insert(arr) {
  //1.准备一个新数组，用来存储抓到手里的牌，开始先抓一张牌进来
  let handle = [];
  handle.push(arr[0]);
  //2.从第二项开始依次抓牌，一直到把台面上的牌抓光
  for (let i = 1; i < arr.length; i++) {
    // A是新抓的牌
    let A = arr[i];
    //和HANDDLE手里的牌依次比较（从后向前比) 
    for (let j = handle.length - 1; j >= 0; j--) {
      // 每一次要比较的手里的牌
      let B = handle[j];
      //如果当前新牌A比要比较的牌B大了，把A放到B的后面
      if (A > B) {
        handle.splice(j + 1, 0, A);
        break;
      }
      //已经比到第一项，我们把新牌放到手中最前面即可
      if (j === 0) {
        handle.unshift(A);
      }
    }
  }
  return handle
}

console.log(insert(arr1));