let obj = {
  a: 100,
  b: [10, 20, 30],
  c: {
    x: 10
  },
  d: /^\d+$/
};

let arr = [10, [100, 200], {
  x: 10,
  y: 20
}];

// 深拷贝第一种方法（开发中比较常用，但是有局限性）
// JSON.parse(JSON.stringify(obj))不能对函数、正则、时间对象、数字对象的时候会不好用

// 最佳递归实现（建议统一用Object.prototype.toString.call

function deepClone(obj) {
  // 过滤特殊情况
  if (obj === null) return null;
  if (typeof obj !== 'object') return obj;
  if (obj instanceof Function) return obj
  if (obj instanceof RegExp) {
    return new RegExp(obj);
  }
  if (obj instanceof Date) {
    return new Date(obj);
  }
  //不直接创建空对象目的: 克隆的结果和之前保持相同的所属类
  let newObj = new obj.constructor;
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = deepClone(obj[key]);
    }
  }
  return newObj
}

let obj1 = deepClone(obj)
console.log(obj1);


// 使用hash存储已拷贝过的对象，避免循环拷贝和重复拷贝
function deepClone1(target, hash = new WeakMap()) {
  if (!isObject(target)) return target;
  if (hash.get(target)) return hash.get(target);
  // 兼容数组和对象
  let newObj = Array.isArray(target) ? [] : {};
  // 关键代码，解决对象的属性循环引用 和 多个属性引用同一个对象的问题，避免重复拷贝
  hash.set(target, newObj);
  for (let key in target) {
    if (target.hasOwnProperty(key)) {
      if (isObject(target[key])) {
        newObj[key] = deepClone1(target[key], hash); // 递归拷贝
      } else {
        newObj[key] = target[key];
      }
    }
  }
  return newObj;
}
function isObject(target) {
  return typeof target === "object" && target !== null;
}