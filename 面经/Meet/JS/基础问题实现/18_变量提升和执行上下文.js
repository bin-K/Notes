// 变量提升/预处理
/**
 * js引擎在代码正式执行之前会做一个预处理的工作:
 *    1．收集变量
      2．收集函数
  依据:
      var  将var后边的变量定义但是不赋值 var username = undefined;
      function(){} 提前定义该函数

 */

console.log(username); //undefined

var username = 'kobe'

console.log(username);//kobe

fun()//fun()

function fun() {
  console.log('fun()');
}

// 执行上下文
/**
 * 执行上下文(execute context) EC
 * 理解: 代码执行的环境
   时机: 代码正式执行之前会进入到执行环境工作:
      1．创建变量对象:
          1) 变量
          2) 西数及函数的参数
          3) 全局: window
          4) 局部: 抽象的但是确实存在
      2．确认this的指向
          1) 全局: this -- -> window
          2) 局部: this -- -> 调用其的对象
      3.创建作用域链
          父级作用域链 + 当前的变量对象

      4．扩展:
        ECobj = {
            变量对象:{变量，函数，函数的形参}
            scopeChain:父级作用域链+当前的变最对象，
            this: {window |/调用其的对象}
        }

 */
