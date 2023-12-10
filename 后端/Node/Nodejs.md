## 一、认识NodeJS
- Node.js是一个JavaScript运行环境。让Javascript可以开发后端程序。
- Node.js 使用了一个**事件驱动**、**非阻塞式 I/O**的模型，使其轻量又高效。
- Node.js 的包管理工具 npm 是全球最大的开源库生态系统。
- Node.js可以解析JS代码，提供很多系统级别的API
  - 文件的读写（File System）
  - 进程的管理（process）
  - 网络通信（Http/Https）
#### Node.js的应用
##### 1、BFF中间层
- BFF，即 Backend For Frontend（服务于前端的后端）。
- BFF 模式下，整体分工很清晰，**后端通过 Java/C++ 等语言负责服务实现，理想情况下给前端提供的是基于领域模型的 RPC 接口，前端则在 BFF 层直接调用服务端 RPC 接口拿到数据**，按需加工消费数据，并实现人机交互。基于 BFF 模式的研发，很适合拥有前端技术背景的全栈型工程师。这种模式的好处很明显，后端可以专注于业务领域，更多从领域模型的视角去思考问题，页面视角的数据则交给前端型全栈工程师去搞定。**领域模型与页面数据是两种思维模式，通过 BFF 可以很好地解耦开，让彼此更专业高效**
- Node.js 非常适合用来做 BFF 层，优势如下：
  - 对于前端来说：让前端**有能力自由组装后台数据**，这样可以减少大量的业务沟通成本，加快业务的迭代速度；并且，前端同学能够**自主决定**与后台的通讯方式。
  - 对于后台和运维来说，好处是：安全性（不会把主服务器暴露在外面）、降低主服务器的复杂度等。
##### 2、服务端渲染
- **客户端渲染**（CSR / Client side render）：前端通过一大堆接口请求数据，然后通过 JS 动态处理和生成页面结构和展示。优点是**前后端分离**、减小服务器压力、局部刷新。缺点是不利于 SEO（如果你的页面然后通过 Ajax 异步获取内容，抓取工具并不会等待异步完成后再行抓取页面内容）、首屏渲染慢。
- **服务端渲染**（SSR / Server Side Render）：服务器返回的不是接口数据，而是一整个页面（或整个楼层）的 HTML 字符串，浏览器直接显示即可。也就是说，在服务器端直接就渲染好了，然后一次性打包返回给前端。优点是**有利于 SEO、首屏渲染很快**。
- **总结： 搜索引擎优化 + 首屏速度优化 = 服务端渲染**。
##### 3、小型服务和小型网站的后端
- 基于express、koa等框架可以实现后端服务
##### 4、项目构建工具
- gulp、webpack等都是基于Node.js实现的
##### 5、PC客户端软件
- Electron基于Node.js实现的
#### Node.js的特点
- 异步、非阻塞 IO 模型
- 事件循环
- 单线程
- 总结：轻量和高效
- 这里所谓的“单线程”，指的是 Node 的主线程只有一个。为了确保主线程不被阻塞，主线程是用于接收客户端请求。但不会处理具体的任务。而 Node 的背后还有一个线程池，线程池会处理长时间运行的任务（比如 IO 操作、网络操作）。线程池里的任务是通过队列和事件循环的机制来执行。
#### Node.js的劣势
- 程序运行不稳定，可能会出现服务不可用的情况
- 程序运行效率较低，每秒的请求数维持在一个较低的水平

