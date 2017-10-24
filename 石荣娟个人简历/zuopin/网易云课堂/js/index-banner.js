/*banner轮播效果*/
   var oDiv=document.getElementById('banner-class');
   var oImg=oDiv.getElementsByTagName('img')[0];
   var oSpan=oDiv.getElementsByTagName('span');
   var sL=oSpan[0];
   var sR=oSpan[1];
   var oUl=document.getElementById('ulImg');
   var oLi=oUl.getElementsByTagName('li');
   var oBg=document.getElementById('class-header-banner');
   var arrBg=['rgb(33,38,44)','rgb(255,204,0)',
   'rgb(18,32,69)','rgb(12,13,17)','rgb(255,210,62)',
   'rgb(52,52,52)','rgb(204,232,236)'];
   var arrImg=['img/banner/l-banner1.png',
   'img/banner/l-banner2.png',
   'img/banner/l-banner3.jpg',
   'img/banner/l-banner4.jpg',
   'img/banner/l-banner5.jpg',
   'img/banner/l-banner6.jpg',
   'img/banner/l-banner7.jpg'];   
   var num=0;
   var oldLi=0;
   var timer = null;
   var speed=0;
   var len=arrImg.length;
   function fn(){
      oImg.src=arrImg[num];
      oBg.style.background=arrBg[num];
      oLi[oldLi].className='';
      oLi[num].className='active';
      oldLi=num;
     }
     fn(0);
/*点击li实现图片切换*/
	for (var i = 0; i < oLi.length; i++) {
		oLi[i].index=i;
		oLi[i].onclick=function(){
			clearInterval(timer);
			num=this.index;
		   fn(this.index);
		   setTimeout(function () { setInterval(timer);},2500)
		  
	}
}
/*自动轮播效果*/

   
	timer = setInterval(function () {
		speed = 1;
		if (num == len - 1) {
			num = -1;
		}
		num += speed;

		fn();
	}, 2500)
/*点击左右span图片切换*/
/*点击左右span时li切换*/
    sL.onclick=function(){
		clearInterval(timer);
		num--;
		if (num==-1) {
		   num=arrImg.length-1;
		}	
		  fn(num);    
		  setInterval(timer);
	}
	sR.onclick=function(){
		clearInterval(timer);
	num++;
	if (num==arrImg.length) {
	   num=0;   
     }  
	   fn(num);  
	   setInterval(timer);
     }
/*点击图片实现li的显示与隐藏*/
  
