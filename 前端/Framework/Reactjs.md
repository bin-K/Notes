
# 一、React入门
官网：
中文官网：[https://react.docschina.org/](https://react.docschina.org/)
英文官网：[https://reactjs.org/](https://reactjs.org/)
### 1.React是什么
- React是一个将数据渲染为HTML视图的开源JavaScript库
### 2.React的特点
- 采用组件化模式、声明式编码，提高开发效率及组件复用率
- 在React Native中可以使用React语法进行移动端开发
- 使用虚拟DOM和Diffing算法，尽量减少与真实DOM的交互

### 3.React基本使用
- React安装
- 官方提供的 CDN 地址：
```javascript
<script src="https://unpkg.com/react@17/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
<!-- 生产环境中不建议使用 -->
<script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
```
- Staticfile CDN 的 React CDN 库，地址如下：

```javascript
<script src="https://cdn.staticfile.org/react/17.0.1/umd/react.development.js"></script>
<script src="https://cdn.staticfile.org/react-dom/17.0.1/umd/react-dom.development.js"></script>
<!-- 生产环境中不建议使用 -->
<script src="https://cdn.staticfile.org/babel-standalone/6.26.0/babel.min.js"></script>
```
- 如果想要将文件下载下来，打开上述的网址，按ctrl+s保存下来即可
- 相关js库
	- react.development.js：React的核心库
	- react-dom.development.js：提供操作DOM的react扩展库
	- babel.min.js：解析jsx语法代码转为js代码的库
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Hello React!</title>
<!--  引入React核心库-->
  <script src="../js/react.development.js"></script>
<!--  引入React-dom，用于支持react操作DOM-->
  <script src="../js/react-dom.development.js"></script>
<!--  引入babel，用于将JSX转为JS-->
  <script src="../js/babel.min.js"></script>
</head>
<body>

<div id="example"></div>

<script type="text/babel"> 
  //不能加引号，因为这不是字符串
  const VDOM = <h1>Hello, world!</h1>;
  //渲染虚拟DOM到页面中
  ReactDOM.render(VDOM ,  document.getElementById('example'));
</script>

</body>
</html>
```
- 程序分析
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210309095303271.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 运行截图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210309100431760.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
### 4.创建虚拟DOM的两种方式
- 使用jsx创建虚拟DOM

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>使用jsx创建虚拟DOM</title>
  <!--  引入React核心库-->
  <script src="../js/react.development.js"></script>
  <!--  引入React-dom，用于支持react操作DOM-->
  <script src="../js/react-dom.development.js"></script>
  <!--  引入babel，用于将JSX转为JS-->
  <script src="../js/babel.min.js"></script>
</head>
<body>
<div id="example"></div>

<script type="text/babel">
  //不能加引号，因为这不是字符串
  const VDOM =(
      <h1 id="title">
        <span>Hello, React!</span>
      </h1>
  )
  //渲染虚拟DOM到页面中
  ReactDOM.render(VDOM ,  document.getElementById('example'));
</script>
</body>
</html>
```
- 使用js创建虚拟DOM

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>使用js创建虚拟DOM</title>
  <!--  引入React核心库-->
  <script src="../js/react.development.js"></script>
  <!--  引入React-dom，用于支持react操作DOM-->
  <script src="../js/react-dom.development.js"></script>
</head>
<body>
<div id="example"></div>

<script type="text/javascript">
  //不能加引号，因为这不是字符串
  const VDOM = React.createElement("h1",{id:'title'},React.createElement("span",{},"Hello,React!"))
  //渲染虚拟DOM到页面中
  ReactDOM.render(VDOM ,  document.getElementById('example'));
</script>
</body>
</html>
```
- 二者的区别
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210309103106386.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
### 5.虚拟DOM和真实DOM
- 关于虚拟DOM
	- 本质是Object类型的对象（一般对象)
	- 虚拟DOM体较“轻”，真实DOM比较“重”，因为虚拟DOM是React内部在用，无需真实DOM上那么多的属性。
	- 虚拟DOM最终会被React转化为真实DOM，呈现在页面上。|

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>虚拟DOM和真实DOM</title>
  <!--  引入React核心库-->
  <script src="../js/react.development.js"></script>
  <!--  引入React-dom，用于支持react操作DOM-->
  <script src="../js/react-dom.development.js"></script>
  <!--  引入babel，用于将JSX转为JS-->
  <script src="../js/babel.min.js"></script>
</head>
<body>
<div id="example"></div>

<script type="text/babel">
  const VDOM =(
      <h1 id="title">
        <span>Hello, React!</span>
      </h1>
  )
  //渲染虚拟DOM到页面中
  ReactDOM.render(VDOM ,  document.getElementById('example'));
  const TDOM = document.getElementById('example')
  console.log("虚拟DOM",VDOM);
  console.log("真实DOM",TDOM);
</script>
</body>
</html>
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210309104145145.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
### 6.JSX语法规则
- 全称: JavaScript XML
- react 定义的一种类似于XML的JS扩展语法:JS+ XML
- 本质是 React.createElement(component, props, ...children)方法的语法糖
- 作用:用来简化创建虚拟DOM
	- 写法:var ele = <h1\>Hello JSXl</h1\>
	- 注意1:它不是字符串,也不是HTML/XML标签
	- 注意2:它最终产生的就是一个JS对象
- 标签名任意:HTML标签或其它标签

jsx语法规则:
- 定义虚拟DOM时，不要写引号。
- 标签中混入JS表达式时要用{}。
- 样式的类名指定不要用class，要用className。
- 内联样式，要用style={{key:value}}的形式去写。
- 只有一个根标签
- 标签必须闭合
- 标签首字母
	- 若小写字母开头，则将改标签转为html中同名元素，若html中无该标签对应的同名元素，则报错。
	- 若大写字母开头，react就去渲染对应的组件，若组件没有定义，则报错。
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JSX语法规则</title>
  <!--  引入React核心库-->
  <script src="../js/react.development.js"></script>
  <!--  引入React-dom，用于支持react操作DOM-->
  <script src="../js/react-dom.development.js"></script>
  <!--  引入babel，用于将JSX转为JS-->
  <script src="../js/babel.min.js"></script>
  <style type="text/css">
    .title{
      background: red;
    }
  </style>
</head>
<body>
<div id="example"></div>

<script type="text/babel">
  const MyId = 'tiTle'
  const MyContent = 'Hello, React!'
  //不能加引号，因为这不是字符串
  const VDOM =(
      <div>
        <h1 className="title" id={MyId.toLowerCase()}>
          <span style={{color:'white',fontSize:'29px'}}>{MyContent}</span>
        </h1>
        <input type="text"/>
        <good>123</good>
      </div>
  )
  //渲染虚拟DOM到页面中
  ReactDOM.render(VDOM ,  document.getElementById('example'));
</script>
</body>
</html>
```
- 程序分析
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210309111722630.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 运行截图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210309111825159.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 练习

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JSX练习</title>
</head>
<body>
<div id="example"></div>


<script src="../js/react.development.js"></script>
<script src="../js/react-dom.development.js"></script>
<script src="../js/babel.min.js"></script>

<script type="text/babel">
  const data = ['Angular','React','Vue']

  const VDOM = (
     <div>
       <h1>前端js框架</h1>
       <ul>
         {
           data.map((item,index) =>{
             return <li key={index}>{item}</li>
           })
         }
       </ul>
     </div>
  )

  ReactDOM.render(VDOM ,  document.getElementById('example'));
</script>

</body>
</html>
```
- 程序分析
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210309114146820.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 运行截图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210309114338879.png)
### 7.组件与模块、组件化和模块化
- 模块
	- 向外提供特定功能的js程序,一般就是一个js文件
	- 为什么要拆成模块:随着业务逻辑增加，代码越来越多且复杂。
	- 作用:复用js,简化js的编写,提高js运行效率
- 组件
	- 理解:用来实现局部功能效果的代码和资源的集合(html/css/js/image等等)
	- 为什么封装成组件:一个界面的功能更复杂
	- 作用:复用编码,简化项目编码,提高运行效率-
- 模块化
	- 当应用的js都以模块来编写的,这个应用就是一个模块化的应用
- 组件化
	- 当应用是以多组件的方式实现,这个应用就是一个组件化的应用
# 二、React面向组件编程
### 1.安装浏览器插件
- 火狐浏览器：在火狐浏览器的扩展商店搜索react
- 扩展商店：[https://addons.mozilla.org/zh-CN/firefox/?utm_source=firefox-browser&utm_medium=firefox-browser&utm_content=find-more-link-bottom](https://addons.mozilla.org/zh-CN/firefox/?utm_source=firefox-browser&utm_medium=firefox-browser&utm_content=find-more-link-bottom)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210309195817168.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

- 谷歌内核的浏览器：在Chrome网上应用店搜索react
- Chrome网上应用店：[https://chrome.google.com/webstore?hl=zh-CN](https://chrome.google.com/webstore?hl=zh-CN)
- 打不开的网站，请自行搭建一个梯子访问，方法有很多，请自行查询
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210309200128381.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

- 安装完成后，打开react的网页即可使用插件
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210309200031445.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
### 2.函数式组件
- 采用函数来定义组件

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>函数式组件</title>
</head>
<body>
<div id="example"></div>

<script src="../js/react.development.js"></script>
<script src="../js/react-dom.development.js"></script>
<script src="../js/babel.min.js"></script>

<script type="text/babel">
  function Demo(){
	console.log(this)//这里的this为undefined，因为Babel编译后开启了严格模式，禁止this指向window
    return <h2>函数式组件</h2>
  }
  ReactDOM.render(<Demo/> ,  document.getElementById('example'));
</script>
</body>
</html>
```
- 程序分析
- 执行了ReactDOM .render之后，发生了什么?
- React解析组件标签,找到了Demo组件。
- 发现组件是使用函数定义的，随后调用该函数，将返回的虚拟DOM转为真实DOM，随后呈现在页面中
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210309201806315.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 运行截图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210309202303700.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
### 3.类式组件
- 使用类来定义组件

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>类式组件</title>
</head>
<body>
<div id="example"></div>

<script src="../js/react.development.js"></script>
<script src="../js/react-dom.development.js"></script>
<script src="../js/babel.min.js"></script>

<script type="text/babel">
  class Demo extends React.Component {
    render(){
      //render是放Dome的原型对象上的，供实例使用
      //render中的this是Demo的实例对象（Demo组件实例对象）
      console.log(this)
      return <h2>类式组件</h2>
    }
  }
  ReactDOM.render(<Demo/>,document.getElementById('example'))
</script>
</body>
</html>
```
- 程序分析
- 执行了ReactDOM .render之后，发生了什么?
- React解析组件标签,找到了Demo组件。
- 发现组件是使用类定义的，随后new出来该类的实例，并通过该实例调用原型上的render方法
- 将render返回的虚拟DOM转为真实DOM，随后呈现在页面中
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210309205315871.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 运行截图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210309205813899.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
### 4.组件实例的三大属性：state
- state是组件对象最重要的属性,值是对象(可以包含多个key-value 的组合)
- 组件被称为"状态机",通过更新组件的state来更新对应的页面显示(重新渲染组件)
- 通过一个例子来理解：当点击文字时，天气会从炎热到凉爽互相切换
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>state</title>
</head>
<body>
<div id="example"></div>

<script src="../js/react.development.js"></script>
<script src="../js/react-dom.development.js"></script>
<script src="../js/babel.min.js"></script>

<script type="text/babel">
  class Weather extends React.Component {
    //构造其调用多少次？--1次
    constructor(props) {
      super(props);
      //初始化状态
      //此时的this指向的是Weather实例
      this.state = {isHot:true,wind:'微风'};
      //解决changeWeather中this指向的问题
      //利用bind方法在的Weather实例上加上changeWeather方法并命名为changeWeather
      this.changeWeather = this.changeWeather.bind(this);
    }
    //render调用多少次？ --1+n次，1是第一次渲染出页面，n是点击的次数
    render(){
      //读取状态，对象的解构
      const {isHot,wind} = this.state;
      return <h2 onClick={this.changeWeather}>今天天气很{isHot ? '炎热' : '凉爽'},{wind}</h2>;
    }
    changeWeather(){
      //changeWeather放在Weather的原型对象上，供实例使用
      //在没有解决changeWeather的this指向问题前
      //由于changeWeather是作为onClick的回调，所以不是通过实例调用的，是直接调用
      //由于类中的方法默认开启了严格模式，所以changeWeather的this为undefined
      //解决changeWeather中this指向的问题后，此时的this指向的是由react创建的Weather实例对象，此时才能找到state中的内容
      console.log(this);
      const isHot = this.state.isHot;
      this.setState({isHot: !isHot});
    }
  }
  ReactDOM.render(<Weather/>,document.getElementById("example"));
</script>
</body>
</html>
```
- 程序分析
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210309225316240.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 运行截图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210309225624828.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
 - 简化写法

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>state的简写</title>
</head>
<body>
<div id="example"></div>

<script src="../js/react.development.js"></script>
<script src="../js/react-dom.development.js"></script>
<script src="../js/babel.min.js"></script>

<script type="text/babel">
  class Weather extends React.Component {
    //在类中可以直接写赋值语句，其含义是在该类的实例中添加该属性
    //这里初始化了Weather实例的state属性
    state = {isHot:true,wind:'微风'};

    render(){
      //读取状态，对象的解构
      const {isHot,wind} = this.state;
      return <h2 onClick={this.changeWeather}>今天天气很{isHot ? '炎热' : '凉爽'},{wind}</h2>;
    }
    //这里同样可以看作是赋值语句，相当于在Weather实例上添加了changeWeather方法，原型中已经不存在changeWeather方法了
    //使用箭头函数的原因是箭头函数中的this本身无指向，它会往上层寻找
    //在这里的上层是Weather实例对象，所以this会指向Weather实例对象
    changeWeather = () =>{
      console.log(this)
      const isHot = this.state.isHot;
      this.setState({isHot: !isHot});
    }
  }
  ReactDOM.render(<Weather/>,document.getElementById("example"));
</script>
</body>
</html>
```
- 程序分析
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210310104826671.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 运行截图
![在这里插入图片描述](https://img-blog.csdnimg.cn/2021031010500395.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
### 5.组件实例的三大属性：props
- 每个组件对象都会有props(properties的简写)属性
- 组件标签的所有属性都保存在props 中
- 作用：
	- 通过标签属性从组件外向组件内传递变化的数据
	- 注意:组件内部不要修改props数据
- 注意：props属性只允许读而不允许在组件中修改
- 通过一个例子对其进行理解：
	- 需求:自定义用来显示一个人员信息的组件
	1)．姓名必须指定，且为字符串类型;
	2)．性别为字符串类型，如果性别没有指定，默认为男
	3)．年龄为数字类型，如果年龄没有指定，默认为18
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>props</title>
</head>
<body>
<div id="example1"></div>
<div id="example2"></div>

<script src="../js/react.development.js"></script>
<script src="../js/react-dom.development.js"></script>
<script src="../js/babel.min.js"></script>
<!-- 引入prop-types，用于对组件标签属性进行限制-->
<script src="../js/prop-types.js"></script>

<script type="text/babel">
  class Person extends React.Component {
    // 在 React 中，构造函数仅用于以下两种情况：
    // 通过给 this.state 赋值对象来初始化内部 state。
    // 为事件处理函数绑定实例
    // 在 React 组件挂载之前，会调用它的构造函数。在为 React.Component 子类实现构造函数时，
    // 应在其他语句之前前调用 super(props)。否则，this.props 在构造函数中可能会出现未定义的 bug。
    constructor(props) {
      super(props);
      console.log(this.props)
    }
    render(){
      const {name,sex,age} = this.props;
      return <ul>
                <li>{name}</li>
                <li>{sex}</li>
                <li>{age+1}</li>
             </ul>
    }
  }
  // Person.propTypes = {
  //   name : React.PropTypes.string.isRequired,
  //   sex :React.PropTypes.string,
  //   age :React.PropTypes.number
  // }
  //给Person的原型对象中添加约束
  Person.propTypes = {
    name: PropTypes.string.isRequired,
    sex:PropTypes.string,
    age:PropTypes.number
  }
  Person.defaultProps = {
    sex:'男',
    age:18
  }
  const p = {name:'张三',sex:"男",age:18}
  ReactDOM.render(<Person {...p}/>,document.getElementById("example1"))
  ReactDOM.render(<Person name = "李四" age = {19}/>,document.getElementById("example2"))
</script>
</body>
</html>
```
- 程序分析
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210310174056200.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210310175422679.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 关于为何要引入prop-types.js，以及如何引入
- 官方文档解释
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210310175537687.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 如何引入
- unpkg

```javascript
<!-- development version -->
<script src="https://unpkg.com/prop-types@15.6/prop-types.js"></script>
 
<!-- production version -->
<script src="https://unpkg.com/prop-types@15.6/prop-types.min.js"></script>
```

- cdnjs

```javascript
<!-- development version -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/prop-types/15.6.0/prop-types.js"></script>
 
<!-- production version -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/prop-types/15.6.0/prop-types.min.js"></script>
```
- 下载到本地，打开上面其中一个的地址，ctrl+s保存下来即可

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210310180457441.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 关于构造函数的问题
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210310180533182.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 运行截图
![在这里插入图片描述](https://img-blog.csdnimg.cn/202103101941596.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- props的简写

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>props的简写</title>
</head>
<body>
<div id="example1"></div>
<div id="example2"></div>

<script src="../js/react.development.js"></script>
<script src="../js/react-dom.development.js"></script>
<script src="../js/babel.min.js"></script>
<script src="../js/prop-types.js"></script>

<script type="text/babel">
  class Person extends React.Component {
    constructor(props) {
      super(props);
      console.log(this.props)
    }
    render(){
      const {name,sex,age} = this.props;
      return <ul>
                <li>{name}</li>
                <li>{sex}</li>
                <li>{age+1}</li>
             </ul>
    }
    static propTypes = {
      name: PropTypes.string.isRequired,
      sex:PropTypes.string,
      age:PropTypes.number
    }
    static defaultProps = {
      sex:'男',
      age:18
    }
  }

  const p = {name:'张三',sex:"男",age:18}
  ReactDOM.render(<Person {...p}/>,document.getElementById("example1"))
  ReactDOM.render(<Person name = "李四" age = {19}/>,document.getElementById("example2"))
</script>
</body>
</html>
```
- 程序分析
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210310200628851.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 运行截图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210310200645813.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 函数组件使用props
- 由于函数可以接收参数，所以props是函数组件唯一能使用的属性
- 传入的数值会放在props中，由函数接收

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>函数组件使用props</title>
</head>
<body>
<div id="example1"></div>
<div id="example2"></div>

<script src="../js/react.development.js"></script>
<script src="../js/react-dom.development.js"></script>
<script src="../js/babel.min.js"></script>
<script src="../js/prop-types.js"></script>

<script type="text/babel">
  function Person(props) {
    const {name,sex,age}  = props;
    return <ul>
              <li>{name}</li>
              <li>{sex}</li>
              <li>{age}</li>
           </ul>
  }
  Person.propTypes = {
    name : PropTypes.string.isRequired,
    sex :PropTypes.string,
    age :PropTypes.number
  }
  Person.defaultProps = {
    sex:'男',
    age:18
  }
  const p = {name:'张三',sex:"男",age:18}
  ReactDOM.render(<Person {...p}/>,document.getElementById("example1"))
  ReactDOM.render(<Person name = "李四" age = {19}/>,document.getElementById("example2"))
</script>
</body>
</html>
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210310201516165.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 运行截图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210310201547555.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
### 6.组件实例的三大属性：refs
- 组件内的标签可以定义ref属性来标识自己，有点类似于HTML标签的id属性，收集到的ref会放在实例对象的refs属性中
- 主要有三种形式：
	- 字符串形式的ref
	- 回调形式的ref
	- createRef创建ref容器
- 通过一个例子来理解
- 有两个输入框，一个按钮，一个输入框输入内容，通过按钮点击弹出该输入框输入的内容，一个在失去焦点时，弹出输入框输入的内容
- 字符串形式的ref

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>字符串形式的refs</title>
</head>
<body>
<div id="example"></div>

<script src="../js/react.development.js"></script>
<script src="../js/react-dom.development.js"></script>
<script src="../js/babel.min.js"></script>

<script type="text/babel">
  class Demo extends React.Component {
    showData = ()=>{
      const {input1} = this.refs;
      alert(input1.value);
    }
    showData2 = ()=>{
      const {input2} = this.refs;
      alert(input2.value);
    }
    render(){
      console.log(this);
      return (
          <div>
            <input ref="input1" type="text" placeholder="点击按钮提示信息"/><br/><br/>
            <button onClick={this.showData}>点击按钮提示信息</button><br/><br/>
            <input onBlur={this.showData2} ref="input2" type="text" placeholder="失去焦点提示信息"/>
          </div>
      )
    }
  }
  ReactDOM.render(<Demo/> ,  document.getElementById('example'));
</script>
</body>
</html>
```
- 程序分析
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210310213208901.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210310213432966.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

- 运行截图
![在这里插入图片描述](https://img-blog.csdnimg.cn/2021031021332073.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 回调形式的ref

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>回调形式的refs</title>
</head>
<body>
<div id="example"></div>

<script src="../js/react.development.js"></script>
<script src="../js/react-dom.development.js"></script>
<script src="../js/babel.min.js"></script>

<script type="text/babel">
  class Demo extends React.Component {
    showData = ()=>{
      const {input1} = this;
      alert(input1.value);
    }
    showData2 = ()=>{
      const {input2} = this;
      alert(input2.value);
    }
    render(){
      return (
          <div>
            <input ref={(c)=>{this.input1 = c}} type="text" placeholder="点击按钮提示信息"/><br/><br/>
            <button onClick={this.showData}>点击按钮提示信息</button><br/><br/>
            <input onBlur={this.showData2} ref={(c) =>{this.input2 = c}} type="text" placeholder="失去焦点提示信息"/>
          </div>
      )
    }
  }
  ReactDOM.render(<Demo/> ,  document.getElementById('example'));
</script>
</body>
</html>
```
- 程序分析
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210310214021911.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 运行截图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210310214054588.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 回调形式ref调用次数的问题
- 在官网中有提到这样一个问题
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210310214246108.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>回调refs调用次数的问题</title>
</head>
<body>
<div id="example"></div>

<script src="../js/react.development.js"></script>
<script src="../js/react-dom.development.js"></script>
<script src="../js/babel.min.js"></script>

<script type="text/babel">
  class Demo extends React.Component {
    state = {isHot:true}
    showData = ()=>{
      const {input1} = this;
      alert(input1.value);
    }
    changeWeather = ()=>{
      const isHot = this.state.isHot;
      this.setState({isHot:!isHot})
    }
    save = (c)=>{
      this.input1 = c;
      console.log(c);
    }
    render(){
      const {isHot} = this.state;
      return (
          <div>
            <h1 onClick={this.changeWeather}>今天天气很{isHot ? "炎热" : "凉爽"}</h1>
            {/*<input ref={(c) =>{this.input1 = c,console.log(c)}} type="text" placeholder="点击获取信息"/><br/><br/>*/}
            <input ref={this.save} type="text" placeholder="点击获取信息"/><br/><br/>
            <button onClick={this.showData}>点击获取信息</button>
          </div>
      )
    }
  }
  ReactDOM.render(<Demo/> ,  document.getElementById('example'));
</script>
</body>
</html>
```
- 程序分析
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210310215804147.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210310220020250.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- createRef创建ref容器

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>createRef的使用</title>
</head>
<body>
<div id="example"></div>

<script src="../js/react.development.js"></script>
<script src="../js/react-dom.development.js"></script>
<script src="../js/babel.min.js"></script>

<script type="text/babel">
  class Demo extends React.Component {
    ref1 = React.createRef();
    ref2 = React.createRef();
    showData = ()=>{
      const current = this.ref1.current;
      alert(current.value);
    }
    showData2 = ()=>{
      const current = this.ref2.current;
      alert(current.value);
    }
    render(){
      return (
          <div>
            <input ref={this.ref1} type="text" placeholder="点击按钮提示信息"/><br/><br/>
            <button onClick={this.showData}>点击按钮提示信息</button><br/><br/>
            <input onBlur={this.showData2} ref={this.ref2} type="text" placeholder="失去焦点提示信息"/>
          </div>
      )
    }
  }
  ReactDOM.render(<Demo/> ,  document.getElementById('example'));
</script>
</body>
</html>
```
- 程序分析
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210310220503429.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 运行截图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210310220554575.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
### 7.react中的事件处理
- 通过onXxx属性指定事件处理函数(注意大小写)
	- React使用的是自定义(合成)事件，而不是使用的原生DOM事件---为了更好的兼容
	- React中的事件是通过事件委托方式处理的(委托给组件最外层的元素)---为了更加高效
- 通过event.target得到发生事件的DOM元素对象 ---不要过度使用ref
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210311103534917.png)
- 如果发生事件的元素正好是需要操作的元素就可以省略ref，通过event.target得到发生事件的DOM元素对象

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>react中的事件处理</title>
</head>
<body>
<div id="example"></div>

<script src="../js/react.development.js"></script>
<script src="../js/react-dom.development.js"></script>
<script src="../js/babel.min.js"></script>

<script type="text/babel">
  class Demo extends React.Component {
    ref1 = React.createRef();

    showData = ()=>{
      const current = this.ref1.current;
      alert(current.value);
    }
    showData2 = (event)=>{
      alert(event.target.value);
    }
    render(){
      return (
          <div>
            <input ref={this.ref1} type="text" placeholder="点击按钮提示信息"/><br/><br/>
            <button onClick={this.showData}>点击按钮提示信息</button><br/><br/>
            <input onBlur={this.showData2}  type="text" placeholder="失去焦点提示信息"/>
          </div>
      )
    }
  }
  ReactDOM.render(<Demo/>,document.getElementById("example"));
</script>
</body>
</html>
```

- 程序分析

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210311105724341.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 运行截图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210311105751467.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
### 8.受控组件和非受控组件
- 包含表单的组件分类：
	- 受控组件
	- 非受控组件
- 非受控组件：页面中所有输入类的DOM，如果其中的数据是现用现取的，就是非受控组件
- 受控组件：页面中所有输入类的DOM，如果其中的数据是先放在state状态里，需要时再取出，就是受控组件，有点类似于Vue的双向绑定
- 通过一个例子来理解
- 有两个输入框，一个输入用户名，一个输入密码，一个登录按钮，点击登录按钮时，弹出输入框中的用户名和密码
- 非受控组件

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>非受控组件</title>
</head>
<body>
<div id="example"></div>

<script src="../js/react.development.js"></script>
<script src="../js/react-dom.development.js"></script>
<script src="../js/babel.min.js"></script>

<script type="text/babel">
  class Login extends React.Component{
    submit = (event)=>{
      event.preventDefault()//阻止表单提交
      const {username,password} = this;
      alert(`当前的用户名：${username.value},当前的密码：${password.value}`)
    }
    render(){
      return (
          <form action="#" onSubmit={this.submit}>
            用户名：<input ref={(c) =>{this.username = c}} type="text"name="username"/>
            密码：<input ref={(c) =>{this.password = c}} type="password" name="password"/>
            <button>登录</button>
          </form>
      )
    }
  }
  ReactDOM.render(<Login/> ,  document.getElementById('example'));
</script>
</body>
</html>
```
- 程序分析
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210311112627797.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 运行截图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210311112646920.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 受控组件

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>非受控组件</title>
</head>
<body>
<div id="example"></div>

<script src="../js/react.development.js"></script>
<script src="../js/react-dom.development.js"></script>
<script src="../js/babel.min.js"></script>

<script type="text/babel">
  class Login extends React.Component{
    //初始化状态
    state = {
      username:'',
      password:''
    }

    saveUsername = (event)=>{
      this.setState({username: event.target.value})
    }

    savePassword= (event)=>{
      this.setState({password: event.target.value})
    }
    submit = (event)=>{
      event.preventDefault()//阻止表单提交
      const {username,password} = this.state;
      alert(`当前的用户名：${username},当前的密码：${password}`)
    }
    render(){
      return (
          <form action="#" onSubmit={this.submit}>
            用户名：<input onChange={this.saveUsername} type="text"name="username"/>
            密码：<input onChange={this.savePassword} type="password" name="password"/>
            <button>登录</button>
          </form>
      )
    }
  }
  ReactDOM.render(<Login/> ,  document.getElementById('example'));
</script>
</body>
</html>
```
- 程序分析
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210311114137944.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 运行截图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210311114226198.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
### 9.高阶函数--函数柯里化
- 高阶函数:如果一个函数符合下面2个规范中的任何一个，那该函数就是高阶函数。
	- 若A函数，接收的参数是一个函数，那么A就可以称之为高阶函数。
	- 若A函数，调用的返回值依然是一个函数，那么A就可以称之为高阶函数。
	- 常见的高阶函数有: Promise、 setTimeout、 arr.map()"等等
- 函数的柯里化:通过函数调用继续返回函数的方式，实现多次接收参数最后统一处理的函数编码形式。
- 上述受控组件例子可以这样优化

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>高阶函数--函数柯里化</title>
</head>
<body>
<div id="example"></div>

<script src="../js/react.development.js"></script>
<script src="../js/react-dom.development.js"></script>
<script src="../js/babel.min.js"></script>

<script type="text/babel">
  class Login extends React.Component{
    //初始化状态
    state = {
      username:'',
      password:''
    }

    saveFormData = (dataType)=>{
      return (event) =>{
        this.setState({[dataType]:event.target.value})
      }
    }

    submit = (event)=>{
      event.preventDefault()//阻止表单提交
      const {username,password} = this.state;
      alert(`当前的用户名：${username},当前的密码：${password}`)
    }
    render(){
      return (
          <form action="#" onSubmit={this.submit}>
            用户名：<input onChange={this.saveFormData("username")} type="text"name="username"/>
            密码：<input onChange={this.saveFormData("password")} type="password" name="password"/>
            <button>登录</button>
          </form>
      )
    }
  }
  ReactDOM.render(<Login/> ,  document.getElementById('example'));
</script>
</body>
</html>
```
- 程序分析
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210311135337536.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 运行截图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210311135406422.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 当然不适应柯里化也能实现

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>不使用柯里化</title>
</head>
<body>
<div id="example"></div>

<script src="../js/react.development.js"></script>
<script src="../js/react-dom.development.js"></script>
<script src="../js/babel.min.js"></script>

<script type="text/babel">
  class Login extends React.Component{
    //初始化状态
    state = {
      username:'',
      password:''
    }

    saveFormData = (dataType,event)=>{
        this.setState({[dataType]:event.target.value})
    }

    submit = (event)=>{
      event.preventDefault()//阻止表单提交
      const {username,password} = this.state;
      alert(`当前的用户名：${username},当前的密码：${password}`)
    }
    render(){
      return (
          <form action="#" onSubmit={this.submit}>
            用户名：<input onChange={(event) =>{this.saveFormData("username",event)}} type="text"name="username"/>
            密码：<input onChange={(event) =>{this.saveFormData("password",event)}} type="password" name="password"/>
            <button>登录</button>
          </form>
      )
    }
  }
  ReactDOM.render(<Login/> ,  document.getElementById('example'));
</script>
</body>
</html>
```
- 程序分析
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210311135933275.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
 - 运行截图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210311140021433.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
### 10.组件的生命周期
- 组件从创建到死亡它会经历一些特定的阶段。
- React组件中包含一系列勾子函数(生命周期回调函数)，会在特定的时刻调用。
- 在定义组件时会在特定的生命周期回调函数中做特定的工作。

 react16.x.x及以前的版本的生命周期如图，图主要分为两个部分，一个是组件挂载时，一个是组件更新时
 ![在这里插入图片描述](https://img-blog.csdnimg.cn/20210311171124653.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 组件挂载时，以一个计数器的例子展示

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>生命周期(旧)</title>
</head>
<body>
<div id="example"></div>

<script src="../js/16.8.0/react.development.js"></script>
<script src="../js/16.8.0/react-dom.development.js"></script>
<script src="../js/babel.min.js"></script>

<script type="text/babel">
  class Count extends React.Component{
    //构造器，初始化状态
    constructor(props) {
      console.log("constructor");
      super(props);
      this.state = {count:1};
    }
    //组件将要挂载
    componentWillMount(){
      console.log("componentWillMount");
    }
    //挂载组件
    render(){
      console.log("render")
      const {count} = this.state
      return (
          <div>
            <h2>当前计数为：{count}</h2>
            <button onClick={this.increase}>加1</button>
            <button onClick={this.death}>清除组件</button>
          </div>
      )
    }
    //组件挂载完成
    componentDidMount(){
      console.log("componentDidMount");
    }
    componentWillUnmount(){
      console.log("componentWillUnmount");
    }
    increase = ()=>{
      const {count} = this.state;
      this.setState({count: count+1})
    }
    death = ()=>{
      ReactDOM.unmountComponentAtNode(document.getElementById("example"))
    }
  }
  ReactDOM.render(<Count/> ,  document.getElementById('example'));
</script>
</body>
</html>
```
- 程序分析
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210311172358289.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 运行截图

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210311172648988.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210311173256557.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

- 组件更新时
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210311174454627.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 组件更新分为三条线、第一条是强制更新组件、第二条是正常更新状态、第三条是父子组件的状态更新

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>生命周期(旧)</title>
</head>
<body>
<div id="example"></div>
<div id="example1"></div>

<script src="../js/16.8.0/react.development.js"></script>
<script src="../js/16.8.0/react-dom.development.js"></script>
<script src="../js/babel.min.js"></script>

<script type="text/babel">
  class Count extends React.Component{
    //构造器，初始化状态
    constructor(props) {
      console.log("constructor");
      super(props);
      this.state = {count:1};
    }
    //组件将要挂载
    componentWillMount(){
      console.log("componentWillMount");
    }
    //组件是否可以更新
    shouldComponentUpdate(){
      console.log("shouldComponentUpdate")
      return true;
    }
    //组件更新前
    componentWillUpdate(){
      console.log("componentWillUpdate");
    }
    //挂载组件
    render(){
      console.log("render")
      const {count} = this.state
      return (
          <div>
            <h2>当前计数为：{count}</h2>
            <button onClick={this.increase}>加1</button>
            <button onClick={this.death}>清除组件</button>
            <button onClick={this.force}>不更改任何状态中的数据，对组件进行强制更新</button>
          </div>
      )
    }
    //组件挂载完成
    componentDidMount(){
      console.log("componentDidMount");
    }
    //组件更新后
    componentDidUpdate(){
      console.log("componentDidUpdate");
    }
    //组件将要被卸载时
    componentWillUnmount(){
      console.log("componentWillUnmount");
    }
    //自定义函数
    increase = ()=>{
      const {count} = this.state;
      this.setState({count: count+1})
    }
    death = ()=>{
      ReactDOM.unmountComponentAtNode(document.getElementById("example"))
    }
    force = ()=>{
      this.forceUpdate()
    }
  }
  class Parent extends React.Component{
    state = {carName:'奔驰'};
    change = ()=>{
      this.setState({carName:'宝马'})
    }
    render(){
      let {carName} = this.state
      return (
          <div>
            <h1>父组件</h1>
            <button onClick={this.change}>切换车品牌</button>
            <Chirld carName={carName}/>
          </div>
      )
    }
  }
  class Chirld extends React.Component{
    componentWillReceiveProps(){
      console.log("componentWillReceiveProps");
    }
    render(){
      return (
          <div>
            <h1>子组件,车的品牌是：{this.props.carName}</h1>
          </div>
      )
    }
  }
  ReactDOM.render(<Count/> ,  document.getElementById('example'));
  ReactDOM.render(<Parent/>,document.getElementById('example1'));
</script>
</body>
</html>
```
- 程序分析
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210311204332739.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210311205309883.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 运行截图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210311205659547.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210311210538934.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210311210806279.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

旧的生命周期总结
- 初始化阶段:由ReactDOM.render()触发---初次渲染
	- constructor()
	- componentWillMount()
	- render()
	- componentDidMount() 
	常用，一般在这个钩子中做一些初始化的事，例如:开启定时器、发送网络请求、订阅消息
- 更新阶段:由组件内部this.setSate()或父组件render触发
	- shouldcomponentUpdate()
	- componentwillUpdate()
	- render() 
	必须使用的一个
	- componentDidUpdate()
- 卸载组件:由ReactDOM.unmountComponentAtNode()触发
	- componentWillUnmount()
	常用，一般在这个钩子中做一些收尾的事，例如:关闭定时器、取消订阅消息

react17版本以上的生命周期如图：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210311212822835.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 对比俩个图，可以发现：有三个函数没有了，分别是componentWillMount，componentWillReceiveProps、componentWillUpdate，而多了两个函数，分别是：getDerivedStateFromProps、getSnapshotBeforeUpdate
注意：Recat更新DOM和refs那一步只是旧的图没有标识出来，新增的两个函数，用到的几率极少
- 在react17版本中运行旧生命周期的代码，观察到控制台有如下输出：
![在这里插入图片描述](https://img-blog.csdnimg.cn/2021031121361486.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210311213751310.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 至于为何要如此，官方文档时这样解释的
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210311214129153.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210311214328120.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210311214405493.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- getDerivedStateFromProps，在官方文档中通过直接搜索可以发现这样的解释：它的作用是，state的值在任何时候都取决于props的话，可以调用该函数来实现，了解即可

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210311215253416.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210311222724504.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)


- getSnapshotBeforeUpdate
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210311220748971.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/2021031122374989.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- getSnapshotBeforeUpdate的场景应用（记住滚轮位置）

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>getSnapshotBeforeUpdate的场景应用</title>
  <style>
    .list{
      width: 200px;
      height: 150px;
      background-color: skyblue;
      overflow: auto;
    }
    .news{
      height: 30px;
    }
  </style>
</head>
<body>
<div id="example"></div>

<script src="../js/react.development.js"></script>
<script src="../js/react-dom.development.js"></script>
<script src="../js/babel.min.js"></script>

<script type="text/babel">
  class NewList extends React.Component{
    state = {newArr:[]}

    componentDidMount(){
      setInterval(()=>{
        //获取原状态
        const {newArr} = this.state;
        const news = '新闻' + (newArr.length+1);
        this.setState({newArr:[news,...newArr]})
      },1000)
    }
    getSnapshotBeforeUpdate(){
      return this.refs.list.scrollHeight;
    }
    componentDidUpdate(prevProps,prevState,height){
      this.refs.list.scrollTop += this.refs.list.scrollHeight - height;
    }
    render(){
      return (
          <div className="list" ref="list">
            {
              this.state.newArr.map((n,index)=>{
                return <div className="news" key={index}>{n}</div>
              })
            }
          </div>
      )
    }
  }
  ReactDOM.render(<NewList/> ,  document.getElementById('example'));
</script>
</body>
</html>
```
- 程序分析
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210311230032741.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 运行截图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210311230216724.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

新的生命周期总结
- 初始化阶段:由ReactDOM.render()触发---初次渲染
	- constructor()
	- getDerivedStateFromProps
	- render()
	- componentDidMount()
- 更新阶段:由组件内部this.setSate()或父组件重新render触发
	- shouldComponentUpdate()
	- render()
	- getSnapshotBeforeUpdate
	- componentDidUpdate()
- 卸载组件:由ReactDOM.unmountComponentAtNode()触发
	- componentWillUnmount( )
### 11.DOM的diffing算法
- diffing算法是对比虚拟DOM中的数据相较于真实DOM中，是否发生变化，若发生了变化，则React会重新渲染变化的数据到真实DOM中，而没有发生变化的数据，则不会重新渲染，依旧使用的是原来的。例如：页面上展示了100条数据，要加一条，若是没有diffing算法，前100条数据外加新增的这一条数据要重新渲染，而通过diffing算法，只需要渲染一条即可，效率大大得到提升。
- 注意，diffing算法比较的最小粒度是标签，但是如何标签中嵌套了标签，即使跟标签是要被重新渲染的，其子标签不变的标签依旧不会重新渲染。
- 下面通过一个例子来验证diffing算法

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>验证diffing算法</title>
</head>
<body>
<div id="example"></div>

<script src="../js/react.development.js"></script>
<script src="../js/react-dom.development.js"></script>
<script src="../js/babel.min.js"></script>

<script type="text/babel">
  class Time extends React.Component{
    state = {date:new Date()}

    componentDidMount(){
      setInterval(()=>{
        this.setState({date:new Date()})
      },1000)
    }

    render(){
      return (
          <div>
            <h1>Hello</h1>
            <input type="text"/><br/>
            <span>
              现在是：{this.state.date.toTimeString()}<br/>
              <input type="text"/>
            </span>
          </div>
      )
    }
  }
  ReactDOM.render(<Time/> ,  document.getElementById('example'));
</script>
</body>
</html>
```
- 程序分析
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210312202511263.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

- 经典面试题:
	-  react/vue中的key有什么作用? (key的内部原理是什么? )
	- 为什么遍历列表时，key最好不要用index?

虚拟DOM中key的作用:
- 简单的说:key是虚拟DOM对象的标识，在更新显示时key起着极其重要的作用
- 详细的说:当状态中的数据发生变化时，react会根据【新数据】生成【新的虚拟DOM】,随后React进行【新虚拟DOM】与【旧虚拟DOM】的diffing比较，比较规则如下:
	- 旧虚拟DOM中找到了与新虚拟DOM相同的key:
		(1).荐虚拟DOM中内容没变，直接使用之前的真实DOM
		(2).若虚拟DOM中内容变了，则生成新的真实DOM，随后替换掉页面中之前的真实DOM
	- 旧虚拟DOM中未找到与新虚拟DOM相同的key：
		根据数据创建新的真实DOM，随后渲染到到页面

用index作为key可能会引发的问题:
- 若对数据进行:逆序添加、逆序删除等破坏顺序操作:
	- 会产生没有必要的真实DOM更新--------界面效果没问题，但效率低。
- 如果结构中还包含输入类的DOM:
	- 会产生错误DOM更新---------界面有问题。
- 注意!如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，
仅用于渲染列表用于展示，使用index作为key是没有问题的。

开发中如何选择key? :
- 最好使用每条数据的唯一标识作为key，比如id、手机号、身份证号、学号等唯一值。
- 如果确定只是简单的展示数据,用index也是可以的。

通过一个例子来说明

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>key的作用</title>
</head>
<body>
<div id="example"></div>

<script src="../js/react.development.js"></script>
<script src="../js/react-dom.development.js"></script>
<script src="../js/babel.min.js"></script>

<script type="text/babel">
  class Person extends React.Component{
    state = {
      person:[
        {id:1,name:'张三',age:18},
        {id:2,name:'李四',age:19},
      ]
    }

    add = ()=>{
      const {person} = this.state;
      const p = {id:3,name:'王五',age:20}
      this.setState({person:[p,...person]})
    }

    render(){
      return (
          <div>
            <ul>
              {
                //key值由index决定
                this.state.person.map((person,index)=>{
                  return <li key={index}>{person.name}-----{person.age}<input type="text"/></li>
                })
              }
            </ul>
            <button onClick={this.add}>添加王五</button><br/>
            --------------------------------------------------
            <ul>
              {
                //key值由数据的唯一标识决定
                this.state.person.map((person)=>{
                  return <li key={person.id}>{person.name}-----{person.age}<input type="text"/></li>
                })
              }
            </ul>
          </div>
      )
    }
  }
  ReactDOM.render(<Person/> ,  document.getElementById('example'));
</script>
</body>
</html>
```
- 程序分析
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210312223016972.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
# 三、React脚手架
### 1.React脚手架的安装
- xxx脚手架:用来帮助程序员快速创建一个基于xxx库的模板项目
	- 包含了所有需要的配置(语法检查、jsx编译、devServer...) 
	- 下载好了所有相关的依赖
	- 可以直接运行一个简单效果
- react提供了一个用于创建react 项目的脚手架库: create-react-app
- 项目的整体技术架构为: react + webpack + es6 + eslint
- 使用脚手架开发的项目的特点:模块化,组件化,工程化

创建项目并启动
- 第一步，全局安装:npm install -g create-react-app
- 第二步，切换到想创项目的目录，使用命令: create-react-app hello-react
- 第三步，进入项目文件夹:cd hello-react
- 第四步，启动项目: npm start
- 注意：hello-react是自己命名的名称
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210313095135947.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210313095342771.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210313095734424.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210313095901697.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210313095913288.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 脚手架是可以实时编译的，当你改动了页面代码，浏览器的页面也会跟着改变，要结束服务器开启，在命令行输入ctrl+c

### 2.脚手架文件介绍
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210313103253336.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- index.html文件的一些代码作用
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210313102249722.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- index.js
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210313102604249.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
### 3.一个简单的hello组件
- 在这里已经将大部分官方创建的文件删除了，对于目前来说暂时使用不到，这里只保留了三个文件，一个主页面：index.html，一个入口文件：inex.js，和一个App组件：App.js
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210313132844210.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 里面的代码也做了相应的改动
- index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <!--   %PUBLIC_URL%代表public文件夹    -->
  <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
  <title>Hello React</title>
</head>
<body>
  <div id="root"></div>
</body>
</html>
```
- index.js

```javascript
//引入React核心库
import React from 'react';
//引入ReactDOM
import ReactDOM from 'react-dom';
//引入组件App
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

```
- App.js

```javascript
import React,{Component} from "react";

import Hello from "./component/Hello";
import Welcome from "./component/Welcome";

export default class App extends Component{
  render() {
    return (
        <div>
          <Hello/>
          <Welcome/>
        </div>
    )
  }
}
```
- Hello组件
- ![在这里插入图片描述](https://img-blog.csdnimg.cn/20210313133029781.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- Welcome组件
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210313133113225.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 运行截图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210313132636642.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
### 4.样式的模块化
- 上面提到一个问题：当两个index.css文件中存在同名样式时，后面的样式会将前面的覆盖掉。就像这样：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210313133604961.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 这里可以保证名字不一样来解决问题，可以写成less文件使其加以区分，也可以使用样式的模块化来解决问题：
	- 样式的模块化：将index.css改名为index.module.css
	- 在引入时这样引入：import hello from "./index.module.css"
	- 使用时：clssName={hello.title}即可
	- 其他组件也是一样的道理
	![在这里插入图片描述](https://img-blog.csdnimg.cn/20210313134139750.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
### 5.组件化编码流程
- 拆分组件:拆分界面,抽取组件
- 实现静态组件:使用组件实现静态页面效果
- 实现动态组件
	- 动态显示初始化数据
		- 数据类型
		- 数据名称
		- 保存在哪个组件?
	- 交互(从绑定事件监听开始)
### 6.todolist案例
#### （1） 需求：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210314104017756.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 案例结构
![在这里插入图片描述](https://img-blog.csdnimg.cn/2021031410422653.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

#### （2）静态页面（还未使用脚手架）
- index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="index.css">
  <title>React App</title>
</head>
<body>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <div class="todo-header">
          <input type="text" placeholder="请输入你的任务名称，按回车确认"/>
        </div>
        <ul class="todo-main">
          <li>
            <label>
              <input type="checkbox"/>
              <span>xxxxx</span>
            </label>
            <button class="btn btn-danger" style="display: none">删除</button>
          </li>
          <li>
            <label>
              <input type="checkbox"/>
              <span>xxxxx</span>
            </label>
            <button class="btn btn-danger" style="display: none">删除</button>
          </li>
        </ul>
        <div class="todo-footer">
          <label>
            <input type="checkbox"/>
          </label>
          <span>已完成0个</span> /2个
          <button class="btn btn-danger" style="display: block">清除已完成任务</button>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
```
- index.css

```css
/*base*/
body{
    background: #ffffff;
}
.btn{
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.2), 0 1px 2px rgba(0,0,0,0.05);
    border-radius: 4px;
}

.btn-danger{
    color: #ffffff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
}

.btn-danger:hover{
    color: #ffffff;
    background-color: #bd362f;
}
.btn:focus{
    outline: none;
}
.todo-container{
    width: 600px;
    margin:0 auto;
}
.todo-container .todo-wrap{
    padding: 10px;
    border:1px solid #dddddd;
    border-radius: 5px;
}
/*header*/
.todo-header input{
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #cccccc;
    border-radius: 4px;
    padding: 4px 7px;
}
.todo-header input:focus{
    outline: none;
    border-color: rgba(82,168,236,0.8);
    box-shadow: inset 0 1px 1px rgba(0,0,0,0.075),0 0 8px rgba(82,168,236,0.6);
}
/*main*/
todo-main{
    margin-left: 0px;
    border:1px solid #dddddd;
    border-radius: 2px;
    padding: 0px;
}
.todo-empty{
    height: 40px;
    line-height: 40px;
    border:1px solid #dddddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
}
/*item*/
li{
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #dddddd;
}
li label{
    float: left;
    cursor: pointer;
}
li label li input{
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top:-1px;
}
li button{
    float: right;
    display: none;
    margin-top: 3px;
}
li:before{
    content: initial;
}
li:last-child{
    border-bottom: none;
}
/*footer*/
.todo-footer{
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
}
.todo-footer label{
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
}
.todo-footer label input{
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
}
.todo-footer button{
    float: right;
    margin-top: 5px;
}
```
- 展示出来的页面效果
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210314104604772.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
#### （3）实现
todoList案例相关知识点：
- 拆分组件、实现静态组件，
![在这里插入图片描述](https://img-blog.csdnimg.cn/2021031410495467.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 在代码中，最开始应该先将静态资源复制到脚手架中，保证使用脚手架也能呈现这样的页面，主要就是先全部放在App组件中，然后建立不同的组件，按照不同的组件部分，将代码复制过去，App部分就用组件来代替，注意: className、style的写法。
- App.js

```javascript
import React,{Component} from "react";
import Header from "./component/Header";
import List from "./component/List";
import Footer from "./component/Footer";

import "./App.css"

export default class App extends Component{
  state = {
    todos:[
      {id:1,name:"吃饭",done:true},
      {id:2,name:"睡觉",done:true},
      {id:3,name:"码代码",done:false},
    ]
  }
  //向子组件传递一个函数，在子组件调用该函数时，传入参数，实现子组件的参数向父组件传递
  addTodo = (todoObj)=>{
    const {todos} = this.state;
    const newTodo = [todoObj,...todos];
    this.setState({todos:newTodo});
  }
  //更新状态中勾选与未勾选对应的done状态
  updateTodo = (id,done)=>{
    const {todos} = this.state;
    const newTodo = todos.map((todoObj)=>{
      if(todoObj.id === id){
        return {...todoObj,done};
      }else {
        return todoObj;
      }
    });
   this.setState({todos: newTodo});
  }
  //删除对应的Todo
  deleteTodo = (id)=>{
    const {todos} = this.state;
    const newTodo = todos.filter((todoObj)=>{
      return todoObj.id !== id;
    })
    this.setState({todos: newTodo});
  }

  //全选操作
  checkedAllTodo = (done)=>{
    const {todos} = this.state;
    const newTodo = todos.map((todoObj) =>{
      return {...todoObj,done}
    });
    this.setState({todos: newTodo});
  }
  //删除已完成操作

  deleteAllDone = ()=>{
    const {todos} = this.state;
    const  newTodo = todos.filter((todoObj)=>{
      return !todoObj.done
    })
    this.setState({todos: newTodo})
  }
  render(){
    const {todos} = this.state;
    return (
        <div className="todo-container">
          <div className="todo-wrap">
            <Header addTodo={this.addTodo}/>
            <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
            <Footer todos={todos} checkedAllTodo={this.checkedAllTodo}  deleteAllDone={this.deleteAllDone}/>
          </div>
        </div>
    )
  }
}

```
- App.css

```css
/*base*/
body{
    background: #ffffff;
}
.btn{
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.2), 0 1px 2px rgba(0,0,0,0.05);
    border-radius: 4px;
}

.btn-danger{
    color: #ffffff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
}

.btn-danger:hover{
    color: #ffffff;
    background-color: #bd362f;
}
.btn:focus{
    outline: none;
}
.todo-container{
    width: 600px;
    margin:0 auto;
}
.todo-container .todo-wrap{
    padding: 10px;
    border:1px solid #dddddd;
    border-radius: 5px;
}

```
- 入口文件index.js和index.html依旧采用的是上面一个hello组件中的代码
- 组件代码（这里的命名采用的是开发中常用的，全部都是命名为index.jsx和index.css)
- Header 
```javascript
import React, {Component} from 'react';
import {nanoid} from "nanoid"
import PropType from "prop-types";
import './index.css';

class Header extends Component {
  //对props进行限制
  static propTypes = {
    addTodo:PropType.func.isRequired
  }
  //处理输入框输入的信息
  handleKeyBord = (event)=>{
    const {target,keyCode} = event;
    //只有按下确认键才能添加信息
    if(keyCode!==13){
      return;
    }
    //不能输入空字符串
    if(target.value.trim() === ""){
      alert("添加的任务不能为空");
      return;
    }
    //通过nanoid生成一个随机的不会重复的id,将输入的内容封装成一个对象，向父组件App中传过去
    const todoObj ={id:nanoid(),name:target.value,done:false}
    //传递数据到父组件中
    this.props.addTodo(todoObj);
    //添加完成后将输入框置空
    target.value = "";
  }
  render() {
    return (
        <div className="todo-header">
          <input onKeyUp={this.handleKeyBord} type="text" placeholder="请输入你的任务名称，按回车确认"/>
        </div>
    );
  }
}

export default Header;
```

```css
/*header*/
.todo-header input{
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #cccccc;
    border-radius: 4px;
    padding: 4px 7px;
}
.todo-header input:focus{
    outline: none;
    border-color: rgba(82,168,236,0.8);
    box-shadow: inset 0 1px 1px rgba(0,0,0,0.075),0 0 8px rgba(82,168,236,0.6);
}
```
- List

```javascript
import React, {Component} from 'react';
import Item from "../Item";
import PropType from "prop-types";

import "./index.css"


class List extends Component {

  //对props进行限制
  static propTypes = {
    todos:PropType.array.isRequired,
    updateTodo:PropType.func.isRequired,
    deleteTodo:PropType.func.isRequired,
  }
  render() {
  const {todos,updateTodo,deleteTodo} = this.props
    return (
        <ul className="todo-main">
          {
            todos.map((todo)=>{
              return <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
            })
          }
        </ul>
    );
  }
}

export default List;
```

```css
/*main*/
todo-main{
    margin-left: 0px;
    border:1px solid #dddddd;
    border-radius: 2px;
    padding: 0px;
}
.todo-empty{
    height: 40px;
    line-height: 40px;
    border:1px solid #dddddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
}

```
- Item

```javascript
import React, {Component} from 'react';
import PropType from "prop-types";

import "./index.css";


class Item extends Component {
  //对props进行限制
  static propTypes = {
    updateTodo:PropType.func.isRequired,
    deleteTodo:PropType.func.isRequired,
  }
  state = {mouse:false}
  //处理鼠标的移入和移出
  handleMouse = (flag)=>{
    return ()=>{
      this.setState({mouse:flag})
    }
  }
  //处理勾选框的更新，勾选与不勾选
  handleUpdate = (id)=>{
    return (event)=>{
      this.props.updateTodo(id,event.target.checked);
    }
  }
  //处理删除按钮
  handleDelete = (id)=>{
    this.props.deleteTodo(id);
  }
  render() {
    const {mouse} = this.state;
    const {id,name,done} = this.props;
    return (
        <li style={{backgroundColor: mouse ? '#ddd':'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
          <label>
            <input type="checkbox" checked={done} onChange={this.handleUpdate(id)}/>
            <span>{name}</span>
          </label>
          <button onClick={()=>{this.handleDelete(id)}} className="btn btn-danger" style={{display: mouse?'block':'none'}}>删除</button>
        </li>
    );
  }
}

export default Item;
```

```css
/*item*/
li{
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #dddddd;
}
li label{
    float: left;
    cursor: pointer;
}
li label li input{
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top:-1px;
}
li button{
    float: right;
    display: none;
    margin-top: 3px;
}
li:before{
    content: initial;
}
li:last-child{
    border-bottom: none;
}
```
- Footer

```javascript
import React, {Component} from 'react';
import "./index.css"
import PropType from "prop-types";

class Footer extends Component {
  //对props进行限制
  static propTypes = {
    todos:PropType.array.isRequired,
    checkedAllTodo:PropType.func.isRequired,
  }
  //处理全选操作
  handleAllChecked = (event)=>{
    this.props.checkedAllTodo(event.target.checked)
  }
  //处理删除全部已完成的操作
  handleDeleteAllDone = ()=>{
    this.props.deleteAllDone()
  }
  render() {
    const {todos} = this.props;
    //已完成的个数
    const doneCount =todos.reduce((pre,todo) =>{return pre +(todo.done?1:0)},0);
    //总数
    const totals = todos.length;
    return (
        <div className="todo-footer">
          <label>
            <input type="checkbox" onChange={this.handleAllChecked} checked={doneCount  === totals && totals !== 0? true:false}/>
          </label>
          <span>已完成{doneCount}个</span> /{totals}个
          <button onClick={this.handleDeleteAllDone} className="btn btn-danger" style={{display: "block"}}>清除已完成任务</button>
        </div>
    );
  }
}

export default Footer;
```

```css
/*footer*/
.todo-footer{
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
}
.todo-footer label{
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
}
.todo-footer label input{
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
}
.todo-footer button{
    float: right;
    margin-top: 5px;
}
```

- 动态初始化列表，如何确定将数据放在哪个组件的state中?
	- 某个组件使用:放在自身的state中
	- 某些组件使用:放在他们共同的父组件state中(官方称此操作为:状态提升)
	这里使用的就是状态提升，Header和List都要操作数据，但是以目前所学知识并未学兄弟组件之间的通信。所以这里就将初始化的动态列表放在了父组件App中
- 关于父子之间通信:
	- 【父组件】给【子组件】传递数据:通过props传递
	- 【子组件】给【父组件】传递数据:通过props传递，要求父提前给子传递一个函数
	![在这里插入图片描述](https://img-blog.csdnimg.cn/20210314111036709.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 注意defaultchecked 和 checked的区别，类似的还有: defaultValue和value
	- defaultchecked只会执行一次，所以使用defaultchecked时，改变状态后，再次改变就不会勾选上了，所以应该使用checked，主要要和onChange配合使用
- 状态在哪里，操作状态的方法就在哪里
	- 这里状态在App组件上，所以所有有关操作状态的方法全部在App组件上

# 四、React Ajax
### 1.说明
- React本身只关注界面，并不包含发送ajax请求的代码
- 前端应用需要通过ajax请求后与后台进行交互（json数据）
- react应用中需要集成第三方ajax库（或自己封装）
### 2.常用的ajax请求库
- jQuery: 比较重,如果需要另外引入不建议使用
- axios:轻量级,建议使用
	- 封装XmIHttpRequest对象的ajax
	-  promise风格
	- 可以用在浏览器端和node服务器端
### 3.脚手架配置代理
#### （1）前期准备
- 在这里需要具备node.js知识，Ajax异步请求知识，axios知识才能继续往下
- 准备两个node服务器
	- 新建一个项目，输入npm init 初始化安装包配置文件
	- 输入命令：npm install express --save
	- 安装一个Express框架，官网：[https://www.expressjs.com.cn/](https://www.expressjs.com.cn/)
	- 创建两个js文件，分别命名为server1.js和server2.js
	![在这里插入图片描述](https://img-blog.csdnimg.cn/20210324210753412.png)
- server1.js提供学生数据

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
    {id:'002',name:'lisi',age:19},
    {id:'003',name:'wangwu',age:20},
  ]
  response.send(students);
})

app.listen(8000,(err)=>{
  if(!err)
    console.log("服务已启动,请求学生信息地址为：http:localhost:8000/students")
})


```
- server2.js提供汽车数据

```javascript
const server1  = require("express");

const app = server1();

app.use((request,response,next) =>{
  console.log('服务器2被访问了');
  next();
})

app.get("/cars",(request,response)=>{
  const students = [
    {id:'001',name:'奔驰',price:18000},
    {id:'002',name:'大众',price:19000},
    {id:'003',name:'宝马',price:20000},
  ]
  response.send(students);
})

app.listen(8001,(err)=>{
  if(!err)
    console.log("服务已启动,请求学生信息地址为：http:localhost:8001/cars")
})

```
- 脚手架项目准备
	- 采用axios发送异步请求，需要先安装axios
	- 输入命令：npm i axios -D
	![在这里插入图片描述](https://img-blog.csdnimg.cn/20210324211748769.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
	- 在App组件中分别发送两个异步请求
	- App.js
```javascript
import React, {Component} from 'react';
import axios from 'axios';

class App extends Component {

  getStudentData = ()=>{
    axios.get("http://localhost:3000/students")
        .then((response)=>{
          console.log('成功了',response.data);
        })
        .catch((error)=>{
          console.log('失败了',error);
        })
  }
  getCarData = ()=>{
    axios.get("http://localhost:3000/cars")
        .then((response)=>{
          console.log('成功了',response.data);
        })
        .catch((error)=>{
          console.log('失败了',error);
        })
  }
  render() {
    return (
        <div>
          <button onClick={this.getStudentData}>点击获取学生数据</button>
          <button onClick={this.getCarData}>点击获取汽车数据</button>
        </div>
    );
  }
}

export default App;
```
- 简单在页面渲染两个按钮发送请求
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210324212222347.png)
- 由服务器代码知道，服务器的端口号是8000和8001，而脚手架服务器的端口号是3000，要在3000端口上发送请求到端口号8000上异步请求数据，必然存在跨域的问题，这个问题在实际开发中也是必然会遇到的，所以必须要对服务器进行代理配置才能成功地接收服务器返回的数据
#### （2）配置代理方法一
- 在脚手架的package.json文件上添加以下配置
```json
"proxy":"http://localhost:8000"
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210324211530798.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 这个配置的作用是：当发生本地服务器，即端口号为3000的服务器没有需要请求的数据，就会通过这个代理去向端口号为8000的服务器发送请求。
- 这里有一个问题需要注意：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210324213556158.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210324213648358.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 优点:配置简单，前端请求资源时可以不加任何前缀。
- 缺点:不能配置多个代理。
- 工作方式:上述方式配置代理，当请求了3000不存在的资源时，那么该请求会转发给8000(优先匹配前端资源)
#### （3）配置代理方法二
- 方法一只能配置一个代理，所以我们是无法获取汽车的数据的，即我们无法通过方法一就同时获取学生和汽车的信息
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210324214251149.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 要同时接收多个服务器返回的数据，就要配置多个代理
- 配置多个代理不在package.json文件中配置，所以方法一中的配置可以删除
- 在src目录下创建代理配置文件
- setupProxy.js（注意：一定要这个名字，不能是别的名字，且一定要使用commonjs，不能使用ES6语法）

```javascript
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
      createProxyMiddleware("/api1",{
        //api1是需要转发的请求(所有带有/api1前缀的请求都会转发给8000)
        target:'http://localhost:8000',//配置转发目标地址（能返回数据的服务器地址）
        changeOrigin:true,//控制服务器接收到的请求头中Host字段的值
        /*
        * changeOrigin设置为true时，服务器收到的请求头中的host为: localhost : 8000
        * changeOrigin设置为false时，服务器收到的请求头中的host为: localhost : 3000
        * changeOrigin默认值为false，但我们一般将changeOrigin值设为true
        * */
        pathRewrite:{"^/api1":""}//除请求前缀，保证交给后台服务器的是正常请求地址(必须配置)

      }),
      createProxyMiddleware("/api2",{
        target:'http://localhost:8001',
        changeOrigin:true,
        pathRewrite:{"^/api2":""}
      })
  )
}
```
- 重启脚手架：npm start，注意：一旦改动了setupProxy.js内容，就必须重启脚手架才能生效
- App.js中的地址也要稍微改动
![在这里插入图片描述](https://img-blog.csdnimg.cn/2021032422154298.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 同时发送请求，都能接收对应的数据
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210324221734284.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
### 4.github搜索案例
#### （1）需求
- 打开页面显示搜索框，第一次打开的时候，提示信息输入关键字，随后点击搜索
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210326204832820.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 在搜索时，结构未返回时显示Loading
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210326205251725.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 成功返回数据，以列表形式展示对象
- 由github服务器返回的数据
- 请求地址：https://api.github.com/search/users?q=xxx（xxx是搜索的参数）

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210326205831816.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

- 请求错误时，提示错误信息
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210326205101715.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
#### （2）静态页面和服务器准备
静态页面
- 静态页面中还引入了bootstrap框架，请自行到官网下载
- index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>GitHub搜索案例</title>
  <link rel="stylesheet" href="bootstrap.min.css">
  <link rel="stylesheet" href="index.css">
</head>
<body>
  <div id="root">
    <div class="container">
      <section class="jumbotron">
        <h3 class="jumbotron-heading">搜索Github用户</h3>
        <div>
          <input type="text" placeholder="输入关键字搜索"/>&nbsp;
          <button>搜索</button>
        </div>
      </section>
      <div class="row">
        <div class="card">
          <a href="https://github.com/reactjs" target="_blank" rel="noreferrer">
            <img src="https://avatars.githubusercontent.com/u/882964?v=4" alt="头像" style="width:100px"/>
          </a>
          <p class="card-text">reactjs</p>
        </div>
        <div class="card">
          <a href="https://github.com/reactjs" target="_blank" rel="noreferrer">
            <img src="https://avatars.githubusercontent.com/u/882964?v=4" alt="头像" style="width:100px"/>
          </a>
          <p class="card-text">reactjs</p>
        </div>
        <div class="card">
          <a href="https://github.com/reactjs" target="_blank" rel="noreferrer">
            <img src="https://avatars.githubusercontent.com/u/882964?v=4" alt="头像" style="width:100px"/>
          </a>
          <p class="card-text">reactjs</p>
        </div>
        <div class="card">
          <a href="https://github.com/reactjs" target="_blank" rel="noreferrer">
            <img src="https://avatars.githubusercontent.com/u/882964?v=4" alt="头像" style="width:100px"/>          </a>
          <p class="card-text">reactjs</p>
        </div>
        <div class="card">
          <a href="https://github.com/reactjs" target="_blank" rel="noreferrer">
            <img src="https://avatars.githubusercontent.com/u/882964?v=4" alt="头像" style="width:100px"/>          </a>
          <p class="card-text">reactjs</p>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
```
- index.css

```css
.album {
    min-height: 50rem;/*Can be removed; just added for demo purposes*/
    padding-top: 3rem;
    padding-bottom: 3rem;
    background-coLor: #f7f7f7;
}
.card {
    fLoat: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
}
.card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
}
.card-text {
    font-size:85%;
}

```
- 展示的结果
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210326210340688.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

服务器的准备
- 我们其实可以发现，即使在异步请求中直接向GitHub服务器发送请求是可以接收到服务器返回的数据的，因为github服务器在后端使用了cors解决了跨域的问题。
- 但是这并不是我们想要的结果，因为大部分服务器都不会这么做，所以，我们的目的还是在解决跨域的问题上，所以我们自己准备了一个中间服务器，由服务器发送请求向GitHub服务器请求数据并接收返回的数据，再由中间服务器将数据返回到页面上，此时页面请求的地址是中间服务器的地址。
- 我们还自己模拟了一些虚假数据，模拟服务器的数据返回，GitHub服务器频繁请求可能会被禁止请求。
- 如何搭建node服务器环境在上面的脚手架配置已有提及
- 服务器代码：server3_github.js

```javascript
const server3  = require("express");
const axios = require("axios");
// const { createProxyMiddleware } = require('http-proxy-middleware');
const app = server3();

app.use((request,response,next) =>{
  console.log('服务器被访问了');
  next();
})

app.get("/search/users",(request,response) =>{
  axios.get(`https://api.github.com/search/users?q=${request.query.q}`).then(
      res =>{ response.send(res.data)}
  ).catch(
      err =>{response.send(err)}
  )
})


app.get("/search/users2",(req,res)=>{
  const users = [
    {
      login:"zhangsan",
      avatar_url: "https://avatars.githubusercontent.com/u/882964?v=4",
      html_url: "https://github.com/zhangsan",
      id:1
    },
    {
      login:"ZhangSanFengByGit",
      avatar_url: "https://avatars.githubusercontent.com/u/26792617?v=4",
      html_url: "https://github.com/ZhangSanFengByGit",
      id:2
    },
    {
      login:"zhangsanfeng01",
      avatar_url: "https://avatars.githubusercontent.com/u/20502257?v=4",
      html_url: "https://github.com/zhangsanfeng01",
      id:3
    },
    {
      login:"zhangsanshi",
      avatar_url: "https://avatars.githubusercontent.com/u/3771933?v=4",
      html_url: "https://github.com/zhangsanshi",
      id:4
    },
    {
      login:"zhangsanfu",
      avatar_url: "https://avatars.githubusercontent.com/u/18632321?v=4",
      html_url: "https://github.com/zhangsanfu",
      id:5
    },
    {
      login:"zhangsanlzh",
      avatar_url: "https://avatars.githubusercontent.com/u/24622931?v=4",
      html_url: "https://github.com/zhangsanlzh",
      id:6
    }
  ]
  res.send(users);
})

app.listen(8000,(err)=>{
  if(!err)
    console.log("服务已启动");
    console.log("请求github真实数据请访问http://localhost:8000/search/users");
    console.log("请求本地模拟数据请访问http://localhost:8000/search/users2");
})


```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210326211710469.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
#### （3）实现（axios实现）
- 划分组件（组件划分并不唯一，适合就好）
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210326211917324.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 项目结构
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210326212158253.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- App.jsx

```javascript
import React, {Component} from 'react';
import Search from "./components/Search";
import List from "./components/List";

class App extends Component {

  state = {
    users:[],//初始化users数组
    isFirst:true,//是否为第一次打开页面
    isLoading:true,//是否是加载中
    error:""//存储错误信息
  }

  updateAppState = (stateObj) =>{
    this.setState(stateObj)
  }

  render() {
    return (
        <div className="container">
          <Search updateAppState = {this.updateAppState}/>
          <List {...this.state}/>
        </div>
    );
  }
}
export default App;
```
- 入口文件index.js和静态资源依旧是前面案例所使用的

组件
- List
- index.jsx

```javascript
import React, {Component} from 'react';
import './index.css';
class List extends Component {
  render() {
    const {users,isFirst,isLoading,error} = this.props
    return (
        <div className="row">
          {
            isFirst ? <h2>输入关键字，随后点击搜索</h2> :
            isLoading ? <h2>Loading......</h2>:
            error ? <h2>{error}</h2> :
            users.map((userObj)=>{
               return (
                <div key={userObj.id} className="card">
                   <a href={userObj.html_url} target="_blank" rel="noreferrer">
                     <img src={userObj.avatar_url} alt="头像" style={{width:"100px"}}/>
                   </a>
                   <p className="card-text">{userObj.login}</p>
                </div>
               )
           })
          }
        </div>
    );
  }
}

export default List;
```
- index.css

```css
.album {
    min-height: 50rem;/*Can be removed; just added for demo purposes*/
    padding-top: 3rem;
    padding-bottom: 3rem;
    background-coLor: #f7f7f7;
}
.card {
    fLoat: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
}
.card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
}
.card-text {
    font-size:85%;
}

```
- Search
- index.jsx（要访问模拟的数据就更改一下对应的地址即可）

```javascript
import React, {Component} from 'react';
import axios from "axios";

class Search extends Component {

  search = ()=>{
    //获取用户输入
    const {keyWordElement:{value:keyWord}} = this;
    this.props.updateAppState({isFirst:false,isLoading: true})
    //发送网络请求
    axios.get(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(
        response => {
          this.props.updateAppState({isLoading:false,users:response.data.items})
        }
    ).catch(
        error =>{
          this.props.updateAppState({isLoading:false,error:error.message})
        }
    )
  }

  render() {
    return (
        <section className="jumbotron">
          <h3 className="jumbotron-heading">搜索Github用户</h3>
          <div>
            <input ref={c => {this.keyWordElement = c}} type="text" placeholder="输入关键字搜索"/>&nbsp;
            <button onClick={this.search}>搜索</button>
          </div>
        </section>
    );
  }
}

export default Search;
```
- 代理配置文件setupProxy.js

```javascript
const {createProxyMiddleware} = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
      createProxyMiddleware("/api1",{
        target:"http://localhost:8000",
        changeOrigin:true,
        pathRewrite:{"^/api1":""}
      })
  )
}
```
#### （4）实现（消息订阅与发布——pubsub）
- 使用axios来实现时我们发现，当Search组件做了相应的操作时必须通过其父组件App才能告诉List组件Search做了什么操作，我们一直在使用子组件给父组件通信，然后再通过父组件给另外的子组件通信，这样固然能实现，但是效率却低了，所以我们需要直接让两个兄弟组件进行通信，而不需要借助父组件。
- 这就需要消息订制-发布机制
- 工具库: PubSubJS
- 下载: npm install pubsub-js --save
- 便用:
	- import PubSub from 'pubsub-js' //引入-
	- PubSub.subscribe('delete' , function(data){}) //订阅
	- PubSub.publish('delete', data)//发布消息.
- 在GitHub中搜索PubSubJS有其详细的介绍
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210326215410757.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- App.jsx（此时的App组件才是最终的样子，App组件应该只是一个外壳）

```javascript
import React, {Component} from 'react';
import Search from "./components/Search";
import List from "./components/List";

class App extends Component {

  render() {
    return (
        <div className="container">
          <Search/>
          <List/>
        </div>
    );
  }
}
export default App;
```
组件
- List
- index.jsx

```javascript
import React, {Component} from 'react';
import './index.css';
import PubSub from "pubsub-js";
class List extends Component {

  state = {
    users:[],//初始化users数组
    isFirst:true,//是否为第一次打开页面
    isLoading:true,//是否是加载中
    error:""//存储错误信息
  }

   componentDidMount() {
   this.token = PubSub.subscribe("message",(_,stateObj)=>{
      this.setState(stateObj)
    })
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.token)
  }

  render() {
    const {users,isFirst,isLoading,error} = this.state
    return (
        <div className="row">
          {
            isFirst ? <h2>输入关键字，随后点击搜索</h2> :
            isLoading ? <h2>Loading......</h2>:
            error ? <h2>{error}</h2> :
            users.map((userObj)=>{
               return (
                <div key={userObj.id} className="card">
                   <a href={userObj.html_url} target="_blank" rel="noreferrer">
                     <img src={userObj.avatar_url} alt="头像" style={{width:"100px"}}/>
                   </a>
                   <p className="card-text">{userObj.login}</p>
                </div>
               )
           })
          }
        </div>
    );
  }
}

