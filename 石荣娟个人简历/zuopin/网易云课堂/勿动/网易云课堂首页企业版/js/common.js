window.onscroll=function(){
	if(document.body.scrollTop||document.documentElement.scrollTop>0)
		document.getElementById('article').style.display='block';
	else
		document.getElementById('article').style.display='none';
}
window.onload=function(){
	var oArticle=document.getElementById('article');
	var qLi=oArticle.getElementsByTagName('li');
	var weixin=document.getElementsByClassName('weixin');
	var erweima1=weixin[0].getElementsByTagName('div');
	var erweima2=weixin[1].getElementsByTagName('div');
	var xamoDiv=document.getElementById('lesson');
	var give=document.getElementById('give');
	var linKs=document.getElementsByClassName('linKs')[0];
	var linK=linKs.getElementsByClassName('linK');
	var timer=null;
	linKs.onmouseover=function(){
		linK[0].style.display='block';
	}
	linKs.onmouseout=function(){
		timer=setTimeout(function(){
			linK[0].style.display='none';
		},1000)
	}
	linK[0].onmouseover=function(){
		clearTimeout(timer);
		linK[0].style.display='block';
	}
	linK[0].onmouseout=function(){
		linK[0].style.display='none';
	}
	var n=0;
	xamoDiv.onclick=function(){
		if(n==0){
			give.style.display='block';
			n++;
		}
		else{
			give.style.display='none';
			n=0;
		}
	}
	weixin[0].onmouseover=function(){
		erweima1[0].style.display='block';
	}
	weixin[0].onmouseout=function(){
		erweima1[0].style.display='none';
	}
	weixin[1].onmouseover=function(){
		erweima2[0].style.display='block';
	}
	weixin[1].onmouseout=function(){
		erweima2[0].style.display='none';
	}
	qLi[2].onclick=function(){
		window.scrollTo('0','0');
		oArticle.style.display='none';
	}
}
