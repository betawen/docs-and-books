# Vue

> v-bind
>
> v-if
>
> v-for
>
> v-on (v-on:click)
>
> v-model

### Vue实例

- 数据与方法

> 响应式，Object.freeze(obj)阻止修改
>
> $watch等实例属性与方法

- 生命周期钩子（实例）

> create
>
> mounted
>
> updated
>
> destroyed
>
> this上下文指向调用它的vue实例
>
> ![image-20190219115703256](/Users/mac/Library/Application Support/typora-user-images/image-20190219115703256.png)

### 模板语法

？ DOM

- 插值

> 文本 =>    Mustache语法：{{}}
>
> 原始HTML =>    v-html
>
> ![image-20190219120234957](/Users/mac/Library/Application Support/typora-user-images/image-20190219120234957.png)
>
> 特性 =>    v-bind
>
> JavaScript表达式 =>    支持单个表达式
>
> ![image-20190219120457698](/Users/mac/Library/Application Support/typora-user-images/image-20190219120457698.png)

- 指令

> 参数 =>    v-bind响应式更新HTML特性；v-on监听DOM事件
>
> 动态参数 =>    v-bind:[js表达式]；v-on:[eventName]；字符串类型，异常为null，其他警告
>
> 修饰符 =>    修饰符 (modifier) 是以半角句号 `.` 指明的特殊后缀，用于指出一个指令应该以特殊方式绑定

- 缩写

> v-bind:href => :href
>
> V-on:click => @click

### 计算属性和侦听器

- 计算属性

> 任何复杂逻辑都应当使用计算属性
>
> 基础例子 =>    computed: { now: function () { } }
>
> 计算属性VS侦听属性 =>    watch
>
> setter =>    get: func 和 set: func

- 侦听器