export default List;
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210326221614224.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- Search
- index.jsx

```javascript
import React, {Component} from 'react';
import PubSub from "pubsub-js";
import axios from "axios";

class Search extends Component {

  search = ()=>{
    //获取用户输入
    const {keyWordElement:{value:keyWord}} = this;
    //子组件将数据传递给父组件
    // this.props.updateAppState({isFirst:false,isLoading: true})
    //消息发布
    PubSub.publish("message",{isFirst:false,isLoading: true})
    //发送网络请求
    axios.get(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(
        response => {
          //子组件将数据传递给父组件
          // this.props.updateAppState({isLoading:false,users:response.data.items})
          //消息发布
          PubSub.publish("message",{isLoading:false,users:response.data.items});
        }
    ).catch(
        error =>{
          //子组件将数据传递给父组件
          // this.props.updateAppState({isLoading:false,error:error.message})
          //消息发布
          PubSub.publish("message",{isLoading:false,error:error.message});
        }
    )
  }

  render() {
    return (
        <section className="jumbotron">
          <h3 className="jumbotron-heading">搜索Github用户</h3>
          <div>
            <input ref={c => {this.keyWordElement = c}} type="text" placeholder="输入关键字搜索"/>&nbsp;
            <button onClick={this.search}>搜索</button>
          </div>
        </section>
    );
  }
}

export default Search;
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210326221826162.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 其他代码未做改动
#### （5）实现（fetch实现——扩展）
- fetch的特点
	- fetch:原生函数，不再使用XmlHttpRequest对象提交ajax请求
	- 老版本浏览器可能不支持
- 参考文档
	- https://github.github.io/fetch/
	- https://segmentfault.com/a/1190000003810652
- 在参考文档中有详细的说明
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210327112635872.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- Search
- index.js

```javascript
import React, {Component} from 'react';
import PubSub from "pubsub-js";
// import axios from "axios";

