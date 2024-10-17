# Electron

## Electron 是什么

- 跨平台的桌面应用开发框架
- 使用 JavaScript、HTML 和 CSS 构建桌面应用程序的框架。 嵌入 Chromium和 Node.js

## Electron流程模型

- 主进程：

  - 主进程只有一个
  - 主要功能是管理渲染进程，与操作系统打交道。调用Native API 进行各种系统级的操作，并且可以跨平台
  - node环境，能使用node的各种API，使用node的各个模块进行操作，没有浏览器相关的属性，无法访问window等浏览器属性

  ![image-20241017152318355](C:\Users\15202\Desktop\Data\Notes\前端\Framework\Electron\Electron.assets\image-20241017152318355.png)

- 渲染进程：

  - 渲染进程有多个

  - 主要是程序的展示的窗口

  - 浏览器环境，本质就是Chromium，能使用浏览器的各种API，无法使用node环境的API（`ctrl shift i`可以打开窗口的控制台，跟浏览器是一模一样的，`ctrl R`可以刷新页面）

    ![image-20241017152811586](C:\Users\15202\Desktop\Data\Notes\前端\Framework\Electron\Electron.assets\image-20241017152811586.png)

- 主进程和渲染进程是可以通信的，可以是渲染进程向主进程单向通信，也可以是主进程想渲染进程通信，也可以双向通信，进程间的通信称为IPC

- 总结：主进程（一个）管理各个渲染进程（多个），渲染进程跟主进程进行通信（渲染进程间无法直接通信，通过主进程作为中间人可以实现），主进程调用各种Native API 完成系统级操作

## 创建第一个Electron项目

- 环境：需要先安装Node.js

  - 注意：先安装Node.js只是为了正确安装`electron`, 因为 Electron 将 Node.js 嵌入到其二进制文件中，你应用运行时的 Node.js 版本与你系统中运行的 Node.js 版本无关

- ```bash
  mkdir my-electron-app && cd my-electron-app
  yarn init
  ```

- 执行`yarn init`生成`package.json`后`author`和`description`在打包阶段属于必填项

- ```json
  {
    "name": "electron-first",
    "version": "1.0.0",
    "main": "main.js",
    "license": "MIT",
    "author": "XiaoMing",
    "description": "Hello World",
  }
  
  ```

- 安装`Electron`并在`package.json`配置启动命令

  - ```bash
    yarn add ELectron -D
    ```

  - ```json
    {
      "scripts": {
        "start": "electron ." // 注意 . 不能省略
      }
    }
    ```

  - 启动项目前需要创建主进程，也就是`package.json`中对应的`main`,命名为`main.js`, 否则会报错，创建完成后，执行`yarn start`即可启动

  - 此时启动无报错，但也无任何反应，因为没有在主进程里配置任何东西，渲染窗口等进程需要在主进程中配置

- 创建`pages`文件夹用于存放页面文件（也就是渲染进程的文件），分别创建对应的`index.html`,`index.css`,`render.js`文件

  - 在`index.html`中引入`css`和`js`文件

  - `html`的`head`需要配置一个`meta`,解决CSP的警官

    - ```html
      <meta
        http-equiv="Content-Security-Policy"
        content="default-src 'self'; script-src 'self' 'unsafe-inline'"
      />
      ```

      ![image-20241017162837637](C:\Users\15202\Desktop\Data\Notes\前端\Framework\Electron\Electron.assets\image-20241017162837637.png)

      - `default-src 'self'`是一组配置，意思是如果不做出任何的说明，引入的外部资源，只能是属于同源
        `script-src 'self' 'unsafe-inline'`是另一组配置，指引入样式的时候，可以有两种写法，第一种写法
        `self` 是可以引入同源的样式表，第二种写法`unsafe-inline `可以使用行内样式

  - ```html
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <!-- https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP -->
        <meta
          http-equiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline'"
        />
        <title>Hello World!</title>
        <link rel="stylesheet" href="./index.css" />
      </head>
      <body>
        <h1>Hello World!</h1>
        We are using Node.js <span id="node-version"></span>, Chromium
        <span id="chrome-version"></span>, and Electron
        <span id="electron-version"></span>.
        <script src="./render.js"></script>
      </body>
    </html>
    
    ```

    ![image-20241017160219206](C:\Users\15202\Desktop\Data\Notes\前端\Framework\Electron\Electron.assets\image-20241017160219206.png)

