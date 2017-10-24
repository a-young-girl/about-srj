window.onload = function () {
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

	var aBtn=document.getElementsByClassName('button');
	var Subtotal=document.getElementById('subtotal');
	var Quan=document.getElementById('quantity');
	var Unit=document.getElementById('unit');
	var Priz=document.getElementById('priz');
	var n1=Number(Quan.innerHTML);
	var n2=Number(Unit.innerHTML);
	var n3=parseFloat(priz.innerHTML);

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
	qLi[2].onClick=function(){
		window.scrollTo('0','0');
		oArticle.style.display='none';
	}

	
	aBtn[1].onclick=function(){
		if (aCheckbox[2].checked) {
			n1++;
			Quan.innerHTML=n1;
			Subtotal.innerHTML=n1*n2;
			Priz.innerHTML='￥'+n1*n2+'.00';
		}else{
			n1 = 0;
		}
		

	}
	aBtn[0].onclick=function(){
		if(!aCheckbox[2].checked){
			n1=0;
		}
		if(n1<1){
			n1=1;
		}
		n1--;
		if (n1==0) {
			for (var i = 0; i < aCheckbox.length; i++) {
				aCheckbox[i].checked =false;
			}
		}
		Quan.innerHTML=n1;
		Subtotal.innerHTML=n1*n2;
		Priz.innerHTML='￥'+n1*n2+'.00';

	}
	var aCheckbox = document.getElementsByClassName('checkbox');
	aCheckbox[0].onclick = function () {
		if (!this.checked) {
			for(var i =0;i<aCheckbox.length;i++){
				aCheckbox[i].checked = false;
				Quan.innerHTML=0;
				Subtotal.innerHTML=0;
				Priz.innerHTML='￥0.00';
				jie.style.backgroundColor='#ccc';
			}
		}else {
			for(var i = 0; i < aCheckbox.length; i++){
				aCheckbox[i].checked = true;
				Quan.innerHTML=1;
				Subtotal.innerHTML=100;
				Priz.innerHTML='￥100.00';
				jie.style.backgroundColor='#ff8000';
			}
		}
		
	}

	aCheckbox[1].onclick = function () {
		if (!this.checked) {
			aCheckbox[2].checked = false;
			Quan.innerHTML=0;
			Subtotal.innerHTML=0;
			Priz.innerHTML='￥0.00';
			jie.style.backgroundColor='#ccc';
		}else {
			aCheckbox[2].checked = true;
			Quan.innerHTML=1;
			Subtotal.innerHTML=100;
			Priz.innerHTML='￥100.00';
			jie.style.backgroundColor='#ff8000';
		}
	}

	aCheckbox[2].onclick = function () {
		if (!this.checked) {
			aCheckbox[1].checked = false;
			Quan.innerHTML=0;
			Subtotal.innerHTML=0;
			Priz.innerHTML='￥0.00';
			jie.style.backgroundColor='#ccc';
		}else {
			aCheckbox[1].checked = true;
			Quan.innerHTML=1;
			Subtotal.innerHTML=100;
			Priz.innerHTML='￥100.00';
			jie.style.backgroundColor='#ff8000';
		}
	}

	aCheckbox[3].onclick = function () {
		if (!this.checked) {
			for(var i =0;i<aCheckbox.length;i++){
				aCheckbox[i].checked = false;
				Quan.innerHTML=0;
				Subtotal.innerHTML=0;
				Priz.innerHTML='￥0.00';
				jie.style.backgroundColor='#ccc';	
			}
		}else {
			for(var i = 0; i < aCheckbox.length; i++){
				aCheckbox[i].checked = true;
				Quan.innerHTML=1;
				Subtotal.innerHTML=100;
				Priz.innerHTML='￥100.00';
				jie.style.backgroundColor='#ff8000';
			}
		}
		
	}
	var jie=document.getElementById('jiesuan');
	jie.onclick=function(){
		jie.style.backgroundColor='#ff8000';
	}
}

window.onscroll=function(){
	if(document.body.scrollTop||document.documentElement.scrollTop>0)
		document.getElementById('article').style.display='block';
	else
		document.getElementById('article').style.display='none';
}