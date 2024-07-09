//#region computed 和 watch 的区别
/*
  computed关键点：
    computed属性用于创建派生数据，这些数据是基于响应式依赖自动计算的。
    它们提供了缓存机制，只有当依赖项变化时，计算属性才会重新计算。
    computed适合于声明性地描述数据如何从其他数据派生，常用于视图渲染优化
  watch关键点：
    watch用于侦听响应式数据的变化，并在变化发生时执行定义的逻辑。
    它不具备缓存机制，每次数据变化都会触发回调函数。
    watch适合于执行复杂的业务逻辑，如异步请求、DOM操作，或者在数据变化时执行条件性响应。
  
  computed是声明式的，用于计算并缓存视图所需的数据，它根据响应式数据的变化自动重新计算并提供缓存。只有当其依赖的响应式数据变化时，才会重新执行计算。
  computed在开始时自动建立依赖关系，默认第一次加载的时候就开始监听

  watch是命令式的，用于监听响应式数据的变化，每次变化都会触发执行预定义的回调函数。
  watch默认在开始时不执行监听，除非设置immediate: true，这允许在数据变化时立即执行回调
*/
//#endregion

//#region computed
/* 
  原理：
    1、初始化计算属性时，遍历计算computed对象，给每一个计算属性分别生成一个computed watcher, 并将watcher的dirty设置为true
       初始化时不会立即计算，只有在获取计算的值时才会进行计算
    2、初始化时将Dep.target设置成当前的computer watcher,将computed watcher 添加到所依赖的data值对应的dep中，然后计算computed对应的值，然后将dirty改为false
    3、当所依赖的data中的值发生变化时，调用set方法触发dep 的notify方法，将watcher中dirty设置为true
    4、下次获取计算属性的值时，如果dirty为true,重新计算值
    5、dirty是控制缓存的关键，当依赖的data发生变化时，dirty设置为true，再次获取值时，就会重新计算值
*/
//#endregion

//#region watch
/* 
  原理：
  1、遍历watch对象， 给其中每一个watch属性，生成对应的user watcher
  2、调用watcher中的get方法，将Dep.target设置成当前的user watcher，并将user watcher添加到监听data值对应的dep中（依赖收集的过程）
  3、当所监听data中的值发生变化时，会调用set方法触发dep的notify方法，执行watcher中定义的方法
  4、设置成deep：true的情况，递归遍历所监听的对象，将user watcher添加到对象中每一层key值的dep对象中，
     这样无论当对象的中哪一层发生变化，wacher都能监听到。通过对象的递归遍历，实现了深度监听功能

*/
//#endregion
