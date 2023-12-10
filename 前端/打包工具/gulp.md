# 一、什么是gulp
### 1.了解gulp
- gulp是前端自动化打包构建工具，基于**流格式**的打包构建工具
	- 打包:把文件压缩,整合,移动,混淆
- 什么是流
	- 流文件：一种文件的传输方式，一段一段的文件传输
	- 流格式：从头到尾的过程，从源开始一步一步加工，每一个步骤需要依赖上一步的结果，最终给出一个完整的成品
- gulp的依赖环境（需要安装node.js）
	- 依赖于node环境进行开发
	- 底层封装的内容就是node的读写文件
### 2.安装gulp（全局安装）
- 官网：[https://www.gulpjs.com.cn/](https://www.gulpjs.com.cn/)
- npm命令安装：
	- npm install gulp -g（Window）
	- sudo npm install gulp -g （MAC）
	![在这里插入图片描述](https://img-blog.csdnimg.cn/20210316223423619.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- gulp的版本
	- gulp3：安装成功后检测的版本号：gulp 3.9.1
	- gulp4：安装成功后检测的版本号：gulp cli 2.3.0（当前版本）
- gulp的检测
	- 在命令行窗口输入：gulp --version
	![在这里插入图片描述](https://img-blog.csdnimg.cn/20210316223500135.png)
- gulp的卸载
	- npm uninstall gulp -g
- gulp全局工具安装
	- 提供一个启动gulp的环境
	- 可以在命令行中运行gulp xxx指令
# 二、准备使用gulp
1. 准备一个项目：要确定好目录结构，要分开源码和打包后的内容
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210316224657424.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
2. 准备gulpfile.js文件
	- gulpfile.js是gulp进行打包的依据
	- 每个项目都**必须**要有一个gulpfile.js文件
	- 在这个文件里进行这个项目的打包配置
	- gulp运行时会自动读取gulpfile.js的配置
	- 注意：直接写在根目录，与src同级
	![在这里插入图片描述](https://img-blog.csdnimg.cn/20210316225121461.png)
3. 在项目中再次安装gulp（局部安装）
	- gulp在项目中是以第三方模块的形式出现的
	- 提供配置打包流程的API的
	- 每个项目都要安装一次
- 全局依赖环境 gulp
	- 一台电脑安装一次，以后使用即可
	- 在命令行中提供gulp xxx的能力
	- 指令：npm install gulp -g
- 项目依赖第三方 gulp
	- 每个项目都要安装一次
	- 作为第三方模块，在导入后可以使用gulp.xxx() 方法
	- 指令：npm install gulp -D
- 初始化package.json（记录第三方依赖）
	- dependencies
		- 表示项目的运行依赖：比如jquery,swiper
		- 指项目运行需要用到的内容,将来上线以后也需要用到的内容
	- devDependencies
		- 表示项目的开发依赖：比如gulp
		- 指项目开发阶段需要用到的内容,将来上线以后不需要用到的
		![在这里插入图片描述](https://img-blog.csdnimg.cn/20210316230223242.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 安装gulp
	![在这里插入图片描述](https://img-blog.csdnimg.cn/20210316231703428.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)4. 再 gulpfile.js里面书写配置文件
	- 书写你该项目的打包流程
	- 书写完毕以后，按照打包流程去执行 gulp指令运行 gulpfile.js 文件
# 三、gulp常用的API
1. gulp.task()
	- 语法:gulp.task(任务名称，任务处理函数)
	- 作用:创建一个基于流的任务
	- 例子:
```javascript
gulp.task( 'htmlHandler' , function () {
	//找到 html 源文件，进行压缩，打包，放入指定目录
})
```

2. gulp.src()
	- 语法:gulp.src(路径信息)=>作用:找到源文件
	- 书写方式:
```javascript
gulp.src( './a/b.html')//找到指定一个文件
gulp.src( './a/*.html' )//到指定目录下，指定后缀的文件
gulp.src( './a/**')//找到指令目录下的所有文件
gulp.src( './a/**/*')//找到a目录下所有子目录里面的所有文件
gulp.src( './a/**/*.html')//找到a目录下所有子目录里面的所有.html 文件
```
3. gulp.dest()
	- 语法:gulp.dest(路径信息）
	- 作用:把一个内容放入指定目录内
	- 例子:
```javascript
gulp.dest( './ abc') //把接收到的内容放到abc目录下
```
4. gulp.watch()
	- 语法:gulp.watch(路径信息，任务名称)
	- 作用:监控指定目录下的文件，一旦发生变化，从新执行后面的任务
	- 例子:
```javascript
gulp.watch( './src/pages/*.html' , htmlHandler)
//当指定目录下的 html 文件发生变化，就会执行htmlHandler这个任务

```
5. gulp.series()
	- 语法: gulp.series(任务1，任务2，任务3，...)
	- 作用:逐个执行多个任务，前一个任务结束,第二个任务开始
6. gulp.parallel()
	- 语法:gulp.parallel(任务1，任务2，征务3，...)
	- 作用:并行开始多个任务
7. pipe()
	- 管道函数
	- 所有的 gulp API 都是基于流
	- 接收当前流，进入下一个流过程的管道函数
	- 例子:
```javascript
gulp.src().pipe(压缩任务).pipe(转码).pipe(gulp.dest( 'abc'))
```
# 四、使用gulp
- gulp常用插件
	- gulp的各种插件就是用来执行各种各样的压缩混淆转码任务的
	- 所有插件的安装都是在项目的根目录下安装，执行安装指令
### 1.打包一个css文件
gulp打包css需要用到的插件
- gulp-cssmin（压缩css文件）
	- 下载:npm i gulp-cssmin -D
	- 导入: const cssmin = require( 'gulp-cssmin')
	- 导入以后得到一个处理流文件的函数
	- 直接再管道函数里面执行就好了
	![在这里插入图片描述](https://img-blog.csdnimg.cn/202103162356327.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- gulp-autoprefixer（自动添加前缀）
	- 下载:npm i gulp-autoprefixer -D
	- 导入:const autoPrefixer = require( 'gulp-autoprefixer')
	- 导入以后得到一个处理流文件的函数
	- 直接再管道函数里面使用，需要传递参数
		- {browsers：[要兼容的浏览器]}
		![在这里插入图片描述](https://img-blog.csdnimg.cn/20210317200754689.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

打包css任务
- gulpfile.js(gulp3的写法)

```javascript
//因为gulp是依赖于 node环境运行的
// 将来的运行也是以 node为基础运行的
//书写 gulpfile.js 文件就按照node 的模块化语法进行书写(CommonJS)

const gulp = require("gulp");

//导入gulp-cssmin
const cssmin = require("gulp-cssmin")
//导入gulp-autoprefixer
const autoPreFixer = require("gulp-autoprefixer")
//创建一个打包css的任务
//gulp3的写法
gulp.task('cssHandler',function () {
  return gulp
      .src("./src/css/*.css")//找到源文件
      .pipe(autoPreFixer({browsers:["last 2 version"]}))//给css增加前缀，这里的参数，推荐写在package.json中，这里演示是指出这个提醒
      .pipe(cssmin())//压缩文件
      .pipe(gulp.dest("./dist/css/"))//把压缩好的内容放在对应的文件夹中

})
/*
  执行一个gulp配置好的任务
  直接打开命令行,切换到 gulpfile.js所在的目录
  执行指令 gulp 任务名称
*/
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/202103172035037.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210317203552659.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 注意，图中的package.json中的browsers应该改为browserslist
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210317204031368.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 这里就是有关browserslist的选择
- [  https://github.com/browserslist/browserslist#readme
](https://github.com/browserslist/browserslist#readme)
![在这里插入图片描述](https://img-blog.csdnimg.cn/2021031720545387.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

- gulpfile.js(gulp4的写法)

```javascript
//因为gulp是依赖于 node环境运行的
// 将来的运行也是以 node为基础运行的
//书写 gulpfile.js 文件就按照node 的模块化语法进行书写(CommonJS)

const gulp = require("gulp");

//导入gulp-cssmi
const cssmin = require("gulp-cssmin")
//创建一个打包css的任务
//gulp3的写法
// gulp.task('cssHandler',function () {
//   return gulp
//       .src("./src/css/*.css")//找到源文件
//		 .pipe(autoPreFixer())//给css增加前缀
//       .pipe(cssmin())//压缩文件
//       .pipe(gulp.dest("./dist/css/"))//把压缩好的内容放在对应的文件夹中
//
// })

//gulp4的写法
const cssHandler = function () {
  return gulp
      .src("./src/css/*.css")//找到源文件
      .pipe(autoPreFixer())//给css增加前缀
      .pipe(cssmin())//压缩文件
      .pipe(gulp.dest("./dist/css/"))//把压缩好的内容放在对应的文件夹中

}
//导出这个任务
module.exports.cssHandler = cssHandler;
/*
  执行一个gulp配置好的任务
  直接打开命令行,切换到 gulpfile.js所在的目录
  执行指令 gulp 任务名称
*/
```
- index.css
```css
div{
    transition: all 1s linear;
}
div{
    width: 100px;
    height: 100px;
    background-color: red;
}
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210317205702306.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
### 2.打包一个sass文件
gulp打包sass需要用到的插件
- gulp-sass
	- 下载:npm i gulp-sass -D
	- 很容易报错,基本下载不成功
	- 为什么:因为gulp-sass 依赖另一个第三方包，node-sass
		-  node-sass 很难下载成功，以前都是在一个地方下载，后来 node-sass单独有一个下载地址，如果不进行单独的node-sass下载地址配置，就很容易失败
	- 解决:给node-sass单独配置一个下载地址，下载node-sass从这个单独的地址下载，下载其他的东西还是统一地址
	- node-sass单独下载地址：
		- 单独配置一个下载地址，只有下载node-sass的时候会使用
		- set SASS_BINARY_SITE=https:/ /npm.taobao.org/mirrors/node-sass/
	- 过程
		- set SASS_BINARY_SITE=https://npm.taobao.org/mirrors/node-sass![在这里插入图片描述](https://img-blog.csdnimg.cn/20210317230816560.png)
		-  npm i node-sass -D
		![在这里插入图片描述](https://img-blog.csdnimg.cn/2021031723085171.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
		-  npm i gulp-sass -D
		![在这里插入图片描述](https://img-blog.csdnimg.cn/2021031723091759.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
	- 导入:const sass = require( 'gulp-sass ' )
		- 导入以后得到一个可以处理流文件的函数，直接再管道函数里面执行就可以了

 sass 转换的问题
- 有一个工具叫sass
- 可以转换和编译sass 文件为css 文件
-  gulp 里面配置一个任务，也可以转换sass 文件
- 写项目的时候使用哪一个?
	- 如果需要使用gulp来配置项目,那么不需要使用sass工具
	- 如果不需要使用gulp 来配置项目,那么就需要使用sass 工具
- 写项目不要多个工具(完成一个工作的多个工具斯)混着使用
	- 使用sass 工具转换sass 文件为 css
	- 使用gulp对 css , js , html等文件进行打包
	- 用了 gulp 就不要再用sass

sass 转码的使用
- 有一种方式叫做导入 sass 文件
- 如果需要用到导入，可以把变量和混合器定义在.sass后缀的文件中
- gulp配置的只会转码.scss 文件
- 设置的变量和混合器文件不会被转码
 - 但是，当转码.scss 文件的时候，会自动读取.sass文件里面的变量
 - 会将其解析以后使用

打包sass任务
- gulpfile.js

```javascript
//导入gulp
const gulp = require("gulp");
//1.1打包css文件
//导入gulp-cssmin
const cssmin = require("gulp-cssmin");
//导入gulp-autoprefixer
const autoprefixer = require("gulp-autoprefixer");
//1.2打包sass文件
//导入gulp-sass
const sass = require("gulp-sass");

//2.1创建打包css任务
const cssHandler = function () {
  return gulp
      .src("./src/css/*.css")//找到源文件
      .pipe(autoprefixer())//自动添加前缀
      .pipe(cssmin())//压缩css
      .pipe(gulp.dest("./dist/css/"))//压缩到指定文件夹
}
//2.2创建打包sass任务
const sassHandler = function() {
  return gulp
      .src("./src/sass/*.sass")
      .pipe(sass())
      .pipe(autoprefixer())
      .pipe(cssmin())
      .pipe(gulp.dest("./dist/sass/"))
}

//3.1导出打包css任务
module.exports.cssHandler = cssHandler;
//3.2导出打包sass任务
module.exports.sassHandler = sassHandler;
```
- variable.scss

```css
$c:red,
```

- index.scss

```css
@import "variable";
div {
  width: 100px;
  height: 100px;
  color: $c;

  p {
    width: 100px;
    height: 100px;
  }
}
//单行注释
/*多行注释*/
/*!强力注释*/
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210317234736995.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210317234820304.png)
### 3.打包一个js文件
gulp打包js需要用到的插件
- gulp-uglify
	- 把JS 文件压缩的插件
	- 下载:npm i -D gulp-uglify
	- 导入:const uglify = require( 'gulp-uglify ')
	- 导入以后得到一个可以处理流文件的函数
	- 直接再管道函数中使用就可以了

打包js任务
- gulpfile.js

```javascript
//导入gulp
const gulp = require("gulp");
//1.1打包css文件
//导入gulp-cssmin
const cssmin = require("gulp-cssmin");
//导入gulp-autoprefixer
const autoprefixer = require("gulp-autoprefixer");
//1.2打包sass文件
//导入gulp-sass
const sass = require("gulp-sass");
//1.3打包js文件
//导入gulp-uglify
const uglify = require("gulp-uglify")

//2.1创建打包css任务
const cssHandler = function () {
  return gulp
      .src("./src/css/*.css")//找到源文件
      .pipe(autoprefixer())//自动添加前缀
      .pipe(cssmin())//压缩css
      .pipe(gulp.dest("./dist/css/"))//压缩到指定文件夹
}
//2.2创建打包sass任务
const sassHandler = function() {
  return gulp
      .src("./src/sass/*.scss")
      .pipe(sass())   //讲scss转换成css
      .pipe(autoprefixer())
      .pipe(cssmin())
      .pipe(gulp.dest("./dist/sass/"))
}
//2.3创建打包js任务
const jsHandler = function(){
  return gulp
      .src("./src/js/*.js")
      .pipe(uglify())
      .pipe(gulp.dest("./dist/js/"))
}

//3.1导出打包css任务
module.exports.cssHandler = cssHandler;
//3.2导出打包sass任务
module.exports.sassHandler = sassHandler;
//3.3导出打包js任务
module.exports.jsHandler = jsHandler;
```
- index.js

```javascript
for (let i = 0;i<10;i++){
  setTimeout(()=>{
    console.log(i);
  },1000)
}

console.log('hello world');

if(true){
  const num = 10;
  console.log(num);
}
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210318000342484.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 注意：gulp-uglify一些较老的版本，js中有写ES6语法会报错
- 目前我安装的版本支持了ES6语法的压缩了
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210318001809276.png)
- 这时候需要安装下面这个插件
- gulp-babel
	- 专门进行ES6 转ES5的插件
	-  gulp-babel 的版本
		- gulp-babel@7:大部分使用在 gulp@3里面
		- gulp-babel@8:大部分使用在 gulp@4里面
	- 下载:
		- gulp-babel需要依赖另外两个包，我们要一起下载
		- 另外两个包:@babel/core @babel/preset-env
		- npm i gulp-babel -D
		- npm i @babel/corel -D
		- npm i @babel/preset-env -D
	- 导入:
		- 只要导入一个包就够了，他会自动导入另外两个包
		-  const babel = require( 'gulp-babel')
		- 导入以后得到一个可以处理流文件的函数
		- 直接再管道函数内部使用,需要传递参数
- gulpfile.js文件需要改成这样

```javascript
const babel = require("gulp-babel")
const jsHandler = function ({return gulp
.src( './src/js/*.js ')// 1。找到js文件
.pipe(babel({
	// babeL@7版本, presets: [ 'es2015']
	presets: [ '@babel/env']
}))//将ES6语法转换成ES5
.pipe(uglify())
.pipe(gulp.dest( './dist/js/'))

```
### 4.打包一个html文件
gulp打包html需要用到的插件
-  gulp-htmlmin
	- 下载: npm i -D gulp-htmlmin
	- 导入:const htmlmin = require( 'gulp-htmlmin ')
	- 导入以后得到一个可以处理流文件的函数
	- 直接在管道函数里面调用,需要传递参数

打包html任务
- gulpfile.js

```javascript
//导入gulp
const gulp = require("gulp");
//1.1打包css文件
//导入gulp-cssmin
const cssmin = require("gulp-cssmin");
//导入gulp-autoprefixer
const autoprefixer = require("gulp-autoprefixer");
//1.2打包sass文件
//导入gulp-sass
const sass = require("gulp-sass");
//1.3打包js文件
//导入gulp-uglify
const uglify = require("gulp-uglify");
//1.4打包html文件
//导入gulp-htmlmin
const htmlmin = require("gulp-htmlmin");


//2.1创建打包css任务
const cssHandler = function () {
  return gulp
      .src("./src/css/*.css")//找到源文件
      .pipe(autoprefixer())//自动添加前缀
      .pipe(cssmin())//压缩css
      .pipe(gulp.dest("./dist/css/"))//压缩到指定文件夹
}
//2.2创建打包sass任务
const sassHandler = function() {
  return gulp
      .src("./src/sass/*.scss")
      .pipe(sass())   //讲scss转换成css
      .pipe(autoprefixer())
      .pipe(cssmin())
      .pipe(gulp.dest("./dist/sass/"))
}
//2.3创建打包js任务
const jsHandler = function(){
  return gulp
      .src("./src/js/*.js")
      .pipe(uglify())
      .pipe(gulp.dest("./dist/js/"))
}
//2.4创建打包html任务
const htmlHandler = function(){
  return gulp
      .src("./src/html/*.html")
      .pipe(htmlmin({//通过配置的参数进行压缩
        collapseWhitespace: true,//表示移出空格
        removeEmptyAttributes: true,//表示移出空的属性(仅限于原生属性)
        collapseBooleanAttributes: true,//移出checked类似的布尔值属性
        removeAttributeQuotes: true,//移出属性上的双引号
        minifyCSS: true,//压缩内嵌式 css 代码(只能基本压缩，不能自动添加前缀)
        minifyJS: true,//压缩内嵌式JS 代码(只能基本压缩，不能进行转码)
        removeStyleLinkTypeAttributes: true,//移出 style 和link标签上的
        removeScriptTypeAttributes: true,//移出 script标签上默认的 type 属性
}))
      .pipe(gulp.dest("./dist/html/"))
}


//3.1导出打包css任务
module.exports.cssHandler = cssHandler;
//3.2导出打包sass任务
module.exports.sassHandler = sassHandler;
//3.3导出打包js任务
module.exports.jsHandler = jsHandler;
//3.4导出打包html任务
module.exports.htmlHandler = htmlHandler;
```
- index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>index</title>
  <style type="text/css">
    div{
      width: 100px;
      height: 100px;
    }
  </style>
</head>
<body>
  <h1 class="box box1">首页</h1>
  <input type="checkbox" checked="checked">

  <script type="text/javascript">
    console.log("hello,world");
  </script>
</body>
</html>
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210318102331673.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 压缩后
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210318110153423.png)
### 5.打包其他文件（图片、视频、音频、字体等）
- 这类文件一般不进行压缩打包，直接将其移动到打包、
- gulpfile.js

```javascript
//导入gulp
const gulp = require("gulp");
//1.1打包css文件
//导入gulp-cssmin
const cssmin = require("gulp-cssmin");
//导入gulp-autoprefixer
const autoprefixer = require("gulp-autoprefixer");
//1.2打包sass文件
//导入gulp-sass
const sass = require("gulp-sass");
//1.3打包js文件
//导入gulp-uglify
const uglify = require("gulp-uglify");
//1.4打包html文件
//导入gulp-htmlmin
const htmlmin = require("gulp-htmlmin");



//2.1创建打包css任务
const cssHandler = function () {
  return gulp
      .src("./src/css/*.css")//找到源文件
      .pipe(autoprefixer())//自动添加前缀
      .pipe(cssmin())//压缩css
      .pipe(gulp.dest("./dist/css/"))//压缩到指定文件夹
}
//2.2创建打包sass任务
const sassHandler = function() {
  return gulp
      .src("./src/sass/*.scss")
      .pipe(sass())   //讲scss转换成css
      .pipe(autoprefixer())
      .pipe(cssmin())
      .pipe(gulp.dest("./dist/sass/"))
}
//2.3创建打包js任务
const jsHandler = function(){
  return gulp
      .src("./src/js/*.js")
      .pipe(uglify())
      .pipe(gulp.dest("./dist/js/"))
}
//2.4创建打包html任务
const htmlHandler = function(){
  return gulp
      .src("./src/html/*.html")
      .pipe(htmlmin({//通过配置的参数进行压缩
        collapseWhitespace: true,//表示移出空格
        removeEmptyAttributes: true,//表示移出空的属性(仅限于原生属性)
        collapseBooleanAttributes: true,//移出checked类似的布尔值属性
        removeAttributeQuotes: true,//移出属性上的双引号
        minifyCSS: true,//压缩内嵌式 css 代码(只能基本压缩，不能自动添加前缀)
        minifyJS: true,//压缩内嵌式JS 代码(只能基本压缩，不能进行转码)
        removeStyleLinkTypeAttributes: true,//移出 style 和link标签上的
        removeScriptTypeAttributes: true,//移出 script标签上默认的 type 属性
}))
      .pipe(gulp.dest("./dist/html/"))
}
//2.5创建打包image任务
const imageHandler = function(){
  return gulp
      .src("./src/image/**")
      .pipe(gulp.dest("./dist/image/"))
}
//2.6创建打包videos任务
const videosHandler = function(){
  return gulp
      .src("./src/videos/**")
      .pipe(gulp.dest("./dist/videos/"))
}
//2.7创建打包audios任务
const audiosHandler = function(){
  return gulp
      .src("./src/audios/**")
      .pipe(gulp.dest("./dist/audios/"))
}
//2.8创建打包fonts任务
const fontsHandler = function(){
  return gulp
      .src("./src/fonts/**")
      .pipe(gulp.dest("./dist/fonts/"))
}
//2.9创建打包第三方任务
const libHandler = function(){
  return gulp
      .src("./src/libs/**")
      .pipe(gulp.dest("./dist/libs/"))
}

//3.1导出打包css任务
module.exports.cssHandler = cssHandler;
//3.2导出打包sass任务
module.exports.sassHandler = sassHandler;
//3.3导出打包js任务
module.exports.jsHandler = jsHandler;
//3.4导出打包html任务
module.exports.htmlHandler = htmlHandler;
//3.5导出打包image
module.exports.imageHandler = imageHandler;
//3.6导出打包videos
module.exports.videosHandler = videosHandler;
//3.7导出打包audios
module.exports.audiosHandler = audiosHandler;
//3.8导出打包fonts
module.exports.fontsHandler = fontsHandler;
//3.9导出第三方文件
module.exports.libHandler = libHandler;
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210318113506488.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
### 6.创建默认任务
- 要是这些任务都要一个一个去执行，那太麻烦了，需要一个默认的任务将其一起执行
- gulpfile.js

```javascript
//导入gulp
const gulp = require("gulp");
//1.1打包css文件
//导入gulp-cssmin
const cssmin = require("gulp-cssmin");
//导入gulp-autoprefixer
const autoprefixer = require("gulp-autoprefixer");
//1.2打包sass文件
//导入gulp-sass
const sass = require("gulp-sass");
//1.3打包js文件
//导入gulp-uglify
const uglify = require("gulp-uglify");
//1.4打包html文件
//导入gulp-htmlmin
const htmlmin = require("gulp-htmlmin");



//2.1创建打包css任务
const cssHandler = function () {
  return gulp
      .src("./src/css/*.css")//找到源文件
      .pipe(autoprefixer())//自动添加前缀
      .pipe(cssmin())//压缩css
      .pipe(gulp.dest("./dist/css/"))//压缩到指定文件夹
}
//2.2创建打包sass任务
const sassHandler = function() {
  return gulp
      .src("./src/sass/*.scss")
      .pipe(sass())   //讲scss转换成css
      .pipe(autoprefixer())
      .pipe(cssmin())
      .pipe(gulp.dest("./dist/sass/"))
}
//2.3创建打包js任务
const jsHandler = function(){
  return gulp
      .src("./src/js/*.js")
      .pipe(uglify())
      .pipe(gulp.dest("./dist/js/"))
}
//2.4创建打包html任务
const htmlHandler = function(){
  return gulp
      .src("./src/html/*.html")
      .pipe(htmlmin({//通过配置的参数进行压缩
        collapseWhitespace: true,//表示移出空格
        removeEmptyAttributes: true,//表示移出空的属性(仅限于原生属性)
        collapseBooleanAttributes: true,//移出checked类似的布尔值属性
        removeAttributeQuotes: true,//移出属性上的双引号
        minifyCSS: true,//压缩内嵌式 css 代码(只能基本压缩，不能自动添加前缀)
        minifyJS: true,//压缩内嵌式JS 代码(只能基本压缩，不能进行转码)
        removeStyleLinkTypeAttributes: true,//移出 style 和link标签上的
        removeScriptTypeAttributes: true,//移出 script标签上默认的 type 属性
}))
      .pipe(gulp.dest("./dist/html/"))
}
//2.5创建打包image任务
const imageHandler = function(){
  return gulp
      .src("./src/image/**")
      .pipe(gulp.dest("./dist/image/"))
}
//2.6创建打包videos任务
const videosHandler = function(){
  return gulp
      .src("./src/videos/**")
      .pipe(gulp.dest("./dist/videos/"))
}
//2.7创建打包audios任务
const audiosHandler = function(){
  return gulp
      .src("./src/audios/**")
      .pipe(gulp.dest("./dist/audios/"))
}
//2.8创建打包fonts任务
const fontsHandler = function(){
  return gulp
      .src("./src/fonts/**")
      .pipe(gulp.dest("./dist/fonts/"))
}
//2.9创建打包第三方任务
const libHandler = function(){
  return gulp
      .src("./src/libs/**")
      .pipe(gulp.dest("./dist/libs/"))
}

//3.1导出打包css任务
module.exports.cssHandler = cssHandler;
//3.2导出打包sass任务
module.exports.sassHandler = sassHandler;
//3.3导出打包js任务
module.exports.jsHandler = jsHandler;
//3.4导出打包html任务
module.exports.htmlHandler = htmlHandler;
//3.5导出打包image
module.exports.imageHandler = imageHandler;
//3.6导出打包videos
module.exports.videosHandler = videosHandler;
//3.7导出打包audios
module.exports.audiosHandler = audiosHandler;
//3.8导出打包fonts
module.exports.fontsHandler = fontsHandler;
//3.9导出第三方文件
module.exports.libHandler = libHandler;

//3.10配置一个默认任务
//默认任务的作用就是把所有的任务一起执行了
//要么使用gulp.series()，要么使用gulp.paraLleL()
//这两个方法的返回值是一个函数，返回值可以直接被当作任务函数使用使用task 的方式创建一个default任务
//方式1:
//guLp.task( 'default', () =>{})
//方式2:
//module.exports.default = () =>{}

/*
默认任务为什么一定要叫做default
因为使用 gulp 指令的时候,应该是 gulp 任务名称
当有一个叫做 default的任务的时候,可以直接执行指令  gulp
会自动去指定你 gulpfile.js 文件中的 default 任务
 */

module.exports.default = gulp.parallel(cssHandler,sassHandler,jsHandler,
    htmlHandler,imageHandler,videosHandler,audiosHandler,fontsHandler,libHandler)
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210318115759746.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210318115922924.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
### 7.创建一个删除任务
- 在执行gulp任务的时候，不会进行文件夹清理，都是按照当前的src目录，和配置的内容进行打包，放到指定的目录,如果这个目录已经存在，那么直接放进去，如果这个目录不存在，就创建一个目录再放进去
- 当第二次修改名称以后打包
	- 本身dist/css 里面就有一个index.css的文件
	- 又打包了一个 abcd.css 的文件，发现dist/css目录存在，就直接放进去
	- 所以就会出现两个文件同时存在
- 需要的结果
	- 只有一个文件
	- 需要直接删除 dist 文件夹
	- 什么时候删除?每次打包之前删除dist 文件夹，打包完毕会自动创建一个

需要用到的插件
- del
	- 下载:npm i -D del
	- 作用:删除文件目录
	- 导入:const del = require( 'del')
	- 导入以后得到一个函数,直接使用传递参数就可以了
	![在这里插入图片描述](https://img-blog.csdnimg.cn/20210318120438604.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- gulpfile.js

```javascript
//导入gulp
const gulp = require("gulp");
//1.1打包css文件
//导入gulp-cssmin
const cssmin = require("gulp-cssmin");
//导入gulp-autoprefixer
const autoprefixer = require("gulp-autoprefixer");
//1.2打包sass文件
//导入gulp-sass
const sass = require("gulp-sass");
//1.3打包js文件
//导入gulp-uglify
const uglify = require("gulp-uglify");
//1.4打包html文件
//导入gulp-htmlmin
const htmlmin = require("gulp-htmlmin");

//导入del
const del = require("del");


//2.1创建打包css任务
const cssHandler = function () {
  return gulp
      .src("./src/css/*.css")//找到源文件
      .pipe(autoprefixer())//自动添加前缀
      .pipe(cssmin())//压缩css
      .pipe(gulp.dest("./dist/css/"))//压缩到指定文件夹
}
//2.2创建打包sass任务
const sassHandler = function() {
  return gulp
      .src("./src/sass/*.scss")
      .pipe(sass())   //讲scss转换成css
      .pipe(autoprefixer())
      .pipe(cssmin())
      .pipe(gulp.dest("./dist/sass/"))
}
//2.3创建打包js任务
const jsHandler = function(){
  return gulp
      .src("./src/js/*.js")
      .pipe(uglify())
      .pipe(gulp.dest("./dist/js/"))
}
//2.4创建打包html任务
const htmlHandler = function(){
  return gulp
      .src("./src/html/*.html")
      .pipe(htmlmin({//通过配置的参数进行压缩
        collapseWhitespace: true,//表示移出空格
        removeEmptyAttributes: true,//表示移出空的属性(仅限于原生属性)
        collapseBooleanAttributes: true,//移出checked类似的布尔值属性
        removeAttributeQuotes: true,//移出属性上的双引号
        minifyCSS: true,//压缩内嵌式 css 代码(只能基本压缩，不能自动添加前缀)
        minifyJS: true,//压缩内嵌式JS 代码(只能基本压缩，不能进行转码)
        removeStyleLinkTypeAttributes: true,//移出 style 和link标签上的
        removeScriptTypeAttributes: true,//移出 script标签上默认的 type 属性
}))
      .pipe(gulp.dest("./dist/html/"))
}
//2.5创建打包image任务
const imageHandler = function(){
  return gulp
      .src("./src/image/**")
      .pipe(gulp.dest("./dist/image/"))
}
//2.6创建打包videos任务
const videosHandler = function(){
  return gulp
      .src("./src/videos/**")
      .pipe(gulp.dest("./dist/videos/"))
}
//2.7创建打包audios任务
const audiosHandler = function(){
  return gulp
      .src("./src/audios/**")
      .pipe(gulp.dest("./dist/audios/"))
}
//2.8创建打包fonts任务
const fontsHandler = function(){
  return gulp
      .src("./src/fonts/**")
      .pipe(gulp.dest("./dist/fonts/"))
}
//2.9创建打包第三方任务
const libHandler = function(){
  return gulp
      .src("./src/libs/**")
      .pipe(gulp.dest("./dist/libs/"))
}
//2.10创建删除dist文件夹任务
const delHandler = function(){
  // del直接执行就可以了，不需要流
  //参数以数组的形式传递你要删除的文件夹
  return del(["./dist"])
}

//3.1导出打包css任务
module.exports.cssHandler = cssHandler;
//3.2导出打包sass任务
module.exports.sassHandler = sassHandler;
//3.3导出打包js任务
module.exports.jsHandler = jsHandler;
//3.4导出打包html任务
module.exports.htmlHandler = htmlHandler;
//3.5导出打包image
module.exports.imageHandler = imageHandler;
//3.6导出打包videos
module.exports.videosHandler = videosHandler;
//3.7导出打包audios
module.exports.audiosHandler = audiosHandler;
//3.8导出打包fonts
module.exports.fontsHandler = fontsHandler;
//3.9导出第三方文件
module.exports.libHandler = libHandler;

module.exports.delHandler = delHandler;
//3.10配置一个默认任务
//默认任务的作用就是把所有的任务一起执行了
//要么使用gulp.series()，要么使用gulp.paraLleL()
//这两个方法的返回值是一个函数，返回值可以直接被当作任务函数使用使用task 的方式创建一个default任务
//方式1:
//guLp.task( 'default', () =>{})
//方式2:
//module.exports.default = () =>{}

/*
默认任务为什么一定要叫做default
因为使用 gulp 指令的时候,应该是 gulp 任务名称
当有一个叫做 default的任务的时候,可以直接执行指令  gulp
会自动去指定你 gulpfile.js 文件中的 default 任务
 */

module.exports.default =gulp.series(
    delHandler,
    gulp.parallel(cssHandler,sassHandler,jsHandler,
        htmlHandler,imageHandler,videosHandler,audiosHandler,fontsHandler,libHandler)
)
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210318121253439.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210318121404748.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210318121447668.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
# 五、gulp与服务器
### 1.gulp启动服务
- 利用gulp启动一个服务器
	-  gulp是基于 node环境的工具
	- gulp 可以启动一个基于node的服务器
- 启动服务器，用哪个目录当作服务器根目录？
	- 应该使用dist目录，dist是结果目录
	- 如果使用src目录当作根目录,sass 文件无法导入
	- 启动服务器的时候,启动dist目录里面的对应的html 文件即可
- sass 文件怎么使用
	- 将来 src/html/login.html 会把打包传递到dist/pages/login.html
	- 将来 src/sass/login.css 会把打包传递到dist/sass/login.css
	- 在html中书写 link href=" ../sass/login.css"，引入的应该是dist目录

 gulp启动服务需要用到的插件
- gulp-webserver
	- 作用:启动一个基于 node 书写的服务器
	- 下载:npm i -D gulp-webserver
	- 导入:const webserver = require( ' gulp-webserver ' )
	- 导入以后得到一个处理流文件的函数
	- 在管道函数内调用就可以了,需要传递参数
	![在这里插入图片描述](https://img-blog.csdnimg.cn/20210318141544453.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

gulp启动服务
- gulpfile.js
```javascript
//导入gulp
const gulp = require("gulp");
//1.1打包css文件
//导入gulp-cssmin
const cssmin = require("gulp-cssmin");
//导入gulp-autoprefixer
const autoprefixer = require("gulp-autoprefixer");
//1.2打包sass文件
//导入gulp-sass
const sass = require("gulp-sass");
//1.3打包js文件
//导入gulp-uglify
const uglify = require("gulp-uglify");
//1.4打包html文件
//导入gulp-htmlmin
const htmlmin = require("gulp-htmlmin");

//导入del
const del = require("del");
//导入gulp-webserver
const webserver = require("gulp-webserver");

//2.1创建打包css任务
const cssHandler = function () {
  return gulp
      .src("./src/css/*.css")//找到源文件
      .pipe(autoprefixer())//自动添加前缀
      .pipe(cssmin())//压缩css
      .pipe(gulp.dest("./dist/css/"))//压缩到指定文件夹
}
//2.2创建打包sass任务
const sassHandler = function() {
  return gulp
      .src("./src/sass/*.scss")
      .pipe(sass())   //讲scss转换成css
      .pipe(autoprefixer())
      .pipe(cssmin())
      .pipe(gulp.dest("./dist/sass/"))
}
//2.3创建打包js任务
const jsHandler = function(){
  return gulp
      .src("./src/js/*.js")
      .pipe(uglify())
      .pipe(gulp.dest("./dist/js/"))
}
//2.4创建打包html任务
const htmlHandler = function(){
  return gulp
      .src("./src/html/*.html")
      .pipe(htmlmin({//通过配置的参数进行压缩
        collapseWhitespace: true,//表示移出空格
        removeEmptyAttributes: true,//表示移出空的属性(仅限于原生属性)
        collapseBooleanAttributes: true,//移出checked类似的布尔值属性
        removeAttributeQuotes: true,//移出属性上的双引号
        minifyCSS: true,//压缩内嵌式 css 代码(只能基本压缩，不能自动添加前缀)
        minifyJS: true,//压缩内嵌式JS 代码(只能基本压缩，不能进行转码)
        removeStyleLinkTypeAttributes: true,//移出 style 和link标签上的
        removeScriptTypeAttributes: true,//移出 script标签上默认的 type 属性
}))
      .pipe(gulp.dest("./dist/html/"))
}
//2.5创建打包image任务
const imageHandler = function(){
  return gulp
      .src("./src/image/**")
      .pipe(gulp.dest("./dist/image/"))
}
//2.6创建打包videos任务
const videosHandler = function(){
  return gulp
      .src("./src/videos/**")
      .pipe(gulp.dest("./dist/videos/"))
}
//2.7创建打包audios任务
const audiosHandler = function(){
  return gulp
      .src("./src/audios/**")
      .pipe(gulp.dest("./dist/audios/"))
}
//2.8创建打包fonts任务
const fontsHandler = function(){
  return gulp
      .src("./src/fonts/**")
      .pipe(gulp.dest("./dist/fonts/"))
}
//2.9创建打包第三方任务
const libHandler = function(){
  return gulp
      .src("./src/libs/**")
      .pipe(gulp.dest("./dist/libs/"))
}
//2.10创建删除dist文件夹任务
const delHandler = function(){
  // del直接执行就可以了，不需要流
  //参数以数组的形式传递你要删除的文件夹
  return del(["./dist"])
}
//2.11创建gulp启动服务任务
const webHandler = function(){
  return gulp
      .src("./dist")
      .pipe(webserver({
        host: 'localhost',//域名(可以配置自定义域名)
        port: '8080',//端口号
        livereload: true,//当文件修改的时候。是否自动刷新页面
        open: './html/login.html',//默认打开哪一个文件(从 dist目录以后的目录开始书写)

}))

}


//3.1导出打包css任务
module.exports.cssHandler = cssHandler;
//3.2导出打包sass任务
module.exports.sassHandler = sassHandler;
//3.3导出打包js任务
module.exports.jsHandler = jsHandler;
//3.4导出打包html任务
module.exports.htmlHandler = htmlHandler;
//3.5导出打包image
module.exports.imageHandler = imageHandler;
//3.6导出打包videos
module.exports.videosHandler = videosHandler;
//3.7导出打包audios
module.exports.audiosHandler = audiosHandler;
//3.8导出打包fonts
module.exports.fontsHandler = fontsHandler;
//3.9导出第三方文件
module.exports.libHandler = libHandler;

module.exports.delHandler = delHandler;

module.exports.webHandler = webHandler;
//3.10配置一个默认任务
//默认任务的作用就是把所有的任务一起执行了
//要么使用gulp.series()，要么使用gulp.parallel()
//这两个方法的返回值是一个函数，返回值可以直接被当作任务函数使用使用task 的方式创建一个default任务
//方式1:
//guLp.task( 'default', () =>{})
//方式2:
//module.exports.default = () =>{}

/*
默认任务为什么一定要叫做default
因为使用 gulp 指令的时候,应该是 gulp 任务名称
当有一个叫做 default的任务的时候,可以直接执行指令  gulp
会自动去指定你 gulpfile.js 文件中的 default 任务
 */

module.exports.default =gulp.series(
    delHandler,
    gulp.parallel(cssHandler,sassHandler,jsHandler,
        htmlHandler,imageHandler,videosHandler,audiosHandler,fontsHandler,libHandler),
    webHandler
)


```
- login.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <link rel="stylesheet" href="../sass/login.css">
</head>
<body>
<h1>hello world</h1>
</body>
</html>
```
- login.scss

```css
h1{
  color: red;
}
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210318144329667.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210318144822448.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 启动服务配置自定义域名
	- webserver位置的 host书写一个自己定义好的域名
	- 找到电脑中的 hosts 文件
		- C:/windows/system32/dirvers/etc/hosts
		- 注意:找到那个没有后缀的 hosts 文件-
		- 添加一行内容：127.0.0.1 自己定义的域名

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210318144508126.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
### 2.添加监控文件变化任务
- gulpfile.js

```javascript
//导入gulp
const gulp = require("gulp");
//1.1打包css文件
//导入gulp-cssmin
const cssmin = require("gulp-cssmin");
//导入gulp-autoprefixer
const autoprefixer = require("gulp-autoprefixer");
//1.2打包sass文件
//导入gulp-sass
const sass = require("gulp-sass");
//1.3打包js文件
//导入gulp-uglify
const uglify = require("gulp-uglify");
//1.4打包html文件
//导入gulp-htmlmin
const htmlmin = require("gulp-htmlmin");

//导入del
const del = require("del");
//导入gulp-webserver
const webserver = require("gulp-webserver");

//2.1创建打包css任务
const cssHandler = function () {
  return gulp
      .src("./src/css/*.css")//找到源文件
      .pipe(autoprefixer())//自动添加前缀
      .pipe(cssmin())//压缩css
      .pipe(gulp.dest("./dist/css/"))//压缩到指定文件夹
}
//2.2创建打包sass任务
const sassHandler = function() {
  return gulp
      .src("./src/sass/*.scss")
      .pipe(sass())   //讲scss转换成css
      .pipe(autoprefixer())
      .pipe(cssmin())
      .pipe(gulp.dest("./dist/sass/"))
}
//2.3创建打包js任务
const jsHandler = function(){
  return gulp
      .src("./src/js/*.js")
      .pipe(uglify())
      .pipe(gulp.dest("./dist/js/"))
}
//2.4创建打包html任务
const htmlHandler = function(){
  return gulp
      .src("./src/html/*.html")
      .pipe(htmlmin({//通过配置的参数进行压缩
        collapseWhitespace: true,//表示移出空格
        removeEmptyAttributes: true,//表示移出空的属性(仅限于原生属性)
        collapseBooleanAttributes: true,//移出checked类似的布尔值属性
        removeAttributeQuotes: true,//移出属性上的双引号
        minifyCSS: true,//压缩内嵌式 css 代码(只能基本压缩，不能自动添加前缀)
        minifyJS: true,//压缩内嵌式JS 代码(只能基本压缩，不能进行转码)
        removeStyleLinkTypeAttributes: true,//移出 style 和link标签上的
        removeScriptTypeAttributes: true,//移出 script标签上默认的 type 属性
}))
      .pipe(gulp.dest("./dist/html/"))
}
//2.5创建打包image任务
const imageHandler = function(){
  return gulp
      .src("./src/image/**")
      .pipe(gulp.dest("./dist/image/"))
}
//2.6创建打包videos任务
const videosHandler = function(){
  return gulp
      .src("./src/videos/**")
      .pipe(gulp.dest("./dist/videos/"))
}
//2.7创建打包audios任务
const audiosHandler = function(){
  return gulp
      .src("./src/audios/**")
      .pipe(gulp.dest("./dist/audios/"))
}
//2.8创建打包fonts任务
const fontsHandler = function(){
  return gulp
      .src("./src/fonts/**")
      .pipe(gulp.dest("./dist/fonts/"))
}
//2.9创建打包第三方任务
const libHandler = function(){
  return gulp
      .src("./src/libs/**")
      .pipe(gulp.dest("./dist/libs/"))
}
//2.10创建删除dist文件夹任务
const delHandler = function(){
  // del直接执行就可以了，不需要流
  //参数以数组的形式传递你要删除的文件夹
  return del(["./dist"])
}
//2.11创建gulp启动服务任务
const webHandler = function(){
  return gulp
      .src("./dist")
      .pipe(webserver({
        host: 'localhost',//域名(可以配置自定义域名)
        port: '8080',//端口号
        livereload: true,//当文件修改的时候。是否自动刷新页面
        open: './html/login.html',//默认打开哪一个文件(从 dist目录以后的目录开始书写

}))
}
//2.12创建监控文件变化任务
const watchHandler = function(){
  gulp.watch("./src/sass/*.scss",sassHandler)
  gulp.watch("./src/css/*.css",cssHandler)
  gulp.watch("./src/js/*.js",jsHandler)
  gulp.watch("./src/html/*.html",htmlHandler)
}

//3.1导出打包css任务
module.exports.cssHandler = cssHandler;
//3.2导出打包sass任务
module.exports.sassHandler = sassHandler;
//3.3导出打包js任务
module.exports.jsHandler = jsHandler;
//3.4导出打包html任务
module.exports.htmlHandler = htmlHandler;
//3.5导出打包image
module.exports.imageHandler = imageHandler;
//3.6导出打包videos
module.exports.videosHandler = videosHandler;
//3.7导出打包audios
module.exports.audiosHandler = audiosHandler;
//3.8导出打包fonts
module.exports.fontsHandler = fontsHandler;
//3.9导出第三方文件
module.exports.libHandler = libHandler;

module.exports.delHandler = delHandler;

module.exports.webHandler = webHandler;
//3.10配置一个默认任务
//默认任务的作用就是把所有的任务一起执行了
//要么使用gulp.series()，要么使用gulp.parallel()
//这两个方法的返回值是一个函数，返回值可以直接被当作任务函数使用使用task 的方式创建一个default任务
//方式1:
//guLp.task( 'default', () =>{})
//方式2:
//module.exports.default = () =>{}

/*
默认任务为什么一定要叫做default
因为使用 gulp 指令的时候,应该是 gulp 任务名称
当有一个叫做 default的任务的时候,可以直接执行指令  gulp
会自动去指定你 gulpfile.js 文件中的 default 任务
 */

module.exports.default =gulp.series(
    delHandler,
    gulp.parallel(cssHandler,sassHandler,jsHandler,
        htmlHandler,imageHandler,videosHandler,audiosHandler,fontsHandler,libHandler),
    webHandler,
    watchHandler
)


```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210318145944555.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210318145744797.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 第一次页面效果
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210318150007751.png)
- 改动src下的login.scss文件后
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210318150121396.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 页面也发生变化
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210318150142809.png)
### 3.gulp配置代理
![在这里插入图片描述](https://img-blog.csdnimg.cn/2021031815104589.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
### 4.gulp配置导入组件
gulp配置导入组件需要用到的插件
- gulp-file-include
	- 作用:在一个html 页面里面导入一个html片段
	- 下载:npm i -D gulp-file-include
	- 导入:const fileInclude = require( 'gulp-file-include ')
	- 导入以后得到一个处理流文件的函数
	- 在管道函数内调用就可以了,需要传递参数
	![在这里插入图片描述](https://img-blog.csdnimg.cn/20210318152414369.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- gulpfile.js
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210318160705856.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- index.html
```html
<!DOCTYPE html>
<html lang="en">
@-@include("./head.html",{title:"首页"})
<body>
<!--引入 header.htm1 -->
<!--导入 html 文件的使用-->
<!--语法:自定义标识符include( '要导入的文件路径')-->
<!--文件路径:从 basepath以后开始书写-->
@-@include('./header.html',{ title:"首页" , show: "box" })

  <hr>
  <hr>
<div>
  本页区域内容
</div>
  <hr>
  <hr>
<!--引入footer.html-->
@-@include('./footer.html',{ title:"首页" })
</body>
</html>
```
- login.html

```html
<!DOCTYPE html>
<html lang="en">
@-@include("./head.html",{title:"登录页"})
<body>
<!--引入 header.htm1 -->
<!--导入 html 文件的使用-->
<!--语法:自定义标识符include( '要导入的文件路径')-->
<!--文件路径:从 basepath以后开始书写-->
@-@include('./header.html',{ title:" 登录页 " , show: " active " } )

<hr>
<hr>
<div>
  本页区域内容
</div>
<hr>
<hr>
<!--引入footer.html-->
@-@include('./footer.html',{ title:"登录页" })
</body>
</html>
```
- header.html

```html
<div class="header">
  我是头部结构
  <h1>@-@title</h1>
  <div class="@-@show">我是登录页的内容</div>
</div>
```
- footer.html

```html
<div class="header">
  我是尾部结构
  <h1>@-@title</h1>
</div>
```
- head.html

```html
<meta charset="UTF-8">
<title>@-@title</title>
<link rel="stylesheet" href="../css/index.css">
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210318162349833.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210318162449676.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 运行截图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210318162628114.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)