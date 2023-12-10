- 在学习Vue3前，需要先掌握Vue2的相关知识，这里相对于Vue2，Vue3的改变
- Vue2传送门：[https://blog.csdn.net/SuihideOmelet/article/details/113571541](https://blog.csdn.net/SuihideOmelet/article/details/113571541)
# 一、创建Vue3.0工程
1. 使用vue-cli创建
官方文档: [https://cli.vuejs.org/zh/guide/creating-a-project.html#vue-create](https://cli.vuejs.org/zh/guide/creating-a-project.html#vue-create)
```bash
##查看@vue/cli版本,确保@vue/ cli版本在4.5.0以上
vue --version
##安装或者升级你的@vue/cli
npm install -g @vue/cli
##创建
vue create vue_test
##启动
cd vue_test
npm run serve
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/img_convert/c02e5034b2e6d91f031412c9d9deeac7.png)

2. 使用vite创建
官方文档: [https://v3.cn.vuejs.org/guide/installation.html#vite](https://v3.cn.vuejs.org/guide/installation.html#vite)
vite官网: [https://vitejs.cn](https://vitejs.cn)
	- 什么是vite? ——新一代前端构建工具。
	- 优势如下:
		- 开发环境中，无需打包操作，可快速的冷启动。
		- 轻量快速的热重载(HMR)。
		- 真正的按需编译，不再等待整个应用编译完成。
	- 传统构建与vite构建对比图
![在这里插入图片描述](https://img-blog.csdnimg.cn/img_convert/e524edf4282183cf0d227aa9ad9bff05.png)

```bash
##创建工程
npm init vite-app <project-name>
##进入工程目录
cd <project-name>
##安装依赖
npm install
##运行
npm run dev
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/img_convert/d640701dbdfa64603f9f3320eaf3bd55.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/img_convert/1ffe83427160ad1927b1953e6511346c.png)

# 二、分析工程结构
![在这里插入图片描述](https://img-blog.csdnimg.cn/img_convert/39d92f8bdcac6025c6cca8527c56749d.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/img_convert/250dff72b56e0d02367ed468e29743ff.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/img_convert/7e7a21600af9f631489f65fde048ee5d.png)
# 三、常用的Composition API
- 官方文档: https://v3.cn.vuejs.org/guidelcomposition-api-introduction.html
## 1.setup
1. 理解: Vue3.0中一个新的配置项，值为一个函数。
2. setup是所有Composition API(组合API)“表演的舞台”.。
3. 组件中所用到的:数据、方法等等，均要配置在setup中。
4. setup函数的两种返回值:
	1. 若返回一个对象，则对象中的属性、方法,在模板中均可以直接使用。(重点关注! )
	2. 若返回一个渲染函数:则可以自定义渲染内容。(了解)
5. 注意点:
	1. 尽量不要与Vue2.x配置混用
		- Vue2.x配置(data、methos、computed...）中可以访问到setup中的属性、方法。
		- 但在setup中不能访问到Vue2.x配置(data、methos、computed...) 。
		- 如果有重名, setup优先。
	2. setup不能是一个async函数，因为返回值不再是return的对象,而是promise,模板看不到return对象中的属性。

```html
<template>
  <h1>我是App组件</h1>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <button @click='sayhello'>打招呼</button>
</template>

<script>
import { h } from "vue"
export default {
  //测试setup，暂不考虑响应式数据的问题
  setup() {
    let name = '张三'
    let age = 18

    function sayhello(){
      alert(`hello,${name}-${age}`)
    }
    // 返回一个对象
    return {
      name,
      age,
      sayhello,
    }
    // 返回一个渲染函数
    // return ()=>h('h1','渲染函数')
  }
}
</script>

<style>
</style>
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/img_convert/e2dede06d4fcda561864fd73dcd3ea5e.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/img_convert/4fbb9b954be5e359cd697e414764d597.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/img_convert/31cbf8c7e17dc3707cfcf029e0259bbf.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/img_convert/dc7a2bc42c9530e40227d06b460cd960.png)

```html
<template>
  <h1>我是App组件</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>性别：{{ sex }}</h2>
  <button @click="sayhello">打招呼(Vue3)</button>
  <br />
  <br />
  <button @click="saywelcome">打招呼(Vue2)</button>
  <br />
  <br />
  <button @click="test1">Vue2获取Vue3数据</button>
  <br />
  <br />
  <button @click="test2">Vue3获取Vue2数据</button>
</template>

<script>
import { h } from "vue";
export default {
  name: "App",
  data() {
    return {
      sex: "男",
    };
  },
  methods: {
    saywelcome() {
      alert("hello,来自Vue2中的方法");
    },
    test1() {
      console.log(this.name);
      console.log(this.age);
      console.log(this.sex);
      console.log(this.sayhello);
    },
  },
  //测试setup，暂不考虑响应式数据的问题
  setup() {
    let name = "张三";
    let age = 18;

    function sayhello() {
      alert(`hello,${name}-${age}`);
    }

    function test2() {
      console.log(name);
      console.log(age);
      console.log(this.sex);
      console.log(this.saywelcome);
    }
    // 返回一个对象
    return {
      name,
      age,
      sayhello,
      test2
    }
    //返回一个渲染函数
    // return () => h("h1", "渲染函数");
  },
};
</script>

<style></style>

```

![在这里插入图片描述](https://img-blog.csdnimg.cn/img_convert/5bef3510df5275996403aaef3653ce5c.png)
## 2.ref函数
- 作用:定义一个响应式的数据
- 语法:const xxx = ref(initValue)
	- 创建一个包含响应式数据的引用对象(reference对象)。
	- JS中操作数据:xxx.value
	- 模板中读取数据:不需要.value，直接:\<div>{{xxx}}</div>
- 备注:
	- 接收的数据可以是:基本类型、也可以是对象类型。
	- 基本类型的数据:响应式依然是靠object.defineProperty()的get与set完成的
	- 对象类型的数据:内部“求助”了Vue3.0中的一个新函数——reactive函数。

![在这里插入图片描述](https://img-blog.csdnimg.cn/img_convert/ebb181beff918094ab4264ad9f477fab.png)
- 处理基本数据类型
```html
<template>
  <h1>我是App组件</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <button @click="change">修改信息</button>
</template>

<script>
import { ref } from 'vue'
export default {
  name: "App",
  setup() {
    let name = ref("张三");
    let age = ref(18);

    function change() {
      // 引入ref也不能这么改，此时的name和age已经被包装成RefImpl对象了
      // name = '李四'
      // age = 19
      name.value = '李四'
      age.value = 19
      console.log(name,age);
    }
    // 返回一个对象
    return {
      name,
      age,
      change,
    };
  },
};
</script>

<style></style>

```
![在这里插入图片描述](https://img-blog.csdnimg.cn/115ddc08ff6d473ba8907f737591f7c1.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/3597edcf93914eedae64aed568a6fede.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/8bfc5d81d9dc4bc8959c5ceaca6b7fe3.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

- 处理对象类型

```html
<template>
  <h1>我是App组件</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>工作：{{job.type}}</h2>
  <h2>工作：{{job.salary}}</h2>
  <button @click="change">修改信息</button>
</template>

<script>
import { ref } from 'vue'
export default {
  name: "App",
  setup() {
    let name = ref("张三");
    let age = ref(18);
    let job = ref({
      type:'前端工程师',
      salary:'20k'
    })

    function change() {
      // 引入ref也不能这么改，此时的name和age已经被包装成RefImpl对象了
      // name = '李四'
      // age = 19
      // 处理基本数据类型
      name.value = '李四'
      age.value = 19
      console.log(name,age);
      // 处理对象类型
      // 不能这么写，job是一个对象，ref处理对象是求助reactive函数的，reactive将对象
      // 封装成一个Proxy对象，此时Proxy可以直接读取到对应的属性值，不需要再通过value了
      // Proxy是window上的一个属性
      // job.value.type.value = 'UI设计师'
      // job.value.salary.value = '21k'
      job.value.type = 'UI设计师'
      job.value.salary = '21k'
      console.log('job',job);
      console.log('job.value',job.value);
    }
    // 返回一个对象
    return {
      name,
      age,
      job,
      change,
    };
  },
};
</script>

<style></style>

```

![在这里插入图片描述](https://img-blog.csdnimg.cn/92bbec52b9e64dd185e2f3388737cce2.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
## 3.reactive函数
- 作用:定义一个对象类型的响应式数据（(基本类型别用它，用ref函数，基本类型用它不起作用)
- 语法:
	-  const 代理对象 = reactive(被代理对象）
	- 接收一个对象（或数组)，返回一个代理器对象(proxy对象)
- reactive定义的响应式数据是"深层次的”。
- 内部基于ES6的 Proxy实现，通过代理对象操作源对象内部数据都是响应式的

```html
<template>
  <h1>我是App组件</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>工作：{{job.type}}</h2>
  <h2>薪资：{{job.salary}}</h2>
  <h2>工作：{{job.a.b.c}}</h2>
  <h2>爱好{{hobby}}</h2>
  <button @click="change">修改信息</button>
</template>

<script>
import { ref,reactive } from 'vue'
export default {
  name: "App",
  setup() {
    let name = ref("张三");
    let age = ref(18);
    let job = reactive({
      type:'前端工程师',
      salary:'20k',
      a:{
        b:{
          c:666
        }
      }
    })
    let hobby = reactive(['吃饭','睡觉','打豆豆'])

    function change() {
      // 引入ref也不能这么改，此时的name和age已经被包装成RefImpl对象了
      // name = '李四'
      // age = 19
      // 处理基本数据类型
      name.value = '李四'
      age.value = 19
      console.log(name,age);
      // 处理对象类型
      // 不能这么写，job是一个对象，ref处理对象是求助reactive函数的，reactive将对象
      // 封装成一个Proxy对象，此时Proxy可以直接读取到对应的属性值，不需要再通过value了
      // Proxy是window上的一个属性
      // job.value.type.value = 'UI设计师'
      // job.value.salary.value = '21k'
      job.type = 'UI设计师'
      job.salary = '21k'
      job.a.b.c = '999'
      console.log('job',job);
      // 处理数组类型
      hobby[0] = '学习'
      console.log('hobby',hobby);
    }
    // 返回一个对象
    return {
      name,
      age,
      job,
      hobby,
      change,
    };
  },
};
</script>

<style></style>

```
![在这里插入图片描述](https://img-blog.csdnimg.cn/01bea5b9031b4371a3bb7cec32df7883.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/b05413423b2c440f9a4a49d87a812aee.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

## 4.Vue3中响应式的原理
回顾vue2.x的响应式
- 实现原理:
	- 对象类型:通过object.defineProperty()对属性的读取、修改进行拦截(数据劫持)。
	- 数组类型:通过重写更新数组的一系列方法来实现拦截。(对数组的变更方法进行了包裹)
```javascript
object.defineProperty(data,'count ', {
	get() {}，
	set() {}
})
```
- 存在问题:
	- 新增属性、删除属性,界面不会更新。
	- 直接通过下标修改数组,界面不会自动更新。
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vue3响应式原理</title>
</head>

<body>
    <script>
        let person = {
            name: '张三',
            age: 18
        }
        //模拟Vue2中的响应式
        let p = {}
        Object.defineProperty(p, 'name', {
            configurable: true,
            get() {//读取时调用
                return person.name
            },
            set(value) {//修改时调用
                console.log('name被修改了');
                person.name = value
            }
        })
        Object.defineProperty(p, 'age', {
                configurable: true,
                get() {//读取时调用
                    return person.age
                },
                set(value) {//修改时调用
                    console.log('age');
                    person.age = value
                }
            })
    </script>
</body>

</html>
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/45026eb5552a4a8b88caa0e1b4f88a51.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

![在这里插入图片描述](https://img-blog.csdnimg.cn/8acfab0188dc4380948fe16cb3d6b40c.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
Vue3中的响应式原理
- 实现原理:
	- 通过Proxy(代理)∶拦截对象中任意属性的变化,包括:属性值的读写、属性的添加、属性的删除等。
	- 通过Reflect(反射)︰对被代理对象的属性进行操作。
- MDN文档中描述的Proxy与Reflect:
	- Proxy: [https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
	- Reflect: [https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vue3响应式原理</title>
</head>

<body>
    <script>
        let person = {
            name: '张三',
            age: 18
        }
        //模拟Vue2中的响应式
        //#region 
        // let p = {}
        // Object.defineProperty(p, 'name', {
        //     configurable: true,
        //     get() {//读取时调用
        //         return person.name
        //     },
        //     set(value) {//修改时调用
        //         console.log('name被修改了');
        //         person.name = value
        //     }
        // })
        // Object.defineProperty(p, 'age', {
        //         configurable: true,
        //         get() {//读取时调用
        //             return person.age
        //         },
        //         set(value) {//修改时调用
        //             console.log('age');
        //             person.age = value
        //         }
        //     })
        //#endregion

        // 模拟Vue3的响应式
        //const p = new Proxy(person,{})
        const p = new Proxy(person,{
            // 监测数据的读取
            get(target,propName){
                console.log(`p上的${propName}被读取了`);
                return target[propName]
            },
            // 监测数据的修改和新增数据
            set(target, propName,value){
                console.log(`p上的${propName}被修改了`);
                target[propName] = value
            },
            // 监测数据的删除
            deleteProperty(target, propName){
                console.log(`p上的${propName}被删除了`);
                return delete target[propName]
            }

        })
    </script>
</body>

</html>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/a2f7797f56ee42989b642b75f460b1f1.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/24d6e3f8a8cc48cea75abcab3f4e1cef.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/cba5c2fe1e054c1ca08e07e4cbbf4857.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

- 此时核心的原理已经说完了，但是还有一点地方没说（Reflect）
- Reflect是window上的一个内置对象
![在这里插入图片描述](https://img-blog.csdnimg.cn/d71217faa00042cd8047331e26dfa346.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/7a3abaf2ff3d4b71a771e87292c7e7fd.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vue3响应式原理</title>
</head>

<body>
    <script>
        let person = {
            name: '张三',
            age: 18
        }
        //模拟Vue2中的响应式
        //#region 
        // let p = {}
        // Object.defineProperty(p, 'name', {
        //     configurable: true,
        //     get() {//读取时调用
        //         return person.name
        //     },
        //     set(value) {//修改时调用
        //         console.log('name被修改了');
        //         person.name = value
        //     }
        // })
        // Object.defineProperty(p, 'age', {
        //         configurable: true,
        //         get() {//读取时调用
        //             return person.age
        //         },
        //         set(value) {//修改时调用
        //             console.log('age');
        //             person.age = value
        //         }
        //     })
        //#endregion

        // 模拟Vue3的响应式
        const p = new Proxy(person, {
            // 监测数据的读取
            get(target, propName) {
                console.log(`p上的${propName}被读取了`);
                // return target[propName]
                return Reflect.get(target,propName)
            },
            // 监测数据的修改和新增数据
            set(target, propName, value) {
                console.log(`p上的${propName}被修改了`);
                // target[propName] = value
                Reflect.set(target, propName,value)
            },
            // 监测数据的删除
            deleteProperty(target, propName) {
                console.log(`p上的${propName}被删除了`);
                // return delete target[propName]
                return Reflect.deleteProperty(target, propName)
            }
        })

        // 通过Reflect和直接通过Object操作数据的区别
        let obj = { a: 1, b: 2 }
        // Object.defineProperty(obj, 'c', {
        //     get() {
        //         return 3
        //     }
        // })
        // Object.defineProperty(obj, 'c', {
        //     get() {
        //         return 4
        //     }
        // })
        const x = Reflect.defineProperty(obj, 'c', {
            get() {
                return 3
            }
        })
        const x1 = Reflect.defineProperty(obj, 'c', {
            get() {
                return 4
            }
        })
        console.log(x);
        console.log(x1);
        console.log('执行后续代码');
    </script>
</body>

</html>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/a6ca4cf5090340aa8321579699a465a1.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/e6377045d34b4d1c8ef729e4235a3971.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/ec87acba5ff14fbc99bde437506cba83.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
## 5.reactive和ref的对比
- 从定义数据角度对比:
	- ref用来定义:基本类型数据。
	- reactive用来定义:对象（(或数组)类型数据。
	- 备注: ref也可以用来定义对象（或数组）类型数据，它内部会自动通过reactive转为代理对象。
- 从原理角度对比:
	- ref通过 object.defineProperty()的get与set来实现响应式(数据劫持)。
	- reactive通过使用Proxy来实现响应式(数据劫持)﹐并通过Reflect操作源对象内部的数据。
- 从使用角度对比:
	- ref定义的数据:操作数据需要.value，读取数据时模板中直接读取不需要.value 。
	- reactive定义的数据:操作数据与读取数据:均不需要.value。

## 6.setup的两个注意点
- setup执行的时机
	- 在beforeCreate之前执行一次，this是undefined。
- setup的参数
	- props:值为对象，包含:组件外部传递过来，且组件内部声明接收了的属性。
	- context: 上下文对象
		- attrs:值为对象，包含:组件外部传递过来，但没有在props配置中声明的属性,相当于this.\$attrs
		- slots:收到的插槽内容,相当于this.$slots 。
		- emit:分发自定义事件的函数,相当于this.$emit 。

在Vue2的脚手架中
![在这里插入图片描述](https://img-blog.csdnimg.cn/fc9e5eaaca6e4b118ff2c58ee838e27f.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/c1ba104aac6242cebd7a81f16e13669b.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/3aee8b79f1434357873beb31c73ec22f.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
在Vue3的脚手架中
![在这里插入图片描述](https://img-blog.csdnimg.cn/196202caabb84371b8310e65697f8575.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/db290f3b255646d7b800b5ad1fc6137a.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/ab3a39ae288a4ac2a8e4858124021008.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
## 7.计算属性
computed函数
- 与Vue2.x中computed配置功能一致。
- 写法

```javascript
import {computed} from 'vue'
setup(){
	---
//计算属性—简写
let fullName = computed(()=>{
	return person.firstName + '-' +person. lastName
	})
//计算属性—完整
let fullName = computed({
	get(){
	return person.firstName + '-' + person.lastName
	},
	set(value){
		const nameArr = value.split('-')
		person.firstName = nameArr[0]
		person.lastName = nameArr[1]
	}
})
```

```html
<template>
  <div class="demo">
    <h2>我是Demo组件</h2>
    姓：<input type="text" v-model="person.firstName" />
    <br />
    名：<input type="text" v-model="person.lastName" />
    <br />
    <span>全名：<input type="text" v-model="person.fullName" /></span>
  </div>
</template>

<script>
import { reactive, computed } from "vue";
export default {
  name: "demo",
  // 不建议这么写，Vue2和Vue3尽量不要混用
  // computed: {
  //   fullName() {
  //     return this.person.firstName + "-" + this.person.lastName;
  //   },
  // },
  setup() {
    let person = reactive({
      firstName: "张",
      lastName: "三",
    });
    // 简写，不考虑被修改的情况
    // person.fullName = computed(() => {
    //   return person.firstName + "-" + person.lastName;
    // });
    // 完整写法，考虑被读取和修改
    person.fullName = computed({
      get() {
        return person.firstName + "-" + person.lastName;
      },
      set(value) {
        const nameArr = value.split("-");
        person.firstName = nameArr[0];
        person.lastName = nameArr[1];
      },
    });

    // 返回一个对象
    return {
      person,
    };
  },
};
</script>

<style>
</style>
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/ca35f00a2647411b8f5482293635946b.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

## 8.监视属性
watch属性：
- 与Vue2.x中watch配置功能一致。
- 两个小"坑":
	- 监视reactive定义的响应式数据时: oldValue无法正确获取、强制开启了深度监视（(deep配置失效)。
	- 监视reactive定义的响应式数据中某个属性时: deep配置有效。
##### 监视ref定义的数据

```html
<template>
  <div class="demo">
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="sum++">+1</button>
    <h2>信息为：{{ msg }}</h2>
    <button @click="msg += '!'">修改信息</button>
  </div>
</template>

<script>
import { ref, watch } from "vue";
export default {
  name: "demo",
  // 不建议Vue2和Vue3混写
  // watch: {
  // 简写
  // sum(newValue,oldValue){
  //   console.log('sum变化了',newValue,oldValue);
  // }
  // 完整写法
  // sum: {
  //   deep:true,
  //   immediate:true,
  //   handler(newValue, oldValue) {
  //     console.log("sum变化了", newValue, oldValue);
  //   },
  // },
  // },
  setup() {
    let sum = ref(0);
    let msg = ref("你好啊");

    // 情况一：监测ref定义的一个响应式数据
    watch(sum, (newValue, oldValue) => {
      console.log("sum变化了", newValue, oldValue);
    },{immediate:true});

    // 情况二：监测ref定义的多个响应式数据
    // watch可以同时写多个（但一般不这么写）
    // watch(sum, (newValue, oldValue) => {
    //   console.log("sum变化了", newValue, oldValue);
    // });
    // watch(msg, (newValue, oldValue) => {
    //   console.log("msg", newValue, oldValue);
    // });
    //放到数组中来监视多个
    // watch([sum,msg], (newValue, oldValue) => {
    //   console.log("sum或者msg变化了", newValue, oldValue);
    // });
    // 返回一个对象
    return {
      sum,
      msg
    };
  },
};
</script>

<style>
</style>
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/3cd425568abe47f4ae6879dd3a9c8564.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
##### 监视reactive定义数据
```html
<template>
  <div class="demo">
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="sum++">+1</button>
    <h2>信息为：{{ msg }}</h2>
    <button @click="msg += '!'">修改信息</button>
    <h2>姓名:{{person.name}}</h2>
    <h2>年龄:{{person.age}}</h2>
    <h2>薪资:{{person.job.j1.salary}}K</h2>
    <button @click="person.name +='~'">修改姓名</button>
    <button @click="person.age++">增长年龄</button>
    <button @click="person.job.j1.salary++">增长薪资</button>
  </div>
</template>

<script>
import { ref,reactive, watch } from "vue";
export default {
  name: "demo",
  // 不建议Vue2和Vue3混写
  // watch: {
  // 简写
  // sum(newValue,oldValue){
  //   console.log('sum变化了',newValue,oldValue);
  // }
  // 完整写法
  // sum: {
  //   deep:true,
  //   immediate:true,
  //   handler(newValue, oldValue) {
  //     console.log("sum变化了", newValue, oldValue);
  //   },
  // },
  // },
  setup() {
    let sum = ref(0);
    let msg = ref("你好啊");
    // let person = reactive({
    //   name:'张三',
    //   age:18,
    //   job:{
    //     j1:{
    //       salary:20
    //     }
    //   }
    // })
    // value的问题
    let person = ref({
      name:'张三',
      age:18,
      job:{
        j1:{
          salary:20
        }
      }
    })

    // 情况一：监测ref定义的一个响应式数据
    // watch(sum, (newValue, oldValue) => {
    //   console.log("sum变化了", newValue, oldValue);
    // },{immediate:true});

    // 情况二：监测ref定义的多个响应式数据
    // watch可以同时写多个（但一般不这么写）
    // watch(sum, (newValue, oldValue) => {
    //   console.log("sum变化了", newValue, oldValue);
    // });
    // watch(msg, (newValue, oldValue) => {
    //   console.log("msg", newValue, oldValue);
    // });
    //放到数组中来监视多个
    // watch([sum,msg], (newValue, oldValue) => {
    //   console.log("sum或者msg变化了", newValue, oldValue);
    // });

    // 情况三：监测reactive定义的一个响应式数据,
    // 监视reactive定义的响应式数据时: oldValue无法正确获取
    // 制开启了深度监视（(deep配置失效)。
    // watch(person, (newValue, oldValue) => {
    //   console.log("person变化了", newValue, oldValue);
    // },{deep:false});

    // 情况四：监视reactive定义的一个响应式数据中的某个属性
    // watch(()=>person.age, (newValue, oldValue) => {
    //   console.log("age变化了", newValue, oldValue);
    // });

    // 情况五：监视reactive定义的一个响应式数据中的某些属性
    // watch([()=>person.age,()=>person.name], (newValue, oldValue) => {
    //   console.log("age或name变化了", newValue, oldValue);
    // });

    // 特殊情况：
    // watch(()=>person.job, (newValue, oldValue) => {
    //   console.log("job变化了", newValue, oldValue);
    // },{deep:true})

    // value的问题
    // watch(person.value,(newValue, oldValue)=>{
    //   console.log("person变化了", newValue, oldValue);
    // })

    watch(person,(newValue, oldValue)=>{
      console.log("person变化了(不通过value)", newValue, oldValue);
    },{deep:true})
    // 返回一个对象
    return {
      sum,
      msg,
      person
    };
  },
};
</script>

<style>
</style>
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/ae2c091b0c4f45f78cc5ec3f5aef171c.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/d84c58a53d2c4f6d8c6b0e71781fc47d.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

##### watchEffect函数
- watch的套路是:既要指明监视的属性，也要指明监视的回调。
- watchEffect的套路是:不用指明监视哪个属性，监视的回调中用到哪个属性，那就监视哪个属性。
- watchEffect有点像computed :
	- 但computed注重的计算出来的值(回调函数的返回值)，所以必须要写返回值。
	- 而watchEffect更注重的是过程(回调函数的函数体)，所以不用写返回值。
```javascript
//watchEffect所指定的回调中用到的数据只要发生变化，则直接重新执行回调。
watchEffect(()=>{
	const x1 = sum.value
	const x2 = person.age
	console.log( ' watchEffect配置的回调执行了')
})
```

```html
<template>
  <div class="demo">
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="sum++">+1</button>
    <h2>信息为：{{ msg }}</h2>
    <button @click="msg += '!'">修改信息</button>
    <h2>姓名:{{ person.name }}</h2>
    <h2>年龄:{{ person.age }}</h2>
    <h2>薪资:{{ person.job.j1.salary }}K</h2>
    <button @click="person.name += '~'">修改姓名</button>
    <button @click="person.age++">增长年龄</button>
    <button @click="person.job.j1.salary++">增长薪资</button>
  </div>
</template>

<script>
import { ref, reactive, watchEffect } from "vue";
export default {
  name: "demo",
  setup() {
    let sum = ref(0);
    let msg = ref("你好啊");
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });
    //watchEffect所指定的回调中用到的数据只要发生变化，则直接重新执行回调。
    watchEffect(() => {
      const x1 = sum.value;
      const x2 = person.age;
      console.log(" watchEffect配置的回调执行了");
    });
    // 返回一个对象
    return {
      sum,
      msg,
      person,
    };
  },
};
</script>

<style>
</style>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/1ea765af03f64d20b1ffa4fcd34c4ed1.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
## 9.生命周期
![在这里插入图片描述](https://img-blog.csdnimg.cn/a7d2ec6692304188a651bd69d0daee00.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- Vue3.0中可以继续使用Vue2.x中的生命周期钩子，但有有两个被更名:
	- beforeDestroy改名为beforeUnmount
	- destroyed改名为unmounted

- Vue3.0也提供了Composition API形式的生命周期钩子，与Vue2.x中钩子对应关系如下:
	-  beforeCreate ===> setup()
	- created=======> setup()
	- beforeMount ===> onBeforeMount
	- mounted =======>onMounted
	- beforeUpdate ===> onBeforeUpdate
	- updated =======> onUpdated
	- beforeUnmount ==> onBeforeUnmount
	- unmounted =====> onUnmounted
```html
<template>
  <button @click="isshow = !isshow">显示/隐藏</button>
  <Demo v-if="isshow" />
</template>

<script>
import Demo from "./components/Demo.vue";
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";
export default {
  name: "App",
  components: {
    Demo,
  },
  setup() {
    let isshow = ref(true);

    return { isshow };
  },
};
</script>

<style></style>

```

```html
<template>
  <div class="demo">
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="sum++">+1</button>
  </div>
</template>

<script>
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";
export default {
  name: "demo",
  setup() {
    console.log("----setup----");
    let sum = ref(0);
    // 通过组合式api形式去写生命钩子
    onBeforeMount(() => {
      console.log("----onBeforeMount----");
    });
    onMounted(() => {
      console.log("----onMounted----");
    });
    onBeforeUpdate(() => {
      console.log("----onBeforeUpdate----");
    });
    onUpdated(() => {
      console.log("----onUpdated----");
    });
    onBeforeUnmount(() => {
      console.log("----onBeforeUnmount----");
    });
    onUnmounted(() => {
      console.log("----onUnmounted----");
    });
    // 返回一个对象
    return {
      sum,
    };
  },
};
</script>

<style>
</style>

```
![在这里插入图片描述](https://img-blog.csdnimg.cn/8b8e9dcdfeeb4dfba8af0e3acefca2c1.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
## 10.自定义hook函数
- 什么是hook?——本质是一个函数，把setup函数中使用的Composition APl进行了封装。
- 类似于vue2.x中的mixin。
- 自定义hook的优势:复用代码,让setup中的逻辑更清楚易懂。
![在这里插入图片描述](https://img-blog.csdnimg.cn/b6677cdc45d04fb28212b6e6688fec7a.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

```javascript
import { reactive,onMounted,onBeforeUnmount} from 'vue'
export default function () {
    //实现鼠标“打点”相关的数据
    let point = reactive({
        x:0,
        y:0
    })
    //实现鼠标“打点”相关的方法
    function savePoint(event) {
        point.x = event.pageX
        point.y = event.pageY
        console.log(event.pageX, event.pageY)
    }
    //实现鼠标“打点”相关的生命周期钩子
    onMounted(() => {
        window.addEventListener('click', savePoint)
    })
    onBeforeUnmount(() => {
        window.removeEventListener('click', savePoint)
    })
    return point
}

```

```html
<template>
  <div class="demo">
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="sum++">+1</button>
    <h2>当前点击时鼠标的坐标为: x:{{point.x}}，y:{{point.y}}</h2>
  </div>
</template>

<script>
import { ref } from "vue";
import usePoint from '../hooks/usePoint'
export default {
  name: "demo",
  setup() {
    let sum = ref(0);
    let point = usePoint();
    // 返回一个对象
    return {
      sum,
      point
    };
  },
};
</script>

<style>
</style>
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/ab463ba7f0a0452fa1ffd8bb6273cd6a.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
## 11.toRef
- 作用:创建一个ref对象，其value值指向另一个对象中的某个属性。
	- 语法:`const name = toRef(person ,'name')`
- 应用:要将响应式对象中的某个属性单独提供给外部使用时。
- 扩展:toRefs 与toRef功能一致，但可以批量创建多个ref对象，
	- 语法: toRefs(person)

```html
<template>
  <div class="demo">
    <!-- <h2>姓名:{{ person.name }}</h2>
    <h2>年龄:{{ person.age }}</h2>
    <h2>薪资:{{ person.job.j1.salary }}K</h2>
    <button @click="person.name += '~'">修改姓名</button>
    <button @click="person.age++">增长年龄</button>
    <button @click="person.job.j1.salary++">增长薪资</button> -->
    <h2>{{person}}</h2>
    <h2>姓名:{{ name }}</h2>
    <h2>年龄:{{ age }}</h2>
    <h2>薪资:{{ job.j1.salary }}K</h2>
    <button @click="name += '~'">修改姓名</button>
    <button @click="age++">增长年龄</button>
    <button @click="job.j1.salary++">增长薪资</button>
  </div>
</template>

<script>
import { reactive,ref,toRef,toRefs } from "vue";
export default {
  name: "demo",
  setup() {
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });

    // const x = toRef(person,"name")
    // console.log(x);

    // 返回一个对象
    return {
      ...toRefs(person)

      // 这样写，实际就是将person的值赋给了一个新的变量
      // 并且这个变量不是响应式的
      // name:person.name,
      // age:person.age,
      // salary:person.job.j1.salary,

      // 这样的写法不可取，这样写相当于重新定义了新的属性，与原数据脱节了
      // name:ref(person.name),
      // age:ref(person.age),
      // salary:ref(person.job.j1.salary),

      // name:toRef(person,'name'),
      // age:toRef(person,'age'),
      // salary:toRef(person.job.j1,'salary')

    };
  },
};
</script>

<style>
</style>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/eb6e5122153c4e08ab041091026867c8.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/9ff4514501784d73b5b6e4bbb9ee4269.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/831993397caa44368693a670e4826b4d.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/9650b4a2aa404725afd9e63eef887cfb.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/bc818441b9ae4aad83dbe4ef760340b8.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,color_FFFFFF,t_70)

# 四、其他Composition API
## 1.shallowReactive 与shallowRef
- shallowReactive :只处理对象最外层属性的响应式(浅响应式)。
- shallowRef:只处理基本数据类型的响应式,不进行对象的响应式处理。
- 什么时候使用?
- 如果有一个对象数据，结构比较深,但变化时只是外层属性变化shallowReactive。
- 如果有一个对象数据，后续功能不会修改该对象中的属性，而是生新的对象来替换===> shallowRef。

```html
<template>
  <div class="demo">
    <h2>姓名:{{ name }}</h2>
    <h2>年龄:{{ age }}</h2>
    <h2>薪资:{{ job.j1.salary }}K</h2>
    <button @click="name += '~'">修改姓名</button>
    <button @click="age++">增长年龄</button>
    <button @click="job.j1.salary++">增长薪资</button>
    <h2>当前数值为：{{x.y}}</h2>
    <button @click="x.y++">+1</button>
  </div>
</template>

<script>
import { reactive,ref,toRefs,shallowReactive,shallowRef } from "vue";
export default {
  name: "demo",
  setup() {
    let person = shallowReactive({
    // let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });
    let x = shallowRef({
    // let x = ref({
      y:0
    })

    console.log(x);

    // 返回一个对象
    return {
      x,
      ...toRefs(person)
    };
  },
};
</script>

<style>
</style>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/dd61a3e94dbb4c21958e4d4dec400038.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/7337e5287abe40eab7ebc89a4c6ecc43.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
## 2.readonly 与shallowReadonly
- readonly:让一个响应式数据变为只读的(深只读)。
- shallowReadonly:让一个响应式数据变为只读的(浅只读)。
- 应用场景:不希望数据被修改时。
![在这里插入图片描述](https://img-blog.csdnimg.cn/6f3bb298b8ee41d88465d4b93e169ae4.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/3d6798a324a043a89e14e31eed3ad245.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
## 3.toRaw与markRaw
- tokaw
	- 作用:将一个由reactive生成的响应式对象转为普通对象。
	- 使用场景:用于读取响应式对象对应的普通对象，对这个普通对象的所有操作，不会引起页面更新
- markRaw :
	- 作用:标记一个对象，使其永远不会再成为响应式对象。
	- 应用场景:
    1. 有些值不应被设置为响应式的，例如复杂的第三方类库等。
    2. 当渲染具有不可变数据源的大列表时，跳过响应式转换可以提高性能。

```html
<template>
  <div class="demo">
    <h2>姓名:{{ name }}</h2>
    <h2>年龄:{{ age }}</h2>
    <h2>薪资:{{ job.j1.salary }}K</h2>
    <h2 v-show="person.car">车辆：{{person.car}}</h2>
    <button @click="name += '~'">修改姓名</button>
    <button @click="age++">增长年龄</button>
    <button @click="job.j1.salary++">增长薪资</button>
    <br>
    <button @click="showRawPerson">输出原始的person</button>
    <button @click="addCar">添加一台车</button>
    <button @click="person.car.name='奔驰'">换车</button>
    <button @click="change">改价格</button>
    <h2>当前数值为：{{ x }}</h2>
    <button @click="x++">+1</button>
  </div>
</template>

<script>
import { reactive, ref, toRefs, toRaw, markRaw } from "vue";
export default {
  name: "demo",
  setup() {
    let x = ref(0);
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });
    function showRawPerson() {
      const p = toRaw(person);
      const x1 = toRaw(x)
      console.log(p,x1);
    }

    function addCar() {
      let car = {name:'五菱宏光',price:10}
      // person.car = car
      // markRaw的作用是让此时的car不再是响应式的了
      person.car = markRaw(car)
    }
    function change() {
      person.car.price++
      console.log('person.car.price',person.car.price)
    }
    // 返回一个对象
    return {
      x,
      person,
      ...toRefs(person),
      showRawPerson,
      addCar,
      change
    };
  },
};
</script>

<style>
</style>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/3a18da8fe52a4ed6b4939a8e72d5e282.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

![在这里插入图片描述](https://img-blog.csdnimg.cn/551cada963c841d3a23b3ffcb3c6ee6b.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/f36415ee37ef4eeca22fecbff56a2e75.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,color_FFFFFF,t_70)

## 4.coustomRef
- 作用:创建一个自定义的ref，并对其依赖项跟踪和更新触发进行显式控制。

```html
<template>
  <div>
    <input type="text" v-model="keyword" />
    <h2>{{ keyword }}</h2>
  </div>
</template>

<script>
import { ref, customRef } from "vue";
export default {
  name: "App",
  setup() {
    function myRef(value, time) {
      let timer;
      return customRef((track, trigger) => {
        return {
          get() {
            console.log("读取了keyword的值");
            track(); //通知value追踪数据
            return value;
          },
          set(newValue) {
            console.log("修改了keyword的值");
            clearTimeout(timer)
            timer = setTimeout(() => {
              value = newValue;
              trigger(); //通知Vue重新解析模板
            }, time);
          },
        };
      });
    }
    // 使用Vue3提供的ref定义响应式数据
    // let keyword = ref("hello");
    // 自定义ref
    let keyword = myRef("hello", 3000);
    return { keyword };
  },
};
</script>

<style></style>

```
![在这里插入图片描述](https://img-blog.csdnimg.cn/db1b17238fbf46b4aa3a6e2cedea7634.png?x-oss-procolor_FFFFFF,t_70)
## 5.provide和inject
![在这里插入图片描述](https://img-blog.csdnimg.cn/49ad8fe0b0734de08689cd318e7898b0.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,color_FFFFFF,t_70)

- 作用:实现祖与后代组件间通信
- 套路:父组件有一个provide选项来提供数据，后代组件有一个inject选项来开始使用这些数据
- 具体写法:
1. 祖组件中:

```javascript
setup(){
	let car = reactive({name: '奔驰' ,price:'40万'})
	provide('car',car)
}
```

2. 后代组件中:

```javascript
setup(props ,context){
	const car = inject('car')
	return {car}
}
```

```html
<template>
  <div class="root">
    <h2>我是App组件 {{name}}-{{price}}</h2>
    <Child/>
  </div>
</template>

<script>
import { reactive,toRefs,provide } from "vue";
import Child from './components/Child.vue'
export default {
  name: "App",
  components:{
    Child
  },
  setup() {
    let car = reactive({name:'五菱宏光',price:'10W'});
    provide('car',car)
    return {...toRefs(car)  };
  },
};
</script>

<style>
  .root {
    width: 500px;
    height: 300px;
    background-color: #ccc;
  }
</style>

```

```html
<template>
  <div class="child">
      <h2>我是Child组件</h2>
      <Son/>
  </div>
</template>

<script>
import Son from './Son.vue'
export default {
    name:'Child',
    components:{
        Son
    }
}
</script>

<style>
    .child {
        width: 400px;
        height: 200px;
        background-color: skyblue;
    }
</style>
```

```html
<template>
  <div class="son">
      <h2>我是Son组件 {{car.name}}--{{car.price}}</h2>
  </div>
</template>

<script>
import {inject} from 'vue'
export default {
    name:'Son',
    setup() {
        const car = inject('car')
        return {
            car
        }
    }
}
</script>

<style>
    .son {
        width: 350px;
        height: 100px;
        background-color: orange;
    }
</style>
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/6d6e2ab6eabb4a648beac827f2eb9c9b.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
## 6.响应式数据的判断
- isRef:检查一个值是否为一个ref 对象
- isReactive:检查一个对象是否是由reactive创建的响应式代理. 
- isReadonly:检查一个对象是否是由readonly创建的只读代理
- isProxy:检查一个对象是否是由reactive或者readonly方法创建的代理

```html
<template>
  <div class="root">
    <h2>我是App组件 {{name}}-{{price}}</h2>
    <!-- <Child/> -->
  </div>
</template>

<script>
import { reactive,toRefs, ref, readonly,isRef,isReactive,isReadonly,isProxy } from "vue";
import Child from './components/Child.vue'
export default {
  name: "App",
  components:{
    Child
  },
  setup() {
    let car = reactive({name:'五菱宏光',price:'10W'});
    let x = ref(0)
    let car1 = readonly(car)
    console.log(isRef(x));
    console.log(isReactive(car));
    console.log(isReadonly(car1));
    console.log(isProxy(car1));
    return {...toRefs(car)  };
  },
};
</script>

<style>
  .root {
    width: 500px;
    height: 300px;
    background-color: #ccc;
  }
</style>

```

![在这里插入图片描述](https://img-blog.csdnimg.cn/5001b815a44d4680a3c2325202fda64b.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
# 五、Composition API的优势
## 1.Options API存在的问题
- 使用传统OptionsAPI中，新增或者修改一个需求，就需要分别在data，methods，computed里修改。当数据量大的时候，其对应的方法和计算属性就会变多，但是它们又是各自分开的，数据量大的时候，不便于维护。

## 2.composition APl的优势
- 我们可以更加优雅的组织我们的代码，函数。让相关功能的代码更加有序的组织在一起。在自定义hook函数中，深刻体会到组合式API的优势，通过hook函数，将对应数据的方法、计算属性等全部放在一个js文件中，在组件中直接使用该文件即可，对于某一数据的维护，直接找到对应文件即可进行维护，可维护性明显提高
# 六、新的组件
## 1.Fragment
- 在Vue2中:组件必须有一个根标签
- 在Vue3中:组件可以没有根标签,内部会将多个标签包含在一个Fragment虚拟元素中。
- 好处:减少标签层级,减小内存占用
![在这里插入图片描述](https://img-blog.csdnimg.cn/5eea646a73bd46d4bd6cfd3bbeba8f79.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
## 2.Teleport
- Teleport是一种能够将我们的组件html结构移动到指定位置的技术。

```html
<teleport to="移动位置">
	<div v-if="isShow" class="mask" >
		<div class="dialog">
		<h3>我是一个弹窗</h3>
		<button @click="isShow = false">关闭弹窗</button></div>
	</div>
</teleport>
```
- 定义一个弹窗组件

```html
<template>
  <div>
    <button @click="isShow = true">弹出弹窗</button>
    <div v-if="isShow" class="dialog">
      <h3>我是一个弹窗</h3>
      <h4>内容</h4>
      <h4>内容</h4>
      <h4>内容</h4>
      <button @click="isShow = false">关闭弹窗</button>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
    name:'Dialog',
    setup() {
        let isShow = ref(false)
        return {
            isShow
        }
    }
};
</script>

<style>
.dialog {
  width: 30bpx;
  height: 30bpx;
  background-color: green;
}
</style>
```

```html
<template>
  <div class="root">
    <h2>我是App组件</h2>
    <Child />
  </div>
</template>

<script>
import Child from "./components/Child.vue";
export default {
  name: "App",
  components: {
    Child,
  },
  setup() {
  
  },
};
</script>

<style>
.root {
  background-color: #ccc;
  padding: 10px;
}
</style>

```

```html
<template>
  <div class="child">
    <h2>我是Child组件</h2>
    <Son />
  </div>
</template>

<script>
import Son from "./Son.vue";
export default {
  name: "Child",
  components: {
    Son,
  },
};
</script>

<style>
.child {
  background-color: skyblue;
  padding: 10px;
}
</style>
```

```html
<template>
  <div class="son">
    <h2>我是Son组件</h2>
    <Dialog/>
  </div>
</template>

<script>
import Dialog from './Dialog.vue'
export default {
  name: "Son",
  setup() {
      
  },
  components:{
      Dialog
  }
};
</script>

<style>
.son {
  background-color: orange;
  padding: 10px;
}
</style>
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/194af0c7a50c4270a92eefbf5b454262.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
- 更改后的Dialog组件

```html
<template>
  <div>
    <button @click="isShow = true">弹出弹窗</button>
    <teleport to="body">
      <div v-if="isShow" class="mask">
        <div class="dialog">
          <h3>我是一个弹窗</h3>
          <h4>内容</h4>
          <h4>内容</h4>
          <h4>内容</h4>
          <button @click="isShow = false">关闭弹窗</button>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Dialog",
  setup() {
    let isShow = ref(false);
    return {
      isShow,
    };
  },
};
</script>

<style>
.mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0,0, 0.5);
}

.dialog {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 300px;
  height: 300px;
  background-color: green;
}
</style>
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/3c21cbe3e3f649fba45aaf4cc19e94f9.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/c73f7632ba4045fd930c23e09a44c0dd.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)


## 3.Suspense
- 等待异步组件时渲染一些额外内容，让应用有更好的用户体验
- 使用步骤:
	- 异步引入组件
```javascript
import {defineAsyncComponent} from 'vue'
const Child = defineAsyncComponent(()=>import( ' ./components/Child.vue '))
```

- 使用Suspense包裹组件，并配置好default与fallback

```html
<template>
  <div class="app">
    <h3>我是App组件</h3>
    <Suspense>
      <template v-slot:default>
        <Child />
      </template>
      <template v-slot:fallback>
        <h3>加载中.....</h3>
      </template>
    </Suspense>
  </div>
</template>
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/11b8f7f44ee643fba3407a15f1c545c4.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/b63b452932e54b1b8e9a927d3dbf53dc.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/4c3e480c45cd46d5b391bc88d0a0a656.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/fff063cc90aa458b9fbc5232b71a5161.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,size_16,color_FFFFFF,t_70)

```html
<template>
  <div class="root">
    <h3>我是App组件</h3>
    <!-- <Child /> -->
    <Suspense>
      <template v-slot:default>
        <Child />
      </template>
      <template v-slot:fallback>
        <h3>加载中.....</h3>
      </template>
    </Suspense>
  </div>
</template>

<script>
// import Child from "./components/Child.vue";//静态引入
import { defineAsyncComponent } from "vue";
const Child = defineAsyncComponent(() => import("./components/Child.vue"));//动态引入
export default {
  name: "App",
  components: {
    Child,
  },
};
</script>

<style>
.root {
  background-color: #ccc;
  padding: 10px;
}
</style>

```
![在这里插入图片描述](https://img-blog.csdnimg.cn/e6f863fc71f14cf49e6392811717e28d.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,color_FFFFFF,t_70)

![在这里插入图片描述](https://img-blog.csdnimg.cn/88d2b8a483874cfb9fa2034aeb39bf2f.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N1aWhpZGVPbWVsZXQ=,color_FFFFFF,t_70)

# 七、其他改变
## 1.全局API的转移
-  Vue 2.x有许多全局API和配置。
- 例如:注册全局组件、注册全局指令等。

```javascript
//注册全局组件
vue.component( 'MyButton' , {
	data: () =>({count: 0}),
	template: '<button @click="count++">Clicked {{ count }} times.</button>'})
//注册全局指令
Vue.directive( 'focus', {
	inserted: el => el.focus()
}
```
- Vue3.0中对这些API做出了调整:
- 将全局的API，即:Vue.xxx调整到应用实例(app ) 上

| 2.x全局API（Vue）        | 3.x实例API（app）           |
| ------------------------ | --------------------------- |
| Vue.config.xxx           | app.config.xxx              |
| Vue.config.productionTip | 移除                        |
| Vue.component            | app.component               |
| Vue.directive            | app.directive               |
| Vue.mixin                | app.mixin                   |
| Vue.use                  | app.use                     |
| Vue.prototype            | app.config.globalProperties |

## 2.其他
#### （1） data选项应始终被声明为一个函数

```javascript
//Vue2中,两种都行
data:{}
data(){
	return
}
//Vue3中只能是这种形式
data(){
	return
}
```
#### （2）过度类名的更改:

- vue2.x写法

```css
.v-enter,.v-leave-to {opacity: 0;}
.v-leave,.v-enter-to {opacity: 1;}

```
- vue3.x写法

```css
.v-enter-from,.v-leave-to {opacity: 0;}
.v-leave-from,.v-enter-to {opacity:1;}
```
#### （3）移除keyCode
- 移除keyCode作为v-on的修饰符。同时也不再支持`config.keyCodes`
#### （4）移除v-on.native修饰符
- 也就是说在Vue3中，在组件上定义原生事件不能通过.navtive来解决了
- 解决的方法
1. 父组件中绑定事件

```html
<my-component
	v-on:close="handleComponentEvent"
	v-on:click= "handleNativeclickEvent"
/>
```

- 子组件中声明自定义事件

```html
<script>
	export default {
	   //没有声明的事件会当作原生事件
		emits: ['close']
	}
</script>
```
#### （5）移除过滤器(filter)
- 过滤器虽然这看起来很方便，但它需要一个自定义语法，打破大括号内表达式是“只是JavaScript"的假设，这不仅有学习成本，而且有实现成本!建议用方法调用或计算属性去替换过滤器。

#### （6）其他更加细致的改变请参考官方文档：[https://v3.cn.vuejs.org/](https://v3.cn.vuejs.org/)