## 二、Npm & Yarn
#### 包
- 由于 Node 是一套轻内核的平台，虽然提供了一系列的内置模块，但是不足以满足开发者的需求，于是乎出现了包（package）的概念： 与核心模块类似，就是将一些预先设计好的功能或者说 API 封装到一个文件夹，提供给开发者使用
- 包的加载机制
```
Node.js中使用CommonJs模块化机制，通过npm下载的第三方包，我们在项目中引入第三方包都是：let xx = require('第三方包名')

1. `require('第三方包名')`优先在加载该包的模块的同级目录`node_modules`中查找第三方包。
2. 找到该第三方包中的`package.json`文件，并且找到里面的`main`属性对应的入口模块，该入口模块即为加载的第三方模块。
3. 如果在要加载的第三方包中没有找到`package.json`文件或者是`package.json`文件中没有`main`属性，则默认加载第三方包中的`index.js`文件。
4. 如果在加载第三方模块的文件的同级目录没有找到`node_modules`文件夹，或者以上所有情况都没有找到，则会向上一级父级目录下查找`node_modules`文件夹，查找规则如上一致。
5. 如果一直找到该模块的磁盘根路径都没有找到，则会报错：`can not find module xxx`。
```
#### Npm
-  NPM 出现了两层概念：
  - 一层含义是 Node 的开放式模块登记和管理系统，亦可以说是一个生态圈，一个社区。
  - 另一层含义是 Node 默认的模块管理器，是一个命令行下的软件，用来安装和管理 Node 模块。
- 常用命令
``` shell
npm init
npm install/i 包名 -g (uninstall, update)
npm install 包名 -g --save-dev/-D(uninstall, update)
npm list -g (不加-g,列举当前目录下的已安装的包)
npm info 包名 (详细信息)
npm info 包名 version (最新版本)
npm install 包名@版本 (安装指定版本)
npm outdated (检查包是否已经过期)

^2.1.0 npm i 会安装 2.*.* 最新版本
~2.1.0 npm i 会安装 2.1.* 最新版本
*      npm i 会安装 最新版本
```
- npm脚本
  - npm 允许在`package.json`文件里面，使用`scripts`字段定义脚本命令。`package.json` 里面的`scripts` 字段是一个对象。它的每一个属性，对应一段脚本。定义在`package.json`里面的脚本，就称为 `npm` 脚本。

#### yarn
```shell
# 对比npm: 
# 速度更快，yarn缓存了每个下载的包，所以再次使用时无需重复下载。同时利用并行下载以最大化资源利用率，因此安装速度更快
# 超级安全：在执行代码前，yarn会通过算法校验每个安装包的完整性

yarn init
yarn add [package]
yarn add [package]@[version]
yarn add [package] --dev

yarn upgrade [package]@[version]

yarn remove [package]
```

## 三、内置模块
#### http模块
###### 1、简单引用
```javascript
// 引入http模块
cosnt http = require('http')

// 创建服务器
const server = http.createServer((req, res) => {
  // req 接受浏览器的参数
  // res 返回渲染的内容
  res.write('Hello world')
  // 告知浏览器返回结束
  res.end()
}).listen(3000, ()=> {
  console.log('Server Start')
})

// 创建客户端
const client = http.get('http://loalhost:3000', (res) => {
  res.pipe(process.stdout)
})

/*
- server：http.Server实例，用来提供服务，处理客户端的请求。
- client：http.ClientReques实例，用来向服务端发起请求。
- serverReq/clientRes,都是 http.IncomingMessage实例。
    serverReq 用来获取客户端请求的相关信息，如request header；
    clientRes 用来获取服务端返回的相关信息，比如response header。
- serverRes：http.ServerResponse实例
*/
```
##### 2、http.IncomingMessage、http.ServerResponse
- http.ServerResponse 实例。服务端通过http.ServerResponse 实例，来给请求方发送数据。包括发送响应表头，发送响应主体等。
- http.IncomingMessage 实例
  - 在server端：获取请求发送方的信息，比如请求方法、路径、传递的数据等。 
  - 在client端：获取 server 端发送过来的信息，比如请求方法、路径、传递的数据等。
  - http.IncomingMessage实例 有三个属性需要注意：method、statusCode、statusMessage。
    - method：只在 server 端的实例有（也就是 serverReq.method）
    - statusCode/statusMessage：只在 client 端 的实例有（也就是 clientRes.method）
