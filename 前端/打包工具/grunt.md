# 一、项目构建
### 1.什么是项目构建
- 编译项目中的js, sass, less
- 合并js/css等资源文件
- 压缩js/css/html等资源
- 文件JS语法的检查
- 对其他的资源进行打包等
### 2.构建工具的作用
- 简化项目构建自动完成构建
### 3.项目构建的工具
- grunt：中文主页：[https://www.gruntjs.net/](https://www.gruntjs.net/)
	- 在国内用得较少，下面两种构建工具用的比较多
	- Grunt是一套前端**自动化构建**工具，一个基于nodeJs的命令行工具*它是一个**任务运行器**，配合其丰富强大的**插件**
	- 常用功能:
		- 合并文件(js/css)
		- 压缩文件(js/css)
		- 语法检查**(js)
		- less/sass预编译处理
- gulp
- webpack
# 二、使用Grunt
### 1.创建相应项目
- 目录结构如下：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210320114515285.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210320114635943.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

### 2.安装
- grunt的安装依赖于node.js，所以需要先安装node.js，安装教程自行查询
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210320113230351.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 在命令行中输入node -v，可以查看当前node的版本
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210320113318458.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 全局安装grunt-cli
	- npm i grunt-cli -g
	![在这里插入图片描述](https://img-blog.csdnimg.cn/20210320113736187.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 局部安装grunt
	- 在你对应的项目下输入如下命令：
	- npm i grunt --save-dev
	![在这里插入图片描述](https://img-blog.csdnimg.cn/20210320114102400.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
	![在这里插入图片描述](https://img-blog.csdnimg.cn/20210320114735634.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
### 3.配置文件Gruntfile.js
- 注意：Gruntfile.js一定要首字母大写
- 此配置文件本质就是一个node函数类型模块
- 配置编码包含3步:
	- 初始化插件配置
	- 加载插件任务
	- 注册构建任务

- 在官网中有提到Gruntfile.js
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210320130708456.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

```javascript
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }
  });
  // 加载包含 "uglify" 任务的插件。
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // 默认被执行的任务列表。
  grunt.registerTask('default', ['uglify']);

};
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210320131147917.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
### 4.Grunt插件
- 插件分类：
	- grunt团队贡献的插件:插件名大都以contrib-开头
	- 第三方提供的插件:大都不以contrib-开头
- 常用的插件
	- grunt-contrib-clean——清除文件(打包处理生成的)
	- grunt-contrib-concat—合并多个文件的代码到一个文件中
	- grunt-contrib-uglify—压缩js文件
	- grunt-contrib-jshint——javascript语法错误检查
	- grunt-contrib-cssmin—压缩/合并css文件
	- grunt-contrib-htm1min—压缩html文件
	- grunt-contrib-imagemin——压缩图片文件(无损)
	- grunt-contrib-copy—复制文件、文件夹
	- grunt-contrib-watch—实时监控文件变化、调用相应的任务重新执行
### 5.合并js任务
- 使用concat插件
- 命令：npm i  grunt-contrib-concat --save-dev
![在这里插入图片描述](https://img-blog.csdnimg.cn/2021032013175027.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 在官网中可以查看对应插件的使用方法：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210320132823518.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210320132935786.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210320132948137.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210320133446555.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 执行任务
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210320133705926.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210320142905610.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

### 6.压缩js任务
- 使用uglify插件
- 命令：npm i grunt-contrib-uglify --save-dev
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210320133951545.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 根据官网配置Gruntfile.js文件
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210320134943733.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210320135139438.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

### 7.默认任务
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210320135919204.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
### 8.js语法检查
- 使用jshint插件
- 命令：npm i grunt-contrib-jshint --save-dev
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210320140153964.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 需要在项目根目录下创建一个.jshint的配置文件

```javascript
{
  "curly" : true,
  "eqeqeq" : true,
  "eqnull": true,
  "expr" : true,
  "immed" : true,
  "newcap" : true,
  "noempty" : true,
  "noarg" : true,
  "regexp" : true,
  "browser" : true,
  "devel" : true,
  "node" : true,
  "boss": false,
  "undef" : true,
  "asi" : false,
  "predef" : [ "define", "BMap" , "angular","BMAP_STATUS_SUCCESS"]
}
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210320140953161.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- Gruntfile.js文件配置
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210320141645679.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 执行任务
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210320141843317.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210320141916382.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
### 9.合并压缩css任务
- 使用cssmin插件
- 命令：npm i grunt-contrib-cssmin --save-dev
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210320142211456.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- Gruntfile.js文件配置
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210320142751792.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210320142816388.png)
### 10.使用watch插件
- 命令：npm i grunt-contrib-watch -g
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210320143154554.png)
- 配置Gruntfile.js文件
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210320143810434.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)