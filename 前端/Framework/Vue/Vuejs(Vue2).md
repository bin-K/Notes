# 零、ES6
- 在学习Vue前需要对ES6语法掌握才能较好地学习和理解
### 1.块级作用域-let和var
 - var的设计可以看成JavaScript语言设计上的错误，但这样的错误多半不能修复和移除，因为需要向后兼容
 - 可以将let看成更完美的var
 - 块级作用域
   - JS中使用var来声明一个变量时，变量的作用域主要与函数的定义有关
   - 针对其他块定义来说是没有作用域的，比如if/for等，这在开发中会引起一些问题

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>块级作用域</title>
</head>
<body>
<button>按钮0</button>
<button>按钮1</button>
<button>按钮2</button>
<script>

  //ES5语法，没有块级作用域，只有函数的作用域，无论点击哪个按钮都是按钮2，因为i改变了，类似于全局变量
  // var btns = document.getElementsByTagName("button");
  // for(var i = 0;i<btns.length;i++){
  //   btns[i].addEventListener("click", function () {
  //     console.log("第" + i + "个按钮被点击了")
  //   })
  // }

  //闭包，利用了ES5的函数作用域来解决没有块级作用域的问题
  // var btns = document.getElementsByTagName("button");
  // for(var i = 0;i<btns.length;i++){
  //   (function(i){
  //     btns[i].addEventListener("click", function () {
  //       console.log("第" + i + "个按钮被点击了")
  //     })
  //   })(i)
  // }
  //ES6语法，使用let代替var，let有块级作用域
  let btns = document.getElementsByTagName("button");
  for(let i = 0;i<btns.length;i++){
    btns[i].addEventListener("click", function () {
      console.log("第" + i + "个按钮被点击了")
    })
  }
</script>
</body>
</html>
```

 - 程序分析
ES5语法：var定义变量
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210202190840282.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210202191152883.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
ES5语法：var定义变量，采用闭包来解决
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210202191439128.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210202191544217.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
ES6语法，采用let来定义变量
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210202191818318.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/202102021918485.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
### 2.const
 - const关键字
    - 在很多语言中已存在，主要的作用是将某个变量修饰为常量
    - 在JavaScript中使用const修饰的标识符为常量，不可以再次赋值
 - 当修饰的标识符不会被再次赋值时，就可以使用const来保证数据的安全性
 - 建议：在ES6开发中，优先使用const，只有需要改变某一标识符的时候才使用let
 - const的注意：
    - 注意一：被const修饰的变量可以看作一个常量，一旦定义了就不能修改，类似于final
    - 注意二：const修饰变量时一定要赋初始值
    - 注意三：const修饰的对象不能改变，但是对象内部的属性可以修改
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>const</title>
</head>
<body>

</body>
<script>
  //1.被const修饰的变量可以看作一个常量，一旦定义了就不能修改，类似于final
  // const name = 'hahha';
  // name = 'kkk'

  //2.const修饰变量时一定要赋初始值
  //const name ;

  //3.const修饰的对象不能改变，但是对象内部的属性可以修改
  const object = {
    name : 'hh',
    age: 12,
    height: 188
  }
  object.name = 'jj'
  object.age = 10
  object.height = 185
</script>
</html>
```

### 3.对象字面变量的增强写法

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>增强写法</title>
</head>
<body>

</body>
<script>
  const name = 'jj'
  const age = 15
  const height = 188

//  ES5写法
//   const obj = {
//     name: name,
//     age: age,
//     height: height
//   }

//  ES6写法
  const obj = {
    name,
    age,
    height
  }
  console.log(obj)

  //函数的增强写法
  //ES5
  const object = {
    run:function () {

    }
  }
  //ES6增强写法
  const object = {
    run() {

    }
  }
</script>
</html>
```
### 4.箭头函数的使用和this指向
#### （1）基本使用

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>箭头函数的基本使用</title>
</head>
<body>
<script>
  //箭头函数：也是一直定义函数的方式
  //1.定义函数的方式：function
  const aaa = function () {

  }
  //2.对象字面量中定义函数
  const obj = {
    aaa(){

    }
  }
  //3.ES6中的箭头函数
  // const aaa = (参数列表) => {
  //
  // }
  //无参数时
  const ccc = () => {

  }
</script>
</body>
</html>
```
#### （2）参数和返回值

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>箭头函数参数和返回值</title>
</head>
<body>
<script>
  //1.参数问题
  //两个参数
  const sum = (num1,num2) => {
    return num1 + num2
  }
  //一个参数(可以把括号省略)
  const power = num => {
    return num * num
  }
   //2.返回值
  //函数代码块中有多行代码
  const test = () => {
    console.log('hello world');
    console.log('hello vue');
  }
  //函数代码块中只有一行代码
  const mul = (num1,num2) => num1 * num2//自动返回结果
  //没有返回值，打印demo的结果时为undefined，调用demo时打印hello world
  const demo = () => console.log('hello world');
</script>
</body>
</html>
```
#### （3）this的使用

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>箭头函数中this的使用</title>
</head>
<body>
<script>
  //什么时候使用箭头函数，一般是作为其他函数的参数时使用
  setTimeout(function () {
    console.log(this) //这时打印的是window
  },1000)
  setTimeout(() => {
    console.log(this) //这时打印的是window
  },1000)

  //问题：箭头函数的this是如何查找的？
  //答案：向外层作用域中，一层一层查找this，直到有this的定义
  const obj = {
    aaa(){
      setTimeout(function () {
        console.log(this) //这时打印的是window
        setTimeout(function () {
          console.log(this) //这时打印的是window
        },1000)
        setTimeout(() => {
          console.log(this) //这时打印的是window，查找到最外层的setTimeout时发现有this的定义，指向的是window
        },1000)
      },1000)
      setTimeout(() => {
        console.log(this) //这时打印的是Obj对象，查找到aaa时发现有this的定义
      },1000)
    }
  }
</script>
</body>
</html>
```
### 5.Promise
#### （1）.Promise的介绍和基本使用
######  1）什么是Promise
- ES6中一个非常重要和好用的特性就是Promise
- Promise到底是做什么的呢?
	- Promise是异步编程的一种解决方案。
- 那什么时候会来处理异步事件呢?
	- 一种很常见的场景应该就是网络请求了。
	- 封装一个网络请求的函数，因为不能立即拿到结果，所以不能像简单的3+4=7一样将结果返回。
	- 所以往往会传入另外一个函数，在数据请求成功时，将数据通过传入的函数回调出去。
	- 如果只是一个简单的网络请求，那么这种方案不会给我们带来很大的麻烦。
- 但是，当网络请求非常复杂时，就会出现回调地狱。

###### 2）网络请求的回调地狱
- 考虑下面的场景(有夸张的成分):
	- 通过一个url1从服务器加载一个数据data1 , data1中包含了下一个请求的url2
	- 通过data1取出url2，从服务器加载数据data2,data2中包含了下一个请求的url3
	- 通过data2取出url3，从服务器加载数据data3 ,data3中包含了下一个请求的url4
	- 发送网络请求url4，获取最终的数据data4
```javascript
$.ajax( 'url1', function (data1) {
	$.ajax(data1 ['url2 '], function (data2){
		$.ajax(data2 ['url3']，function (data3){
			$.ajax(data3 ['url4'],function (data4){
				console.log(data4);
			})
		})
	})
})

```

- 上面的代码有什么问题吗?
	- 正常情况下，不会有什么问题，可以正常运行并且获取想要的结果。
	- 但是，这样的代码难看而且不容易维护。
	- 我们更加期望的是一种更加优雅的方式来进行这种异步操作。
- 如何做呢?就是使用Promise。
	- Promise可以以一种非常优雅的方式来解决这个问题。
###### 3）定时器的异步事件
- 用一个定时器来模拟异步事件:
	- 假设下面的data是从网络上1秒后请求的数据
	- console.log就是我们的处理方式。
```javascript
  setTimeout(()=>{
    let data1 = 'Hello World'
    console.log(data1);
    setTimeout(() =>{
    	let data2 = 'Hello Vuejs'
    	console.log(data2);
    },1000)
  },1000
```
- 这是过去的处理方式，将它换成Promise代码

```javascript
  //resolve,reject作为Promise的参数
  //resolve,reject本身也是函数
  new Promise((resolve ,reject)=>{
  //第一次网络请求
    setTimeout(()=>{
      resolve('Hello World')
      reject('error')
    },1000)
  }).then( data =>{
  //第一次处理
    console.log(data);
    //第二次网络请求
    return new Promise((resolve ,reject)=>{
		setTimeout(()=>{
			 resolve('Hello Vuejs')
    	},1000)
	}).then( data =>{
  		//第二次处理
    	console.log(data);
    })
  }).catch( error =>{
  //错误处理
    console.log(error);
  })
```
#### （2）Promise的三种状态
- 首先,当开发中有异步操作时,就可以给异步操作包装一个Promise
- 异步操作之后会有三种状态:
	- pending :等待状态，比如正在进行网络请求，或者定时器没有到时间。
	- fulfill :满足状态，当主动回调了resolve时，就处于该状态，并且会回调.then()
	- reject:拒绝状态，当主动回调了reject时，就处于该状态，并且会回调.catch()
- Promise的另外一种写法：
- catch中的内容可以写在then中
```javascript
 new Promise((resolve ,reject)=>{
    //第一次网络请求
    setTimeout(()=>{
      resolve('Hello World')
      reject('error')
    },1000)
  }).then( data =>{
    //第一次处理
    console.log(data);
    //第二次网络请求
    return new Promise((resolve ,reject)=>{
      setTimeout(()=>{
        resolve('Hello Vuejs')
      },1000)
    }).then( data => {
      //第二次处理
      console.log(data);
    })
  },error =>{
    //错误处理
    console.log(error);
  })
```
#### （3）Promise的链式调用
- 无论是then还是catch都可以返回一个Promise对象。
- 所以，代码其实是可以进行链式调用的:
- 这里直接通过Promise包装了一下新的数据，将Promise对象返回了
	- Promise.resovle():将数据包装成Promise对象，并且在内部回调resolve()函数
	- Promise.reject():将数据包装成Promise对象，并且在内部回调reject()函数
```javascript
  // 链式调用的代码
  new Promise( (resolve,reject) =>{
    setTimeout( function() {
      resolve( 'Hello World ' )
    },1000)
  }).then(data => {
    console.log(data);//=>Hello World
    return new Promise(resolve => {
      resolve(data + '111')
    })
  }).then( data => {
    console.log(data);// => Hello World111
    return new Promise(resolve => {
      resolve(data + '222')
    })
  }).then(data => {
    console.log(data);//=>Hello World111222
    return new Promise((resolve,reject) => {
      reject(data + 'error')
    })
  }).then(data => {
    console.log(data);// 这里没有输出,这部分代码不会执行
    return new Promise(resolve => {
      resolve(data + '333')
    })
  }).catch(data => {
    console.log(data);// =→>Hello world111222error
    return new Promise(resolve => {
      resolve(data + '444')
    })
  }).then(data => {
    console.log(data);//=> Hello World111222error444
  })
```
- 简写一

```javascript
//简写一
  new Promise( (resolve,reject) =>{
    setTimeout( function() {
      resolve( 'Hello World ' )
    },1000)
  }).then(data => {
    console.log(data);//=>Hello World
    return Promise.resolve(data + '111')
  }).then(data => {
    console.log(data);// => Hello World111
    return Promise.resolve(data + '222')
  }).then(data => {
    console.log(data);//=>Hello World111222
    return Promise.reject(data + 'error')
  }).then(data => {
    console.log(data);// 这里没有输出,这部分代码不会执行
    return Promise.resolve(data + '333')
  }).catch(data => {
    console.log(data);// =→>Hello world111222error
    return Promise.resolve(data + '444')
  }).then(data => {
    console.log(data);//=> Hello World111222error444
  })
```
- 简写二

```javascript
//简写二
  new Promise( (resolve,reject) =>{
    setTimeout( function() {
      resolve( 'Hello World ' )
    },1000)
  }).then(data => {
    console.log(data);//=>Hello World
    return data + '111'
  }).then(data => {
    console.log(data);// => Hello World111
    return data + '222'
  }).then(data => {
    console.log(data);//=>Hello World111222
    return data + 'error'
  }).then(data => {
    console.log(data);// 这里没有输出,这部分代码不会执行
    throw data + '333'
  }).catch(data => {
    console.log(data);// =→>Hello world111222error
    return data + '444'
  }).then(data => {
    console.log(data);//=> Hello World111222error444
  })
```

#### （4）Promise的all方法的使用
- all方法可以等待在其内部的所有请求都返回结果后全部获取出来
```javascript
  Promise.all([
    new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve({name:'zhangsan',age:18})
      },2000)
    }),
    new Promise((resolve,reject)=>{
        resolve({name:'lisi',age:19})
    },1000)
  ]).then( result =>{
    console.log(result);
  })
```
- 运行截图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210214225304878.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

# 一、认识Vuejs
官网：[https://cn.vuejs.org/](https://cn.vuejs.org/)
### 1. Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架

 - 渐进式意味着可以将Vue作为应用的一部分嵌入其中，带来更丰富的交互体验

### 2.Vue有很多特点与Web开发中常见的高级功能

 - 解耦视图和数据
 - 可复用的组件
 - 前端路由技术
 - 状态管理
 - 虚拟DOM

### 3.学习Vue.js的前提
 - 从零开始学习Vue开发，不需要具备其他类似与Angular，React，甚至JQuery的经验
 - 需要具备一定的HTML、CSS、Javascript基础
### 4.Vue.js的安装
 - 方法一：直接CDN引入
```html
<!--开发环境版本，包含了有帮助的命令行警告-->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<!--生产环境版本，优化了尺寸和速度-->
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.12"></script>
```
 - 方法二：下载和引入
 开发版本：[https://cn.vuejs.org/js/vue.js](https://cn.vuejs.org/js/vue.js)
    生产版本：[https://cn.vuejs.org/js/vue.min.js](https://cn.vuejs.org/js/vue.min.js)
 - 方法三：NPM安装
后续通过webpack和CLI的使用补充

### 5.hello Vuejs 

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>helloVuejs</title>
</head>
<body>
<!--这部分div被Vue接管了-->
  <div id = app> 
    {{message}}
  </div>

<script src = "../js/vue.js"></script>
<script>
const app = new Vue({
    el: '#app',	//el表示需要Vue接管的区域id
   data: {		
      message: 'hello Vuejs'
   }
  })
</script>
</body>
</html>
```

 - 运行截图：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210202132556773.png)
 - 代码做了什么事：
	创建Vue对象时，传入了一些option ：{}
	- {}中包含了el属性：该属性决定了这个Vue对象挂载到哪一个元素上，我		 们这里挂载在了id为app的元素上
	- {}中包含了data属性：该属性中通常会存储一些数据（这些数据可以是直接定义出来的，也可能是来自网络，从服务器加载的）
 - 当前的代码是可以做到响应式的
 - 注意：Vue实例与接管的元素只能是一对一的关系，多个重名的元素，Vue只会接管第一个出现的元素，多个Vue实例，只能由一个去接管一个元素
### 6.Vue列表的展示
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>v-for</title>
  <script src = ../js/vue.js></script>
</head>
<body>
  <div id="app">
    <ul>
      <li v-for="item in movies">{{item}}</li>
    </ul>
  </div>
</body>

<script>
const app = new Vue({
    el: '#app',
   data: {
      // message: 'hello Vuejs'
     movies: ['大话西游','美国队长','闻香识女人','海王']
   }
  })
</script>
</html>
```

 - 运行截图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210202133844731.png)
 - 当前的代码也是可以做到响应式的
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210202134123875.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
### 7.计数器小案例
```html
<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>v-on</title>
  <script src="../js/vue.js"></script>
</head>
<body>
  <div id = "app">
    <h2>当前计数:{{counter}}</h2>
    <!--注释中的写法为最原始的写法，使用中的是语法糖的写法-->
<!--    <button v-on:click="add">+</button>-->
<!--    <button v-on:click="sub" >-</button>-->
    <button @click="add">+</button>
    <button @click="sub" >-</button>
  </div>
</body>

<script>
const app = new Vue({
    el: '#app',
   data: {
      // message: 'hello Vuejs'
     counter: 0
   },
   methods: {
     add:function () {
       console.log("add被执行");
       this.counter++
     },
     sub:function () {
       console.log("sub被执行");
       this.counter--
     }
   }
  })

</script>
</html>
```

 - 运行截图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210202134526180.png)
 - 可以看到在代码中使用了新的属性和指令
 属性：methods，用于在Vue对象中定义方法
    指令：@click，用于监听某个元素的点击事件，并且需要指定点击发生时执行的方法（方法通常是methods中定义的方法）
    （后续将会详细介绍属性和指令）
### 8.Vue的MVVM模式
 - MVVM是Model-View-ViewModel的简写。它本质上就是MVC 的改进版。
 - MVVM 就是将其中的View 的状态和行为抽象化，让我们将视图 UI 和业务逻辑分开
 - MVVM模式和MVC模式一样，主要目的是分离视图（View）和模型（Model）
 - Vue.js 是一个提供了 MVVM 风格的双向数据绑定的 Javascript 库，专注于View 层。它的核心是 MVVM 中的 VM，也就是 ViewModel。ViewModel负责连接 View 和Model，保证视图和数据的一致性，这种轻量级的架构让前端开发更加高效、便捷
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210202135255590.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

 - view层
 1. 视图层
 2. 在前端开发中通常是DOM层
 3. 主要的作用就是给用户展示各种信息

 - model层
1. 数据层
2. 数据可能是固定的死数据，更多的是来自服务器从网络上请求下来的数据

 - ViewModel
1. 视图模型层，是view和model沟通的桥梁
2. 一方面它实现了Data Binding，也就是数据绑定，将model的改变实时反应到view中
3. 另一方面它实现了DOM Listener ，也就是DOM监听，当DOM发生一些事件时可以监听到，并在需要的情况下改变对应的Data

### 9.创建Vue实例传入的option

 - option中可以包含哪些选项？
 - 官网中可以查询API
[https://cn.vuejs.org/v2/api/#%E9%80%89%E9%A1%B9-%E6%95%B0%E6%8D%AE](https://cn.vuejs.org/v2/api/#%E9%80%89%E9%A1%B9-%E6%95%B0%E6%8D%AE)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210202141210809.png)

 目前掌握的
 - el：

    -  类型：string | HTMLELement
    -  作用：决定之后Vue实例会管理哪一个DOM


 - data：
     - 类型：Object | Function（组件中的data必须是一个函数） 
     - 作用：Vue实例对应的数据

 - methods：
   - 类型：{ [key : string] : Function}
   - 作用：定义属于Vue的一些方法，可以在其他地方调用，也可以在指令中   使用

### 10.Vue的生命周期

 - 每个 Vue 实例在被创建之前都要经过一系列的初始化过程
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210202142319346.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

vue在生命周期中有这些状态
 - beforeCreate
 - created
 - beforeMount
 - mounted
 - beforeUpdate
 - updated
 - beforeDestroy
 - destroyed

Vue在实例化的过程中，会调用这些生命周期的钩子，给我们提供了执行自定义逻辑的机会。那么，在这些vue钩子中，vue实例到底执行了那些操作，我们先看下面执行的例子:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>生命周期</title>
  <script src="js/vuejs-2.5.16.js"></script>
</head>
<body>
  <div id="app">
    {{message}}
  </div>
  <script>
    var vm = new Vue({
	 el: "#app",
	 data: {
	 message: 'hello world'
    },
	beforeCreate: function() {
		console.log(this);
		showData('创建vue实例前', this);
	},
	created: function() {
		showData('创建vue实例后', this);
	},
	beforeMount: function() {
		showData('挂载到dom前', this);
	},
	mounted: function() {
		showData('挂载到dom后', this);
	},
	beforeUpdate: function() {
		showData('数据变化更新前', this);
	},
	updated: function() {
		showData('数据变化更新后', this);
	},
	beforeDestroy: function() {
		vm.test = "3333";
		showData('vue实例销毁前', this);
	},
	destroyed: function() {
		showData('vue实例销毁后', this);
	}
  });
  function realDom() {
	console.log('真实dom结构：' + document.getElementById('app').innerHTML);
  }
  function showData(process, obj) {
	console.log(process);
	console.log('data 数据：' + obj.message)
	console.log('挂载的对象：')
	console.log(obj.$el)
	realDom();
	console.log('------------------')
	console.log('------------------')
	}
	vm.message="good...";
	vm.$destroy();
  </script>
</body>
</html>
```
vue对象初始化过程中，会执行到beforeCreate,created,beforeMount,mounted 这几个钩子的内容
 - **beforeCreate** ：数据还没有监听，没有绑定到vue对象实例，同时也没有挂载对象
 - **created** ：数据已经绑定到了对象实例，但是还没有挂载对象
 - **beforeMount**: 模板已经编译好了，根据数据和模板已经生成了对应的元素对象，将数据对象关联到了对象的el属性，el属性是一个HTMLElement对象，也就是这个阶段，vue实例通过原生的createElement等方法来创建这个html片段，准备注入到我们vue实例指明的el属性所对应的挂载点
 - **mounted**:将el的内容挂载到了el，相当于我们在jquery执行了(el).html(el),生成页面上真正的dom，上面我们就会发现dom的元素和我们el的元素是一致的。在此之后，我们能够用方法来获取到el元素下的dom对象，并进行各种操作
 - 当我们的data发生改变时，会调用beforeUpdate和updated方法
     - **beforeUpdate** ：数据更新到dom之前，我们可以看到$el对象已经修改，但是我们页面上dom的数据还没有发生改变
    - **updated**: dom结构会通过虚拟dom的原则，找到需要更新页面dom结构的最小路径，将改变更新到dom上面，完成更新
 - **beforeDestroy,destroyed** :实例的销毁，vue实例还是存在的，只是解绑了事件的监听还有watcher对象数据 与view的绑定，即数据驱动

常用的生命周期钩子:
- mounted:发送ajax请求、启动定时器、绑定自定义事件、订阅消息等【初始化操作】。
- beforeDestroy:清除定时器、解绑自定义事件、取消订阅消息等【收尾工作】.

关于销毁Vue实例
- 销毁后借助Vue开发者工具看不到任何信息。
- 销毁后自定义事件会失效，但原生DOM事件依然有效。
- 一般不会在beforeDestroy操作数据，因为即便操作数据，也不会再触发更新流程了。

# 二、插值操作
### 1.mustache语法

 - 数据绑定最常见的形式就是使用“Mustache”语法 (双大括号) 的文本插值，Mustache 标签将会被替代为对应数据对象上属性的值。无论何时，绑定的数据对象上属性发生了改变，插值处的内容都会更新。
 -  Vue.js 都提供了完全的 JavaScript表达式支持。

```html
{{ number + 1 }}
{{ ok ? 'YES' : 'NO' }}
```

 - 这些表达式会在所属 Vue 实例的数据作用域下作为 JavaScript 被解析。有个限制就是，每个绑定都只能包含单个表达式，所以下面的例子都不会生效。
```html
<!-- 这是语句，不是表达式 -->
{{ var a = 1 }}
<!-- 流控制也不会生效，请使用三元表达式 -->
{{ if (ok) { return message } }}
```
 - 例子演示

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>插值操作</title>
</head>
<body>
  <div id = "app">
    <h2>{{message}}</h2>
    <h2>{{firstName + lastName}}</h2>
    <h2>{{firstName + ' ' + lastName}}</h2>
    <h2>{{firstName}} {{lastName}}</h2>
    <h2>{{number * 2}}</h2>
  </div>

  <script src = "../js/vue.js"></script>
  <script>
   new Vue({
     el: '#app',
     data: {
       number: 2,
       message: 'hello Vuejs',
       firstName: 'zhang',
       lastName: 'san'
     }
    })
  </script>
</body>
</html>
```

 - 运行截图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210202144503408.png)
### 2.v-once
 - 该指令后面不需要跟任何表达式
 - 该指令表示元素和组件只渲染一次，不会随着数据的改变而改变

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>v-once</title>
</head>
<body>
  <div id = "app">
    <h2>{{message}}</h2>
<!--    只改变一次，不随message的变化而变化-->
    <h2 v-once>{{message}}</h2>
  </div>

    <script src = "../js/vue.js"></script>
    <script>
     const app = new Vue({
       el: '#app',
       data: {
         message: 'hello Vuejs'
       }
      })
    </script>
</body>
</html>
```

 - 运行截图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210202145448566.png)![在这里插入图片描述](https://img-blog.csdnimg.cn/20210202145617172.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

### 3.v-html

 - 某些情况下，从服务器请求到的数据本身就是一个HTML代码
    - 如果直接使用{{}}来输出，会将HTML代码也输出
    - 但是正确的应该是按照HTML格式进行解析，并显示对应的内容
 - 该指令后面往往会跟上一个string类型
 - 会将string类型中的HTML解析出来并进行渲染
 - 严重注意:v-html有安全性问题!!!!
	- 在网站上动态渲染任意HTML是非常危险的，容易导致XSS攻击。
	- 一定要在可信的内容上使用v-html。永不要用在用户提交的内容上!


```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>v-html</title>
</head>
<body>
  <div id = "app">
    <h2>{{url}}</h2>
    <h2 v-html = "url"></h2>
    </div>

    <script src = "../js/vue.js"></script>
    <script>
    const app = new Vue({
       el: '#app',
       data: {
         message: 'hello Vuejs',
         url: '<a href="http://www.baidu.com">百度一下</a>'
       }
      })
    </script>
</body>
</html>
```

 - 运行截图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210202150257306.png)
### 4.v-text
 - v-text的作用与Mustache比较相似，都是用于将数据显示在界面中
 - v-text通常情况下接受一个string类型
 - v-text不能解析HTML标签，会将其全部当作字符串解析
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>v-text</title>
</head>
<body>
  <div id = "app">
    <h2>{{message}},哈哈哈</h2>
    <!--使用了v-text会将原内容给覆盖-->
    <h2 v-text = "message">哈哈哈</h2>
    </div>

    <script src = "../js/vue.js"></script>
    <script>
     new Vue({
       el: '#app',
       data: {
         message: 'hello Vuejs'

       }
      })
    </script>
</body>
</html>
```

 - 运行截图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210202150916530.png)
