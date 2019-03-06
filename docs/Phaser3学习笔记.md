## Phaser3

- 什么是phaser

  H5游戏框架，支持WebGL和Canvas

  浏览器，第三方工具转为iOS、Android支持的Native APP

  JavaScript和typescript开发

### 关于Phaser3 

#### 告别Pixi.js

#### 更便捷的层级设计-setDepth
Phaser2通过game.sprite.add创建游戏顺序先后来决定层级关系，越往后创建的层级越大，解决方案有：
**1.预先创建Group**

- game.add.group()原先创建好Group来初始化层级，Group子元素层级由Group来决定，不适合单元素

  ```javascript
  `let backLayer = game.add.group()let middleLayer = game.add.group()let frontLayer = game.add.group()middleLayer.create(0, 0, 'middle')backLayer.create(0, 0, 'back')frontLayer.create(0, 0, 'front')`
  ```

**2.设置子元素层级**

- 设置父元素下有设置子元素层级的 setChildIndex()，交换两个子元素层级的 swapChildren()、swap()。

  ```javascript
  let bunny1 = game.add.sprite(0, 0, 'bunny1')
  let bunny2 = game.add.sprite(0, 0, 'bunny2')
  
  // 设置 bunny1 的层级为 3
  game.world.setChildIndex(bunny1, 3)
  
  // 交换 bunny1 和 bunny2 的层级
  game.world.swapChildren(bunny1, bunny2)
  game.world.swap(bunny1, bunny2)
  ```

**3.层级指定bringToTop，置底sendToBack**

- 也有简单粗暴的将某个游戏对象置顶、置底层级的 `bringToTop()`、`sendToBack()` 方法。

  ```javascript
  // 将 bunny1 置顶
  game.world.bringToTop(bunny1)
  
  // 将 bunny2 置底
  game.world.sendToBack(bunny2)
  ```

**4.新增setDepth方法**

- Phaser 3 中加入了 setDepth，只需给游戏对象调用 setDepth() 方法或直接设置 depth 属性即可，就像在 CSS 中设置 z-index 那样，轻松的控制场景中所有游戏对象的层级。

  ```javascript
  let bunny = game.add.sprite(0, 0, 'bunny')
  bunny.depth = 1
  ```

  > CSS的z-index
  >
  > 对于一个已经定位的元素（即position属性值是非static的元素），`z-index` 属性指定：
  >
  > 1. 元素在当前堆叠上下文中的堆叠层级。
  > 2. 元素是否创建一个新的本地堆叠上下文。

#### 功能更丰富的——Camera

**1.3D相机**

