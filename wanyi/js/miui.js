

$(document).ready(function(){
	$('body').on('click','.miui_dot a.miui_dian',function(){
		var x=$(this).index();
		$('.flexside ul li').eq(x).fadeIn().siblings().hide();
		$('this').addClass('miui_current').siblings().removeClass('miui_current');
		var timer='';
		timer=setInterval(function(){
			if($('.miui_dot a.miui_dian').index($('.miui_dian.miui_current'))+1==$('.miui_dot a.miui_dian').length){
				 $('.miui_dot a.miui_dian').eq(0).click()
				}else{
					 $('.miui_dot a.miui_current').next().click()
				}
		},1000)
	});
	$('.miui_last_li a').mouseover(function(){
		$('.miui_footer_hide').slideDown()
	});
})