- 需要将写好的页面加载出来，如何加载页面，这个需要主进程进行控制，因此需要配置主进程`main.js`

  - ```js
    const { app, BrowserWindow } = require("electron");
    
    const createWindow = () => {
      const win = new BrowserWindow({
        width: 800,
        height: 600,
      });
      win.loadFile("./pages/index.html");
    };
    
    // app.whenReady().then(() => {}) 的写法与 app.on("ready", () =>{}) 同理
    
    app.on("ready", () => {
      createWindow();
      app.on("window-all-closed", () => {
        if (process.platform !== "darwin") app.quit();
      });
    });
    ```

    ![QQ_1729152963664](C:\Users\15202\Desktop\Data\Notes\前端\Framework\Electron\Electron.assets\QQ_1729152963664.png)

- 管理窗口的生命周期

  - 关闭所有窗口时退出应用 (Windows & Linux)，在Windows和Linux上，关闭所有窗口通常会完全退出一个应用程序。

    ```js
    // 为了实现这一点，你需要监听 app 模块的 'window-all-closed' 事件。如果用户不是在 macOS(darwin) 上运行程序，则调用 app.quit()。
    app.on('window-all-closed', () => {
      if (process.platform !== 'darwin') app.quit()
    })
    ```

  - 如果没有窗口打开则打开一个窗口 (macOS),macOS 应用通常即使在没有打开任何窗口的情况下也继续运行，并且在没有窗口可用的情况下激活应用时会打开新的窗口。

    ```js
    // 为了实现这一特性，监听 app 模块的 activate 事件。如果没有任何浏览器窗口是打开的，则调用 createWindow() 方法。
    // 因为窗口无法在 ready 事件前创建，你应当在你的应用初始化后仅监听 activate 事件。 通过在您现有的 whenReady() 回调中附上您的事件监听器来完成这个操作。
    
    app.on("ready", () => {
      createWindow();
    
      app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
      })
    });
    ```

- 完整项目结构

  ![image-20241017162230687](C:\Users\15202\Desktop\Data\Notes\前端\Framework\Electron\Electron.assets\image-20241017162230687.png)

- 启动项目`yarn start`

  ![image-20241017162503018](C:\Users\15202\Desktop\Data\Notes\前端\Framework\Electron\Electron.assets\image-20241017162503018.png)

## 配置自动重启

- 主进程每修改一次就得手动重启一次，可以配置自动重启

- 安装`nodemon`

  - ```bash
    yarn add nodemon -D
    ```

- 更改启动命令 

  - ```json
    {
      "scripts": {
        "start": " nodemon --exec electron ."
      },
    }
    ```

- 更改完启动命令发现自动重启的是主进程，但不改主进程，只改页面，发现页面窗口是需要手动刷新的，配置一个nodemon.json即可实现页面文件也能自动刷新

  - ```json
    {
      "ignore": ["node_modules", "dist"],
      "restartable": "r",
      "watch": ["*.*"],
      "ext": "html, css, js"
    }
    
    ```

## 主进程和渲染进程通信

- 目前主进程和渲染进程是没有什么关联的，主进程只是配置了加载渲染进程，然后他们之前没有其他的关系了，此时如果需要在渲染进程里拿到主进程中的node版本号是不可行的，因为渲染进程是浏览器环境，没有`process`属性

- 此时就需要一个预加载脚本作为主进程和渲染进程之间通信的桥梁，注意：预加载脚本可以拿到部分的node API，但不是所有

- 主进程目录下创建`preload.js`

  - ```js
    const { contextBridge } = require("electron");
    
    contextBridge.exposeInMainWorld("api", {
      version: process.version,
    });
    ```

    ![image-20241017170808690](C:\Users\15202\Desktop\Data\Notes\前端\Framework\Electron\Electron.assets\image-20241017170808690.png)

- 主进程需要配置运行预加载脚本

  - ```js
    const createWindow = () => {
      const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
          preload: path.resolve(__dirname, "./preload.js"),
        },
      });
      win.loadFile("./pages/index.html");
    };
    ```

