$(function(){
	// 模态框js
	$(".my").on("click",function(){
		$('#exampleModal').modal({backdrop: 'static', keyboard: false});  
	})
	// 咨询的js
	$("#country").change(function(event) {
		/* Act on the event */
		if($(this).val()==1){
			$(".icon-box").css(
				{
					"background":"url(images/box.png) no-repeat",
					"background-size":"100% 100%"
				}
			)
		}
		if($(this).val()==2){
			$(".icon-box").css(
				{
					"background":"url(images/tuopan.png) no-repeat",
					"background-size":"100% 100%"
				}
			)
		}
		if($(this).val()==3){
			$(".icon-box").css(
				{
					"background":"url(images/xinfeng.png) no-repeat",
					"background-size":"100% 100%"
				}
			)
		}
	});
	
    $(".std .container .row .process .move .wrap").animate(
          	{ 
		    	"top": "-680px",
		  	}, 14000,function(){
		  		$(this).css("top","0px");
	});
    setInterval(function(){
      	$(".std .container .row .process .move .wrap").animate(
          	{ 
		    	"top": "-680px",
		  	}, 14000,function(){
		  		$(this).css("top","0px");
		  	});
      }, 14000)
    $(".icon-jiahao").click(function() {
    	if($(this).hasClass('icon-jiahao')){
    		$(this).removeClass('icon-jiahao');
    		$(this).addClass('icon-jianhao');
    	}else{
    		$(this).removeClass('icon-jianhao');
    		$(this).addClass('icon-jiahao');
    	}
    	$(".small_head").slideToggle();
    });
    $(".icon-wenhao1").click(function() {
        $(".qustions").slideToggle();
    });
	          

    function IsPC() {
		var userAgentInfo = navigator.userAgent;
		var Agents = ["Android", "iPhone",
					"SymbianOS", "Windows Phone",
					"iPad", "iPod"];
		var flag = true;
		for (var v = 0; v < Agents.length; v++) {
			if (userAgentInfo.indexOf(Agents[v]) > 0) {
				flag = false;
				break;
			}
		}
		return flag;
	}
    
 
	if(!IsPC()){
		$(".lm_text").hide();
		$(".modal-content").appendTo($(".modal-dialog"));
		$(".my").show();
		$(".close").show();
		$(".modal-content-pc").hide();
		$(".modal-content-phone").show();
	}else{
		$(".lm_text").show();
		$(".modal-content-pc").show();
		$(".modal-content-phone").hide();
	}
	/*
	$(".my").on("click",function(){
		$('#exampleModal').modal({backdrop: 'static', keyboard: false});  
	})*/
	$(".std .container .row .navbar-inverse ul li a").mouseover(function(){
		$(this).addClass("active_1");
	}).mouseout(function(){
		$(this).removeClass("active_1");
	})
    function check_grecaptcha() {
        if(grecaptcha.getResponse() == ""){
            alert("Please complete the captcha");
            return false;
        }
        else{
            return true;
        }    
    }
})