##### 3、res
- 接受到来自客户端的http请求后，向客户端返回正确的响应内容，这就是`res`的职责。
- 返回的内容包括：状态代码/状态描述信息、响应头部、响应主体。
```javascript
// 1、状态代码/状态描述信息
res.writeHead(200, 'ok')

// 或者

res.statusCode = 200
res.statusMessage = 'ok'

/* 
两者差不多，差异点在于
1. res.writeHead() 可以提供额外的功能，比如设置响应头部。
2. 当响应头部发送出去后，res.statusCode/res.statusMessage 会被设置成已发送出去的 状态代码/状态描述信息。
*/

// 2、响应头部
res.writeHead(200, 'ok', {
  'Content-type':'text/plain'
})
res.setHeader('Content-type', 'text/plain')

/*
两者的差异点在哪里呢？
1. res.writeHead() 不单单是设置header。
2. 已经通过 res.setHeader() 设置了header，当通过 res.writeHead() 设置同名header，res.writeHead() 的设置会覆盖之前的设置。
3. 通过res.writeHead()设置了header，再通过res.setHeader()设置同名header会报错
*/

// 3、设置响应主体
// response.write(chunk[,encoding][,callback])
/*
- chunk：响应主体的内容，可以是string，也可以是buffer。当为string时，encoding参数用来指明编码方式。（默认是utf8）
- encoding：编码方式，默认是 utf8。
- callback：当响应体flushed时触发。
*/
res.write('hello')
// response.end([data][,encoding][,callback])
/*
res.end() 的用处是告诉nodejs，header、body都给你了，这次响应就到这里吧
*/
res.end('hello')

```

##### 4、req
| 类型 |     名称      | 服务端 | 客户端 |
| ---- | :-----------: | :----: | :----: |
| 事件 |    aborted    |   ✓    |   ✓    |
| 事件 |     close     |   ✓    |   ✓    |
| 属性 |    headers    |   ✓    |   ✓    |
| 属性 |  rawHeaders   |   ✓    |   ✓    |
| 属性 |  statusCode   |   ✕    |   ✓    |
| 属性 | statusMessage |   ✕    |   ✓    |
| 属性 |  httpVersion  |   ✓    |   ✓    |
| 属性 |      url      |   ✓    |   ✕    |
| 属性 |    socket     |   ✓    |   ✓    |
| 方法 |  .destroy()   |   ✓    |   ✓    |
| 方法 | .setTimeout() |   ✓    |   ✓    |

```javascript
// 服务端获取HTTP版本、请求方法、请求地址、请求头部
req.url
req.httpVersion
req.method
req.headers
```
#### https模块
#### 简单用法
```javascript
// 客户端
const https = require('https')
const fs = require('fs');

https.get('https://www.baidu.com', (res) => {
  console.log('status code: ' + res.statusCode);
  console.log('headers: ' + JSON.stringify(res.headers));
  res.on('data', function(data){
      process.stdout.write(data);
  });
}).on('error', (err)=> {
  console.log(err)
})

// 服务端需要证书
/*
1.创建个目录存放证书。

mkdir cert
cd cert

2.生成私钥。

openssl genrsa -out chyingp-key.pem 2048

3.生成证书签名请求（csr是 Certificate Signing Request的意思）。

openssl req -new \
  -sha256
  -key chyingp-key.key.pem \
  -out chyingp-csr.pem \
  -subj "/C=CN/ST=Guandong/L=Shenzhen/O=YH Inc/CN=www.chyingp.com"

4.生成证书。

openssl x509 \
  -req -in chyingp-csr.pem \
  -signkey chyingp-key.pem \
  -out chyingp-cert.pem
*/

const options = {
    key: fs.readFileSync('./cert/chyingp-key.pem'), // 私钥
    cert: fs.readFileSync('./cert/chyingp-cert.pem') // 证书
};

const server = https.createServer(options, function(req, res){
    res.end('这是来自HTTPS服务器的返回');
}).listen(3000, () => {
  console.log('server start')
})

```

#### url模块
```javascript
const url = require('url')

// 1、url.parse(废弃)
// 解析url，生成url对象
url.parse(req.url)

// 2、url.format(废弃)
// 将url对象拼接成url
const urlObject = {}
url.format(urlObject)

//3、url.resolve(废弃)
url.resolve('/one/two/three', 'four');         // '/one/two/four'
url.resolve('http://example.com/', '/one');    // 'http://example.com/one'
url.resolve('http://example.com/one', '/two'); // 'http://example.com/two'

// 4、新版写法
new URL()
```
#### URL 接口(代替内置模块url使用)
- nodejs内置模块`url`有些方法要被废弃，我们使用`URL类`代替
- 浏览器原生提供`URL()`接口，它是一个构造函数，用来构造、解析和编码 URL。一般情况下，通过`window.URL`可以拿到这个构造函数。

