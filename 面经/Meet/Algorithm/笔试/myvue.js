function MyVue(options){// 创建构造函数MyVue,并接收对象结构体options
    this.$el=document.querySelector(options.el);// 指定挂载元素
    this.$data=options.data;// 存放你的数据内容
    this.$methods=options.methods;// 存放设你的方法
    this.binding={};// 所有数据相关的订阅者对象都存放于此。最终结构为{数据属性:[订阅者对象，订阅者对象……]}
    this.observer();// 调用观察者，对数据进行劫持
    this.compile(this.$el);// 对元素指令进行解析，订阅者也是在此处创建的
}
MyVue.prototype.observer=function(){// 观察者
    let value="";// 定义用于存放数据属性值的变量value
    for(let key in this.$data){ // 遍历数据对象
        value=this.$data[key];// 对象属性值
        this.binding[key]=[];// 数据订阅者初始化,是一个数组，
        let binding=this.binding[key];// 用于存放本数据相关的所有订阅者，初始为[]
        Object.defineProperty(this.$data,key,{// 开始设置劫持
            get(){
                return value;// 读取值为value
            },
            set(v){// v为设置的值
                if(v!==value){// 当设置的值与当前值不相等时
                    value=v;// 将读取值更新为v
                    binding.forEach(watcher=>{
                        watcher.update();// 通知与本数据相关的订阅者们进行视图更新
                    })
                }
            }
        })
    }
}
MyVue.prototype.compile=function(el){// 解析器
    let nodes=el.children;// 获得所有子节点
    for(let i=0;i<nodes.length;i++){// 对子节点进行遍历
        let node=nodes[i];// 具体节点
        if(node.children.length>0)// 判断是否具有子节点
            this.compile(node);// 如果有子点进行递归操作
        if(node.hasAttribute("v-on:click")){// 该节点是否拥有v-on指令
            let attrVal=node.getAttribute("v-on:click");// 得到指令对应的方法名
            // 为元素绑定click事件，事件方法为$methods下的方法，并将其this指向this.$data
            node.addEventListener("click",this.$methods[attrVal].bind(this.$data))
        }
        if(node.hasAttribute("v-model")){// 该节点是否拥有v-model指令
            let attrVal=node.getAttribute("v-model");// 获得指令对应的数据属性
            node.addEventListener("input",((i)=>{// 为指令添加input事件
                this.binding[attrVal].push(new Watcher(node,"value",this,attrVal));// 为该数据添加订阅者
                return ()=>{
                    this.$data[attrVal]=nodes[i].value;// 更新$data的属性值，会在观察者中进行劫持
                }
            })(i))
        }
        if(node.hasAttribute("v-html")){// 该节点是否拥有v-html指令
            let attrVal=node.getAttribute("v-html");// 获得指令对应的数据属性
            this.binding[attrVal].push(new Watcher(node,"innerHTML",this,attrVal));
        }
        if(node.hasAttribute("v-text")){// 该节点是否拥有v-text指令
            let attrVal=node.getAttribute("v-text");// 获得指令对应的数据属性
            this.binding[attrVal].push(new Watcher(node,"innerText",this,attrVal));
        }
    }
}
function Watcher(el,attr,vm,val){// 观察者
    this.el=el;     // 指令所在的元素
    this.attr=attr;// 绑定的属性名
    this.vm=vm;    // 指令所在实例
    this.val=val;  // 指令的值
    this.update(); // 更新视图view
}
Watcher.prototype.update=function(){
    this.el[this.attr]=this.vm.$data[this.val];
}