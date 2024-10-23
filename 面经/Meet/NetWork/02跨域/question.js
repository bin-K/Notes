// 什么是跨域,如何解决跨域
/*
  同源策略:协议名称,域名,端口号一致,浏览器的安全策略
  跨域:违背了同源策略
  解决跨域:jsonp,cros,服务器代理...
*/

//#region jsonp

// 创建script标签
var script = document.createElement('script')
//设置回调函数
function getData(data) {
	console.log(data)
}
// 设置src属性,设置请求地址
script.src = 'http://localhost:3000?callback=getData'
document.body.appendChild(script)

//#endregion

//#endregion cors
/* 
  服务器配置 Access-Control-Allow-Origin
*/
//#endregion
