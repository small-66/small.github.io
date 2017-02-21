(function(){
	
/* header.js */
var header= getId('header');
var nav_list= qSelectA(header,'.nav_list')[0];
var nav_list_a= qSelectA(nav_list,'a');
var users= qSelectA(header,'.users')[0];
var user_message= qSelectA(header,'.user_message')[0];
onShow(users,user_message);
onChick(nav_list_a);
/*end header.js*/
/*aside_left.js*/
var aside_left = getId('aside_left');
var side_more= qSelectA(aside_left,'.side_more')[0];
var load_down_dress=qSelectA(aside_left,'.load_down_dress')[0];
var files_list= qSelectA(aside_left,'.files_list')[0];
var files_lis= files_list.children;

onChick(files_lis);
onShow(side_more,load_down_dress);
/*end aside_left.js*/

/*files_wrap.js*/

/* 渲染file*/
var files_ul =  document.getElementsByClassName('files_ul')[0];
var datas = data.files;
var renderId = 0;
var childs =  dataControl.getChildById(datas,renderId);
var html='';
childs.forEach(function(item,i){
	html+=filesHtml(childs[i]);
});
files_ul.innerHTML=html;

/*渲染file上菜单*/

/*渲染file上菜单 end*/
/* 渲染file end*/




/*多选*/
var activity = document.querySelector('.activity'),
	outLoad = document.querySelector('.outLoad');
var files_area= document.querySelectorAll('.files_area')[0];
var files_selected= files_area.querySelector('#btn_sele');//全选按钮
var files_ul = files_area.querySelector('.files_ul');
var ems=files_ul.getElementsByTagName('em');//单选按钮 （一组）
var onOff=false;//此开关 用来做交互操作
var num=0;

for(var i=0;i<ems.length;i++){
	ems[i].onclick=onSelected;
}

files_selected.onclick=function(){
	numfn(this,ems,'files_selected');
	toShow();
}

function onSelected(){

	if(this.className=='files_selected'){
		this.className='';
		num--;
	}else{
		this.className='files_selected';
		num++;
	}
	if(num==ems.length){
		files_selected.className='files_selected'
	}else{
		files_selected.className=''
	}
	toShow();
}
function toShow(){
	if(num>0){
		activity.style.display='block';
		outLoad.style.display='none';
	}else{
		activity.style.display='none';
		outLoad.style.display='block';
	}
}
/*多选 end*/	

	
}())

		
		