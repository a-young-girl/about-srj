/*登录注册切换*/
var btnDl=document.getElementById('js-sign-up-btn1');
var btnZc=document.getElementById('js-sign-up-btn2');

btnDl.onclick=function(){
   btnZc.className="active";
}
btnZc.onclick=function(){
   btnDl.className="";
}
function check2(){
var zname=document.getElementById('session_email_or_mobile_number2').value;
var mobile2=document.getElementById('session_email_or_mobile_number3').value;
var password2=document.getElementById('session_password2').value;
var ts3=document.getElementById('sign-in-button-TS3');
var ts4=document.getElementById('sign-in-button-TS4');
var ts5=document.getElementById('sign-in-button-TS5');
var patten = /^[a-zA-Z]\w{3,15}$/ig;
if (zname=="") {
	ts3.style.display="block";
}else if(!patten.test(zname)){
  ts3.style.display="block";
  ts3.innerText="请输入合法的用户名"
}
else{
	ts3.style.display="none";

}	
 var reg=/^1[0-9]{10}$/

if (reg.test(mobile2)) {
   ts4.style.display="none";
  }else{
  	ts4.style.display="block";
  	ts4.innerText="请输入正确的手机号"
  }
 var regM=/^[a-zA-Z]\w{7,15}$/ig;
if (password2=="") {
  	ts5.style.display="block";
    ts5.innerText="请输入最少八位密码"
  }else if(!regM.test(password2)){
    ts5.style.display="block";
    ts5.innerText="请输入以字母开头的密码"
  }else{
    ts5.style.display="none";
  }
}