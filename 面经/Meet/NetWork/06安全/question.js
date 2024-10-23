//#region XSS 跨站脚本攻击

/* 
  XSS: 在页面上注入恶意脚本，在使用者浏览器中运行
  方式：
    带有用户提交数据的网址功能，在输入内容的地方提交脚本代码，恶意代码存在数据库中，服务端将数据返回给浏览器接收响应后并执行恶意代码
    用户直接点击带有恶意脚本的URL，服务端直接从URL的参数提取出来，但不进行转义，直接返回给客户端
  防范：
    前端对用户的输入内容进行限制
    服务端对客户端输入的内容进行转义，避免恶意代码存放在数据库中
    前端对服务端返回的内容进行转义，保证页面内容正常
  vue中的防范
    使用{{}}或者v-bind时都会对内容进行转义
    尽量避免使用v-html标签，如果必须使用，应对文本内容进行转义

  CSP内容安全策略：本质上就是白名单制度
    配置方式：
      HTTP请求头：Content-Security-Policy: script-src 'self'; object-src 'none'; style-src cdn.example.org third-party.org; child-src https:
      网页标签meta：<meta http-equiv="Content-Security-Policy" content="script-src 'self'; object-src 'none'; style-src cdn.example.org third-party.org; child-src https:">


*/
//#endregion

//#region csrf 跨站请求伪造

/* 

  csrf：诱导进入钓鱼网站，在钓鱼网站中利用你在被攻击网站已登录的凭证（cookie中），冒充用户发送恶意请求
  过程：
    用户登陆了A网站，并且保留了登陆凭证
    引导用户去B网站
    B网站向A网站发送请求，并携带A的cookie信息
    站点A收到请求后，误认为是用户发送的请求，进行正常响应
  必要条件:
    登陆过网站并且没有退出
    在不退出的情况下访问危险网站
  防御:
    利用csrf通常是跨域请求，设置请求头的Referer或者origin可以判断请求来源
    添加token验证
    验证码，强制用户必须与应用进行交互
*/

//#endregion