### 5.v-pre
 - 用于跳过这个元素和它子元素的编译过程，用于显示原本的Mustache语法


```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>v-pre</title>
</head>
<body>
  <div id = "app">
    <h2>{{message}}</h2>
<!--    展示原本的内容-->
    <h2 v-pre>{{message}}</h2>
    </div>

    <script src = "../js/vue.js"></script>
    <script>
     new Vue({
       el: '#app',
       data: {
         message: 'hello Vuejs'

       }
      })
    </script>
</body>
</html>
```

 - 运行截图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210202151244615.png)
### 6.v-cloak
 - 在某些情况下，浏览器可能会直接显示出未编译的Mustache标签，这造成了页面的不友好
 - 使用v-cloak先将内容遮挡住等待编译完成后再显示
 - v-cloak在Vue编译前是存在的，在Vue编译后就不存在了

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>v-cloak</title>
  <style type="text/css">
    [v-cloak]{
      display: none;
    }
  </style>
</head>
<body>
  <div id = "app" v-cloak>
    {{message}}
  </div>
  <script src = "../js/vue.js"></script>
  <script>
    //在vue解析前，div中存在一个v-clock的属性
    //在vue解析后，div中没有一个v-clock的属性
    setTimeout(function () {
      new Vue({
        el: '#app',
        data: {
          message: 'hello Vuejs'
        }
      })
    },1000)
  </script>
</body>
</html>
```

 - 运行截图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210202152022729.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
# 三、动态绑定属性（v-bind）
### 1.v-bind的基本使用

 - 作用：动态绑定属性
 - 缩写：  **：**（语法糖）
 - 预期：any(with argument) | Object(without argument)
 - 参数：attr Or Prop（option）

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>v-bind</title>
</head>
<body>
<div id = "app">
  <a v-bind:href="url">百度一下</a>
<!--  语法糖写法-->
  <a :href="url">百度一下</a>
</div>
<script src = "../js/vue.js"></script>
<script>
  new Vue({
    el: '#app',
    data: {
      message: 'hello Vuejs',
      url: 'http://www.baidu.com'
     }
  })
</script>
</body>
</html>
```

 - 运行截图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210202152929919.png)
### 2.v-bind动态绑定class（对象语法&数组语法）
 - 通过v-bind来决定在元素中动态添加或删除class属性

 对象语法（class后面跟的是一个对象）
 - 用法一：直接通过{}绑定一个类
```html
<h2  :class="{active:isActive}">{{message}}</h2>
```
 - 用法二：也可以通过判断传入多个值

```html
<h2  :class="{active:isActive,line:isLine}">{{message}}</h2>
```

 - 用法三：和普通类同时存在，并不冲突
 - 注：如果isActive和isLine同时为true，那么会有title、active、line三个类

```html
<h2 class="title" :class="{active:isActive,line:isLine}">{{message}}</h2>
```

 - 用法四：如果过于复杂，可以放在一个methods或computed中 
 - 注：classes是一个计算属性

```html
<h2 class="title" :class="classes">{{message}}</h2>
```
数组语法（class后面接的是一个数组）

 - 用法一：直接通过[ ]绑定一个类

```html
<h2 :class="['active']">{{message}}</h2>
```
 - 用法二：也可以传入多个值

```html
<h2  :class="['active','line']">{{message}}</h2>
```

 - 用法三：和普通类同时存在，并不冲突
 - 注：会有title、active、line三个类

```html
<h2 class="title" :class="['active','line']">{{message}}</h2>
```

 - 用法四：如果过于复杂，可以放在一个methods或computed中
 - 注：classes是一个计算属性

```html
<h2 class="title" :class="classes">{{message}}</h2>
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>v-bind</title>
  <style type="text/css">
    .active{
      color: red;
    }
  </style>
</head>
<body>
  <div id = "app">
    <!--对象语法-->
    <h2 class="title" :class="{active:isActive,line:isLine}">{{message}}</h2>
    <h2 class="title" :class="getClass()">{{message}}</h2>
	<!--数组语法-->
    <h2 class="title" :class="[active,line]">{{message}}</h2>
    <h2 class="title" :class="[active,line]">{{message}}</h2>
    <button @click="toggle()">切换</button>
  </div>
    <script src = "../js/vue.js"></script>
    <script>
      new Vue({
        el: '#app',
        data: {
          message: 'hello Vuejs',
          isActive: true,
          isLine:true,
          active: 'active',
          line: 'bbb'
         },
         methods: {
           toggle: function () {
             this.isActive = !this.isActive
           },
           getClass: function () {
              return {active:this.isActive,line:this.isLine}
           },
           getClasses: function () {
             return [this.active,this.line]
           }
         }
      })
    </script>
</body>
</html>
```
 - 程序分析
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210202162326431.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

 - 运行截图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210202154006598.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/2021020215432794.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
### 3.v-bind动态绑定style

 - 利用v-bind:style来绑定一些CSS内联样式
 - 在写CSS属性名时可以使用驼峰式（fontSize）和短横线分割式（font-size）
 - 同样也是有对象语法和数组语法

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>v-bind</title>
</head>
<body>
  <div id = "app">
<!--    对象语法-->
<!--   错误：不加单引号会被vue认为是一个变量 <h2 :style="{fontSize:50px}">{{message}}</h2>-->
    <h2 :style="{fontSize:'50px'}">{{message}}</h2>
    <h2 :style="{fontSize:size}">{{message}}</h2>
    <h2 :style="{fontSize:Size + 'px'}">{{message}}</h2>
<!--    数组语法-->
    <h2 :style="[baseStyle,baseStyle1]">{{message}}</h2>
  </div>
    <script src = "../js/vue.js"></script>
    <script>
      new Vue({
        el: '#app',
        data: {
          message: 'hello Vuejs',
          size: '50px',
          Size: 50,
          baseStyle: {background: 'green'},
          baseStyle1: {fontSize: 50}
         }
      })
    </script>
</body>
</html>
```

 - 运行截图
![在这里插入图片描述](https://img-blog.csdnimg.cn/2021020216334814.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
### 4.小案例：点击列表的哪个元素，哪个元素的字体变红

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>v-bind&v-for</title>
  <style type="text/css">
    .active{
      color: red;
    }
  </style>
</head>
<body>
  <div id = "app">
    <ul>
      <li v-for="(m,index) in movies"  @click="toggle(index)" :class="getClass(index)">{{m}}</li>
    </ul>
  </div>
    <script src = "../js/vue.js"></script>
    <script>
      new Vue({
        el: '#app',
        data: {
          message: 'hello Vuejs',
          movies: ['海王','火影忍者','进击的巨人'],
          currentIndex:0
         },
         methods: {
          toggle: function (index) {
            this.currentIndex = index
          },
           getClass: function (index) {
            return {active: this.currentIndex===index}
           }
         }
      })
    </script>
</body>
</html>
```

 - 程序分析
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210202164412532.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

 - 运行截图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210202163618694.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210202163649715.png)
# 四、计算属性（computed）
### 1.什么是计算属性
 - 定义: 当其依赖的属性的值发生变化的时，计算属性会重新计算。反之则使用缓存中的属性值,其设计的目的就是为了解决模板中放入太多的逻辑而导致模板过重且难以维护的问题。
 - 在模板中可以直接通过插值语法显示一些data中的数据
 - 但是在某些情况，可能需要对数据进行一些转化后再显示，或者将多个数据结合起来进行显示，此时在Mustache语句中直接写多个数据会变得复杂，这时候应该把这些数据的处理放在计算属性中。

 基本使用

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>计算属性基本使用</title>
</head>
<body>
  <div id = "app">
    <h2>{{fullName}}</h2>
  </div>
    <script src = "../js/vue.js"></script>
    <script>
      new Vue({
        el: '#app',
        data: {
          message: 'hello Vuejs',
          firstName: 'zhang',
          lastName: 'san'
         },
         computed: {
          fullName:function () {
            return this.firstName + ' ' + this.lastName
          }
         }
      })
    </script>
</body>
</html>
```

 - 程序分析
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210202172049497.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
 - 运行截图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210202172138448.png)

复杂操作

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>计算属性复杂操作</title>
</head>
<body>
  <div id = "app">总价：{{totalPrice}}</div>
    <script src = "../js/vue.js"></script>
    <script>
      new Vue({
        el: '#app',
        data: {
          message: 'hello Vuejs',
          books: [
            {id: 1, name: "1111", price: 100},
            {id: 2, name: "2222", price: 200 }
          ]
         },
         computed: {
          totalPrice: function () {
            let result = 0
            for(let i = 0;i < this.books.length;i++){
              result += this.books[i].price
            }
            return result
          }
         }
      })
    </script>
</body>
</html>
```

 - 程序分析
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210202172631536.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
 - 运行截图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210202172653420.png)
### 2.数据代理
#### （1）Object.defineProperty
- Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。
- 但是通过其定义的属性默认是不能被遍历，修改和删除的，需要通过更改其默认值才能被相应地操作
- 另外通过该方法定义的属性会包含get和set两个默认的函数，当通过该方法定义的属性被读取时，get()函数会被调用，当属性被修改时，set()函数会被调用，这点计算属性中的get()和set()与之一致

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Object.defineProperty</title>
</head>

<body>
    <script>
        let person1 = {
            name: '张三',
            sex: '男',
            age: 18
        }
        let num = 18
        let person2 = {
            name: '张三',
            sex: '男',
        }
        Object.defineProperty(person2, 'age', { 
            // value: 18,
            // enumerable: true //控制属性是否可以枚举，默认为false
            // writable:true,//属性是否可以更改，默认为false
            // configurable:true//属性是否可以删除，默认为false

            //当读取person的属性值时，get()函数（getter）就会被调用，其返回值是age的值
            get(){
                console.log('age被读取了');
                return num
            },

            //当修改person的属性值时，set()函数（setter）就会被调用，且会收到修改的具体值
            set(value){
                console.log('age被修改了');
                num = value
            }
        })

        console.log(Object.keys(person1));
        console.log(Object.keys(person2));
    </script>
</body>

</html>
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210717133959289.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
#### （2）数据代理
 - 数据代理：通过一个对象代理对另一个对象中的属性的操作（包括读和写）

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        let obj1 = {x:100}
        let obj2 = {y:100}
        Object.defineProperty(obj2,'x',{
            get(){
                return obj1.x
            },
            set(value){
                obj1.x = value
            }
        })
        console.log(obj2);
    </script>
</body>
</html>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210717164809863.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
#### （3）Vue中的数据代理
- 通过vm对象来代理data对象中属性的操作（读/写)
- Vue中数据代理的好处:
	- 更加方便的操作data中的数据
- 基本原理:
	- 通过object.defineProperty()把data对象中所有属性添加到vm上.
	- 为每一个添加到vm上的属性，都指定一个getter/setter。
	- 在getter/setter内部去操作（读/写)data中对应的属性。
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vue中的数据代理</title>
</head>
<body>
    <div id="app">
        <h1>姓名：{{name}}</h1>
        <h2>年龄：{{age}}</h2>
    </div>
    <script src="../../js/vue.js"></script>
    <script>
        const vm = new Vue({
            el:'#app',
            data:{
                name:'张三',
                age:18
            }
        })
        console.log(vm);
    </script>
</body>
</html>
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210717173117819.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
### 3.计算属性的setter和getter
 - 每个计算属性都包含一个getter和一个setter（setter不常用），其本质就是数据代理，有了前面数据代理的基础后，理解起来就很容易了
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>setter&gettter</title>
</head>
<body>
<!--注意：当使用的是计算属性时，不能在后面加括号，因为它在Vue实例上不是一个函数，简写方式只是代表读取它的时候会自动执行get()方法-->
  <div id = "app">{{fullName}}</div>
    <script src = "../js/vue.js"></script>
    <script>
      new Vue({
        el: '#app',
        data: {
          firstName: 'kobe',
          lastName: 'bryant',
         },
         computed: {
          // fullName:  {
          //   // 计算属性中setter方法一般不写，只有当要改变fullName的值时才写。改变值的时候会调用该函数
          //   set:function (newValue) {
          //     console.log("---",newValue)
          //     const name = newValue.split(" ");
          //     this.firstName = name[0];
          //     this.lastName = name[1];
          //   },
          //读取值的时候会调用该函数
          //   get:function () {
          //     console.log("---")
          //     return this.firstName + ' ' + this.lastName
          //   }
          // }
          //当set不写的时候，get就可以简写
           fullName:function () {
             return this.firstName + ' ' + this.lastName
           }
         }
      })
    </script>
</body>
</html>
```

 - 程序分析
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210202173315876.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

### 4.计算属性的缓存

 - methods和computed都可以实现我们想要的功能
 - 为什么还要多一个计算属性这个东西呢？
 - 原因：计算属性会进行缓存，如果多次使用时，计算属性只会调用一次


```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>computed&method</title>
</head>
<body>
  <div id = "app">
<!--    多次使用，内容不变，只调用一次，性能优于method-->
    <h2>{{fullName}}</h2>
    <h2>{{fullName}}</h2>
    <h2>{{fullName}}</h2>
    <h2>{{fullName}}</h2>
<!--    多次使用，使用多少次，调用多少次-->
    <h2>{{getFullName()}}</h2>
    <h2>{{getFullName()}}</h2>
    <h2>{{getFullName()}}</h2>
    <h2>{{getFullName()}}</h2>
    <h2>{{getFullName()}}</h2>
  </div>
    <script src = "../js/vue.js"></script>
    <script>
      new Vue({
        el: '#app',
        data: {
          firstName: 'zhang',
          lastName: 'san',
         },
        methods:{
          getFullName:function () {
            console.log("getFullName");
            return this.firstName + ' ' + this.lastName
          }
        },
        computed:{
         fullName:function () {
           console.log("fullName");
           return this.firstName + ' ' + this.lastName
         }
        }
      })
    </script>
</body>
</html>
```

 - 程序分析
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210202174003400.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
 - 运行截图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210202174133564.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
# 五、监视属性（watch）

## 1、监视属性watch

- 当被监视的属性变化时,回调函数白动调用,进行相关操作
- 监视的属性必须存在才能进行监视
- 监视的两种写法:
  - new Vue时传入watch配置
  - 通过vm.$watch监视

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>监视属性</title>
    <script src="../js/vue.js"></script>
</head>

<body>
    <div id="app">
        <h1>今天天气很{{info}}</h1>
        <button @click='changeWeather'>切换天气</button>
    </div>
    <script>
        Vue.config.productionTip = false
        const vm = new Vue({
            el: '#app',
            data: {
                ishot: false
            },
            computed: {
                info() {
                    return this.ishot ? '炎热' : '凉爽'
                }
            },
            methods: {
                changeWeather() {
                    this.ishot = !this.ishot
                }
            },
            //监视属性第一种写法
            watch: {
                info: {
                    //页面初次加载时就调用一次handler
                    immediate: true,
                    handler(oldValue, newValue) {
                        console.log('info内容改变了', oldValue, newValue);
                    }
                }
            }
        })
        //监视属性第二种写法
        vm.$watch('ishot',{
            immediate: true,
            handler(oldValue, newValue) {
                console.log('ishot内容改变了', oldValue, newValue);
            }
        })
    </script>
</body>

</html>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210715220914986.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
## 2、深度监视

- vue中的watch默认不监测对象内部值的改变(一层)。
- 配置deep:true可以监测对象内部值改变(多层)。
- 注意:
  - Vue自身可以监测对象内部值的改变，但Vue提供的watch默认不可以!
  - 使用watch时根据数据的具体结构,决定是否采用深度监视。

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>深度监视</title>
    <script src="../js/vue.js"></script>
</head>

<body>
    <div id="app">
        <h1>今天天气很{{info}}</h1>
        <button @click='changeWeather'>切换天气</button>

        <h1>a的值{{number.a}}</h1>
        <button @click='number.a++'>+1</button>

        <h1>b的值{{number.b}}</h1>
        <button @click='number.b++'>+1</button>
    </div>
    <script>
        Vue.config.productionTip = false
        const vm = new Vue({
            el: '#app',
            data: {
                ishot: false,
                number:{
                    a:1,
                    b:1
                }
            },
            computed: {
                info() {
                    return this.ishot ? '炎热' : '凉爽'
                }
            },
            methods: {
                changeWeather() {
                    this.ishot = !this.ishot
                }
            },
            //监视属性第一种写法
            watch: {
                info: {
                    //页面初次加载时就调用一次handler
                    immediate: true,
                    handler(oldValue, newValue) {
                        console.log('info内容改变了', oldValue, newValue);
                    }
                },
                number:{
                    //开启深度监视，当number中的任意数据改变了，就会执行handler
                    deep:true,
                    handler(oldValue,newValue){
                        console.log('number改变了', oldValue, newValue);
                    }
                },
                'number.a':{
                   handler(oldValue, newValue) {
                        console.log('number中的a改变了', oldValue, newValue);
                    } 
                },
            }
        })
    </script>
</body>

</html>
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210715222546653.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210715222751859.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
## 3、监视属性的简写

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>监视属性的简写</title>
    <script src="../js/vue.js"></script>
</head>

<body>
    <div id="app">
        <h1>今天天气很{{info}}</h1>
        <button @click='changeWeather'>切换天气</button>
    </div>
    <script>
        Vue.config.productionTip = false
        const vm = new Vue({
            el: '#app',
            data: {
                ishot: false
            },
            computed: {
                info() {
                    return this.ishot ? '炎热' : '凉爽'
                }
            },
            methods: {
                changeWeather() {
                    this.ishot = !this.ishot
                }
            },
            //监视属性第一种写法
            watch: {
                info(oldValue, newValue) {
                    console.log('info内容改变了', oldValue, newValue);
                }
            }
        })
        //监视属性第二种写法
        vm.$watch('ishot', function(oldValue, newValue){
            console.log('ishot内容改变了', oldValue, newValue);
        })
    </script>
</body>

</html>
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/2021071522331914.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
## 4、watch对比computed
- computed和watch之间的区别:
	- computed能完成的功能,watch都可以完成。
	- watch能完成的功能，computed不一定能完成，例如: watch可以进行异步操作。
- 两个重要的小原则:
	- 所有被Vue管理的函数，最好写成普通函数，这样this的指向才是vm或组件实例对象.
	- 所有不被Vue所管理的函数（定时器的回调函数、ajax的回调函数等，最好写成箭头函数，这样this的指向才是vm或组件实例对象。

# 六、事件监听（v-on）
### 1.v-on

 - 作用：绑定事件监听器
 - 缩写：@（语法糖）
 - 预期：Function | Inline Statement | Object
 - 参数：event

基本使用
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<body>
<div id = "app">
  <h2>当前计数:{{counter}}</h2>
  <!--    <button v-on:click="add">+</button>-->
  <!--    <button v-on:click="sub" >-</button>-->

  <button @click="add">+</button>
  <button @click="sub" >-</button>
</div>
</body>

<script src="../js/vue.js"></script>
<script>
  new Vue({
    el: '#app',
    data: {
      // message: 'hello Vuejs'
      counter: 0
    },
    methods: {
      add:function () {
        console.log("add被执行");
        this.counter++
      },
      sub:function () {
        console.log("sub被执行");
        this.counter--
      }
    }
  })

</script>
</html>
```

 - 程序分析
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210202201009725.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
 - 运行截图
![在这里插入图片描述](https://img-blog.csdnimg.cn/2021020220103968.png)
### 2.v-on参数问题
 - 当通过methods中定义方法，以供@click使用时，需要注意参数问题：
   - 情况一：如果该方法不需要额外参数，那么方法后面的（）可以不添加（但是注意：如果方法本身中有一个参数，而没有加（）的话，那么会将原生事件event参数传递进去）
   - 情况二：如果要同时传入某个参数，同时需要event时，可以通过$event传入事件

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>v-on</title>
</head>
<body>
  <div id = "app">
<!--    无参数时，后面带不带小括号都可以-->
    <button @click="btn1Click">按钮1</button>
    <button @click="btn1Click()">按钮1</button>
<!--    带参数时，正常传入参数除了数字不带引号，其他需要带引号，否则会被当作变量，若data中没有定义，则会报错，若不带括号，则会传入当前的event对象-->
    <button @click="btn2Click('abc')">按钮2</button>
    <button @click="btn2Click(abc)">按钮2</button>
    <button @click="btn2Click">按钮2</button>
<!--    又要参数，又要当前的事件对象,对象前需要加$符号，否则会被认为时对象-->
    <button @click="btn3Click(123,$event)">按钮3</button>
  </div>
    <script src = "../js/vue.js"></script>
    <script>
      new Vue({
        el: '#app',
        data: {
          message: 'hello Vuejs'
         },
         methods: {
          btn1Click() {
            console.log();
          },
          btn2Click(event) {
            console.log(event)
          },
          btn3Click(abc,event){
            console.log(abc,event)
          }
         }
      })
    </script>
</body>
</html>
```

 - 程序分析
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210202202123163.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
 - 运行截图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210202202619727.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
### 3.v-on修饰符
 - 在某些情况下，我们拿到event的目的可能是进行一些事件处理
 - Vue提供了一些修饰符帮助我们方便处理一些事件
   - .stop 调用event.stopPropagation()
   - .prevent 调用event.preventDefault()
   - .(keyCode | keyAilas) 只有当事件是从特定键触发时才触发回调
   - .native 监听组件根元素的原生事件（在组件绑定事件时，组件会把所有原生事件也当作自定义事件，组件上也可以绑定原生DOM事件，需要使用native修饰符）
   - .once 只触发一次回调

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>v-on</title>
</head>
<body>
  <div id = "app">
<!--    stop的使用，防止冒泡，即事件传播-->
    <div @click="divClick">
      aaaaa
      <button @click.stop="btnClick">按钮1</button>
    </div>
<!--    prevent,阻止默认事件的执行-->
    <form action="baidu">
      <input type="submit" @click.prevent="submitClick" value="提交">
    </form>
<!--    键盘的监听-->
    <input type="text" @keyup.enter="keyup">
<!--    once的使用，只监听一次-->
    <button @click.once="onceClick">按钮</button>
  </div>
    <script src = "../js/vue.js"></script>
    <script>
      new Vue({
        el: '#app',
        data: {
          message: 'hello Vuejs'
        },
        methods: {
          btnClick() {
            console.log("btnClick")
          },
          divClick(){
            console.log("divClick")
          },
          submitClick(){
            console.log("submitClick")
          },
          keyup(){
            console.log("keyup")
          },
          onceClick(){
            console.log("onceClick")
          }
        }
      })
    </script>
</body>

```

 - 运行截图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210202204126497.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
# 七、条件判断（v-if）
### 1.v-if&v-else if&v-else
 - 这三个指令与JavaScript的条件语句if、else if 、else类似
 - Vue的条件指令可以根据表达式的值在DOM中渲染或销毁元素和组件
 - v-if的原理：
    - v-if后面的条件为false时，对应的元素以及其子元素不会渲染
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>v-if&v-else-if&v-else</title>
</head>
<body>
  <div id = "app">
    <h2 v-if="score>=90">优秀</h2>
    <h2 v-else-if="score>=80">良好</h2>
    <h2 v-else-if="score>=70">一般</h2>
    <h2 v-else>及格</h2>
    <h1>{{result}}</h1>
  </div>
    <script src = "../js/vue.js"></script>
    <script>
      const app = new Vue({
        el: '#app',
        data: {
          score: 99
         },
         computed: {
          result(){
            let show;
            if(this.score>=90){
              show = '优秀'
            }else if(this.score>=80){
              show = '良好'
            }else if(this.score>=70){
              show = '一般'
            }else{
              show = '及格'
            }
            return show;
          }
         }
      })
    </script>
</body>
</html>
```
 - 运行截图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210202205713392.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
### 2.登录切换小案例
 - 当点击切换时，标签和输入框中的预输入内容会改变

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>v-if</title>
</head>
<body>
  <div id = "app">
<!--    小问题，由于vue底层渲染的时候时是会先渲染成虚拟DOM（出于性能的考虑），所以，当输入框中输入内容后，由于都存在这<label>和<input>标签，
        所以在切换时，在虚拟dom中只会改变标签的属性内容，而不会重新创建标签，所以浏览器输入的额内容会被保留下来。若不想被保留下来，则需要在标签
        中加入key属性用以区分
-->
    <span v-if="isUser">
      <label for="username">用户账号:</label>
      <input type="text" id="username" placeholder="用户账号" key="username">
    </span>
    <span v-else>
       <label for="user">用户邮箱:</label>
      <input type="text" id="user" placeholder="用户邮箱" key="user">
    </span>
    <button @click="toggle">切换登录</button>
  </div>
    <script src = "../js/vue.js"></script>
    <script>
      new Vue({
        el: '#app',
        data: {
          message: 'hello Vuejs',
          isUser: true
         },
         methods: {
          toggle(){
            this.isUser = !this.isUser
          }
         }
      })
    </script>
</body>
</html>
```

 - 运行截图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210202210106584.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210202210125756.png)
 - 小问题：
    - 如果我们在有输入内容的情况下，切换了类型，会发现文字依然显示之前输入的内容
    - 但是按道理讲应该切换到另一个input标签中了
    - 在另一个input元素中并没有输入内容
  
 - 问题解答：
	 - 这是因为Vue在进行DOM渲染的时候，处于性能的考虑，会尽可能地复用已经存在的元素，而不是重新创建新的元素
 - 解决方案：
    - 给对应的元素添加key属性
    - 并且需要保证key的不同
 - 未加key前
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210202210447221.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210202210522509.png)
### 3.v-show
 - v-show的用法与v-if非常相似，也用于决定一个元素是否渲染
 - v-show与v-if的对比
    - v-if条件为false时，压根不会有对应的元素在DOM中
    - v-show条件为false时，仅仅是将元素的display属性设置为none而已
  
 - 开发中应该如何选择
   - 当需要在隐藏和显示间切换频繁时，使用v-show
   - 当只有一次切换时，通常使用v-if

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<body>
  <div id = "app">
