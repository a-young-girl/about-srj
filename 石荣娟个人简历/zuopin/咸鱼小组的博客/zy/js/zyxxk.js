

/**
	title : 基于JQ的选项卡组件
	
	Options : event   delay
	
	Methods : nowSel()   getContent()
	
	Events : beforeClick  afterClick

*/

//jQ中的主动触发 : trigger()

$(function(){
	
	var t2 = new Tab();
	t2.init('div2',{
		event : 'mouseover'
	});
});

function Tab(){
	
	this.oParent = null;
	this.aInput = null;
	this.aDiv = null;
	this.iNow = 0;
	
	this.settings = {  //默认参数
		event : 'click',
		delay : 0
	};
}

Tab.prototype.init = function(oParent , opt){
	
	$.extend( this.settings , opt );
	
	this.oParent = $('#'+oParent);
	this.aInput = this.oParent.find('input');
	this.aDiv = this.oParent.find('div');
	
	this.change();
	
};
Tab.prototype.change = function(){
	
	var This = this;
	var timer = null;
	
	this.aInput.on(this.settings.event,function(){
		
		var _this = this;
		
		if( This.settings.event == 'mouseover' && This.settings.delay ){
			
			timer = setTimeout(function(){
				show(_this);
			},This.settings.delay);
			
		}
		else{
			show(this);
		}
		
	}).mouseout(function(){
		clearTimeout(timer);
	});
	
	function show(obj){
		
		$(This).trigger('beforeClick');
		
		This.aInput.attr('class','');
		This.aDiv.css('display','none');
		
		$(obj).attr('class','active');
		
		This.aDiv.eq( $(obj).index() ).css('display','block');
		
		This.iNow = $(obj).index();
		
		$(This).trigger('afterClick');
		
	}
	
};

Tab.prototype.nowSel = function(index){
	
	this.aInput.attr('class','');
	this.aDiv.css('display','none');
	
	this.aInput.eq(index).attr('class','active');
	this.aDiv.eq(index).css('display','block');
	
	this.iNow = index;
	
};

Tab.prototype.getContent = function(){
	
	return this.aDiv.eq(this.iNow).html();
	
};