##### 1、Url模块和Url类
| 属性     | url模块 | URL类 |
| -------- | ------- | ----- |
| protocol | `✅`     | `✅`   |
| host     | `✅`     | `✅`   |
| port     | `✅`     | `✅`   |
| hostname | `✅`     | `✅`   |
| search   | `✅`     | `✅`   |
| query    | `✅`     | `-`   |
| path     | `✅`     | `-`   |
| pathname | `✅`     | `✅`   |
| href     | `✅`     | `✅`   |
| hash     | `✅`     | `✅`   |
| origin   | -       | `✅`   |

```javascript
// 打印两个对象的输出
// url模块，url.parse('link')
{
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'm.shop.com',
  port: null,
  hostname: 'm.shop.com',
  hash: '#detail',
  search: '?id=4433&name=%E6%9D%8E%E5%A4%87&directCompanyId=&mobile=18951431099',
  query: 'id=4433&name=%E6%9D%8E%E5%A4%87&directCompanyId=&mobile=18951431099',
  pathname: '/home/share',
  path: '/home/share?id=4433&name=%E6%9D%8E%E5%A4%87&directCompanyId=&mobile=18951431099',
  href: 'https://m.shop.com/home/share?id=4433&name=%E6%9D%8E%E5%A4%87&directCompanyId=&mobile=18951431099#detail'
}
// new URL()
{
  href: 'https://m.shop.com/home/share?id=4433&name=%E6%9D%8E%E5%A4%87&directCompanyId=&mobile=18951431099#detail',
  origin: 'https://m.shop.com',
  protocol: 'https:',
  username: '',
  password: '',
  host: 'm.shop.com',
  hostname: 'm.shop.com',
  port: '',
  pathname: '/home/share',
  search: '?id=4433&name=%E6%9D%8E%E5%A4%87&directCompanyId=&mobile=18951431099',
  searchParams: URLSearchParams {
    'id' => '4433',
    'name' => '李备',
    'directCompanyId' => '',
    'mobile' => '18951431099' },
  hash: '#detail'
}
```
##### URL()构造函数
- `URL()`作为构造函数，可以生成 URL 实例。它接受一个表示 URL 的字符串作为参数。如果参数不是合法的 URL，会报错
```javascript
var url = new URL('http://www.example.com/index.html');
url.href
// "http://www.example.com/index.html"
```

#### queryString 模块
```javascript
const queryString = require('querystring')
const qs = 'x=3&y=4'

// 1、parse
queryString.parse(qs)

// 2、stringify
const qo = {
  x:3,
  y:4
}

queryString.stringify(qo)
```
#### URLSearchParams 对象(代替内置模块querystring使用)
- `URLSearchParams`对象是浏览器的原生对象，用来构造、解析和处理 URL 的查询字符串（即 URL 问号后面的部分）。

- 它本身也是一个构造函数，可以生成实例。参数可以为查询字符串，起首的问号`?`有没有都行，也可以是对应查询字符串的数组或对象。

#### qs模块
qs是一个npm仓库所管理的包,可通过npm install qs命令进行安装.

1. qs.parse()将URL解析成对象的形式
2. qs.stringify()将对象 序列化成URL的形式，以&进行拼接

```javascript
const qs = require('qs');

qs.parse()
const str = "username='admin'&password='123456'";
console.log(qs.parse(str)); 
// Object { username: "admin", password: "123456" }

qs.stringify()
const a = qs.stringify({ username: 'admin', password: '123456' });
console.log(a); 
// username=admin&password=123456
```

```js
// qs.stringify() 和JSON.stringify()有什么区别?

var a = {name:'hehe',age:10};
// qs.stringify序列化结果如
// name=hehe&age=10
// --------------------
// 而JSON.stringify序列化结果如下：
// "{"a":"hehe","age":10}"
```

