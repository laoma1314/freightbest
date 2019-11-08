/*6个图片的切换的切换代码*/
var gs_pic_6=document.getElementById("gs_pic_6");//获取gs_pic_6标签
var div1=document.getElementById("animation_img");//获取animation_img标签
var left_button=document.getElementsByClassName("left_button")[0];
var left_button_a=left_button.getElementsByTagName("a")[0];
var right_button=document.getElementsByClassName("right_button")[0];
var right_button_a=right_button.getElementsByTagName("a")[0];
var len=div1.children.length;
var a=document.getElementsByClassName("circle_6")[0].getElementsByTagName("a");
var count=0;
var timer=window.setInterval(function(){toggle()},3000);
//当鼠标移到$("toggle")上清除时间
gs_pic_6.onmouseover=function(){window.clearInterval(timer)};
//当鼠标移出$("toggle")上调用时间
gs_pic_6.onmouseout=function(){timer=window.setInterval(function(){toggle()},3000);};
function toggle(){
			count++;
			div1.style.left=count*(-1440)+"px";
			if(count>5){
				count=0;
				div1.style.left=0;
			}
			for(var i=0;i<len;i++){
				a[i].className="";
				a[count].className="current_a";
			}
			for(var i=0;i<len;i++){
				a[i].index=i;
				a[i].onclick=function(){
					for(var i=0;i<len;i++){
						a[i].className="";
					}
					this.className="current_a";
					div1.style.left=this.index*(-1440)+"px";
					count=this.index;
				}
			}
	}
//点击鼠标右侧箭头
    right_button_a.onclick=function(){
        showright()
    }
    function showright(){
        count++;
        div1.style.left=count*(-1440)+"px";
        if(count>5){
            count=0;
            div1.style.left=0;
        }
        for(var i=0;i<len;i++)
        {a[i].className="";}
        a[count].className="current_a";
    }
  //点击鼠标左侧箭头
    left_button_a.onclick=function(){showleft();}
    function showleft(){
        count--;
        div1.style.left=count*(-1440)+"px";
        if(count<0){
            count=5;
            div1.style.left=count*(-1440)+"px";
        }
        for(var i=0;i<len;i++)
        {a[i].className="";}
        a[count].className="current_a";
    }
  
    /*5个鼠标经过的onmouseover事件*/	
   var nav_5=document.getElementsByClassName("nav_5");//获取类名为nav_5的5个element
    var  hide_same=document.getElementsByClassName("hide_same");//获取类名为hide_same的5个element
    for(var i=0;i<nav_5.length;i++){
    	hide_same[i].index=i;
    	nav_5[i].index=i;
    	nav_5[i].onmouseover=function(){
    		for(var i=0;i<nav_5.length;i++){
    			this.classList.add("red_style");
    			hide_same[i].style.display="none";	
    		}
    		hide_same[this.index].style.display="block";
    	}
    	nav_5[i].onmouseout=function(){
    		for(var i=0;i<nav_5.length;i++){
    			this.classList.remove("red_style");
    			hide_same[i].style.display="none";	
    		}
    		//hide_same[this.index].style.display="block";
    	}
    	hide_same[i].onmouseover=function(){
    		for(var i=0;i<nav_5.length;i++){
    			hide_same[i].style.display="none"
    		}
    		hide_same[this.index].style.display="block";
    	}
    	hide_same[i].onmouseout=function(){
    		for(var i=0;i<nav_5.length;i++){
    			hide_same[i].style.display="none"
    		}
    		hide_same[this.index].style.display="none";
    	}
    }

/*给personal鼠标经过加onmouseover事件*/
var img_1=document.getElementById("img_1");
var sel_down=document.getElementById("sel_down");
var about_content=document.getElementsByClassName("about_content")[0];

img_1.onmouseover=function(){
	sel_down.style.display="block";
}
img_1.onmouseout=function(ev){
	sel_down.style.display="none";
	//ev.stopPropagation();
}
sel_down.onmouseover=function(){
	this.style.display="block";
}
sel_down.onmouseout=function(){
	this.style.display="none";
}
/*about_content.onmouseout=function(ev){
	sel_down.style.display="none";
}*/

