 $(function(){
        paopao();
    });
    //需要的参数
    var pp = {
        pl : 0,   //生成的paopao随机的居左的位置
        color : ["ce4f6d","ca4fce","4f82ce","4fce91","ceca4f"],
           //随机添加的颜色
        c : 0,  //初始化颜色
        step : 500
    };
    function paopao(){
        //添加元素
        var html = '<div class="paopao iconfont" style="left: '
        + pp.pl + 'px;color: #'+ pp.color[pp.c] +'">&#xe60d;</div>';
        $(".pao").append(html);

        //获取颜色
        pp.c ++;
        if(pp.c >= pp.color.length){
            pp.c = 0;
        }

        pp.pl = Math.round(Math.random()*100/3);  //随机位置

        //执行动画
        $(".paopao").each(function () {

            if($(this).index()%2 == 0){
                pp.step = 100;
            }else if($(this).index()%3 == 0){
                pp.step = 200;
            }else{
                pp.step = 300;
            }

            if (!$(this).is(":animated")) {
                $(this).animate({            //运动
                    top: "-300px",
                    fontSize: "60px",
                    opacity: "0"
                }, (500-pp.step)*10,
                function () {
                    $(this).remove();        //清除元素
                })
            }
        });
        //定时器
        setTimeout(paopao,pp.step);
    }