![image-20241017171211430](C:\Users\15202\Desktop\Data\Notes\前端\Framework\Electron\Electron.assets\image-20241017171211430.png)

- 配置一下渲染进程的脚本

  - ```js
    const nodeVersion = document.querySelector("#node-version");
    
    console.log(window);
    
    nodeVersion.textContent = api.version;
    
    ```

- 最后结果

  - ![image-20241017171528977](C:\Users\15202\Desktop\Data\Notes\前端\Framework\Electron\Electron.assets\image-20241017171528977.png)

- 由此，引出，渲染进程跟主进程之间的相互通信，需要通过预加载脚本，因为预加载脚本也只能访问到node部分属性，像是文件操作等还是需要主进程来完成的
- 完成在窗口输入内容，并写入文件，最近将文件读出来的需求即可完全理解进程间的通信
- ![image-20241017180733189](C:\Users\15202\Desktop\Data\Notes\前端\Framework\Electron\Electron.assets\image-20241017180733189.png)

- main.js

  - ```js
    const { app, BrowserWindow, ipcMain } = require("electron");
    const path = require("path");
    const fs = require("fs");
    
    const writeFile = (_, data) => {
      fs.writeFileSync(path.resolve(__dirname, "./hello.txt"), data);
    };
    
    const readFile = () => {
      return fs.readFileSync(path.resolve(__dirname, "./hello.txt")).toString();
    };
    
    const createWindow = () => {
      const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
          preload: path.resolve(__dirname, "./preload.js"),
        },
      });
      ipcMain.on("write-file", writeFile);
      ipcMain.handle("read-file", readFile);
      win.loadFile("./pages/index.html");
    };
    
    app.on("ready", () => {
      createWindow();
    
      app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
      });
    });
    
    app.on("window-all-closed", () => {
      if (process.platform !== "darwin") app.quit();
    });
    
    ```

- preload.js

  - ```js
    const { contextBridge, ipcRenderer } = require("electron");
    
    contextBridge.exposeInMainWorld("api", {
      version: process.version,
      writeFile: (data) => {
        ipcRenderer.send("write-file", data);
      },
      readFile: () => ipcRenderer.invoke("read-file"),
    });
    
    ```

- render.js

  - ```js
    const nodeVersion = document.querySelector("#node-version");
    const input = document.querySelector("#input");
    const write = document.querySelector("#write");
    const read = document.querySelector("#read");
    
    nodeVersion.textContent = api.version;
    
    window.onload = () => {
      write.addEventListener("click", () => {
        api.writeFile(input.value);
      });
    
      read.addEventListener("click", async () => {
        const text = await api.readFile();
        alert(text);
      });
    };
    
    ```

- index.html

  - ```html
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <!-- https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP -->
        <meta
          http-equiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline'"
        />
        <title>Hello World!</title>
        <link rel="stylesheet" href="./index.css" />
      </head>
      <body>
        <h1>Hello World!</h1>
        We are using Node.js <span id="node-version"></span>, Chromium
        <span id="chrome-version"></span>, and Electron
        <span id="electron-version"></span>.
        <hr />
        <input id="input" />
        <button id="write">写入文件</button>
        <button id="read">读取文件</button>
        <script src="./render.js"></script>
      </body>
    </html>
    
    ```

- ![image-20241017181121944](C:\Users\15202\Desktop\Data\Notes\前端\Framework\Electron\Electron.assets\image-20241017181121944.png)

## 打包应用

- 使用 `electron build` 打包成一个安装包应用

- ```bash
  yarn add electron-build -D
  ```

- `electron-build`配置地址：[CodeBlog/Electron/electron-builder打包详解.md at master · QDMarkMan/CodeBlog (github.com)](https://github.com/QDMarkMan/CodeBlog/blob/master/Electron/electron-builder打包详解.md)

- 配置`package.json`

  - ```json
    {
      "scripts": {
        "build": "electron-builder"
      },
      "build": {
        "appId": "com.electron.myapp",
        "nsis": {
          "oneClick": false,
          "allowElevation": true,
          "allowToChangeInstallationDirectory": true
        },
        "win": {
          "icon": "./vite.svg",
          "target": [
            {
              "target": "nsis",
              "arch": [
                "x64"
              ]
            }
          ]
        }
      }
    }
    ```

    