class Search extends Component {

  search = async () => {
    //获取用户输入
    const {keyWordElement: {value: keyWord}} = this;
    //子组件将数据传递给父组件
    // this.props.updateAppState({isFirst:false,isLoading: true})
    //消息发布
    PubSub.publish("message", {isFirst: false, isLoading: true})
    //发送网络请求--(axios)
    // axios.get(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(
    //     response => {
    //       //子组件将数据传递给父组件
    //       // this.props.updateAppState({isLoading:false,users:response.data.items})
    //       //消息发布
    //       PubSub.publish("message",{isLoading:false,users:response.data.items});
    //     }
    // ).catch(
    //     error =>{
    //       //子组件将数据传递给父组件
    //       // this.props.updateAppState({isLoading:false,error:error.message})
    //       //消息发布
    //       PubSub.publish("message",{isLoading:false,error:error.message});
    //     }
    // )

    //发送网络请求--(fetch_未优化)
    /*fetch(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(
      response =>{
        console.log("联系服务器成功了",response);
        return response.json();
      }
    ).then(
        response =>{
          console.log("获取数据成功了");
          //消息发布
         PubSub.publish("message",{isLoading:false,users:response.data.items});
        }
    ).catch(
        error =>{
          console.log("数据获取失败了");
          //消息发布
          PubSub.publish("message",{isLoading:false,error:error.message});
        }
    )*/
    //发送网络请求--(fetch_优化)
    try{
      const response = await fetch(`http://localhost:3000/api1/search/users?q=${keyWord}`);
      const data = await response.json();
      //消息发布
      PubSub.publish("message",{isLoading:false,users:data.items});
    }catch (error) {
      console.log("请求出错",error);
      //消息发布
      PubSub.publish("message",{isLoading:false,error:error.message});
    }

  }
  render() {
    return (
        <section className="jumbotron">
          <h3 className="jumbotron-heading">搜索Github用户</h3>
          <div>
            <input ref={c => {this.keyWordElement = c}} type="text" placeholder="输入关键字搜索"/>&nbsp;
            <button onClick={this.search}>搜索</button>
          </div>
        </section>
    );
  }
}