#### path模块
- path模块用于路径处理

##### 获取路径/文件名/扩展名
- 获取路径：path.dirname(filepath)
- 获取文件名：path.basename(filepath)
- 获取扩展名：path.extname(filepath)

##### 路径组合
- path.join([...paths])
- path.resolve([...paths])
- path.resolve 和 path.join 都是属于 path 核心模块下的方法，用来拼接路径
  - 如果 dirname 是以 ./ 、../、不加 / 开头的话，那么 resolve 会找到磁盘下的根目录
  - 如果 basename 是以 / 开头的，那么 resolve 就会直接返回 basename 

##### 常见路径
- `__dirname`：这是一个常量，表示：当前执行文件所在**完整目录**。
- `__filename`：这是一个常量。表示：当前执行文件的**完整目录 + 文件名**。
- `process.cwd`：获取当前执行 Node命令 时的目录名。

#### fs模块
> #### Node.js 中的同步和异步的区别
>
> fs模块对文件的几乎所有操作都有同步和异步两种形式。例如：readFile() 和 readFileSync()。
>
> 区别：
>
> - 同步调用会阻塞代码的执行，异步则不会。
> - 异步调用会将 读取任务 下达到任务队列，直到任务执行完成才会回调。
> - 异常处理方面：同步必须使用 try catch 方式，异步可以通过回调函数的第一个参数。【重要】

##### 文件读取
```js
// 同步读取
const fs = require('fs')
try{
    const data = fs.readFileSync('./fileForRead.txt', 'utf8');
    console.log('文件内容: ' + data);
}catch(err){
    console.error('读取文件出错: ' + err.message);
}

// 异步读取
fs.readFile('./fileForRead.txt', 'utf8', function(err, data){
    if(err){
        return console.error('读取文件出错: ' + err.message);
    }
    console.log('文件内容: ' + data);
});

// fs/promise
import { readFile } from 'fs/promises';
try {
  const contents = await readFile(filePath, { encoding: 'utf8' });
  console.log(contents);
} catch (err) {
  console.error(err.message);
}
```
##### 文件写入
```js
// 同步写入
const fs = require('fs')
try{
    // 如果文件不存在，则创建文件；如果文件存在，则覆盖文件内容；
    fs.writeFileSync('./fileForWrite1.txt', 'hello world', 'utf8');
    console.log('文件写入成功');
}catch(err){
    throw err;
}

// 异步写入
fs.writeFile('./fileForWrite.txt', 'hello world', 'utf8', function(err){
    if(err) throw err;
    console.log('文件写入成功');
});

// promises
import { writeFile } from 'fs/promises';

try {
  const contents = await writeFile('message.txt', 'hello world', { encoding: 'utf8' });
  console.log(contents);
} catch (err) {
  // When a request is aborted - err is an AbortError
  console.error(err);
}


```
##### 文件是否存在
- `fs.exists()`已经是`deprecated`状态
```js
// 异步
const fs = require('fs')

//检查文件是否存在于当前目录中
fs.access('package.json', fs.constants.F_OK, err => {
    if(err) {
        console.log('package.json不存在于当前目录中')
        return
    }
    console.log('package.json存在于当前目录中')
})

/*
`fs.access()`除了判断文件是否存在（默认模式），还可以用来判断文件的权限。
备忘：`fs.constants.F_OK`等常量无法获取（node v6.1，mac 10.11.4下，`fs.constants`是`undefined`）
*/

// 同步
import { accessSync, constants } from 'fs';

try {
  accessSync('etc/passwd', constants.R_OK );
  console.log('can read');
} catch (err) {
  console.error('no access!');
}

// promises
import { access, constants } from 'node:fs/promises';

try {
  await access('/etc/passwd', constants.R_OK);
  console.log('can access');
} catch {
  console.error('cannot access');
}
```