/*移入移出*/
	oDiv.onmouseover=function(){
		clearInterval(timer);
		sL.style.display = 'block';
		sR.style.display = 'block';
		sL.style.background = 'rgba(0,0,0,.5)';
		sR.style.background = 'rgba(0,0,0,.5)';
	}
	oDiv.onmouseout=function(){
		clearInterval(timer);
		setInterval(timer);
		sL.style.display = 'none';
		sR.style.display = 'none';
	}

	//点击完成页面”假”懒加载效果；

	var continerArr = [`	<div class="l-content-goodTeacher"><!-- 第二版 名师大咖秀 -->
    			<div class="l-content-title">
    				<h3>名师大咖秀</h3>
    				<div class="l-content-title-more">
    				<span>申请加入</span>
    				<span id="i-more"></span></div>
    			</div>
    			<div class="l-content-con2">
    				<div class="l-imga">
    					<img src="img/content/teacher4.png">
    					<div class="l-name">
    						<span>叶梓</span><span>国际摄影爱好者协会主席</span>
    					</div>
    				</div>
    				<div class="l-imga">
    					<img src="img/content/teacher3.png">
    					<div class="l-name">
    						<span>汤婧平</span><span>注册会计师</span>
    					</div>
    				</div>
    				<div class="l-imga">
    					<img src="img/content/teacher2.png">
    					<div class="l-name">
    						<span>王诗沐</span><span>网易云音乐产品负责人</span>
    					</div>
    				</div>
    				<div class="l-imga">
    					<img src="img/content/teacher1.png">
    					<div class="l-name">
    						<span>简七</span><span>简七理财创始人</span>
    					</div>
    				</div>
    				<div class="l-imga">
    					<ul> 
    						<li><a href="">上海职领网络</a><span>[机构]</span></li>
    						<li><a href="">英盛网</a><span>[机构]</span></li>
    						<li><a href="">达梦教育</a><span>[机构]</span></li>
    						<li><a href="">咔图摄影教育中心</a><span>[机构]</span></li>
    						<li><a href="">GeekBand</a><span>[机构]</span></li>
    						<li><a href="">考拉网</a><span>[机构]</span></li>
    						<li><a href="">Hi-Finance</a><span>[机构]</span></li>
    					</ul>
    				</div>
    			</div>
    		</div>`,`<div class="l-content-efficiency"><!-- 第三版 办公效率 -->
    			<div class="l-content-title">
    				<h3>办公效率</h3>
    				<div class="l-content-title-more">
    				<span>更多</span>
    				<span id="i-more"></span></div>
    				<a href="">办公软件</a>
    				<a href="">工作效率</a>
    				<a href="">电脑基础</a>
    			</div>
				<div class="l-content-efficiency-center">
				   <div class="l-content-efficiency-left">
					  <img src="img/content/bangong1.0.png">
				   </div>
				   <div class="you1">
					 <div class="l-content-con-center-all2">
						<div class="hidden-img2">
							<img src="img/content/1ffd70cc-44f0-434b-bf0c-83526f7125da.jpg"></div>
							<h3>向《经济学人》学图表</h3>
							<p>刘万祥ExcelPro</p>
							<div class="i-onlyOne"></div>
						</div>
					<div class="l-content-con-center-all2">
						<div class="hidden-img2">
							<img src="img/content/9a16aee7-122b-42d4-9fa2-a92d7fa72e2b.jpg"></div>
							<h3>Outlook2016 职场入门使用技巧</h3>
							<p>上海职领网络科技有限公司</p>
						</div>
					</div>
				   <div class="you2">
						<div class="l-content-con-center-all2">
							<div class="hidden-img2">
								<img src="img/content/d88b6a45-32ad-4ba1-b4d8-2aa1fdf30317.jpg">
							</div>
							<h3>管理时间，战胜拖延</h3>
							<p>知知网</p>
						</div>
					    <div class="l-content-con-center-all2">
							<div class="hidden-img2">
								<img src="img/content/9e73b45a-218f-4b33-9dca-1cae04bd7b45.jpg"></div>
							<h3>Office小白变高手</h3>
							<p>ExcelPPT李则见</p>
							<div class="i-onlyOne"></div>
							</div>
						</div>
					<div class="you3">
						<div class="l-content-con-center-all2">
							<div class="hidden-img2">
								<img src="img/content/9791532e-df85-40da-b1a1-d01d88af1b58.png">
							    <div class="i-teacher">老师参与</div></div>
							<h3>高效工作 | 跟七君学时间管理</h3>
							<p>七君™</p>
							<div class="i-onlyOne"></div>
							</div>
						<div class="l-content-con-center-all2">
							<div class="hidden-img2">
								<img src="img/content/cc0d2e14-9956-47d1-8806-aa7a540cc444.jpg"></div>
							<h3>Excel商业图表模板大法</h3>
							<p>刘万祥ExcelPro</p>
							<div class="i-onlyOne"></div>
						</div>
					</div>
				</div>

    			<div class="l-content-con-right2">
    					<div class="l-content-con-right-one2">
    					   <div class="bbb">
    						<a href="">玩爆职场信息图表</a>
    						<a href="">解锁H5操作全技能</a>
    						<a href="">全民一起VBA完结上线</a>
    						<a href="">提高办公效率的键盘操作技巧</a>
    						</div>
    					</div><div class="l-content-con-right-two2">
    						<img src="img/content/bangong1.png">
    					</div>
    				</div>
    		</div>`,`<div class="l-content-efficiency"> <!-- 第四版 编程开发 -->
    			<div class="l-content-title">
    				<h3>编程开发</h3>
    				<div class="l-content-title-more">
    				<span>更多</span>
    				<span id="i-more"></span></div>
    				<a href="">产品经理</a>
    				<a href="">移动开发</a>
    				<a href="">编程语言</a>
    				<a href="">前端开发</a>
    			</div>
				<div class="l-content-efficiency-center">
				   <div class="l-content-efficiency-left">
					  <img src="img/content/l-3.1.png">
				   </div>
				   <div class="you1">
					 <div class="l-content-con-center-all2">
						<div class="hidden-img2">
							<img src="img/content/e8ade760-d1ff-4676-9cfd-674d98749d6d.jpg"></div>
							<h3>微信小程序开发与数据分析</h3>
							<p>小蚊子数据分析</p>
							<div class="i-onlyOne"></div>
						</div>
					<div class="l-content-con-center-all2">
						<div class="hidden-img2">
							<img src="img/content/FDA01CF55DA978B3DBEB480C74CD8070.jpg"></div>
							<h3>Meta分析简明教程</h3>
							<p>SCI刀笔吏</p>
						</div>
					</div>
				   <div class="you2">
						<div class="l-content-con-center-all2">
							<div class="hidden-img2">
								<img src="img/content/C01F3DC309B4CD87DC03A35E6A46BE98.png">
							</div>
							<h3>全栈数据工程师</h3>
							<p>宏伦工作室</p>
						</div>
					    <div class="l-content-con-center-all2">
							<div class="hidden-img2">
								<img src="img/content/295cca4b-f19d-4ff0-b1b9-a43f00b54b49.jpg"></div>
							<h3>用Java学编程</h3>
							<p>翁恺</p>
							<div class="i-onlyOne"></div>
							</div>
						</div>
					<div class="you3">
						<div class="l-content-con-center-all2">
							<div class="hidden-img2">
								<img src="img/content/238FC107637B13FB2237DFACF00FEBEB.jpg"></div>
							<h3>如何制作数据分析师简历</h3>
							<p>小蚊子数据分析</p>
							<div class="i-onlyOne"></div>
							</div>
						<div class="l-content-con-center-all2">
							<div class="hidden-img2">
								<img src="img/content/8C6955375C2452E531DB12C8A5E1250E.jpg"></div>
							<h3>Hadoop2.x入门简介及生态圈</h3>
							<p>麦子学院</p>
							<div class="i-onlyOne"></div>
						</div>
					</div>
				</div>

    			<div class="l-content-con-right2">
    					<div class="l-content-con-right-one2">
    					   <div class="ccc">
    						<a href="">真题|2016软考网络工程师</a>
    						<a href="">17门课精通数据挖掘与分析</a>
    						<a href="">30分钟轻松制作HTML5</a>
    						<a href="">和小蚊子学数据分析</a>
    						</div>
    					</div><div class="l-content-con-right-two2">
    						<img src="img/content/3.0.png">
    					</div>
    				</div>
    		</div>`,`	<div class="l-content-efficiency"> <!-- 第五版 职业发展 -->
    			<div class="l-content-title"> 
    				<h3>职业发展</h3>
    				<div class="l-content-title-more">
    				<span>更多</span>
    				<span id="i-more"></span></div>
    				<a href="">求职应聘</a>
    				<a href="">个人提升</a>
    				<a href="">沟通谈判</a>
    				<a href="">演讲与口才</a>
    			</div>
				<div class="l-content-efficiency-center">
				   <div class="l-content-efficiency-left">
					  <img src="img/content/4.0.png">
				   </div>
				   <div class="you1">
					 <div class="l-content-con-center-all2">
						<div class="hidden-img2">
							<img src="img/content/d290d9ab-fb76-41ad-a38d-1f51a12a7efa.jpg"></div>
							<h3>用简笔画提升你的竞争力</h3>
							<p>幻方秋叶PPT</p>
							<div class="i-onlyOne"></div>
						</div>
					<div class="l-content-con-center-all2">
						<div class="hidden-img2">
							<img src="img/content/34a9dde0-ea06-4357-afcf-42d51336a2b8.jpg"></div>
							<h3>马东：《奇葩说》的经营心得</h3>
							<p>网易云课堂</p>
						</div>
					</div>
				   <div class="you2">
						<div class="l-content-con-center-all2">
							<div class="hidden-img2">
								<img src="img/content/f7aa0479-fd5e-46a1-8f61-39f507804ac4.png">
							</div>
							<h3>YouCore：用框架解决问题</h3>
							<p>YouCore</p>
						</div>
					    <div class="l-content-con-center-all2">
							<div class="hidden-img2">
								<img src="img/content/49397247-c1e6-424b-a31c-749dd3686e90.jpg"></div>
							<h3>和大白一起学PPT演讲</h3>
							<p>PPT演讲师大白</p>
							<div class="i-onlyOne"></div>
							</div>
						</div>
					<div class="you3">
						<div class="l-content-con-center-all2">
							<div class="hidden-img2">
								<img src="img/content/69e39393-08e3-4293-90e3-2259c5885cfe.jpg"></div>
							<h3>北美主播带你突破商务英语</h3>
							<p>开言英语</p>
							<div class="i-onlyOne"></div>
							</div>
						<div class="l-content-con-center-all2">
							<div class="hidden-img2">
								<img src="img/content/130ecd5f-0130-46fa-a8b3-59d616104643.jpg"></div>
							<h3>如何掌控自己的时间和生活</h3>
							<p>学以思网络课堂</p>
							<div class="i-onlyOne"></div>
						</div>
					</div>
				</div>

    			<div class="l-content-con-right2">
    					<div class="l-content-con-right-one2">
    					   <div class="ddd">
    						<a href="">改变职场命运的9门必修课</a>
    						<a href="">职场小白如何开口提加薪？</a>
    						<a href="">吃出来的生意和机会</a>
    						<a href="">互联网+时代的职场生存法则</a>
    						</div>
    					</div><div class="l-content-con-right-two2">
    						<img src="img/content/4.1.png">
    					</div>
    				</div>
    		</div>`,`<div class="l-content-goodClass"><!-- 第六版 产品和设计 -->    
    			<div class="l-content-title">
    				<h3>产品和设计</h3>
    				<div class="l-content-title-more">
    				<span>更多</span>
    				<span id="i-more"></span></div>
    				<a href="">初级设计师必备</a>
    				<a href="">超强PS教程</a>
    				<a href="">产品运营</a>
    				<a href="">产品经理</a>
    			</div>
    			<div class="l-content-con">
    		     	<div class="l-content-con-LC">
    				<div class="l-content-con-left">
    					<img src="img/content/6.1.png">
    				</div>
    				<!-- 中间部分 -->
    				<div class="l-content-con-center">
    					<div class="l-content-con-center-all">
    					   <div class="hidden-img">
    						<img src="img/content/8c40232f-daeb-4383-9861-25d42f1f4b12.jpg"></div>
    						<h3>SketchUp 自学教程</h3>
    						<p>设计软件通</p>
    						<div class="i-onlyOne"></div>
    					</div>
    					<div class="l-content-con-center-all">
    					    <div class="hidden-img">
    						<img src="img/content/dbae465b-5ba4-477c-9b5b-5d3a075cae44.PNG"></div>
    						<h3>Principle微交互设计</h3>
    						<p>原型库</p>
    					</div>
    					<div class="l-content-con-center-all">
    					    <div class="hidden-img">
    						<img src="img/content/37e78ab2-573b-4c2d-8cda-51c35b1d8619.jpg">
    						<div class="i-teacher">老师参与</div>
    						</div>
    						<h3>AxureRP7.0标准教程</h3>
    						<p>原型库</p>
    						
    					</div>
    					<div class="l-content-con-center-all">
    					    <div class="hidden-img">
    						<img src="img/content/5447d31e-bbaa-4cbe-a0be-bb78c108bc0b.jpg">
    						<div class="i-teacher">老师参与</div></div>
    						<h3>PS教程超级合辑</h3>
    						<p>设计软件通</p>
    						<div class="i-onlyOne"></div>
    					</div>
    					<div class="l-content-con-center-all">
    					    <div class="hidden-img">
    						<img src="img/content/43923813-09fc-4c9f-ac55-363831cfd98a.jpg"></div>
    						<h3>illustrator 教程</h3>
    						<p>设计软件通</p>
    						<div class="i-onlyOne"></div>
    					</div>
    					<div class="l-content-con-center-all">
    					    <div class="hidden-img">
    						<img src="img/content/7A8A830C27D0CF0E264DF3043D5BB506.jpg"></div>
    						<h3>《和文牛一起学ps》完整版</h3>
    						<p>文牛</p>
    						<div class="i-onlyOne"></div>
    					</div>
    				</div>
    				</div>
    				<!-- 总的right的content -->
    				<div class="l-content-con-right">
    					<div class="l-content-con-right-one">
    					   <div class="eee">
    						<a href="">30天玩爆<数据透视表></a>
    						<a href="">18招教你运营好微信公众账号</a>
    						<a href="">揭秘价值百万的创业计划书</a>
    						<a href="">电商总监带你入门网络营销</a>
    						</div>
    					</div>
    					<div class="l-content-con-right-two">
    						<img src="img/content/6.0.png">
    					</div>
    				</div>
    			</div>
    		</div>`,`  <div class="l-content-goodClass"><!-- 第7版 生活方式 -->    
                <div class="l-content-title">
                    <h3>生活方式</h3>
                    <div class="l-content-title-more">
                    <span>更多</span>
                    <span id="i-more"></span></div>
                    <a href="">个人修养</a>
                    <a href="">摄影拍片</a>
                    <a href="">投资理财</a>
                    <a href="">音乐乐器</a>
                </div>
                <div class="l-content-con">
                    <div class="l-content-con-LC">
                    <div class="l-content-con-left">
                        <img src="img/content/l-7.0.png">
                    </div>
                    <!-- 中间部分 -->
                    <div class="l-content-con-center">
                        <div class="l-content-con-center-all">
                           <div class="hidden-img">
                            <img src="img/content/e194c854-eb2b-4587-a867-3db3dad1f6dc.jpg"></div>
                            <h3>Frank陪你练花体英文</h3>
                            <p>优贝壳</p>
                            <div class="i-onlyOne"></div>
                        </div>
                        <div class="l-content-con-center-all">
                            <div class="hidden-img">
                            <img src="img/content/cf8941d4-81a6-41a9-8fc6-eab874eac1b9.jpg"><div class="i-teacher">老师参与</div></div>
                            <h3>snapseed摄影高手速成</h3>
                            <p>光线摄影学院曾兰老师</p>
                        </div>
                        <div class="l-content-con-center-all">
                            <div class="hidden-img">
                            <img src="img/content/8992308f-2b6a-4b2e-bb61-0299547fbaf9.jpg"></div>
                            <h3>会声会影x10视频教程</h3>
                            <p>飞鸽视频制作</p>
                            
                        </div>
                        <div class="l-content-con-center-all">
                            <div class="hidden-img">
                            <img src="img/content/e1dbc569-b73b-49ab-a27c-0f30075195e9.jpg"></div>
                            <h3>基金生财一课通</h3>
                            <p>力哥说理财</p>
                            <div class="i-onlyOne"></div>
                        </div>
                        <div class="l-content-con-center-all">
                            <div class="hidden-img">
                            <img src="img/content/5c4cec39-c6bc-4ff0-a8cf-919a3547a722.jpg"></div>
                            <h3>数码摄影后期高手之路</h3>
                            <p>站酷高高手</p>
                        </div>
                        <div class="l-content-con-center-all">
                            <div class="hidden-img">
                            <img src="img/content/f89e186b-9af6-492f-8edf-d73ca69f1e11.jpg"></div>
                            <h3>恋爱搭讪必学魔术合集</h3>
                            <p>盗心魔幻</p>
                            <div class="i-onlyOne"></div>
                        </div>
                    </div>
                    </div>
                    <!-- 总的right的content -->
                    <div class="l-content-con-right">
                        <div class="l-content-con-right-one">
                           <div class="fff">
                            <a href="">[独家]跟曾兰老师学摄影</a>
                            <a href="">[免费]每天一个生活神技能</a>
                            <a href="">[系列]谁说手机不能拍大片</a>
                            <a href="">[免费]教你从零开始学游泳</a>
                            </div>
                        </div>
                        <div class="l-content-con-right-two">
                            <img src="img/content/l-7.1.png">
                        </div>
                    </div>
                </div>
            </div>`,` <div class="l-content-goodClass"><!-- 第8版 市场营销 -->    
                <div class="l-content-title">
                    <h3>市场营销</h3>
                    <div class="l-content-title-more">
                    <span>更多</span>
                    <span id="i-more"></span></div>
                    <a href="">市场销售</a>
                    <a href="">网络营销</a>
                    <a href="">电子商务</a>
                    <a href="">品牌推广</a>
                </div>
                <div class="l-content-con">
                    <div class="l-content-con-LC">
                    <div class="l-content-con-left">
                        <img src="img/content/l-8.0.png">
                    </div>
                    <!-- 中间部分 -->
                    <div class="l-content-con-center">
                        <div class="l-content-con-center-all">
                           <div class="hidden-img">
                            <img src="img/content/37ff4c7d-9529-4f7d-9f55-8aba265462c8.jpg"></div>
                            <h3>微商选品的秘密</h3>
                            <p>高丹尼</p>
                            <div class="i-onlyOne"></div>
                        </div>
                        <div class="l-content-con-center-all">
                            <div class="hidden-img">
                            <img src="img/content/93390621-540b-4b31-bd8a-5708c0a6decc.jpg"></div>
                            <h3>朱百宁 自传播</h3>
                            <p>朱百宁自传播</p>
                        </div>
                        <div class="l-content-con-center-all">
                            <div class="hidden-img">
                            <img src="img/content/5b8b101c-597e-4aa3-b721-db868e44896f.jpg">
                            </div>
                            <h3>攻心式销售特训</h3>
                            <p>营销与团队教练郑时墨</p>
                            
                        </div>
                        <div class="l-content-con-center-all">
                            <div class="hidden-img">
                            <img src="img/content/42E38EE1CCD903055CBE8B2727452960.jpg"></div>
                            <h3>屌丝推销逆袭攻略</h3>
                            <p>俞炳呈</p>
                            <div class="i-onlyOne"></div>
                        </div>
                        <div class="l-content-con-center-all">
                            <div class="hidden-img">
                            <img src="img/content/9d6abdda-19eb-4959-a5da-af34490c4d83.jpg"></div>
                            <h3>林杉-活动策划</h3>
                            <p>林杉03</p>
                            <div class="i-onlyOne"></div>
                        </div>
                        <div class="l-content-con-center-all">
                            <div class="hidden-img">
                            <img src="img/content/d78ec2bc-01c2-4392-985d-e553a7990112.jpg"></div>
                            <h3>林杉-软文营销写作</h3>
                            <p>林杉03</p>
                            <div class="i-onlyOne"></div>
                        </div>
                    </div>
                    </div>
                    <!-- 总的right的content -->
                    <div class="l-content-con-right">
                        <div class="l-content-con-right-one">
                           <div class="ggg">
                            <a href="">微商涨粉实操</a>
                            <a href="">四步了解QQ公众平台</a>
                            <a href="">百度竞价推广入门必修课</a>
                            <a href="">消费者心理破解方法</a>
                            </div>
                        </div>
                        <div class="l-content-con-right-two">
                            <img src="img/content/l-8.1.png">
                        </div>
                    </div>
                </div>
            </div>`,`  <div class="l-content-efficiency"> <!-- 第9版 实用语言 -->
                <div class="l-content-title"> 
                    <h3>实用语言</h3>
                    <div class="l-content-title-more">
                    <span>更多</span>
                    <span id="i-more"></span></div>
                </div>
                <div class="l-content-efficiency-center ">
                   <div class="l-content-efficiency-left ">
                      <img src="img/content/l-9.0.png">
                   </div>
                   <div class="you1">
                     <div class="l-content-con-center-all2">
                        <div class="hidden-img2">
                            <img src="img/content/7af5824e-673d-4e0b-b49c-4a204564a96c.jpg"></div>
                            <h3>日语基础发音五十音图</h3>
                            <p>朗阁在线</p>
                            <div class="i-onlyOne"></div>
                        </div>
                    <div class="l-content-con-center-all2">
                        <div class="hidden-img2">
                            <img src="img/content/01e77d46-484b-46e1-9681-2a495fd8f572.jpg"></div>
                            <h3>无痛英语第一季</h3>
                            <p>钟平老师</p>
                        </div>
                    </div>
                   <div class="you2">
                        <div class="l-content-con-center-all2">
                            <div class="hidden-img2">
                                <img src="img/content/056d02dd-fb6d-4b1a-b56d-fdc5c9654752.png">
                            </div>
                            <h3>法语基础发音课</h3>
                            <p>朗阁在线</p>
                        </div>
                        <div class="l-content-con-center-all2">
                            <div class="hidden-img2">
                                <img src="img/content/a4912351-3653-48c8-9cb3-43ed06e0ebe6.jpg"></div>
                            <h3>像美国人一样说英语</h3>
                            <p>LightboardEnglish</p>
                            <div class="i-onlyOne"></div>
                            </div>
                        </div>
                    <div class="you3">
                        <div class="l-content-con-center-all2">
                            <div class="hidden-img2">
                                <img src="img/content/51478467-6c52-434b-91e6-bfdcb881584c.jpg"></div>
                            <h3>拼出广东话（粤语）</h3>
                            <p>拼东话Alex老师</p>
                            <div class="i-onlyOne"></div>
                            </div>
                        <div class="l-content-con-center-all2">
                            <div class="hidden-img2">
                                <img src="img/content/B7311CD0C32081E82D72E58F0F19EB2D.png"></div>
                            <h3>和外教学意大利语发音</h3>
                            <p>言多多</p>
                            <div class="i-onlyOne"></div>
                        </div>
                    </div>
                </div>

                <div class="l-content-con-right2">
                        <div class="l-content-con-right-one2">
                           <div class="hhh">
                            <a href="">科学牢记过万单词</a>
                            <a href="">留学你必须知道的事儿</a>
                            <a href="">6个月学会任何一种外语</a>
                            <a href="">看奥斯卡最佳动画趣味学地道口语</a>
                            </div>
                        </div><div class="l-content-con-right-two2">
                            <img src="img/content/l-9.1.png">
                        </div>
                    </div>
            </div>`,`   <div class="l-content-goodClass"><!-- 第10版 亲子启蒙 -->    
                <div class="l-content-title">
                    <h3>亲子启蒙</h3>
                    <div class="l-content-title-more">
                    <span>更多</span>
                    <span id="i-more"></span></div>
                    <a href="">STEAM</a>
                    <a href="">育儿保健</a>
                    <a href="">科学孕产</a>
                    <a href="">启蒙教育</a>
                </div>
                <div class="l-content-con">
                    <div class="l-content-con-LC">
                    <div class="l-content-con-left">
                        <img src="img/content/l-10.png">
                    </div>
                    <!-- 中间部分 -->
                    <div class="l-content-con-center">
                        <div class="l-content-con-center-all">
                           <div class="hidden-img">
                            <img src="img/content/F1DAC80F9B17E175A60AFC5DF29ECA45.jpg"></div>
                            <h3>3-10岁儿童英语启蒙</h3>
                            <p>麦田映像mytian</p>
                            <div class="i-onlyOne"></div>
                        </div>
                        <div class="l-content-con-center-all">
                            <div class="hidden-img">
                            <img src="img/content/E431BB8AFF2F13B67133BC31E543FAD8.jpg"></div>
                            <h3>蓝猫学李阳疯狂英语</h3>
                            <p>李阳疯狂英语</p>
                        </div>
                        <div class="l-content-con-center-all">
                            <div class="hidden-img">
                            <img src="img/content/6632577395164015008.jpg">
                            </div>
                            <h3>桃李杏梅和樱花</h3>
                            <p>玉米实验室</p>
                            
                        </div>
                        <div class="l-content-con-center-all">
                            <div class="hidden-img">
                            <img src="img/content/1C838EC87F3CAF18F469818A2B128C54.jpg"></div>
                            <h3>7天搞定“熊孩子”</h3>
                            <p>育儿大讲堂</p>
                            <div class="i-onlyOne"></div>
                        </div>
                        <div class="l-content-con-center-all">
                            <div class="hidden-img">
                            <img src="img/content/6631499873769898835.jpeg"></div>
                            <h3>一分钟童趣动物园</h3>
                            <p>V说新语</p>
                            <div class="i-onlyOne"></div>
                        </div>
                        <div class="l-content-con-center-all">
                            <div class="hidden-img">
                            <img src="img/content/900dabb6-96b4-4b3c-b775-f0af6c1778f7.png"></div>
                            <h3>儿童情商培养</h3>
                            <p>初心客厅心理疏导</p>
                            <div class="i-onlyOne"></div>
                        </div>
                    </div>
                    </div>
                    <!-- 总的right的content -->
                    <div class="l-content-con-right">
                        <div class="l-content-con-right-one">
                           <div class="iii">
                            <a href="">[体系]婴幼儿关键能力培养课程</a>
                            <a href="">[系列]医知袋鼠:孕妈成长记</a>
                            <a href="">[系列]幼龄宝宝基本能力培养</a>
                            <a href="">[免费]新手宝妈必备育儿宝典</a>
                            </div>
                        </div>
                        <div class="l-content-con-right-two">
                            <img src="img/content/l-10.1.png">
                        </div>
                    </div>
                </div>
            </div>`];
	var innercount = 0;
