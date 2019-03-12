ES6阅读笔记（一）

- Babel转码器

  - 将es6代码转为es5代码

  - 配置文件.babelrc

  > 该文件用来设置转码规则和插件，基本格式如下。
  >
  > ```javascript
  > {
  >   "presets": [],
  >   "plugins": []
  > }
  > ```
  >
  > `presets`字段设定转码规则，官方提供以下的规则集，你可以根据需要安装。
  >
  > ```bash
  > # 最新转码规则
  > $ npm install --save-dev @babel/preset-env
  > 
  > # react 转码规则
  > $ npm install --save-dev @babel/preset-react
  > ```
  >
  > 然后，将这些规则加入`.babelrc`。
  >
  > ```javascript
  >   {
  >     "presets": [
  >       "@babel/env",
  >       "@babel/preset-react"
  >     ],
  >     "plugins": []
  >   }
  > ```
  >
  > 注意，以下所有 Babel 工具和模块的使用，都必须先写好`.babelrc`。

- let和const

  - 先声明后使用

  - 暂时性死区

  > ```javascript
  > var tmp = 123;
  > 
  > if (true) {
  >   tmp = 'abc'; // ReferenceError
  >   let tmp;
  > }
  > ```
  >
  > typeof不再100%安全

  - 块级作用域

  > 变量的安全性得到了提高
  >
  > 函数声明 ：避免块级作用域中声明函数，有必要的话用表达式

  - const命令

  > 声明常量，一旦声明就必须赋值
  >
  > 本质是内存所存的数据不能被改动
  >
  > 冻结对象，`Object.freeze`

  - 声明方法

  > `import` ,`class`, `const`, `let`, `function`

  - 顶层对象的属性

  > window
  >
  > 问题：是一个实体，与全局变量挂钩
  >
  > global
  >
  > 问题：各种实现不统一
  >
  > 关于this
  >
  > 同一段代码为了能够在各种环境，都能取到顶层对象，现在一般是使用`this`变量，但是有局限性。
  >
  > - 全局环境中，`this`会返回顶层对象。但是，Node 模块和 ES6 模块中，`this`返回的是当前模块。
  > - 函数里面的`this`，如果函数不是作为对象的方法运行，而是单纯作为函数运行，`this`会指向顶层对象。但是，严格模式下，这时`this`会返回`undefined`。
  > - 不管是严格模式，还是普通模式，`new Function('return this')()`，总是会返回全局对象。但是，如果浏览器用了 CSP（Content Security Policy，内容安全策略），那么`eval`、`new Function`这些方法都可能无法使用。

- 变量的解构赋值

  > **数组的结构赋值**
  >
  > - 数组的嵌套赋值
  > - 只要某种数据结构具有 Iterator 接口，都可以采用数组形式的解构赋值。
  >
  > **对象的解构赋值**
  >
  > - 注意区分模式与变量
  > - 对象的结构赋值可以指定默认值
  > - ![image-20190312181137287](/Users/mac/Library/Application Support/typora-user-images/image-20190312181137287.png)
  > - ![image-20190312181214803](/Users/mac/Library/Application Support/typora-user-images/image-20190312181214803.png)
  >
  > **字符串的解构赋值**
  >
  > - 字符串被转为数组对象
  >
  > 数值和布尔值的解构赋值
  >
  > - 先转为对象（数值和布尔值都有toString属性
  >
  > **函数参数的解构赋值**
  >
  > - 函数参数的解构赋值
  > - 函数调用时return的解构赋值（于是可返回多值）
  >
  > **圆括号问题**
  >
  > ![image-20190312182731055](/Users/mac/Library/Application Support/typora-user-images/image-20190312182731055.png)

- 字符串扩展

  - Unicode表示法
  - codePointAt() / charAt()
  - String.fromCodePoint()
  - 字符串遍历接口`for ...of`
  - `normalize()`