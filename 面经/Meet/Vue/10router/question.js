/* 
  vue-router 原理
    1、创建的页面路由会与该页面形成一个路由表（key-value模式，key为路由，value为页面）
    2、通过监听浏览器地址栏URL的变化，匹配路由表，将对应路由的页面替换旧页面，达到无需刷新的效果
    3、目前单页面使用的路由有两种实现方式: hash 模式、history 模式
    4、hash模式（路由中带#号），通过hashchange事件来监听路由的变化
        window.addEventListener('hashchange', ())=>{})
    5、history 模式，利用了pushState() 和replaceState() 方法，实现往history中添加新的浏览记录、或替换对应的浏览记录
        通过popstate事件来监听路由的变化，window.addEventListener('popstate', ())=>{})

*/
