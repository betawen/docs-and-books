# Vue.js核心（一）

## 组件系统

## 双向绑定

#### 原生js实现双向数据绑定

MVVM —— Vue.js：相应的数据绑定系统（数据改变DOM自动改变）

### 实现原理

从`model --> view`的绑定，借助了[Object.defineProperty()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)方法，它可以定义访问器属性，并且**通过getter和setter函数对数据的读写进行监听**。

从`view --> model`的绑定，实质是通过**监听DOM的keyup、change等事件，通过事件处理函数来更新底层数据**。

