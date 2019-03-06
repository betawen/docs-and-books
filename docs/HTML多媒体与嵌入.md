## HTML多媒体与嵌入

### HTML中的图片

- `<img src='test.png' alt='describe'> `引用

  > 关于alt
  >
  > - **装饰：**如果图片只是用于装饰，而不是内容的一部分，可以写一个空的`alt=""` 。例如，屏幕阅读器不会浪费时间对用户读出不是核心需要的内容。实际上装饰性图片就不应该放在HTML文件里， [CSS background images](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML#CSS_background_images)才应该用于插入装饰图片，但如果这种情况无法避免， `alt=""`会是最佳处理方案。
  > - **内容：**如果你的图片提供了重要的信息，就要在`alt`文本中简要的提供相同的信息，甚至更近一步，把这些信息写在主要的文本内容里，这样所有人都能看见。不要写冗余的备选文本（如果在主要文本中将所有的段落都重复两遍，对于有视力障碍的用户来说多烦啊！），如果在主要文本中已经对图片进行了充分的描述，写`alt=""`就好。
  > - **链接：**如果你把图片嵌套在[``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a)标签里，来把图片变成链接，那你还必须[提供无障碍的链接文本](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#%E7%94%A8%E6%B8%85%E6%99%B0%E7%9A%84%E9%93%BE%E6%8E%A5%E6%8E%AA%E8%BE%9E%E3%80%82)。在这种情况下，你可以写在同一个<a>元素里，或者写在图片的`alt`属性里，随你喜欢。
  > - **文本：**你不应该将文本放到图像里。例如，如果你的主标题需要有阴影，你可以[用CSS](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-shadow)来达到这个目的，而不是把文本放到图片里。如果真的必须这么做，那就把文本也放到`alt`里。
  >
  > 关于宽高
  >
  > 使用正确宽高比的基础上调整width和height，最好使用CSS而不是HTML
  >
  > 关于超链接
  >
  > 使用title，存在易访问性的问题
  >
  > 关于图片介绍
  >
  > 使用`<p>`，最好使用HTML5 的 [`figure`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/figure) 和 [`<figcaption>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/figcaption) 元素.这个 `figure`元素 告诉浏览器和其他辅助的技术工具这段说明文字描述了`figcaption`元素的内容.
  >
  > **注意：**从无障碍的角度来说，说明文字和 `alt` 文本扮演着不同的角色。看得见图片的人们同样可以受益于说明文字，而 `alt` 文字只有在图片无法显示时才这样。 所以，说明文字和 `alt`  的内容应该一样，因为当图片无法显示时，它们会出现。尝试让你的图片不显示，看看效果如何。
  >
  > 注意`figure`里不一定要是一张图片，只要是一个这样的独立内容单元：
  >
  > - 用紧凑、易于掌握的方式表达你的意图。
  > - 可以放在页面线性流的中几个地方（Could go in several places in the page's linear flow）
  > - 为主要内容提供重要的补充说明。
  >
  > `<figure> `可以是几张图片、一段代码、音视频、方程、表格或别的。

- CSS背景图片

  > ```css
  > p {
  >   background-image: url("images/dinosaur.jpg");
  > }
  > ```
  >
  > 如果图像对您的内容里有意义，则应使用HTML图像。 如果图像纯粹是装饰，则应使用CSS背景图片。

### HTML中的音频和视频

- `<video src='' controls> <p>说明</p></video>`嵌入一段视频

  > 关于controls
  >
  > 用户必须能够控制视频和音频的回放功能。你可以使用浏览器提供的控制接口，同时你也可以在 JavaScript （[JavaScript API](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement)）当中使用这些控制接口。至少，这些媒体应该包括开始和停止，以及调整音量的功能。
  >
  > 关于`<p>`
  >
  > 这个叫做后备内容 — 当浏览器不支持 <video> 标签的时候，它将会显示出来，它使我们能够对旧的浏览器做一些兼容处理。你可以添加任何后备内容，在这个例子中我们提供了一个指向这个视频文件的链接，从而使用户可以至少访问到这个文件，而不会局限于浏览器的支持。
  >
  > 关于格式支持
  >
  > - WebM 容器通常包括了 Ogg Vorbis 音频和 VP8/VP9 视频。主要在 FireFox 和 Chrome 当中支持。
  > - MP4 容器通常包括 AAC 以及 MP3 音频和 H.264 视频。主要在 Internet Explorer 和 Safari 当中支持。
  > - 老式的 Ogg 容器往往支持 Ogg Vorbis  音频和 Ogg Theora 视频。主要在 Firefox 和 Chrome 当中支持，不过这个容器已经被更强大的 WebM 容器所取代。
  >
  > ```
  > width和height
  > ```
  >
  > 你可以用属性控制视频的尺寸，也可以用 [CSS](https://developer.mozilla.org/en-US/docs/Glossary/CSS) 来控制视频尺寸。 无论使用哪种方式，视频都会保持它原始的长宽比 — 也叫做**纵横比**。如果你设置的尺寸没有保持视频原始长宽比，那么视频边框将会拉伸，而未被视频内容填充的部分，将会显示默认的背景颜色。
  >
  > ```
  > autoplay
  > ```
  >
  > 这个属性会使音频和视频内容立即播放，即使页面的其他部分还没有加载完全。建议不要应用这个属性在你的网站上，因为用户们会比较反感自动播放的媒体文件。
  >
  > ```
  > loop
  > ```
  >
  > 这个属性可以让音频或者视频文件循环播放。同样不建议使用，除非有必要。
  >
  > ```
  > muted
  > ```
  >
  > 这个属性会导致媒体播放时，默认关闭声音。
  >
  > ```
  > poster
  > ```
  >
  > 这个属性指向了一个图像的URL，这个图像会在视频播放前显示。通常用于粗略的预览或者广告。
  >
  > ```
  > preload
  > ```
  >
  > 这个属性被用来缓冲较大的文件，有3个值可选：
  >
  > - `"none"` ：不缓冲
  > - `"auto"` ：页面加载后缓存媒体文件
  > - `"metadata"` ：仅缓冲文件的元数据

- 显示音轨文本

  > 用文本记录音频内容
  >
  > WebVTT 是一个格式，用来编写文本文件，这个文本文件包含了众多的字符串，这些字符串会带有一些元数据，它们可以用来描述这个字符串将会在视频中显示的时间，甚至可以用来描述这些字符串的样式以及定位信息。这些字符串叫做 **cues** ，你可以根据不同的需求来显示不同的样式，最常见的如下：
  >
  > subtitle
  >
  > 通过添加翻译字幕，来帮助那些听不懂外国语言的人们理解音频当中的内容。
  >
  > captions
  >
  > 同步翻译对白，或是描述一些有重要信息的声音，来帮助那些不能听音频的人们理解音频中的内容。
  >
  > timed descriptions
  >
  > 将文字转换为音频，用于服务那些有视觉障碍的人
  >
  > 让其与 HTML 媒体一起显示，你需要做如下工作：
  >
  > 1. 以 .vtt 后缀名保存文件。
  > 2. 用 [`<track>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/track) 标签链接 .vtt 文件， `<track>` 标签需放在 `<audio>` 或 `<video> 标签当中`，同时需要放在所有 <source> 标签之后。使用 `kind` 属性来指明是哪一种类型，如 subtitles 、 captions 、 descriptions。然后，使用 `srclang` 来告诉浏览器你是用什么语言来编写的 subtitles。
  >
  > 如下:
  >
  > ```html
  > <video controls>
  >     <source src="example.mp4" type="video/mp4">
  >     <source src="example.webm" type="video/webm">
  >     <track kind="subtitles" src="subtitles_en.vtt" srclang="en">
  > </video>
  > ```

- 相关资料

  > - [`audio`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/audio)
  > - [`video`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/video)
  > - [`source`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/source)
  > - [`track`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/track)

### 嵌入式元素

`<iframe>`/`<embed>`/`<object>`等

- `<iframe>`详解

  > 此示例包括使用以下所需的`<iframe>`基本要素：
  >
  > - `allowfullscreen`
  >
  >   如果设置，`<iframe>`则可以通过[全屏API](https://developer.mozilla.org/en-US/docs/Web/Apps/Fundamentals/User_notifications/Full_screen_api)设置为全屏模式（稍微超出本文的范围）。
  >
  > - `frameborder`
  >
  >   如果设置为1，则会告诉浏览器在此框架和其他框架之间绘制边框，这是默认行为。0删除边框。不推荐这样设置，因为在[CSS中](https://developer.mozilla.org/en-US/docs/Glossary/CSS)可以更好地实现相同的效果。[`border`](https://developer.mozilla.org/en-US/docs/Web/CSS/border)`: none;`
  >
  > - `src`
  >
  >   该属性与[`video`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video)/`<img>`一样包含指向要嵌入文档的URL路径。
  >
  > - `width` 和 `height`
  >
  >   这些属性指定您想要的iframe的宽度和高度。
  >
  > - 备选内容
  >
  >   可以在`<iframe></iframe>`标签之间包含备选内容，如果浏览器不支持`<iframe>`，将会显示备选内容，这种情况下，我们已经添加了一个到该页面的链接。现在您几乎不可能遇到任何不支持`<iframe>`的浏览器。
  >
  > - `sandbox`
  >
  >   该属性需要在已经支持其他`<iframe>`功能（例如IE 10及更高版本）但稍微更现代的浏览器上才能工作，该属性可以提高安全性设置; 我们将在下一节中更加详细地谈到。
  >
  > 关于安全问题
  >
  > [单击劫持](https://en.wikipedia.org/wiki/Clickjacking)是一种常见的iframe攻击，黑客将隐藏的iframe嵌入到您的文档中（或将您的文档嵌入到他们自己的恶意网站），并使用它来捕获用户的交互。这是误导用户或窃取敏感数据的常见方式。

- 使用HTTPS

  > [HTTPS](https://developer.mozilla.org/en-US/docs/Glossary/HTTPS)是[HTTP](https://developer.mozilla.org/en-US/docs/Glossary/HTTP)的加密版本。您应该尽可能使用HTTPS为您的网站提供服务：
  >
  > 1. HTTPS减少了远程内容在传输过程中被篡改的机会，
  > 2. HTTPS防止嵌入式内容访问您的父文档中的内容，反之亦然。

- 始终使用sandbox属性|沙盒

- 配置CSP指令

- `<embed>`和`<objected>`元素

  |                                                              | [``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/embed) | [``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/object) |
  | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
  | 嵌入内容的[网址](https://developer.mozilla.org/en-US/docs/Glossary/URL) | `src`                                                        | `data`                                                       |
  | 嵌入内容的*准确*[媒体类型](https://developer.mozilla.org/en-US/docs/Glossary/MIME_type) | `type`                                                       | `type`                                                       |
  | 由插件控制的框的高度和宽度（以CSS像素为单位）                | `height` `width`                                             | `height` `width`                                             |
  | 名称和值，将插件作为参数提供                                 | 具有这些名称和值的ad hoc属性                                 | 单标签[``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/param)元素，包含在内`<object>` |
  | 独立的HTML内容作为不可用资源的回退                           | 不支持（`<noembed>`已过时）                                  | 包含在元素`<object>`之后`<param>`                            |

  