var olodebtn = document.getElementById("button-for-action");
var ocontiner = document.getElementsByClassName("containermian")[0];
var showtime = null;

olodebtn.onclick = function(){
	clearInterval(showtime);
	if(innercount == continerArr.length){
		olodebtn.innerText = "已加载完毕";
		setTimeout(function(){
			olodebtn.style.display = "none";
		},1000)
	}else{
		var alpha = 0;
		var ocontinerbox = document.createElement("div");
		ocontinerbox.innerHTML = continerArr[innercount];
		ocontinerbox.style.opacity = 0;
		ocontiner.appendChild(ocontinerbox);
		showtime = setInterval(function(){
			alpha+=1;
			ocontinerbox.style.opacity = alpha/50;
			if(alpha>50){
				clearInterval(showtime);
			}
			// console.log(ocontinerbox.style.opacity);
		},20);
	innercount++;
	}
}

//点击回到顶部js
//侧边跟随栏缓冲特效
var obacktop = document.getElementById("backtop");
var doctop = null;
var slideright = null;
var slidespeed = 0;
var rightspeed = 0;
var omazai = document.getElementsByClassName("mazai")[0];
obacktop.onclick = function(){
	clearInterval(doctop);
	doctop = setInterval(function(){
		slidespeed = Math.floor(0 - document.body.scrollTop) / 15;
		document.body.scrollTop+=slidespeed;
		if(document.body.scrollTop == 0){
			clearInterval(doctop);		//点击缓冲回到顶部
		}	
	},20)
}