<!--    两者的区别，v-if为false，DOM中不存在<h2>标签，而v-show，Dom中存在<h2>标签，只是加了一个行内样式不显示出来-->
    <h2 id="aaa" v-if="isShow">{{message}}</h2>
    <h2 id="bbb" v-show="isShow">{{message}}</h2>
  </div>
    <script src = "../js/vue.js"></script>
    <script>
      const app = new Vue({
        el: '#app',
        data: {
          message: 'hello Vuejs',
          isShow: true
         }
      })
    </script>
</body>
</html>
```

 - 运行截图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210202212207783.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

# 八、循环遍历（v-for）
### 1.v-for

 - 当有一组数据需要进行渲染时，可以使用v-for来完成
 - v-for的语法类似与JavaScript的for循环
 - 格式如下：item in items 或 （item，index）in items
    - item为取得的值
    - index为对应的下标

遍历数组

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>v-for</title>
</head>
<body>
  <div id = "app">
    <ul>
      <li v-for="(item,index) in names">{{index+1}}.{{item}}</li>
    </ul>
  </div>
    <script src = "../js/vue.js"></script>
    <script>
      new Vue({
        el: '#app',
        data: {
          message: 'hello Vuejs',
          names: ['kobe','curry','james']
         }
      })
    </script>
</body>
</html>
```

 - 运行截图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210202212730295.png)
遍历对象

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>v-for</title>
</head>
<body>
  <div id = "app">
<!--    获取value值-->
    <ul>
      <li v-for="item in info" key="item">{{item}}</li>
    </ul>
<!--获取value 和 key的值，格式：（value，key）-->
    <ul>
      <li v-for="(value,key) in info">{{value}}-{{key}}</li>
    </ul>
    <!--获取value，key，index值-->
    <ul>
      <li v-for="(value,key,index) in info">{{value}}-{{key}}-{{index}}</li>
    </ul>
  </div>
    <script src = "../js/vue.js"></script>
    <script>
      new Vue({
        el: '#app',
        data: {
          message: 'hello Vuejs',
          info: {
            name: 'zhangsan',
            age: 15,
            height: 188
          }
         }
      })
    </script>
</body>
</html>
```

 - 运行截图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210202212831305.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
 - 小建议
为了DOM更高效的渲染，建议绑定一个:key来用以区分，如果不绑定key，则在插入内容时会一个一个地位移，性能不佳，绑定key后，会尽量先保证key的内容与标签的内容一致，这样插入数据是直接创建新的插入，性能较高

面试题：react和Vue中的key有什么作用?(key的内部原理)
1. 虚拟DOM中key的作用:
	- key是虚拟DOM对象的标识，当数据发生变化时，Vue会根据【新数据】生成【新的虚拟DOM】,随后Vue进行【新虚拟DOM】与【旧虚拟DOM】的差异比较。
2. 对比规则:
	- 旧虚拟DOM中找到了与新虚拟DOM相同的key:
		- 若虚拟DOM中内容没变,直接使用之前的真实DOM !
		- 若虚拟DOM中内容变了，则生成新的真实DOM。随后替换掉页面中之前的真实DOM
	- 旧虚拟DOM中未找到与新虚拟DOM相同的key
		- 创建新的真实DOM。随后渲染到到页面。
3. 用index作为key可能会引发的问题:
	- 若对数据进行:逆序添加、逆序剧除等破坏顺序操作:
		- 会产生没有必要的真实DOM更新==>界面效果没问题,但效率低。
	- 如果结构中还包含输入类的DOM:
		- 会产生错误DOM更新==>界面有问题。
4. 开发中如何选择key
	- 最好使用每条数据的唯一标识作为key，比如id、手机号、身份证号、学号等唯一值。
	- 如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，仅用于渲染列表用于展示，使用index作为key是没有问题的。

使用index作为key值可能出现的问题：
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Key的原理</title>
</head>

<body>
    <div id="app">
        <h2>人员列表</h2>
        <ul>
            <li v-for="(p,index) in persons" :key="index">
                {{p.name}}--{{p.age}}
                <input type="text">
            </li>
        </ul>
        <button @click="add">添加一个成员</button>
    </div>
    <script src="../js/vue.js"></script>
    <script>
        new Vue({
            el: '#app',
            data: {
                persons: [
                    { id: '001', name: '张三', age: 18 },
                    { id: '002', name: '李四', age: 19 },
                    { id: '003', name: '王五', age: 20 },
                ]
            },
            methods: {
                add(){
                    this.persons.unshift({id:'004',name:'赵六',age:21})
                }
            },
        })
    </script>
</body>

</html>
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210716115026599.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
使用数据的唯一标识作为key的值

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Key的原理</title>
</head>

<body>
    <div id="app">
        <h2>人员列表</h2>
        <ul>
            <li v-for="(p,index) in persons" :key="p.id">
                {{p.name}}--{{p.age}}
                <input type="text">
            </li>
        </ul>
        <button @click="add">添加一个成员</button>
    </div>
    <script src="../js/vue.js"></script>
    <script>
        new Vue({
            el: '#app',
            data: {
                persons: [
                    { id: '001', name: '张三', age: 18 },
                    { id: '002', name: '李四', age: 19 },
                    { id: '003', name: '王五', age: 20 },
                ]
            },
            methods: {
                add() {
                    this.persons.unshift({ id: '004', name: '赵六', age: 21 })
                }
            },
        })
    </script>
</body>

</html>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210716120142175.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
### 2.Vue监测数据（数据劫持）
#### （1）数据更新时的一个小问题

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>更新时的一个小问题</title>
</head>

<body>
    <div id="app">
        <h1>人员列表</h1>
        <ul>
            <li v-for='(p,index) in persons' :key="p.id">
                {{p.name}}-{{p.age}}-{{p.sex}}
            </li>
        </ul>
        <button @click='update'>更新张三信息</button>
    </div>
    <script src="../../js/vue.js"></script>
    <script>
       const vm =  new Vue({
            el: '#app',
            data: {
                persons: [
                    { id: '001', name: '张三', age: 18, sex: '男' },
                    { id: '002', name: '李四', age: 20, sex: '女' },
                    { id: '003', name: '王五', age: 19, sex: '女' },
                    { id: '004', name: '赵六', age: 21, sex: '男' },
                ]
            },
            methods: {
                update(){
                    // 可以修改页面信息,Vue可以监测到数据改变
                    // this.persons[0].name = '法外狂徒'
                    // this.persons[0].age = 30
                    // this.persons[0].sex = '女'

                    // Vue 不能监测到数据改变
                    this.persons[0] = { id: '001', name: '法外狂徒', age: 30, sex: '女' }
                }
            },
        })
    </script>
</body>

</html>
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210717180849433.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 通过这个小问题，我们就引出Vue是如何监测数据变化的
#### （2）Vue监测数据的原理（监测对象）
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210717201803978.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
模拟一个数据监测

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>模拟数据监测</title>
</head>
<body>
    <script src="../../js/vue.js"></script>
    <script>
        let data  = {
            name:'张三'
        }
        const obs = new Observe(data);
        //这里只模拟了一层，而Vue会进行递归，无论data中对象中再包含对象多少层都会为其进行数据监测，添加get和set，这就是Vue中监测对象数据的原理
        let vm = {}
        vm._data = data = obs
        function Observe(obj){
            const keys = Object.keys(obj)
            keys.forEach((k)=>{
                Object.defineProperty(this,k,{
                    get(){
                        return obj[k]
                    },
                    set(val){
                        console.log('data数据被改了');
                        obj[k] = val
                    }
                })
            })
        }
         // 不能这么写，这样会造成死循环
        // Object.defineProperty(data,'name',{
        //     get(){
        //         return data.name
        //     },
        //     set(val){
        //         data.name = val
        //     }
        // })
    </script>
</body>
</html>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210717204454525.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
#### （3）Vue.set()

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vue.set</title>
</head>
<body>
    <div id="app">
        <h1>学生信息</h1>
        <h3>姓名：{{student.name}}</h3>
        <h3 v-if='student.sex'>性别：{{student.sex}}</h3>
        <h3>年龄：{{student.age}}</h3>
        <h3>朋友们</h3>
        <button @click='add'>添加性别</button>
        <ul>
            <li v-for='(f,index) in student.friends' :key="index">{{f.name}}-{{f.age}}</li>
        </ul>
    </div>
    <script src="../../js/vue.js"></script>
    <script>
       const vm =  new Vue({
            el:'#app',
            data:{
                student:{
                    name:'张三',
                    age:18,
                    friends:[
                        {name:'tom',age:20},
                        {name:'bin',age:19}
                    ]
                }
            },methods: {
                add(){
                    Vue.set(this.student,'sex','男')
                }
            },
        })
    </script>
</body>
</html>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210717211150106.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210717213125319.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
#### （4）Vue监测数据的原理（监测数组）
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210717220043583.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

- 响应式数组的方法（可以被Vue监测数据的方法）

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<body>
  <div id = "app">
    <ul>
      <li v-for="item in letters">{{item}}</li>
    </ul>
    <button @click="toggle">按钮</button>
  </div>
    <script src = "../js/vue.js"></script>
    <script>
      new Vue({
        el: '#app',
        data: {
          message: 'hello Vuejs',
          letters: ['a','b','c','d']
         },
         methods: {
          toggle() {
            //响应式方法
            // //1.push从后面开始加入
            // this.letters.push("aaa")
            
            // //2.pop从后面开始删除
            // this.letters.pop()
            
            // //3.shift从前面开始删除
            // this.letters.shift()
            
            // // //4.unshift从前面开始加入
            // this.letters.unshift('aaa','bbb')
            
            // //5.splice 删除/插入/替换
            // //删除：第二个参数传入删除几个元素（不传的话则在开始后面的元素全部删除）
            // //替换：第二个参数传入删除几个元素，后面传入对应的元素用以替换
            // //插入：第二个参数为零，后面输入需要插入的元素（在开始元素后面插入）
            // this.letters.splice(2)
            
            // //6.sort 排序
            // this.letters.sort();
            // //reverse 反转
            // this.letters.reverse();

            // //vue内部实现的方式
            // Vue.set(this.letters,0,'bbb')

			
            //不是响应式的方法，更改不会被Vue监测到数据变化
            this.letters[0] = 'aaa'
			//filter等数组的高阶函数同样不是响应式的，不会被Vue监测到数据变化，
			//此时的解决方法是就其返回的数组替换掉原来的数组就可以被Vue监测到了
          }
         }
      })
    </script>
</body>
</html>
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210717220247718.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 至此，可以解释为什么当时数据更新的时候会出现小问题了
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210717220438592.png)
#### （5）Vue数据监测总结
Vue监视数据的原理:
- vue会监视data中所有层次的数据。
- 如何监测对象中的数据?
	- 通过setter实现监视，且要在new Vue时就传入要监测的数据。
	- 对象中后追加的属性，Vue默认不做响应式处理
	- 如需给后添加的属性做响应式,请使用如下API:
		- Vue.set(target.propertyName/index，value)或vm.\$set(target. propertyName /index,value)
- 如何监测数组中的数据?
	- 通过包裹数组更新元素的方法实现,本质就是做了两件事:
		- 调用原生对应的方法对数组进行更新。
		- 重新解析模板,进而更新页面。
- 在Vue修改数组中的某个元素一定要用如下方法:
	- 使用这些API: push()、pop()、shift()、unshift()、splice()、sort()、reverse()
	- Vue.set()或vm.\$set()
- 特别注意:Vue.set()和 vm.$set()不能给vm或vm的根数据对象添加属性!!!

### 3. v-for综合案例

 - 需求：要求在表格中显示书本的资料，书本的数量可以增加减少，也可以移除该书，这时总价格会随之变动，当书本都被移除，显示购物车中为空

index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div id="app">
    <div v-if="books.length">
      <table>
        <thead>
        <tr>
          <th></th>
          <th>书籍名称</th>
          <th>出版日期</th>
          <th>价格</th>
          <th>购买数量</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item,index) in books">
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
          <td>{{item.date}}</td>
          <td>{{item.price | showPrice}}</td>
          <td>
            <button :disabled="item.count<=1" @click="decrement(index)">-</button>
            {{item.count}}
            <button @click="increment(index)">+</button>
          </td>
          <td><button @click="removeBook(index)">移除</button></td>
        </tr>
        </tbody>
      </table>
      <h2>总价格：{{totalPrice | showPrice}}</h2>
    </div>
    <div v-else><h2>购物车为空</h2></div>
  </div>
  <script src="../js/vue.js"></script>
  <script src="main.js"></script>
</body>
</html>
```
style.css

```css
table{
    border: 1px solid gray;
    border-collapse: collapse;
    border-spacing: 0;
}
th,td{
    padding: 8px 16px;
    border: 1px solid gray;
    text-align: left;
}
th{
    background-color: green;
    color: aliceblue;
    font-weight: 600;
}
```
main.js

```javascript
const app = new Vue({
  el:'#app',
  data: {
    books: [
      {
        id: 1,
        name: '数据库',
        date: '2008-06',
        price: 100,
        count: 1
      },
      {
        id: 2,
        name: 'java',
        date: '2010-06',
        price: 59.6,
        count: 1
      },
      {
        id: 3,
        name: '计算机网络',
        date: '2018-06',
        price: 200.5,
        count: 1
      },
      {
        id: 4,
        name: '计算机原理',
        date: '2009-06',
        price: 125,
        count: 1
      }
    ],
  },
  methods:{
  //   getPrice(price) {
  //     return '￥'+price.toFixed(2)
  //   }
    increment(index) {
        this.books[index].count++
    },
    decrement(index) {
        this.books[index].count--
    },
    removeBook(index) {
      this.books.splice(index,1)
    }
   },
  filters:{
    showPrice(price) {
      return '￥'+price.toFixed(2)
    }
  },
  computed: {
    totalPrice(){
      // let total = 0
      // //普通for
      // for (let i = 0;i<this.books.length;i++){
      //   total+=this.books[i].price * this.books[i].count
      // }
      // // //增强for
      // // for (let i in this.books){
      // //   total+=this.books[i].price * this.books[i].count
      // // }
      // // for (let i of this.books){
      // //   total+=i.price * i.count
      // // }
      // return total
      //高阶函数的使用
      return this.books.reduce(function (pre,book) {
        return pre + book.price * book.count
      },0)
    }
  }
})


```

 - 运行截图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210202213957802.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210202214035606.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210202214100424.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
 - 拓展，JavaScript高阶函数的使用
```javascript
const num = [10,20,30,40,50,500]
//普通js函数
//1.需求：取出所有小于100的数字
let newnum = []
for (let n of newnum){
  if(n<100){
    newnum.push(n);
  }
}
//2.需求：将所有小于100的数进行转化：全部*2
let newnum2 = []
for(let n of newnum){
  newnum2.push(n*2);
}
//3.需求：将*2的数全部相加，得到最终结果
let total = 0
for(let n of newnum2){
  total += n
}
console.log(total);

//2.高阶函数
//filter、map、reduce
/*
  filter中的回调函数有一个要求：必须返回一个Boolean值，
  true时，函数内部自动将这次回调的n加入到新的数组中，
  false时，函数内部会过滤掉这次的n

  map可以使数组中所有的数都变化

  reduce对数组的所有内容进行汇总
*/
let total = num.filter(function (n) {
  return n < 100
}).map(function (n) {
  return n *2
}).reduce(function (preValue,n) {
  return preValue + n
},0)
console.log(total);
//3.箭头函数写法
let total1 = num.filter(n => n<100).map(n => n*2).reduce((preValue,n )=> preValue + n)
console.log(total1);
```

# 九、过滤器（filters）
### 1.过滤器filters定义
- 定义:对要显示的数据进行特定格式化后再显示（适用于一些简单逻辑的处理)。

### 2.语法
-  注册过滤器: Vue.filter(name,callback)（全局过滤器）或new Vue({filters:{}})(局部过滤器)
- 使用过滤器: {{ xxx | 过滤器名 }}或 v-bind:属性=“xxx│过滤器名"

### 3.备注
- 过滤器也可以接收额外参数、多个过滤器也可以串联
- 并没有改变原本的数据,是产生新的对应的数据

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>过滤器</title>
</head>
<body>
    <div id="app">
        <h2>现在是：{{time | timeFormat}}</h2>

        <h2>现在是：{{time | timeFormat('YYYY_MM_DD')}}</h2>

        <h2>现在是：{{time | timeFormat('YYYY_MM_DD') | mySlice}}</h2>

        <h3 :a='msg | mySlice'></h3>
    </div>
    <script src="../js/vue.js"></script>
    <script src="https://cdn.bootcdn.net/ajax/libs/dayjs/1.10.6/dayjs.min.js"></script>
    <script>
        Vue.filter('mySlice',(value)=>{
            return value.slice(0,4)
        })
        new Vue({
            el:'#app',
            data:{
                time: 1626438861353,
                msg:'123456'
            },
            filters:{
                timeFormat(value,str='YYYY-MM-DD HH:mm:ss'){
                    return dayjs(value).format(str)
                }
            }
        })
    </script>
</body>
</html>
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210716210708455.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

# 十、v-model
### 1.v-model的使用
 - Vue中使用v-model指令来实现表单元素和数据的双向绑定
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>v-model的使用</title>
</head>
<body>
<div id = "app">
  <input type="text" v-model="message"><br>
 {{message}}
</div>
<script src = "../js/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      message: 'hello Vuejs'
     }
  })
</script>
</body>
</html>
```
 - 程序分析
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210203111839587.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
 - 运行截图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210203111914858.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210203112056251.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210203121857849.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

### 2.v-model的原理
 - v-model其实是一个语法糖，它背后本质是包含两个操作
 1. v-bind绑定一个value属性
 2. v-on指令给当前元素绑定input事件
 3. 也就是说

```html
<!--v-model等同于以下-->
<!--model的原理-->
<input type="text" :value="message1" v-on:input="message1 = $event.target.value"><br>
{{message1}}
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>v-model的原理</title>
</head>
<body>
<div id="app">
<!--v-model-->
<input type="text" v-model="message"><br>
{{message}}
  <hr>
<!--v-model的原理-->
<input type="text" :value="message1" v-on:input="message1 = $event.target.value"><br>
{{message1}}
</div>
<script src = "../js/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      message: 'hello Vuejs',
      message1: "hello"
    }
  })
</script>
</body>
</html>
```

 - 程序分析
![在这里插入图片描述](https://img-blog.csdnimg.cn/202102031139434.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

 - 运行截图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210203114022994.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210203114156710.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210203122027363.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

### 3.v-model结合radio使用

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>v-model结合radio</title>
</head>
<body>
<div id = "app">
  <input type="radio" value="男" name="sex" v-model="sex">男
  <input type="radio" value="女" name="sex" v-model="sex">女
  <h2>您选择的性别是：{{sex}}</h2>
</div>
<script src = "../js/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      message: 'hello Vuejs',
      sex: '男'
     }
  })
</script>
</body>
</html>
```

 - 程序分析
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210203120427226.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
 - 运行截图
![在这里插入图片描述](https://img-blog.csdnimg.cn/2021020312050495.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/202102031205310.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210203120635326.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
### 4.v-model结合checkbox使用

 - checkbox可分为单选框和复选框

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>v-model结合checkbox</title>
</head>
<body>
<div id = "app">
<!-- 单选框-->
  <label for="agree">
    <input type="checkbox" id="agree" v-model="isAgree">同意协议
  </label>
  <h2>您的选择是：{{isAgree}}</h2>
  <button :disabled="!isAgree">下一步</button>
  <hr>
<!--  复选框-->
  <input type="checkbox" value="篮球" v-model="hobbies">篮球
  <input type="checkbox" value="足球" v-model="hobbies">足球
  <input type="checkbox" value="羽毛球" v-model="hobbies">羽毛球
  <input type="checkbox" value="乒乓球" v-model="hobbies">乒乓球
  <h2>{{hobbies}}</h2>
</div>
<script src = "../js/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      message: 'hello Vuejs',
      isAgree: false,
      hobbies: []
     }
  })
</script>
</body>
</html>
```

 - 程序分析
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210204105510595.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
 - 运行截图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210204105609743.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210204105653917.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
### 5.v-model结合select使用
 - 和checkbox一样也是分为选择一个和选择多个、

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>v-model结合select使用</title>
</head>
<body>
<div id = "app">
<!--选择一个-->
  <select name="fruit" id="fruit" v-model="fruit">
    <option value="苹果">苹果</option>
    <option value="香蕉">香蕉</option>
    <option value="葡萄">葡萄</option>
    <option value="雪梨">雪梨</option>
  </select>
  <h2>您选择的水果是：{{fruit}}</h2>
<!--  选择多个-->
  <select name="fruit" id="fruits" v-model="fruits" multiple>
    <option value="苹果">苹果</option>
    <option value="香蕉">香蕉</option>
    <option value="葡萄">葡萄</option>
    <option value="雪梨">雪梨</option>
  </select>
  <h2>您选择的水果是：{{fruits}}</h2>
</div>
<script src = "../js/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      message: 'hello Vuejs',
      fruit: '香蕉',
      fruits: []
     }
  })
</script>
</body>
</html>
```

 - 程序分析
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210204110835761.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
 - 运行截图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210204110941254.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210204111051781.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
### 6.input的值绑定
 - 本质就是利用v-for和v-bind动态决定对应得选项
```html
<label for="input" v-for="item in originHobbies">
    <input type="checkbox" id="input" :value="item" v-model="hobbies">{{item}}
  </label>
```
### 7.v-model的修饰符
 - lazy修饰符
    - 默认情况下，v-model默认是在input事件中同步输入框的数据的
    - 一旦有数据改变，对应的data中的数据也会发生改变
    - lazy修饰符可以让数据在失去焦点或回车时才更新
 - number修饰符
    - 默认情况下，在输入框中无论我们输入的是字母还是数字，都会被当作字符串来处理
    - number修饰符可以让在输入框中输入的内容自动转为数字类型
 - trim修饰符
   - 如果输入的内容首尾有很多的空格，通常我们希望将其去除
   - trim修饰符可以过滤内容左右两边的空格

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>v-model修饰符</title>
</head>
<body>
<div id = "app">
<!--  lazy修饰符-->
  <input type="text" v-model.lazy="message">
 <h2>{{message}}</h2>
  <hr>
<!--  number-->
  <input type="number" name="1" v-model="age">
  <h2>{{age}}-{{typeof age}}</h2>

  <input type="number" name="2" v-model.number="age1">
  <h2>{{age1}}-{{typeof age1}}</h2>
  <hr>
<!-- trim -->
  <input type="text" name="1" v-model="name">

  <input type="`text" name="2" v-model.trim="name1">
</div>
<script src = "../js/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      message: 'hello Vuejs',
      age: 0,
      age1:0,
      name:'',
      name1:''
     }
  })
</script>
</body>
</html>
```

   - 运行截图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210204114413381.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
# 十一、自定义指令
- 前面所学习的各种以 v- 开头的指令都属于Vue的内置指令，当然我们也可以自定义相应的指令来完成一些功能。
### 1.定义语法:
- 局部指令:
	- new Vue({directives{指令名:配置对象}})或者 new Vue({directives{指令名:回调函数}})
- 全局指令:
	- Vue.directive(指令名,配置对象）或 Vue.directive(指令名,回调函数)
### 2.配置对象中常用的3个回调（类似于生命周期函数）
- bind:指令与元素成功绑定时调用。
- inserted:指令所在元素被插入页面时调用。
- update:指令所在模板结构被重新解析时调用。
### 3.备注
- 指令定义时不加v-,但使用时要加v-;
- 指令名如果是多个单词，要使用kebab-case（分隔符）命名方式，不要用camelCase（驼峰）命名，在指定时需要加上引号。

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>自定义指令</title>
</head>

<body>
    <!-- 
        需求1:定义一个v-big指令，和v-text功能类似，但会把绑定的数值放大10倍.一个v-big-number指令，放大
                100倍
        需求2:定义一个v-fbind指令，和v-bind功能类似，但可以让其所绑定的input元素默认获取焦点。
 -->
    <div id="app">
        <h2>现在的数是：<span v-text="n"></span></h2>
        <h2>10倍的数是：<span v-big="n"></span></h2>
        <h2>100倍的数是：<span v-big-number="n"></span></h2>
        <input type="text" v-fbind:value="n"><br><br>
        <button @click='n++'>+1</button>
    </div>
</body>
<script src="../js/vue.js"></script>
<script>
    //全局写法
    // Vue.directive('big',(element, binding)=>{
    //     console.log("对象式", this);
    //     element.value = binding.value
    // })
    new Vue({
        el: '#app',
        data: {
            n: 1
        },
        directives: {
            //函数式指令
            // 函数什么时候执行：1、指令与元素成功绑定时 2、指令所在模板被重新解析时
            big(element, binding) {
                // console.log("函数式", this);
                // console.log(element);
                // console.log(binding);
                element.innerText = binding.value * 10;
            },
            'big-number'(element, binding) {
                element.innerText = binding.value * 100;
            },
            fbind: {
                // 一绑定就调用
                bind(element, binding) {
                    // console.log("对象式", this);
                    element.value = binding.value
                },
                //当元素插入到页面上时调用
                inserted(element, binding) {
                    element.focus()
                },
                //指令所在模板被重新解析时
                update(element, binding) {
                    element.value = binding.value
                    element.focus()
                },
            }
        }
    })
</script>

</html>
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210716222723600.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

# 十二、组件化开发
- 组件的定义：实现应用中局部功能代码和资源的集合
### 1.什么是组件化
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210204115256872.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

### 2.Vue的组件化思想

 - 组件化是Vue.js中的重要思想
    - 它提供了一种抽象，让我们可以开发出一个个独立可复用的小组件来构造我们的应用
    - 任何的应用都会被抽象成一棵组件树
    ![在这里插入图片描述](https://img-blog.csdnimg.cn/20210204120102541.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
### 3.注册组件的基本步骤
 - 组件的使用分成三个步骤
    - 创建组件构造器 (调用Vue.extend()方法)
    - 注册组件（调用Vue.component()方法）
    - 使用组件（在Vue实例的作用范围内使用组件）
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>组件化的基本使用</title>
</head>
<body>
<div id = "app">
<!-- 3.使用组件-->
  <my-cpn></my-cpn>
  <my-cpn></my-cpn>
  <my-cpn></my-cpn>
</div>
<script src = "../js/vue.js"></script>
<script>
  //1.创建组件构造器对象
  //ES6语法补充，当使用 '' 或 "" 时，换行需要用 + 来连接，在ES6中使用 `` 来连接换行不需要，结构更清晰
  const cpnC = Vue.extend({
    template: `
      <div>
        <h2>我是标题</h2>
        <p>我是内容</p>
      </div> `
  })
  //2.注册组件
  Vue.component('my-cpn',cpnC)

  const app = new Vue({
    el: '#app',
    data: {
      message: 'hello Vuejs'

     }
  })
</script>
</body>
</html>
```

 - 程序分析
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210204134803914.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

 - 运行截图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210204134820820.png)
