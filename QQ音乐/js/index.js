
$(".new_song .new_inner .new_inner_section2 .same_div .img").mouseover(function(ev){
	$(this).children("span").css({
		"transform":"scale(1)",
		"opacity":"1",
		"transition":"all 1s"
	}).end().siblings().eq($(this).index()).css({
		"background":"#31c27c"
	});
	ev.stopPropagation();
}).mouseout(function(ev){
	$(this).children("span").css({
		"transform":"scale(0.5)",
		"opacity":"0",
		"transition":"all 1s"
	}).end().siblings().eq($(this).index()).css({
		"background":""
	});
	ev.stopPropagation();
})

//左右的button进入事件
$(".button a").mouseover(function(){
	$(this).css({
		"background":"#31c27c"
	})
}).mouseout(function(){
	$(this).css({
		"background":"rgba(0,0,0,0.5)"
	})
})
$(".new_song").mouseenter(function(){
	$(".left_button a").animate({
		"left":0,
		"opacity":1
	},400);
	$(".right_button a").animate({
		"right":0,
		"opacity":1
	},400);
}).mouseleave(function(){
	$(".left_button a").animate({
		"left":"-50px",
		"opacity":0
	},400);
	$(".right_button a").animate({
		"right":"-50px",
		"opacity":0
	},400);
})
$(".left_button").mouseenter(function(){
	$(".left_button a").css({
		"background":"#31c27c"
	})
}).mouseleave(function(){
	$(".left_button a").css({
		"background":"rgba(0,0,0,0.5)"
	})
})

$(".right_button").mouseenter(function(){
	$(".right_button a").css({
		"background":"#31c27c"
	})
}).mouseleave(function(){
	$(".right_button a").css({
		"background":"rgba(0,0,0,0.5)"
	})
})

//左右的button点击事件
var n=0;
var cnt=$(".lm_new_song .same_div").length/4-1;
var bian_4=$(".lm_new_song .new_inner .new_inner_section2 .bian_4");
var line=$(".lm_new_song .new_inner .line_5 i");
$(".lm_new_song .right_button a").click(function(){
	if(n<cnt){
		n++;
		bian_4.animate({
			"left":-n*1200
		})
		line.eq(n).addClass("cur_i").siblings().removeClass("cur_i");
	}
	else{
		var div_1=bian_4.children().eq(0).clone();
		div_1.appendTo(bian_4);
		var div_2=bian_4.children().eq(1).clone();
		div_2.appendTo(bian_4);
		var div_3=bian_4.children().eq(2).clone();
		div_3.appendTo(bian_4);
		var div_4=bian_4.children().eq(3).clone();
		div_4.appendTo(bian_4);
		bian_4.animate({
			"left":-(n+1)*1200
		},function(){
			bian_4.css({
				"left":0
			})
			div_1.remove();
			div_2.remove();
			div_3.remove();
			div_4.remove();
		})
		n=0;
		line.eq(n).addClass("cur_i").siblings().removeClass("cur_i");

	}
})

$(".lm_new_song .left_button a").click(function(){
	if(n>0){
		n--;
		bian_4.animate({
			"left":-n*1200
		})
		line.eq(n).addClass("cur_i").siblings().removeClass("cur_i");
	}
	else{
		var div_13=bian_4.children().eq(12).clone();
		div_13.prependTo(bian_4);
		var div_14=bian_4.children().eq(13).clone();
		div_14.prependTo(bian_4);
		var div_15=bian_4.children().eq(14).clone();
		div_15.prependTo(bian_4);
		var div_16=bian_4.children().eq(15).clone();
		div_16.prependTo(bian_4);
		bian_4.css({
			"left":-1200
		});
		bian_4.animate({
			"left":0
		},function(){
			bian_4.css({
			"left":-cnt*1200
		})
			div_13.remove();
			div_14.remove();
			div_15.remove();
			div_16.remove();
		});
		n=cnt;
		line.eq(n).addClass("cur_i").siblings().removeClass("cur_i");
	}
})

/*小横条的绑定点击事件*/
line.click(function(){
		var currnt_index=$(this).index();
		bian_4.animate({
			"left":-(currnt_index*1200)
		});
		line.eq(currnt_index).addClass("cur_i").siblings().removeClass("cur_i");
		n=currnt_index;
})

