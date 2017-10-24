(function ($) {
    $.fn.zuopin = function (options) {
       
        var settings = $.extend({
            autoSlide: true,      
            slideSpeed:3000,           
            notResponsive:false,            
            action: "mouseover",         
            responsive: true,           
            breakpoint: 700,            
            hoverStyle:"circleSelect",   
            spreadStyle: "all"           
        }, options);
        // 定义变量
        var $show = $(this).find(".showlist"),
            $box = $show.find(".box"),
            boxL = $box.length,
            spreadStyle = settings.spreadStyle.toLowerCase(),
            underBreakPoint = true, 
            $infoBox = $show.find(".circleBox");
        var current = 0,        
            timer = null;   
        var r;

        var pauseSlideShow = false;

        //画圆
        var makeCircle = function () {
            var angle = 0;
            switch (spreadStyle){
                case "left":
                    angle=90;
                    break;
                case "top":
                    angle=180;
                    break;
                case "right":
                    angle= 270;
                    break;
                default:
                    angle=0;
                    break;
            }
            var step = (spreadStyle === "all")? 
            360/ boxL : 180 / (boxL-1);
            $show.css("height", $show.width());
            r = $show.width() / 2;
            $box.css("lineHeight", $box.height() + "px");

            // 鼠标移入内容转到中间

            $box.each(function () {
                var $this = $(this);
                $this.css({
                    'transform': 'rotate(' + angle + 'deg) translate('
                     + r + 'px) rotate(' + (-1*angle) + 'deg)',

                })

                angle+=step;
            })
        };
        var boxId;
        // 通过jQuery选择器给圆填充
        var inflate = function ($which) {
            $box.removeClass(settings.hoverStyle);
            boxId = $which.attr("data-circleBox");
            $which.addClass(settings.hoverStyle);
            $infoBox.filter("#" + boxId).fadeIn();
        };

        var deflate = function ($which) {
            $infoBox.fadeOut();
            $which.removeClass(settings.hoverStyle);
        };

        if (settings.autoSlide) {
            var intervalAnimation = function () {
                    return setInterval(function () {
                        if (!pauseSlideShow) {
                            deflate($($box[current]));
                            current = ( current + 1 ) % boxL;
                            inflate($($box[current]));
                        }
                    }, settings.slideSpeed);
                },
                firstTimeKickOff = function () {
                    timer = intervalAnimation();
                };
             //在容器上悬停时，暂停动画
            $show.hover(function (e) {
                pauseSlideShow = true;
            }, function () {
                if (!underBreakPoint)
                    pauseSlideShow = false;
            });
        }
        // 鼠标悬停在特定的圆上
        $box.on(settings.action,function () {

            if (current != $(this).parent().index() && !underBreakPoint) {
                $infoBox.fadeOut();
                current = $(this).parent().index();
                /*this.css("backgroundColor":'yellow');*/
            inflate($(this));
            }
        });

        // 如果收缩浏览器，暂停动画
        $(window).resize(function () {
            if(settings.responsive && !underBreakPoint){
                makeCircle();
            }

            if ($(window).width() < settings.breakpoint) {
                underBreakPoint = true;
                pauseSlideShow = true;
                $box.removeClass(settings.hoverStyle);
                $show.css("height", "auto");
            }
            else {
                underBreakPoint = false;
                pauseSlideShow = false;
                if (timer === null && settings.autoSlide) {
                    firstTimeKickOff();
                }
            }
        });
        if ($(window).width() >= settings.breakpoint ) {
            makeCircle();
            underBreakPoint = false;
            if(settings.autoSlide)
                firstTimeKickOff();
        }
    }
})(jQuery);
