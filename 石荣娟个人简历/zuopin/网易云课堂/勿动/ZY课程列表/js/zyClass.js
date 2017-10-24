$(function(){
    var arr1 = ['../images/zyClassList/banner1.png', '../images/zyClassList/banner2.jpg', '../images/zyClassList/banner3.png', '../images/zyClassList/banner4.jpg', '../images/zyClassList/banner5.jpg'];
    var num = 0;
    function bbb(this1) {
        $(this1).addClass('_hover').siblings().removeClass('_hover');
        num = $(this1).index();
        $('#lbt div').eq(num).fadeIn('fast').siblings().stop().fadeOut();
    }
    $('.body1').mouseenter(function() {
        clearInterval(timer);
    }).mouseleave(function() {
        timer = setInterval(function() {
            num++;
            num %= $('#bullets li').length;
            bbb('#bullets li:eq(' + num + ')');
        }, 1000);
    })
    $('#btnr').click(function() {
        num++;
        num %= $('#bullets li').length;
        bbb('#bullets li:eq(' + num + ')');
    });
    $('#btnl').click(function() {
        num--;
        if (num < 0)
            n = $('#bullets li').length;
        bbb('#bullets li:eq(' + num + ')');
    });
    $('#bullets li').click(function() {
        bbb(this);
    });
    var timer = setInterval(function() {
        num++;
        num %= $('#bullets li').length;
        bbb('#bullets li:eq(' + num + ')');
    }, 1000);
    var flagnav = 1;
    $('#zy_xxk li').click(function() {
        $('#zy_xxk li').removeClass('active');
        $(this).addClass('active');
        if (flagnav) {
            flagnav = 0;
            $('#navl').removeClass('aaanav');
            $('#navr').addClass('aaanav');
        } else {
            flagnav = 1;
            $('#navr').removeClass('aaanav');
            $('#navl').addClass('aaanav');
        }

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
        }, 500, 'linear')
    });


})



