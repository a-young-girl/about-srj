$(function () {
    var timer = null;
    var num = 0;
    timer = setInterval(function () {
        $("#span").text(num + "%");
        num++;
        if (num == 101) {
            clearInterval(timer);
        };
    }, 50);
    $("#cicle").delay(5000).fadeOut(1000);
    $("#span").delay(5000).fadeOut(1000);
    $("#firstlogo").delay(6000).fadeIn(1000);
    $("#mask").delay(8000).fadeOut(1000);
    //   进入页面

    //nav

    $("#homework").mouseenter(function () {
        $("#jquerynav li:nth-child(1)").fadeIn(200);
        $("#jquerynav li:nth-child(2)").fadeIn(400);
        $("#jquerynav li:nth-child(3)").fadeIn(600);
        $("#jquerynav li:nth-child(4)").fadeIn(800);
    })
    $("#homework").mouseleave(function () {
        $("#jquerynav li:nth-child(1)").fadeOut(200);
        $("#jquerynav li:nth-child(2)").fadeOut(400);
        $("#jquerynav li:nth-child(3)").fadeOut(600);
        $("#jquerynav li:nth-child(4)").fadeOut(800);
    })

    //nav

    // 背景 canvas
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var maxWidth = canvas.width;
    var maxHeight = canvas.height;
    var colors = ["#dae1f8", "#dae1f8", "#dae1f8", "#dae1f8", "#dae1f8", "#dae1f8", "#dae1f8", "#dae1f8", "#dae1f8", "#dae1f8"]
    var canvas2 = document.getElementById("canvas2");
    var context2 = canvas2.getContext("2d");
    var maxWidth2 = canvas2.width;
    var maxHeight2 = canvas2.height;
    var colors2 = ["#dae1f8", "#dae1f8", "#dae1f8", "#dae1f8", "#dae1f8", "#dae1f8", "#dae1f8", "#dae1f8", "#dae1f8", "#dae1f8"]
    //随机数
    function random(min, max) {
        return Math.floor(Math.random() * (max - min) + min)
    }

    function Ball() {
        this.a = true;
        this.b = true;
        this.r = random(3, 7); //设置获取球的半径
        this.ballColor = {
            color: colors[Math.floor(Math.random() * colors.length)]
        } //设置获取颜色值
        this.vx = random(30, maxWidth - 30); //设置随机的X坐标点
        this.vy = random(30, maxHeight - 30); //设置随机的Y坐标点
        this.ispeed = random(0, 1); //设置随机速度值 
        this.ispeed2 = random(0, 2); //设置随机速度值
    }

    Ball.prototype.moveBall = function () {
        context.beginPath();
        context2.beginPath();
        if (this.a) {
            this.vx += this.ispeed;
            // console.log(this.vx);
            if (this.vx >= maxWidth - this.r) {
                this.a = false;
            }

        } else {
            this.vx -= this.ispeed;
            if (this.vx <= this.r) {
                this.a = true;
            }
        }

        if (this.b) {
            this.vy += this.ispeed2;
            if (this.vy >= maxHeight - this.r) {
                this.b = false;
            }

        } else {
            this.vy -= this.ispeed2;
            if (this.vy <= this.r) {
                this.b = true;
            }
        }

        context.fillStyle = this.ballColor.color; //圆的颜色
        context2.fillStyle = this.ballColor.color; //圆的颜色
        context.arc(this.vx, this.vy, this.r, 0, Math.PI * 2, false); //绘制圆
        context2.arc(this.vx, this.vy, this.r, 0, Math.PI * 2, false); //绘制圆
        context.fill(); //渲染颜色球出来
        context2.fill(); //渲染颜色球出来
    }

    var Aball = [];
    var Aball2 = [];
    for (var i = 0; i < 40; i++) {
        Aball[i] = new Ball();
        Aball2[i] = new Ball();
    }

    setInterval(function () {
        context.clearRect(0, 0, canvas.width, canvas.height) //清除画布，重绘做准备。
        context2.clearRect(0, 0, canvas2.width, canvas2.height) //清除画布，重绘做准备。
        for (var i = 0; i < 40; i++) {
            Aball[i].moveBall();
            Aball2[i].moveBall();
        }

    }, 40)
    //canvas



    //banner效果
    var bcount = 0;
    var obtnl = $("#banner-left");
    var obtnr = $("#banner-right");
    var oul = $("#banner-ul")
    var oitem = $(".list-item");
    obtnr.click(function () {
        // alert(oul.offset().left);
        if (bcount == 3) {
            bcount = 3;
        } else {
            bcount++;
        }
        oul.animate({
            "left": -(1000 * bcount) + "px"
        }, 1000);
        //    console.log(bcount);
        oitem.animate({
            "height": "15px"
        }, 500);
        oitem.eq(bcount).animate({
            "height": "30px"
        }, 500);
        $("#sideblock").animate({
            "left": bcount * 75
        });
    })
    obtnl.click(function () {
        if (bcount > 0) {
            bcount--;
        } else {
            bcount = 0;
        }
        //   console.log(bcount);
        oul.animate({
            "left": -(1000 * bcount) + "px"
        }, 1000);
        oitem.animate({
            "height": "15px"
        }, 500);
        oitem.eq(bcount).animate({
            "height": "30px"
        }, 500);
        $("#sideblock").animate({
            "left": bcount * 75
        });
    })
    $(".sideimage li").click(function () {
        oitem.animate({
            "height": "15px"
        }, 500);
        $("#sideblock").animate({
            "left": $(this).index() * 75
        });
        oul.animate({
            "left": -(1000 * $(this).index()) + "px"
        }, 1000);
        oitem.eq($(this).index()).animate({
            "height": "30px"
        }, 500);
        bcount = $(this).index();
    })
    $(".list-item").click(function () {
        oitem.animate({
            "height": "15px"
        }, 500);
        $("#sideblock").animate({
            "left": $(this).index() * 75
        });
        oul.animate({
            "left": -(1000 * $(this).index()) + "px"
        }, 1000);
        oitem.eq($(this).index()).animate({
            "height": "30px"
        }, 500);
        bcount = $(this).index();
    })


    //banner 效果

//时钟

    function time() {            //数码时钟
        var data = new Date();  //日期对象；
        var ospan = document.getElementsByClassName("adveispanson");
        // alert(data.getFullYear());
        var str = times(data.getHours()) + times(data.getMinutes()) + times(data.getSeconds()) ;
        function times(a) {
            if (a < 10) {            //判断获取到的时间对象并将它转化为字符串；
                return "0" + a;
            } else {
                return "" + a;
            }
        }
        for (var i = 0; i < ospan.length; i++) {
            ospan[i].innerHTML = str.charAt(i);
        }
    }
    var timer3 = setInterval(time, 1000);

//时钟

    //字符串替换特效

   
       
        var oleftclose = $("#left-close");
        var oleftspan1 = $("#left-info-span1");
        var oleftspan2 = $("#left-info-span2");
        var span1arr = ['We Could Be'];
        var span2arr = ["stronger", "better  ", "powerful"];
        var span1replace = null;
        var span2replace = null;
        var span1num = 0;
        var span2num = 0;
        var span2count = 0;
        var spanflag = true;
        var finish = null;
        $("#left-info").mouseover(function () {
        clearInterval(finish);
        clearInterval(span1replace);
        // oleftspan1.delay(3000).text("");
        span1replace = setInterval(function () {
            oleftspan1.text(function () {
                span1num++;
                if (span1num <= 11) {
                    return span1arr[0].toString().slice(0, span1num) + oleftspan1.text().substr(
                        span1num);
                } else {
                    clearInterval(span1replace);

                }
            })
        }, 100)

        function aa(span2count2) {
            clearInterval(span2replace);
            span2replace = setInterval(function () {
                oleftspan2.text(function () {
                    span2num++;
                    // console.log(span2num);
                    if (span2num <= 8) {
                        // console.log(span2arr[span2count2].toString().slice(0, span2num) +
                        //     oleftspan2.text().substr(span2num));
                        oleftspan2.text(span2arr[span2count2].toString().slice(0, span2num) +
                            oleftspan2.text().substr(span2num));
                    } else if (span2num > 8) {
                        span2num = 0;
                        clearInterval(span2replace);

                    }
                })
            }, 100);
            // }
        };
        finish = setInterval(function () {
            span2count++;
            aa(span2count - 1);
            // console.log(span2count-1);
            if (span2count == 3) {
                span2count = 0;
            }
        }, 2000);
        oleftclose.click(function () {
            clearInterval(finish);
            clearInterval(span1replace);
            $("#left-info").fadeOut(1000);
        })
    })

    //字符串替换特效

    //点击广告消失
    $(".advei .close").click(function () {
        $(this).parent().fadeOut(1000);
    })
    $("#supmask").click(function () {
        $(this).fadeOut(500);
    })
    var ologinimg = document.getElementById("login-icon-img");
    var ologinspan = document.getElementById("login-span");
    var loginarr = ['../images/wzy.jpg', '../images/qq.jpg', '../images/zy.jpg'];
    var subarr = ['1136761403@qq.com', '1162436458@qq.com', '1776037250@qq.com'];
    var namearr = ['邬兆杨', '邱谦', '朱勇'];
    var oinput = document.getElementById("input");
    var omyreg = /^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/;
    var flag = null;
    $("#subscribe").click(function () {
        if (oinput.value == "") {
            alert("您还没有输入！！！");
        } else if (!oinput.value.match(omyreg)) {
            alert("您的邮箱格式不对！");
            oinput.value = "";
        } else if (subarr.indexOf(oinput.value) == -1) {
            alert("您还没有注册！请先注册！");
            oinput.value = "";
        } else {
            alert("欢迎！  " + namearr[subarr.indexOf(oinput.value)] + '');
            ologinimg.src = loginarr[subarr.indexOf(oinput.value)];
            ologinspan.innerText = namearr[subarr.indexOf(oinput.value)];
            oinput.value = "";
            flag = 1;
        }
    })

    //打赏系统
    var donationcount = 0;
    $("#donation-button").click(function () {
        if (donationcount == 0) {
            $("#donationsystem").fadeIn(500);
            donationcount = 1;
        } else {
            $("#donationsystem").fadeOut(500);
            donationcount = 0;
        }
    })
    $(".dona-nums").click(function(){
        if(flag != 1 ){
            alert("请先订阅！");

        }else{  
            //////////////////////////////////////////////////////////////////////////////
        }
    })


    //   自定义滚动条效果
    // var scolldisY = 0;
    var scolldisX = 0;
    $("#scollitem").mousedown(function (ev) {
        scolldisX = ev.pageX - $(this).offset().left;
        //    alert(ev.pageX);
        //    alert($(this).offset().left);
        $(document).mousemove(function (ev) {
            if (ev.pageX - scolldisX - 266 > 540 || ev.pageX - scolldisX - 266 < 0) return;
            $("#scollitem").css("left", ev.pageX - scolldisX - 266);
            //    console.log($("#scollitem").css("left"));
            $("#slidebody").css("left", -((ev.pageX - scolldisX - 266) / 602) * 790);
        })
        $(document).mouseup(function () {
            $(document).off();
        })
    })



    //动态插入最新博站 left
    var hotblogarr = ['../images/csdn.png','../images/udacity.png','../images/mdn.png','../images/cousur.png','../images/runoob.png','../images/guifan.png'];
    var hotblogname = ['CSDN blog','Udacity','MDN','COURSERA','RunooB','BootCss'];
    var hotblogdecale = ['CSDN (Chinese Software Developer Network) 创立于1999年，是中国最大的IT社区和服务平台，为中国的软件开发者和IT从业者提供知识传播、职业发展、软件开发等全生命周期服务', 'Udacity是一家盈利性质的在线教育机构，目前拥有160万用户，教学语言为英语。Udacity的平台不仅有视频，还有自己的学习管理系统，内置编程接口、论坛和社交元素。', 'Mozilla 开发者网络（MDN）是一个完整的学习平台，你可以在这里深入学习网络技术以及能够驱动网络的软件，包括网络标准,例如CSS、HTML 和 JavaScript开发开放网络应用开发 Firefox 附加组件', 'Coursera是免费大型公开在线课程项目，由美国斯坦福大学两名计算机科学教授创办。旨在同世界顶尖大学合作，在线提供免费的网络公开课程。Coursera 的首批合作院校包括斯坦福大学、密歇根大学、普林斯顿大学、宾夕法尼亚大学等美国名校','w3cschool菜鸟教程提供了最全的的web技术基础教程,介绍了HTML教程、CSS教程、Javascript教程、Python基础教程，PHP教程等各种建站基础。','永远遵循同一套编码规范 -- 可以是这里列出的，也可以是你自己总结的。如果你发现本规范中有任何错误，敬请指正。通过 open an issue on GitHub 为本规范添加内容或贡献力量。'];
    var hotblogmaker = ['世纪乐知', 'Sebastian Thrun', 'mozilla','吴恩达(Andrew Ng)','W3cschool','mdo'];
    var hotblogdate = ['2017.7.7','2015.9.15','2016.6.1','2017.8.1','2015.5.20','2014.3.21'];
    var osidebodyleft = document.getElementById("slidebodyleft");
    for (let i = 0; i < 6; i++) {
        var ohotstationitems = '<div class="hotblogstation"><span class="hotbesidedecale">' + '0 comments' + '<span class="insidehotspan"></span></span><div class="hotstationmask"><a href=""><div class="hotstationeyes"><i class="fa fa-eye"></i></div></a></div><img src='+ hotblogarr[i] + '><a href="" class="hotfirstdecale"><h3><a href="">' + hotblogname[i] + '</a></h3></a><div class="hotsecenddecale"><a href=""><i class="fa fa-user"></i>'+ hotblogmaker[i] +'</a><a href=""><i class="fa fa-calendar"></i>'+ hotblogdate[i] +'</a></div><p class="hotthirddecale">' + hotblogdecale[i] + '</p><div class="hotlastdecale"><a href="" class="hotlastbutton"><i class="fa fa-reply"></i>' + 'check here to see' + '</a></div></div>'
        osidebodyleft.innerHTML += ohotstationitems;
    }

    //动态插入最新博站 left



    // 动态插入最新博文 right
    var imgsrc = ["../images/1.jpg", "../images/11.png", "../images/12.png", "../images/13.png", "../images/14.png"];
    var op1word = ['Bing 必应词典桌面版', 'CSS3网格布局介绍','深入理解JavaScript系列','深入理解闭包','数据类型和变量' ];
    var op2word = ['2 months ago', 'a year ago', '5 mouths ago', 'a year ago', 'two years ago'];
    var odecale = document.getElementsByClassName("decalemian")[0];
    var decale = null;
    var decalecount = 0
    decale = setInterval(function () {
        if (decalecount < imgsrc.length) {
            var blogstring = '<a href= "#" class="decale-a" >' + '<img src= ' + imgsrc[decalecount] + ' class="decale-img">' + '<p class="decale-p1">' + op1word[decalecount] + '</p>' + '<p class="decale-p2">' + op2word[decalecount] + '</p>' + '</a>';
            odecale.innerHTML += blogstring;
            decalecount++;
        } else {
            clearInterval(decale);
        }
    }, 80)


    // 动态插入 tag
    var cloudtags = 0;
    var colude = null;
    var ocloudetag = document.getElementById("cloudtag");
    var oaddipt = $("#addcloudtaginput");
    var oaddbtn = $("#addcloudtagbtn");
    var coludearr = ['javaScript', 'css3', 'HTML5', 'BootStrap', 'jQuery', 'Ajax', 'Node.js', 'vue.js', ];
    colude = setInterval(function () {
        cloudtags++;
        if (cloudtags < coludearr.length) {
            var oinsertags = '<a href="" class="cloud-tags">' + coludearr[cloudtags] + '</a>';
            ocloudetag.innerHTML += oinsertags;
        } else {
            cloudtags = 0;
            clearInterval(colude);
        }
    }, 60)
    oaddbtn.click(function () {
        var newtags = '<a href="" class="cloud-tags">' + oaddipt.val() + '</a>'
        ocloudetag.innerHTML += newtags;

        oaddipt.val("");
    })


    //页面内小游戏

    
    //页面内小游戏
})