### 4.全局组件和局部组件

 - 当我们通过调用Vue.component()注册组件时，组件的注册是全局的（这意味者该组件可以在任意的Vue示例下使用）
 - 如果我们注册的组件是挂载在某一个实例中，那么就是一个局部组件

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>全局组件和局部组件</title>
</head>
<body>
<div id = "app">
  <!-- 3.使用组件-->
  <my-cpn></my-cpn>
  <cpn></cpn>
</div>
<div id="app2">
  <my-cpn></my-cpn>
  <cpn></cpn>
</div>
<script src = "../js/vue.js"></script>
<script>
  //1.创建组件构造器对象
  //ES6语法补充，当使用 '' 或 "" 时，换行需要用 + 来连接，在ES6中使用 `` 来连接换行不需要，结构更清晰
  const cpnC = Vue.extend({
    template: `
      <div>
        <h2>我是标题</h2>
        <p>我是内容</p>
      </div> `
  })
  const cpnC1 = Vue.extend({
    template: `
      <div>
        <h2>我是标题</h2>
        <p>我是内容,局部组件测试</p>
      </div> `
  })
  //2.注册组件（全局组件）
  Vue.component('my-cpn',cpnC)

  const app = new Vue({
    el: '#app',
    data: {
      message: 'hello Vuejs'
    },
    components: {
      cpn: cpnC1
    }
  })

  const app2 = new Vue({
    el: '#app2'
  })
</script>
</body>
</html>
```

 - 程序分析
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210204140521508.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
 - 运行截图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210204140748122.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
### 5.组件的几个注意点
1. 关于组件名: 
	- 一个单词组成:
		- 第一种写法(首字母小写):school
		- 第二种写法(首字母大写):School
	- 多个单词组成:
		- 第一种写法(kebab-case命名): my-school（需要加上引号修饰）
		- 第二种写法(CamelCase命名):MySchool（需要Vue脚手架支持)
	- 备注:
		- 组件名尽可能回避HTML中已有的元素名称，例如:h2、H2都不行。
		- 可以使用name(组件中的属性)配置项指定组件在开发者工具中呈现的名字。
2. 关于组件标签;
	- 第一种写法:\<school>\</school>
	- 第二种写法:\<school/>
	- 备注:不用使用脚手架时，\<school/>会导致后续组件不能渲染。
3. 一个简写方式:
	- const school = Vue.extend(options）可简写为: const school = options

### 6.父组件和子组件

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>父组件和子组件</title>
</head>
<body>
<div id = "app">
  <!-- 3.使用组件-->
  <cpn2></cpn2>
<!--  <cpn1></cpn1>-->
</div>
<script src = "../js/vue.js"></script>
<script>
  //1.创建第一个组件构造器对象（子组件）
  const cpnC1 = Vue.extend({
    template: `
      <div>
        <h2>我是标题1(子组件)</h2>
        <p>我是内容</p>
      </div> `
  })
  //2.创建第二个组件构造器对象（父组件）
  const cpnC2 = Vue.extend({
    template: `
      <div>
        <h2>我是标题2(父组件)</h2>
        <p>我是内容</p>
        <cpn1></cpn1>
      </div> `,
    components:{
      cpn1:cpnC1
    }
  })
  const app = new Vue({
    el: '#app',
    data: {
      message: 'hello Vuejs'
    },
    components: {
      cpn2:cpnC2
    }
  })
</script>
</body>
</html>
```

 - 程序分析
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210204142818187.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
 - 运行截图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210204142836343.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
### 7.注册组件语法糖
 - 之前注册组件的方式可能会有些繁琐
   - Vue为了简化这个过程，提供了注册的语法糖
   - 主要是省去了调用Vue.extend()的步骤，而是可以直接使用一个对象来代替

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>注册组件的语法糖</title>
</head>
<body>
<div id = "app">
 <cpn1></cpn1>
  <cpn2></cpn2>
</div>
<script src = "../js/vue.js"></script>
<script>
  Vue.component("cpn1",{
    template: `
      <div>
        <h2>我是标题1</h2>
        <p>我是内容</p>
      </div> `
  })
  const app = new Vue({
    el: '#app',
    data: {
      message: 'hello Vuejs'
     },
     components: {
      cpn2:{
        template: `
          <div>
            <h2>我是标题2</h2>
            <p>我是内容</p>
          </div> `
      }
    }
  })
</script>
</body>
</html>
```

 - 运行截图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210204145938755.png)
### 8.关于VueComponent
- 组件本质是一个名为VueComponent的构造函数，且不是程序员定义的，是Vue.extend生成的。
- 我们只需要写\<school/>或\<school>x\</school>，Vue解析时会帮我们创建school组件的实例对象,即Vue帮我们执行的:new VueComponent(options)。
- 特别注意:每次调用Vue.extend，返回的都是一个全新的VueComponent!!!!
- 关于this指向:
	- 组件配置中:
	data函数、methods中的函数、watch中的函数、computed中的函数它们的this均是【VueComponent实例对象】。
	 - new Vue()配置中:
	data函数、methods中的函数、watch中的函数、computed中的函数它们的this均是【Vue实例对象】。
- VueComponent的实例对象，简称vc（也可称之为:组件实例对象）。
- Vue的实例对象，简称vm。
### 9.一个重要的内置关系
- 一个重要的内置关系:VueComponent.prototype.\__proto__ === Vue.prototype
- 为什么要有这个关系:让组件实例对象(vc）可以访问到 Vue原型上的属性、方法。
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210718000752134.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>一个重要的内置关系</title>
</head>

<body>
    <div id="app">
        <student></student>
    </div>
    <script src="../js/vue.js"></script>
    <script>
        Vue.prototype.x = 99
        const student = Vue.extend({
            template: `
                <div>
                    <h1>{{name}}</h1>
                    <button @click='show'>点击</button>
                </div>
            `,
            data() {
                return {
                    name: '张三'
                }
            },
            methods: {
                show(){
                  console.log(this.x);  
                }
            },
        })

       const vm =  new Vue({
            el: '#app',
            components: {
                student
            }
        })
    </script>
</body>

</html>
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210718002138134.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

### 10.模板的分离写法
 - Vue提供了两种方案来定义HTML模板内容：
   - 使用 <script\>标签
   - 使用<template\>标签

全局组件模板
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>组件模板分离</title>
</head>
<body>
<div id = "app">
  <cpn1></cpn1>
  <cpn2></cpn2>
</div>
<!--第一种写法-->
<script type="text/x-template" id="cpn1">
<div>
  <h2>我是标题1</h2>
  <p>我是内容</p>
</div>
</script>
<!--第二种写法-->
<template id="cpn2">
  <div>
    <h2>我是标题2</h2>
    <p>我是内容</p>
  </div>
</template>
<script src = "../js/vue.js"></script>
<script>
  Vue.component('cpn1',{template:'#cpn1'})
  Vue.component('cpn2',{template:'#cpn2'})
  const app = new Vue({
    el: '#app',
    data: {
      message: 'hello Vuejs'

     }
  })
</script>
</body>

```

 - 程序分析
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210204151654806.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
 - 运行截图
 ![在这里插入图片描述](https://img-blog.csdnimg.cn/20210204151716251.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

局部组件模板

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>组件模板分离</title>
</head>
<body>
<div id = "app">
  <cpn1></cpn1>
  <cpn2></cpn2>
</div>
<!--第一种写法-->
<script type="text/x-template" id="cpn1">
<div>
  <h2>我是标题1</h2>
  <p>我是内容</p>
</div>
</script>
<!--第二种写法-->
<template id="cpn2">
  <div>
    <h2>我是标题2</h2>
    <p>我是内容</p>
  </div>
</template>
<script src = "../js/vue.js"></script>
<script>
  // Vue.component('cpn1',{template:'#cpn1'})
  // Vue.component('cpn2',{template:'#cpn2'})
  const cpn1 = {
    template: '#cpn1'
  }
  const cpn2 = {
    template: '#cpn2'
  }
  const app = new Vue({
    el: '#app',
    data: {
      message: 'hello Vuejs'
     },
     components: {
      cpn1,
      cpn2
     }
  })
</script>
</body>
</html>
```

### 11.组件数据的存放

 - 组件可以访问Vue实例数据吗？
 - 不可以，Vue组件应该有自己保存数据的地方
 - 组件是一个单独功能的封装
 - 这个模块有属于自己的HTML模板，也应该有属于自己的数据data
 - 组件自己的数据存放在哪里呢？
    - 组件对象也有一个data属性（也可以有methods等属性）
    - 这个data属性必须是一个函数（**重点注意其原因**）
    - 而且这个函数返回一个对象，对象内部保存着数据
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>组件数据的存放</title>
</head>
<body>
<div id = "app">
 <cpn></cpn>
 <cpn></cpn>
</div>
<template id="cpn">
  <div>
    <h2>当前计数为：{{counter}}</h2>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>
<script src = "../js/vue.js"></script>
<script>
  Vue.component("cpn",{
    template:'#cpn',
    data() {
      return{
        counter: 0
      }
    },
    methods: {
      increment() {
        this.counter++
      },
      decrement(){
        this.counter--
      }
    }
  })
  const app = new Vue({
    el: '#app',
    data: {
      message: 'hello Vuejs'
     }
  })
</script>
</body>
</html>
```
 - 程序分析
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210204155449927.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
 - 运行截图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210204155552133.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
### 12.父子组件的通信
 - 在开发中，往往一些数据确实需要从上层传递到下层：
    - 比如在一个页面中，从服务器请求到了很多的数据
    - 其中一部分的数据，并非是我们整个页面的大组件来展示的，而是需要下面的子组件进行展示
    - 这个时候并不会让子组件再次发送一个网络请求，而是直接让大组件（父组件）将数据传递给小组件（子组件）
 - 如何进行父子间的通信，Vue官方提到：
    - 通过props向子组件传递数据
   - 通过事件向父组件发送消息
 - 真实开发中，Vue实例和子组件的通信与父组件和子组件的通信过程是一样的
![在这里插入图片描述](https://img-blog.csdnimg.cn/2021020416274318.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
#### （1）父传子- props基本用法
 - 在组件中，使用选项props来声明需要从父级接收到的数据

 props的值有两种方式：

  - 方式一：字符串数组，数组中的字符串就是传递时的名称（较少用）

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>组件间通信-父传子</title>
</head>
<body>
<div id = "app">
 <cpn :cmovies="movies" :cmessage="message"></cpn>
  <cpn cmovies="movies" cmessage="message"></cpn>
</div>
<template id="cpn">
  <div>
    {{cmovies}}<br>
    <h2>{{cmessage}}</h2>
  </div>
</template>
<script src = "../js/vue.js"></script>
<script>
// 父传子props
  const cpn = {
    template: '#cpn',
    //字符串数组
    props:['cmovies','cmessage']
  }
  const app = new Vue({
    el: '#app',
    data: {
      message: 'hello Vuejs',
      movies: ['大话西游','美国队长','闻香识女人','海王']
     },
    components: {
      cpn
    }
  })
</script>
</body>
</html>
```

 - 程序分析
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210204165105661.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
 - 运行截图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210204165654384.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 方式二：对象，对象可以设置传递时的类型，也可以设置默认值等 
 - 当需要对props进行类型等验证时，就需要对象写法了
 - 验证支持的类型：
   - String
   - Number
   - Boolean
   - Array
   - Object
   - Date
   - Function
   - Symbol
 - 当有自定义构造函数时，验证也支持自定义的类型

```javascript
Vue.component( 'my-component',{
  props: {
    //基础的类型检查("null" 匹配任何类型)
    propA: Number,
    
    //多个可能的类型
    propB: [String, Number],
    
    //必填的字符串
    propc: {
      type: String,
      required: true,
    },
    
    //带有默认值的数字
    propD: {
      type: Number,
      default: 1003
    },
    
    //带有默认值的对象
    propE: {
      type: object,
      //对象或数组默认值必须从一个工厂函数获取
      default: function () {
        return {message: 'he11o'}
      }
    },
    
    //自定义验证函数
    propF: {
      validator: function (value) {
        //这个值必须匹配下列字符串中的一个
        return ['success ', 'warning', 'danger'].indexof(value) !== -1
      }
    }
    
  }
})
//自定义构造函数,自定义类型
function Person (firstName,lastName) {
  this.firstName = firstName
  this.lastName = lastName
}
vue. component('blog-post', {
  props: {
  author: Person
 }
})
```

 - 程序：

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>组件间通信-父传子</title>
</head>
<body>
<div id = "app">
 <cpn :cmovies="movies"></cpn>
</div>
<template id="cpn">
  <div>
    {{cmovies}}<br>
    <h2>{{cmessage}}</h2>
  </div>
</template>
<script src = "../js/vue.js"></script>
<script>
// 父传子props
  const cpn = {
    template: '#cpn',
    //字符串数组
   // props:['cmovies','cmessage']
    //对象
    props:{
      //1.类型限制
      // cmovies: Array,
      // cmessage: String,
      //2.提供一些默认值，以及必传值
      cmessage:{
        type:String,//默认类型
        default: '哈哈哈',//没有传入变量时，默认值为哈哈哈
        required: true//在使用时，必须传入这个变量
      },
      //类型是对象或者数组时，默认值必须是一个函数
      cmovies:{
        type:Array,
       default(){
          return []
       }
      }
    }
  }
  const app = new Vue({
    el: '#app',
    data: {
      message: 'hello Vuejs',
      movies: ['大话西游','美国队长','闻香识女人','海王']
     },
    components: {
      cpn
    }
  })
 </script>
</body>
</html>
```

 - 程序分析
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210204173810387.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
 - 运行截图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210204173939812.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
 - props驼峰标识

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>驼峰标识</title>
</head>
<body>
<div id = "app">
 <cpn :c-info="info"></cpn>
</div>

<template id="cpn">
  <div>
    <h2>{{cInfo}}</h2>
  </div>
</template>

<script src = "../js/vue.js"></script>
<script>
  const cpn = {
    template: '#cpn',
    props: {
      cInfo: {
        type:Array,
        default(){
          return {}
        }
      }
    }
  }
  const app = new Vue({
    el: '#app',
    data: {
      message: 'hello Vuejs',
      info: {
        name:'张三',
        age:18,
        height:188,
      }
     },
    components: {
      cpn
    }
  })
</script>
</body>
</html>
```

 - 程序分析
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210204180851454.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
 - 运行截图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210204180911868.png)
- 注意: props是只读的，Vue底层会监测你对props的修改，如果进行了修改，就会发出警告，若业务需求确实需要修改。那么请复制props的内容到data中一份，然后去修改data中的数据。

#### （2）子传父（通过自定义事件）
 - 什么时候需要自定义事件？
   - 当子组件需要向父组件传递数据时，就要用到自定义事件了
   - v-on不仅仅可以用于监听DOM事件，也可以用于监听组件间的自定义事件
 - 自定义事件的流程
   - 在子组件中，通过$emit()来触发事件
   - 在父组件中，通过v-on来监听子组件事件
- 解绑自定义事件
	- 在子组件中，通过$off对自定义事件解绑
	- 传入自定义事件名称，可以解绑当前自定义事件（单个）
	- 传入自定义事件名称的数组，可以解绑数组中的自定义事件（多个） 
	- 不传入参数解绑所有自定义事件（多个）
- 若想让自定义事件只能触发一次，可以使用once修饰符，或 $once方法


```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>组件间通信-子传父</title>
</head>
<body>
<div id = "app">
 <cpn @itemclick="click"></cpn>
</div>
<template id="cpn">
  <div>
    <button v-for="item in categories" @click="btnClick(item)">{{item.name}}</button>
  </div>
</template>
<script src = "../js/vue.js"></script>
<script>
  const cpn = {
    template: '#cpn',
    data(){
      return {
        categories:[
          {id:'aaa',name:'手机数码'},
          {id:'bbb',name:'家用电器'},
          {id:'ccc',name:'生活用品'},
          {id:'ddd',name:'柴米油盐'}
        ]
      }
    },
    methods:{
      btnClick(item){
        //发射
        this.$emit('itemclick',item)
      }
    }
  }
  const app = new Vue({
    el: '#app',
    data: {
      message: 'hello Vuejs'
     },
    components: {
      cpn
    },
    methods: {
     click(item){
       console.log('子传父数据',item)
     }
    }
  })
</script>
</body>

```

 - 程序分析
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210204212322799.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
 - 运行截图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210204212456385.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
#### （3）子传父（通过props传入方法）
- 通过props接收父组件给子组件传入的函数（方法），在子组件中接收并调用该函数，传入参数，在父组件中就能接收到子组件传入的参数，达到子组件向父组件传递数据

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>组件间通信-子传父</title>
</head>

<body>
    <div id="app">
        <cpn :data='data'></cpn>
    </div>

    <template id="cpn">
        <div>
            <button v-for="item in categories" @click="btnClick(item)">{{item.name}}</button>
        </div>
    </template>
    <script src="../js/vue.js"></script>
    <script>
        const cpn = {
            template: '#cpn',
            data() {
                return {
                    categories: [
                        { id: 'aaa', name: '手机数码' },
                        { id: 'bbb', name: '家用电器' },
                        { id: 'ccc', name: '生活用品' },
                        { id: 'ddd', name: '柴米油盐' }
                    ]
                }
            },
            props: ['data'],
            methods: {
                btnClick(item) {
                    this.data(item)
                }
            },
        }
        const app = new Vue({
            el: '#app',
            data: {
                message: 'hello Vuejs'
            },
            components: {
                cpn
            },
            methods: {
                data(item) {
                    console.log('子传父数据', item)
                }
            }
        })
    </script>
</body>

</html>
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210719111259547.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210719110507517.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
### 13.任意组件间的通信（兄弟组件间的通信）
- 前面已经讲到父子组件间可以相互通信，但是如果两个组件不是父子组件，而是兄弟组件呢？它们应该怎么进行通信？
#### （1）全局事件总线
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210719170415461.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>组件间通信-兄弟组件间通信（事件总线）</title>
</head>

<body>
    <div id="app">
        <h1>组件1</h1>
        <cpn></cpn>
        <h1>组件2</h1>
        <cpn1></cpn1>
    </div>

    <template id="cpn">
        <div>
            <button v-for="item in categories" @click="btnClick(item)">{{item.name}}</button>
        </div>
    </template>
    <template id="cpn1">
        <div>
            <button v-for="person in persons">{{person.name}}</button>
        </div>
    </template>
    <script src="../js/vue.js"></script>
    <script>
        const cpn = {
            template: '#cpn',
            data() {
                return {
                    categories: [
                        { id: '001', name: '手机数码' },
                        { id: '002', name: '家用电器' },
                        { id: '003', name: '生活用品' },
                        { id: '004', name: '柴米油盐' }
                    ]
                }
            },
            // mounted() {
            //     this.$bus.$on('data', (data) => {
            //         console.log('组件1收到组件2的数据：', data);
            //     })
            // },
            //  beforeDestroy() {
            //     this.$bus.$off('data')
            // },
            methods: {
                btnClick(item) {
                    this.$bus.$emit('data1',item)
                }
            },
        }
        const cpn1 = {
            template: "#cpn1",
            data() {
                return {
                    persons: [
                        { id: '001', name: '张三' },
                        { id: '002', name: '李四' },
                        { id: '003', name: '王五' },
                    ]
                }
            },
            mounted() {
                this.$bus.$on('data1',(data)=>{
                    console.log('组件2收到组件1的数据：',data);
                })
            },
            beforeDestroy() {
                this.$bus.$off('data1')
            },
            // methods: {
            //     btnClick(item) {
            //         this.$bus.$emit('data', item)
            //     }
            // },
        }
        new Vue({
            el: '#app',
            data: {
                message: 'hello Vuejs'
            },
            components: {
                cpn,
                cpn1
            },
            beforeCreate() {
                Vue.prototype.$bus = this
            },
        })
    </script>
</body>

</html>
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210719171333716.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210719171530826.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
#### （2）消息订阅发布
- 消息订阅与发布(pubsub)（在任意框架中都能使用，属于第三方插件，在vue中一般使用全局事件总线较多）
	- —种组件间通信的方式，适用于任意组件间通信。
- 使用步骤（需要安装Node环境，在脚手架中使用，不在脚手架中使用，需要安装babel插件解析ES6语法才能使用）
	- 安装pubsub: npm i pubsub-js
	- 引入: import pubsub from 'pubsub-js'
- 接收数据:
	- A组件想接收数据，则在A组件中订阅消息，订阅的回调留在A组件自身。
```javascript
methods(){
demo(data){......}
......
mounted() {
	返回值 = pubsub.subscribe( '订阅的消息名称' ,(msg,data)=>{
		//msg是消息名称，data是接收的数据
	})//订阅消息
}
```
- 提供数据:

```javascript
//发布消息
 pubsub.publish( '发布的消息名称',数据)
```

- 最好在beforeDestroy钩子中，用PubSub.unsubscribe('取消订阅的消息名称')

### 14.父子组件的访问方式
 - 有时候需要父组件直接访问子组件，子组件访问父组件，或者是子组件访问根组件
   - 父组件访问子组件：使用$children（不常用）或 $refs
   - 子组件访问父组件：使用$parent

#### （1）$children & $refs
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>组件间访问-父访问子</title>
</head>
<body>
<div id = "app">
 <cpn></cpn>
 <cpn></cpn>
 <cpn ref="aaa"></cpn>
  <button @click="click">按钮</button>
</div>
<template id="cpn">
  <div>我是子组件</div>
</template>
<script src = "../js/vue.js"></script>
<script>
  const cpn = {
    template:'#cpn',
    data(){
      return{
        name:'我是子组件的name'
      }
    },
    methods:{
      showMessage(){
        console.log('showMessage');
      }
    }
  }
  const app = new Vue({
    el: '#app',
    data: {
      message: 'hello Vuejs'
     },
    components:{
      cpn
    },
    methods: {
      click(){
        //$children
        console.log(this.$children);
        for (let c of this.$children){
          console.log(c.name);
          c.showMessage()
        }
        console.log("第二个子组件：",this.$children[2].name);
        //$refs
        console.log("aaa组件：",this.$refs.aaa.name);
      }
    }
  })
</script>
</body>
</html>
```

 - 程序分析
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210204235212935.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
 - 运行截图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210204235441103.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
#### （2）$parent & $root

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>组件间访问，子访问父</title>
</head>
<body>
<div id = "app">
  <h2>我是根组件</h2>
  <cpn></cpn>
</div>
<template id="cpn">
  <div>
    <h2>我是父组件</h2>
    <ccpn></ccpn>
  </div>
</template>
<template id="ccpn">
  <div>
    <h2>我是子组件</h2>
    <button @click="click">按钮</button>
  </div>
</template>
<script src = "../js/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      message: 'hello Vuejs',
      name:'我是根组件'
     },
     components :{
      cpn:{
        template :'#cpn',
        components: {
          ccpn:{
            template: '#ccpn',
            methods:{
              click(){
                console.log(this.$parent.name);
                console.log(this.$root.name);
              }
            }
          }
        },
        data(){
          return{
            name:'我是父组件'
          }
        },
      }
     }
  })
</script>
</body>
</html>
```

 - 程序分析
![在这里插入图片描述](https://img-blog.csdnimg.cn/202102050019003.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
 - 运行截图
![在这里插入图片描述](https://img-blog.csdnimg.cn/2021020500205417.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
### 15.slot插槽
#### （1）插槽的基本使用
 - 组件的插槽：
   - 组件的插槽是为了让我们封装的组件更加具有扩展性
   - 让使用者可以决定组件内部的一些内容到底展示什么
 - 如何封装这类组件：
   - 最好的封装方式就是将共性抽取到组件中，将不同暴露为插槽
   - 一旦我们预留了插槽，就可以让使用者根据自己的需求，决定插槽中插入什么内容
   - 是搜索框，还是文字，还是菜单由调用者自己来决定

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>插槽的基本使用</title>
</head>
<body>
<div id = "app">
 <cpn><button>按钮</button></cpn>
  <cpn><h3>插槽使用</h3></cpn>
</div>

<template id="cpn">
  <div>
    <h2>我是标题</h2>
    <p>我是组件</p>
    <slot></slot>
  </div>
</template>
<script src = "../js/vue.js"></script>
<script>
  const  cpn = {
    template:'#cpn'
  }
  const app = new Vue({
    el: '#app',
    data: {
      message: 'hello Vuejs'
     },
    components: {
      cpn
    }
  })
</script>
</body>
</html>
```

 - 程序分析
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210205131142643.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
 - 运行截图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210205131256270.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
#### （2）具名插槽
 - 当子组件的功能复杂时，子组件的插槽可能并非是一个
   - 比如我们封装一个导航栏的子组件，可能就需要三个插槽分别代表左边，中间，右边
   - 在给插槽输入内容时，如何区分插入的是哪一个，这个时候需要给插槽起一个名字

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>具名插槽</title>
</head>
<body>
<div id = "app">
 <cpn><span>标题</span></cpn>
  <cpn><span slot="left">修改左边</span></cpn>
