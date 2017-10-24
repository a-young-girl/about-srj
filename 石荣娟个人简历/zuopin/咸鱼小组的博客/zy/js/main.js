$(function(){
	//广告
	$(window).scroll(function () {
        var $scrollTop=$(document).scrollTop();
        $('#right').stop().animate({'top':$scrollTop+50},20);
    });
	$('#right #dd_close').click(function(){
		$(this).parent().css('display','none');
	});
	//面试题
	$('.row .main div').mouseenter(function(){
		$(this).children().css('display','block');
	}).mouseleave(function(){
		$(this).children().css('display','none');
	});
})