##### 删除文件
```js
// 异步
const fs = require('fs')
fs.unlink('./fileForUnlink.txt', function(err){
    if(err) throw err;
    console.log('文件删除成功');
})

// 同步
import { unlinkSync } from 'fs';
try {
  unlinkSync('/tmp/hello');
  console.log('successfully deleted /tmp/hello');
} catch (err) {
  // handle the error
}

// promises
import { unlink } from 'fs/promises';

try {
  await unlink('/tmp/hello');
  console.log('successfully deleted /tmp/hello');
} catch (err) {
  // handle the error
}
```

##### 创建目录
```js
// 异步
const fs = require('fs')

fs.mkdir('sub', function(err){
    if(err) throw err;
    console.log('创建目录成功');
})

// 同步
try{
    fs.mkdirSync('hello');
    console.log('创建目录成功');
}catch(e){
    throw e;
}

// promises
import { mkdir } from 'fs/promises';

try {
  const createDir = await mkdir(projectFolder, { recursive: true });
  console.log(`created ${createDir}`);
} catch (err) {
  console.error(err.message);
}

```
##### 遍历目录
- `fs.readdirSync()`只会读一层，所以需要判断文件类型是否目录，如果是，则进行递归遍历。

##### 删除目录
```js
// 删除目录(前提没有文件在里面)
fs.rmdir('./avatar', err => {
  if (err && err.code === 'ENOENT') {
    console.log('目录不存在');
  }
});
```

##### 删除整个目录
```js
//1
const fs = require("fs")
fs.("./avatar",(err,data)=>{
    // console.log(data)
    data.forEach(item=>{
        fs.unlinkSync(`./avatar/${item}`)
    })

    fs.rmdir("./avatar",(err)=>{
        console.log(err)
    })
})

//2
const fs = require('fs')
fs.readdir("./avatar").then(async (data)=>{
    let arr = []
    data.forEach(item=>{
        arr.push(fs.unlink(`./avatar/${item}`))
    })
    await Promise.all(arr)
    fs.rmdir("./avatar")
})

//3
const fs = require('fs').promises;
fs.readdir('./image2').then(async data => {
  await Promise.all(data.map(item => fs.unlink(`./image2/${item}`)));
  await fs.rmdir('./image2');
});
```

##### 文件重命名
```js
// 异步
const fs = require('fs')
fs.rename('./hello', './world', function(err){
    if(err) throw err;
    console.log('重命名成功');
});

// 同步
fs.renameSync('./world', './hello');

// promises
import { rename } from 'fs/promises';

try {
  await rename('./world', './hello');
  console.log(`rename`);
} catch (err) {
  console.error(err.message);
}
```
##### 获取文件状态
1.异步：fs.stat(path,callback):
  path是一个表示路径的字符串,callback接收两个参数(err,stats),其中stats就是fs.stats的一个实例；

2.同步：fs.statSync(path)
  只接收一个path变量，fs.statSync(path)其实是一个fs.stats的一个实例；

方法
- stats.isFile() -- 是否文件
- stats.isDirectory() -- 是否目录

#### events模块
- Node.js 有多个内置的事件，我们可以通过引入 events 模块，并通过实例化 EventEmitter 类来绑定和监听事件
```js
// 引入 events 模块
var EventEmitter = require('events');
// 创建 eventEmitter 对象
var event = new EventEmitter();

// 绑定事件及事件的处理程序
eventEmitter.on('eventName', eventHandler);
// 触发事件
eventEmitter.emit('eventName');
```

#### stream模块
- `stream`是Node.js提供的又一个仅在服务区端可用的模块，目的是支持“流”这种数据结构

###### 读取流
```js
const fs = require('fs');

//创建读取流
let rs = fs.createReadStream('hello.txt', 'utf-8');

rs.on('open', function () {
  console.log('读取的文件已打开');
}).on('close', function () {
  console.log('读取流结束');
}).on('error', err => {
  console.log(err);
}).on('data', function (chunk) {
  //每一批数据流入完成
  console.log('单批数据流入:' + chunk.length);
  console.log(chunk);
});

// 要注意，`data`事件可能会有多次，每次传递的`chunk`是流的一部分数据。


// 写入流
// 要以流的形式写入文件，只需要不断调用`write()`方法，最后以`end()`结束
let ws = fs.createWriteStream('hello.txt', 'utf-8');

//监听文件打开事件
ws.on('open', function () {
  console.log('文件打开');
});

//监听文件关闭事件
ws.on('close', function () {
  console.log('文件写入完成，关闭');
});

//文件流式写入
ws.write('helloworld1!', function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('内容1流入完成');
  }
});
ws.write('helloworld2!', function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('内容2流入完成');
  }
});

//文件写入完成
ws.end(function () {
  console.log('文件写入关闭');
});
```
-`pipe` 就像可以把两个水管串成一个更长的水管一样，两个流也可以串起来。一个`Readable`流和一个`Writable`流串起来后，所有的数据自动从`Readable`流进入`Writable`流，这种操作叫`pipe`。

