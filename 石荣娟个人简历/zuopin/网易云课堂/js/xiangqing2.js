/*$(function () {
    $('#main .main-left2 ul li').mouseenter(function () {
        $('#main .main-left2 ul li').find('.main-hidden').css('display','block');
        $('#main .main-left2 ul li').find('.main-icon').css('display','none');
    }).mouseleave(function () {
        $('#main .main-left2 ul li').find('.main-icon').css('display','block');
        $('#main .main-left2 ul li').find('.main-hidden').css('display','none');
    });
})*/
$(function() {
$('.main-left2 ul li').mouseenter(function() {
        $(this).find('.main-hidden').css('display','block');
        $(this).find('.main-icon').css('display','none');
    }).mouseleave(function () {
    	$(this).find('.main-hidden').css('display','none');
        $(this).find('.main-icon').css('display',"block");
    });
})