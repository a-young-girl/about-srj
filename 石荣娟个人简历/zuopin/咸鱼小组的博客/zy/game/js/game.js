//整个游戏地图数组
var maps;
//当前关卡
var gindex=0
//当前游戏地图数组
var map;
//界面DIV
var game;
var temp = "";
//定义游戏界面的宽和高
var gheight;
var gwidth;
//定义每个格子的宽高
var iheight;
var iwidth;
//定义英雄的坐标
var heroPoint=new Object();
//定义英雄下一个移动位置的坐标
var nextPoint=new Object();
//定义英雄下下一个移动位置的坐标
var nNextPoint=new Object();
//记录目的地
var items


//页面加载完后执行
function loadGame(){
	initMap()
	initGame()
}

//人物开始行走
function keyDown(){
	var code=window.event.keyCode;
	switch(code){
		case 38:	//上
			nextPoint.x=heroPoint.x;
			nextPoint.y=heroPoint.y-1;
			nNextPoint.x=heroPoint.x;
			nNextPoint.y=heroPoint.y-2;
			
		break;
		case 37:	//左
			nextPoint.x=heroPoint.x-1;
			nextPoint.y=heroPoint.y;
			nNextPoint.x=heroPoint.x-2;
			nNextPoint.y=heroPoint.y;
		break;
		case 40:	//下
			nextPoint.x=heroPoint.x;
			nextPoint.y=heroPoint.y+1;
			nNextPoint.x=heroPoint.x;
			nNextPoint.y=heroPoint.y+2;
		break;
		case 39:	//右
			nextPoint.x=heroPoint.x+1;
			nextPoint.y=heroPoint.y;
			nNextPoint.x=heroPoint.x+2;
			nNextPoint.y=heroPoint.y;
		break;
	}
	//英雄开始移动
	heroMove();
}

function heroMove(){
	
	var mvalue=map[nextPoint.y][nextPoint.x];
	var hero=document.getElementById(heroPoint.x+''+heroPoint.y);
	var img=document.getElementById(nextPoint.x+''+nextPoint.y);
	if(mvalue==2||mvalue==3){			//地板 目的地
		//界面更新
		hero.src="img/2.png";
		img.src="img/6.png";
		
		//地图数组更新
		map[heroPoint.y][heroPoint.x]=2;
		map[nextPoint.y][nextPoint.x]=6;
		
		heroPoint.x=nextPoint.x
		heroPoint.y=nextPoint.y
	}else if(mvalue==4){	//箱子
		var mmvalue=map[nNextPoint.y][nNextPoint.x];
		if(mmvalue==2||mmvalue==3){
			var nimg=document.getElementById(nNextPoint.x+''+nNextPoint.y);
			hero.src="img/2.png";
			img.src="img/6.png";
			nimg.src="img/4.png";
			
			//地图数组更新
			map[heroPoint.y][heroPoint.x]=2;
			map[nextPoint.y][nextPoint.x]=6;
			map[nNextPoint.y][nNextPoint.x]=4;
			
			heroPoint.x=nextPoint.x
			heroPoint.y=nextPoint.y
		}
	}
	
	resetM();
}

function resetM(){
	var count=0;
	for (var i=0;i<items.length;i++) {
		if(!(map[items[i].y][items[i].x]==6||map[items[i].y][items[i].x]==4))
		{
			//还原地图数组值
			map[items[i].y][items[i].x]=3;
			//还原地图界面
			var img=document.getElementById(items[i].x+''+items[i].y);
			img.src="img/3.png";
		}
		if(map[items[i].y][items[i].x]==4){
			count++;
			if(count==items.length){
				alert('恭喜,过关!');
				gindex++;
				initGame();
			}
		}
	}
}


//初始化界面1:墙 2:地板 3:目的地 4:箱子
function initGame() {
	//初始化第一关卡
	map=maps[gindex]
	temp="";
	items=new Array();
	for(var i = 0; i < map.length; i++) {
		for(var j = 0; j < map[i].length; j++) {
			temp += "<img src='img/"+map[i][j]+".png' id='"+j+i+"' height='"+iheight+"px' width='"+iwidth+"px'/>"
			//记忆英雄所在位置
			if(map[i][j]==6){
				heroPoint.x=j;
				heroPoint.y=i;
			}
			//记忆目的地位置
			if(map[i][j]==3){
				var point=new Object();
				point.x=j;
				point.y=i;
				items[items.length]=point;
			}
		}
	}
	game.innerHTML = temp;
}

//初始信息
function initMap() {
	//初始化地图数组
	maps = [
		[
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0],
			[0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 1, 0, 0],
			[0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 3, 2, 6, 1, 0, 0],
			[0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 1, 0, 0],
			[0, 0, 0, 0, 0, 0, 1, 4, 2, 4, 2, 4, 2, 1, 0, 0],
			[0, 0, 0, 0, 0, 0, 1, 2, 4, 1, 4, 2, 2, 1, 0, 0],
			[0, 0, 0, 0, 1, 1, 1, 2, 4, 2, 1, 2, 1, 1, 0, 0],
			[0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 0, 0],
			[0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
		],
		[
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
			[0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 1, 2, 6, 1, 0, 0],
			[0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 1, 2, 2, 1, 0, 0],
			[0, 0, 0, 0, 0, 0, 1, 4, 2, 4, 2, 4, 2, 1, 0, 0],
			[0, 0, 0, 0, 0, 0, 1, 2, 4, 1, 1, 2, 2, 1, 0, 0],
			[0, 0, 0, 0, 1, 1, 1, 2, 4, 2, 1, 2, 1, 1, 0, 0],
			[0, 0, 0, 0, 1, 3, 3, 3, 2, 2, 2, 2, 1, 1, 0, 0],
			[0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
		]
	];
	//获取地图DIV
	game = document.getElementById('game');
	//初始化地图的宽高
	gheight=parseInt(game.style.height)
	gwidth=parseInt(game.style.width)
	//初始化游戏格子的宽高
	iheight=gheight/maps[0].length
	iwidth=gwidth/maps[0][0].length
}