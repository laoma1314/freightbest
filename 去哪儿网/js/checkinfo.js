var telephone=document.getElementsByName("telephone")[0];
var password=document.getElementsByName("password")[0];
var checkcode=document.getElementsByName("checkcode")[0];
var activecode=document.getElementsByName("active")[0];
var error=document.getElementById("zc_error_1");
var passError=document.getElementById("zc_error_3");
var checkError=document.getElementById("zc_error_4");
var activeError=document.getElementById("zc_error_5");
function checkinfo(){
	if(telephone.value==""){
		error.innerHTML="密码不能为空";
		error.className="zc_error_1";
		telephone.focus();
		return false;
	}
	else if(telephone.value.length<11||telephone.value.length>11){
		error.innerHTML="手机号码格式错误";
		error.className="zc_error_1";
		telephone.focus();
		return false;
	}
	else{
		error.innerHTML=" &nbsp;";
		error.className="zc_error_2";
	}
	if(checkPassword() == false)
   	{
        return  false;
    }
    if(checkcode.value==""){
    	checkError.innerHTML="密码不能为空";
    	checkError.className="zc_error_1";
    	activecode.focus(0);
    	return false;
    }
    if(activecode.value==""){
    	activeError.innerHTML="密码不能为空";
    	activeError.className="zc_error_1";
    	activecode.focus(0);
    	return false;
    }
    	return true;

}
//判断大写的函数
function hasUpperCase(str){
	for(var i=0,len=str.length;i<len;i++){
		if(str.charCodeAt(i)>=65&&str.charCodeAt(i)<=90){
			return true;
		}
	}
	return false;
}
//判断有小写的函数
function hasLowerCase(str){
	for(var i=0,len=str.length;i<len;i++){
		if(str.charCodeAt(i)>=97&&str.charCodeAt(i)<=122){
			return true;
		}
	}
	return false;
}
//判断是否有数字
function hasNumber(str){
	for(var i=0,len=str.length;i<len;i++){
		if(48<=str.charCodeAt(i)&&str.charCodeAt(i)>=57){
			return true;
		}
	}
	return false;
}
password.onkeyup=function(){
	checkPassword();
}
function checkPassword(){
	if(password.value==""){
		passError.innerHTML="长度为8-30个字符";
		passError.className="zc_error_1";
		return false;
	}
	else if(password.value.length<8&&password.value.length<30){
		passError.innerHTML="长度为8-30个字符";
		passError.className="zc_error_1";
		return false;
	}
	else{
		if(hasNumber(password.value)==true&&hasLowerCase(password.value)==true&&hasUpperCase(password.value)==true){
			passError.innerHTML="密码强";
			passError.className="zc_error_2";
		}
		else if((hasNumber(password.value) == true && hasLowerCase(password.value) == true) ||
            (hasNumber(password.value) == true && hasUpperCase(password.value) == true) ||
            (hasLowerCase(password.value) == true && hasUpperCase(password.value) == true)){
			passError.innerHTML="密码中";
			passError.className="zc_error_2";
		}
		else{
			passError.innerHTML="密码弱";
			passError.className="zc_error_2";
		}
	}
}
	
