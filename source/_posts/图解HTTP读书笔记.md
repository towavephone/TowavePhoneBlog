---
title: 图解HTTP读书笔记
date: 2018-3-29 15:39:17
categories:
- 面试
tags:
- 计算机网络
- 互联网
- HTTP
permalink: HTTP
---

## 基础概念
### Web基础
- HTTP（超文本传输协议）
- WWW的三种技术：HTML、HTTP、URL
- RFC（征求修正意见书），互联网的设计文档

### URL
- URI（统一资源标识符）
- URL（统一资源定位符）
- URN（统一资源名称），例如urn:isbn:0-486-27557-4
>URI包含URL和URN，目前WEB只有URL比较流行，所以见到的基本都是URL。

<!--more-->

<div align="center">{% qnimg url_diagram.png%}</div>

### 请求和响应报文
1. 请求报文
<div align="center">{% qnimg HTTP_RequestMessageExample.png %}</div>
1. 响应报文
<div align="center">{% qnimg HTTP_ResponseMessageExample.png%}</div>

## HTTP方法
>客户端发送的`请求报文`第一行为请求行，包含了方法字段。

### GET
>获取资源
当前网络请求中，绝大部分使用的是GET方法。

### POST
>传输实体主体

- POST的主要目的不是获取资源，而是传输存储在内容实体中的数据。
- GET和POST的请求都能使用额外的参数，但是GET的参数是以查询字符串出现在URL中，而POST的参数存储在内容实体。

```
GET /test/demo_form.asp?name1=value1&name2=value2 HTTP/1.1
```

```
POST /test/demo_form.asp HTTP/1.1
Host: w3schools.com
name1=value1&name2=value2
```

- GET的传参方式相比于POST安全性较差，因为GET传的参数在URL是可见的，可能泄露私密信息。并且GET只支持ASCII字符；如果参数为中文时可能会出现乱码，而POST支持标准字符集。

- GET和POST的另一个区别是，使用GET方法，浏览器会把HTTP Header和Data一并发送出去，服务器响应200（OK）并返回数据。而使用POST方法，浏览器先发送Header，服务器响应100（Continue）之后，浏览器在发送Data，最后服务器响应200（OK）并返回数据。

### HEAD
> 获取报文首部

- 和GET方法一样，但是不返回报文实体主体部分。
- 主要用于确认URL有效性以及资源更新的日期时间等。

### PUT
> 上传文件
由于自身不带验证机制，任何人都可以上传文件，因此存在安全性问题，一般不使用该方法。

```
PUT /new.html HTTP/1.1
Host: example.com
Content-type: text/html
Content-length: 16

<p>New File</p>
```

### PATCH
>对资源进行部分修改
PUT也可以用于修改资源，但是只能完全代替原始资源，PATCH允许部分修改。

```
PATCH /file.txt HTTP/1.1
Host: www.example.com
Content-Type: application/example
If-Match: "e0023aa4e"
Content-Length: 100

[description of changes]
```

### DELETE
>删除文件
与PUT功能相反，并且同样不带验证机制。

```
DELETE /file.html HTTP/1.1
```

### OPTIONS
>查询支持的方法

- 查询指定的URL能够支持的方法。
- 会返回Allow:GET,POST,HEAD,OPTIONS这样的内容。

### CONNECT
>要求用隧道协议连接代理
要求在代理服务器通信时建立隧道，使用SSL（安全套接字）和TSL（传输层安全）协议把通信内容加密后经网络隧道传输。

```
CONNECT www.example.com:443 HTTP/1.1
```
<div align="center">{% qnimg dc00f70e-c5c8-4d20-baf1-2d70014a97e3.jpg %}</div>

### TRACE
>追踪路径

- 服务器会将通信路径返回客户端。
- 发送请求时，在Max-Forwards首部字段中填入数值，每经过一个服务器就会减1，当数值为0时就停止传输。
- 通常不会使用TRACE，并且它容易受到XST攻击（跨站追踪），因此更不会去使用它。

## HTTP状态码
>服务器返回的`响应报文`中第一行为状态行，包含了状态码以及原因短语，用来告知客户端请求的结果。

| 状态码 | 类别 | 原因短语 |
| :---: | :---: | :---: |
| 1XX | Informational（信息性状态码） | 接收的请求正在处理 |
| 2XX | Success（成功状态码） | 请求正常处理完毕 |
| 3XX | Redirection（重定向状态码） | 需要进行附加操作以完成请求 |
| 4XX | Client Error（客户端错误状态码） | 服务器无法处理请求 |
| 5XX | Server Error（服务器错误状态码） | 服务器处理请求出错 |

### 2XX成功
- 200 OK
- 204 No Content：请求已经成功处理，但是返回的响应报文不包含实体的主体部分。一般在只需要从客户端往服务器发送信息，而不需要返回数据时使用。
- 206 Partial Content：表示客户端进行范围请求，响应报文包含由Content-Range指定范围的实体内容。

### 3XX重定向
- 301 Moved Permanently：永久性重定向
- 302 Found：临时性重定向
- 303 See Other：和302有着相同的功能，但是303明确要求客户端应该采用GET方法获取资源。
- 注：虽然HTTP协议规定301、302状态下重定向时不允许把POST方法改为GET方法，但是大多数浏览器都会在301、302和303状态下的重定向把POST方法改为GET方法。
- 304 Not Modified：如果请求报文首部包含一些条件，例如：If-Match，If-ModifiedSince，If-None-Match，If-Range，If-Unmodified-Since，如果不满足条件，则服务器会返回304状态码。
- 307 Temporary Redirect：临时性重定向，与302的含义类似，但是307要求浏览器不会把重定向请求的POST方法改成GET方法。

### 4XX客户端错误
- 400 Bad Request：请求报文中存在语法错误。
- 401 Unauthorized：该状态码表示发送的请求需要有认证信息（BASIC认证、DIGEST认证）。如果之前已进行一次请求，则表示用户认证失败。
- 403 Forbidden：请求被拒绝，服务器端没有必要给出拒绝的详细理由。
- 404 Not Found

### 5XX服务器错误
- 500 Internal Server Error：服务器正在执行请求时发生错误。
- 503 Service Unavailable：服务器暂时处于超负载或正在进行停机维护，现在无法处理请求。

## HTTP首部
