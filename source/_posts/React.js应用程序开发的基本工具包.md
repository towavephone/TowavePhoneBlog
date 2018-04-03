---
title: React.js应用程序开发的基本工具包
date: 2017-12-13 14:27:09
categories:
- 前端
tags:
- React
- JavaScript
- React性能
- React优化
- 转载
---

翻译转载：[THE ESSENTIAL TOOLKIT FOR REACT.JS APP DEVELOPMENT](https://da-14.com/blog/essential-toolkit-reactjs-app-development)

- React.js版本库
- React.js入门套件
- 客户端React.js入门套件
- 全堆栈React.js入门工具包
- 文本编辑器
- UI组件
- 登录组件
- 用户界面小部件
- 路由工具
- 构建工具
- 调试工具
- 测试工具

<!--more-->

每当有关于前端开发环境的讨论时，React.js的名字迟早会出现。这个JavaScript库在JS框架流行评级中相当有名。而且，对于那些需要强大而可扩展的前端的项目来说，它往往是首选的平台。

React.js是Facebook的一个产品，自然而然地用它作为Facebook和Instagram的前端环境。这个事实也有助于React.js成为值得信赖和可靠的框架。

随着React.js的这种普及，难怪开发社区已经整合了各种React开发工具来缓解全栈React.js开发中同事的工作。

有几十个经过良好尝试的工具和组件可用于创建React.js环境。我们的React开发人员已经尝试和测试了其中的大部分，在本文中我们将看看最流行的。

## React.js版本库 

React.js是一个开源库，它的源代码可以在Github 的React仓库中找到。

您可以查看现有的React.js代码或对其作出贡献。其他Github 存储库包含各种可重用的React.js组件，您可以在您的项目中应用这些组件。

## React.js入门套件 

如果您正在寻求快速创建前端的方法，并利用开发社区已经测试过的工具，那么可以使用许多React.js基本入门工具包。一般而言，所有入门套件都是包含代码和一些样本数据的项目模板。入门套件项目已准备就绪，但是，您可以使用自定义功能和装饰对其进行增强。

根据主要目的，客户端入门工具包可帮助您仅开发应用程序的客户端，并提供全栈入门工具包来创建完整的React.js应用程序。

在每个组中，您将使用某种开发技术找到许多不同的入门工具包。

### 客户端React.js入门套件  

您可以从几十个React.js入门套件中进行选择，旨在使客户端的开发变得更加容易。例如[React Static Boilerplate](https://github.com/koistya/react-static-boilerplate)，这是一个在无服务器体系结构中创建独立应用程序的好平台。该套件使用最先进的技术，并且由于没有服务器，可以以较低的成本构建完整的功能应用程序。

如果您更喜欢使用Redux构建您的React.js应用程序，请尝试[React Redux Workflow Boilerplate](https://github.com/iroy2000/react-redux-boilerplate)，其中包含完成项目所需的所有组件。我们还建议使用[Redux-Saga](https://github.com/redux-saga/redux-saga)处理副作用或[Redux-Thunk](https://github.com/gaearon/redux-thunk)中间件以获得对异步操作的支持。

### 全堆栈React.js入门工具包  

要构建应用程序的前端和后端，并确保与React.js的整合起始程序包（例如[React入门工具包](https://reactstarter.com/)），这是用于[Web应用程序开发](https://da-14.com/services/web-app-development)的同构样板。

或[react-universal](https://github.com/ctrlplusb/react-universally) - 一个包含构建完整的React项目所需的所有工具的工具包。它还包括一个小型“演示”项目，允许您扩展其架构并根据您的要求对其进行定制。

## 文本编辑器 

在进行应用工程之前，选择一个合适的文本编辑器来创建React.js代码并支持其细节。您可以在下面找到有关建议解决方案的简要说明。

- [Atom：language-babel](https://atom.io/packages/language-babel) - 专注于JavaScript语法的Atom文本编辑器特别包，特别是JSX，它是React.js的JavaScript扩展。它支持所有版本的JavaScript，并包含JSX的自动编辑功能
- [WebStorm](https://www.jetbrains.com/webstorm/)是一个功能强大的JavaScript应用程序开发IDE，它提供了对React，Angular，Vue.js和Meteor的高级支持。它提供了嵌入式检查来突出问题，并建议修复即时，统一的用户界面，以使用最常见的版本控制系统，集成终端和丰富的插件生态系统
- [Visual Studio Code](https://code.visualstudio.com/) - 一个功能性的代码编辑器，也为整个编辑 - 创建 - 调试工作流程提供有用的功能。它包括智能完成，内置的调试选项以及直接从编辑器提交的集成Git命令
- [Sublime Text：babel-sublime](https://github.com/babel/babel-sublime) - JavaScript的语法定义，带有React.js的JSX扩展

## UI组件 

React.js是构建用户界面的框架，因此其主要任务之一就是创建UI组件。React.js社区汇集了许多可重用的UI组件，您可以将其包含在您的应用程序中，而不是从头开始编写它们。一旦你把它们整合到你的项目中，它们就可以在应用程序的任何地方使用。

开放源代码平台提供了包含各种UI组件和专用于特定类型的UI元素的资源的综合包。如果您正在一个地方查找多个UI组件，请查看以下资源：

- [Material UI](http://www.material-ui.com/#/)
    是实现由Google开发的Material Design的一个早期的React.js组件。可定制的UI工具包包含所有必要的组件，用于最少的输入界面设计
- [Belle](http://nikgraf.github.io/belle/#/?_k=mctnfd)
    一个包含许多可重用组件的软件包，例如切换开关，组合框，按钮，文本字段等。百丽组件在桌面和移动版本的应用程序中表现相当好
- [Elemental UI](http://elemental-ui.com/)
    一个用于添加旋钮，按钮，模态窗口和其他UI组件的工具包 
    同时，许多开发人员在构建单独的UI组件时分享他们的专有技术，所以如果您正在寻找特定的小部件，请查看下面的列表。

### 登录组件  

使用社交媒体帐户或任何其他服务进行登录始终是一个很好的做法。可用的React.js工具包括用于[Facebook](https://github.com/kennetpostigo/react-facebook-login-component)和[Google](https://github.com/kennetpostigo/react-google-login-component)的现成登录模块，可以轻松嵌入到您的项目中。

### 用户界面小部件  

开源的React.js工具包括一系列用于向用户界面添加各种小部件的解决方案 - 滑块，滚动条，选择器等。查看可重用组件的以下资源以增加应用程序用户的参与度：

- [Infinite scroll](https://cassetterocks.github.io/react-infinite-scroller/) - 在React.js构建的应用程序中加载用于无限滚动的UI内容
- [Toggle switches and checkboxes](http://aaronshaf.github.io/react-toggle/) - 嵌入切换开关和复选框
- [Slider](http://react-component.github.io/slider/) - 将滑块元素添加到应用程序屏幕
- [Color picker](http://casesandberg.github.io/react-color/) - 集成了来自其他服务（如Photoshop或Sketch）的颜色选择器
- [React video](http://pedronauck.github.io/react-video/) - 呈现稍后加载YouTube或Vimeo视频的占位符
- [React侧边栏](http://balloob.github.io/react-sidebar/example/) - 创建一个带有一些托管功能的边栏，例如对接，覆盖主要内容，通过触摸隐藏边栏等。
- [React images](http://jossmac.github.io/react-images/) - 在应用程序屏幕上显示图像数组
- [React tabs](https://reactcommunity.org/react-tabs/) - 呈现选项卡及其导航元素

这只是可重复使用的React.js组件的一个简短列表。你也可以浏览Github或者npm资源来获得更多的共享元素，如果你需要的话。

## 路由工具 

在应用程序开发中，路由功能确保应用程序URL和访问该URL时返回的UI之间的同步。要在您的应用程序中启用平滑路由，可以使用以下选项：

- [React Router](https://reacttraining.com/react-router/) - 一整套组件，添加路由到整个React.js应用程序
- [Aviator](https://github.com/swipely/aviator) - 用于单页应用程序的路由器
- [Component Router](https://github.com/in-flux/component-router) - 由多个独立组件组成的应用程序的路由工具，可以分别进行同步

## 构建工具 

React.js应用程序需要特殊工具来自动化构建流程以编译源代码并将其打包，从而创建可执行的应用程序。小型应用程序可以手动编译，而大型软件解决方案需要自动化构建过程以确保必要的性能。有很多JavaScript构建工具，但是，React.js开发人员推荐以下几种：

- [Create React App](https://github.com/facebookincubator/create-react-app) - 这个解决方案是Facebook开发社区强烈推荐的。这是构建React.js应用程序的官方工具，不需要复杂的配置，因为该工具已经预先配置。您只需要创建应用程序并进行部署，然后只要对源代码进行更改，工具就会更新它
- [Webpack](https://webpack.js.org/) - 另一个用于基于JavaScript的应用程序的通用构建工具。Webpack是一个静态模块打包器，用于将应用程序中使用的模块打包成bundle，从而将代码转换为可执行格式。生成的JavaScript可以通过浏览器轻松处理。Webpack还能够跟踪源代码修改并更新相应的模块，以确保正确显示更改
- [Babel](https://babeljs.io/) - 一种将JavaScript源代码转化为JavaScript的工具，可以被浏览器理解。通过Babel，您可以使用最新版本的JavaScript编写代码，并将其转换为浏览器可读的格式

## 调试工具 

调试是检查每行代码中可能导致应用程序失败的问题的耗时但必要的过程。对于复杂的应用程序，自动调试对于在相对较短的时间内对源代码进行彻底的检查是至关重要的。

- [React Developer Tools](https://github.com/facebook/react-devtools)是React.js调试工具列表中的佼佼者。它是由Facebook专门开发的一个工具包，用于检查React.js组件，它们的层次结构，属性和状态
- [React Inspector](http://xyc.github.io/react-inspector/)允许以类似于Browser DevTools的方式调试React.js应用程序

## 测试工具 

在将代码推向生产之前，您需要验证它是否按预期工作。为此，您需要运行测试 - 单元测试，功能测试和集成测试。如果您浏览可用的开源代码集合，您会发现许多涵盖应用程序测试各个方面的测试工具。

- [Jest](https://facebook.github.io/jest/) - 由Facebook创建并用于测试JavaScript代码的测试工具。Jest完全符合Facebook的“无配置”原则，是可靠的JavaScript测试的完整开箱即用工具
- [Enzyme](http://airbnb.io/enzyme/) - 用于测试React.js应用程序的解决方案。它需要一些配置才能使用，但是，确保React.js组件性能的简单测试
- [React-unit](https://github.com/pzavolinsky/react-unit) - 用于运行React.js代码单元测试的轻量级库