var data = {
	files:[
		{
			id:0,
			pid:0,
			title:"行内元素和块级元素?img算什么?行内元素怎么转化为块级元素?",
			type:"行内元素：和有他元素都在一行上，高度、行高及外边距和内边距都不可改变，文字图片的宽度不可改变，只能容纳文本或者其他行内元素；其中img是行元素块级元素：总是在新行上开始，高度、行高及外边距和内边距都可控制，可以容纳内敛元素和其他元素；行元素转换为块级元素方式：display：block；"
		},
		{
			id:1,
			pid:0,
			title:"将多个元素设置为同一行?清除浮动有几种方式?",
			type:"将多个元素设置为同一行：float，inline-block	清除浮动的方式：						方法一：添加新的元素 、应用 clear：both；						方法二：父级div定义 overflow: hidden；						方法三：利用:after和:before来在元素内部插入两个元素块，从面达到清除浮动的效果。						.clear{zoom:1;}						.clear:after{content:””;clear:both;display:block;height:0;overflow:hidden;visibility:hidden;}"
		},
		{
			id:2,
			pid:0,
			title:"怪异盒模型box-sizing？弹性盒模型|盒布局?",
			type:"在标准模式下的盒模型：盒子总宽度/高度=width/height+padding+border+margin						在怪异模式下的盒模型下，盒子的总宽度和高度是包含内边距padding和边框border宽度在内的，盒子总宽度/高度=width/height + margin = 内容区宽度/高度 + padding + border + margin;						box-sizing有两个值一个是content-box，另一个是border-box。						当设置为box-sizing:content-box时，将采用标准模式解析计算；						当设置为box-sizing:border-box时，将采用怪异模式解析计算。"
		},
		{
			id:0,
			pid:1,
			title:"一.与XML类似之处:",
			type:"（1）.JSON是纯文本。	（2）.JSON具有良好的自我描述性，便于程序员阅读。					（3）.JSON具有层级结构（值中存在值）。						（4）.JSON可通过JavaScript进行解析。						（5）.JSON数据可使用AJAX进行传输。"
		},									
		{
			id:1,
			pid:1,
			title:"二.与XML的不同之处:",
			type:"（1）.没有结束标签。	（2）.读写的速度更快。	（3）.不使用保留字。						（4）.结构简单，生成和解析都比较方便。"
		},
		{
			id:2,
			pid:1,
			title:"三.为什么推荐使用JSON:",
			type:"在实际应用中，经常使用ajax配合json来完成任务，这要比和xml配合使用容易很多，速度也更快。如果使用XML的话，需要读取XML文档，然后使用XML DOM来循环遍历文档并读取值并存储在变量中。						而使用json的话，就只需要读取json字符串，然后进行相关的操作即可。"
		},
		{
			id:0,
			pid:2,
			title:"什么是面向对象编程？",
			type:"用对象的思想去写代码，就是面向对象编程				过程式写法						面向对象写法				我们一直都在使用对象					数组 Array  时间 Date"
		},
		
						
						
						
		{
			id:1,
			pid:2,
			title:"面向对象编程(OOP)的特点	",
			type:"				抽象：抓住核心问题							封装：只能通过对象来访问方法							继承：从已有对象上继承出新的对象							多态：多对象的不同形态"
		},
		{
			id:2,
			pid:2,
			title:"对象的组成",
			type:"							方法（行为、操作）——函数：过程、动态的							属性——变量：状态、静态的"
		},
		{
			id:2,
			pid:2,
			title:"创建第一个面向对象程序",
			type:"								为对象添加属性和方法								Object对象								this指向								创建两个对象 : 重复代码过多"
		},
		{
			id:0,
			pid:3,
			title:"test",
			type:"字符串判断						返回真假						正则.test(字符串)						例子：是否有不是数字的字符"
		},
		{
			id:1,
			pid:3,
			title:"search",
			type:"字符串搜索						返回出现的位置						字符串.search(正则)						忽略大小写：i——ignore"
		},
		{
			id:2,
			pid:3,
			title:"match",
			type:"获取匹配的项目,						返回数组						量词：+						全局匹配：g——global						例子：找出所有数字"
		},
		{
			id:3,
			pid:3,
			title:"replace",
			type:"替换所有匹配						返回替换后的字符串						字符串.replace(正则,想替换的)						例子：敏感词过滤"
		},
		{
			id:0,
			pid:4,
			title:"简述几个css hack?",
			type:"			(1) 图片间隙 							在div中插入图片，图片会将div下方撑大3px。hack1：将div与img写在同一行。hack2：给img添加display：block；							dt li 中的图片间隙。hack：给img添加display：block；							(2) 默认高度，IE6以下版本中，部分块元素，拥有默认高度（低于18px）							hack1：给元素添加：font-size：0；							hack2：声明：overflow：hidden；							表单行高不一致							hack1：给表单添加声明：float：left；height： ；border： 0；							鼠标指针							hack：若统一某一元素鼠标指针为手型：cursor：pointer；"
		},
		{
			id:1,
			pid:4,
			title:"href和src区别?",
			type:" title和alt										href (Hypertext Reference)指定网络资源的位置（超文本引用），从而在当前元素或者当前文档和由当前属性定义的需要的锚点或资源之间定义一个链接或者关系，在 link和a 等元素上使用。							src (Source)属性仅仅嵌入当前资源到当前文档元素定义的位置，是页面必不可少的一部分，是引入。在 img、script、iframe 等元素上使用。							title：既是html标签，又是html属性，title作为属性时，用来为元素提供额外说明信息.							alt：alt是html标签的属性，alt属性则是用来指定替换文字，只能用在img、area和input元素中"
		},
		{
			id:2,
			pid:4,
			title:"transform？animation？区别?",
			type:"animation-duration				Transform:它和width、left一样，定义了元素很多静态样式实现变形、旋转、缩放、移位及透视等功能，通过一系列功能的组合我们可以实现很炫酷的静态效果（非动画)。 							Animation:作用于元素本身而不是样式属性,属于关键帧动画的范畴，它本身被用来替代一些纯粹表现的javascript代码而实现动画,可以通过keyframe显式控制当前帧的属性值.							animation-duration：规定完成动画所花费的时间，以秒或毫秒计。"
		}
		

	]
}
/*

						

						
						

						
						
						
						
 
<li>
						<p></p>
						
					</li>
					<li>
						<p></p>
						
					</li>
					<li>
						<p></p>
						
					</li>
					<!--
						<li>
							
							<p></p>
						
						
						</li>
						<li>
							<p></p>
						</li>
						<li>
							<p></p>
						</li>
						<p>如何让一个div 上下左右居中?</p>
						方法1： .div1{ width:400px;  height:400px;  border:#CCC 1px solid;   background:#99f;  position:absolute;  left:50%;   top:50%;   transform: translate(-50%,-50%); }   <div class="div1"></div> 方法2： .div2{ width:400px;  height:400px;  border:#CCC 1px solid;  background:#99f;  position: absolute;  left:0;  top: 0;  bottom: 0;  right: 0;  margin: auto; }  <div class="div2"></div> 方法3： .div3{ width:400px;  height:400px;  border:#CCC 1px solid;  background:#9f9;  position: absolute;  left: 50%;  top:50%;  margin-left:-200px;  margin-top: -200px;  }   <div class="div3"></div> 
						

						什么是
							

						 一个正则表达式就是由普通字符（例如字符a到z）以及特殊字符（称为元字符）组成的文字模式。该模式描述在查找文字主体时待匹配的一个或多个字符串。正则表达式作为一个模板，将某个字符模式与所搜索的字符串进行匹配。
						         语法：
						/匹配对象的模式/
						         其中，位于“/”定界符之间的部分就是将要在目标对象中进行匹配的模式。用户只要把希望查找匹配对象的模式内容放入“/”定界符之间即可。
						正则表达式是一种可以用于模式匹配和替换的强有力的工具。其作用如下：
						 测试字符串的某个模式。例如，可以对一个输入字符串进行测试，测试该字符串是否存在一个电话号码模式或一个信用卡号码模式。这称为数据有效性验证。
						 替换文本。可以在文档中使用一个正则表达式来标识特定文字，然后可以全部将其删除，或者替换为别的文字。
						 根据模式匹配从字符串中提取一个子字符串。可以用来在文本或输入字段中查找特定文字。
						test
						字符串判断
						返回真假
						正则.test(字符串)
						例子：是否有不是数字的字符

						search
						字符串搜索
						返回出现的位置
						字符串.search(正则)
						忽略大小写：i——ignore

						match
						获取匹配的项目,
						返回数组
						量词：+
						全局匹配：g——global
						例子：找出所有数字
						replace
						替换所有匹配
						返回替换后的字符串
						字符串.replace(正则,想替换的)
						例子：敏感词过滤

						


						


						所谓的JSON是JavaScript Object Notation的缩写，意思是JavaScript对象表示法。
						下面对JSON做一下总结:
						（1）.JSON指的是JavaScript对象表示法，是JavaScript Object Notation的缩写。
						（2）.JSON是轻量级的文本数据交换格式。
						（3）.JSON是独立于平台和语言的。
						（4）.JSON是具有自我描述性，非常易于理解。
						特别说明:JSON是一种用来规范字符串数据格式的语法。

						和优势
						

					-->


 */