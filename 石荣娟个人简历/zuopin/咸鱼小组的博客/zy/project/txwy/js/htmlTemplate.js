//渲染在页面中
//准备文件区域html页面的结构
//data-file-id把id写到每个文件身上（为了渲染文件导航）
function fileHtml(fileDate){
	var fileHtml=
	`
         <div class="file-item">
            <div class="item" data-file-id="${fileDate.id}">
                <lable class="checkbox"></lable>
                <div class="file-img">
                    <i></i>
                </div>
                <p class="file-title-box">
                    <span class="file-title">${fileDate.title}</span>
                    <span class="file-edtor">
                        <input class="edtor" value="${fileDate.title}" type="text"/>
                    </span>
                </p>
            </div>
        </div>
	`;
	return fileHtml;//将结构的字符串返回
};

//渲染树形菜单html的结构

function treeHtml(data,renderId){
	var childs=dataControl.getChildById(data,renderId);//拿到pid下的子数据
	// console.log(childs);
	var html='<ul>';
	childs.forEach(function(item){
        var level=dataControl.getLevelById(data,item.id);//获取id获取当前层级
        //tree-nav tree-contro//高亮背景tree-title后面
        //data-file-id='${item.id}'//左侧的树形菜单id与将来点击，右边生成的导航菜单产生对应关系
        var hasChild=dataControl.hasChilds(data,item.id);
        //如果没有子数据则加上类名
        var classNames=hasChild?'tree-contro':'tree-contro-none';
		html+=`
			
				<li>
                    <div class="tree-title ${classNames}" style='padding-left:${level*14}px' data-file-id='${item.id}'>
                        <span>
                            <strong class="ellipsis">${item.title}</strong>
                            <i class="ico"></i>
                        </span>
                    </div>
                    ${treeHtml(data,item.id)}
                </li>
			
		`;
	});
    // ${treeHtml(data,item.id)}//递归，如果有子菜单就在执行id和的子菜单的pic一样
	html+='</ul>';
	return html;//吧连接的字符串返回
};



    //封装定位高亮显示
    function positionTreeById(positionId){
        var ele=document.querySelector('.tree-title[data-file-id="'+positionId+'"]');//找到所有有tree-title的元素并当前被点中
        tools.addClass(ele,'tree-nav');
        // console.log(ele);
    };

    //返回指定id下的所有子数据的html结构
    function createFileHtml(datas,renderId){
        var html='';
        var childs=dataControl.getChildById(datas,renderId);
        childs.forEach(function(item){
            html+=fileHtml(item);
        });
        return html;
    };

    //文件导航
    //通过id得到当前这个id所有的父级数据，得到相应的结构
    function createPathNavHtml(datas,fileId){
        //点击某个div，找到该id下的所有父级
        var parents=dataControl.getParents(datas,fileId).reverse();
        var pathNavHtml='';
        var len=parents.length;
        // console.log(parents);
        parents.forEach(function(item,index){//index索引值
            if(index==parents.length-1){ return; }
            pathNavHtml+=`
                <a href="javascript:;" style="z-index:${len--}" data-file-id="${item.id}">${item.title}</a>
            `;
            
        });
        
        pathNavHtml+=`
                <span class="current-path" style="z-index:0" data-file-id="0">${parents[parents.length-1].title}</span>
        `;
        return pathNavHtml; 
    };