- 以插件的形式存在，需要额外引入 `camera3d.min.js` 文件，可以实现 3D 的形变效果。
- [3D 相机 - 在线例子](http://labs.phaser.io/edit.html?src=src\camera\3D%20camera\blend%20cube.js)（从初始化游戏到配置相机并初始化和应用相机）

**2.缩放相机**

- 可以对相机的距离进行拉伸
- [缩放相机 - 在线例子](http://labs.phaser.io/view.html?src=src\camera\zoom%20to.js)

**3.旋转相机**

- 对相机进行旋转
- [旋转相机 - 在线例子](http://labs.phaser.io/edit.html?src=src\camera\rotate%20camera.js)

**4.多组相机**

- 创建多组相机，相机可以彼此相邻，也可以相互定位。
- [多组相机 - 在线例子](http://labs.phaser.io/view.html?src=src\camera\16%20camera%20test.js)

#### Scenes VS States

- 状态机，每个游戏有多个状态，创建、销毁等
- Scenes 可以被认为是一个独立的世界，它拥有自己的相机系统、显示列表、更新步骤、事件处理、物理系统等等

#### Scale Manager屏幕适配更新

- 官方对 Scale Manager 进行更新，使用较新的缩放方法（例如：CSS 属性 contains）来重新编写这块代码功能，还会为不支持此功能的浏览器提供一些兼容方案，并且会加入 iOS、Android 全屏 API 的支持。
- [Scale Manager - 在线例子](http://labs.phaser.io/index.html?dir=scalemanager/&q=)

#### 游戏对象结构更平面

- Phaser 2 使用了树状结构，有一个根对象，游戏中所有的游戏对象都来自于根对象，如果是组对象下面有子对象，子对象下有更多的子对象，在 Phaser 3 中则是完全线性的结构，游戏对象不会包含其他对象，并且对象组不具有任何的位置或属性。

#### 灵活性更强的Tween动画

- Phaser 3 相比 Phaser 2 带来了更灵活、易用的 Tween 动画配置，下面是关于 Phaser 3 Tween 中可配置的参数一览。

  ```javascript
  // Phaser 3 可配置参数一览
  this.tweens.add({
      targets: [sprite1, sprite2, sprite3], // 允许单个或多个游戏对象
      paused: false, // 初始是否为暂停状态
      callbackScope: tween,
      
      onStart: function() { }, // 开始时执行回调
      onStartScope: callbackScope,
      onStartParams: [],
      
      delay: 0, // 第一次播放前的停顿时长
      
      duration: 1000, // 动画总时长
      ease: 'Linear', // 提供了多达 44 种动画速度曲线
      easeParams: null,
      
      onUpdate: function() { }, // 补间更新时执行回调
      onUpdateScope: callbackScope,
      onUpdateParams: [],
  
      hold: 0, // 反向播放前停顿的时长
      yoyo: false, // 是否反向播放
      flipX: false, // 动画结束后，元素是否 X 轴翻转
      flipY: false, // 动画结束后，元素是否 Y 轴翻转
      onYoyo: function() { }, // 反向播放时执行回调
      onYoyoScope: callbackScope,
      onYoyoParams: [],
      
      repeat: 0, //重复播放次数，-1 : infinity
      onRepeat: function() { } // 重复播放时执行回调
      onRepeatScope: callbackScope,
      onRepeatParams: [],
      repeatDelay: 0, // 重复播放之前停顿的时长
  
      loop: -1, // 循环次数 -1 : infinity
      onLoop: function() { }, // 循环播放时执行回调
      onLoopScope: callbackScope,
      onLoopParams: [],
      loopDelay: 0, // 停顿多久的时长进入下一次循环
  	
      completeDelay: 0, // 动画完成前的停顿时间
      onComplete: function () {}, // 动画结束后执行回调
      onCompleteScope: callbackScope,
      onCompleteParams: [],
      
      // 属性值
      x: '+=600',
      y: 500,
      rotation: ...,
      angle: ...,
      alpha: ...,
      // ...
      
      // 或者
      props: {
          x: { value: '+=600', duration: 3000, ease: 'Power2' }
          y: { value: '500', duration: 1500, ease: 'Bounce.easeOut' }
      },
      
      // 又或者
      props: {
          x: {
              duration: 400,
              yoyo: true,
              repeat: 8,
              ease: 'Sine.easeInOut',
              value: {
                  getEnd: function (target, key, value) {
                      destX -= 30
                      return destX
                  },
                  getStart: function (target, key, value) {
                      return value + 30
                  }    
              }
          },
          ....
      },
      offset: null, 
      useFrames: false, // 使用帧或是毫秒
  })
  ```

- 代码详解

  **1、动画各阶段的 Delay**

  Phaser 3 在动画的完成、重复、循环、反向这四个阶段分别加入了 Delay 方法来让开发者控制，大大增加了动画编辑的灵活性。

  `completeDelay`：在动画结束前需要暂停的时间
  `repeatDelay`：循环动画开始前需要暂停的时间
  `loopDelay`：延迟多久进入下一个循环
  `hold`：动画在反向播放前的暂停时间

  **2、反向播放时回调 onYoyo**

  允许在动画进行反向播放时执行回调。

  ```javascript
  this.tweens.add({
      onYoyo: function() { }
  })
  ```

  **3、针对性配置 props**

  可以针对每一个属性值进行单独的配置，例如动画时长、速度曲线等等。

  ```javascript
  this.tweens.add({
      props: {
          x: { value: '+=600', duration: 3000, ease: 'Power2' },
          y: { value: '500', duration: 1500, ease: 'Bounce.easeOut' }
      }
  })
  ```

  **4、允许动画执行前后赋值 getEnd、getStart**

  `getEnd()`、`getStart()` 允许在动画开始阶段和结束阶段设置补间动画的值。

  例如我希望游戏对象开始前在原来的位置先减 20px，再从这个位置向右移动 200 px。

  ```javascript
  this.bunny = this.add.sprite(0, 0, 'bunny')
  
  this.tweens.add({
  	tragets: [this.bunny],
      props: {
          x: {
              duration: 2000,
              value: {
                  getStart: function(target, key, value) {
                  	// target -> 目标对象
                  	// key -> 当前属性值
                  	// value -> 当前的值
                  	return value - 20
  				},
  				getEnd: function(target, key, value) {
                      return value + 200
  				}
              }
          }
      }
  })
  ```

#### 游戏对象翻转后缩放问题

- 在 Phaser 2 中，如果需要对一个游戏对象进行水平或垂直的镜像翻转，通常使用 `Sprite.scale.x = -1` 来翻转游戏对象，这样就造成翻转后无法缩放的尴尬情况

- 在 Phaser 3 中改善了该问题，提供了 `flipX` 和 `flipY` 属性专门来实现镜像翻转功能，这样既可以翻转又可以旋转游戏对象，另外无论游戏对象原点无论设置的值为多少，都始终以游戏对象的中心翻转。

- ```javascript
  `let bunny = game.add.sprite(100, 100, 'bunny')bunny.flipX = -1bunny.scale.x = .9`
  ```

#### Spine骨骼动画支持

在 Phaser 3 中将支持 Spine 创建 2D 骨骼动画，骨骼动画是将图片绑定到骨骼上，然后再控制骨骼来实现动画，2D 骨骼动画相比传统的逐帧动画优势在于：

- **更小的文件体积：**因为传统逐帧动画需要提供每一帧图片，Spine 需要保存动画数据以及骨骼所需的图片。
- **美术需求：**Spine 动画需要的美术资源更少。
- **流畅性：**Spine 动画使用差值算法计算中间帧，动画总能保持流畅效果。
- **换肤：**图片绑定在骨骼上，能轻松实现换肤效果。
- **混合动画：**允许多个动画进行混合，比如一个游戏人物一边开枪，同时跑动、跳跃、旋转。
- **程序控制：**可以通过代码来控制骨骼动画的状态。

Phaser Spine 会以一个独立的插件形式存在，像 Camera 3D 那样，并且 Phaser Spine 将会支持官方支持的所有功能。[Phaser Spine 在线例子](http://labs.phaser.io/view.html?src=src/spine/canvas%20test%201.js)

#### Anchor/Origin

`anchor` 在 Pixi 中是最容易被误解的属性之一，大多数人认为 `anchor` 是设置一个注册点，实际上它是设置了纹理偏移量，因此在 Phaser 3 中取消了该属性，取而代之的是 `originX` 、 `originY` 和 `setOrigin(x, y)` 方法。

在 Phaser 3 中所有的游戏对象现在都是默认中心对齐，类似于 Phaser 2 设置了 `anchor(0.5)` 方法，如果希望以左上角来定位可以通过 `setOrigin(0)` 方法来设置游戏对象。

#### Phaser Matter Collision插件

在 Phaser 2 中已集成了三款物理引擎，分别是：Arcade、P2 和 Ninja，在 Phaser 3 中又新增了对 Matter.js 物理引擎的支持，Matter.js 是一款非常优秀的物理引擎，你可以到 [Github - Matter.js](https://github.com/liabru/matter-js) 查看所有的 Demo 案例。官方为了可以更轻松的管理 Phaser 游戏引擎和 Matter.js 物理引擎的碰撞，在 Phaser 3 上对 Matter.js 的 API 封装推出了 [phaser-matter.collision-plugin](https://github.com/mikewesthad/phaser-matter-collision-plugin) 插件来降低开发成本。[Phaser Matter Collision - 在线例子](https://codesandbox.io/s/0o0917m23l?module=%2Fjs%2Findex.js)

```javascript
const player = this.matter.add.sprite(0, 0, 'player')
const trapDoor = this.matter.add.sprite(200, 0, 'door')

this.matterCollision.addOnCollideStart({
    objectA: player,
    objectB: trapDoor,
    callback: () => console.log('Player touched door!')
})
```

#### 新增Shape游戏对象

扩展了11中类型的Shape，比之前的Graphics对象性能更好

**1.圆弧**

- 允许你绘制圆形或部分圆形，可以设置开始和结束的角度，并且可以设置圆形平滑程度。
- [圆弧 - 在线例子](http://labs.phaser.io/view.html?src=src%5Cgame%20objects%5Cshapes%5Carc.js&v=128)（包含缩放和折叠等）

**2.椭圆**

- 允许创建不同宽高的椭圆形，可以被设置为填充或描边，同样可以设置椭圆的平滑程度。
- [椭圆 - 在线例子](http://labs.phaser.io/view.html?src=src%5Cgame%20objects%5Cshapes%5Cellipse.js&v=128)

**3.网格**

- 网格是非常实用的，可以帮助你对齐游戏中的元素，例如背景、人物、图标等等。网格可以设置每个单元格的宽高，单元格可以单一个颜色或者是交替的颜色，甚至可以设置单元格之间的间距，非常灵活好用。👻
- [网格 - 在线例子](http://labs.phaser.io/view.html?src=src%5Cgame%20objects%5Cshapes%5Cgrid.js&v=128)（包含缩放和卷曲等操作）

**4.线**

- 在任意两点之间进行绘制，并且可以给它们一个颜色和粗细程度。
- [线 - 在线例子](http://labs.phaser.io/view.html?src=src%5Cgame%20objects%5Cshapes%5Cline.js&v=128)

**5.多边形**

- 实际上是一个点组成，这些点可以通过数组、对象的方式提供，然后进行填充和描边生成形状。
- [多边形 - 在线例子](http://labs.phaser.io/view.html?src=src%5Cgame%20objects%5Cshapes%5Cpolygon.js&v=128)

**6.矩形**

- [矩形 - 在线例子](http://labs.phaser.io/view.html?src=src%5Cgame%20objects%5Cshapes%5Crectangle.js&v=128)

**7.星形**

- 允许创建一个星形，你可以控制星形上星星点的数量以及它的内半径和外半径。
- [星形 - 在线例子](http://labs.phaser.io/view.html?src=src%5Cgame%20objects%5Cshapes%5Cstar.js&v=128)

**8.三角形**

- 允许创建三角形，可以设置填充和描边。
- [三角形 - 在线例子](http://labs.phaser.io/view.html?src=src%5Cgame%20objects%5Cshapes%5Ctriangle.js&v=128)

**9.iso三角形**

- 可以绘制一个等角三角形，像金字塔那样，可以设置是否颠倒、宽高以及每一个面的颜色，这是一个有趣的形状，包括下一个。
- [Iso 三角形 - 在线例子](http://labs.phaser.io/view.html?src=src%5Cgame%20objects%5Cshapes%5Ciso%20triangle.js&v=128)

**10.iso盒子**

- 与 Iso 三角形相似，它绘制一个等角的盒子，可以设置每个面的颜色以及投影角度的颜色。
- [Iso 盒子 - 在线例子](http://labs.phaser.io/view.html?src=src%5Cgame%20objects%5Cshapes%5Ciso%20box.js&v=128)
- [小鸟 - 在线例子](http://labs.phaser.io/view.html?src=src%5Cgame%20objects%5Cshapes%5Ciso%20birdie.js&v=128)（因垂死听）
- [风景 - 在线例子](http://labs.phaser.io/view.html?src=src%5Cgame%20objects%5Cshapes%5Ciso%20image.js&v=128)

#### 参考

[Phaser World Back Issues](http://phaser.io/community/backissues)

[Phaser - HTML5 Game Framework](https://photonstorm.github.io/phaser3-docs/)