/*推荐的进入事件同新歌类似*/
$(".rec_button a").mouseover(function(){
	$(this).css({
		"background":"#31c27c"
	})
}).mouseout(function(){
	$(this).css({
		"background":"rgba(0,0,0,0.2)"
	})
})
$(".recommend").mouseenter(function(){
	$(".rec_left_button a").animate({
		"left":0,
		"opacity":1
	},400);
	$(".rec_right_button a").animate({
		"right":0,
		"opacity":1
	},400);
}).mouseleave(function(){
	$(".rec_left_button a").animate({
		"left":"-50px",
		"opacity":0
	},400);
	$(".rec_right_button a").animate({
		"right":"-50px",
		"opacity":0
	},400);
})
$(".rec_left_button").mouseenter(function(){
	$(".rec_left_button a").css({
		"background":"#31c27c"
	})
}).mouseleave(function(){
	$(".rec_left_button a").css({
		"background":"rgba(0,0,0,0.2)"
	})
})

$(".rec_right_button").mouseenter(function(){
	$(".rec_right_button a").css({
		"background":"#31c27c"
	})
}).mouseleave(function(){
	$(".rec_right_button a").css({
		"background":"rgba(0,0,0,0.2)"
	})
})

/*推荐的左右按钮的点击事件*/
var n1=1;
var cnt1=$(".recommend .rec_inner .rec_img .rec_img_7 li").length-1;
var rec_img_7=$(".recommend .rec_inner .rec_img .rec_img_7");
var line7=$(".recommend .rec_inner .line7 i");
var img_7=$(".recommend .rec_inner .rec_img .rec_img_7 li a img")
var index=$(".cur_i_1").index();
$(".rec_right_button a").click(function(){
		var first_li=$(".recommend .rec_inner .rec_img .rec_img_7 li").eq(0).clone(true);
		first_li.appendTo(rec_img_7);
		
		$(".recommend .rec_inner .rec_img .rec_img_7 li").eq(0).remove();
		
		$(".recommend .rec_inner .rec_img .rec_img_7 li").each(function(){
			$(".recommend .rec_inner .rec_img .rec_img_7 li").find("img").removeClass("cur_img");
			$(".recommend .rec_inner .rec_img .rec_img_7 li").eq(1).find("img").addClass("cur_img");
		})
		if(n1<cnt1){
			n1++;
			line7.eq(n1).addClass("cur_i_1").siblings().removeClass("cur_i_1");
		}
		else{
			n1=0;
			line7.eq(n1).addClass("cur_i_1").siblings().removeClass("cur_i_1");
		}
})
$(".rec_left_button a").click(function(){
		var last_li=rec_img_7.find("li:last").clone(true);
		last_li.prependTo(rec_img_7);
		rec_img_7.find("li:last").remove();
		
		$(".recommend .rec_inner .rec_img .rec_img_7 li").each(function(){
			$(".recommend .rec_inner .rec_img .rec_img_7 li").find("img").removeClass("cur_img");
			$(".recommend .rec_inner .rec_img .rec_img_7 li").eq(1).find("img").addClass("cur_img");
		})
		
		if(n1>0){
			n1--;
			line7.eq(n1).addClass("cur_i_1").siblings().removeClass("cur_i_1");
		}
		else{
			n1=cnt1;
			line7.eq(n1).addClass("cur_i_1").siblings().removeClass("cur_i_1");
		}
})
/*给图片加点击事件*/
	var rec_7 = $('.rec_img_7');
	rec_7.find('li').click(function () {
	var el = $(this);
	if (el.index() == 0) {
		rec_7.prepend(rec_7.find('li:last'))
		     .find('.cur_img').removeClass("cur_img");
		el.find('img').addClass("cur_img");
		if(n1==0){
			line7.eq(6).addClass("cur_i_1").siblings().removeClass("cur_i_1");
			n1=cnt1;
		}
		else{
			n1--;
			line7.eq(n1).addClass("cur_i_1").siblings().removeClass("cur_i_1");
		}
	}
	else if (el.index() == 2){
		rec_7.append(rec_7.find('li:first'))
		     .find('.cur_img').removeClass("cur_img");
		el.find('img').addClass("cur_img");
		if(n1==cnt1){
			line7.eq(0).addClass("cur_i_1").siblings().removeClass("cur_i_1");
			n1=0;
		}
		else{
			n1++;
			line7.eq(n1).addClass("cur_i_1").siblings().removeClass("cur_i_1");
		}
	}
	
});

/*给7个小横条添加click事件*/

