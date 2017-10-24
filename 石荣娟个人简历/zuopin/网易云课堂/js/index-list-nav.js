// 二维码
var div1er=document.getElementById('list-class');
var oUler=document.getElementById('list-class-ul');
var oLiALL=oUler.getElementsByTagName('li');
var oDiver=document.getElementById('list-class-erweima');
 oLi3er=oLiALL[2];

 oLi3er.onmouseover=function(){
 	oDiver.style.display='block';
 }
  oLi3er.onmouseout=function(){
 	oDiver.style.display='none';
 }
/*课程体系*/
var div2tixi=document.getElementById('list-class-kechangtixi');
oLi2tixi=oLiALL[1];

oLi2tixi.onmouseover=function(){
 	div2tixi.style.display='block';
 }
oLi2tixi.onmouseout=function(){
 	div2tixi.style.display='none';
 }
 /*nav的登录*/
 var time=null;
 var navDl=document.getElementById('navDl');
 var ulDl=navDl.getElementsByTagName('ul');
 var liDl=navDl.getElementsByTagName('li')[4];
 var divDenglu=document.getElementById('nav-denglu');

 liDl.onmouseover=show2;
 liDl.onmouseout=hide;
 divDenglu.onmouseover=show2;
 divDenglu.onmouseout=function(){divDenglu.style.display='none';} 

function show2(){
  		divDenglu.style.display='block';
  		clearTimeout(time);
  	}
function hide(){
  		time=setTimeout(function(){
  			divDenglu.style.display='none';
  		},500)
  		
  	}
  		
  			
  	
  		
  	
