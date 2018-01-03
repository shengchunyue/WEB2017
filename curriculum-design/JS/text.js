function subMenu() {
	// 导航栏
	var liNodes = document.getElementsByTagName("li");
		for (var i=0; i<liNodes.length; ++i) {						
			liNodes[i].onmouseover = function() {
				this.className = "sfhover";
				} 							
			liNodes[i].onmouseout = function() {
				this.className = "";
				} 				
			}		
	// 自动播放
	var interval;
	var a=document.getElementById("picScroll");
	var b=document.getElementById("picScroll1");
	action=function()
	{
	  interval=window.setInterval(changeToLeft,0.01);
	}
	Clear=function()
	{
		clearInterval(interval);
	}
	function changeToLeft()
	{
		if(a.scrollLeft==b.offsetWidth)
		{
			a.scrollLeft=0;
		}
  	    else
			a.scrollLeft++;
	}
	// 表单操作
	var user=document.getElementsByTagName('input')[0];
	window.onload=function(){
		user.focus();
	};
	user.onblur=function(){
		if(user.value.length==0)
		{
		var spans=document.getElementsByTagName('span');
		if(spans.length>0)
		{
			spans[0].parentNode.removeChild(spans[0]);
		}
		var a=document.createElement('span');
		a.innerHTML="用户名不能为空";
		user.parentNode.appendChild(a);
		}
	};
	var user1=document.getElementsByTagName('input')[1];
	user1.onblur=function(){
		if (user1.value.length==0)
		{
			var spans1=document.getElementsByTagName('span');
			if(spans1.length>0)
			{
				spans1[0].parentNode.removeChild(spans1[0]);
			}
			var c=document.createElement('span');
			c.innerHTML="密码不能为空";
			user1.parentNode.appendChild(c);
		}
	};
	var user2=document.getElementsByTagName('input')[2];
	user2.onblur=function(){
		if((user2.value.length==0)||(user2.value!=user1.value))
		{
			var spans2=document.getElementsByTagName('span');
			if(spans2.length>0)
			{
				spans2[0].parentNode.removeChild(spans2[0]);
			}
			var e=document.createElement('span');
			e.innerHTML="密码不一致，重新输入密码";
			user2.parentNode.appendChild(e);
		}
	};
	// 进度条
	function setProcess(){  
	  	var processbar = document.getElementById("processbar");  
	  	processbar.style.width = parseInt(processbar.style.width) + 1 + "%";
	  	processbar.innerHTML = processbar.style.width;  
	  	if(processbar.style.width == "100%"){  
	     	window.clearInterval(bartimer);  
	  	}  
	}  
	var bartimer = window.setInterval(function(){setProcess();},100);  
	window.onload = function(){  
	   	bartimer;  
	}  
}
window.onload = subMenu;