> 除了 `watch` 选项之外，您还可以使用命令式的 [vm.$watch API](https://cn.vuejs.org/v2/api/#vm-watch)。

### Class与Style绑定

- 绑定HTML class

> 对象语法 => `<div v-bind:class="{ active: isActive }"></div>`
>
> 数组语法 => `<div v-bind:class="[activeClass, errorClass]"></div>`
>
> 用在组件上 => `Vue.component('my-component', {template: '<p class="foo bar">Hi</p>'})`

- 绑定内敛样式

> 对象语法 => `<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>`
>
> 数组语法 => `<div v-bind:style="[baseStyles, overridingStyles]"></div>`
>
> 自动添加前缀 => 当 `v-bind:style` 使用需要添加[浏览器引擎前缀](https://developer.mozilla.org/zh-CN/docs/Glossary/Vendor_Prefix)的 CSS 属性时，如 `transform`，Vue.js 会自动侦测并添加相应的前缀。
>
> 多重值 => `<div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></div>`

### 条件渲染

- [v-if](https://cn.vuejs.org/v2/guide/conditional.html#v-if)

- - [在<template>元素上使用v-if条件渲染分组](https://cn.vuejs.org/v2/guide/conditional.html#在-lt-template-gt-元素上使用-v-if-条件渲染分组)
  - [v-else](https://cn.vuejs.org/v2/guide/conditional.html#v-else)
  - [v-else-if](https://cn.vuejs.org/v2/guide/conditional.html#v-else-if)
  - [用 key 管理可复用的元素](https://cn.vuejs.org/v2/guide/conditional.html#%E7%94%A8-key-%E7%AE%A1%E7%90%86%E5%8F%AF%E5%A4%8D%E7%94%A8%E7%9A%84%E5%85%83%E7%B4%A0)

- [v-show](https://cn.vuejs.org/v2/guide/conditional.html#v-show)

- [v-if vs v-show](https://cn.vuejs.org/v2/guide/conditional.html#v-if-vs-v-show)

- [v-if 与 v-for 一起使用](https://cn.vuejs.org/v2/guide/conditional.html#v-if-%E4%B8%8E-v-for-%E4%B8%80%E8%B5%B7%E4%BD%BF%E7%94%A8)

### 列表渲染

- [用 v-for 把一个数组对应为一组元素](https://cn.vuejs.org/v2/guide/list.html#%E7%94%A8-v-for-%E6%8A%8A%E4%B8%80%E4%B8%AA%E6%95%B0%E7%BB%84%E5%AF%B9%E5%BA%94%E4%B8%BA%E4%B8%80%E7%BB%84%E5%85%83%E7%B4%A0)

- [一个对象的 v-for](https://cn.vuejs.org/v2/guide/list.html#%E4%B8%80%E4%B8%AA%E5%AF%B9%E8%B1%A1%E7%9A%84-v-for)

- [key](https://cn.vuejs.org/v2/guide/list.html#key)

- [数组更新检测](https://cn.vuejs.org/v2/guide/list.html#%E6%95%B0%E7%BB%84%E6%9B%B4%E6%96%B0%E6%A3%80%E6%B5%8B)

- - [变异方法](https://cn.vuejs.org/v2/guide/list.html#%E5%8F%98%E5%BC%82%E6%96%B9%E6%B3%95)
  - [替换数组](https://cn.vuejs.org/v2/guide/list.html#%E6%9B%BF%E6%8D%A2%E6%95%B0%E7%BB%84)
  - [注意事项](https://cn.vuejs.org/v2/guide/list.html#%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9)

- [对象更改检测注意事项](https://cn.vuejs.org/v2/guide/list.html#%E5%AF%B9%E8%B1%A1%E6%9B%B4%E6%94%B9%E6%A3%80%E6%B5%8B%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9)

- [显示过滤/排序结果](https://cn.vuejs.org/v2/guide/list.html#%E6%98%BE%E7%A4%BA%E8%BF%87%E6%BB%A4-%E6%8E%92%E5%BA%8F%E7%BB%93%E6%9E%9C)

- [一段取值范围的 v-for](https://cn.vuejs.org/v2/guide/list.html#%E4%B8%80%E6%AE%B5%E5%8F%96%E5%80%BC%E8%8C%83%E5%9B%B4%E7%9A%84-v-for)

- [v-for on a <template> ](https://cn.vuejs.org/v2/guide/list.html#v-for-on-a-lt-template-gt)

- [v-for with v-if](https://cn.vuejs.org/v2/guide/list.html#v-for-with-v-if)

- [一个组件的 v-for](https://cn.vuejs.org/v2/guide/list.html#%E4%B8%80%E4%B8%AA%E7%BB%84%E4%BB%B6%E7%9A%84-v-for)

### 事件处理

- 监听事件

> v-on监听DOM事件并处理

- 事件处理方法

> v-on监听DOM事件并调用函数处理

- 内联处理器中的方法

> v-on调用函数

### 表单输入绑定

- [基础用法](https://cn.vuejs.org/v2/guide/forms.html#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95)

- - [文本](https://cn.vuejs.org/v2/guide/forms.html#%E6%96%87%E6%9C%AC)
  - [多行文本](https://cn.vuejs.org/v2/guide/forms.html#%E5%A4%9A%E8%A1%8C%E6%96%87%E6%9C%AC)
  - [复选框](https://cn.vuejs.org/v2/guide/forms.html#%E5%A4%8D%E9%80%89%E6%A1%86)
  - [单选按钮](https://cn.vuejs.org/v2/guide/forms.html#%E5%8D%95%E9%80%89%E6%8C%89%E9%92%AE)
  - [选择框](https://cn.vuejs.org/v2/guide/forms.html#%E9%80%89%E6%8B%A9%E6%A1%86)

- [值绑定](https://cn.vuejs.org/v2/guide/forms.html#%E5%80%BC%E7%BB%91%E5%AE%9A)

- - [复选框](https://cn.vuejs.org/v2/guide/forms.html#%E5%A4%8D%E9%80%89%E6%A1%86-1)
  - [单选按钮](https://cn.vuejs.org/v2/guide/forms.html#%E5%8D%95%E9%80%89%E6%8C%89%E9%92%AE-1)
  - [选择框的选项](https://cn.vuejs.org/v2/guide/forms.html#%E9%80%89%E6%8B%A9%E6%A1%86%E7%9A%84%E9%80%89%E9%A1%B9)

- [修饰符](https://cn.vuejs.org/v2/guide/forms.html#%E4%BF%AE%E9%A5%B0%E7%AC%A6)

- - [.lazy](https://cn.vuejs.org/v2/guide/forms.html#lazy)
  - [.number](https://cn.vuejs.org/v2/guide/forms.html#number)
  - [.trim](https://cn.vuejs.org/v2/guide/forms.html#trim)

- [在组件上使用 v-model](https://cn.vuejs.org/v2/guide/forms.html#%E5%9C%A8%E7%BB%84%E4%BB%B6%E4%B8%8A%E4%BD%BF%E7%94%A8-v-model)

### 组件基础

- 基本示例

> `Vue.component('component-example', { data: { return ; } , template:  } )
>
> data必须是一个函数

- 组件的组织

> 嵌套的组件树
>
> ![Component Tree](https://cn.vuejs.org/images/components.png)
>
> 全局注册和局部注册

- 通过[prop](https://cn.vuejs.org/v2/guide/components-props.html)向子组件传递数据

> 标志内容的特性

- 单个跟元素

> 组件重构
>
> ![image-20190219181422951](/Users/mac/Library/Application Support/typora-user-images/image-20190219181422951.png)

- 监听子组件事件

> v-on emit
>
> 使用事件抛出一个值 => 其他函数可以直接使用emit 和 event或者其他需要参数的函数
>
> 通过v-model读取获取数据并绑定
>
> [自定义事件](https://cn.vuejs.org/v2/guide/components-custom-events.html)

- 通过插槽分发内容

> slot
>
> [插槽](https://cn.vuejs.org/v2/guide/components-slots.html)

- 动态组件

> `<!-- 组件会在 `currentTabComponent` 改变时改变 -->
> <component v-bind:is="currentTabComponent"></component>`
>
> `currentTabComponent` 可以包括已注册组件的名字，或一个组件的选项对象
>
> [动态和异步组件](https://cn.vuejs.org/v2/guide/components-dynamic-async.html)

- 解析DOM的注意事项

> 有些 HTML 元素，诸如 `<ul>`、`<ol>`、`<table>` 和 `<select>`，对于哪些元素可以出现在其内部是有严格限制的。而有些元素，诸如 `<li>`、`<tr>` 和 `<option>`，只能出现在其它某些特定的元素内部。
>
> is 特性
>
> 需要注意的是**如果我们从以下来源使用模板的话，这条限制是不存在的**：
>
> - 字符串 (例如：`template: '...'`)
> - [单文件组件 (`.vue`)](https://cn.vuejs.org/v2/guide/single-file-components.html)
> - [``](https://cn.vuejs.org/v2/guide/components-edge-cases.html#X-Templates)

## 深入了解组件

### 组件注册

- 组件名

> 组件命名规则 => kebab：-分割或驼峰规则PascalCase

- 全局注册

> 互为子组件

- 局部组件

> 限制：不能互为子组件，除非声明时为子组件
>
> 用JavaScript对象声明

- 模块系统

> 使用局部组件 => import 
>
> 基础组件(Base,App,V)的自动化全局注册 => require.context
>
> 记住**全局注册的行为必须在根 Vue 实例 (通过 new Vue) 创建之前发生**。[这里](https://github.com/chrisvfritz/vue-enterprise-boilerplate/blob/master/src/components/_globals.js)有一个真实项目情景下的示例。