export default Search;
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210327113225776.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210327113336351.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 其他代码未做改动
- fetch作为一个扩展知识点，目前主流的异步请求方法仍是Ajax，但是也应该了解到，除了Ajax外，fetch也能做到
#### （6）相关知识点
- 设计状态时要考虑全面，例如带有网络请求的组件，要考虑请求失败怎么办。即需求中所需要的当请求失败时要提示错误信息。
- ES6小知识点:解构赋值+重命名
	- let obj = {a:{b:1}}
	- const {a}= obj;//传统解构赋值
	- const {a:{b}} = obj; //连续解构赋值
	- const {a: { b:value}} = obj; //连续解构赋值+重命名
	![在这里插入图片描述](https://img-blog.csdnimg.cn/20210327114433908.png)
- 消息订阅与发布机制
	- 先订阅,再发布（理解:有一种隔空对话的感觉）
	- 适用于任意组件间通信
	- 要在组件件的componentwillUnmount中取消订闷
	![在这里插入图片描述](https://img-blog.csdnimg.cn/20210327114934576.png)
- fetch发送请求（关注分离的设计思想）

```javascript
 try{
      const response = await fetch(`http://localhost:3000/api1/search/users?q=${keyWord}`);
      const data = await response.json();
      //消息发布
      PubSub.publish("message",{isLoading:false,users:data.items});
    }catch (error) {
      console.log("请求出错",error);
      //消息发布
      PubSub.publish("message",{isLoading:false,error:error.message});
    }
```

# 五、React路由
### 1.对SPA应用的理解
- 单页Web应用(single page web application，SPA) . 
- 整个应用只有一个完整的页面。
- 点击页面中的链接不会刷新页面，只会做页面的局部更新。
- 数据都需要通过ajax请求获取,并在前端异步展现。
### 2.对路由的理解
- 什么是路由
	- 一个路由就是一个映射关系(key:value)
	- key为路径, value可能是function或componente2路由分类
- 后端路由:
	- 理解: value是function,用来处理客户端提交的请求。
	- 注册路由: router.get(path, function(req, res))
	- 工作过程: 当node接收到一个请求时,根据请求路径找到匹配的路由,调用路由中的函数来处理请求返回响应数据
- 前端路由:
	- 浏览器端路由,value是component，用于展示页面内容。
	- 注册路由: \<Route path="/test" component={Test}>
	- 工作过程:当浏览器的path变为/test时,当前路由组件就会变为Test组件
### 3.前端路由的理解
- 前端路由的实现依靠的是浏览器的History

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>前端路由的原理</title>
</head>
<body>
<a href="http://www.baidu.com" onclick="return push('/test1') ">push test1</a><br><br>
<button onclick="push('/test2')">push test2</button><br><br>
<button onclick="replace('/test3')">replace test3</button><br><br>
<button onclick="back()">&lt;=回退</button>
<button onclick="forward()">前进=&gt;</button>
<script type="text/javascript" src="https://cdn.bootcss.com/history/4.7.2/history.js"></script>
<script type="text/javascript">
  let history = History.createBrowserHistory()
  // let history = History.createHashHistory()
  function push (path){
    history.push(path);
    return false
  }
  function replace (path) {
    history.replace(path);
  }
  function back() {
    history.goBack();
  }
  function forward() {
    history.goForward();
  }
  history.listen((location) =>{
    console.log("请求路径变化了",location)
  })
</script>
</body>
</html>
```
- 方法一：直接使用H5推出的History身上的API
![在这里插入图片描述](https://img-blog.csdnimg.cn/2021032713240879.png)
- 刚打开页面
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210327130916251.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 点击链接push test1
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210327131029227.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 点击按钮push test2
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210327131146498.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 回退发现，页面依旧没有更新，而地址栏却再次变化
![在这里插入图片描述](https://img-blog.csdnimg.cn/2021032713124599.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 点击replace test3
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210327132057159.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 方法二：hash值（锚点）
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210327132439718.png)
- 打开页面
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210327132618619.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 点击push test1（与H5稍微有些区别）
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210327132740907.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 这里我们关注的就是地址栏的变化，通过监测地址栏的路径变化来让页面展示不同的组件，这个就是前端路由的实现原理，通过上面的例子有助于理解地址栏的相应变化，而前端路由的实现前提也是必须借助于history
### 4.路由的基本使用
- react-router-dom的理解
	- react的一个插件库。
	- 专门用来实现一个SPA应用。
	- 基于react的项目基本都会用到此库。
- 实现前端路由要基于react-router-dom实现，脚手架并未提前安装好，因此需要自行安装
	- 命令：npm i react-router-dom --save
- 通过一个例子来实现路由的使用
- 需求
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210328105400447.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 点击About或Home，地址栏发生变化，页面展示不同的组件，但是页面未刷新
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210328105601690.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 这个就是通过路由实现的结果，在不刷新页面的情况下，通过改变地址栏的地址在页面上展示不同的组件。
#### （1）静态资源
- 静态资源有使用到bootstrap框架，自行下载对应的代码库
- home.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8"><title>React App</title>
  <link rel="stylesheet" href="./bootstrap.min.css">
</head>
<body>
<div id="root">
  <div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header">
          <h2>React Router Demo</h2>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <a class="list-group-item" href="./about.html">About</a>
          <a class="list-group-item active" href="./home.html" >Home</a>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <h3>我是Home的内容</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</body>
</html>

```
- about.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8"><title>React App</title>
  <link rel="stylesheet" href="./bootstrap.min.css">
</head>
<body>
  <div id="root">
    <div>
      <div class="row">
        <div class="col-xs-offset-2 col-xs-8">
          <div class="page-header">
           <h2>React Router Demo</h2>
          </div>
        </div>
      </div>
     <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <a class="list-group-item active" href="./about.html">About</a>
          <a class="list-group-item" href="./home.html" >Home</a>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <h3>我是About的内容</h3>
          </div>
        </div>
      </div>
     </div>
    </div>
  </div>
</body>
</html>

```
- 效果，静态资源的切换是通过a标签切换的，所以页面一定会被刷新
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210328110335617.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
#### （2）实现
- 项目结构
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210328110812164.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- App.jsx

```javascript
import React, {Component} from 'react';
// noinspection ES6CheckImport
import {Link,Route} from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";


class App extends Component {

  render() {
    return (
        <div>
          <div className="row">
            <div className="col-xs-offset-2 col-xs-8">
              <div className="page-header">
                <h2>React Router Demo</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-2 col-xs-offset-2">
              <div className="list-group">
                {/*原生html靠<a>跳转不同的页面*/}
                {/*<a className="list-group-item active" href="./about.html">About</a>
                <a className="list-group-item" href="./home.html">Home</a>*/}

                {/*在React路由中依靠链接实现切换组件*/}
                <Link className="list-group-item" to="/about">About</Link>
                <Link className="list-group-item" to="/home">Home</Link>
              </div>
            </div>
            <div className="col-xs-6">
              <div className="panel">
                <div className="panel-body">
                  {/*注册路由*/}
                    <Route path="/about" component={About}/>
                    <Route path="/home" component={Home}/>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
export default App;
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210328111418939.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- index.js

```javascript
import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
ReactDOM.render(
    <BrowserRouter>
      <App/>
    </BrowserRouter>,
    document.getElementById("root")
)
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210328111659152.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 组件About
- index.jsx

```javascript
import React, {Component} from 'react';

class About extends Component {
  render() {
    return (
        <div>
          <h3>我是About内容</h3>
        </div>
    );
  }
}

export default About;
```
- 组件Home
- index.jsx

```javascript
import React, {Component} from 'react';

class Home extends Component {
  render() {
    return (
        <div>
          <h3>我是Home内容</h3>
        </div>
    );
  }
}

export default Home;
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210328112430330.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

#### （3）相关知识点
- 明确好界面中的导航区、展示区
- 导航区的a标签改为Link标签
\<Link to="/xxxxx">Demo\</Link>
- 展示区写Route标签进行路径的匹配
\<Route path= "/xxxx" component={Demo}/>
- \<App>的最外侧包裹了一个\<BrowserRouter>或\<HashRouter>对

### 5.路由组件和一般组件
- 首先我们应该需要知道什么是路由组件，什么是一般组件
- 路由组件是通过路由去匹配的
- 一般组件是通过自己写的标签去匹配的
- 所以在项目结构中应该将路由组件和一般组件分开
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210328113655964.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210328113756625.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 但是这还不是路由组件和一般组件的最根本区别
- 最大的区别在props中
- 一般组件是父组件传递什么过来，子组件就能接收到什么
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210328120556483.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210328120527538.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 路由组件什么都没有传入，但是也能收到一些数据![在这里插入图片描述](https://img-blog.csdnimg.cn/20210328120733765.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 下面这些路由组件接收到的参数就是经常需要用到的
- history: 
	- go: function go(n)
	- goBack: function goBack()
	- goForward: function goForward()
	- push: function push(path, state)
	- replace: function replace(path, state)
- location: 
	- pathname: "/about"
	- search: ""
	- state: undefined
- match:
	- params: Object {  }
	- path: "/about"
	- url: "/about"

### 6.NavLink的使用
- 在上面路由器的使用中，还未实现选中高亮这个功能，这个就需要通过NavLink来实现了
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210328122121477.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210328122140807.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 当然，并不是替换就行，需要去理解NavLink是如何实现的
- NavLink通过属性activeClassName=xxx给标签动态添加一个属性，这个属性的名字是xxx，如果省略不写，会默认添加一个active属性，标签被选中时就会动态添加，未选中时不会添加，这里正好于bootstrap的高亮属性active对应上了，所以才会成功显示高亮
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210328132602235.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210328132241980.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
### 7.封装NavLink组件
- 新建一个组件MyNavLink
- index.jsx

```javascript
import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class MyNavLink extends Component {
  render() {
    console.log(this.props);
    return (
        <div>
          <NavLink activeClassName="message" className="list-group-item" {...this.props}/>
        </div>
    );
  }
}

export default MyNavLink;
```
- 在App组件中使用
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210328134743243.png)
- 这里有个知识点，组件可以使用单标签和双标签，标签体的内容作为父组件传递给子组件的内容存放在props中的children属性上
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210328135011342.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 而children属性展示的就是标签体内容，所以在组件中可以直接通过children来展示，不需要在双标签中写标签体内容
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210328135304127.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 总结
- NavLink 与封装NavLink
	- NavLink可以实现路由链接的高亮，通过activeClassName指定样式名
	- 标签体内容是一个特殊的标签属性
	- 通过this. props.children可以获取标签体内容
### 8.Switch的使用
- 通常情况下path和component是一一对应的关系。
- Switch可以提高路由匹配效率(单一匹配)。
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210328140623564.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210328140946749.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210328141141818.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210328141157157.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
### 9.样式丢失问题
- 当使用二级路由去匹配的时候，我们当前引入资源的方法会导致样式资源的丢失而无法正常显示页面
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210328145935858.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 将路由改为二级路由
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210328150307958.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210328150715689.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 解决多级路径刷新页面样式丢失的问题
	- public/index.html 中出入样式时不写 ./  写 /（常用)
	![在这里插入图片描述](https://img-blog.csdnimg.cn/20210328150945556.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
	![在这里插入图片描述](https://img-blog.csdnimg.cn/20210328151041338.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
	- public/index.html中出入样式时不写﹒/ 写 %PUBLIc_URL%（常用)
	![在这里插入图片描述](https://img-blog.csdnimg.cn/20210328151200966.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
	![在这里插入图片描述](https://img-blog.csdnimg.cn/20210328151247113.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
	- 使用HashRouter
	![在这里插入图片描述](https://img-blog.csdnimg.cn/2021032815151318.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
	![在这里插入图片描述](https://img-blog.csdnimg.cn/20210328151739973.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
### 10.路由的模糊匹配和严格匹配
- 先来观察一下这几个问题
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210328152405706.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210328152433139.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210328152521462.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210328152556274.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210328152730379.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210328152811924.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 由这几个问题就涉及到路由的模糊匹配和严格匹配了
- 默认使用的是模糊匹配:（简单记:【输入的路径】必须包含要【匹配的路径】，顺序要一致)
	- 所以第一个和第三个是匹配不上的，第一个输入的路径不包含匹配的路径，第三个虽然包含匹配的路径，但是顺序却是错误的，只有第二个能成功匹配，符合模糊匹配规则
- 开启严格匹配:\<Route exact={true} path=" /about" component={About}/>或者\<Route exact path=" /about" component={About}/>
	- 开启了严格匹配的话，就要完全一致，那么第二个也不会匹配上了
	- 注意：严格匹配不要随便开启，需要再开，有些时候开启会导致无法继续匹配二级路由
### 11.Redirect的使用
- 在我们最开始打开的页面是这样的
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210328153830967.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 但是我希望我打开后About是自动选中的，这就需要使用Redirect了，地址栏没有任何匹配项时跳转到指定的路径
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210328154233791.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210328154246827.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 一般写在所有路由注册的最下方，当所有路由都无法匹配时，跳转到Redirect指定的路由
- 具体编码:

```javascript
<Switch>
	<Route path="/about" component={About}/>
	<Route path="/home" component={Home}/>
	<Redirect to="/about"/>
</Switch>
```
### 12.嵌套路由
- 通过一个例子来理解嵌套路由
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210328165605532.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
#### （1）实现
- 项目结构
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210328165724397.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- Message组件

```javascript
import React, {Component} from 'react';

class Message extends Component {
  render() {
    return (
        <ul>
          <li>
            <a href="/message1">message001</a>&nbsp; &nbsp;
          </li>
          <li>
            <a href="/message2">message002</a>&nbsp; &nbsp;
          </li>
          <li>
            <a href="/message3">message003</a>&nbsp;&nbsp;
          </li>
        </ul>
    );
  }
}

export default Message;
```
- News组件

```javascript
import React, {Component} from 'react';

class News extends Component {
  render() {
    return (
        <ul>
          <li>news001</li>
          <li>news002</li>
          <li>news003</li>
        </ul>
    );
  }
}

export default News;
```
- Home组件

```javascript
import React, {Component} from 'react';
// noinspection ES6CheckImport
import {NavLink,Route,Switch,Redirect} from "react-router-dom";
import News from "./News";
import Message from "./Message";

class Home extends Component {
  render() {
    return (
        <div>
          <h3>我是Home的内容</h3>
          <ul className="nav nav-tabs">
            <li>
              <NavLink className="list-group-item" to="/home/news">News</NavLink>
            </li>
            <li>
              <NavLink className="list-group-item" to="/home/message">Message</NavLink>
            </li>
          </ul>
          <div>
            <Switch>
              <Route path="/home/news" component={News}/>
              <Route path="/home/message" component={Message}/>
              <Redirect to="/home/news"/>
            </Switch>
          </div>
        </div>
    );
  }
}
export default Home;
```
- 其余代码未做改变
#### （2）相关知识点
- 注册子路由时要写上父路山的path值
- 路由的匹配是按注册路由的顺序进行的
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210328170416349.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
### 13.向组件路由传递参数
#### （1）传递params参数
- 在上述例子中又添加了一个需求
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210328225208480.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

通过params传递参数实现
- 项目结构
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210328225437332.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- Message组件

```javascript
import React, {Component} from 'react';
// noinspection ES6CheckImport
import {Link,Route} from "react-router-dom";
import Detail from "./Detail";

class Message extends Component {
  state = {
    messageArr:[
      {id:"1",title:"消息1"},
      {id:"2",title:"消息2"},
      {id:"3",title:"消息3"},
    ]
  }
  render() {
    const {messageArr} = this.state;
    return (
        <div>
          <ul>
            {
              messageArr.map((messageObj)=>{
                return (
                    <li key={messageObj.id}>
                      <Link to={`/home/message/detail/${messageObj.id}/${messageObj.title}`}>{messageObj.title}</Link>
                    </li>
                )
              })
            }
          </ul>
          <hr/>
          <Route path="/home/message/detail/:id/:title" component={Detail}/>
        </div>
    );
  }
}

export default Message;
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210328225652114.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

- Detail组件

```javascript
import React, {Component} from 'react';

const content = [
  {id:"1",content:"你好,世界"},
  {id:"2",content:"你好,React"},
  {id:"3",content:"Hello，world"},
]
class Detail extends Component {

  render() {
    const {id,title} = this.props.match.params;
    const findResult = content.find((contentObj)=>{
      return contentObj.id === id;
    })
    return (
        <ul>
          <li>ID:{id}</li>
          <li>TITLE:{title}</li>
          <li>CONTENT:{findResult.content}</li>
        </ul>
    );
  }
}

export default Detail;
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210328225817473.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210328230525623.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/2021032823102727.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

#### （2）传递search参数
通过传递search参数实现
- Message组件

```javascript
import React, {Component} from 'react';
// noinspection ES6CheckImport
import {Link,Route} from "react-router-dom";
import Detail from "./Detail";

class Message extends Component {
  state = {
    messageArr:[
      {id:"1",title:"消息1"},
      {id:"2",title:"消息2"},
      {id:"3",title:"消息3"},
    ]
  }
  render() {
    const {messageArr} = this.state;
    return (
        <div>
          <ul>
            {
              messageArr.map((messageObj)=>{
                return (
                    <li key={messageObj.id}>
                      {/*params方式*/}
                      {/*<Link to={`/home/message/detail/${messageObj.id}/${messageObj.title}`}>{messageObj.title}</Link>*/}
                      {/*search方式*/}
                      <Link to={`/home/message/detail?id=${messageObj.id}&title=${messageObj.title}`}>{messageObj.title}</Link>
                    </li>
                )
              })
            }
          </ul>
          <hr/>
          {/*params方式声明接收参数*/}
          {/*<Route path="/home/message/detail/:id/:title" component={Detail}/>*/}
          {/*search方式不需要声明接收参数*/}
          <Route path="/home/message/detail" component={Detail}/>
        </div>
    );
  }
}

export default Message;
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210328231254257.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

- Detail组件

```javascript
import React, {Component} from 'react';
import qs from 'querystring';
const content = [
  {id:"1",content:"你好,世界"},
  {id:"2",content:"你好,React"},
  {id:"3",content:"Hello，world"},
]
class Detail extends Component {

  render() {
    console.log(this.props)
    //params方式的参数存放在props下的match下的params
    // const {id,title} = this.props.match.params;
    //search方式的参数存放在location下的search
    const {id,title} = qs.parse(this.props.location.search.slice(1))
    const findResult = content.find((contentObj)=>{
      return contentObj.id === id;
    })
    return (
        <ul>
          <li>ID:{id}</li>
          <li>TITLE:{title}</li>
          <li>CONTENT:{findResult.content}</li>
        </ul>
    );
  }
}

export default Detail;
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210328231426458.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210328231835784.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

#### （3）传递state参数
通过传递state参数实现（注意：这个state参数不是组件参数实例三大属性之一的state，而是路由组件中的props下的location下的state）
- Message组件

```javascript
import React, {Component} from 'react';
// noinspection ES6CheckImport
import {Link,Route} from "react-router-dom";
import Detail from "./Detail";

class Message extends Component {
  state = {
    messageArr:[
      {id:"1",title:"消息1"},
      {id:"2",title:"消息2"},
      {id:"3",title:"消息3"},
    ]
  }
  render() {
    const {messageArr} = this.state;
    return (
        <div>
          <ul>
            {
              messageArr.map((messageObj)=>{
                return (
                    <li key={messageObj.id}>
                      {/*params方式*/}
                      {/*<Link to={`/home/message/detail/${messageObj.id}/${messageObj.title}`}>{messageObj.title}</Link>*/}
                      {/*search方式*/}
                      {/*<Link to={`/home/message/detail?id=${messageObj.id}&title=${messageObj.title}`}>{messageObj.title}</Link>*/}
                      {/*state方式*/}
                      <Link to={{pathname:"/home/message/detail",state:{id:messageObj.id,title: messageObj.title}}}>{messageObj.title}</Link>
                    </li>
                )
              })
            }
          </ul>
          <hr/>
          {/*params方式声明接收参数*/}
          {/*<Route path="/home/message/detail/:id/:title" component={Detail}/>*/}
          {/*search方式不需要声明接收参数,state方式也不需要*/}
          <Route path="/home/message/detail" component={Detail}/>
        </div>
    );
  }
}

export default Message;
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210328233018933.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

- Detail组件

```javascript
import React, {Component} from 'react';
//import qs from 'querystring';
const content = [
  {id:"1",content:"你好,世界"},
  {id:"2",content:"你好,React"},
  {id:"3",content:"Hello，world"},
]
class Detail extends Component {

  render() {
    console.log(this.props)
    //params方式的参数存放在props下的match下的params
    // const {id,title} = this.props.match.params;
    //search方式的参数存放在location下的search
    // const {id,title} = qs.parse(this.props.location.search.slice(1))
    //state方式的参数存放在location下的state
    const {id,title} = this.props.location.state || {}
    const findResult = content.find((contentObj)=>{
      return contentObj.id === id;
    }) || {}
    return (
        <ul>
          <li>ID:{id}</li>
          <li>TITLE:{title}</li>
          <li>CONTENT:{findResult.content}</li>
        </ul>
    );
  }
}

export default Detail;
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210328233157766.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210328233304852.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
#### （4）相关知识点总结
- params参数
	- 路由链接(携带参数):<Link to='/demo/test/tom/18'}>详情\</Link>
	- 注册路由(声明接收):\<Route path="/demo/test/:name/:age" component={Test}/>
	- 接收参数: this.props.match.params
- search参数
	- 路由链接(携带参数):<Link to='/demo/test?name=tom&age=18'}>详情\</Link>
	- 注册路由(无需声明，正常注册即可):\<Route path="/demo/test" component={Test}/>
	- 接收参数: this.props.location.search
	- 备注:获取到的search是urlencoded编码字符串，需要借助querystring解析
- state参数
	- 路由链接(携带参数):<Link to={{path : '/demo/test',state:{name : 'tom' ,age:18}}}>详情\</Link>
	- 注册路由(无需声明，正常注册即可):\<Route path="/demo/test" component={Test}/>
	- 接收参数: this.props.location.state
	- 备注:刷新也可以保留住参数
### 14.push和replace
- 通过前端路由的原理我们知道，push是往栈里面压入数据，而replace是直接取代栈顶元素。
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210328235148345.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210328235230605.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 通过这里可以知道，Link默认的是push的方式，通过添加加replace属性可以改成replace方式
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210328235429994.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210328235605894.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
### 15.编程式路由导航
- 借助this.props.history对象上的API对操作路由跳转、前进、后退
	- this.props.history.push()：以push的方式改变地址栏路径
	- this.props.history.replace()：以replace的方式改变地址栏路径
	- this.props.history.goBack()：后退一步
	- this.props.history.goForward()：前进一步
	- this.props.history.go()：通过输入相应的数字前进或后退对应的步数，正数为前进，负数为后退
- Detail组件

```javascript
import React, {Component} from 'react';
// noinspection ES6CheckImport
import {Link,Route} from "react-router-dom";
import Detail from "./Detail";

class Message extends Component {
  state = {
    messageArr:[
      {id:"1",title:"消息1"},
      {id:"2",title:"消息2"},
      {id:"3",title:"消息3"},
    ]
  }

  pushShow = (id,title)=>{
    // params方式
    // this.props.history.push(`/home/message/detail/${id}/${title}`);
    //search方式
    // this.props.history.push(`/home/message/detail?id=${id}&title=${title}`);
    // state方式
    this.props.history.push("/home/message/detail",{id,title});
  }
  replaceShow = (id,title)=>{
    // params方式
    // this.props.history.replace(`/home/message/detail/${id}/${title}`);
    //search方式
    // this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`);
    // state方式
    this.props.history.replace("/home/message/detail",{id,title});
  }
  Back = ()=>{
    this.props.history.goBack();
  }
  Forward = ()=>{
    this.props.history.goForward();
  }
  Go = ()=>{
    this.props.history.go(2);
  }
  render() {
    const {messageArr} = this.state;
    return (
        <div>
          <ul>
            {
              messageArr.map((messageObj)=>{
                return (
                    <li key={messageObj.id}>
                      {/*params方式*/}
                      {/*<Link to={`/home/message/detail/${messageObj.id}/${messageObj.title}`}>{messageObj.title}</Link>*/}
                      {/*search方式*/}
                      {/*<Link to={`/home/message/detail?id=${messageObj.id}&title=${messageObj.title}`}>{messageObj.title}</Link>*/}
                      {/*state方式*/}
                      <Link to={{pathname:"/home/message/detail",state:{id:messageObj.id,title: messageObj.title}}}>{messageObj.title}</Link>
                      <button onClick={()=>{this.pushShow(messageObj.id,messageObj.title)}}>以push方式查看</button>
                      <button onClick={()=>{this.replaceShow(messageObj.id,messageObj.title)}}>以replace方式查看</button>
                    </li>
                )
              })
            }
          </ul>
          <hr/>
          {/*params方式声明接收参数*/}
          {/*<Route path="/home/message/detail/:id/:title" component={Detail}/>*/}
          {/*search方式不需要声明接收参数,state方式也不需要*/}
          <Route path="/home/message/detail" component={Detail}/>
          <hr/>
          <button onClick={this.Back}>后退一步</button>
          <button onClick={this.Forward}>前进一步</button>
          <button onClick={this.Go}>前进两步</button>
        </div>
    );
  }
}

export default Message;
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210329091542854.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210329091645726.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
### 16.withRouter的使用
- withRouter可以加工一般组件，让一般组件具备路由组件所特有的API
- withRouter的返回值是一个新组件
- 来看一个需求：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210329092103408.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- Header组件

```javascript
import React, {Component} from 'react';
// noinspection ES6CheckImport
import {withRouter} from "react-router-dom"

class Header extends Component {
  Back = ()=>{
    this.props.history.goBack();
  }
  Forward = ()=>{
    this.props.history.goForward();
  }
  Go = ()=>{
    this.props.history.go(2);
  }
  render() {
    return (
        <div className="page-header">
          <h2>React Router Demo</h2>
          <button onClick={this.Back}>后退一步</button>
          <button onClick={this.Forward}>前进一步</button>
          <button onClick={this.Go}>前进两步</button>
        </div>
    );
  }
}

export default withRouter(Header);
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210329092427164.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210329092458245.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
### 17.BrowserRouter和HashRouter的区别
- 底层原理不一样:
	- BrowserRouter使用的是H5的history API，不兼容IE9及以下版本。
	- HashRouter使用的是URL的哈希值。
- path表现形式不一样
	- BrowserRouter的路径中没有#,例如: localhost:3000/demo/test
	- HashRouter的路径包含#,例如: localhost:3000/#/demo/test
- 刷新后对路由state参数的影响
	- BrowserRouter没有任何影响，因为state保存在history对象中。
	- HashRouter刷新后会导致路由state参数的丢失!! !
- 备注:HashRouter可以用于解决一些路径错误相关的问题。
# 六、React UI组件库
- 流行的开源React U组件库
	- material-ui(国外)
	- 官网: http://www.material-ui.com/#/e
	- github: https://github.com/callemall/material-uie'
	- ant-design(国内蚂蚁金服)
	- 官网: https://ant.design/index-cnle
	- Github: https://github.com/ant-design/ant-design/e-
- 具体如何使用，直接参考官方文档即可
- 首先需要安装对应的插件库
- 命令： npm i antd --save
- 使用这些代码的前提是需要引入官网的样式库才能显示
- import 'antd/dist/ antd.css'
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210329111856791.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

antd按需引入+自定义主题
- 上述方法直接引入样式库固然可以实现样式的显示，但是也引入了一些未用到的样式，我们应该要按需引入
- 按需引入和自定义主题在官方文档也有说明，这里做个简单总结
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210329112802783.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210329113047316.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 安装依赖: yarn add react-app-rewired customize-cra babel-plugin-import lessless-loader
- 修改package.json

```javascript
"scripts": {
	"start" : "react-app-rewired start",
	"build" : "react-app-rewired build",
	"test" : "react-app-rewired test",
	"eject" : "react-scripts eject"
},
```
- 根目录下创建config-overrides.js
```javascript
//配置具体的修改规则
const { override，fixBabelImports,addLessLoader} = require(' customize-cra');
module.exports = override(
	fixBabelImports('import', {
		libraryName: 'antd',
		libraryDirectory: 'es',
		style: true,
	}),
	addLessLoader({
		less0ptions:{
			javascriptEnabled: true,
			modifyVars: { '@primary-color': 'green'},
		}
	}),
);
```
- 备注:不用在组件里亲自引入样式了，即: import 'antd/dist/antd.css '应该删掉

# 七、redux
### 1.redux简介
- 学习文档
	- 英文文档: https://redux.js.org/
	- 中文文档: http://www.redux.org.cn/
	- Github: https://github.com/reactjs/redux
- redux是什么
	- redux是一个专门用于做状态管理的JS库(不是react插件库)
	- 它可以用在react, angular, vue等项目中,但基本与react配合使用。
	- 作用:集中式管理react应用中多个组件共享的状态。
- 什么情况下需要使用redux
	- 某个组件的状态，需要让其他组件可以随时拿到(共享)。
	- 一个组件需要改变另一个组件的状态(通信)。
	- 总体原则:能不用就不用,如果不用比较吃力才考虑使用。
### 2.redux工作流程
- redux原理图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210329114513809.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- redux的三个核心概念

- **action**
	- 动作的对象                                  
	- 包含2个属性
		- type:标识属性,值为字符串,唯一,必要属性
		- data:数据属性，值类型任意,可选属性
	- 例子: {type: 'ADD_STUDENT",data:{name: 'tom',age:18}}

- **reducer**
	- 用于初始化状态、加工状态。
	- 加工时，根据旧的state和action，产生新的state的纯函数。

- **store**
	- 将state、action、reducer联系在一起的对象
	- 如何得到此对象?
		- import {createStore} from 'redux'
		- import reducer from './reducers'
		- const store = createStore(reducer)
	- 此对象的功能
		- getState():得到state
		- dispatch(action):分发action,触发reducer调用,产生新的state
		- subscribe(listener):注册监听,当产生了新的state时,自动调用

### 3.求和案例
- 需求：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210329193626569.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
#### （1）不使用redux实现
- 项目结构
![在这里插入图片描述](https://img-blog.csdnimg.cn/2021032919375382.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- App.jsx

```javascript
import React, {Component} from 'react';
import Count from "./components/Count";

class App extends Component {

  render() {
    return (
        <div>
          <Count/>
        </div>
    );
  }
}
export default App;
```
- index.js

```javascript
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
ReactDOM.render(<App/>, document.getElementById("root"))
```
- Count组件

```javascript
import React, {Component} from 'react';

class Count extends Component {
  state = {
    count:0
  }

  increment = ()=>{
    const {value} = this.selectNum;
    const {count} = this.state;
    this.setState({count:count+value*1})
  }
  decrement = ()=>{
    const {value} = this.selectNum;
    const {count} = this.state;
    this.setState({count:count-value*1})
  }
  incrementOdd = ()=>{
    const {value} = this.selectNum;
    const {count} = this.state;
    if(count %2 !== 0){
      this.setState({count:count+value*1})
    }
  }
  incrementAsync = ()=>{
    const {value} = this.selectNum;
    const {count} = this.state;
    setTimeout(()=>{
      this.setState({count:count+value*1})
    },1000)
  }
  render() {
    const {count} = this.state;
    return (
        <div>
          <h2>当前的和是：{count}</h2>
          <select ref={c =>{this.selectNum = c}}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>&nbsp;
          <button onClick={this.increment}>+</button>&nbsp;
          <button onClick={this.decrement}>-</button>&nbsp;
          <button onClick={this.incrementOdd}>和为奇数时加</button>&nbsp;
          <button onClick={this.incrementAsync}>异步加</button>&nbsp;
        </div>
    );
  }
}

export default Count;
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210329194150442.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
#### （2）精简版redux实现（未使用Action Creators）
- 安装redux
	- 命令：npm i redux --save
	![在这里插入图片描述](https://img-blog.csdnimg.cn/202103292023483.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 项目结构
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210329202236793.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- store.js
```javascript
/*
该文件专门用于暴露一个store对象，整个应用只有一个store对象
* */
//引入createStore,专门用于创建redux中最核心的对象store
import {createStore} from "redux";
//引入为Count服务的reducer
import countReducer from "./count_reducer"

export default createStore(countReducer);
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/2021032920263027.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- count_reducer.js

```javascript
/*
* 该文件是用于创建一个专门为Count服务的reducer，reducer的本质是一个函数
* */

const initState = 0;
export default function countReducer(preState=initState,action) {
  const {type,data} = action;
  switch (type) {
    case "increment":
      return preState + data;
    case "decrement":
      return preState - data;
    default:
      return preState;
  }
}
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210329202834762.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- Count组件

```javascript
import React, {Component} from 'react';
import store from "../../redux/store";

class Count extends Component {

  componentDidMount() {
    //检测redux中状态的变化，只有发生变化，就调用render()
    store.subscribe(()=>{
      this.setState({})
    })
  }

  increment = ()=>{
    const {value} = this.selectNum;
    store.dispatch({type:"increment",data:value*1});
  }
  decrement = ()=>{
    const {value} = this.selectNum;
    store.dispatch({type:"decrement",data:value*1});
  }
  incrementOdd = ()=>{
    const {value} = this.selectNum;
    const count = store.getState()
    if(count %2 !== 0){
      store.dispatch({type:"increment",data:value*1});
    }
  }
  incrementAsync = ()=>{
    const {value} = this.selectNum;
    setTimeout(()=>{
      store.dispatch({type:"increment",data:value*1});
    },1000)
  }
  render() {
    return (
        <div>
          <h2>当前的和是：{store.getState()}</h2>
          <select ref={c =>{this.selectNum = c}}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>&nbsp;
          <button onClick={this.increment}>+</button>&nbsp;
          <button onClick={this.decrement}>-</button>&nbsp;
          <button onClick={this.incrementOdd}>和为奇数时加</button>&nbsp;
          <button onClick={this.incrementAsync}>异步加</button>&nbsp;
        </div>
    );
  }
}

export default Count;
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210329203514562.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210329205923796.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)


- 其余代码未作更改（如果要使用第二种调用render的方式请修改index.js文件）

相关知识点
- 去除count组件自身的状态
- src下建立:
	- redux
	- store.js
	- count_reducer.js
- store.js:
	- 引入redux中的createStore函数，创建一个store
	- createStore调用时要传入一个为其服务的reducer
	- 记得暴露store对象
- count_reducer.js:
	- reducer的本质是一个函数，接收: preState,action，返回加工后的状态
	- reducer有两个作用:初始化状态，加工状态
	- reducer被第一次调用时，是store自动触发的，传递的preState是undefined,传递的action是:{type : '@@REDUX/INIT_a.2.b.4}（随机生成的）
- 在.index.js中监测store中状态的改变，一旦发生改变重新渲染\<App/>
- 备注: redux只负责管理状态，至于状态的改变驱动着页面的展示，要靠我们自己写。

#### （3）完整版redux实现（使用Action Creators）
- 精简版中的action对象是我们自己创建的，在完整版中就要通过Action Creators创建
- 项目结构
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210329210558428.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- constant.js

```javascript
/*
该模块是用于定义action对象中的type的常量值
* */

export const INCREMENT = 'increment';
export const DECREMENT = 'decrement';
```

- count_action.js

```javascript
/*
* 该文件专门为Count生成Action对象
* */

import {INCREMENT,DECREMENT} from "./constant";

export const createIncrementAction = data =>({type:INCREMENT,data})
export const createDecrementAction = data =>({type:DECREMENT,data})
```
- count_reducer

```javascript
/*
* 该文件是用于创建一个专门为Count服务的reducer，reducer的本质是一个函数
* */
import {INCREMENT,DECREMENT} from "./constant";

const initState = 0;
export default function countReducer(preState=initState,action) {
  const {type,data} = action;
  switch (type) {
    case INCREMENT:
      return preState + data;
    case DECREMENT:
      return preState - data;
    default:
      return preState;
  }
}
```
相关知识点
- 新增文件:
	- count_action.js 专门用于创建action对象
	- constant.js 放置容易写错的type值


#### （4）异步action
- 我们注意到实现异步加的时候是在组件Count中添加计时器，但是我们希望计时器是写在创建Action对象中，这个就是异步action
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210329213124369.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

- count_action.js

```javascript
/*
* 该文件专门为Count生成Action对象
* */

import {INCREMENT,DECREMENT} from "./constant";
import store from "./store";
//同步action,就是指action的值为Object类型的一般对象
export const createIncrementAction = data =>({type:INCREMENT,data})
export const createDecrementAction = data =>({type:DECREMENT,data})

//异步action,就是值action的值为函数
export const createIncrementAsyncAction = (data,time)=>{
  return ()=>{
    setTimeout(()=>{
      store.dispatch(createIncrementAction(data))
    },time)
  }
}
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210329213207361.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 但是当我们执行的时候却发现，store希望返回的是一个Object一般对象，返回函数无法处理
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210329212405823.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 这个时候就需要借助到一个中间件，借助这个中间件store可以先执行这个返回的函数，就能拿到这个返回的一般对象了
- 中间件为：redux-thunk
- 安装命令：npm i redux-thunk --save
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210329213527714.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 在store.js中使用中间件
- store.js

```javascript
/*
该文件专门用于暴露一个store对象，整个应用只有一个store对象
* */

//引入createStore,专门用于创建redux中最核心的对象store
import {createStore,applyMiddleware} from "redux";
//引入为Count服务的reducer
import countReducer from "./count_reducer"
//引入redux-thunk用于支持异步action
import thunk from "redux-thunk";

// noinspection JSCheckFunctionSignatures
export default createStore(countReducer,applyMiddleware(thunk));
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210329213738452.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
相关知识点
- 明确:延迟的动作不想交给组件自身，想交给action
- 何时需要异步action:想要对状态进行操作，但是具体的数据靠异步任务返回(非必须）
- 具体编码:
	- npm i redux-thunk --save，并配置在store中
	- 创建action的函数不再返回一般对象，而是一个函数，该函数中写异步任务。
	- 异步任务有结果后，分发一个同步的action去真正操作数据。
- 备注:异步action不是必须要写的，完全可以自己等待异步任务的结果了再去分发同步action。
### 4.对react-redux的理解
- react-redux是react官方的插件库，与redux还是有点区别的
- 所有的UI组件都应该被一个容器组件包裹，他们是父子关系。
- 容器组件是真正和redux打交道的，里面可以随意的使用redux的api。
- UI组件中不能使用任何redux的api。
- 容器组件会传给UI组件:
	- redux中所保存的状态。
	- 用于操作状态的方法。
- 备注:容器给UI传递:状态、操作状态的方法，均通过props传递。
- react-redux模型图
![在这里插入图片描述](https://img-blog.csdnimg.cn/2021032921423957.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
### 5.react-redux的基本使用
- 要使用react-redux，需要先安装react-redux插件库
- 命令：npm i react-redux --save
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210330091613349.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 根据模型图可以知道，跟redux打交道的是容器组件，UI组件中不应该跟redux打交道，所以需要创建一个容器组件，UI组件中跟redux打交道的内容应该删除
- 项目结构
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210330091928923.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 容器组件的创建不能像一般组件那样创建，需要借助react-redux中的connect函数
- 容器组件Count

```javascript
import {connect} from "react-redux";
import Count from "../../components/Count";
import {
	createIncrementAction,
	createDecrementAction,
	createIncrementAsyncAction
} from "../../redux/count_action";

function mapStateToProps(state) {
 return  {count:state}
}
function mapDispatchToProps(dispatch) {
  return {
    add:(data)=>{
      dispatch(createIncrementAction(data))
    },
    sub:(data)=>{
      dispatch(createDecrementAction(data))
    },
    addAsync:(data,time)=>{
      dispatch(createIncrementAsyncAction(data,time))
    },
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Count)
```
- UI组件Count

```javascript
import React, {Component} from 'react';

class Count extends Component {

  increment = ()=>{
    const {value} = this.selectNum;
    this.props.add(value*1);
  }
  decrement = ()=>{
    const {value} = this.selectNum;
    this.props.sub(value*1);

  }
  incrementOdd = ()=>{
    const {value} = this.selectNum;
    if(this.props.state% 2 !== 0){
      this.props.add(value*1);
    }
  }
  incrementAsync = ()=>{
    const {value} = this.selectNum;
    this.props.addAsync(value*1,1000);
  }
  render() {
    return (
        <div>
          <h2>当前的和是：{this.props.count}</h2>
          <select ref={c =>{this.selectNum = c}}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>&nbsp;
          <button onClick={this.increment}>+</button>&nbsp;
          <button onClick={this.decrement}>-</button>&nbsp;
          <button onClick={this.incrementOdd}>和为奇数时加</button>&nbsp;
          <button onClick={this.incrementAsync}>异步加</button>&nbsp;
        </div>
    );
  }
}

export default Count;
```
- App.jsx

```javascript
import React, {Component} from 'react';
import Count from "./containers/Count";
import store from "./redux/store";

class App extends Component {

  render() {
    return (
        <div>
          <Count store={store}/>
        </div>
    );
  }
}
export default App;
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210330093018753.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210330094120591.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210330094407856.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
相关知识点
- 明确两个概念:
	- UI组件:不能使用任何redux的api，只负责页面的呈现、交互等。
	- 容器组件:负责和redux通信，将结果交给UT组件。
- 如何创建一个容器组件—靠react-redux 的connect函数
	- connect(mapStateToProps,mapDispatchToProps)(UI组件)
		- mapstateToProps:映射状态，返回值是一个对象
		- mapDispatchToProps:映射操作状态的方法，返回值是一个对象
- 备注:容器组件中的store是靠props传进去的，而不是在容器组件中直接引入
### 6.react-redux的优化使用
- 从这几个方面考虑优化
	- 首先容器组件中的两个函数可以简写
	- 在App组件中传入的store对象，如果容器组件很多是否每一个都要这么传呢？
	- 在文件层面上，当UI组件存在，容器组件必须存在，对应的文件个数将会成倍增加，是否可以将其合并为一个文件呢？
	- 使用了react-redux，是否还需要监测redux中的状态变化呢
- index.js

```javascript
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from "react-redux";
import store from "./redux/store";

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById("root")
)

```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210330100236457.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210330100312116.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 容器组件Count

```javascript
import {connect} from "react-redux";
import React, {Component} from 'react';
import {
	createIncrementAction,
	createDecrementAction,
	createIncrementAsyncAction
} from "../../redux/count_action";

class Count extends Component {

  increment = ()=>{
    const {value} = this.selectNum;
    this.props.add(value*1);
  }
  decrement = ()=>{
    const {value} = this.selectNum;
    this.props.sub(value*1);

  }
  incrementOdd = ()=>{
    const {value} = this.selectNum;
    if(this.props.state% 2 !== 0){
      this.props.add(value*1);
    }
  }
  incrementAsync = ()=>{
    const {value} = this.selectNum;
    this.props.addAsync(value*1,1000);
  }
  render() {
    return (
        <div>
          <h2>当前的和是：{this.props.count}</h2>
          <select ref={c =>{this.selectNum = c}}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>&nbsp;
          <button onClick={this.increment}>+</button>&nbsp;
          <button onClick={this.decrement}>-</button>&nbsp;
          <button onClick={this.incrementOdd}>和为奇数时加</button>&nbsp;
          <button onClick={this.incrementAsync}>异步加</button>&nbsp;
        </div>
    );
  }
}

export default connect(
    state =>({count:state}),
    //从编码层面进行优化
    // dispatch => ({
    //   add:(data)=>{
    //     dispatch(createIncrementAction(data))
    //   },
    //   sub:(data)=>{
    //     dispatch(createDecrementAction(data))
    //   },
    //   addAsync:(data,time)=>{
    //     dispatch(createIncrementAsyncAction(data,time))
    //   },
    // })
    //从connect函数API层面进行优化
    {
      add:createIncrementAction,
      sub:createDecrementAction,
      addAsync:createIncrementAsyncAction
    }
)(Count)
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210330100524396.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210330100655227.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210330100842216.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
相关知识点
- 容器组件和UI组件整合一个文件
- 无需自己给容器组件传递store，给\<App/>包裹一个\<Provider store={store}>即可
- 使用了react-redux后也不用再自己检测redux中状态的改变了，容器组件可以自动完成这个工作
- mapDispatchToProps也可以简单的写成一个对象
- 一个组件要和redux“打交道”要经过那几步?
	- 定义好UI组件---不暴露
	- 引入connect生成一个容器组件，并暴露，写法如下:
		- connect(state =>({key:value}){key : xxxxxAction}
		)(UI组件)
	- 在UI组件中通过this.props.xxxxxxx读取和操作状态
### 7.实现组件间的数据共享
- 需求：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210330125314169.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
#### （1）未优化实现
- 项目结构
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210330125500423.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- actions-person.js

```javascript
/*
* 该文件专门为Person生成Action对象
* */
import {ADD_PERSON} from "../constant";

export const createPersonAction = personObj =>({type:ADD_PERSON,data:personObj});
```
- reducers-person.js

```javascript

import {ADD_PERSON} from "../constant";

const initState = [{id:"001",name:'Tom',age:18}]
export default function personReducer(preState=initState,action) {
 const {type,data} = action;
 switch (type) {
   case ADD_PERSON :
     return [data,...preState];
   default:
     return preState;
 }
}
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210330125729149.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- store.js

```javascript
/*
该文件专门用于暴露一个store对象，整个应用只有一个store对象
* */

//引入createStore,专门用于创建redux中最核心的对象store
import {createStore,applyMiddleware,combineReducers} from "redux";
//引入为Count服务的reducer
import countReducer from "./reducers/count"
//引入为Person服务的reducer
import personReducer from "./reducers/person";
//引入redux-thunk用于支持异步action
import thunk from "redux-thunk";

const allReducers = combineReducers({
  he:countReducer,
  rens:personReducer
})
// noinspection JSCheckFunctionSignatures
export default createStore(allReducers,applyMiddleware(thunk));
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210330130206725.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- Count组件

```javascript
import {connect} from "react-redux";
import React, {Component} from 'react';
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from "../../redux/actions/count";

class Count extends Component {

  increment = ()=>{
    const {value} = this.selectNum;
    this.props.add(value*1);
  }
  decrement = ()=>{
    const {value} = this.selectNum;
    this.props.sub(value*1);

  }
  incrementOdd = ()=>{
    const {value} = this.selectNum;
    if(this.props.state% 2 !== 0){
      this.props.add(value*1);
    }
  }
  incrementAsync = ()=>{
    const {value} = this.selectNum;
    this.props.addAsync(value*1,1000);
  }
  render() {
    return (
        <div>
          <h2>我是Count组件，下方组件的人数是：{this.props.renshu}</h2>
          <h3>当前的和是：{this.props.count}</h3>
          <select ref={c =>{this.selectNum = c}}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>&nbsp;
          <button onClick={this.increment}>+</button>&nbsp;
          <button onClick={this.decrement}>-</button>&nbsp;
          <button onClick={this.incrementOdd}>和为奇数时加</button>&nbsp;
          <button onClick={this.incrementAsync}>异步加</button>&nbsp;
        </div>
    );
  }
}

export default connect(
    state =>({
          count:state.he,
          renshu:state.rens.length
    }),
    {
      add:createIncrementAction,
      sub:createDecrementAction,
      addAsync:createIncrementAsyncAction
    }
)(Count)
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210330130802437.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- Person组件（这里有使用一个nanoid库随机生成id，npm i nanoid --save）

```javascript
import {connect} from "react-redux";
import React, {Component} from 'react';
import {nanoid} from "nanoid";
import {createPersonAction} from '../../redux/actions/person'


class Person extends Component {

  addPerson = ()=>{
    const name = this.nameNode.value;
    const age = this.ageNode.value;
    const personObj = {id:nanoid(),name,age}
    this.props.jiaYiRen(personObj);
    this.nameNode.value='';
    this.ageNode.value='';
  }

  render() {
    return (
        <div>
          <h2>我是Person组件,上方组件的和为：{this.props.he}</h2>
          <input ref={c =>this.nameNode = c} type="text" placeholder="请输入名字"/>
          <input ref={c =>this.ageNode = c} type="text" placeholder="请输入年龄"/>
          <button onClick={this.addPerson}>添加</button>
          <ul>
            {
              this.props.yigeren.map((p)=>{
                return <li key={p.id}>{p.name}----{p.age}</li>
              })
            }
          </ul>
        </div>
    );
  }
}

export default connect(
    state => ({
      yigeren:state.rens,
      he:state.he
    }),
    {jiaYiRen:createPersonAction}
)(Person)
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210330131119141.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 其余代码未作改变

相关知识点
- 定义一个Pserson组件，和Count组件通过redux共享数据。
- 为Person组件编写: reducer、action，配置constant常量。
- 重点:Person的reducer和Count的Reducer要使用combineReducers进行合并，合并后的总状态是一个对象!! !
- 交给store的是总reducer，最后注意在组件中取出状态的时候，记得“取到位”。

扩展：纯函数
- 一类特别的函数:只要是同样的输入(实参)，必定得到同样的输出(返回)
- 必须遵守以下一些约束
	- 不得改写参数数据
	- 不会产生任何副作用，例如网络请求，输入和输出设备
	- 不能调用Date.now()或者Math.random)等不纯的方法
-  redux的reducer函数必须是一个纯函数
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210330132246724.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
#### （2）使用redux开发者工具
- 当组件多的时候，我们需要知道store到底存放了那些数据，这时候需要借助一个开发者工具，具体安装方法请参考react的开发者工具
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210330194033530.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 但是这个工具并不是安装了就能直接使用，而是需要在代码中进行配置才能使用
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210330194220168.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 要让开发者工具能够监测store中的状态，需要借助一个中间库
- 命令：npm i redux-devtools-extension --save
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210330194725927.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 在store.js中进行配置

```javascript
/*
该文件专门用于暴露一个store对象，整个应用只有一个store对象
* */

//引入createStore,专门用于创建redux中最核心的对象store
import {createStore,applyMiddleware,combineReducers} from "redux";
//引入为Count服务的reducer
import countReducer from "./reducers/count"
//引入为Person服务的reducer
import personReducer from "./reducers/person";
//引入redux-thunk用于支持异步action
import thunk from "redux-thunk";
//引入composeWithDevTools
import {composeWithDevTools} from "redux-devtools-extension"

const allReducers = combineReducers({
  he:countReducer,
  rens:personReducer
})
// noinspection JSCheckFunctionSignatures
export default createStore(allReducers,composeWithDevTools(applyMiddleware(thunk)));
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210330195358122.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210330195521504.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

#### （3）优化实现
- 上面的实现，很多的命名都很不合开发时的命名规则，所以要对其进行优化，开始不进行优化的原因是在学习的过程中必须清楚地知道，每个对像对应的属性，不能搞混淆
- store.js
```javascript
/*
该文件专门用于暴露一个store对象，整个应用只有一个store对象
* */

//引入createStore,专门用于创建redux中最核心的对象store
import {createStore,applyMiddleware} from "redux";
//引入redux-thunk用于支持异步action
import thunk from "redux-thunk";
//引入合并后的Reducers
import allReducers from "./reducers"
//引入composeWithDevTools
import {composeWithDevTools} from "redux-devtools-extension"


// noinspection JSCheckFunctionSignatures
export default createStore(allReducers,composeWithDevTools(applyMiddleware(thunk)));
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210330200640149.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- reducers文件夹下的index.js

```javascript
//引入combineReducers用于合并reducer
import {combineReducers} from "redux";
//引入为Count服务的reducer
import count from "./count"
//引入为Person服务的reducer
import persons from "./person";

export  default combineReducers({
  count,
  persons
})
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210330200844640.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 当state中的属性命名改变，对应的组件使用其的地方也需要进行更改
- Count组件

```javascript
import {connect} from "react-redux";
import React, {Component} from 'react';
import {
  Increment,
  Decrement,
  IncrementAsync
} from "../../redux/actions/count";

class Count extends Component {

  increment = ()=>{
    const {value} = this.selectNum;
    this.props.Increment(value*1);
  }
  decrement = ()=>{
    const {value} = this.selectNum;
    this.props.Decrement(value*1);

  }
  incrementOdd = ()=>{
    const {value} = this.selectNum;
    if(this.props.state% 2 !== 0){
      this.props.Increment(value*1);
    }
  }
  incrementAsync = ()=>{
    const {value} = this.selectNum;
    this.props.IncrementAsync(value*1,1000);
  }
  render() {
    return (
        <div>
          <h2>我是Count组件，下方组件的人数是：{this.props.persons}</h2>
          <h3>当前的和是：{this.props.count}</h3>
          <select ref={c =>{this.selectNum = c}}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>&nbsp;
          <button onClick={this.increment}>+</button>&nbsp;
          <button onClick={this.decrement}>-</button>&nbsp;
          <button onClick={this.incrementOdd}>和为奇数时加</button>&nbsp;
          <button onClick={this.incrementAsync}>异步加</button>&nbsp;
        </div>
    );
  }
}

export default connect(
    state =>({
          count:state.count,
          persons:state.persons.length
    }),
    {
      Increment,
      Decrement,
      IncrementAsync
    }
)(Count)
```
- Person组件

```javascript
import {connect} from "react-redux";
import React, {Component} from 'react';
import {nanoid} from "nanoid";
import {addPerson} from '../../redux/actions/person'


class Person extends Component {

  addPerson = ()=>{
    const name = this.nameNode.value;
    const age = this.ageNode.value;
    const personObj = {id:nanoid(),name,age}
    this.props.addPerson(personObj);
    this.nameNode.value='';
    this.ageNode.value='';
  }

  render() {
    return (
        <div>
          <h2>我是Person组件,上方组件的和为：{this.props.count}</h2>
          <input ref={c =>this.nameNode = c} type="text" placeholder="请输入名字"/>
          <input ref={c =>this.ageNode = c} type="text" placeholder="请输入年龄"/>
          <button onClick={this.addPerson}>添加</button>
          <ul>
            {
              this.props.persons.map((p)=>{
                return <li key={p.id}>{p.name}----{p.age}</li>
              })
            }
          </ul>
        </div>
    );
  }
}

export default connect(
    state => ({
      persons:state.persons,
      count:state.count
    }),
    {addPerson}
)(Person)
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210330202350973.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- Action中的count.js

```javascript
/*
* 该文件专门为Count生成Action对象
* */

import {INCREMENT,DECREMENT} from "../constant";
import store from "../store";
//同步action,就是指action的值为Object类型的一般对象
export const Increment = data =>({type:INCREMENT,data})
export const Decrement= data =>({type:DECREMENT,data})

//异步action,就是值action的值为函数
export const IncrementAsync = (data,time)=>{
  return ()=>{
    setTimeout(()=>{
      store.dispatch(Increment(data))
    },time)
  }
}
```
- Action中的preson.js

```javascript
/*
* 该文件专门为Person生成Action对象
* */
import {ADD_PERSON} from "../constant";

export const addPerson = personObj =>({type:ADD_PERSON,data:personObj});
```
- 其他的代码未作修改
- 修改后依然正常运行
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210330202605944.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

相关知识点
- 所有变量名字要规范，尽量触发对象的简写形式。
- reducers文件夹中，编写index.js 专门用于汇总并暴露所有的reducer
### 8.项目打包运行
- 平时我们是处于开发环境，react开发工具是这样显示的
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210330202958162.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 实际的项目运行是进行过打包的，所以我们要对项目进行打包
- 命令：npm run build
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210330203141220.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210330203249203.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 可以通过一个serve服务器模拟在后端服务器上运行
- 安装命令：npm i serve -g，需要全局安装
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210330203646369.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210330203749204.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210330203842396.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
# 八、扩展
### 1.setState
setState更新状态的2种写法
- setState(statechange，[callback])------对象式的setState
	- stateChange为状态改变对象(该对象可以体现出状态的更改)
	- callback是可选的回调函数，它在状态更新完毕、界面也更新后(render调用后)才被调用
- setState(updater，[callback]) ------函数式的setState
	- updater为返回statechange对象的函数。
	- updater可以接收到state和props
	- callback是可选的回调函数，它在状态更新、界面也更新后(render调用后)才被调用。
- 总结:
	- 对象式的setState是函数式的setState的简写方式(语法糖)
	- 使用原则:
		- 如果新状态不依赖于原状态------使用对象方式
		- 如果新状态依赖于原状态------使用函数方式
		- 如果需要在setState()执行后获取最新的状态数据，要在第二个callback函数中读取

![在这里插入图片描述](https://img-blog.csdnimg.cn/2021033121502070.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210331215323490.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210331220721997.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
### 2.lazyLoad
- lazyLoad的意思是懒加载，懒加载的意思就是需要使用时才加载，在路由组件上使用较多
- 不使用懒加载，所有的路由组件在第一次渲染页面的时候就会全部请求下来当组件少的时候影响不大，但是当组件比较多的时候，在请求资源上就会花费大量的时间，此时页面加载不出来，用户体验较差
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210331222906728.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210331223011263.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 使用懒加载，在用户使用对应的组件的时候才会去请求对应的组件资源，这样可以提高加载的效率。
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210331223150389.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210331224517894.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210331224712477.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210331225023649.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210331225132267.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210331225728382.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 总结路由组件的lazyLoad

```javascript
//1.通过React的lazy函数配合import()函数动态加载路由组件
//路由组件代码会被分开打包const Login = lazy(()=>import( 'a/pages/Login'))
//2.通过<Suspense>指定在加载得到路由打包文件前显示一个自定义1oading界面
<Suspense fa1lback={<h1>loading. . . ..</h1>}>
	<Switch>
		<Route path="/xxx" component={Xxxx}/>
		<Redirect to=" / login" />
	</Switch>
</Suspense>
```
### 3.Hooks
- React Hook/Hooks是什么?
	- Hook是React 16.8.0版本增加的新特性/新语法
	- 可以让你在函数组件中使用state以及其他的 React特性
- 三个常用的Hook
	- State Hook: React.usestate()
	- Effect Hook: React.useEffect()
	- Ref Hook : React.useRef()

#### （1）State Hook
- 在学习函数式组件的时候我们知道函数式组件只能使用props属性
- State Hook让函数组件也可以有state状态，并进行状态数据的读写操作
- 语法: const [xxx，setxxx] = React.useState(initvalue)
- useState()说明:
	- 参数:第一次初始化指定的值在内部作缓存
	- 返回值:包含2个元素的数组，第1个为内部当前状态值，第2个为更新状态值的函数
- setxxx()2种写法:
	- setxxx(newvalue):参数为非函数值，直接指定新的状态值，内部用其覆盖原来的状态值
	- setxxx(value => newvalue):参数为函数，接收原本的状态值，返回新的状态值，内部用其覆盖原来的状态值
	![在这里插入图片描述](https://img-blog.csdnimg.cn/20210331232238444.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
	![在这里插入图片描述](https://img-blog.csdnimg.cn/20210331232314559.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
#### （2）EffectHook
- Effect Hook 可以让你在函数组件中执行副作用操作(用于模拟类组件中的生命周期钩子)
- React中的副作用操作:
	- 发ajax请求数据获取
	- 设置订阅/启动定时器
	- 手动更改真实DOM
- 语法和说明:

```javascript
useEffect(() => {
		//在此可以执行任何带副作用操作
		return () => { 
			//在组件卸载前执行
			//在此做一些收尾工作，比如清除定时器/取消订阅等
		}
	},[statevalue]//如果指定的是[]，回调函数只会在第一次render()后执行
)
```

- 可以把useEffect Hook看做如下三个函数的组合
	- componentDidMount()
	- componentDidupdate()
	- componentwillUnmount()
	![在这里插入图片描述](https://img-blog.csdnimg.cn/20210331235634280.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
	![在这里插入图片描述](https://img-blog.csdnimg.cn/20210331235736640.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
#### （3）Ref Hook
- Ref Hook可以在函数组件中存储/查找组件内的标签或任意其它数据
- 语法: const refContainer = useRef()
- 作用:保存标签对象,功能与React.createRef()一样
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210401000941816.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
### 4.Fragment
- 我们在写jsx语句的时候，前提是必须包含一个根标签，现在我希望不套这个根标签了，就能使用\<Fragment>\</Fragment>或者<></>代替，两者的区别是Fragment可以传入一个key属性用于遍历时的key
- 使用
```html
<Fragment></Fragment>
或者
<></>
```
- 作用
	- 可以不用必须有一个真实的DOM根标签了

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210401002128525.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210401002032650.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
### 5.Context
- 理解
	- —种组件间通信方式,常用于【祖组件】与【后代组件】间通信
- 使用
- 创建context容器对象:

```javascript
const XxxxContext = React.createcontext()
```

- 渲染子组时，外面包裹xxxContext.provider，通过value属性给后代组件传递数据:

```html
<XxxContext.Provider value={数据}>
子组件
</XxxContext.Provider>
```

- 后代组件读取数据:

```javascript
//第一种方式:仅适用于类组件
static contextType = XxxContext//声明接收context
this.context //读取context中的value数据
//第二种方式:函数组件与类组件都可以
<xxxContext.Consumer>
{
	value =>( / / value就是context中的value数据
		要显示的内容
	)
}
</xxxContext.Consumer>
```
- 类式组件
- Provider只有value一个属性
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210401111301456.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/2021040111144176.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 函数式组件
![在这里插入图片描述](https://img-blog.csdnimg.cn/2021040111214028.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

### 6.PureComponent
组件优化
- component的2个问题
	- 只要执行setState(),即使不改变状态数据,组件也会重新render()
	- 只当前组件重新render(),就会自动重新render子组件----效率低
- 效率高的做法
	- 只有当组件的state或props数据发生改变时才重新render()
- 原因
	- Component中的shouldComponentUpdate()总是返回true
- 解决
	- 办法1∶
		- 重写shouldComponentupdate()方法
		- 比较新旧state或props数据，如果有变化才返回true，如果没有返回false
	- 办法2:
		- 使用PureComponent
		- PureComponent重写了shouldComponentUpdate()，只有state或props数据有变化才返回true
		- 注意:只是进行state和props数据的浅比较，如果只是数据对象内部数据变了，返回false，不要直接修改state数据，而是要产生新数据
		- 项目中一般使用PureComponent来优化、
- 存在的问题
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210401114048740.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210401114213822.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210401114401577.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210401114516874.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210401114705573.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210401114953666.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 重写shouldComponentupdate()方法
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210401115551113.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210401115633215.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210401120035357.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210401120231975.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 使用PureComponent
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210401120526430.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210401123419901.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

### 7.renderProps
如何向组件内部动态传入带内容的结构(标签)?
- Vue中:
	- 使用slot技术，也就是通过组件标签体传入结构\<A>\<B/>\</A>
- React中:
	- 使用children props:通过组件标签体传入结构
	- 使用render props:通过组件标签属性传入结构，一般用render函数属性
- children props
	- \<A>
	\<B>XXXX\</B>
	\</A>
	- {this.props.children}
	- 问题:如果B组件需要A组件内的数据,childrenprops是做不到的
	![在这里插入图片描述](https://img-blog.csdnimg.cn/2021040115440999.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
	![在这里插入图片描述](https://img-blog.csdnimg.cn/2021040115453617.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
	![在这里插入图片描述](https://img-blog.csdnimg.cn/20210401154718921.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- renderprops
	- \<A render={(data) =>\<C data={data}>\</C>}>\</A>
	- A组件:this.props.render(内部state数据)}
	- C组件:读取A组件传入的数据显示{this.props.data}
	![在这里插入图片描述](https://img-blog.csdnimg.cn/20210401155212170.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
	![在这里插入图片描述](https://img-blog.csdnimg.cn/20210401155254960.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
### 8.ErrorBoundary
错误边界
- 理解:
	- 错误边界(Error boundary):用来捕获后代组件错误，将错误封锁在最小的单位中，不影响其他的组件展示，并在错误页面上渲染出备用页面
- 特点:
	- 只能捕获后代组件生命周期产生的错误，不能捕获自己组件产生的错误和其他组件在合成事件、定时器中产生的错误
- 使用方式:
- getDerivedStateFromError配合componentDidCatch

```javascript
//生命周期函数，一旦后台组件报错，就会触发
static getDerivedstateFromError (error) {
	conso1e.1og(error );
	//在render之前触发
	//返回新的state
	return {hasError : true,};
componentDidcatch(error,info) {
	//统计页面的错误。发送请求发送到后台去
	console.log(error , info);
}
```
- index.css

```css
.parent{
    width: 500px;
    background-color: orange;
    padding: 10px;
}
.child{
    width: 100%;
    background-color: skyblue;
    padding: 10px;
}

```

- index.jsx

```javascript
import React, {Component} from 'react';
import "./index.css"

class Parent extends Component {
  state = {
    hasError:''
  }
  //当Parent的子组件出现报错时会触发该函数的调用，并携带错误信息
  //错误边界只使用于生产环境，开发环境不适用
  static getDerivedStateFromError(error){
    return {hasError: error}
  }
  componentDidMount(error,info) {
    console.log(error, info);
  }
  render() {
    return (
        <div className="parent">
          <h3>我是Parent</h3>
          {this.state.hasError ? <h2>当前网络不稳定，请稍后再试</h2> :<Child/>}
        </div>
    );
  }
}
class Child extends Component{
  state = {
   // users: [
   //     {id:'001',name:"zhangsan",age:18},
   //     {id:'002',name:"lisi",age:19},
   //     {id:'003',name:"wangwu",age:20},
   //  ]
    //模拟出错
    users:'abc'
  }

  increment = ()=>{
    this.setState({count:this.state.count+1})
  }
  render(){
    return(
        <div className="child">
          <h3>我是Child组件</h3>
          {
            this.state.users.map((userObj)=>{
              return <h4 key={userObj.id}>{userObj.name}----{userObj.age}</h4>
            })
          }
        </div>
    )
  }
}
export default Parent;
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210401163518308.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210401163230575.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210401163325771.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210401163606953.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210401163726346.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 打包运行，当子组件出问题，不会影响父组件，并且会展示备用页面
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210401163944808.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

### 9.组件通信方式总结
- 组件间的关系:
	- 父子组件
	- 兄弟组件（非嵌套组件)
	- 祖孙组件(跨级组件)
- 几种通信方式:
	- props :
		- children props
		- render props
	- 消息订阅-发布:
		- pubs-sub、event等等
	- 集中式管理:
		- redux、dva等等
	- conText:
		- 生产者-消费者模式
- 比较好的搭配方式:
	- 父子组件:props
	- 兄弟组件:消息订阅-发布、集中式管理
	- 祖孙组件(跨级组件):消息订阅-发布、集中式管理、conText(开发用的少，封装插件用的多) 