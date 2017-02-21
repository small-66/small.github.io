/*用来封装通用函数*/
function getId(id_name){
	return document.getElementById(id_name);
};
function getTag(name,tagName){
	return name.getElementsByTagName(tagName);
};
function qSelectA(name,all){
	return name.querySelectorAll(all);
};
//onShow 用于解决 显示隐藏的模块
function onShow(obj1,obj2){
	var timer=null;
	obj1.onmouseover=obj2.onmouseover=function(){
		obj2.style.display='block';
		clearTimeout(timer);
	};
	obj1.onmouseout=obj2.onmouseout=function(){
		timer=setTimeout(function(){
			obj2.style.display='none';	
		},1000)
	};
};
//onChick用于解决元素点击后添加active样式
function onChick(arr){
	for(var i=0;i<arr.length;i++){
		fnOnclick(arr[i]);
	}
	function fnOnclick(obj){
		obj.onclick=function(){
			for(var i=0;i<arr.length;i++){
				arr[i].className='';
			}
			this.className='active';
		};
	};
};
//numfn用于修改全选后数组的样式 返回num
 function numfn(obj,arrs,classN){
 	if(obj.className==classN){
		obj.className='';
	}else{
		obj.className=classN;
	}
	for(var i=0;i<arrs.length;i++){
		if(obj.className==classN){
			arrs[i].className=classN;
			num=arrs.length;
		}else{
			arrs[i].className='';
			num=0;
		}
	}
	return num;
 }
 function filesHtml(e){
 	
 	var filesHtml = `<li>
						<strong data-file-id="${e.id}">
							<em></em>
							<i></i>
							<a href="javascript:;">${e.title}</a>
						</strong>
						<span>-</span>
						<span>${e.time}</span>
					</li>`;
	return filesHtml;
 }

