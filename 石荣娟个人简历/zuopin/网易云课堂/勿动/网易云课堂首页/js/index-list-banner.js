var bannerHover=document.getElementsByName('banner-hover');
var liAllClass=document.getElementById('li-class');
var liClass=liAllClass.getElementsByTagName('li');
var num=0;
var oldNum=0;
var time=null;
for (var i = 0; i < liClass.length; i++) {
	liClass[i].index=i;
	liClass[i].onmouseover=function(){
		fnClass(this.index);
	}
    liClass[i].onmouseout=function(){
    	fnClassStop(this.index);
    }
    for (var j = 0; j < bannerHover.length; j++) {
    	bannerHover[j].index=j;
    	bannerHover[j].onmouseover=function(){
		fnClass(this.index);
	   }
       bannerHover[j].onmouseout=function(){
    	 fnClassStop(this.index);
       }
    }
    
}
function fnClass(num){
	bannerHover[oldNum].style.display='none';
	bannerHover[num].style.display='block';
	oldNum=num;
	clearTimeout(time);
}
function fnClassStop(num){
	time=setTimeout(function(){
			bannerHover[num].style.display='none';
		},500);
}

