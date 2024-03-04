// 一种思路，先将数组排序，根据正则将重复的值去除
let ary = [12, 23, 12, 15, 25, 23, 25, 14, 16];
ary.sort((a, b) => a - b);
let str = ary.join('@') + '@';
let reg = /(\d+@)\1*/g;
ary = [];
str.replace(reg, (n, m) => {
  m = Number(m.slice(0, m.length - 1));
  ary.push(m);
})
console.log(ary);


// 一种思路，使用ES6的Set
ary = [12, 23, 12, 15, 25, 23, 25, 14, 16];
ary = [...new Set(ary)];
console.log(ary);