//当滚动到一定距离时导航条出现
var oheadcom = document.getElementById("headcomfather");

window.onscroll = function(){
	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	if (scrollTop > 500) {
		oheadcom.style.position = "fixed";
		oheadcom.style.top = "0px";	//导航条出现消失
		oheadcom.style.left = "0px";
		// var scrolltopright = document.documentElement.scrollTop || document.body.scrollTop;
		var target = (document.documentElement.clientHeight - omazai.offsetHeight) / 2;
		startMoveright(parseInt(target + scrollTop));
		function startMoveright(iTarget) {
			clearInterval(slideright);
			slideright = setInterval(function () {			//侧边栏缓冲
				var ispeed = (iTarget - omazai.offsetTop) / 8;
				ispeed = ispeed > 0 ? Math.ceil(ispeed) : Math.floor(ispeed);
				if (omazai.offsetTop == iTarget) {
					clearInterval(slideright);
				}
				else {
					omazai.style.top = omazai.offsetTop + ispeed + "px";
			
				}

			}, 30);
		};

	} else {
		oheadcom.style.position = "";
	}
}

//自定义右键菜单
var ocrusordiv = document.getElementById("crusordiv");
document.oncontextmenu = function (event) {
	var event = event || window.event;
	ocrusordiv.style.display = 'block';
	ocrusordiv.style.left = event.clientX + 'px';
	ocrusordiv.style.top = event.clientY+document.body.scrollTop + 'px';  //这里要注意设置的高度问题	
	return false;
}
document.onclick = function () {
	ocrusordiv.style.display = "none";
}


//搜索框 jsonp 实现
var oajax = document.getElementById("inputajax");
var oserch = document.getElementById("serachclass");
var osearchul = document.getElementById("search-class-son");
oajax.onkeyup = function(){
	if(this.value != ""){
		osearchul.style.display = "block";
var osuggestion=	document.createElement("script");
osuggestion.src = "http://suggestion.baidu.com/su?wd="+this.value+"&p=3&cb=serachfun&t=1324271669786";
document.body.appendChild(osuggestion);		// 动态插入 Script，并生成搜索建议
	} else {
		osearchul.style.display = "none";
	}
}
	function serachfun(data){
		var searchhtml = "";
		if(data.s.length){
			for(let i = 0; i<data.s.length;i++){
			searchhtml+="<li><a href = ''> " + data.s[i] + "</a></li>"	//动态插入 Script 的处理函数
	}
		osearchul.innerHTML = searchhtml;
		}	
	}
