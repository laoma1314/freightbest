$(function(){
	$(".signup").click(function(){
		//$("html,body").scrollTop(0);
		$('html,body').animate({scrollTop:0},300);	
		$(".login-dangerous").slideDown("slow");
		$(".closeBtn").click(function(){
			$(".login-dangerous").slideUp("fast");
		});
	});
})