# HTML Toast Notice
![maven](https://img.shields.io/badge/HTML-red)
![maven](https://img.shields.io/badge/JavaScript-yellow)
![maven](https://img.shields.io/badge/CSS-blue)
![maven](https://img.shields.io/badge/Toast-green)<br>
HTML Toast消息提示方法<br>
可以自定义消息类型，消息内容，是否自动关闭消息，自动关闭消息的等待时间<br>
### 食用方法
将本项目和您需要使用Toast消息提示的HTML页面放在同一目录下
```HTML
<html>
<head>
    ...
    <!-- 引入Font Awesome图标库 -->
    <link rel="stylesheet" href="https://cdn.bootcdn.net/ajax/libs/font-awesome/6.2.1/css/all.min.css">
    <link rel="stylesheet" href="./css/toast.css">
    <!-- 注意一定要带defer参数 -->
    <script src="./js/toast.js" defer></script>
    ...
</head>
<body>
    ...
    <!--
      - @function createToast(id, text, autoclose, timer)
      - @description 在当前页创建一个Toast消息
      - @param id {Str} 消息类型 可以使用的类型有：success, error, warning, info
      - @param text {Str} 消息内容
      - @param autoclose {Boolean} 是否自动关闭 true: 消息将会在计时结束后自动关闭  false: 消息将会一直显示直至用户手动关闭 此参数默认为false
      - @param timer {Int} 计时器，单位为秒，当autoclose为true时此参数将起作用 此参数默认为5秒
      -->
    <button onclick='createToast("success", "Success: Test测试", true, 5)'>创建消息</button>
    ...
</body>
</html>
```
测试页：https://ziazusa.github.io/html-toast-notice/demo.html<br>
### 可选配置
打开[./js/toast.js](https://github.com/ZiAzusa/html-toast-notice/blob/main/js/toast.js)，可以在文件顶部找到以下配置项：
```JavaScript
var config = {
    withDarkMode: false //是否在用户浏览器设置夜间模式时切换Toast消息的颜色样式，true: 切换(黑底白字) false: 不切换
};
```
### 参考
[Create A Toast Notification in HTML CSS & JavaScript | Toast Notification in JavaScript (CodingNepal)](https://www.youtube.com/watch?v=BaakzvsR4UU)
