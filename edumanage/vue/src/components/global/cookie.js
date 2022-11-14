//获取cookie、
var setCookie = function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
    localStorage.setItem(cname, cvalue);
}
var getCookie = function getCookie(cname) {
    return localStorage.getItem(cname);
}  
//删除cookie
var delCookie= function delCookie (name) {
    var exp = new Date();
     exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null)
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
    localStorage.removeItem(name);
};
  
export {
    getCookie,setCookie,delCookie
}