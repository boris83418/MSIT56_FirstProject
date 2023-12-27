var initwidth = null,//初始图片宽度
area = document.getElementsByTagName('area'),
initarea = null;//初始数据保存

function init() {//初始化
initwidth = 1000;
initarea = new Array(area.length - 1);
for (var i = 0; i < area.length; i++) {
    initarea[i] = area[i].getAttribute("coords");
}
}

function setCoords() {//根据分辨率自适应热区坐标
var width = document.body.offsetWidth,
    percent = width / initwidth;
for (var i = 0; i < area.length; i++) {
    var coords = initarea[i],
        arr = coords.split(",");
    for (var j = 0; j < arr.length; j++) {
        arr[j] *= percent;
    }
    area[i].setAttribute("coords", arr.join(","));
}
}
//使用
init();
window.onresize = function () {
setCoords();
}  