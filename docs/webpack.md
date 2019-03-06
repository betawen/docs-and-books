## webpack

- 为什么需要webpack/grunt等？

  > 装换ES6语法（浏览器支持）
  >
  > 转换JSX（react native）
  >
  > CSS前缀补全/预处理器（移动端支持）
  >
  > 压缩混淆，隐藏代码逻辑
  >
  > 图片压缩（自动添加）

  js的Makefile

- 执行过程

  > ![image-20190305163115233](/Users/mac/Library/Application Support/typora-user-images/image-20190305163115233.png)
  >
  > 

- 对比grunt、gulp和webpack

  > ![image-20190305163224701](/Users/mac/Library/Application Support/typora-user-images/image-20190305163224701.png)
  >
  > ![image-20190305163415507](/Users/mac/Library/Application Support/typora-user-images/image-20190305163415507.png)
  >
  > ![image-20190305163514005](/Users/mac/Library/Application Support/typora-user-images/image-20190305163514005.png)

- 分析webpack

  > - 初级分析-内置的.stats；启用.stats
  >
  > ![image-20190305163741938](/Users/mac/Library/Application Support/typora-user-images/image-20190305163741938.png)
  >
  > - 速度分析-使用speed-measure-webpack-plugin
  >
  > ![image-20190305163956187](/Users/mac/Library/Application Support/typora-user-images/image-20190305163956187.png)
  >
  > - 体积分析-使用webpack-bundle-analyzer（使用CDN优化体积）
  >
  > 
  >
  > ![image-20190305164048024](/Users/mac/Library/Application Support/typora-user-images/image-20190305164048024.png)

- 速度优化策略

  - 使用webpack4，内核优化（关注社区）
  >
  > ![image-20190305164427144](/Users/mac/Library/Application Support/typora-user-images/image-20190305164427144.png)
  >
  - 多进程/多实例构建
  >
  > ![image-20190305164649545](/Users/mac/Library/Application Support/typora-user-images/image-20190305164649545.png)
  >
  > 提示：thread不必写死，会自适应
  >
  > ![image-20190305164846063](/Users/mac/Library/Application Support/typora-user-images/image-20190305164846063.png)
  >
  > 并行压缩，nodejs的进程模型
  >
  > ![image-20190305165040247](/Users/mac/Library/Application Support/typora-user-images/image-20190305165040247.png)
  >
  - 分包（基础库和基础组件形成公共包，使用公用CDN等）
  >
  >设置externals
  >
  >![image-20190305165247331](/Users/mac/Library/Application Support/typora-user-images/image-20190305165247331.png)
  >
  >正常不需要重新预编译
  >
  >![image-20190305165427345](/Users/mac/Library/Application Support/typora-user-images/image-20190305165427345.png)
  - 缓存，基本不变的资源不必重复解析
  > ![image-20190305165545881](/Users/mac/Library/Application Support/typora-user-images/image-20190305165545881.png)

  - 缩小构建目标

  > ![image-20190305165629939](/Users/mac/Library/Application Support/typora-user-images/image-20190305165629939.png)

- 体积优化策略

  - Scope Hoisting

    > 解决大量重复必报问题（考虑依赖）
    >
    > ![image-20190305165904190](/Users/mac/Library/Application Support/typora-user-images/image-20190305165904190.png)
    >
    > ![image-20190305165924195](/Users/mac/Library/Application Support/typora-user-images/image-20190305165924195.png)

  - Tree-shaking（不用的方法shaking掉）

    > ![image-20190305170012432](/Users/mac/Library/Application Support/typora-user-images/image-20190305170012432.png)

  - 公共资源分离

    > 提取公共JS Truck
    >
    > ![image-20190305170159430](/Users/mac/Library/Application Support/typora-user-images/image-20190305170159430.png)
    >
    > 

  - 图片压缩

    > ![image-20190305170347179](/Users/mac/Library/Application Support/typora-user-images/image-20190305170347179.png)

  - 动态Polyfill（babel-polyfill）

