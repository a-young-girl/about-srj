$(function(){
		var imgN=$('.pic img').size();
		var deg=360/imgN;
		var rotateY=0;
		var rotateX=-10;
		var xN=0;
		var yN=0;
		var timer=null;

		$('.pic img').each(function(i){
			$(this).css({
				"transform":"rotateY("+i*deg+"deg) translateZ(300px)"
			});
			$(this).attr('ondragstart','return false');//防止图片被拖拽
		});

		$(document).mousedown(function(ev){
			var x_=ev.clientX;
			var y_=ev.clientY;
			clearInterval(timer);

			$(this).bind('mousemove',function(ev){
				//获取当前鼠标的坐标
				var x=ev.clientX;
				var y=ev.clientY;
	            //两次坐标之间的距离
	            xN=x-x_;
	            yN=y-y_;

	            rotateY+=xN*0.2;
	            rotateX-=yN*0.1;
	            //移动
	            $('.pic').css({
	            	'transform':'perspective(800px) rotateX('+rotateX+'deg) rotateY('+rotateY+'deg)'
	            });
	            //之前的鼠标坐标
	            x_=ev.clientX;
	            y_=ev.clientY;
			});
		}).mouseup(function(){
			$(this).unbind('mousemove');
			var timer=setInterval(function(){
				xN*=0.95;
				yN*=0.95;
				if(Math.abs(xN)<1 && Math.abs(yN)<1){
					clearInterval(timer);
				}
				rotateY+=xN*0.2;
				rotateX-=yN*0.1;
				$('.pic').css({
					'transform':'perspective(800px) rotateX('+rotateX+'deg) rotateY('+rotateY+'deg)'
				});
			},30);
		});
	});

$(function(){
	$('.me').mouseenter(function(ev){
		$('.think').fadeIn();
	})
	.mousemove(function(){
		$('.think').fadeOut(4000);
	});
})