line7.click(function(){
	var index_i=line7.parent().find(".cur_i_1").index();
	var kong=$(this).index()-index_i;
	if(kong>0){
			for(var i=0;i<kong;i++){
				rec_7.find("li:first").appendTo(rec_7);
				n1++;
		}
		rec_7.find("li a img").removeClass("cur_img");
		rec_7.find("li").eq(1).find("img").addClass("cur_img").siblings().removeClass("cur_i_1");
		line7.eq(n1).addClass("cur_i_1").siblings().removeClass("cur_i_1");
	}
	else{
		kong=index_i-$(this).index();
		for(var i=0;i<kong;i++){
				rec_7.find("li:last").prependTo(rec_7);
				n1--;
		}
		rec_7.find("li a img").removeClass("cur_img");
		rec_7.find("li").eq(1).find("img").addClass("cur_img").siblings().removeClass("cur_i_1");
		line7.eq(n1).addClass("cur_i_1").siblings().removeClass("cur_i_1");
	}
	
})

/*排行榜鼠标经过的事件代码*/	
$(".scoreboard .sb_inner .sb_5 ul li").mouseover(function(){
	$(this).children("span").css({
		"transform":"scale(1)",
		"opacity":"1",
		"transition":"all 1s"
	})
}).mouseout(function(ev){
	$(this).children("span").css({
		"transform":"scale(0.5)",
		"opacity":"0",
		"transition":"all 1s"
	})
})

/*hot区域的绑定事件和new逻辑差不多差不多*/
//左右的button点击事件
var n_new=0;
var cnt_new=$(".lm_hot_song .same_div").length/4-1;
var bian_3=$(".lm_hot_song .new_inner .new_inner_section2 .bian_4");
var line3=$(".lm_hot_song .new_inner .line_5 i");
$(".lm_hot_song .right_button a").click(function(){
	if(n_new<cnt_new){
		n_new++;
		bian_3.animate({
			"left":-n_new*1200
		})
		line3.eq(n_new).addClass("cur_i").siblings().removeClass("cur_i");
	}
	else{
		var div_1=bian_3.children().eq(0).clone();
		div_1.appendTo(bian_3);
		var div_2=bian_3.children().eq(1).clone();
		div_2.appendTo(bian_3);
		var div_3=bian_3.children().eq(2).clone();
		div_3.appendTo(bian_3);
		var div_4=bian_3.children().eq(3).clone();
		div_4.appendTo(bian_3);
		bian_3.animate({
			"left":-(n_new+1)*1200
		},function(){
			bian_3.css({
				"left":0
			})
			div_1.remove();
			div_2.remove();
			div_3.remove();
			div_4.remove();
		})
		n_new=0;
		line3.eq(n_new).addClass("cur_i").siblings().removeClass("cur_i");

	}
})

$(".lm_hot_song .left_button a").click(function(){
	if(n_new>0){
		n_new--;
		bian_3.animate({
			"left":-n_new*1200
		})
		line3.eq(n_new).addClass("cur_i").siblings().removeClass("cur_i");
	}
	else{
		var div_13=bian_3.children().eq(8).clone();
		div_13.prependTo(bian_3);
		var div_14=bian_3.children().eq(9).clone();
		div_14.prependTo(bian_3);
		var div_15=bian_3.children().eq(10).clone();
		div_15.prependTo(bian_3);
		var div_16=bian_3.children().eq(11).clone();
		div_16.prependTo(bian_3);
		bian_3.css({
			"left":-1200
		});
		bian_3.animate({
			"left":0
		},function(){
			bian_3.css({
			"left":-cnt_new*1200
		})
			div_13.remove();
			div_14.remove();
			div_15.remove();
			div_16.remove();
		});
		n_new=cnt_new;
		line3.eq(n_new).addClass("cur_i").siblings().removeClass("cur_i");
	}
})

/*小横条的绑定点击事件*/
line3.click(function(){
		var currnt_index=$(this).index();
		bian_3.animate({
			"left":-(currnt_index*1200)
		});
		line3.eq(currnt_index).addClass("cur_i").siblings().removeClass("cur_i");
		n_new=currnt_index;
})

/*mv首播mouseover代码*/
$("#mv_show .new_inner .new_inner_section2 .img").mouseover(function(){
	$(this).children("span").css({
		"transform":"scale(1)",
		"opacity":"1",
		"transition":"all 1s"
	})
}).mouseout(function(ev){
	$(this).children("span").css({
		"transform":"scale(0.5)",
		"opacity":"0",
		"transition":"all 1s"
	})
})