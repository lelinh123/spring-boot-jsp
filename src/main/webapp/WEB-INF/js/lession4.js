// var element = document.querySelector(".demo");
// onload = function onLoad(params) {
//     alert("load page success")
// }
document.getElementById("changeColor").addEventListener('click', changeColor);
function changeColor(params) {
    var element = document.querySelectorAll(".demo");
    console.log(element) 
    element[0].style.backgroundColor = "red";
}
var menu = document.getElementById("menu");
function onChange(params) {
    document.getElementsByClassName("printMenu")[0].innerHTML ='You select ' +  menu.value;
}
function onFocus(params) {
    menu.style.background = "yellow";
}
var element = document.querySelectorAll(".demo");
console.log(element)
function onMouseOver(params) {
    // console.log(element); 
    element[0].style.backgroundColor = "yellow";
}
function onMouseout(params) {
    // console.log(element) 
    element[0].style.backgroundColor = "azure";
}
// menu.addEventListener('change', onChange);
// menu.addEventListener('focus', onFocus);
element[0].addEventListener('mouseover', onMouseOver);
element[0].addEventListener('mouseout', onMouseout);
function onKeypress(params) {
    console.log("on keypress")
}
function onKeydown(params) {
    console.log("on key down")
}
function onKeyup(params) {
    console.log("on key up")
}
var user = document.getElementById("userName");
// user.addEventListener('keypress', onKeypress);
user.addEventListener('keydown', onKeydown);
user.addEventListener('keyup', onKeyup);

//Viết chương trình khi người dùng copy nội dung của website thì thông báo là bạn đã copy thành công
function onCopy() {
    document.getElementById("demo").innerHTML = "You copied text!"
}
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var rs = document.getElementById("result");
function sum() {
    if(num1.value.trim() == "") num1.value = 0;
    if(num2.value.trim() == "") num2.value = 0;
    rs.value = parseInt(num1.value) + parseInt(num2.value);
}