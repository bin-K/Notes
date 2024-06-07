//#region 两栏 三栏布局
/* 

（1）两栏布局：左边宽度固定、右边随着设备的宽度变化而变化

- 利用浮动，左边设置宽度，并且向左浮动，右边宽度为auto，且设置margin-left为左边的宽度
- 利用浮动，左边设置宽度，并且向左浮动，右边设置overhidden，形成BFC
- 利用flex布局，将左边元素设置为固定宽度200px，将右边的元素设置为flex:1
- 利用绝对定位，左边使用绝对定位，右边设置margin-left为左边的宽度
- 利用绝对定位，右边使用绝对定位，设置left为左边的宽度

（2）三栏布局：左右宽度变化、中间随着设备的宽度变化而变化

- 利用绝对定位，左右两栏设置为绝对定位，中间设置对应方向大小的margin的值。
- 利用flex布局，左右两栏设置固定大小，中间一栏设置为flex:1
- 利用浮动，左右两栏设置固定大小，并设置对应方向的浮动。中间一栏设置左右两个方向的margin值，
    注意这种方式，中间一栏必须放到最后
- 圣杯布局，利用浮动和负边距来实现。父级元素设置左右的 padding，三列均设置向左浮动，
    中间一列放在最前面，宽度设置为父级元素的宽度，因此后面两列都被挤到了下一行，
    通过设置 margin 负值将其移动到上一行，再利用相对定位，定位到两边。
- 双飞翼布局，双飞翼布局相对于圣杯布局来说，左右位置的保留是通过中间列的 margin 值来实现的，
    而不是通过父元素的 padding 来实现的。本质上来说，也是通过浮动和外边距负值来实现的。
*/
//#endregion

//#region rem布局
/* 
本质是等比缩放，rem作用于根元素字体大小
  1）假设屏幕宽度为750px，将屏幕平分为10份，1rem=75px，根元素的fontSize大小为75px
  2）利用js动态的设置html的font-size

  rem布局的缺点

  字体并不合适使用rem, 字体的大小和字体宽度，并不成线性关系，会出现随着屏幕的变大，
  字体变的越来越大，所以需要结合媒体查询来调整字体大小
*/
//#endregion

//#region rem + vw布局
/* 
优势

  1）使用纯css的方式来实现，避免使用js动态计算html根元素font-size大小
  2）结合使用媒体查询，解决宽屏下（如ipad）字体过大的问题

rem+vw布局的原理

  1）设计稿为750px时，rootValue设置为75，则屏幕宽为10rem，1rem=75px，根元素的fontSize大小为75px
  2）屏幕总共有100vw，所以1vw为7.5px ，10vw为75px， 得出1rem为10vw， 故得到根元素的fontSize为10vw

*/
//#endregion

//#region flex布局
/* 
父属性

- flex-direction：设置主轴的方向：row、row-reverse、column、column-reverse
- justify-content：设置主轴上的子元素排列方式：flex-start、flex-end、center、space-around、space-between
- flex-wrap：设置子元素是否换行：nowrap、warp
- align-content：设置侧轴上的子元素的排列方式（多行）：flex-start、flex-end、center、space-around、space-between、stretch
- align-items：设置侧轴上的子元素排列方式（单行）：flex-start、flex-end、center、stretch
- flex-flow：复合属性，相当于同时设置了 flex-direction 和 flex-wrap

子属性

-  flex 子项目占的份数 
   -  flex-grow，flex-grow 定义项目的放大比例，默认为0,
   -  flex-shrink,flex-shrink 定义了项目的缩小比例，默认为1,
   -  flex-basis,项目本身的大小，默认为auto
-  align-self 控制子项自己在侧轴的排列方式
-  order属性定义子项的排列顺序（前后顺序）

flex：1；!== flex：1，1，auto

-  flex-grow，flex-grow 定义项目的放大比例，默认为0,
-  flex-shrink,flex-shrink 定义了项目的缩小比例，默认为1,
-  flex-basis,项目本身的大小，默认为auto

实际上

- flex: 1; === flex: 1 1 0%;

  auto 为表示项目本身的大小, 如果设置为 auto, 
  那么这三个盒子就会按照自己内容的多少来等比例的放大和缩小, 所以出现了上图中三个盒子不一样大的情况

  那我们如果随便设置一个其他带有长度单位的数字呢, 
  那么他就不会按项目本身来计算, 所以它不关心内容, 只是把空间等比收缩和放大

  flex:auto === flex:1 1 auto
  flex:none === flex:0 0 auto
*/
//#endregion

//#region BFC
/* 
- BFC的理解
  块级格式化上下文，它是指一个独立的块级渲染区域，只有Block-level BOX参与，
  该区域拥有一套渲染规则来约束块级盒子的布局，且与区域外部无关。

- 如何创建BFC
  - 方法①: float的值不是none
  - 方法②:position的值不是static或者relative
  - 方法③: display的值是inline-block、flex或者inline-flex
  - 方法④:overflow:hidden;

- BFC的其他作用
  - BFC可以取消盒子margin塌陷
  - BFC可以可以阻止元素被浮动元素覆盖
*/
//#endregion

//#region 隐藏元素的方式
/* 
display: none：渲染树不会包含该渲染对象，因此该元素不会在页面中占据位置，也不会响应绑定的监听事件。

visibility: hidden：元素在页面中仍占据空间，但是不会响应绑定的监听事件。

opacity: 0：将元素的透明度设置为 0，以此来实现元素的隐藏。元素在页面中仍然占据空间，并且能够响应元素绑定的监听事件。

position: absolute：通过使用绝对定位将元素移除可视区域内，以此来实现元素的隐藏。

z-index: 负值：来使其他元素遮盖住该元素，以此来实现隐藏。

transform: scale(0,0)：将元素缩放为 0，来实现元素的隐藏。这种方法下，元素仍在页面中占据位置，但是不会响应绑定的监听事件。
*/
//#endregion

//#region 回流和重绘
/* 

回流：将可见DOM节点以及它对应的样式结合起来，
  可是我们还需要计算它们在设备视口(viewport)内的确切位置和大小，这个计算的阶段就是回流。

重绘：将渲染树的每个节点都转换为屏幕上的实际像素，这个阶段就叫做重绘节点。

何时发生回流重绘：

- 添加或删除可见的DOM元素
- 元素的位置发生变化
- 元素的尺寸发生变化（包括外边距、内边框、边框大小、高度和宽度等）
- 内容发生变化，比如文本变化或图片被另一个不同尺寸的图片所替代。
- 页面一开始渲染的时候（这肯定避免不了）
- 浏览器的窗口尺寸变化（因为回流是根据视口的大小来计算元素的位置和大小的）
- 注意：回流一定会触发重绘，而重绘不一定会回流

减少回流和重绘

- 最小化重绘和重排
- 批量修改DOM
- 避免触发同步布局事件
- 对于复杂动画效果,使用绝对定位让其脱离文档流
- css3硬件加速（GPU加速）可以让transform、opacity、filters这些动画不会引起回流重绘

*/
//#endregion
