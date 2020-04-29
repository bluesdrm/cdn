function set(name,cursel,n){
  for(i=1;i<=n;i++){
	  var menu=document.getElementById(name+i);
	  var con=document.getElementById("con"+name+i);
	  if(menu == null || con == null)continue;
	  menu.className=i==cursel?"hover":"";
	  con.style.display=i==cursel?"block":"none";
  } 
}


 var browser_class = navigator.userAgent;
 var browser_class_name1 = browser_class.match("Mobile");
 var browser_class_name2 = browser_class.match("mobile");
 var location_url = window.location.href;
 if (browser_class_name1 != null || browser_class_name2 != null){
	 if (location_url.match("wap") == null){
	 window.location.href="/wap.jdpfb.com";
	 }
 }

$(function(){
	//导航
	$(".nav ul li").hover(function(){
		$(this).addClass("nav-h").siblings().removeClass("nav-h");
		$(this).find("p").show();
		},function(){
			$(".nav ul li p").hide();
			$(".nav ul li").removeClass("nav-h");
			});
	//新闻切换
	$(".news-tit ul li").hover(function(){
		$(this).addClass("news-h").siblings().removeClass("news-h");
		$(".news-box").eq($(this).index()).show().siblings(".news-box").hide();
		});
	//诊疗中心
	$(".cent-left ul li").hover(function(){
		var centindex = $(this).index()+1;
		for(var i=1;i<13;i++)
		{
			$(".cent-left ul li").removeClass("cent-li"+i+"-h");
		}
		$(this).addClass("cent-li"+centindex+"-h");
		$(this).addClass("cent-li-hover").siblings().removeClass("cent-li-hover");
		$(".cent-right").eq($(this).index()).show().siblings(".cent-right").hide();
		});
	//我的印象
	$(".com-myyx a").click(function(){
		var yxclass = $(this).attr("class");
		if(yxclass=="yx-on")
		{
			$(this).removeClass("yx-on");
		}
		else
		{
			$(this).addClass("yx-on");
		}
		});
	//子页面右边专家切换
	$(".my-list ul li").hover(function(){
		$(this).addClass("on").siblings().removeClass("on");
		$(".my-box ul li").eq($(this).index()).show().siblings().hide();
		});
	//医院荣誉环境切换
	$(".env-tit a").hover(function(){
		$(this).addClass("env-h").siblings().removeClass("env-h");
		$(".env-box").eq($(this).index()).show().siblings(".env-box").hide();
		});
	//案例页切换
	Tabmian("#case-hd01 ul li","case-hd-h","#case-list01 ul");
	Tabmian("#case-hd02 ul li","case-hd-h","#case-list02 ul");
	Tabmian("#case-hd03 ul li","case-hd-h","#case-list03 ul");
	});

//切换
function Tabmian(tabtit,tabon,tabbox)
{
	$(tabtit).hover(function(){
		$(this).addClass(tabon).siblings().removeClass(tabon);
		$(tabbox).eq($(this).index()).show().siblings(tabbox).hide();
		});
}


$(function(){
	
	
	$(function(){
	TabMain(".tab_zj ul li","on",".js01");
	TabMain(".mod_list ul li","",".tab_li01 ul li");
	});
	
	function TabMain(tabhd,on,tabbd)
{
		$(tabhd).hover(function(){
		$(this).addClass(on).siblings().removeClass(on);
		$(tabbd).hide();
		$(tabbd).eq($(this).index()).show();
		});
}
	Tabmian(".tab_nav ul li","on",".exp-info");
	Tabmian(".qh_nav ul li","on",".qh_main");
	Tabmian(".qh_fl ul li","on",". qh_fr");
	Tabmian(".line_nav ul li","on",".line_fr ul li");
	//切换


})




