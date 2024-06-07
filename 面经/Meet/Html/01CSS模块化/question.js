/* 
（1）BEM命名规范：B（block）、E（element）、m（modifier）：外观和行为

（2）CSS module：像import js 一样引入css代码，每一个类名就是引入对象的属性、:global() 代表全局属性

​		  Vue中的CSS模块化：在`<style>`中添加scoped，本质就是使用hash值生成唯一标识

​		  React中的CSS模块化：css文件命名为index.module.css，然后在js文件中import引入

（3）CSS in JS ：使用webpack打包工具，将css写在js里面，弊端是不能使用预处理器

（4）OOCSS（面向对象CSS）：CSS样式可以复用、但是会增加很多类

（5）AMCSS（属性CSS）：利用属性选择器，以属性值作为不同的区分

*/