</div>
<template id="cpn">
  <div>
    <slot name="left"><span>左边</span></slot>
    <slot name="center"><span>中间</span></slot>
    <slot name="right"><span>右边</span></slot>
    <slot></slot>
  </div>
</template>
<script src = "../js/vue.js"></script>
<script>
  const cpn = {
    template:'#cpn'
  }
  const app = new Vue({
    el: '#app',
    data: {
      message: 'hello Vuejs'
     },
    components:{
      cpn
    }
  })
</script>
</body>
</html>
```

 - 程序分析
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210205133225954.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
 - 运行截图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210205133322648.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
#### （3）作用域插槽
 - 编译作用域
   - 父组件模板的所有东西都会在父级作用域内编译，子组件模板的所有东西都会在子级作用域内编译
 - 作用域插槽的目的
   - 父组件替换插槽的标签、但是内容由子组件来提供。
- 有一个需求帮助理解：
   - 子组件中包括一组数据，比如: pLanguages: ['JavaScript' , 'Python', 'Swift' , 'Go','C++']，需要在多个界面进行展示:
   - 某些界面是以水平方向——展示的，某些界面是以列表形式展示的，某些界面直接展示一个数组
   - 内容在子组件，希望父组件告诉我们如何展示，怎么办呢?
   - 利用slot作用域插槽就可以了

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>作用域插槽</title>
</head>
<body>
<div id = "app">
  <h2>默认展示</h2>
 <cpn></cpn>
  <h2>自定义展示</h2>
  <cpn>
    <template slot-scope="slot">
      <span>{{slot.data.join('---')}}</span>
    </template>
  </cpn>
</div>
<template id="cpn">
  <div>
    <slot :data="pLanguages">
      <ul>
        <li v-for="item in pLanguages">{{item}}</li>
      </ul>
    </slot>
  </div>
</template>
<script src = "../js/vue.js"></script>
<script>
  const cpn = {
    template:'#cpn',
    data(){
      return{
        pLanguages:['JavaScript' , 'Python', 'Swift' , 'Go','C++']
      }
    }
  }
  const app = new Vue({
    el: '#app',
    data: {
      message: 'hello Vuejs'
     },
    components:{
      cpn
    }
  })
</script>
</body>
</html>
```

 - 程序分析
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210205141133464.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
 - 运行截图
![在这里插入图片描述](https://img-blog.csdnimg.cn/2021020514121477.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
### 16.单文件组件
- 前面所接触到的组件都属于非单文件组件，而接下来我们需要知道一个以.vue为后缀的组件，为单文件组件，这是在Vue脚手架中使用的文件。

```html
<template>
  <div>
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
  </div>
</template>

<script>
export default {
  name: "Student", //通过name属性配置组件名
  data() {
    return {
      name: "张三",
      age: 18,
    };
  },
};
</script>

<style>
div {
  background-color: orange;
}
</style>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210718101341911.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

```html
<template>
  <div>
    <School></School>
    <Student></Student>
  </div>
</template>

<script>
import School from "./School";
import Student from "./Student";
export default {
  name: "App",
  components: {
    School,
    Student,
  },
};
</script>

<style>
</style>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210718101600432.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

```javascript
import App from './App'

new Vue({
    el:'#app',
    components:{
        App
    }
})
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210718101812709.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="app">
        <App></App>
    </div>
    <script src="../../js/vue.js"></script>
    <script src="./main.js"></script>
</body>
</html>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210718101944898.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210718102131174.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
### 17.混入（mixin）
- 功能:可以把多个组件共用的配置提取成一个混入对象使用方式:
	- 第一步定义混合,例如:
	{
		data(){....},methods:{....}
	}
	写在独立的js文件中并将其暴露出去
	- 第二步使用混入，例如:
		- 全局混入:Vue.mixin(xxx)
		- 局部混入: mixins : [ 'xxx']
### 18.插件
- 功能:用于增强Vue
- 本质:包含install方法的一个对象，install的第一个参数是Vue，第二个以后的参数是插件使用者传递的数据。
- 定义插件:
plugins.js
```javascript
export default {
	install = function (Vue，options){
		// 1．添加全局过滤器
		Vue.filter(....)
		// 2.添加全局指令
		Vue.directive(....)
		// 3。配置全局混入(合)
		Vue.mixin(....)
		//4.添加实例方法
		Vue.prototype. $myMethod = function () {...}
		Vue.prototype.$myProperty = xxxx
	}
}
```

- 使用插件:
main.js
```javascript
import plugins form './plugins'
Vue.use(plugins,....)
```
### 19.scoped
- 作用:让样式在局部生效,防止冲突。在组件中用到的样式可能类名会冲突，当组件一同引入在App中的时候，引入顺序会影响冲突类名的样式，此时两个组件的样式就会冲突，加上scoped代表样式只在当前组件生效，但App组件上的样式尽量不要写scoped，因为App上的样式本意就是控制全局的
- 写法: \<style scoped>

### 20.扩展（$nextTick）
- nextTick
	- 语法:this.$nextTick(回调函数)
	- 作用:在下一次DOM更新结束后执行其指定的回调。
	- 什么时候用:当改变数据后，要基于更新后的新DOM进行某些操作时，要在nextTick所指定的回调函数中执行。

# 十三、模块化开发
### 1.ES6模块化的导入和导出

 export基本使用
 1. export指令用于导出变量，例如：
```javascript
// info.js
export let name = '张三'
export let age = 18
export let height = 1.88
```
 - 另一种写法
```javascript
// info.js
let name = '张三'
let age = 18
let height = 1.88
export (name，age，height)
```
 2.  export导出函数或类

```javascript
export function test(content) {
	console.log(content);
}
export class Person {
	constructor(name，age) {
		this.name = name ;
		this.age = age;
	}
	run(){
		console.log(this.name + "在奔跑");
	}
}
```

 - 另一种写法

```javascript
function test(content){
	console.log(content);
}
class Person {
	constructor(name, age){
		this.name = name ;
		this.age = age ;
	}
	run() {
		console.1og(this.name +"在奔跑");
	}
}
export {test，Person}
```

 3. export default
 - 某些情况下，一个模块中包含某个的功能，我们并不希望给这个功能命名，而且让导入者可以自己来命名，这个时候就可以使用export default

```javascript
// info.js
export default function o {
	console.1og ( 'default function ' );
}
```

 - 我们来到main.js中，这样使用就可以了
	这里的myFunc是自己命名的，你可以根据需要命名它对应的名字

```javascript
//mian.js
import myFunc from './info.js '
myFunc()
```

 - 另外，需要注意: export default在同一个模块中，不允许同时存在多个。

import的基本使用

 - 使用export指令导出了模块对外提供的接口，可以通过import命令来加载对应的这个模块了
 - 首先，我们需要在HTML代码中引入两个js文件，并且类型需要设置为module

```javascript
<script src="info.js" type="module"></script>
<script src="main.js" type="module"></script>
```

 - import指令用于导入模块中的内容，比如main.js的代码

```javascript
import {name，age,height} from "./info.js"
console.log(name, age，height);
```

 - 如果希望某个模块中所有的信息都导入，一个个导入显然有些麻烦;
   - 通过*可以导入模块中所有的export变量
   - 但是通常情况下我们需要给*起一个别名，方便后续的使用

```javascript
import * as info from './info.js'
console.log(info.name,info.age, info.height,info.friends);
```

# 十四、webpack
- **编译器：IntelliJ IDEA 2020**
### 1.什么是webpack

 - 官方的解释︰
   - At its core, webpack is a static module bundler for modern JavaScript applications.
   - 从本质上来讲，webpack是一个现代的JavaScript应用的**静态模块打包工具。**
- 从两个点来解释上面这句话:**模块**和**打包**

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210206105359215.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

 - 前端模块化
   - 目前使用前端模块化的一些方案:AMD、CMD、CommonJS、ES6。
   - 在ES6之前，我们要想进行模块化开发，就必须借助于其他的工具，让我们可以进行模块化开发。
   - 并且在通过模块化开发完成了项目后，还需要处理模块间的各种依赖，并且将其进行整合打包。
   - 而webpack其中一个核心就是让我们可能进行模块化开发，并且会帮助我们处理模块间的依赖关系。
   - 而且不仅仅是JavaScript文件，我们的CSS、图片、json文件等等在webpack中都可以被当做模块来使用。
   - 这就是webpack中模块化的概念。

- 打包
  - 理解了webpack可以帮助我们进行模块化，并且处理模块间的各种复杂关系后，打包的概念就非常好理解了。
  - 就是将webpack中的各种资源模块进行打包合并成一个或多个包(Bundle)。
  - 并且在打包的过程中，还可以对资源进行处理，比如压缩图片，将scss转成css，将ES6语法转成ES5语法，将TypeScript转成JavaScript等等操作。
  - 但是打包的操作似乎grunt/gulp也可以帮助我们完成，它们有什么不同呢?


- 和grunt/gulp的对比
  - grunt/gulp的核心是Task
  - 我们可以配置一系列的task，并且定义task要处理的事务（例如ES6、ts转化，图片压缩，scss转成css )口之后让grunt/gulp来依次执行这些task ，而且让整个流程自动化。
  - 所以grunt/gulp也被称为前端自动化任务管理工具。
  - 我们来看一个gulp的task
  - 下面的task就是将src下面的所有js文件转成ES5的语法。口并且最终输出到dist文件夹中。

```javascript
const gulp =require('gulp');
const babel = require('gulp-babel');
gulp.task('js',()=>
	gulp.src( 'src/* .js ')
		.pipe(babe1({
			presets : ['es2015']
		}))
		.pipe(gulp.dest( 'dist'))
);
```
 - 什么时候用grunt/gulp呢?
   - 如果你的工程模块依赖非常简单，甚至是没有用到模块化的概念。
   - 只需要进行简单的合并、压缩，就使用grunt/gulp即可。
   - 但是如果整个项目使用了模块化管理，而且相互依赖非常强，我们就可以使用更加强大的webpack了。
 - grunt/gulp和webpack有什么不同呢?
    - grunt/gulp更加强调的是前端流程的自动化，模块化不是它的核心。
    - webpack更加强调模块化开发管理，而文件压缩合并、预处理等功能，是他附带的功能。

### 2.webpack安装

 - webpack为了可以正常运行,必须依赖node环境
- Node.js自带了软件包管理工具npm
- 查看自己的node版本:（没安装请自行安装）
**node -v**
- 全局安装webpack(这里指定版本号3.6.0，因为vue cli2依赖该版本)
**npm install webpack@3.6.0 -g**
- 局部安装webpack(后续才需要)
  - --save-dev`是开发时依赖，项目打包后不需要继续使用的。
  - **cd对应目录
  npm install webpack@3.6.0 --save-dev**
- 为什么全局安装后，还需要局部安装呢?
  - 在**终端**直接执行webpack命令，使用的全局安装的webpack
  - 当在package.json中定义了scripts时，其中包含了webpack命令，那么使用的是局部webpack
  - 可能你当前从服务器下载下来的项目使用的webpack与你当前的全局webpack版本不一样，会引发一些错误，因此需要一个局部安装的webpack，即一个项目安装一个webpack

### 3.webpack的基本使用
#### （1）准备工作
 - 创建如下文件和文件夹︰
文件和文件夹解析︰
	 - dist文件夹:用于存放之后打包的文件
	 - src文件夹:用于存放我们写的源文件
	 - main.js :项目的入口文件。。
	 - mathUtils.js:定义了一些数学工具函数，可以在其他地方引用，并且使用。具体内容查看下面的详情。
	 - index.html:浏览器打开展示的首页html
	 - package.json :通过npm init生成的，npm包管理的文件(暂时没有用上，后面才会用上)
	 - mathUtils.js(看作一个模块)
	 - info.js(看作一个模块)
	 - main.js（看作一个入口，使用模块文件的函数和变量）
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210206173624332.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_10,color_FFFFFF,t_70)
#### （2）js文件的打包
 - 不使用webpack打包的话，浏览器是不识别CommonJs的语法的，ES6识别，因此要使用CommonJs语法，必须使用webpack打包
 - main.js（在这里需要使用到mathUtils.js和info.js模块的函数或者变量）
```javascript
//CommonJs
const {add,mul} = require('./mathUtils');

console.log(add(20, 30));
console.log(mul(20, 30));

//ES6
import {name,age,height} from "./info";

console.log(name);
console.log(age);
console.log(height);
```

 - mathUtils.js(看作一个数学工具类模块)

```javascript
function add(num1,num2) {
  return num1 + num2;
}
function mul(num1,num2) {
  return num1 * num2;
}

//CommonJs
module.exports = {
  add,
  mul
}
```

 - info.js（看作一个信息模块）

```javascript
const name = 'zhangsan';
const age = 18;
const height = 188;

//ES6
export {name,age,height}
```

 - index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<body>
<!--传统做法-->
<!--<script src="main.js"></script>-->
<!--<script src="info.js"></script>-->
<!--<script src="mathUtils.js"></script>-->

<!--使用模块化思想，用webpack进行打包-->
<script src="../dist/bundle.js"></script>
</body>
</html>
```

 - 程序分析
 - index.html
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210206165826791.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
 - 使用webpack打包，生产bundle.js文件方法
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210206170857699.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210206170932996.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

 - mathUtils.js
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210206174747765.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

 - info.js
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210206170235193.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
 - main.js
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210206170511123.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

 - 运行截图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210206171005471.png)
### 4.webpack.config.js和package.json的配置
#### （1）入口和出口（webpack.config.js）

 - 如果每次使用webpack的命令都需要写上入口和出口作为参数，就非常麻烦，有没有一种方法可以将这两个参数写到配置中，在运行时，直接读取呢?
- 当然可以，就是在当前项目根目录下创建—个webpack.config.js文件

```javascript
const path = require('path');
module.exports = {
  //入口:可以是字符串/数组/对象，这里入口只有一个,所以写一个字符串即可
  entry:'./src/main.js',
  //出口:通常是一个对象，里面至少包含两个重要属性，path和filename
  output:{
  //注意:path通常是一个绝对路径
    path:path.resolve(__dirname,'dist'),//动态获取绝对路径
    filename:'bundle.js'
  }
}
```
 - 文件分析
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210208210605737.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

#### （2）package.json
 - 进入到对应的目录中，在命令行中输入
**npm init**
 - 命名，不能包含中文，如果不输入则默认括号中的名字
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210206200049418.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
 - 一直按确定，直到出现：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210206200401412.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
 - 此时文件夹中会生成一个package.json文件
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210206200702222.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
 - 此时可以直接使用webpack语句来进行打包了
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210207143605423.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
 - 注意：webpack.config.js和package.json必须在你使用webpack语句的目录下，如果不在那个目录下会找不到文件
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210207143821870.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
#### （3）npm run
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210207144500236.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
 - 另外，这样执行的好处除了简化命令外，与直接使用webpack语句不一样的是，使用npm run build语句时会优先使用本地的webpack进行打包，本地没有安装webpack才会使用全局的

#### （4）局部webpack安装

 - npm install webpack@3.6.0 --save-dev

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210207145410452.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

### 5.webpack中使用CSS文件的配置
#### （1）什么是loader
- loader是webpack中一个非常核心的概念。
- webpack用来做什么呢?
    - 在之前的实例中，主要是用webpack来处理我们写的js代码，并且webpack会自动处理js之间相关的依赖。
   - 但是，在开发中不仅仅有基本的js代码处理，也需要加载css、图片，也包括一些高级的将ES6转成ES5代码，将TypeScript转成ES5代码，将scss、less转成css，将.jsx、.vue文件转成js文件等等。
   - 对于webpack本身的能力来说，对于这些转化是不支持的。
   - 那怎么办呢?给webpack扩展对应的loader就可以啦。
- loader使用过程:
   - 步骤一︰通过npm安装需要使用的loader
   - 步骤二︰在webpack.config.js中的modules关键字下进行配置
- 大部分loader我们都可以在webpack的官网中找到，并且学习对应的用法。

#### （2）css文件处理-准备工作
 - 项目开发过程中，必然需要添加很多的样式，而样式往往写到一个单独的文件中。
 - 在src目录中，创建一个css文件，其中创建一个normal.css文件。
 - normal.css中的代码非常简单，就是将body设置为pink
 - 但是，这个时候normal.css中的样式会生效吗?
 - 当然不会，因为压根就没有引用它。
 - webpack也不可能找到它，因为只有一个入口，webpack会从入口开始查找其他依赖的文件。
 - 在入口文件中引用:
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210207152155323.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
#### （3）css文件处理-打包报错信息
 - 重新打包，发现报错
 - 错误告诉我们：加载normal.css需要有对应的loader
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210207152404305.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
#### （4）css文件处理- css-loader
 - 在webpack的官网[https://webpack.js.org/](https://webpack.js.org/)中，可以找到如下关于样式的loader使用方法∶
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210207152944572.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
 - 安装css-loader
 - npm install --save-dev css-loader
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210207153026485.png)
- 按照官方配置webpack.config.js文件
- 注意:配置中有一个style-loader ，我们并不知道它是什么，所以可以暂时不进行配置。
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210207153141331.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
```javascript
//在原来的module.exports中添加
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["css-loader"],
      },
    ],
  },

```
 - 注意：这里存在一个版本过高的问题，因为演示用的webpack3.6.0版本较低，直接执行npm install --save-dev css-loader，安装的版本是最新的，在打包的时候会出现版本过高而报错的问题，所以需要将刚刚高版本的css-loader卸载，安装一个低版本的css-loader
   - npm uninstall css-loader    //卸载
   - npm install css-loader@3.0.0 --save-dev   //指定版本重装

- 重新打包项目∶
  - 但是，运行index.html，发现样式并没有生效。
  - 原因是css-loader只负责加载css文件，但是并不负责将css具体样式嵌入到文档中。
  - 这个时候，我们还需要一个style-loader帮助我们处理。

#### （5）css文件处理-style-loader
 - 安装style-loader
 - npm install —-save-dev style-loader
 - 注意: style-loader需要放在css-loader的前面。
 - 疑惑:按照逻辑，在处理css文件过程中，应该是css-loader先加载css文件，再由style-loader来进行进一步的处理，为什么会将style-loader放在前面呢?
 - 答案︰这次因为webpack在读取使用的loader的过程中，是按照从右向左的顺序读取的。
 - 目前，webpack.config.js的配置如下:
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210207160129109.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
 - 运行截图（背景成功改变）
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210207160159347.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
### 6.less文件的处理
 - 如果我们希望在项目中使用less、scss、stylus来写样式，webpack是否可以帮助我们处理呢?
 - 我们这里以less为例，其他也是一样的。
 - 我们还是先创建一个less文件，依然放在css文件夹中
 - 在入口文件中引用:
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210207161613367.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
 - 打包之后发现报错，类型跟配置css是一样的
 - 去官网查找less-loader的安装
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210207161754845.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
 - 安装less-loader（注意版本问题）
    - npm install less@3.9.0 less-loader@4.1.0 --save-dev
 - 配置webpack.config.js
```javascript
//在原来的rules中加入，由于版本较低，与官网最新的写法有出入，注意版本问题
     {
        test: /\.less$/i,
        use: [{
          loader:"style-loader"
        },{
          loader:"css-loader"
        }, {
          loader: "less-loader"
        }]
      },
```
 - 在index。html中加入标签测试， 重新打包
 - 运行截图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210207163554636.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
### 7.图片文件处理
#### （1）资源准备
 - 首先，我们在项目中加入两张图片︰
 - 一张较小的图片test01.jpg(小于8kb)，一张较大的图片test02.jpeg(大于8kb)
 - 会针对这两张图片进行不同的处理
 - 先考虑在css样式中引用图片的情况，所以更改normal.css中的样式︰
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210207171650415.png)
 - 此时进行打包会报错，此时需要一个url-loader
#### （2）url-loader
 - 图片处理,使用url-loader来处理，依然先安装url-loader（注意版本问题）
 - 依旧查看官网
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210207172015846.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
 - npm install url-loader@1.1.2 --save-dev
 - 修改webpack.config.js配置文件
 ![在这里插入图片描述](https://img-blog.csdnimg.cn/20210207172125316.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
```javascript
	{
        test: /\.(png|jpg|gif|jpeg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
```
 - 再次打包，运行index.html，就会发现背景图片显示出来了。
 - 仔细观察，会发现背景图是通过base64显示出来的
 - 这是limit属性的作用，当图片小于8kb时，对图片进行base64编码
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210207173551999.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
#### （3）file-loader
 - 如果大于8kb呢?将background的图片改成test02.jpg
 - 这次因为大于8kb的图片，会通过file-loader进行处理，但是我们的项目中并没有file-loader
 - 需要安装file-loader（注意版本问题）
 - 依旧查看官网
![在这里插入图片描述](https://img-blog.csdnimg.cn/2021020717385542.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
 - npm install file-loader@3.0.1 --save-dev
 - 再次打包，就会发现dist文件夹下多了一个图片文件
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210207174232819.png)
 - 此时运行index.html，发现图片并未展示，需要修改文件名
#### （4）修改文件名称
 - webpack自动生成一个非常长的名字
   - 这是一个32位hash值，目的是防止名字重复
   - 但是，真实开发中，对打包的图片名字有一定的要求
   - 比如，将所有的图片放在一个文件夹中，跟上图片原来的名称，同时也要防止重复
 - 所以，可以在options中添加上如下选项:
   - img:文件要打包到的文件夹
   - name :获取图片原来的名字，放在该位置
   - hash:8:为了防止图片名称冲突，依然使用hash，但是我们只保留8位
   - ext:使用图片原来的扩展名
   ![在这里插入图片描述](https://img-blog.csdnimg.cn/202102071750110.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
   ![在这里插入图片描述](https://img-blog.csdnimg.cn/2021020718034876.png)

 - 但是，我们发现图片并没有显示出来，这是因为图片使用的路径不正确
   - 默认情况下，webpack会将生成的路径直接返回给使用者
   - 但是，我们整个程序是打包在dist文件夹下的，所以这里我们需要在路径下再添加一个../dist/
   ![在这里插入图片描述](https://img-blog.csdnimg.cn/20210207180236343.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
 - 运行截图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210207180303517.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
### 8.ES6转ES5的babel
#### （1）ES6语法处理
- 仔细阅读webpack打包的js文件，发现写的ES6语法并没有转成ES5，那么就意味着可能一些对ES6还不支接的浏览器没有办法很好地运行代码。
- 如果希望将ES6的语法转成ES5，那么就需要使用babel.
  - 在webpack中，直接使用babel对应的loader就可以了。（在官网中可查询）
  - npm install --save-dev babel-loader@7 babel-core babel-preset-es2015
- 配置package.config.js

```javascript
{
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ["es2015"]
        }
      }
    }
```
- 重新打包，查看bundle.js文件，发现其中的内容变成了ES5的语法

### 9.webpack使用vue的配置
#### （1）引入vue.js
- 在项目中使用Vuejs，那么必然需要对其有依赖，所以需要先进行安装
	- 注:因为后续是在实际项目中也会使用vue的，所以并不是开发时依赖
	- npm install vue --save
- 在main.js中引入并使用Vue
```javascript
//引入并使用vue
import Vue from 'vue';

const app = new Vue({
  el:'#app',
  data:{
    message:'hello webpack'
  }
})
```

 - 在index.html中添加
```html
<div id="app">
  <h2>{{message}}</h2>
</div>
```
#### （2）打包项目 - 错误信息
 - 修改完成后，重新打包，运行程序:
  	- 打包过程没有任何错误(因为只是多打包了一个vue的js文件而已)
	- 但是运行程序，没有出现想要的效果，而且浏览器中有报错
	![在这里插入图片描述](https://img-blog.csdnimg.cn/20210207204000299.png)
 - 这个错误说使用的是runtime-only版本的Vue，什么意思呢?
	 - 这里只说解决方案:Vue不同版本构建，后续具体讲解runtime-only和runtime-compiler的区别。
	 - 修改webpack.config.js的配置，添加如下内容即可：

```javascript
resolve: {
	//alias:别名
	alias: {
		'vue$' : 'vue/dist/vue.esm.js'
	}
},
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210207204407393.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
 - 重新打包运行，正常运行

### 10.创建Vue时template和el的关系
#### （1）el和template的区别
 - 正常运行之后，来考虑另外—个问题:
 - 如果希望将data中的数据显示在界面中，就必须是修改index.html
 - 如果我们后面自定义了组件，也必须修改index.html来使用组件
 - 但是html模板在之后的开发中，并不希望手动的来频繁修改，是否可以做到呢?
 - 定义template属性:
  	-  在前面的Vue实例中，定义了el属性，用于和index.html中的#app进行绑定，让Vue实例之后可以管理其中的内容
	- 这里，可以将div元素中的({messagel}内容删掉，只保留一个基本的id为div的元素
	- 但是如果依然希望在其中显示{message}}的内容，应该怎么处理呢?
	- 我们可以再定义一个template属性，代码如下∶
