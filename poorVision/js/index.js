$(function(){
		$(window).on('scroll',function(a){
		var hand_up = $(document).scrollTop()-5;
		var com_up = $(document).scrollTop()-1100;
		var ball_up=$(document).scrollTop()-2200;
		var bulb1=$(document).scrollTop()-3300;
		var pop1=$(document).scrollTop()-4400;
		var house=$(document).scrollTop()-5500;
		if($('.handImg')){
			$('.handImg').css({"backgroundPosition":"50% "+hand_up+"px"});
		}
		if($('.compasses')){
			$('.compasses').css({"backgroundPosition":"50% "+com_up+"px"});
		}
		if($('div.bulb1')){
			$('div.bulb1').css({"backgroundPosition":" 90%"+(bulb1-10)+"px"});
			$('div.bulbl2').css({"backgroundPosition":"20%"+(bulb1+10)+"px"});
		}
		if($('div.pop')){
			$('div.pop').css({"backgroundPosition":" 90%"+pop1+"px"});
			$('div.clock').css({"backgroundPosition":"20%"+pop1+"px"});
		}
		if($('div.Horse')){
			$('div.Horse').css({"backgroundPosition":" 90%"+house+"px"});
		}
	})	
})
/*----------------nav.js------------------*/
var nav= $('#nav');
var li_nav=nav.find('li');
li_nav.click(function(){
	$(this).addClass('active').siblings().removeClass();
	var n=$(this).index();
	$("html,body").animate({scrollTop:$('#box')[0].children[n].offsetTop},1000);
});
$('.c').click(function(){
	li_nav.find('i').show();
	li_nav.find('em').hide();
});
$('.e').click(function(){
	li_nav.find('i').hide();
	li_nav.find('em').show();
});
$('#toTop').find('a').click(function(){
	$("html,body").animate({scrollTop:0},2000);
});
/*----------------nav.js end------------------*/
/*-----------banner.js--------------*/


var banner_wrap = $('#banner_wrap'),
	prev = $('.prev'),
	nexts = $('.nexts'),
	btns = $('span');
var icon = btns.eq(0),
	icon_1 = btns.eq(1),
	prev_txt = btns.eq(2),
	next = btns.eq(3),
	next_1 = btns.eq(4),
	next_txt = btns.eq(5);
prev.mouseenter(function(){
	icon.css({
		left:'10px'
});
icon_1.css({
	left:'10px',
	opacity:1,
	filter:'alpha(opacity=100)'
});
prev_txt.css({left:'55px',opacity:1})
});
nexts.mouseenter(function(){
	next.css({
		right:'10px'
});
next_txt.css({
	right:'55px',
	opacity:1,
	filter:'alpha(opacity=100)'
});
next_1.css({
	right:'10px',
	opacity:1,
	filter:'alpha(opacity=100)'
	});
});
prev.mouseleave(function(){
	icon.css({
		left:0
	});
	prev_txt.css({
		left:'65px',
	opacity:0,
	filter:'alpha(opacity=0)'
});
icon_1.css({
	left:0,
	opacity:0,
	filter:'alpha(opacity=0)'
	})
});
nexts.mouseleave(function(){
	next.css({
		right:0
	});
	next_txt.css({
		right:'65px',
	opacity:0,
	filter:'alpha(opacity=0)'
});
next_1.css({
	right:0,
	opacity:0,
	filter:'alpha(opacity=0)'
	})
});

