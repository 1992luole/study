//获取地址栏参数并分割出来
// window.location.href 获取路径
//  https://cn.vuejs.org/v2/guide/computed.html?name="zc"&age=18
//将上面的参数切割出来
const urlDil = 'https://cn.vuejs.org/v2/guide/computed.html?name=zc&age=18'
    // var urlDil = document.location.href; // http:8089/index.html?hehe=100&caca=200
var starNum = urlDil.indexOf("?"); // 查找到地址栏 ？ 出现的位置
var urlQuy = urlDil.substring(starNum + 1); //截取 ？后面的参数：hehe=100&caca=200
var urlQuyArr = urlQuy.split("&"); // 使用split() 将获取到的字符串以 & 分割
var json = {}; // 创建一个json用来保存最后转化成json的值
for (var i = 0; i < urlQuyArr.length; i++) { // 循环分割后的数组	[hehe=100, caca=200]
    json[urlQuyArr[i].split("=")[0]] = urlQuyArr[i].split("=")[1];
    // 	循环的同时再次使用split() 以 = 分割数组，存入json，
    //  例如当前i为0，值为：json[hehe] = 100
    //  例如当前i为1，值为：json[caca] = 200
}
console.log(json);