```javascript
template:`
  <div>
    <h2>{{message}}</h2>
    <button>按钮</button>
  </div>
  `,
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210207211340258.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
 - 重新打包，运行程序，显示一样的结果和HTML代码结构
 - 那么，el和template模板的关系是什么呢?
    - el用于指定Vue要管理的DOM，可以帮助解析其中的指令、事件监听等等。
 - 而如果Vue实例中同时指定了template，那么template模板的内容会替换掉挂载的对应el的模板。
 - 这样做有什么好处呢?
 - 这样做之后就不需要在以后的开发中再次操作index.html，只需要在template中写入对应的标签即可
 - 但是，书写template模块非常麻烦怎么办呢?
 - 没有关系，稍后会将template模板中的内容进行抽离。
 - 会分成三部分书写: template、script、style，结构变得非常清晰。
### 11.Vue的终极使用方案
#### （1）Vue组件化开发引入
 - Vue开发过程中，会采用组件化开发的思想。那么，在当前项目中，如果也想采用组件化的形式进行开发，应该怎么做呢?
 - 查看下面的代码∶
 - 将上面项目中Vue实例中的template代码抽取出来，放到一个app.js文件中，并且在main.js中导入该文件
   ![在这里插入图片描述](https://img-blog.csdnimg.cn/20210208155744729.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
   app.js
```javascript
export default  {
  template:`
  <div>
    <h2>{{message}}</h2>
    <button>按钮</button>
  </div>
  `,
  data(){
    return{
      message:'hello Vue'
    }
  }
}
```
- 重新打包，运行程序，显示一样的结果和HTML代码结构
#### （2）.Vue文件封装处理
- 一个组件以一个js对象的形式进行组织和使用的时候是非常不方便的
  - 一方面编写template模块非常的麻烦
  - 另外一方面如果有样式的话，写在哪里比较合适呢?
- 现在，以一种全新的方式来组织一个vue的组件
- 但是，这个时候这个文件可以被正确的加载吗?
  	- 必然不可以，这种特殊的文件以及特殊的格式，必须有人帮助处理。
	- 谁来处理呢? vue-loader以及vue-template-compiler。
- 安装vue-loader和vue-template-compiler（注意版本问题）
	-	**npm install vue-loader@13.0.0 vue-template-compiler --save-dev**
-	修改webpack.config.js的配置文件:
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210208161415758.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
```javascript
{
        test: /\.vue$/,
        use: ['vue-loader']
      }
```

- 重新打包，运行程序，显示一样的结果和HTML代码结构
### 12.Plugin的使用
#### （1）认识Plugin
- plugin是什么?
  	- plugin是插件的意思，通常是用于对某个现有的架构进行扩展。
  	- webpack中的插件，就是对webpack现有功能的各种扩展，比如打包优化，文件压缩等等。
- loader和plugin区别
  	- loader主要用于转换某些类型的模块，它是一个转换器。
  	- plugin是插件，它是对webpack本身的扩展，是一个扩展器。
- plugin的使用过程︰
	- 步骤一︰通过npm安装需要使用的plugins(某些webpack已经内置的插件不需要安装)
	- 步骤二∶在webpack.config.js中的plugins中配置插件。
#### （2）添加版权的Plugin
- 使用一个最简单的插件，为打包的文件添加版权声明口
	- 该插件名字叫BannerPlugin，属于webpack自带的插件。
- 按照下面的方式来修改webpack.config.js的文件:
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210208165107428.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
```javascript
const webpack = require('webpack')
plugins: [
	new webpack.BannerPlugin( '最终版权归所有')
]

```
 - 重新打包，查看bundle.js
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210208165137509.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
#### （3）打包html的Plugin
- 目前，index.html文件是存放在项目的根目录下的。
    - 在真实发布项目时，发布的是dist文件夹中的内容，但是dist文件夹中如果没有index.html文件，那么打包的js等文件也就没有意义了。
	- 所以，我们需要将index.html文件打包到dist文件夹中，这个时候就可以使用HtmlWebpackPlugin插件
- HtmlWebpackPlugin插件可以为我们做这些事情:
	- 自动生成一个index.html文件(可以指定模板来生成)
	- 将打包的js文件，自动通过script标签插入到body中
- 安装HtmlWebpackPlugin插件（注意版本问题）
	- **npm install html-webpack-plugin@3.2.0 --save-dev**
- 使用插件，修改webpack.config.js文件中plugins部分的内容如下:
	- 这里的template表示根据什么模板来生成index.html（注意配置文件与index.html的位置问题）
	- 另外，我们需要删除之前在output中添加的publicPath属性
	- 否则插入的script标签中的src可能会有问题
	![在这里插入图片描述](https://img-blog.csdnimg.cn/20210208172006463.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin')
plugins:[
      new HtmlWebpackPlugin({
        template: './src/index.html'
      })
  ]
```
 - 查看dist目录下的index.html
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210208172301574.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
#### （4）js压缩的Plugin
- 在项目发布之前，必然需要对js等文件进行压缩处理
	- 这里，就对打包的js文件进行压缩
	- 使用一个第三方的插件uglifyjs-webpack-plugin，并且版本号指定1.1.1，和CLI2保持一致
	- **npm install uglifyjs-webpack-plugin@1.1.1 --save-dev**
- 修改webpack.config.js文件，使用插件:
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210208173009299.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

```javascript
const uglifyJsPlugin = require('uglifyjs-webpack-plugin')
  plugins:[
      new uglifyJsPlugin()
  ]
```

 - 重新打包，查看bundle.js
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210208173116999.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
### 13.搭建本地服务器
 - webpack提供了一个可选的本地开发服务器，这个本地服务器基于node.js搭建，内部使用express框架，可以实现我们想要的让浏览器自动刷新显示我们修改后的结果。
 - 不过它是一个单独的模块，在webpack中使用之前需要先安装它（注意版本问题）
 - **npm install --save-dev webpack-dev-server@2.9.3**
 - devServer也是作为webpack中的一个选项，选项本身可以设置如下属性∶
	- contentBase:为哪一个文件夹提供本地服务，默认是根文件夹，这里填写./dist
	- port:端口号
	- inline :页面实时刷新
	- historyApiFallback :在SPA页面中，依赖HTML5的history模式

 - webpack.config.js文件配置修改如下:
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210208194455170.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
```javascript
devServer:{
    contentBase: './dist',
    inline:true
  }
```
 - 可以再配置另外一个scripts :
	- --open参数表示直接打开浏览器
	![在这里插入图片描述](https://img-blog.csdnimg.cn/20210208194704148.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
```javascript
"dev": "webpack-dev-server --open"
```

 - 在命令行中输入npm run dev执行刚刚script的配置
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210208195423664.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 此时浏览器会自动打开dist目录中的项目，并且支持动态改变，本地服务器搭建完成
- 若要终止服务器，在命令行中按ctrl+c
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210208195637876.png)

### 14.配置文件的分离
 - 在项目的开发过程中，我们在开发时需要依赖一些配置文件，同时在运行时也需要一些依赖文件，但是有些依赖文件在运行时是用不到的，所以要进行配置文件的分离
 - 例如刚刚搭建的本地服务器就是开发时依赖，在本地服务器中测试项目，属于开发环境，在安装配置的时候，语句中带有-dev以及在配置文件中带有dev的都属于开发时依赖
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210208200355882.png)
 - 而上面压缩js文件是打包完成之后项目发布使用的配置环境，应该属于生产环境
![在这里插入图片描述](https://img-blog.csdnimg.cn/2021020820290550.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
 - 在这里，需要对webpack.config.js进行相应的分离
#### （1）准备工作
 - 在当前目录环境下，创建一个build文件夹，分别创建三个js文件
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210208203558147.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- prod.config.js
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210208203717683.png)
- dev.config.js
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210208203809974.png)
- base.config.js则存放除上面的配置外的其他配置
- 当我们需要在本地服务器中进行测试时，此时属于开发环境，则我们需要使用base.config.js + dev.config.js，而在测试完成后，需要将项目进行打包发布，此时属于开发环境，则需要base.config.js + prod.config.js
#### （2）安装合并工具
- 但是，在删除webpack.config.js后，我们进行重新打包却是报错的，因为找不到配置文件了，此时要如何将我们设置好的文件使用起来?
	- 首先需要安装一个工具将我们配置好的文件合并起来（注意版本问题）
	- **npm install webpack-merge@4.1.5 --save-dev**

- 成功安装后，对配置文件进行相应的修改

	prod.config.js

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210208204740751.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
```javascript
const uglifyJsPlugin = require('uglifyjs-webpack-plugin')

const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')

module.exports = webpackMerge(baseConfig,{
  plugins:[
    new uglifyJsPlugin()
  ],
})
```

dev.config.js
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210208205017162.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
```javascript
const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')

module.exports = webpackMerge(baseConfig,{
  devServer:{
    contentBase: './dist',
    inline:true
  }
})
```
#### （3）配置package.json文件
 - 此时还不能进行打包，仍需要对package.json进行配置，才能使打包时使用的文件是分类好的配置文件
 - 在script中指定需要执行的是哪个配置文件，打包属于生产环境，服务器测试属于开发环境
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210208205457627.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
```javascript
 "build": "webpack --config ./build/prod.config.js",
 "dev": "webpack-dev-server --open --config ./build/dev.config.js"
```
#### （4）重新打包
 - 在命令行中，输入npm run build 打包，成功打包
 - 但是发现，在build中创建了一个dist文件夹，里面包含了打包好的项目![在这里插入图片描述](https://img-blog.csdnimg.cn/202102082059208.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

 - 原因是因为在设置出口的时候，动态获取文件的绝对路径，因为当前使用的配置文件在build文件夹下，所以当前动态获取的文件路径在build下，因此在build下创建了一个dist文件夹，需要对base.config.js进行修改
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210208210219312.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

 - 将原来的dist文件夹删除，重新打包，成功打包，并且打包的文件存放路径正确
# 十五、VueCLI（CLI2&CLI3）
- **编译器：IntelliJ IDEA 2020**
### 1.Vue CLI的介绍和安装
#### （1）什么是Vue CLI
- 如果只是简单写几个Vue的Demo程序,那么不需要Vue CLI.
- 如果在开发大型项目，那么必然需要使用Vue CLI
	- 使用Vue.js开发大型应用时，我们需要考虑代码目录结构、项目结构和部署、热加载、代码单元测试等事情。
	- 如果每个项目都要手动完成这些工作，那无疑效率比较低效，所以通常会使用一些脚手架工具来帮助完成这些事情。
- CLI是什么意思?
	- CLI是Command-Line Interface,翻译为命令行界面,但是俗称脚手架.
	- Vue CLI是一个官方发布vue.js 项目脚手架
	- 使用vue-cli可以快速搭建Vue开发环境以及对应的webpack配置.
#### （2）Vue CLI使用前提 - Node
- 安装NodeJS
	- 可以直接在官方网站中下载安装.
	- 网址: [http://nodejs.cn/download/](http://nodejs.cn/download/)
- 检测安装的版本
	- 默认情况下自动安装Node和NPM
	- Node环境要求8.9以上或者更高版本
- 什么是NPM呢?
	- NPM的全称是Node Package Manager
	- 是一个NodeJS包管理和分发工具，已经成为了非官方的发布Node模块（包)的标准。
	- 后续会经常使用NPM来安装一些开发过程中依赖包.
#### （3）Vue CLI使用前提 - webpack
- Vue.js官方脚手架工具就使用了webpack模板
	- 对所有的资源会压缩等优化操作
	- 它在开发过程中提供了一套完整的功能，能够使得我们开发过程中变得高效。
- Webpack的全局安装
	- npm install webpack -g
#### （4）Vue CLI的使用
- 安装Vue脚手架
	- npm install -g @vue/cli
- 注意:上面安装的是最新版本，此时的版本是Vue CLI v4.5.11，如果需要想按照Vue CLI2的方式初始化项目时不可以的。需要拉取Vue CLI2的模板才能在CLI4上使用，CLI4兼容CLI3的使用。
- 在官网上有说明[https://cli.vuejs.org/](https://cli.vuejs.org/)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210209123601476.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- Vue CLI2初始化项目
	- vue init webpack my-project
- Vue CLI3初始化项目
	- vue create my-project

### 2.Vue CLI2初始化项目过程

 - 在需要创建项目的文件夹下输入Vue CLI2的初始化命令
 - 根据下图按enter键进行初始化
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210209155942833.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
 - 初始化成功后在相应目录下生成对应的项目文件
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210209160543646.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
### 3.Vue CLI2目录结构解析
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210209163825186.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210718092815290.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210718093812781.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

### 4.runtime+compiler和runtime-only的区别
- 具体解析在官方网站上也有解释：[https://cn.vuejs.org/v2/guide/installation.html#%E8%BF%90%E8%A1%8C%E6%97%B6%E7%BC%96%E8%AF%91%E5%99%A8vs%E5%8F%AA%E5%8C%85%E5%90%AB%E8%BF%90%E8%A1%8C%E6%97%B6](https://cn.vuejs.org/v2/guide/installation.html#%E8%BF%90%E8%A1%8C%E6%97%B6-%E7%BC%96%E8%AF%91%E5%99%A8-vs-%E5%8F%AA%E5%8C%85%E5%90%AB%E8%BF%90%E8%A1%8C%E6%97%B6)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210209172049722.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 简单总结
	- 如果在之后的开发中，依然使用template，就需要选择Runtime-Compiler
	- 如果在之后的开发中，使用的是.vue文件夹开发，那么可以选择Runtime-only
#### （1）render和template
 - Runtime-Compiler和 Runtime-only创建的项目
- 它们的区别在项目中的main.js函数中
- Runtime-Compiler

```javascript
new vue({
	el: '#app',
	components: { App },
	template:'<App/>'
})
```
- Runtime-only
```javascript
new vue({
	el: '#app'
	//箭头函数写法
	render: h=> h(App)
	//完整写法
	/*render : function(h){
		return h(App)
	}*/
})

```
- 为什么存在这样的差异?
	- 需要先理解Vue应用程序是如何运行起来的。
	- Vue中的模板如何最终渲染成真实DOM。
#### （2）Vue程序运行过程
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210209175106327.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
#### （3）render函数的使用
- 使用方式一：
```javascript
new Vue({
	el: '#app',
	render: (createElement) =>{
	// 1.使用方式一:return createElement('标签','相关数据对象(可以不传)',['内容数组'])
	// 1.1 .render函数基本使用
	//会将接管的app区域替换成<div>h2</div>
	return createElement( 'div', {class: 'box '},['h2'])
	// 1.2.嵌套render函数
	//会在<div>h2</div>中嵌套<h2>标题啊</h2>
	//<div>h2<h2>标题啊</h2></div>
	return createElement( 'div',{class: 'box'},[ 'h2' ,createElement(' h2'，['标题啊'])])

```

 - 使用方式二（传入一个Vue组件）：
```javascript
new vue({
	el: '#app',
	render: (createElement) => {
		//2.使用方式二:传入一个组件对象
		return createElement(cpn)
	}
})

```
### 5.npm run build和npm run dev
 - 在CLI2中npm run dev命令是启动本地服务器在服务器中打开项目，npm run build用于开发完成后将项目打包发布
 - npm run build
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210209181159588.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_1,color_FFFFFF,t_70)
 - npm run dev
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210209181428467.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_1,color_FFFFFF,t_70)
### 6.CLI3创建项目和目录结构
 - vue-cli 3与2版本有很大区别
	- vue-cli 3是基于webpack 4打造，vue-cli 2还是webapck 3
	- vue-cli 3的设计原则是“0配置”，移除的配置文件根目录下的，build和config等目录
	- vue-cli 3提供了vue ui命令，提供了可视化配置，更加人性化
	- 移除了static文件夹，新增了public文件夹，并且index.html移动到public中
	- vue-cli3启动本地服务的命令是npm run serve，打包命令还是npm run build
 - 在需要创建项目的文件夹下输入Vue CLI3的初始化命令
 - 根据下图进行初始化
 - 注意：项目名称不要包含大写字母以及中文
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210209211208636.png)
 - 键盘上下键选择，enter确认
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210209212024566.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)![在这里插入图片描述](https://img-blog.csdnimg.cn/20210209212432980.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210209212717550.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210209213156679.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210209213414128.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
 - 确认开始安装，安装成功后生成对应项目
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210209213546844.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
 - 目录结构
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210209214206933.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_1,color_FFFFFF,t_70)
### 7.CLI3的配置在哪里
 - UI方面的配置
 - 在命令行中启动服务器：vue ui
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210209220000454.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
 - 启动后在浏览器打开
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210209220104407.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
 - 在原项目中也能找到
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210209220226328.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
 - 如果需要自定义配置，可以在项目的目录下创建一个vue.config.js文件，文件名规定是这个，否则找不到。

 ### 8.CLI3修改默认配置
