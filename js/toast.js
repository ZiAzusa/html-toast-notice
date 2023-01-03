var config = {
    withDarkMode = false; //是否在用户浏览器设置夜间模式时切换Toast消息的颜色样式，true: 切换(黑底白字) false: 不切换
}

var iconData = {
    success: 'fa-circle-check',
    error: 'fa-circle-xmark',
    warning: 'fa-circle-exclamation',
    info: 'fa-circle-info'
};
var toastsID = 0;
var toasts = document.createElement("ul");
toasts.className = "toasts";
document.body.appendChild(toasts);
if (config.withDarkMode == true) {
    var darkStyle = document.createElement("link");
    darkStyle.rel = "stylesheet";
    darkStyle.type = "text/css";
    darkStyle.href = "./css/dark-mode.css";
    document.head.appendChild(darkStyle);
}
/**
 * @function createToast
 * @description 在当前页创建一个Toast消息
 * @param id {String} 消息类型 可以使用的类型有：success, error, warning, info
 * @param text {String} 消息内容
 * @param autoclose {Boolean} 是否自动关闭 true: 消息将会在计时结束后自动关闭  false: 消息将会一直显示直至用户手动关闭 此参数默认为false
 * @param timer {Number} 计时器，单位为秒，当autoclose为true时此参数将起作用 此参数默认为5秒
 * @example createToast("success", "Success: Test测试", true, 5)
 */
function createToast(id, text, autoclose = false, timer = 5) {
    toastsID += 1;
    if (autoclose == false) timer = 0;
    var thisToastsID = "toast" + String(toastsID);
    var icon = iconData[id];
    var toast = document.createElement("li");
    toast.className = "toast " + id + " " + thisToastsID;
    toast.innerHTML = "<div class='column'><i class='fa-solid " + icon + "'></i><span>" + text + "</span></div><i class='fa-solid fa-xmark' onClick='removeToast(this.parentElement)'></i>";
    var toastStyle = document.createElement("style");
    toastStyle.id = toast.className;
    toastStyle.innerText = "." + thisToastsID + "::before {animation:progress " + timer + "s linear forwards;}";
    document.body.appendChild(toastStyle);
    toasts.appendChild(toast);
    if (autoclose == true) toast.timeoutId = setTimeout(() => removeToast(toast), timer * 1000);
}
function removeToast(toast) {
    var thisToast = toast.className;
    toast.classList.add("hide");
    if (toast.timeoutId) clearTimeout(toast.timeoutId);
    var floatToast = document.createElement("li");
    floatToast.className = "floatToast";
    floatToast.style.height = String(toast.offsetHeight + 10) + "px";
    setTimeout(() => {
        toast.style.height = "0px";
        toasts.insertBefore(floatToast, toast);
        toast.remove();
        document.getElementById(thisToast).remove();
        setTimeout(() => {
            floatToast.style.height = "0px";
            setTimeout(() => {floatToast.remove();}, 400);
        }, 200);
    }, 400);
}
