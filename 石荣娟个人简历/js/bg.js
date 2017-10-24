$(function(){
	var btn_index=0;
	//右边按钮事件
	$('#section-btn li').each(function(index){
		$(this).click(function(){
			btn_index=index;
			scroller();
		})
	});
	//翻页按钮事件
	$('#go-btn').one('click',btn_go);
	function btn_go(){
	    go_up();
	    go_down();
	    scroller();
		setTimeout(function(){
		    $('#go-btn').one('click',btn_go)
		},1000)
    };
    //响应鼠标
    $('#section-bg').one('mousewheel',mouse);
    function mouse(event){
        if(event.deltaY<0){//deltaY垂直增量
        	go_down();
        }else{
        	go_up();
        }
        scroller();
        setTimeout(function(){
        	$('#section-bg').one('mousewheel',mouse)
        },1000);
    }
    //当前页面赋值
    function go_down(){
    	btn_index++;
    	if(btn_index==$('#section-btn li').length){
    		btn_index=$('#section-btn li').length-1;
    	}
    }
    function go_up(){
    	btn_index--;
    	if(btn_index<0){
    		btn_index=0;
    	}
    }
    //页面滑动
    function scroller(){
    	$('#section-btn li').eq(btn_index)
    	.addClass('active').siblings()
    	.removeClass('active');
    	/*for(var i=0;i<4;i++){
    		
    		$('#section-bg').attr('id','section-bg')
    		.removeClass('put-section-'+i);
    	}*/
    	$('#section-bg').attr('id','section-bg')
    	.removeClass()
    	.addClass(function(){
    		return "put-section-"+btn_index;
    	})
    	.find('.section').eq(btn_index)
    	.find('.bg').addClass('active');
    }
    //响应键盘上下键
    $(document).one('keydown',keyaction);
    function keyaction(event){
    	var e=event||window.event;
    	var key=e.keyCode||e.which||e.charCode;
    	switch(key){
    		case 38:go_up();
    		        scroller();
    		break;
    		case 40:go_down();
    		        scroller();
    		break;
    	};
    	setTimeout(function(){
    		$(document).one('keydown',keyaction);
    	},1000);
    }
})

//星星闪烁效果
window.onload=function(){
    var cols = ['red','yellow','#f0f','blue','green','#fff'];
    var stars = 300;

    for (var i = 0; i <= stars; i++) {

    	var size = Math.random()*5;
      var color = cols[parseInt(Math.random()*6)];

    	$('#starsBox').prepend('<span style=" width: ' + size + 'px; height: ' + size + 'px; top: ' + Math.random()*100 + '%; left: ' + Math.random()*100 + '%; background: ' + color + '; box-shadow: 0 0 '+ Math.random()*50 +'px' + color + ';"></span>') ;
    };

    setTimeout(function(){ 
    	$('#starsBox span').each(function(){  
     		$(this).css('top', Math.random()*100 + '%').css('left', Math.random()*100 + '%'); 
      });
    }, 1);

    setInterval(function(){ 
    	$('#starsBox span').each(function(){  	
     		$(this).css('top', Math.random()*100 + '%').css('left', Math.random()*100 + '%'); 
      });
    }, 100000);
}



