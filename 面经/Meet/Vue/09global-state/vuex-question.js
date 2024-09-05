/* 
  Vuex 原理
    1、store本质就是一个没有template的组件
    2、利用mixin机制在beforeCreate钩子前混入VuexInit方法
    3、VuexInit方法实现将store 注册到当前组件的$store中
    4、state 相当于组件内的data，定义在state上的变量相当于定义在组件的data中的变量，都是响应式的
    5、当页面中使用了state中的数据，就是依赖收集的过程，
    6、当state中的数据发生变化，就通过调用对应属性的dep对象的notify方法，去修改视图变化
*/
