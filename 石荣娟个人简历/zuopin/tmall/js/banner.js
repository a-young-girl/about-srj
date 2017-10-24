// JavaScript Document
$(document).ready(function() {
	//console.log($(window).height());
	var height=$(window).height()+"px";
	$("#right-nav").css("height",height);
	var pic_top1=[
	"image/r11.png",
	"image/r22.png",
	"image/r33.png",
	"image/r44.png",
	"image/r55.png",
	"image/r66.png",
	"image/r77.png"];
	var pic_top2=[
	"image/r1.png",
	"image/r2.png",
	"image/r3.png",
	"image/r4.png",
	"image/r5.png",
	"image/r6.png",
	"image/r7.png"];
	$("#right-nav .rg-top ul li").hover(function(){
		var a=$(this).index();
		$(this).children().first().children().attr("src",pic_top1[a]);
	},function(){
		var a=$(this).index();
		$(this).children().first().children().attr("src",pic_top2[a]);
	});
	var pic_bottom1=[
	"image/r88.png",
	"image/r99.png",
	"image/r00.png"];
	var pic_bottom2=[
	"image/r8.png",
	"image/r9.png",
	"image/r0.png"];
	$("#right-nav .rg-bottom ul li").hover(function(){
		var a=$(this).index();
		$(this).children().first().children().attr("src",pic_bottom1[a]);
	},function(){
		var a=$(this).index();
		$(this).children().first().children().attr("src",pic_bottom2[a]);
	});;
	
	
	$("#right-nav ul li").hover(function(){
		if($(this).hasClass("rg")){
			$(this).children().last().show("fast");
		}else if($(this).hasClass("rr")){
			$(this).children().last().show();
		}
	},function(){
		if($(this).hasClass("rg")){
			$(this).children().last().hide("fast");
		}else if($(this).hasClass("rr")){
			$(this).children().last().hide();
		}
	});
	
	
	//console.log($(window).height());
	$("#site-top .nav .rg-nav ul li").hover(function(){
		if($(this).hasClass("li-hover")){
			$(this).children().last().show();
		}
	},function(){
		if($(this).hasClass("li-hover")){
			$(this).children().last().hide();
		}
	});
	$("#content .main-nav .nav ul li").hover(function(){
		$(this).children().last().show();
	},function(){
		$(this).children().last().hide();
	});
	
	
	var $banners=$("#content .main-banner");
	var $nums=$("#content .contain ul.number li");
	var $banner=$("#content .main-banner .contain ul.banners li");
	var index=0;
	
	function changeBanner(flag){
		var $cur=$nums.eq(index);
		var $target = $banner.eq(index);
        var bgColor = $target.attr("bgColor");
        $cur.addClass("cur").siblings("li").removeClass("cur");
        $banners.css("background-color", bgColor);
        $target.stop().fadeIn(300).siblings().hide();
        index = ++index % $nums.size();
	}
	var interval = window.setInterval(changeBanner, 3000);
	changeBanner();
	$nums.mouseover(function () {
        index = $(this).index();
		
        changeBanner();
        clearInterval(interval);
        });
	
	
		
	var $fenlei=$("#content .shangpin ul.fenlei li");
	var $ul_nav=$("#content .shangpin ul.ul-nav li");
	var i=0;
	function changeUl(flag){
		 var $target=$ul_nav.eq(flag);
		 $ul_nav.parent().css("display","block");
		 $target.css("display","block");
		 $target.siblings().hide();
	}
	function hide(){
		
	}
	$fenlei.hover(function(){
		i=$(this).index();
		changeUl(i);
	},function(){
		$ul_nav.parent().css("display","none");
	});
	

});