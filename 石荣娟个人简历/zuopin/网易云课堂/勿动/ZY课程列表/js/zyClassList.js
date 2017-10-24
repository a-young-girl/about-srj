
$(function() {
    $('.price').mouseenter(function() {
        $(this).find('ul').slideDown();
        $(this).children('a').css('color', '#39a030');
        $(this).find('div').css({
            'transform': 'rotate(180deg)',
            'borderTopColor': '#39a030'
        });
        $.each($('.price ul li'), function(i, n) {
            $(this).click(function() {
                $('.price ul li').removeClass('active');
                $(this).addClass('active');
                $(this).find('span').css('top', i * 50 + 30 + 'px');
                if (i == 0) {
                    $('.price').children('a').html('价格');
                } else {
                    $('.price').children('a').html($(this).find('a').html());
                }
            });
        });
    }).mouseleave(function() {
        $(this).find('ul').stop().slideUp();
        $(this).children('a').css('color', '#000');
        $(this).find('div').css({
            'transform': 'rotate(0deg)',
            'borderTopColor': '#000'
        });
    });
    function getScorll() {
        
        if(document.body.scrollTop){  
        return document.body;
          
        }
    if(document.documentElement.scrollTop)    
        return document.documentElement;
      

    }
    $('.toTop1').click(function() {
        $(getScorll()).animate({
            'scrollTop': 0
        }, 500);
    });
    var html = $('.bbb').html();
    var arr = [];
    var num = 2;
    var clickLi = 2;
    $.each($('#app li'), function(i, n) {
        $(this).click(function() {
            var a = $('#app li').eq(2).attr('class') ? 1 : 0;
            $('#app li').removeClass('active');
            if ($(this).index() >= 2 && $(this).index() <= 8) {
                $(this).addClass('active'); if (clickLi == $(this).index()) return;
                num = $(this).index();imgSrc();

            } else if ($(this).index() == 0) {
                $('#app li').eq(2).addClass('active');
                num = 2;
                if (!a) {
                    imgSrc();
                }
            } else if ($(this).index() == 1) {
                if (num == 2) {
                    alert('没有上一页了');
                    $('#app li').eq(num).addClass('active');
                } else {
                    num--;imgSrc();
                    $('#app li').eq(num).addClass('active');
                }
            } else if ($(this).index() == 9) {
                if (num == 8) {
                    alert('没有下一页了');
                    $('#app li').eq(num).addClass('active');
                } else {
                    num++;imgSrc();
                    $('#app li').eq(num).addClass('active');
                }
            }
            clickLi = $(this).index();

        });
    });
    var arr1 = [];
    $.each($('.bbb ul li div img'), function(i, n) {
        var j=i;
        j%=5;

        var src=Math.floor((i+0.5)/5+1)+''+(j+1);
        arr.push('./images/zyClassList/'+src+'.jpg');
        arr1.push('./images/zyClassList/'+src+'.jpg');
    });

    function arraySort() {
        arr.sort(function(a, b) {
            return Math.random() - 0.5;
        });
        return arr;
    }
    function imgSrc() {
        arr = arraySort();
        $.each($('.bbb ul li div img'), function(i, n) {
            $(this).attr('src', arr[i]);
        });
    }

})