var img_ul = $('.img_ul');
var img_lis= img_ul.find('li');
var imgs= img_lis.find('img');
var arr=[];
$.each(imgs,function(i,e){
	arr.push({
		width:e.width,
		top: getComputedStyle(img_lis.eq(i)[0]).top,
		left: getComputedStyle(img_lis.eq(i)[0]).left,
		opacity:  getComputedStyle(img_lis.eq(i)[0]).opacity,
		zIndex: getComputedStyle(img_lis.eq(i)[0]).zIndex
	})
});
var on=false;
prev.click(function(){
	if(!on){
		on=true;
		arr.push(arr.shift());
		$.each(img_lis,function(i,e){
			mTween(imgs[i],{width:arr[i].width},400,'linear');
		mTween(e,{
			opacity:arr[i].opacity*100,
			top:parseInt(arr[i].top),
			left:parseInt(arr[i].left)	
		},400,'linear',function(){	
				on=false;
			});
			e.style.zIndex=arr[i].zIndex;
		})
	}
});
nexts.click(function(){
	if(!on){
		on=true;
		arr.unshift(arr.pop());
		$.each(img_lis,function(i,e){
			mTween(imgs[i],{width:arr[i].width},400,'linear');
		mTween(e,{
			opacity:arr[i].opacity*100,
			top:parseInt(arr[i].top),
			left:parseInt(arr[i].left)	
		},400,'linear',function(){
				on=false;
			});
			e.style.zIndex=arr[i].zIndex;
		})
	}
	
});

/*--------------banner.js end---------------------*/

/*--------------massage.js------------------------*/
$name_=$('.ml_11').eq(0);
$phoe_=$('.ml_11').eq(1);
$mail_=$('.ml_11').eq(2);
$info_ma=$('.info').find('textarea');
$btn=$('.btn');
$massage_box=$('.massage_box');
$massages_c=$('.massages_c');
setVal();

function setVal(){
	var str='';
	$.each(data,function(i,e){
		str+=`<div class="reply">
            <p class="operation">
            	<span class="information">
                	<i class="name_">${e.name}</i>
                	<i class="phoe_">${e.phone.substring(0,3)+"****"+e.phone.substring(7)}</i>
                	<i class="email_">${e.mail}</i>
                </span>
                <span class="replyTime">${e.time}</span>
            </p>
            <p class="replyContent">${e.info}</p>
            <i class="line"></i> 
        </div>`;
	});
   $massages_c.html(str);
};
$btn.click(function(){
	$name_value=$name_.val()?$name_.val():'***';
	$phoe_value=$phoe_.val()?$phoe_.val():'***';
	$mail_value=$mail_.val()?$mail_.val():'***';
	$info_ma_value=$info_ma.val();
	var date=new Date();
	var year=date.getFullYear(),
		mo=date.getMonth()+1,
		day=date.getDate(),
		hours=date.getHours(),
		m=date.getMinutes(),
		sec=date.getSeconds();
	var time= year+'-'+toDB(mo)+'-'+toDB(day)+' '+toDB(hours)+':'+toDB(m)+':'+toDB(sec);
	//$name_value==''||$phoe_value==''||$mail_value==''||
	if($info_ma_value==''){
		alert('内容不能为空');
	}else{
		$massages_c.html('');
		data.push({
			name:$name_value,
			phone:$phoe_value,
			mail:$mail_value,
			info:$info_ma_value,
			time:time
		});
		setVal();
		$name_.val('');
		$phoe_.val('');
		$mail_.val('');
		$info_ma.val('');
	}
});

function toDB(s){
	return s<10?'0'+s:''+s;
};
/*--------------massage.js end--------------------*/
/*--------------photos.js-------------------------*/

var dataImg=[];
for (var i=0;i<60;i++){
	dataImg.push("image/"+(i%16+1)+".jpg");
}
for(var i=0;i<dataImg.length;i++){
	var $li=$(`<li>`);
	$li[0].dataset.img=dataImg[i];
	$li.appendTo($('.photos_wrap').find('ul'));
}
var lis= $('.photos_list').find('li');
showPic();
function showPic(){
	$.each(lis,function(i,e){
		var high_show= $('.photos_wrap').outerHeight(true);//true包含margin
		var high_li=$(e).position().top;
		var li_height= parseInt($(e).height());
		if(high_li+li_height > 0 && high_li < high_show&&!lis[i].index){
			createImg(e);
			lis[i].index=true;
		}
	});
	
};
function createImg(li){
	var img= document.createElement("img");
	img.src=li.dataset.img;
	mTween(img,{opacity:100},500,'linear');
	li.appendChild(img);
};

var myScroll = new IScroll('.photos_wrap', {
    mouseWheel: true,
    scrollbars: true,
    probeType:3
});

myScroll.on('scroll',function(){
	showPic();
});
		
/*-------------------------photos.js end-------------------------------------*/