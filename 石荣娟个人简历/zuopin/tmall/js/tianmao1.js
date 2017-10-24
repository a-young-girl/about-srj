$(function(){
	$("#logo .right .pl ul li").hover(function(){
	
	$(this).children().last().show();
	},function(){
	
	$(this).children().last().hide();
	});
$(document).scroll(function(){
	console.log($(document).scrollTop());
	var top=$(document).scrollTop();
	if(top>1300){
		$('#hid_search').show();
		$("#left_scolle").show();
		if(top<1967 & top>1300){
		   $("#left_scolle ul li").eq(0).addClass("red").siblings().removeClass("red");
		}else if(top<2534 & top>1967){
		   $("#left_scolle ul li").eq(1).addClass("red").siblings().removeClass("red");
		}else if(top<3201 & top>2534){
		   $("#left_scolle ul li").eq(2).addClass("red").siblings().removeClass("red");
		}else if(top<3968 & top>3201){
		   $("#left_scolle ul li").eq(3).addClass("red").siblings().removeClass("red");
		}else if(top<4235 & top>3968){
		   $("#left_scolle ul li").eq(4).addClass("red").siblings().removeClass("red");
		}else if(top<10935 & top>4235){
		   $("#left_scolle ul li").eq(5).addClass("red").siblings().removeClass("red");
		}else{
		   $("#left_scolle ul li").eq(6).addClass("red").siblings().removeClass("red");
			}

	}
	else{
		$("#left_scolle").hide();
	    $('#hid_search').hide();
	}
	});
$("#left_scolle ul li").hover(function(){
	
	$(this).addClass("red").siblings().removeClass("red");
	});
});