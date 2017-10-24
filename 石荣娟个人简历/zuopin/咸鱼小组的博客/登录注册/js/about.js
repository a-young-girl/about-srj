/*登录*/
var menuUl=document.getElementById('dropdown-menu');
var menuA=document.getElementById('forget-btn-a');
var time=null;
menuA.onmouseover=function (){
	clearTimeout(time);
	menuUl.style.display='block';
}
menuA.onmouseout=function (){
	
	time=setTimeout(function(){
		menuUl.style.display='none';
	},1000);
}
menuUl.onmouseover=function(){
	clearTimeout(time);
	menuUl.style.display='block';
}
menuUl.onmouseout=function(){
	time=setTimeout(function(){
		menuUl.style.display='none';
	},300);
}

/*判断*/
function check(){
var mobile=document.getElementById('session_email_or_mobile_number').value;
var password=document.getElementById('session_password').value;
var ts1=document.getElementById('sign-in-button-TS1');
var ts2=document.getElementById('sign-in-button-TS2');

var reg=/^1[0-9]{10}$/
if (reg.test(mobile)) {
   ts1.style.display="none";
  }else{
  	ts1.style.display="block";
  	ts1.innerText="请输入正确的手机号"
  }
 var regM=/^[a-zA-Z]\w{7,15}$/ig;
if (password=="") {
  	ts2.style.display="block";
  }else if (!regM.test(password)) {
     ts2.style.display="block";
     ts2.innerText="您的密码不正确"
  }else{
    ts2.style.display="none";
  }
}



