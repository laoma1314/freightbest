window.onload=function(){
	function $(id){
			return document.getElementById(id);
		}
		$("li_check").addEventListener("mouseover",function(){
			$("order_info").style.display="block";
			$("bottom_line").style.background="url(imags/header_new_v7.png) no-repeat -153px -28px";
			document.getElementsByClassName("info_special_2")[0].style.color="#0299d8";
		},false);
		$("li_check").addEventListener("mouseout",function(){
			$("order_info").style.display="none";
			$("bottom_line").style.background="";
			document.getElementsByClassName("info_special_2")[0].style.color="";
		},false);
		$("select_meun_0").addEventListener("mouseover",function(){
			document.getElementsByClassName("ul_0")[0].style.display="block";
		},false);
		$("select_meun_0").addEventListener("mouseout",function(){
			document.getElementsByClassName("ul_0")[0].style.display="none";
		},false);
		$("select_meun_2").addEventListener("mouseover",function(){
			document.getElementsByClassName("ul_2")[0].style.display="block";
		},false);
		$("select_meun_2").addEventListener("mouseout",function(){
			document.getElementsByClassName("ul_2")[0].style.display="none";
		},false);
		$("select_meun_3").addEventListener("mouseover",function(){
			document.getElementsByClassName("ul_3")[0].style.display="block";
		},false);
		$("select_meun_3").addEventListener("mouseout",function(){
			document.getElementsByClassName("ul_3")[0].style.display="none";
		},false);
		$("select_meun_4").addEventListener("mouseover",function(){
			document.getElementsByClassName("ul_4")[0].style.display="block";
		},false);
		$("select_meun_4").addEventListener("mouseout",function(){
			document.getElementsByClassName("ul_4")[0].style.display="none";
		},false);
		$("select_meun_5").addEventListener("mouseover",function(){
			document.getElementsByClassName("ul_5")[0].style.display="block";
		},false);
		$("select_meun_5").addEventListener("mouseout",function(){
			document.getElementsByClassName("ul_5")[0].style.display="none";
		},false);
		$("select_meun_6").addEventListener("mouseover",function(){
			document.getElementsByClassName("ul_6")[0].style.display="block";
		},false);
		$("select_meun_6").addEventListener("mouseout",function(){
			document.getElementsByClassName("ul_6")[0].style.display="none";
		},false);
		//a_click获取元素
		var lm_tab_right_21=document.getElementsByClassName("lm_tab_right_21")[0].getElementsByClassName("lm_tab_content");
		var lm_tab_right_22=document.getElementsByClassName("lm_tab_right_22")[0].getElementsByClassName("lm_tab_content");
		var lm_tab_right_23=document.getElementsByClassName("lm_tab_right_23")[0].getElementsByClassName("lm_tab_content");
		var lm_tab_right_24=document.getElementsByClassName("lm_tab_right_24")[0].getElementsByClassName("lm_tab_content");
		var lm_tab_right_25=document.getElementsByClassName("lm_tab_right_25")[0].getElementsByClassName("lm_tab_content");
		var lm_tab_right_26=document.getElementsByClassName("lm_tab_right_26")[0].getElementsByClassName("lm_tab_content");
		var lm_tab_right_27=document.getElementsByClassName("lm_tab_right_27")[0].getElementsByClassName("lm_tab_content");
		var lm_tab_right_28=document.getElementsByClassName("lm_tab_right_28")[0].getElementsByClassName("lm_tab_content");
		var a_click=document.getElementsByClassName("lm_click_1")[0].getElementsByTagName("a");
		for(var i=0;i<a_click.length;i++){
			a_click[i].index=i;
			a_click[i].onclick=function(){
				for(var i=0;i<a_click.length;i++){
					a_click[i].className="";
					lm_tab_right_21[i].classList.add("lm_onclik_appear");
				}
				this.className="lm_onclick";
				lm_tab_right_21[this.index].classList.remove("lm_onclik_appear");
			}
		}
		var div1=$("toggle").getElementsByClassName("img_5")[0];
		var len=div1.children.length;
		var a=document.getElementsByClassName("circle")[0].getElementsByTagName("a");
		var count=0;
		var timer=window.setInterval(function(){toggle()},3000);
		//当鼠标移到$("toggle")上清除时间
		$("toggle").onmouseover=function(){window.clearInterval(timer)};
		//当鼠标移出$("toggle")上调用时间
		$("toggle").onmouseout=function(){timer=window.setInterval(function(){toggle()},3000);};
		function toggle(){
			count++;
			div1.style.left=count*(-945)+"px";
			if(count>4){
				count=0;
				div1.style.left=0;
			}
			for(var i=0;i<len;i++){
				a[i].className="";
				a[count].className="circle_curr";
			}
			for(var i=0;i<len;i++){
				a[i].onclick=function(){
					count=parseInt(this.innerHTML)-1;
					for(var i=0;i<len;i++){
						a[i].className="";
					}
					this.className="circle_curr";
					div1.style.left=(parseInt(this.innerHTML)-1)*(-945)+"px";
				}
			}
	}	
		//点击出现的切换选项卡代码
		var lm_same_a=document.getElementsByClassName("lm_same_a");
		var lm_tab_right=document.getElementsByClassName("lm_tab_right");
		for(var i=0;i<lm_same_a.length;i++){
			lm_same_a[i].index=i;
			lm_same_a[i].onclick=function(){
				for(var i=0;i<lm_same_a.length;i++){
					lm_same_a[i].classList.remove("white_font");
					lm_tab_right[i].style.display="none";
				}
				lm_same_a[this.index].classList.add("white_font");
				lm_tab_right[this.index].style.display="block";
			}
		}
		var a_click_1=document.getElementsByClassName("lm_click_1")[1].getElementsByTagName("a");
		for(var i=0;i<a_click_1.length;i++){
			a_click_1[i].index=i;
			a_click_1[i].onclick=function(){
				for(var i=0;i<a_click_1.length;i++){
					a_click_1[i].className="";
					lm_tab_right_22[i].classList.add("lm_onclik_appear");
				}
				this.className="lm_onclick";
				lm_tab_right_22[this.index].classList.remove("lm_onclik_appear");
			}
		}
		var a_click_2=document.getElementsByClassName("lm_click_1")[2].getElementsByTagName("a");
		for(var i=0;i<a_click_2.length;i++){
			a_click_2[i].index=i;
			a_click_2[i].onclick=function(){
				for(var i=0;i<a_click_2.length;i++){
					a_click_2[i].className="";
					lm_tab_right_23[i].classList.add("lm_onclik_appear");
				}
				this.className="lm_onclick";
				lm_tab_right_23[this.index].classList.remove("lm_onclik_appear");
			}
		}
		var a_click_3=document.getElementsByClassName("lm_click_1")[3].getElementsByTagName("a");
		for(var i=0;i<a_click_3.length;i++){
			a_click_3[i].index=i;
			a_click_3[i].onclick=function(){
				if(this.index==3)
				return;
				for(var i=0;i<a_click_3.length;i++){
					a_click_3[i].className="";
					lm_tab_right_24[i].classList.add("lm_onclik_appear");
				}
				this.className="lm_onclick";
				lm_tab_right_24[this.index].classList.remove("lm_onclik_appear");
			}
		}
		var a_click_5=document.getElementsByClassName("lm_click_1")[5].getElementsByTagName("a");
		for(var i=0;i<a_click_5.length;i++){
			a_click_5[i].index=i;
			a_click_5[i].onclick=function(){
				for(var i=0;i<a_click_5.length;i++){
					a_click_5[i].className="";
					lm_tab_right_27[i].classList.add("lm_onclik_appear");
				}
				this.className="lm_onclick";
				lm_tab_right_27[this.index].classList.remove("lm_onclik_appear");
			}
		}
		//input的onfocus事件
		var input_style_1=document.getElementsByClassName("input_style_1")[0];
		var aa=document.getElementsByClassName("lm_same_aa");
		var close=document.getElementsByClassName("lm_close_a")[0];
		var inp=document.getElementById("begin");
		var ii_0=aa[0].getElementsByTagName("i");
		var ii_1=aa[1].getElementsByTagName("i");
		var ii_2=aa[2].getElementsByTagName("i");
		var ii_3=aa[3].getElementsByTagName("i");
		var ii_4=aa[4].getElementsByTagName("i");
		var ii_5=aa[5].getElementsByTagName("i");
		var ii_6=aa[6].getElementsByTagName("i");
		inp.onfocus=function(){
			input_style_1.style.display="block";
			for(var i=0;i<aa.length;i++){
				aa[i].index=i;
				aa[i].onclick=function(ev){
					for(var i=0;i<aa.length;i++){
						aa[i].classList.remove("lm_current_1");
						aa[i].getElementsByTagName("i")[0].classList.remove("i_1");
						aa[i].getElementsByTagName("i")[1].classList.remove("i_2");
					}
					this.classList.add("lm_current_1");

					aa[this.index].getElementsByTagName("i")[0].classList.add("i_1");
					aa[this.index].getElementsByTagName("i")[1].classList.add("i_2");
					ev.stopPropagation();
				}
			}
		}
		input_style_1.onclick=function(ev){
			this.style.display="none";
			inp.value=ev.target.innerText;
		}
		/*inp.onblur=function(){
			input_style_1.style.display="none";
		}*/
		close.onclick=function(){
			input_style_1.style.display="none";
		}
		/*隐藏hidden_div的效果代码*/
		//获取div 
		var t_bars_1=document.getElementsByClassName("t_bars_1")[0].getElementsByTagName("a");
		var same_area=document.getElementsByClassName("same_area");
		for(var i=0;i< t_bars_1.length;i++){
			t_bars_1[i].index=i;
			t_bars_1[i].onmouseover=function(){
				for(var i=0;i<same_area.length;i++){
					same_area[i].style.display="none";
					t_bars_1[0].classList.remove("current_s");
					t_bars_1[1].classList.remove("current_s");
				}
				this.classList.add("current_s");
				//console.log(this.index);
				if(this.index==0){
					same_area[0].style.display="block";
					same_area[1].style.display="block";
				}
				else{
					same_area[2].style.display="block";
					same_area[3].style.display="block";
				}
			}
			
		}
}
