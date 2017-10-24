$(function(){
	$('#nav .right ul li.div1').mouseover(function(){
	      $(this).find("div").css("background","url(images/point1.jpg)");
		  /*$(this).find("div").css({"-moz-transform":"rotateY(180deg)"});*/
		  $(this).find("ul").show();
		});
	$('#nav .right ul li.div1').mouseout(function(){
		  $(this).find("div").css("background","url(images/point.jpg)");
		  $(this).find("ul").hide();
		});
	$('#nav .right ul li.div4').hover(function(){
		  $(this).find("p").show();
		},function(){
		  $(this).find("p").hide();
		});
	$('#nav .right ul li.div5').hover(function(){
		$(this).find("ul").show();
		},function(){
		$(this).find("ul").hide();
		});
	$('#head .left .hide').hover(function(){
		$(this).find(".hidden").show();
		},function(){
		$(this).find(".hidden").hide();
		});
	$('#head .left .img4').hover(function(){
		$(this).find(".tm").show();
		},function(){
		$(this).find(".tm").hide();
		});
	var sadd=["images/sm1.jpg","images/sm2.jpg","images/sm3.jpg","images/sm4.jpg","images/sm5.jpg"];
	var badd=["images/bm1.jpg","images/bm2.jpg","images/bm3.jpg","images/bm4.jpg","images/bm5.jpg"];
		//每个图片触发鼠标悬乎事件
	$('#content .bot .left .select ul li').mouseover(function(){
		 $(this).addClass("red").siblings().removeClass("red");
		 var index=$(this).index();
     	 $("#content .bot .left .img").css("background-image","url("+sadd[index]+")");
		 $("#content .bot .left .img .big .pic").css("background-image","url("+badd[index]+")")
	});
	//放大镜
	var img=$("#content .bot .left .img");
	var mask=$("#content .bot .left .img .mask");
	var big_img=$("#content .bot .left .img .big");
	var pic=$("#content .bot .left .img .big .pic");
	img.hover(function(){
		mask.show();
		big_img.show();
		
	},function(){
		mask.hide();
		big_img.hide();
	});
	img.mousemove(function(e){
		var X=e.clientX;
		var Y=e.clientY;
		var off_left=X-120;
		var off_top=Y-220;
		if(off_left<=0){  //滑到最左端
			off_left=0;
			}
		else if(off_left>=this.offsetWidth){  //滑到最右端
			off_left=this.offsetWidth;
			}
		if(off_top<=0){  //滑到最顶端
			off_top=0;
			}
		else if(off_top>=this.offsetHeight){  //滑到最底端
			off_top=this.offsetHeight
			}
			mask.css({"top":off_top,"left":off_left});
			
			var w=off_top/this.offsetHeight;
			var h=off_left/this.offsetWidth;
			pic.css({"left":-pic.width()*h,"top":-pic.width()*w});
		});
		var num=0;
		$("#content .bot .tuijian .btn .top").click(function(){
			num++;		
			$("#content .bot .tuijian .container ul").css("top",-170*num);
			});
		$("#content .bot .tuijian .btn .boto").click(function(){
			num--;		
			$("#content .bot .tuijian .container ul").css("top",-170*num);
			});
	$('#content .bot .right .count .up').click(function(){
		var value=$("#content .bot .right .count input").val();
		value++;
		$("#content .bot .right .count input").val(value);
		});
	$('#content .bot .right .count .down').click(function(){
		var value=$("#content .bot .right .count input").val();
		value--;
		$("#content .bot .right .count input").val(value);
		});
		
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
});

