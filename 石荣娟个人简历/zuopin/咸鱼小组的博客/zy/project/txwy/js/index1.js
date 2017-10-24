(function () {
	var header=tools.$('.header')[0];//头部元素
	var headerH=header.offsetHeight;//头部高度
	// console.log(viewHeight)
	// console.log(headerH)
	var weiyunContent=tools.$('.weiyun-content')[0];//微云元素
	changeHeight();
	//浏览器的尺寸发生变化===>可是区域大小变了
	window.onresize=changeHeight;

	//自适应高度
	function changeHeight(){
			var viewHeight=document.documentElement.clientHeight;//浏览器可视区域高度
			weiyunContent.style.height=viewHeight-headerH+'px';
		}
	

	//渲染文件区域
	// 获取pid=0的数据，拿来渲染
	var renderId=0;//渲染id下的子数据
	var datas=data.files;//要准备的数据
	/*var childs=dataControl.getChildById(datas,renderId);//拿到pid:0下的子数据
	console.log(childs);*/

	// console.log(fileHtml());
	//渲染到文件区域中
	//找到右侧文件区域的容器div
	var fileList=tools.$('.file-list ')[0];
	var empty=tools.$('.g-empty')[0];//没有文件，提醒的结构

	fileList.innerHTML=createFileHtml(datas,0);
	//渲染树形结构菜单(左侧)
	// a.先拿到数据
	var treeMenu=tools.$('.tree-menu')[0];
	//找到元素
	//b.准备树形菜单的html结构
	treeMenu.innerHTML=treeHtml(datas,-1);
// var treenav=tools.$('.tree-menu')[0];
	//c.定位树形菜单的对应项 背景高亮显示
	//定位到树形菜单上
	positionTreeById(0);
	var treeMenu1=tools.$('.tree-title');
	//渲染文件导航初始化
	var pathNav=tools.$('.path-nav')[0];
	pathNav.innerHTML=createPathNavHtml(datas,0);

// var treeNav=tools.$('.tree-nav',treeMenu)[0];
// console.log(treeMenu1[0].className);
	//利用事件伪装，点击树形菜单的区域，找到事件源
	for (var i = 0; i < treeMenu1.length; i++) {
		
		tools.addEvent(treeMenu1[i],'click',function(ev){
/*			if(tools.parents(target,'.tree-contro')){
				target.style.display='none';
			}*/
			var target=ev.target;//事件对象，事件源
			
			// console.log(target);
			if (tools.parents(target,'.tree-title')) {//找到父级元素，如果身上有tree-title，那就把事件源转到父级身上
				target=tools.parents(target,'.tree-title');
			}
			//找到div身上的id，自定义属性
			var fileId=target.dataset.fileId;
			

			// console.log(parents.length);
			//循环每条数据写到文件导航上
			
			renderNavFileTree(fileId);
			
		
		});
	}
	
	//点击文件区域，生成树形菜单对应高亮、文件导航路径生成
	tools.addEvent(fileList,'click',function(ev){
		var target=ev.target;//事件源
		if (tools.parents(target,'.item')) {
			target=tools.parents(target,'.item');
			//找到文件id
			var fileId=target.dataset.fileId;
		}
		renderNavFileTree(fileId);
		
		
	});


	//文件导航区域，事件委托
	tools.addEvent(pathNav,'click',function(ev){
		var target=ev.target;//事件对象，事件源
		//找到被点的a标签
		if (tools.parents(target,'a')) {
			//找到文件id
			var fileId=target.dataset.fileId;
			renderNavFileTree(fileId);

		}
		
		
	});
	
	function renderNavFileTree(fileId){
		//点击文件，显示子文件的结构，判断是否有子数据
		//当前id下有没有子数据
		var hasChild=dataControl.hasChilds(datas,fileId);
		if (hasChild) {
			//点击某个标题，他下面的子数据要在文件区域生成相应的html结构
		//找到当前id的子数据，放到文件区域
		//点击动态加到文件区域
			fileList.innerHTML=createFileHtml(datas,fileId);
			empty.style.display='none';
		}
		else{
			empty.style.display='block';
		}

		//点击生成文件导航
		pathNav.innerHTML=createPathNavHtml(datas,fileId);
		//点击生成高亮显示
		var treeNav1=tools.$('.tree-nav',treeMenu)[0];
			tools.removeClass(treeNav1,'tree-nav');
			positionTreeById(fileId);
	};

})()//匿名函数自动执行