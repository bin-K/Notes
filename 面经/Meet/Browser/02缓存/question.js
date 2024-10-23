//#region 强缓存和协商缓存

/* 

  协商缓存
    响应头："last-modified"和请求头："if-modified-since"
      表示文件最后的修改时间，服务器返回时将时间放在响应头："last-modified"中，客户端请求时带上上一次返回的时间放在请求头："if-modified-since"中，服务器进行比对，看是否使用缓存
    响应头："Etag"和请求头："if-none-match"
      表示文件的唯一标识，服务器返回时将文件的标识放在响应头："Etag"中，客户端请求时带上上一次返回的时间放在请求头："if-none-match"中，服务器进行比对，看是否使用缓存
    Etag 和 last-modified 允许同时存在，并且Etag的优先级高于 last-modified
    Etag 解决的是当有些文件周期性修改了，但内容却没有变的情况下，如果按照 last-modified的匹配逻辑则会重新请求，使用Etag即可以继续使用缓存

  强缓存
    Expire 和 Cache-Control
      Expire 服务器返回的绝对时间
      Cache-Control 服务器返回的相对时间
    Expire 和 Cache-Control 同样允许同时存在， Cache-Control的优先级更高
    Cache-Control 解决的是，Expire返回的是服务器时间，客户端时间可能会改动，导致本来可以使用缓存的情况变成了重新请求

    Cache-Control: no-cache：这个很容易让人产生误解，使人误以为是响应不被缓存,实际上Cache-Control: no-cache是会被缓存的，只不过浏览器每次都会向服务器发起请求，来验证当前缓存的有效性
    Cache-Control: no-store：这个才是响应不被缓存的意思
*/

//#endregion
