window.onscroll=function(){
	if(document.body.scrollTop||document.documentElement.scrollTop>0){
		$('header').attr('style','background-color:#fff;').addClass('shadow');
		$('header img').attr('src','images/second/Mings_logo2.png');
		$('#tit').attr('style','display:none;')
		$('#tit-right li:eq(2) a').attr('style','color:#0f89e4;');
		$('#tit-right li:eq(1) a').attr('style','color:#000;');
	}
	else{
		$('header').removeAttr('style','background-color:#fff;').removeClass('shadow');
		$('header img').attr('src','images/logo3.png');
		$('#tit').removeAttr('style','display:none;')
		$('#tit-right li:eq(2) a').removeAttr('style','color:#0f89e4;');
		$('#tit-right li:eq(1) a').removeAttr('style','color:#000;');
	}
}
$(function(){
	//声明定时器的flag
	var num=0;

	//让第一个展板显示，其余的隐藏
	$('#intro li').eq(0).siblings().hide();
	//点击下方蓝色li
	$('#list li').click(function(){
		//获取该li的下标
		var index=$(this).index();
		$(this).removeClass('small').addClass('big').siblings().removeClass('big').addClass('small');
		//显示该下标对应的展板，其余的隐藏
		$('#intro li').eq(index).fadeIn(1000).siblings().stop().fadeOut(500);
	})

	//设置定时器
	timer=setInterval(function(){
		num++;
		//当flag超过下标最大值，归为0
		if(num == 3){
			num=0;
		}
		$('#list li').eq(num).animate('width',35);

		$('#intro li').eq(num).fadeIn(1000).siblings().stop().fadeOut(500);

		//显示该下标对应的展板，其余的隐藏
		$('#list li').eq(num).addClass('active').siblings().stop().removeClass('active');

		$('#list li').eq(num).removeClass('small').addClass('big').siblings().removeClass('big').addClass('small');
		
	},2000)

})