/* 
  原理：
    编译时，给每一个Vue文件生成一个唯一的id，将此id添加到当前文件的所有html标签上
      如：<div class="demo"></div>会被编译成<div class="demo" data-v-27e4e96e></div>
    编译style标签时，将css选择器改造成为属性选择器
      如：.demo{color: red;}会被编译成.demo[data-v-27e4e96e]{color: red;}
*/
