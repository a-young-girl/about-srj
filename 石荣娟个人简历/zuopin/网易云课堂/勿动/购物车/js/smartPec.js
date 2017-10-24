window.onload = function () {

	var oArticle=document.getElementById('article');
	var qLi=oArticle.getElementsByTagName('li');
	var weixin=document.getElementsByClassName('weixin');
	var erweima1=weixin[0].getElementsByTagName('div');
	var erweima2=weixin[1].getElementsByTagName('div');
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

  var oFixed = document.getElementById('spec-nav');
  var aLi = oFixed.getElementsByTagName('li');
  var oHead = document.getElementById('header');
  var aTab = document.getElementsByClassName('spec-tab');
  var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  var videoList = document.getElementById('video-list');
  var videoLi = videoList.getElementsByTagName('li');
  var videoPlay = document.getElementById('video-play');
  var oClose = document.getElementById('close');
  var oV = document.getElementById('video');

  for (var i = 0; i < aLi.length; i++) {
  	aLi[i].index = i;
  	aLi[i].onclick = function () {
  		for (var i = 0; i < aTab.length; i++) {
  			removeClass(aTab[i], 'select');
  			removeClass(aLi[i], 'active');
  		}
  		addClass(aTab[this.index], 'select');
  		addClass(this, 'active');
  	};
  }

  for (var i = 0; i < videoLi.length; i++) {
  	videoLi[i].onclick = function () {
  		videoPlay.style.display = 'block';
  	};
  }
  oClose.onclick = function () {
  	videoPlay.style.display = 'none';
  	oV.pause();
  };
};

window.onscroll=function(){
	if(document.body.scrollTop||document.documentElement.scrollTop>0)
		document.getElementById('article').style.display='block';
	else{
		document.getElementById('article').style.display='none';
	}
	if (document.body.scrollTop||document.documentElement.scrollTop>2300) {
		document.getElementById('header').style.display = 'none';
		document.getElementById('spec-nav').className = 'fixtopGuide';
	}else {
		document.getElementById('header').style.display = 'block';
		document.getElementById('spec-nav').className = '';
	}
}

function addClass (obj, className) {
	if (obj.className == '') {
		obj.className = className;
	}else {
		//如果className不为空
		//检查看是否有和需要添加的类名相同的
		var arrClass = obj.className.split(' ');
		var _index = arrIndexOf(arrClass, className);
		if (_index == -1) {
			obj.className += ' ' + className;
		}
	}
}

function removeClass (obj, className) {
	if (obj.className != '') {
		var arrClass = obj.className.split(' ');
		var _index = arrIndexOf(arrClass, className);
		if (_index != -1) {
			arrClass.splice(_index, 1);
			// obj.className = arrClass;
			obj.className = '';
			for(var i = 0; i < arrClass.length; i++){
				if(i != 0){
					obj.className += (' ' + arrClass[i]);
				}else{
					obj.className += arrClass[i];
				}
			}
		}
	}	
}

//判断是否有相同的className
function arrIndexOf (arr, v) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == v) {
			return i;
		}else if(i == arr.length-1){
			return -1;
		}
		
	}
}