- 在Node.js中，`Readable`流有一个`pipe()`方法，就是用来干这件事的。

- 让我们用`pipe()`把一个文件流和另一个文件流串起来，这样源文件的所有数据就自动写入到目标文件里了，所以，这实际上是一个复制文件的程序：
```js
const fs = require('fs');

//创建读取流
let rs = fs.createReadStream('video.mp4');
let ws = fs.createWriteStream('b.mp4');

rs.on('close', function () {
  console.log('读取流结束');
});

rs.pipe(ws);
```
#### zlib模块
```js
// 压缩
var fs = require('fs');
var zlib = require('zlib');

var gzip = zlib.createGzip();

var readstream = fs.createReadStream('./extra/fileForCompress.txt');
var writestream = fs.createWriteStream('./extra/fileForCompress.txt.gz');

readstream.pipe(gzip).pipe(writestream);

// 解压
var readstream  = fs.createReadStream('./extra/fileForCompress.txt.gz');
var writestream  = fs.createWriteStream('./extra/fileForCompress1.txt');

readstream.pipe(gunzip).pipe(writestream);

// 首先判断 是否包含 **accept-encoding** 首部，且值为**gzip**。
//  否：返回未压缩的文件。
//  是：返回gzip压缩后的文件。
```

#### ctypto
- crypto模块的目的是为了提供通用的加密和哈希算法。用纯JavaScript代码实现这些功能不是不可能，但速度会非常慢。Nodejs用C/C++实现这些算法后，通过cypto这个模块暴露为JavaScript接口，这样用起来方便，运行速度也快
##### hash
- hash.digest([encoding])：计算摘要。encoding可以是`hex`、`latin1`或者`base64`。如果声明了encoding，那么返回字符串。否则，返回Buffer实例。注意，调用hash.digest()后，hash对象就作废了，再次调用就会出错。

- hash.update(data[, input_encoding])：input_encoding可以是`utf8`、`ascii`或者`latin1`。如果data是字符串，且没有指定 input_encoding，则默认是`utf8`。注意，hash.update()方法可以调用多次。

```js
var crypto = require('crypto');
var fs = require('fs');

var content = fs.readFileSync('./test.txt', {encoding: 'utf8'});
var hash = crypto.createHash('sha256');
var output;

hash.update(content);
output = hash.digest('hex'); 
//或
hash.setEncoding('hex');
input.pipe(hash).pipe(process.stdout)

console.log(output);
// 输出内容为：
// b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9
```

### Express
- Express框架等于在http模块之上，加了一个中间层
- 什么是中间件
> - 简单说，中间件（middleware）就是处理HTTP请求的函数。它最大的特点就是，一个中间件处理完，再传递给下一个中间件。App实例在运行过程中，会调用一系列的中间件
> - 每个中间件可以从App实例，接收三个参数，依次为request对象（代表HTTP请求）、response对象（代表HTTP回应），next回调函数（代表下一个中间件）。每个中间件都可以对HTTP请求（request对象）进行加工，并且决定是否调用next方法，将request对象再传给下一个中间件。

```js
// 一个不进行任何操作、只传递`request`对象的中间件
function uselessMiddleware(req, res, next) {
  next()
}
// 上面代码的next就是下一个中间件。如果它带有参数，则代表抛出一个错误，参数为错误文本
// 抛出错误以后，后面的中间件将不再执行，直到发现一个错误处理函数为止
function uselessMiddleware(req, res, next) {
  next('出错了！')
}
```

