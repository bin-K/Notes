//#region 垃圾回收机制
/* 

  GC垃圾回收策略：标记清除和引用计数
  分代式垃圾回收：
    新生代：存活时间较短的对象
    老生代：存活时间较长或者常驻内存的对象
    内存回收的例子
      假设代码中有一个对象 jerry ，这个对象从创建到被销毁，刚好走完了整个生命周期，通常会是这样一个过程
      1）这个对象被分配到了新生代；随着程序的运行，新生代塞满了，GC 开始清理 新生代里的死对象，jerry 因为还处于活跃状态，所以没被清理出去；
      2）GC清理了两遍新生代，发现 jerry 依然还活跃着，就把 jerry 移动到了老生代
      3）随着程序的运行，老生代也塞满了，GC 开始清理老生代，这时候发现 jerry 已经没有被引用了，就把 jerry 给清理出去了。

*/
//#endregion