- vue.config-js配置文件
	- 使用vue inspect > output.js可以查看到Vue脚手架的默认配置。
	- 使用vue.config.js可以对脚手架进行个性化定制，详情见: [https://cli.vuejs.org/zh](https://cli.vuejs.org/zh)
	![在这里插入图片描述](https://img-blog.csdnimg.cn/2021071910135292.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/2021071909435756.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 更改入口文件
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210719100009556.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210719095841920.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 其他配置的更改可以参考文档，不再演示
### 9.Vue封装的过度与动画 
- 作用:在插入、更新或移除DOM元素时，在合适的时候给元素添加样式类名。
- ![在这里插入图片描述](https://img-blog.csdnimg.cn/20210719215619616.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 写法:
	- 准备好样式:
		- 元素进入的样式:
			1. v-enter:进入的起点
			2. v-enter-active:进入过程中
			3. v-enter-to:进入的终点
		- 元素离开的样式:
			1. v-leave:离开的起点
			2. v-leave-active:离开过程中
			3. v-leave-to:离开的终点
	- 使用\<transition>包裹要过度的元素,并配置name属性:
```html
<transition name="hello">
	<h1 v-show=""isShow">你好啊!</h1>
</transition>
```
- 备注:若有多个元素需要过度，则需要使用:\<transition-group>，且每个元素都要指定key值。

- 引入第三方动画库
- 第三方动画库有很多，这里只拿一个示例（animate.css）
- 根据对应的npm指令安装：npm install animate.css --save
![在这里插入图片描述](https://img-blog.csdnimg.cn/img_convert/5b6620ee60f39ec60adeaa0141aba0f8.png)
- 根据文档进行对应的样式引入即可，文档地址：[https://animate.style/](https://animate.style/)（国外网站，需要科学上网才能打开）
![在这里插入图片描述](https://img-blog.csdnimg.cn/img_convert/a58ea94dc3ed0dc9ba620d2e27d7aaed.png)
- Text.vue
```html
<template>
  <div>
      <h2>动画效果</h2>
      <button @click="isShow = !isShow">显示/隐藏</button>
      <transition name='hello' appear>
        <h1 v-show="isShow">你好啊</h1>
      </transition>
  </div>
</template>

<script>
export default {
    name:'Test',
    data() {
        return {
            isShow:true
        }
    },
}
</script>

<style scoped>
    h1 {
        background: orange;
    }
    /* 只有一个不用命名的写法 */
    /* .v-enter-active {
        animation: move .5s;
    }
    .v-leave-active {
        animation: move .5s reverse; 
    } */
    /* 命名的写法 */
    .hello-enter-active {
        animation: move .5s;
    }
    .hello-leave-active {
        animation: move .5s reverse; 
    }
    @keyframes move {
        from{
            transform: translateX(-100px);
        }
        to{
            transform: translateX(0px);
        }
    }
</style>
```
- Test2.vue

```html
<template>
  <div>
    <h2>过度效果效果</h2>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition-group name="hello" appear>
      <h1 v-show="isShow" key="1">你好啊</h1>
      <h1 v-show="isShow" key="2">你也好啊</h1>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "Test2",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h1 {
  background: orange;
}
/* 进入的起点 */
.hello-enter {
  transform: translateX(-100%);
}
/* 进入的终点 */
.hello-enter-to {
  transform: translateX(0);
}
/* 进入时激活的样式 */
.hello-enter-active {
  transition: 0.5s linear;
}
/* 离开时激活的样式 */
.hello-leave-active {
  transition: 0.5s linear;
}
/* 离开的起点 */
.hello-leave {
  transform: translateX(0);
}
/* 离开的终点 */
.hello-leave-to {
  transform: translateX(-100%);
}
</style>
```
- Test3.vue

```html
<template>
  <div>
    <h2>第三方动画库</h2>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition 
        name="animate__animated animate__bounce"
        appear
        enter-active-class='animate__swing'
        leave-active-class="animate__backOutDown"
     >
      <h1 v-show="isShow" key="1">你好啊</h1>
    </transition>
  </div>
</template>

<script>
 import 'animate.css'
export default {
  name: "Test3",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h1 {
  background: orange;
}
</style>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/img_convert/69294d5c262d9f5016deb5c69efcb330.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/img_convert/a2c8192a757321893e2c294b441280cd.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/img_convert/be940ef3f31c5b6f270facb63bba31eb.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/img_convert/08fbc8c97a49d38408ee4f3e24fc4e84.gif)


# 十六、Vue中的ajax
## axios
### 1.选择什么网络模块
- Vue中发送网络请求有非常多的方式，那么,在开发中,如何选择呢?
- 选择一:传统的Ajax是基于XMLHttpRequest(XHR)
- 为什么不用它呢?
	- 配置和调用方式等非常混乱.
	- 编码起来看起来就非常蛋疼.
	- 所以真实开发中很少直接使用,而是使用Query-Ajax
- 选择二:jQuery-Ajax，相对于传统的Ajax非常好用.
- 为什么不选择它呢?
	- 在Vue的整个开发中都是不需要使用jQuery 的
	- 为了进行一个网络请求,特意引用一个jQuery,并不合理
	- jQuery的代码1w+行.
	- Vue的代码才1w+行.
	- 完全没有必要为了用网络请求就引用这个重量级的框架.
- 选择三:官方在Vue1.x的时候,推出了Vue-resource.
	- vue-resource的体积相对于jQuery小很多.另外Vue-resource是官方推出的.
	- 了解vue-resource的使用

- 为什么不选择它呢?
	- 在Vue2.0推出后, Vue作者就在GitHub的Issues中说明了去掉vue-resource,并且以后也不会再更新.
	- 那么意味着以后vue-reource不再支持新的版本时,也不会再继续更新和维护.
	- 对以后的项目开发和维护都存在很大的隐患.
- 选择四:在说明不再继续更新和维护vue-resource的同时,作者还推荐了一个框架: axios，这也是我们学习的重点

### 2.axios的请求方式
- 支持多种请求方式:
	- axios(config)
	- axios.request(config)
	- axios.get(url[, config])
	- axios.delete(url[, config])
	- axios.head(url[, config])
	- axios.post(url[, data[, config]l)
	- axios.put(url[, data[, config]I)
	- axios.patch(url[, data[, config]l)
### 3.安装使用axios
#### （1）安装axios
- 创建的是cli2
- 安装axios，在项目的目录下输入
	- npm install axios --save
	![在这里插入图片描述](https://img-blog.csdnimg.cn/2021021523045637.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
#### （2）发送get请求
- 使用axios（基本使用），发送get请求
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210215232328258.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
#### （3）发送并发请求
- 有时候,可能需求同时发送两个请求
- 使用axios.all,可以放入多个请求的数组.
axios.all([ ])返回的结果是一个数组，使用axios.spread可将数组[res1,res2]展开为res1, res2

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210215234333685.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
#### （4）全局配置
- 在上面的示例中,BaseURL是固定的
- 事实上,在开发中可能很多参数都是固定的.
- 这个时候我们可以进行一些抽取，也可以利用axios的全局配置
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210215235537632.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
#### （5）常见的配置选项
- 请求地址
	- url: "/user",
- 请求类型
	- method: 'get',
- 请根路径
	- baseURL: 'http://www.mt.com/api",
- 请求前的数据处理
	- transformRequest:[function(data){}].
- 请求后的数据处理
	- transformResponse: [function(data){}],
- 自定义的请求头
	- headers: {'x-Requested-With":'XMLHttpRequest'},
- URL查询对象
	- params:{ id: 12 },(get请求使用)
- 查询对象序列化函数
	- paramsSerializer: function(params){ }
- request body
	- data: { key: 'aa'),（post请求使用）
- 超时设置s
	- timeout: 1000,
- 跨域是否带Token
	- withCredentials: false,
- 自定义请求处理
	- adapter: function(resolve, reject, config){}.
- 身份验证信息
	- auth: { uname: ", pwd: '12'}.
- 响应的数据格式json / blob /document /arraybuffer / text/ stream
	- responseType: 'json',

### 4.axios实例
- 为什么要创建axios的实例呢?
	- 当从axios模块中导入对象时,使用的实例是默认的实例.
	- 当给该实例设置一些默认配置时,这些配置就被固定下来了.
	- 但是后续开发中,某些配置可能会不太一样.
	- 比如某些请求需要使用特定的baseURL或者timeout或者content-Type等.
	- 这个时候，我们就可以创建新的实例,并且传入属于该实例的配置信息.
	![在这里插入图片描述](https://img-blog.csdnimg.cn/20210216001738679.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
### 5.axios实例和模块封装
- 在前面的例子中我们直接将网络请求的代码写在了main.js函数中，这种写法是不提倡的，网络请求过多会造成main.js非常臃肿而且难以维护，所以不要将网络请求的代码写在main.js中
- 那么我写在组件中可以吗？
- 同样也是不提倡的，如果我们写在组件中，假如有很多个组件都需要网络请求，那么每个组件都要依赖于axios包，这样不仅会导致组件非常臃肿，而且非常不利于维护，假设axios不再维护，而是推出了新的方案，那么这些组件的代码全部都要更改，工作量是非常大的，那么我们需要将其封装在一个文件当中，让组件去依赖文件，即使发生更改，也只需要更改文件即可

#### （1）封装axios实例
- 在src目录下创建一个network目录用来存放与网络请求相关的代码，创建一个request.js文件
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210216003932546.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- request.js

```javascript
import axios from "axios";
export function request(config,success,failure) {
  const instance = axios.create({
    baseURL :'http://baidu.com',
    timeout: 5000
  })
//发送网络请求
  instance(config)
    .then(res =>{
      //回调传入的success函数
    success(res)
  }).catch(err =>{
    //回调传入的failure函数
    failure(err)
  })
}
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210216004052160.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210216004410460.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
#### （2）封装方案优化
- 上面的封装显然不是最优的封装方法，首先网络请求属于异步请求，这时候我们应该需要用到Promise
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210216005429712.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210216005551288.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
### 6.axios的拦截器
- axios提供了拦截器，用于我们在发送每次请求或者得到相应后，进行对应的处理。

```javascript
 //请求拦截
  instance.interceptors.request.use(config =>{
    //拦截成功
    console.log(config);
    //拦截的内容
    //1.config中一些信息不符合服务器的要求
    //2.每次发送网络请求时在界面显示一个请求图标
    //3.某些网络请求（比如说登录）必须携带一些特殊的信息
    return config
  },error => {
    //拦截失败
      console.log(error);
  })
  //响应拦截
  instance.interceptors.response.use(config =>{
    //拦截成功
    console.log(config);
    //对返回的数据进行处理
    //一般只返回数据
    return config.data
  },error => {
    //拦截失败
      console.log(error);
  })
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210216011003102.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
## Vue脚手架配置代理
- 解决跨域问题：
	1. 通过cors可以完美解决跨域问题
	2. 通过jsonp可以解决get请求的跨域问题
	3. 通过配置代理服务器解决跨域
- 下面就来讲一下在Vue脚手架中通过代理服务来解决问题
- 首先快速搭建一个模拟数据的服务器，端口号为8000（node相关知识，自行查漏l）

```javascript
const server1  = require("express");

const app = server1();

app.use((request,response,next) =>{
  console.log('服务器1被访问了');
  next();
})

app.get("/students",(request,response)=>{
  const students = [
    {id:'001',name:'zhangsan',age:18},
    {id:'002',name:'lisi',age:19},    {id:'003',name:'wangwu',age:20},
  ]
  response.send(students);
})

app.listen(8000,(err)=>{
  if(!err)
    console.log("服务已启动,请求学生信息地址为：http://localhost:8000/students")
})

```
- App.vue

```html
<template>
  <div>
    <button @click='getstudent'>获取学生信息</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  methods: {
    getstudent(){
      axios.get('http://localhost:8000/students').then(
        response =>{
          console.log('请求成功',response.data);
        },
        error =>{
          console.log('请求失败',error.message);
        }
      )
    }
  },
}
</script>

```
### 1. 方式一
- 在vue.config.js中添加如下配置（注意：脚手架的版本时CLI3才能使用这个配置文件）:

```javascript
module.exports = {
	devServer:{
		proxy : "http://127.0.0.1: 8000"
	}
}
```
- 说明:
	1. 优点:配置简单，请求资源时直接发给前端(8080)即可。
	2. 缺点:不能配置多个代理，不能灵活的控制请求是否走代理。
	3. 工作方式:若按照上述配置代理，当请求了前端不存在的资源时，那么该请求会转发给服务器（优先匹配前端资源)
	![在这里插入图片描述](https://img-blog.csdnimg.cn/img_convert/682fecbed5a0b594d5d684be5368e551.png)
### 2.方式二
- 由于方式一还是存在相应的缺点，因此也就有了更加完善的方式二
- 编写vue.config.js配置具体代理规则:
```javascript
module.exports = {
    devServer: {
        proxy: {
            '/api1': {//匹配所有以 '/api1'开头的请求路径
                target: 'http://localhost:8000',//代理目标的基础路径
                changeOrigin: true,
                pathRewrite: { '^/api1': '' }
            },
            '/api2': {//匹配所有以'/api2'开头的请求路径
                target: 'http://localhost:8001',// 代理目标的基础路径
                changeOrigin: true,
                pathRewrite: { '^/api2': '' }
            }
        }
    }
}
//changeOrigin设置为true时，服务器收到的请求头中的host为: localhost : 8000
//changeOrigin设置为false时，服务器收到的请求头中的host为: localhost:8080
//changeOrigin默认值为true

```
![在这里插入图片描述](https://img-blog.csdnimg.cn/img_convert/f1bb56f1280357bc5d9833fad6fb94d0.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/img_convert/7f24497251b60700dc5a6829436776b8.png)

# 十六、vue-router
- **编译器：IntelliJ IDEA 2020**
### 1.前端路由和后端路由

 - 在了解vue-router之前，需要先了解什么是前端路由，什么是后端路由
 - 而在了解前端路由和后端路由前需要去了解什么是前端渲染和后端渲染
#### （1）前端渲染和后端渲染
- 后端渲染
	- 早期网页并不是前后端分离的，（以jsp为例），此时的网页是在jsp中写入html+css代码，并且嵌套一些用于数据处理的java代码，这时的网页，在服务器中已经渲染了出来了，当我们访问网站的时候，会直接把已经渲染好的页面发送给浏览器，前端仅仅负责展示。
- 前端渲染
	- 随着AJAX的出现，前后端分离的模式开始实行。后端只需要提供相应的API，不负责任何内容，前端拿到数据后进行处理，最终渲染到网页上。

#### （2）后端路由阶段
- 早期的网站开发整个HTML页面是由服务器渲染的。**（后端渲染）**
	- 服务器直接生产渲染好对应的HTML页面,返回给客户端进行展示。
- 但是,一个网站,这么多页面服务器如何处理呢?
	- 一个页面有自己对应的网址，也就是URL
	- URL会发送到服务器,服务器会通过正则表达式对该URL进行匹配,并且最后交给一个Controller进行处理
	- Controller进行各种处理,最终生成HTML或者数据,返回给前端
	- 这就完成了一个IO操作.
- 上面的这种操作,就是后端路由.
	- 当我们页面中需要请求不同的路径内容时,交给服务器来进行处理,服务器渲染好整个页面,并且将页面返回给客户端.
	- 这种情况下渲染好的页面,不需要单独加载任何的js和css,可以直接交给浏览器展示,这样也有利于SEO的优化.
- 后端路由的缺点:
	- 一种情况是整个页面的模块由后端人员来编写和维护的.
	- 另一种情况是前端开发人员如果要开发页面,需要通过PHP和Java等语言来编写页面代码.
	- 而且通常情况下HTML代码和数据以及对应的逻辑会混在一起,编写和维护都是非常糟糕的事情.

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210210125233906.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
#### （3）前后端分类阶段
- 随着Ajax的出现,有了前后端分离的开发模式.
- 后端只提供API来返回数据,前端通过Ajax获取数据,并且可以通过JavaScript将数据渲染到页面中.**（前端渲染）**
- 这样做最大的优点就是前后端责任的清晰,后端专注于数据上,前端专注于交互和可视化上.
- 并且当移动端(iOS/Android)出现后,后端不需要进行任何处理,依然使用之前的一套API即可.
- 目前很多的网站依然采用这种模式开发.

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210210130957214.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
#### （4）前端路由阶段(单页面富应用阶段)
- 单页面富应用阶段（simple page application）
	- SPA最主要的特点就是在前后端分离的基础上加了一层前端路由.
	- 也就是前端来维护一套路由规则.
- 前端路由的核心是什么呢?
	- **改变URL，但是页面不进行整体的刷新**。

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210210135017427.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
### 2.如何实现页面不整体刷新
#### （1）URL的hash
 - URL的hash也就是锚点(#),本质上是改变window.location的href属性.
 - 我们可以通过直接赋值location.hash来改变href,但是页面不发生刷新
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210210165759545.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
 - 通过查看网络可以发现没有请求新的数据
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210210165911763.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)


#### （2）HTML5的history模式：pushState
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210210170045636.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)


- history.back()
![在这里插入图片描述](https://img-blog.csdnimg.cn/2021021017023852.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

- history.forward()
![在这里插入图片描述](https://img-blog.csdnimg.cn/2021021017064754.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

#### （3）HTML5的history模式：replaceState
![在这里插入图片描述](https://img-blog.csdnimg.cn/2021021017082558.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

#### （4）HTML5的history模式：go
- history.back()等价于history.go(-1)
- history.forward()则等价于history.go(1)
![在这里插入图片描述](https://img-blog.csdnimg.cn/2021021017105473.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210210171207143.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)


### 3.vue-router的安装配置和使用
- **编译器：IntelliJ IDEA 2020，创建vue文件需要先安装vue.js插件**
#### （1）认识vue-router
- 目前前端流行的三大框架,都有自己的路由实现:
	- Angular的ngRouter
	- React的ReactRouter
	- Vue的vue-router
- vue-router是Vue.js官方的路由插件，它和vue.js是深度集成的，适合用于构建单页面应用。
- 可以访问其官方网站对其进行学习: [https://router.vuejs.org/zh/](https://router.vuejs.org/zh/)
- vue-router是基于路由和组件的
	- 路由用于设定访问路径,将路径和组件映射起来.
	- 在vue-router的单页面应用中,页面的路径的改变就是组件的切换.
#### （2）安装和配置vue-router
- 如果在创建脚手架的时候就已经安装好vue-router的话，就不需要自己配置了，脚手架会自动帮你配置好的
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210210155340247.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- main.js
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210210155434223.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 如果在创建脚手架的时候没有安装，则请按照下面的步骤安装和配置
- 步骤一:安装vue-router
	-  npm install vue-router --save
	![在这里插入图片描述](https://img-blog.csdnimg.cn/20210210160003264.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

- 步骤二:在模块化工程中使用它(因为是一个插件,所以可以通过Vue.use()来安装路由功能)
	- 第一步:导入路由对象，并且调用Vue.use(VueRouter)
	- 第二步:创建路由实例，并且传入路由映射配置
	- 第三步:在Vue实例中挂载创建的路由实例
	![在这里插入图片描述](https://img-blog.csdnimg.cn/20210210160211192.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
	![在这里插入图片描述](https://img-blog.csdnimg.cn/20210210161334611.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
	![在这里插入图片描述](https://img-blog.csdnimg.cn/20210210161555722.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
#### （3）使用vue-router
- 使用vue-router的步骤:
	- 第一步:创建路由组件
	- 第二步:配置路由映射:组件和路径映射关系
	- 第三步:使用路由:通过<router-link\>和<router-view\>
- <router-link\>:该标签是一个vue-router中已经内置的组件,它会被渲染成一个<a\>标签.
- <router-view\>:该标签会根据当前的路径,动态渲染出不同的组件.
- 网页的其他内容,比如顶部的标题/导航,或者底部的—些版权信息都和<router-view\>处于同一个等级.
- 在路由切换时,切换的是<router-view\>挂载的组件,其他内容不会发生改变.

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210210164338485.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210210215413440.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210210171810262.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

 - npm run dev 打开本地服务器运行
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210210171921250.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210210172019547.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
#### （4）路由的默认路径
- 这里还有一个不太好的实现:
	- 默认情况下，进入网站的首页,我们希望<router-view\>渲染首页的内容.
	- 但是在实现中,默认没有显示首页组件,必须让用户点击才可以.
- 如何可以让路径默认跳到到首页,并且<router-view\>渲染首页组件呢?
	- 非常简单,只需要配置多配置一个映射就可以了.	![在这里插入图片描述](https://img-blog.csdnimg.cn/20210210173135306.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
	![在这里插入图片描述](https://img-blog.csdnimg.cn/20210210173238491.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
#### （5）HTML5的history模式
- 前面说过改变路径的方式有两种:
	- URL的hash
	- HTML5的history
	- 默认情况下,路径的改变使用的URL的hash.
- 如果希望使用HTML5的history模式,非常简单,进行如下配置即可:
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210210173516945.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210210173554589.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 路由器的两种工作模式
1. 对于一个url来说，什么是hash值?——#及其后面的内容就是hash值。
2. hash值不会包含在HTTP请求中，即:hash值不会带给服务器。
3. hash模式:
	1. 地址中永远带着#号，不美观。
	2. 若以后将地址通过第三方手机app分享，若app校验严格，则地址会被标记为不合法。
	3. 兼容性较好。
4. history模式:
	1. 地址干净，美观。
	2. 兼容性和hash模式相比略差。
	3. 应用部署上线时需要后端人员支持，解决刷新页面服务端404的问题。

#### （6）router-link补充
- 在前面的<router-link\>中,我们只是使用了一个属性: to，用于指定跳转的路径.
- <router-link\>还有一些其他属性:
	- tag: tag可以指定<router-link\>之后渲染成什么组件,比如如果想渲染成一个按钮的话<router-link to='/home' tag='button'\>
	![在这里插入图片描述](https://img-blog.csdnimg.cn/2021021017525997.png)
	- replace: replace不会留下history记录,所以指定replace的情况下，后退键返回不能返回到上一个页面中
	![在这里插入图片描述](https://img-blog.csdnimg.cn/20210210175410213.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
	- active-class:当<router-link\>对应的路由匹配成功时,会自动给当前元素设置一个router-link-active的class
	![在这里插入图片描述](https://img-blog.csdnimg.cn/20210210175605191.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
	- 设置active-class可以修改默认的名称.
	![在这里插入图片描述](https://img-blog.csdnimg.cn/20210210175934591.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
	![在这里插入图片描述](https://img-blog.csdnimg.cn/20210210175957741.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
	- 在进行高亮显示的导航菜单或者底部tabbar时,会使用到该类.
	- 但是通常不会修改类的属性,会直接使用默认的router-link-active即可.
	- 如果不想添加active-class属性，也可以在路由的配置文件中增加一个linkActiveClass，效果与修改active-class属性一样
	![在这里插入图片描述](https://img-blog.csdnimg.cn/20210210180343579.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
	![在这里插入图片描述](https://img-blog.csdnimg.cn/20210210180324384.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
#### （7）通过代码跳转路由
- 有时候,页面的跳转可能需要执行对应的JavaScript代码,这个时候,就可以使用第二种跳转方式了
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210210180859949.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
### 4.动态路由的使用（params参数）
- 在某些情况下，一个页面的path路径可能是不确定的，比如我们进入用户界面时，希望是如下的路径:
	- /user/aaaa或/user/bbbb
	- 除了有前面的/user之外，后面还跟上了用户的ID
	- 这种path和Component的匹配关系，我们称之为动态路由(也是路由传递数据的一种方式)。

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210210192919513.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- User.vue

```html
<template>
  <div>
    <h2>我是用户信息</h2>
    <h2>{{userId}}</h2>
    <p>我是用户的内容</p>
  </div>
</template>

<script>
  export default {
    name: "User",
    computed:{
      userId(){
       return this.$route.params.userId
      }
    }
  }
</script>

<style scoped>

</style>

```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210210194215379.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- index.js

```javascript
import VueRouter from "vue-router";
import Vue from 'vue'
import Home from '../components/Home'
import About from '../components/About'
import User from "../components/User";
Vue.use(VueRouter);

const routes = [
  {
    path: '',
    redirect:'/home'
  },
  {
    path: '/home',
    component: Home

  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/user/:userId',
    component: User
  }
]

const router = new VueRouter({
  routes,
  mode:'history',
 // linkActiveClass:'active'
})

export default router

```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210210194538856.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- App.vue

```html
<template>
  <div id="app">
    <router-link to="/home" tag="button" replace >首页</router-link>
    <router-link to="/about" tag="button" replace >关于</router-link>
    <router-link :to="'/user/'+UserId" tag="button" replace>用户</router-link>
<!--    <button @click="homeClick">首页</button>-->
<!--    <button @click="aboutClick">关于</button>-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      UserId:'zhangsan'
    }
  },
  methods:{
    homeClick(){
      this.$router.push('/home')
    },
    aboutClick(){
      this.$router.push('/about')
    }
  }

}
</script>

<style>
  /*.router-link-active{*/
  /*  color: #f00;*/
  /*}*/
  /*.active{*/
  /*  color: #f00;*/
  /*}*/
</style>

```

- 运行截图

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210210194925100.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
### 5.参数的传递方式
- 传递参数主要有两种类型: params和query
- params的类型:
	- 配置路由格式: /router/:id
	- 传递的方式:在path后面跟上对应的值
	- 传递后形成的路径: /router/123,/router/abc
	- 获取传递的值：$router.params.id,获取的id值就是path后面的值
- query的类型:
	- 配置路由格式: /rluter,也就是普通配置
	- 传递的方式:对象中使用query的key作为传递方式
	- 传递后形成的路径: /router?id=123,/router?id=abc
	- 获取传递的值：$router.query
- params的方式在动态路由中有使用到
- query的使用
- Profile.vue
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210210214035393.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

```html
<template>
  <div>
    <h2>我是Profile组件</h2>
    <h2>{{$route.query}}</h2>
    <h2>{{$route.query.name}}</h2>
    <h2>{{$route.query.age}}</h2>
    <h2>{{$route.query.height}}</h2>
  </div>
</template>

<script>
  export default {
    name: "Profile"
  }
</script>

<style scoped>

</style>
```
- 配置相关路由信息
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210210214228522.png)
- 在App.vue中使用
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210210214518835.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
```html
<router-link :to="{
      path:'/profile',
      query:{name:'zhangsan',age:18,height:1.88}
      }" tag="button">档案</router-link>
```
- 运行截图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210210214650331.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 通过代码跳转
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210210215531434.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
### 6.路由的props配置
1. 作用:让路由组件更方便的收到参数

```javascript
 {
    path: '/user/:userId',
    component: User,
    meta: {
      title: '用户'
    },
    //第一种写法:props值为对象，该对象中所有的key-value的组合最终都会通过props传给组件 
    // props:{a:100}
    //第二种写法: props值为布尔值，布尔值为true，则把路由收到的所有params参数通过props传给组件
    props:true
  },
  {
    path: '/profile',
    component:Profile,
    meta: {
      title: '档案'
    },
    //第三种写法: props值为函数，该函数返回的对象中每一组key-value都会通过props传给组件
    props(route) {
      return {
        query: route.query,
        name: route.query.name,
        age: route.query.age,
        height: route.query.height,
      }
    }
  }
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/img_convert/4d7eb1fec784651b777767450e9b4adf.png)

### 7.打包文件解析
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210210201937644.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
### 8.路由的懒加载
#### （1）解释
- 官方给出了解释:
	- 当打包构建应用时，Javascript包会变得非常大，影响页面加载。
	- 如果能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就更加高效了
- 官方在说什么呢?
	- 首先,路由中通常会定义很多不同的页面.
	- 这些页面最后被打包在哪里?一般情况下，是放在一个js文件中.
	- 但是,页面这么多放在一个js文件中,必然会造成这个页面非常大.
	- 如果一次性从服务器请求下来这个页面,可能需要花费一定的时间,甚至用户的电脑上会出现了短暂空白的情况.
	- 如何避免这种情况呢?使用路由懒加载就可以了.
- 路由懒加载做了什么?
	- 路由懒加载的主要作用就是将路由对应的组件打包成一个个的js代码块.
	- 只有在这个路由被访问到的时候,才加载对应的组件

#### （2）效果
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210210202846858.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210210203359564.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
#### （3）方式
- 方式一:结合Vue的异步组件和Webpack的代码分析.

```javascript
 const Home = resolve => { require.ensure( [' ../components/Home.vue'],
 () =>{ resolve(require(' ../ components / Home.vue' )) })};
```

- 方式二:AMD写法

```javascript
const About = resolve => require([' ../components/About.vue'],resolve);
```

- 方式三:在ES6中,我们可以有更加简单的写法来组织Vue异步组件和Webpack的代码分割.（推荐写法）

```javascript
const Home = () => import( ' ../ components /Home.vue ' )
```

### 9.嵌套路由
- 嵌套路由是一个很常见的功能
	- 比如在home页面中,希望通过/home/news和/home/message访问一些内容.
	- 一个路径映射一个组件,访问这两个路径也会分别渲染两个组件.
- 路径和组件的关系如下：
![在这里插入图片描述](https://img-blog.csdnimg.cn/202102102103382.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 实现嵌套路由有两个步骤:
	- 创建对应的子组件,并且在路由映射中配置对应的子路由.
	- 在组件内部使用<router-link\>和<router-view\>标签.

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210210210558656.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210210210751436.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210210210844588.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 运行截图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210210211034601.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210210211149377.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210210211236611.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
### 10.$router和\$route的区别
- $route和\$router是有区别的
	- $router为VueRouter实例，想要导航到不同URL，则使用\$router.push方法
	- $route为当前router跳转对象里面可以获取name、path、query.params等
### 11.命名路由
1. 作用：简化路由的跳转
2. 使用：

```javascript
{
    name:'Home',
    path: '/home',
    component: Home,
    meta:{
      title:'首页'
    },
    children:[
      {
        path:'',
        redirect:'news'
      },
      {
        name:'News',
        path: 'news',
        component: News
      },
      {
        path: 'message',
        component: Message
      }
    ]
  },
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/img_convert/3de7743d10e7b88fa50246eea489275f.png)

3. 简化跳转

```html
<!--简化前，需要写完整的路径-->
<router-link to="/home/news">新闻</router-link>
<!--简化后，直接通过名字跳转-->
<router-link :to="{name:'News'}">新闻</router-link>
<!--简化写法配合传递参数-->
<router-link
	:to="{
		name:'News',
		query:{
			id:666,
			title:'你好'
		}
	}"
>新闻</router-link>

```
### 12.全局导航守卫
#### （1）为什么使用导航守卫
- 考虑一个需求:在一个SPA应用中,如何改变网页的标题呢?
	- 网页标题是通过<title\>来显示的,但是SPA只有一个固定的HTML,切换不同的页面时,标题并不会改变.
	- 但是我们可以通过JavaScript来修改<title\>的内容.window.document.title = '新的标题'.
	- 那么在Vue项目中,在哪里修改?什么时候修改比较合适呢?
- 普通的修改方式:
	- 我们比较容易想到的修改标题的位置是每一个路由对应的组件.vue文件中.
	- 通过mounted声明周期函数,执行对应的代码进行修改即可.
	- 但是当页面比较多时,这种方式不容易维护(因为需要在多个页面执行类似的代码).
	![在这里插入图片描述](https://img-blog.csdnimg.cn/20210210224021418.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
	![在这里插入图片描述](https://img-blog.csdnimg.cn/2021021022403653.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 有没有更好的办法呢?使用导航守卫即可.
- 什么是导航守卫?
	- vue-router提供的导航守卫主要用来监听路由的进入和离开的.
	- vue-router提供了beforeEach和afterEach的钩子函数,它们会在路由即将改变前和改变后触发.

#### （2）导航守卫的使用
- 可以利用beforeEach来完成标题的修改.
	- 首先,可以在钩子当中定义一些标题,可以利用meta来定义
	- 其次,利用导航守卫,修改标题.
- 导航钩子的三个参数解析:
	- to:即将要进入的自标的路由对象.
	- from:当前导航即将要离开的路由对象.
	- next:调用该方法后，才能进入下一个钩子.
	![在这里插入图片描述](https://img-blog.csdnimg.cn/20210210225701744.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 运行截图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210210225729415.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

#### （3）导航守卫的补充
- 补充一:如果是后置钩子,也就是afterEach,不需要主动调用next()函数.
- 补充二:上面使用的导航守卫,被称之为全局守卫.
- 更多的内容详解可以在官网中查询：[https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E5%85%A8%E5%B1%80%E5%89%8D%E7%BD%AE%E5%AE%88%E5%8D%AB](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E5%85%A8%E5%B1%80%E5%89%8D%E7%BD%AE%E5%AE%88%E5%8D%AB)
### 11.独享路由守卫
- 独享守卫:只有一个beforeEnter方法，其写在对应匹配的路由内，只有这个路由能使用，其传入的参数与全局守卫一致，功能与全局守卫中的beforeEach一致
```javascript
beforeEnter(to,from,next){
	console.log(to,from)
	next()
}

```
### 13.组件内路由守卫
组件内守卫:写在组件中的守卫
```javascript
//进入守卫。通过路由规则,进入该组件时被调用
beforeRouteEnter (to，from，next){},
//离开守卫。通过路由规则,高开该组件时被调用
beforeRouteLeave (to,from，next){}

```
### 14.keep-alive（缓存路由组件）
- keep-alive 是 Vue内置的一个组件，可以使被包含的组件保留状态，或避免重新渲染。
	- 它们有两个非常重要的属性:
	- include -字符串或正则表达，只有匹配的组件会被缓存
	- exclude -字符串或正则表达式，任何匹配的组件都不会被缓存
	- 注意：这两个属性的匹配的值一定是组件的名字，即组件中配置的name
- router-view 也是一个组件，如果直接被包在 keep-alive里面，所有路径匹配到的视图组件都会被缓存︰
```html
  <keep-alive>
      <router-view>
          <!-- 所有路径匹配到的视图组件都会被缓存 -->
      </router-view>
    </keep-alive>
```

- 使用created和destroyed函数来验证
- 在每个组件中使用created和destroyed
![在这里插入图片描述](https://img-blog.csdnimg.cn/2021021023355657.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- App.vue中将router-view包在 keep-alive里面
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210210233958988.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/202102102340397.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 验证截图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210210234249709.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210210234407465.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210210234646528.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
### 15.两个新的生命周期钩子
1. 作用:路由组件所独有的两个钩子，用于捕获路由组件的激活状态。
2. 具体名字:
	1. activated路由组件被激活时触发。
	2. deactivated路由组件失活时触发。
3. 应用：用于停止定时器，使用keep-alive，当离开该组件时不会被销毁，如果此时该组件存在一个定时器，此时定时器没有被清除，影响效率，那么此时可以将清除定时器的方法写在deactivated上，开启定时器的方法写在activated上就很好地解决了问题

# 十七、vuex
### 1.vuex是做什么的
- 官方解释:Vuex是一个专为Vue.js 应用程序开发的状态管理模式。
	- 它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。
	- Vuex也集成到Vue的官方调试工具devtools extension，提供了诸如零配置的 time-travel调试、状态快照导入导出等高级调试功能。
- 状态管理到底是什么?
	- 可以简单的将其看成把需要多个组件共享的变量全部存储在一个对象里面。
	- 将这个对象放在顶层的Vue实例中，让其他组件可以使用。
	- 多个组件就可以共享这个对象中的所有变量属性了
- 如果是这样的话，为什么官方还要专门出一个插件Vuex呢?
	- 难道我们不能自己封装一个对象来管理吗?
	- 当然可以，只是我们要先想想VueJS带给我们最大的便利是什么呢?没错，就是响应式。
	- 如果你自己封装实现一个对象能不能保证它里面所有的属性做到响应式呢? 当然也可以，只是自己封装可能稍微麻烦一些。
	- Vuex就是为了提供这样一个在多个组件间共享状态的插件

### 2.单页面到多页面状态管理切换

### （1）单页面状态管理
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210215114841718.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 图片中的三种东西，怎么理解呢?
	- State :不用多说，就是状态。(姑且可以当做就是data中的属性)
	- View :视图层，可以针对State的变化，显示不同的信息。
	- Actions :Actions主要是用户的各种操作∶点击、输入等等，会导致状态的改变。

### （2）单页面状态管理的实现
- 例子使用的是cli2

```html
<template>
  <div id="app">
    <h2>{{message}}</h2>
    <h2>{{counter}}</h2>
    <button @click="counter++">+</button>
    <button @click="counter--">-</button>
    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
  import HelloVuex from "./components/HelloVuex";
