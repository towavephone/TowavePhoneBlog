---
title: 前端面试题HTML部分
categories:
  - 面试
tags:
  - HTML
  - 网页
permalink: HTML
date: 2018-04-05 18:24:54
---
## DOCTYPE有什么用？

1. <!doctype>声明必须处于HTML文档的头部，在`<html>`标签之前，HTML5中不区分大小写
2. <!doctype>声明不是一个HTML标签，是一个用于告诉浏览器当前HTMl版本的指令
3. 现代浏览器的html布局引擎通过检查doctype决定使用兼容模式还是标准模式对文档进行渲染，一些浏览器有一个接近标准模型
4. 在HTML4.01中<!doctype>声明指向一个DTD，由于HTML4.01基于SGML，所以DTD指定了标记规则以保证浏览器正确渲染内容
5. HTML5不基于SGML，所以不用指定DTD

<!--more-->

**常见doctype：**

1. `HTML4.01 strict`：不允许使用表现性、废弃元素（如font）以及frameset。声明：<!DOCTYPE HTML PUBLIC "`-//W3C//DTD HTML 4.01//EN`" "`http://www.w3.org/TR/html4/strict.dtd`">
2. `HTML4.01 Transitional`：允许使用表现性、废弃元素（如font），不允许使用frameset。声明：<!DOCTYPE HTML PUBLIC "`-//W3C//DTD HTML 4.01 Transitional//EN`" "`http://www.w3.org/TR/html4/loose.dtd`">
3. `HTML4.01 Frameset`：允许表现性元素，废弃元素以及frameset。声明：<!DOCTYPE HTML PUBLIC "`-//W3C//DTD HTML 4.01 Frameset//EN`" "`http://www.w3.org/TR/html4/frameset.dtd`">
4. `XHTML1.0 Strict`：不使用允许表现性、废弃元素以及frameset。文档必须是结构良好的XML文档。声明：<!DOCTYPE html PUBLIC "`-//W3C//DTD XHTML 1.0 Strict//EN`" "`http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd`">
5. `XHTML1.0 Transitional`：允许使用表现性、废弃元素，不允许frameset，文档必须是结构良好的XMl文档。声明： <!DOCTYPE html PUBLIC "`-//W3C//DTD XHTML 1.0 Transitional//EN`" "`http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd`">
6. `XHTML 1.0 Frameset`：允许使用表现性、废弃元素以及frameset，文档必须是结构良好的XML文档。声明：<!DOCTYPE html PUBLIC "`-//W3C//DTD XHTML 1.0 Frameset//EN`" "`http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd`">
7. `HTML 5`: <!doctype html>

## 如何提供包含多种语言内容的页面？

这个问题有点问得含糊其辞，我认为这是在询问最常见的情况：如何提供包含多种语言内容的页面，并保证页面内容语言的一致性。

当客户端向服务器发送 HTTP 请求时，通常会发送有关语言首选项的信息，比如使用Accept-Language请求头。如果替换语言存在，服务器可以利用该信息返回与之相匹配的 HTML 文档。返回的 HTML 文档还应在`<html>`标签中声明lang属性，比如`<html lang="en">...</html>`

在后台中，HTML 将包含i18n占位符和待以替换的内容，这些按照不同语言，以 YML 或 JSON 格式存储。然后，服务器将动态生成指定语言内容的 HTML 页面。整个过程通常需要借助后台框架实现。

## 在设计开发多语言网站时，需要留心哪些事情？

- 在HTML中使用lang属性。
- 引导用户切换到自己的母语——让用户能够轻松地切换到自己的国家或语言，而不用麻烦。
- 在图片中展示文本会阻碍网站规模增长——把文本放在图片中展示，仍然是一种非常流行的方式。这样做可以在所有终端上，都能显示出美观的非系统字体。然而，为了翻译图片中的文本，需要为每种语言单独创建对应的图片，这种做法很容易在图片数量不断增长的过程中失控。
- 限制词语或句子的长度——网页内容在使用其他语言表述时，文字长度会发生变化。设计时，需要警惕文字长度溢出布局的问题，最好不要使用受文字长度影响较大的设计。比如标题、标签、按钮的设计，往往很受文字长度影响，这些设计中的文字与正文或评论部分不同，一般不可以自由换行。
- 注意颜色的使用——颜色在不同的语言和文化中，意义和感受是不同的。设计时应该使用恰当的颜色。
- 日期和货币的格式化——日期在不同的国家和地区，会以不同的方式显示。比如美国的日期格式是`May 31, 2012`，而在欧洲部分地区，日期格式是`31 May 2012`。
- 不要使用连接的翻译字符串——不要做类似这样的事情，比如“今天的日期是”+具体日期。这样做可能会打乱其他语言的语序。替代方案是，为每种语言编写带变量替换的模版字符串。
- 注意语言阅读的方向——在英语中，文字是从左向右阅读的；而在传统日语中，文字是从右向左阅读的。