/*给pic_dong加onmouseover事件*/
var p1=document.getElementById("p1");
var p2=document.getElementById("p2");
var p3=document.getElementById("p3");
var p4=document.getElementById("p4");
var p5=document.getElementById("p5");
var p6=document.getElementById("p6");
var p7=document.getElementById("p7");
var p8=document.getElementById("p8");
var p9=document.getElementById("p9");
var p11=document.getElementById("p11");
var p12=document.getElementById("p12");
var p13=document.getElementById("p13");
var p14=document.getElementById("p14");
var p15=document.getElementById("p15");
var p16=document.getElementById("p16");
var p17=document.getElementById("p17");
var p18=document.getElementById("p18");
var p19=document.getElementById("p19");
var p21=document.getElementById("p21");
var p22=document.getElementById("p22");
var p23=document.getElementById("p23");
var p24=document.getElementById("p24");
var p25=document.getElementById("p25");
var p26=document.getElementById("p26");
var p27=document.getElementById("p27");
var p28=document.getElementById("p28");
var p29=document.getElementById("p29");
p1.onmouseover=function(){
	this.src="imags/111.png"
}
p1.onmouseout=function(){
	this.src="imags/11.png"
}
p2.onmouseover=function(){
	this.src="imags/122.png"
}
p2.onmouseout=function(){
	this.src="imags/12.png"
}
p3.onmouseover=function(){
	this.src="imags/133.png"
}
p3.onmouseout=function(){
	this.src="imags/13.png"
}
p4.onmouseover=function(){
	this.src="imags/144.png"
}
p4.onmouseout=function(){
	this.src="imags/14.png"
}
p5.onmouseover=function(){
	this.src="imags/155.png"
}
p5.onmouseout=function(){
	this.src="imags/15.png"
}
p6.onmouseover=function(){
	this.src="imags/166.gif"
}
p6.onmouseout=function(){
	this.src="imags/16.png"
}
p7.onmouseover=function(){
	this.src="imags/177.png"
}
p7.onmouseout=function(){
	this.src="imags/17.png"
}
p8.onmouseover=function(){
	this.src="imags/188.gif"
}
p8.onmouseout=function(){
	this.src="imags/18.png"
}
p9.onmouseover=function(){
	this.src="imags/199.png"
}
p9.onmouseout=function(){
	this.src="imags/19.png"
}
p11.onmouseover=function(){
	this.src="imags/111.png"
}
p11.onmouseout=function(){
	this.src="imags/11.png"
}
p12.onmouseover=function(){
	this.src="imags/122.png"
}
p12.onmouseout=function(){
	this.src="imags/12.png"
}
p13.onmouseover=function(){
	this.src="imags/133.png"
}
p13.onmouseout=function(){
	this.src="imags/13.png"
}
p14.onmouseover=function(){
	this.src="imags/144.png"
}
p14.onmouseout=function(){
	this.src="imags/14.png"
}
p15.onmouseover=function(){
	this.src="imags/155.png"
}
p15.onmouseout=function(){
	this.src="imags/15.png"
}
p16.onmouseover=function(){
	this.src="imags/166.gif"
}
p16.onmouseout=function(){
	this.src="imags/16.png"
}
p17.onmouseover=function(){
	this.src="imags/177.png"
}
p17.onmouseout=function(){
	this.src="imags/17.png"
}
p18.onmouseover=function(){
	this.src="imags/188.gif"
}
p18.onmouseout=function(){
	this.src="imags/18.png"
}
p19.onmouseover=function(){
	this.src="imags/199.png"
}
p19.onmouseout=function(){
	this.src="imags/19.png"
}
p21.onmouseover=function(){
	this.src="imags/111.png"
}
p21.onmouseout=function(){
	this.src="imags/11.png"
}
p22.onmouseover=function(){
	this.src="imags/122.png"
}
p22.onmouseout=function(){
	this.src="imags/12.png"
}
p23.onmouseover=function(){
	this.src="imags/133.png"
}
p23.onmouseout=function(){
	this.src="imags/13.png"
}
p24.onmouseover=function(){
	this.src="imags/144.png"
}
p24.onmouseout=function(){
	this.src="imags/14.png"
}
p25.onmouseover=function(){
	this.src="imags/155.png"
}
p25.onmouseout=function(){
	this.src="imags/15.png"
}
p26.onmouseover=function(){
	this.src="imags/166.gif"
}
p26.onmouseout=function(){
	this.src="imags/16.png"
}
p27.onmouseover=function(){
	this.src="imags/177.png"
}
p27.onmouseout=function(){
	this.src="imags/17.png"
}
p28.onmouseover=function(){
	this.src="imags/188.gif"
}
p28.onmouseout=function(){
	this.src="imags/18.png"
}
p29.onmouseover=function(){
	this.src="imags/199.png"
}
p29.onmouseout=function(){
	this.src="imags/19.png"
}