export default {
  name: 'App',
  data(){
    return {
      message:'我是App组件',
      counter:0
    }
  },
  components:{
    HelloVuex
  }
}
</script>

<style>

</style>
```
- 在这个案例中，个数counter就是要管理的状态。
	- counter需要某种方式被记录下来，也就是State。
	- counter目前的值需要被显示在界面中，也就是View部分。
	- 界面发生某些操作时（这里是用户的点击，也可以是用户的input ) ，需要去更新状态，也就是我们的Actions

### （3）多页面状态管理
- Vue已经做好了单个界面的状态管理，但是如果是多个界面呢?
	- 多个试图都依赖同一个状态(一个状态改了，多个界面需要进行更新)
	- 不同界面的Actions都想修改同一个状态(Home.vue需要修改，Profile.vue也需要修改这个状态)
- 也就是说对于某些状态(状态1/状态2/状态3)来说只属于我们某一个视图，但是也有一些状态(状态a/状态b/状态c)属于多个视图共同想要维护的
	- 状态1/状态2/状态3放在自己的房间中，自己管理自己用，没问题。
	- 但是状态a/状态b/状态c希望交给一个大管家来统一管理
	- Vuex就是提供这个大管家的工具。
- 全局单例模式(大管家)
	- 将共享的状态抽取出来，交给大管家，统一进行管理。
	- 之后，每个视图，按照规定好的规定，进行访问和修改等操作。
	- 这就是Vuex背后的基本思想。
### （4）安装vuex管理多页面状态
- vuex的安装，在创建的cli2项目下，输入指令
	- npm install vuex --save
	- 注意：项目名称不能为vuex，否则会安装不了
	![在这里插入图片描述](https://img-blog.csdnimg.cn/20210215140708307.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- vuex的使用
- 创建一个store文件夹，创建index.js文件
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210215140825891.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 配置index.js
```javascript
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{},
  mutations:{},
  actions:{},
  getters:{},
  modules:{}
})

export default store
```

- 在main.js中导入index.js
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210215141133836.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 多页面状态管理，用一个子组件（HelloVuex.vue）来模拟

App.vue
```html
<template>
  <div id="app">
    <h2>{{message}}</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="$store.state.counter++">+</button>
    <button @click="$store.state.counter--">-</button>
    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
  import HelloVuex from "./components/HelloVuex";
export default {
  name: 'App',
  data(){
    return {
      message:'我是App组件',
      // counter:0
    }
  },
  components:{
    HelloVuex
  }
}
</script>

<style>

</style>

```

HelloVuex

```html
<template>
  <div>
    <h2>{{$store.state.counter}}</h2>
  </div>
</template>

<script>
  export default {
    name: "HelloVuex"
  }
</script>

<style scoped>

</style>
```

- 在store的index.js的state中添加counter这个需要共同管理的状态
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210215141548212.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 在两个视图中分别对其进行使用和管理
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210215141753131.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210215141809570.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 运行截图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210215142103365.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
### 3.devtools和mutations
#### （1）Vuex状态管理图例
![在这里插入图片描述](https://img-blog.csdnimg.cn/202102151424368.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 由图例可以知道，上面例子中直接改动State状态的方法并不是Vuex所提倡的，因为这样很难去追踪到底是哪个页面对其进行了修改，非常不利于维护。
- 我们应该通过Actions和mutations来修改state，这样可以对修改进行相应的追踪
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210215142843316.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 这里需要借助一个浏览器插件，需要在浏览器中安装一个devtools
- 火狐浏览器：在火狐浏览器的扩展商店搜索devtools，找到Vue的devtools
- 扩展商店：[https://addons.mozilla.org/zh-CN/firefox/?utm_source=firefox-browser&utm_medium=firefox-browser&utm_content=find-more-link-bottom](https://addons.mozilla.org/zh-CN/firefox/?utm_source=firefox-browser&utm_medium=firefox-browser&utm_content=find-more-link-bottom)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210215143206567.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 谷歌内核的浏览器：在Chrome网上应用店搜索devtools，找到Vue相关的devtools即可
- Chrome网上应用店：[https://chrome.google.com/webstore?hl=zh-CN](https://chrome.google.com/webstore?hl=zh-CN)
- 打不开的网站，请自行搭建一个梯子访问，方法有很多，请自行查询
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210215143417199.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 安装完成后，打开Vuex的网页即可使用插件
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210215144225655.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
#### （2）使用mutations来改变state
- 在store中的index.js中的mutation配置
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210215145110438.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 在App.vue中使用store对象的commit方法来使用在mutations中定义的方法
![在这里插入图片描述](https://img-blog.csdnimg.cn/2021021514550655.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 在插件中可以追踪到每一个状态的改变
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210215145642151.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
### 4.vuex核心概念
#### （1）vuex核心概念
- vuex有几个核心的概念：
	- State
	- Getters
	- Mutation
	- Action
	- Module

#### （2）state单一状态树
- Vuex提出使用单—状态树,什么是单—状态树呢?
	- 英文名称是Single Source of Truth，也可以翻译成单一数据源。
	- 如果状态信息是保存到多个Store对象中的，那么之后的管理和维护等等都会变得特别困难。
	- 所以Vuex使用了单—状态树来管理应用层级的全部状态。
	- 单一状态树能够让我们最直接的方式找到某个状态的片段，而且在之后的维护和调试过程中，也可以非常方便的管理和维护。
	- 在一个项目中，只创建一个store来管理所有的状态

#### （3）getters的基本使用
- 有时候，需要从store中获取一些state变异后的状态，比如下面的Store中:
- 当然也可以使用计算属性来完成，但是这样当多个视图使用的时候，每个视图都要写相同的代码，这时候可以将其放到Getters中

```javascript
const store = new Vuex.Store({
  state:{
    counter:1000
  },
  getters:{
    mul(state){
      return state.counter * state.counter
    }
  },
```
在App.vue中
```html
   <h2>-----getters-----</h2>
   <h2>{{$store.getters.mul}}</h2>
```
- 运行截图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210215152649221.png)
#### （4）getters作为参数和传递参数
- getters作为参数

App.vue
```html
	<h2>-----getters-----</h2>
    <h2>{{$store.getters.mul}}</h2>
    <h2>{{$store.getters.getAge}}</h2>
    <h2>{{$store.getters.getAgeLength}}</h2>
```
index.js
```javascript
const store = new Vuex.Store({
  state:{
    counter:1000,
    student:[
      {name:'zhangsan', age:18},
      {name:'lisi', age:20},
      {name:'wangwu', age:10},
    ]
  },
 getters:{
    mul(state){
      return state.counter * state.counter
    },
    getAge(state){
      return state.student.filter(s => s.age > 10)
    },
    getAgeLength(state,getters){
      return getters.getAge.length
    }
  },
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210215154330876.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- getters默认是不能传递参数的,如果希望传递参数，那么只能让getters本身返回另一个函数.

```html
	<h2>-----getters-----</h2>
    <h2>{{$store.getters.mul}}</h2>
    <h2>{{$store.getters.getAge}}</h2>
    <h2>{{$store.getters.getAgeLength}}</h2>
    <h2>{{$store.getters.getAgeInput(10)}}</h2>
```

```javascript
const store = new Vuex.Store({
  state:{
    counter:1000,
    student:[
      {name:'zhangsan', age:18},
      {name:'lisi', age:20},
      {name:'wangwu', age:10},
    ]
  },
 getters:{
    mul(state){
      return state.counter * state.counter
    },
    getAge(state){
      return state.student.filter(s => s.age > 10)
    },
    getAgeLength(state,getters){
      return getters.getAge.length
    },
    getAgeInput(state){
      // return function (age) {
      //   return state.student.filter(s => s.age > age)
      // }

      //箭头函数
      return age => {
        return state.student.filter(s => s.age > age)
      }

    }
  },
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210215155407905.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
#### （5）mutation状态更新
- Vuex的store状态的更新唯一方式:提交Mutation
- Mutation主要包括两部分∶
	- 字符串的事件类型( type )
	- 一个回调函数( handler ) ,该回调函数的第一个参数就是state。
#### （6）mutation传递参数
- 在通过mutation更新数据的时候,有可能希望携带一些额外的参数
- 参数被称为是mutation的载荷(Payload)

index.js

```javascript
 mutations:{
    increment(state){
      state.counter++
    },
    decrement(state){
      state.counter--
    },
    incrementCount(state,count){
     state.counter +=count
    }
  },
```
App.vue
```html
  <button @click="addCount(5)">+5</button>
  <button @click="addCount(10)">+10</button>
  <script>
 methods:{
    add(){
      this.$store.commit('increment')
    },
    sub(){
      this.$store.commit('decrement')
    },
    addCount(count){
      this.$store.commit('incrementCount',count)
    }
  }
  </script>
```
- 但是如果参数不是一个
- 比如有很多参数需要传递.
- 这个时候,通常会以对象的形式传递,也就是payload是一个对象.
- 这个时候可以再从对象中取出相关的信息.
#### （7）mutation提交风格
- 上面的通过commit进行提交是一种普通的方式
- Vue还提供了另外—种风格,它是一个包含type属性的对象
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210215162159109.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- Mutation中的处理方式是将整个commit的对象作为payload使用,所以代码没有改变,依然如下:
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210215171949454.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

#### （8）mutation响应规则
- Vuex的store中的state是响应式的,当state中的数据发生改变时,Vue组件会自动更新.
- 这就要求我们必须遵守一些Vuex对应的规则:
- 提前在store中初始化好所需的属性.
- 当给state中的对象添加新属性时,使用下面的方式:
	- 方式一:使用Vue.set(obj, 'newProp', 123)
	- 方式二:用新对象给旧对象重新赋值
#### （9）mutation的类型常量
- 在mutation中,定义了很多事件类型(也就是其中的方法名称).
- 当项目增大时,Vuex管理的状态越来越多，需要更新状态的情况越来越多，那么意味着Mutation中的方法越来越多.
- 方法过多，使用者需要花费大量的经历去记住这些方法，甚至是多个文件间来回切换,查看方法名称,甚至如果不是复制的时候,可能还会出现写错的情况.
- 因此可以定义一个类型常量来代替方法名称，就不怕方法名写错了

在store中创建一个mutations-type.js文件
```javascript
export const INCREMENT = 'increment'
export const DECREMENT = 'decrement'
export const INCREMENTCOUNT = 'incrementCount'
```
在store中的index.js导入文件，在App.vue中导入文件，使用同一个名称，这样就可以保证mutations中的方法和App的中的类型保持一致。
![在这里插入图片描述](https://img-blog.csdnimg.cn/202102151658504.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210215165938367.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
#### （10）mutation同步函数
- 通常情况下,Vuex要求我们Mutation中的方法必须是同步方法.
	- 主要的原因是当我们使用devtools时,可以devtools可以帮助我们捕捉mutation的快照.
	- 但是如果是异步操作,那么devtools将不能很好的追踪这个操作什么时候会被完成.
	- 这时候在调试的时候将不能正确地调试
#### （11）action的使用
- 我们强调,不要再Mutation中进行异步操作.
- 但是某些情况,确实希望在Vuex中进行一些异步操作,比如网络请求,必然是异步的.这个时候怎么处理呢?
- Action类似于Mutation,但是是用来代替Mutation进行异步操作的.
- Action的基本使用：

```javascript
 actions:{
    updateStudent(context){
      new Promise((resolve,reject)=>{
        setTimeout(()=>{
          resolve()
        },1000)
      }).then(()=>{
        context.commit(UPDATE)
      })
    }
  },
```
App.vue
```html
<template>
 <div>	
 	<h2>-----action-----</h2>
    <h2>{{$store.state.student[0]}}</h2>
    <button @click="update">修改名字</button>
 </div>
 </template>
<script>
methods:{
	 update(){
      // this.$store.commit(UPDATE)
      this.$store.dispatch('updateStudent')
    }
}
</script>

```
- 根据状态管理图，改变state只能通过mutation来改变，执行mutation的方法使用commit，而执行action的方法是使用dispatch
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210215173951588.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/2021021517430730.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
#### （12）四个map方法的使用
- 四个核心概念的整合
- 项目结构（CLI3，Vue2）
![在这里插入图片描述](https://img-blog.csdnimg.cn/img_convert/60ffbbc4b41863006c8a7a7a6b8b169e.png)
- App.vue

```html
<template>
  <div id="app">
    <h1>------------App组件对状态的操作-----------</h1>
    <h2>{{ $store.state.student[0].name }}</h2>
    <h2>{{ $store.state.student[0].age }}</h2>
    <button @click="update">修改名字</button>
    <h1>--------------------------</h1>
    <h2>当前counter的值：{{ $store.state.counter }}</h2>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <button @click="addCount(n)">+5</button>
    <button @click="addCount(m)">+10</button>
    <h1>---------getters的使用-------------</h1>
    <h2>counter的平方{{ $store.getters.mul }}</h2>
    <h2>年龄大于10的对象：{{ $store.getters.getAge }}</h2>
    <h1>------------HelloVuex组件对状态的操作-----------</h1>
    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
import HelloVuex from "./components/HelloVuex";
export default {
  name: "App",
  data() {
    return {
      n: 5,
      m: 10,
    };
  },
  methods: {
    update() {
      this.$store.dispatch("updateStudent");
    },
    add() {
      this.$store.commit("INCREMENT");
    },
    sub() {
      this.$store.commit("DECREMENT");
    },
    addCount(count) {
      this.$store.commit({
        type: "INCREMENTCOUNT",
        count,
      });
    }
  },
  components: {
    HelloVuex,
  },
};
</script>

<style>
</style>
```
- HelloVuex.vue

```html
<template>
  <div>
    <h2>---HelloVuex----</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="addCount(n)">+5</button>
  </div>
</template>

<script>
  export default {
    name: "HelloVuex",
    data() {
      return {
        n:5
      }
    },
    methods: {
      addCount(count) {
      this.$store.commit({
        type: "INCREMENTCOUNT",
        count,
      });
    },
    },
  }
</script>

<style scoped>

</style>

```
- main.js

```javascript
import Vue from 'vue'
import App from './App'
import store from "./store";

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    render: h => h(App)
})
```
- index.js

```javascript
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
    counter: 1000,
    student: [
        { name: 'zhangsan', age: 18 },
        { name: 'lisi', age: 20 },
        { name: 'wangwu', age: 10 },
    ]
}
const actions = {
    updateStudent(context) {
        new Promise((resolve) => {
            setTimeout(() => {
                resolve()
            }, 1000)
        }).then(() => {
            context.commit('UPDATE')
        })
    }
}
const mutations = {
    INCREMENT(state) {
        state.counter++
    },
    DECREMENT(state) {
        state.counter--
    },
    INCREMENTCOUNT(state, payLoad) {
        state.counter += payLoad.count
    },
    UPDATE(state) {
        state.student[0].name = 'kobe'
    }
}
const getters = {
    mul(state) {
        return state.counter * state.counter
    },
    getAge(state) {
        return state.student.filter(s => s.age > 10)
    },
    getAgeLength(state, getters) {
        return getters.getAge.length
    },
    getAgeInput(state) {
        return age => {
            return state.student.filter(s => s.age > age)
        }

    }
}
const store = new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
})

export default store
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/img_convert/b3b0002155dbcc19765a5cbc7666240d.png)
- 此时我们发现一些可以优化的地方
![在这里插入图片描述](https://img-blog.csdnimg.cn/img_convert/bc9a0ea85f33140d7fb4a18372f5bb64.png)
- 初步优化
![在这里插入图片描述](https://img-blog.csdnimg.cn/img_convert/83e7c4204b93ef367a803155930a5b23.png)
1. mapState方法:用于帮助我们映射state中的数据为计算属性

```javascript
//引入
import {mapState} from 'vuex'
computed: {
//借助mapState生成计算属性:counter（对象写法)
...mapState({counter: 'counter'})，
//借助mapState生成计算属性: counter（数组写法)
...mapState(['counter'])，
}，
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/img_convert/7d948a3eb6906d5784afb35c7d7493c1.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/img_convert/2ee26fb1f3630047c7caa97dfb7c06c4.png)

2. mapGetters方法:用于帮助我们映射getters 中的数据为计算属性

```javascript
import { mapState, mapGetters } from "vuex";
computed: {
//借助mapGettlrs生成计算属性: sName,sAge,mul,getAge(对象写法)
...mapGetters({sName: 'sName',sAge:'sAge',mul:'mul',getAge:'getAge'}),
//借助mapGetters生成计算属性:sName,sAge,mul,getAge（数组写法)
...mapGetters([ 'sName','sAge','mul','getAge'])
},
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/img_convert/34f875d6245b50999873c1e4477e44e2.png)

3. mapActions方法:用于帮助我们生成与actions对话的方法，即:包含、\$store.dispatch(xxx)的函数

```javascript
import { mapState, mapGetters,mapActions } from "vuex";
methods:{
//靠mapActions生成: updateStudent（对象形式)
...mapActions({updateStudent:'updateStudent'}),
//靠mapActions生成: updateStudent（数组形式)
...mapActions(['updateStudent']),
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/img_convert/1539115492ce1b8693db24bb4181a1fb.png)

4.mapMutations方法:用于帮助我们生成与mutations对话的方法，即:包含$store.commit(xx)的函数

```javascript
methods: {
//靠mapActions生成: INCREMENT、 DECREMENT、INCREMENTCOUNT（对象形式)
...mapMutations({INCREMENT:'INCREMENT',DECREMENT:'DECREMENT',INCREMENTCOUNT:'INCREMENTCOUNT'}),
//靠mapMutations生成:INCREMENT、 DECREMENT、INCREMENTCOUNT（对象形式)
...mapActions(['INCREMENT','DECREMENT','INCREMENTCOUNT']),
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/img_convert/f0045cae5d6c9de6bd7494ffdcffa3cc.png)
#### （13）module的使用
- Module是模块的意思,为什么在Vuex中要使用模块
	- Vue使用单—状态树,那么也意味着很多状态都会交给Vuex来管理.
	- 当应用变得非常复杂时,store对象就有可能变得相当臃肿.
	- 为了解决这个问题, Vuex允许我们将store分割成模块(Module)，而每个模块拥有自己的state、mutations、actions、getters等
- module的使用：

index.js
```javascript
const moduleA = {
  state:{
    name:'zhangsan'
  },
  mutations:{
    name(state,payload){
      return state.name = payload.name
    }
  },
  getters:{
    updateName(state){
      return  state.name + '111'
    },
    updateName2(state,getters){
      return getters.updateName + '222'
    },
    updateName3(state,getters,rootState){
      return getters.updateName2 + rootState.counter
    }
  },
  actions:{
    changeName(context){
      setTimeout(()=>{
        context.commit({
          type:'name',
          name:'wangwu'
        })
      },1000)
    }
  }
}
const moduleB = {
  state:{},
  mutations:{},
  getters:{},
  actions:{}
}
const store = new Vuex.Store({
modules:{
    a:moduleA,
    b:moduleB
  }
})
```
- App.vue

```html
<template>
  <div id="app">
    <h2>------module的内容----</h2>
    <h2>{{$store.state.a.name}}</h2>
    <button @click="fullName">修改名字</button>
    <h2>{{$store.getters.updateName}}</h2>
    <h2>{{$store.getters.updateName2}}</h2>
    <h2>{{$store.getters.updateName3}}</h2>
    <button @click="AfullName">异步修改名字</button>
    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
  import HelloVuex from "./components/HelloVuex";
  import {INCREMENT,DECREMENT,INCREMENTCOUNT} from './store/mutations-type'
export default {
  name: 'App',
  components:{
    HelloVuex
  },
  methods:{
    fullName(){
      this.$store.commit({
        type:'name',
        name:'lisi'
      })
    },
    AfullName(){
      this.$store.dispatch("changeName")
    }
  }
}
</script>

<style>

</style>
```
- 程序分析
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210215183707557.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210215183919160.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210215184034681.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 运行结果
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210215184055396.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
#### （14）namespace(命名空间)
- 将四个map方法使用的例子优化为模块化
- 将对counter操作的部分作为一个模块，将对student操作的方法作为一个模块
- App.vue

```html
<template>
  <div id="app">
    <h1>------------App组件对状态的操作-----------</h1>
    <h2>{{ sName }}</h2>
    <h2>{{ sAge }}</h2>
    <button @click="updateStudent">修改名字</button>
    <h1>--------------------------</h1>
    <h2>当前counter的值：{{ counter }}</h2>
    <button @click="INCREMENT">+</button>
    <button @click="DECREMENT">-</button>
    <button @click="INCREMENTCOUNT(n)">+5</button>
    <button @click="INCREMENTCOUNT(m)">+10</button>
    <h1>---------getters的使用-------------</h1>
    <h2>counter的平方:{{ mul }}</h2>
    <h2>年龄大于10的对象：{{ getAge }}</h2>
    <h1>------------HelloVuex组件对状态的操作-----------</h1>
    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
import { mapState, mapGetters,mapActions,mapMutations } from "vuex";
import HelloVuex from "./components/HelloVuex";
export default {
  name: "App",
  data() {
    return {
      n: 5,
      m: 10,
    };
  },
  computed: {
    //对象写法
    // ...mapState({ counter:'counter' }),

    //数组写法
    ...mapState('countModules',["counter"]),

    //借助mapGettlrs生成计算属性: sName,sAge,mul,getAge(对象写法)
    // ...mapGetters({sName: 'sName',sAge:'sAge',mul:'mul',getAge:'getAge'}),

    //借助mapGetters生成计算属性:sName,sAge,mul,getAge（数组写法)
    ...mapGetters('countModules',["mul"]),
    ...mapGetters('studentModules',["sName", "sAge", "getAge"]),
  },
  methods: {
    //对象写法
    // ...mapActions({updateStudent:'updateStudent'}),
    //数组写法
    ...mapActions('studentModules',['updateStudent']),
    //对象写法
    // ...mapMutations({INCREMENT:'INCREMENT',DECREMENT:'DECREMENT',INCREMENTCOUNT:'INCREMENTCOUNT'}),
    //数组写法
    ...mapMutations('countModules',['INCREMENT','DECREMENT','INCREMENTCOUNT']),
  },
  components: {
    HelloVuex,
  },
};
</script>

<style>
</style>

```
- index.js

```javascript
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const countModules = {
    namespaced:true,
    state:{
        counter: 1000,
    },
    actions:{},
    mutations:{
        INCREMENT(state) {
            state.counter++
        },
        DECREMENT(state) {
            state.counter--
        },
        INCREMENTCOUNT(state, payLoad) {
            state.counter += payLoad
        }
    },
    getters:{
        mul(state) {
            return state.counter * state.counter
        },
    }
}

const studentModules = {
    namespaced: true,
    state:{
        student: [
            { name: 'zhangsan', age: 18 },
            { name: 'lisi', age: 20 },
            { name: 'wangwu', age: 10 },
        ]
    },
    actions:{
        updateStudent(context) {
            new Promise((resolve) => {
                setTimeout(() => {
                    resolve()
                }, 1000)
            }).then(() => {
                context.commit('UPDATE')
            })
        }
    },
    mutations:{
        UPDATE(state) {
            state.student[0].name = 'kobe'
        }
    },
    getters:{
        getAge(state) {
            return state.student.filter(s => s.age > 10)
        },
        getAgeLength(state, getters) {
            return getters.getAge.length
        },
        getAgeInput(state) {
            return age => {
                return state.student.filter(s => s.age > age)
            }
        },
        sName(state) {
            return state.student[0].name
        },
        sAge(state) {
            return state.student[0].age
        }
    }

}
const store = new Vuex.Store({
    modules:{
        countModules,
        studentModules
    }
})

export default store

```
![在这里插入图片描述](https://img-blog.csdnimg.cn/img_convert/067f180637e89f484605b78b3420f497.png)
- 在HelloVuex组件中还没有对其方法改为map，那么自己写的方法怎么指定对应的模块呢？

```html
<template>
  <div>
    <h2>---HelloVuex----</h2>
    <h2>{{ sName }}</h2>
    <button @click="updateStudent">修改名字</button>
    <h2>{{ counter }}</h2>
    <button @click="INCREMENTCOUNT(n)">+5</button>
    <h2>counter的平方:{{ mul }}</h2>
  </div>
</template>

<script>
export default {
  name: "HelloVuex",
  data() {
    return {
      n: 5,
    };
  },
  computed: {
    counter() {
      return this.$store.state.countModules.counter;
    },
    sName() {
      return this.$store.getters["studentModules/sName"];
    },
    mul() {
      return this.$store.getters["countModules/mul"];
    },
  },
  methods: {
    INCREMENTCOUNT(count) {
      this.$store.commit("countModules/INCREMENTCOUNT", count);
    },
    updateStudent() {
      this.$store.dispatch("studentModules/updateStudent");
    },
  },
};
</script>

<style scoped>
</style>

```
![在这里插入图片描述](https://img-blog.csdnimg.cn/img_convert/cd9ebb1bc723b85d4b11e98ea5dcb287.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/img_convert/c97562c7887f5e544fa3654b29933fb8.png)

### 5.vuex-store文件夹的目录组织
- 当Vuex管理过多的内容时,好的项目结构可以让代码更加清晰.
![在这里插入图片描述](https://img-blog.csdnimg.cn/2021021518532571.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210215192722968.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 在index.js中导入：

```javascript
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "./mutations";
import getters from "./getters";
import actions from "./actions";
import moduleA from "./module/moduleA";

Vue.use(Vuex)

const state = {
  counter:1000,
  student:[
    {name:'zhangsan', age:18},
    {name:'lisi', age:20},
    {name:'wangwu', age:10},
  ]
}

const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  modules:{
    a:moduleA,
  }
})

export default store
```
- 将对应的方法抽离导出即可
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210215193010307.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

- Vue3传送门：[https://blog.csdn.net/SuihideOmelet/article/details/119060990](https://blog.csdn.net/SuihideOmelet/article/details/119060990)