## 什么是data-属性？

在 JavaScript 框架变得流行之前，前端开发者经常使用data-属性，把额外数据存储在 DOM 自身中。当时没有其他 Hack 手段（比如使用非标准属性或 DOM 上额外属性）。这样做是为了将自定义数据存储到页面或应用中，对此没有其他更适当的属性或元素。

而现在，不鼓励使用data-属性。原因之一是，用户可以通过在浏览器中利用检查元素，轻松地修改属性值，借此修改数据。数据模型最好存储在 JavaScript 本身中，并利用框架提供的数据绑定，使之与 DOM 保持更新。

## 将 HTML5 看作成开放的网络平台，什么是 HTML5 的基本构件（building block）？

- 连接 - 提供新的方式与服务器通信。
- 离线和存储 - 允许网页在本地存储数据并有效地离线运行。
- 多媒体 - 在 Open Web 中，视频和音频被视为一等公民（first-class citizens）。
- 2D/3D 图形和特效 - 提供更多种演示选项。
- 性能和集成 - 提供更快的访问速度和性能更好的计算机硬件。
- 设备访问 - 允许使用各种输入、输出设备。
- 外观 - 可以开发丰富的主题。开放网络平台（Open Web Platform）是一些开放的（免版权）技术的集合，这些技术激活了互联网。使用开放网络平台时，每个人都有权实现 Web 上的一个组件，而不用向任何人索取许可和证书。

将 HTML5 看做开放网络平台，那它的构建模块有哪些？我想，所谓构建模块，指的应该是开放网络平台这个技术集合中的技术。

- HTML
- DOM
- CSS
- SVG
- MathML
- Web APIs
    - Canvas WebGL
    - Audio
    - Web Storage
    - File, File System
    - History, contentEditable, Drag & Drop, HTML Editing Commands
    - Web Sockets
    - Web Workers
    - Server-Send Events
    - XMLHttpRequest
    - Geolocation, Device Orientation
    - DOM Events, Touch Events, Progress Events
    - Custom application development
    - Clipboard and events
    - Web Notifications, Web Messaging
    - Offine Web Applications
    - Media Capture API
    - Timing control for script-based animations, Page Visibility, Navigation + Timing, Resource Timing
    - Selectors
    - DOM Traversal, DOM XPath, Element Traversal
    - EcmaScript / JavaScript
    - HTTP
    - URI
    - Media Accessibility Checklist

## 请描述cookie、sessionStorage和localStorage的区别。

上面提到的技术名词，都是在客户端以键值对存储的存储机制，并且只能将值存储为字符串。

|                                                    | `cookie`                                           | `localStorage` | `sessionStorage` |
| -------------------------------------------------- | -------------------------------------------------- | -------------- | ---------------- |
| 由谁初始化                                         | 客户端或服务器，服务器可以使用`Set-Cookie`请求头。 | 客户端         | 客户端           |
| 过期时间                                           | 手动设置                                           | 永不过期       | 当前页面关闭时   |
| 在当前浏览器会话（browser sessions）中是否保持不变 | 取决于是否设置了过期时间                           | 是             | 否               |
| 是否随着每个 HTTP 请求发送给服务器                 | 是，Cookies 会通过`Cookie`请求头，自动发送给服务器 | 否             | 否               |
| 容量（每个域名）                                   | 4kb                                                | 5MB            | 5MB              |
| 访问权限                                           | 任意窗口                                           | 任意窗口       | 当前页面窗口     |

## 请描述`script`、`script async`和`script defer`的区别

- `<script>` - HTML 解析中断，脚本被提取并立即执行。执行结束后，HTML 解析继续。
- `<script async>` - 脚本的提取、执行的过程与 HTML 解析过程并行，脚本执行完毕可能在 HTML 解析完毕之前。当脚本与页面上其他脚本独立时，可以使用 `async`，比如用作页面统计分析。
- `<script defer>` - 脚本仅提取过程与 HTML 解析过程并行，脚本的执行将在 HTML 解析完毕后进行。如果有多个含defer的脚本，脚本的执行顺序将按照在 `document` 中出现的位置，从上到下顺序执行。

注意：没有src属性的脚本，async和defer属性会被忽略。