/*个人网上银行/快捷服务/金融信息切换*/
var aa3=document.getElementsByClassName("aa3");//获取类名为aa3的元素
var pic_dong=document.getElementsByClassName("pic_dong");
for(var i=0;i<aa3.length;i++){
	aa3[i].index=i;
	aa3[i].onmouseover=function(){
		for(var i=0;i<aa3.length;i++){
			aa3[i].classList.remove("current");
			pic_dong[i].style.display="none";
		}
		this.classList.add("current");
		pic_dong[this.index].style.display="block";
	}
}

/*优惠活动/新品推荐的切换*/
var sales=document.getElementsByClassName("sales");
var more=document.getElementById("more");
var div22=document.getElementsByClassName("div22");
for(var i=0;i<sales.length;i++){
	sales[i].index=i;
	sales[i].onmouseover=function(){
		for(var i=0;i<sales.length;i++){
			sales[i].classList.remove("curent_2");
			more.style.display="none";
			div22[i].style.display="none";
		}
		this.classList.add("curent_2");
		div22[this.index].style.display="block";
		//more.style.display="block";
	}
}

/*业务产品的样式的切换*/
var aa8=document.getElementsByClassName("aa8");
var product=document.getElementsByClassName("product");
for(var i=0;i<aa8.length;i++){
	aa8[i].index=i;
	aa8[i].onmouseover=function(){
		for(var i=0;i<aa8.length;i++){
			aa8[i].classList.remove("current_3");
			product[i].style.display="none";
		}
		this.classList.add("current_3");
		product[this.index].style.display="block";
	}
}


/*投资理财的样式的切换*/
var aa7=document.getElementsByClassName("aa7");
var product2=document.getElementsByClassName("product2");
for(var i=0;i<aa7.length;i++){
	aa7[i].index=i;
	aa7[i].onmouseover=function(){
		for(var i=0;i<aa7.length;i++){
			aa7[i].classList.remove("current_3");
			product2[i].style.display="none";
		}
		this.classList.add("current_3");
		product2[this.index].style.display="block";
	}
}

/*视频专区/扫码在线/惠生活的切换点击事件*/
var left_button_1=document.getElementsByClassName("left_button_1")[0].getElementsByTagName("img")[0];
var right_button_2=document.getElementsByClassName("right_button_2")[0].getElementsByTagName("img")[0];
var pic_3=document.getElementsByClassName("pic_3")[0];
var len2=pic_3.children.length;
var cnt=0;
//点击鼠标右侧箭头
    right_button_2.onclick=function(){
        showright2()
    }
    function showright2(){
        cnt++;
        pic_3.style.left=cnt*(-280)+cnt*(-26)+"px";
        if(cnt>3){
            cnt=0;
            pic_3.style.left=0;
        }
    }
  //点击鼠标左侧箭头
    left_button_1.onclick=function(){showleft2();}
    function showleft2(){
        cnt--;
        pic_3.style.left=cnt*(-280)+cnt*(-26)+"px";
        if(cnt<0){
        	cnt=3;
            pic_3.style.left=cnt*(-280)+cnt*(-26)+"px";
        }
    }

    /*给textarea加omouseup事件的js代码*/
  var span33=document.getElementById("span33");
 document.getElementById('txta1').onkeydown = function() {
 	var len3=this.value.length;
  	if(this.value.length >= 30) {
  		event.returnValue = false; 
  		span33.innerHTML=0;
  	}
  	else{
  		span33.innerHTML=29-len3;
  	}
 }

/*给底部的3个select绑定onchange事件*/
function s_click(obj){
    var num = 0;
    for(var i=0;i<obj.options.length;i++)
       {
         if(obj.options[i].selected==true)
         {
                  
             num++;
         }
     }
     if(num==1){
         var url = obj.options[obj.selectedIndex].value;
         window.open(url);//这里修改打开连接方式
     }
}