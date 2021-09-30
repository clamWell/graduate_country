var ieTest = false,
	screenWidth = $(window).width(),
	screenHeight = $(window).height(),
	imgURL = "http://img.khan.co.kr/spko/storytelling/2021/graduate_country/",
	isMobile = screenWidth <= 800 && true || false,
	isNotebook = (screenWidth <= 1380 && screenHeight < 750) && true || false,
	isMobileLandscape = ( screenWidth > 400 && screenWidth <= 800 && screenHeight < 450 ) && true || false;
	window.onbeforeunload = function(){ window.scrollTo(0, 0) ;}
var randomRange = function(n1, n2) {
	return Math.floor((Math.random() * (n2 - n1 + 1)) + n1);
};
$(window).resize(function() {
	screenWidth = $(window).width();
	screenHeight = $(window).height();
});


/******** 모바일 전용 조정 ********/
if(isMobile==true){
	$(".title-svg-pc").html("");
	$(".interactive-header .page-title").html("지방소녀들은 어디로");
}else{
	$(".title-svg-m").html("");
}
/******** 모바일 전용 조정 ********/


$(function(){
	

	$(".close-ie-block").on("click", function(){
		$(".ie-block-9").hide();
	})

    var ieUnder = false;
    function checkIe(){
        var word;
        if (navigator.userAgent.indexOf("MSIE") >= 0) {
            console.log("ieUNDER 10");
            ieUnder = true;
            return true;
        }else {
            return false;
        }
    }
    checkIe();

	
	/*								*/
	/*------  INTRO ANIMATION	-----*/
	/*								*/


	

	/*								*/
	/*------  INTRO ANIMATION	-----*/
	/*								*/


	/*								*/
	/*------    QUERY CLICK     -----*/
	/*								*/



	function init(){
        if(isMobile==true){

        }else{

        }

	}


    function avoid100vh(){
		$(".loading-page").height(screenHeight);
		$(".ie-block").height(screenHeight);
	}


	function getClassStr(dataObj){
		var classStr = "";
		if(dataObj.interview == "O"){
			classStr = "each-student student-click";
			star="<div class='star'><img src='img/star.png' alt=''></div>";
		}else if(dataObj.clickOff == "O"){
			classStr = "each-student student-off";
		}else{
			classStr = "each-student";
		}
		
		if(dataObj.noGraphic !== "O"){
			classStr = classStr+" student-path"
		}

		if(dataObj.residence == "수도권"){
			classStr = classStr+" now-center";
		}else if(dataObj.residence == "비수도권"){
			classStr = classStr+" now-outCenter";
		}else if(dataObj.residence == "미상"){
			classStr = classStr+" now-unknown";
		}
		return classStr;
	}

	function makePhotoAlbum(school){
		var _data;
		var $albumHolder;
		if(school == "강릉"){
			$albumHolder = $("#ALBUM_GANG");
			_data = graduateData.filter( function(v){
				return v.school == "강릉여고"
			})
			$albumHolder.find(".photo-album-col-2 ul").html("");

			for(i=0; i<_data.length; i++){
				var star="";
				if(_data[i].interview == "O"){
					star="<div class='star'><img src='img/star.png' alt=''></div>";
				}
				var classStr = getClassStr(_data[i]);

				var template = "<li class='"+classStr+"' data-id='"+_data[i].id+"'><div class='each-photo'><img src='img/photo_st_"+_data[i].id+".png'alt=''>"+star+"</div><p class='name'>"+_data[i].name+"</p><p class='status'>"+_data[i].occu+"<em class='div'>·</em>"+_data[i].residenceCity+"</p></li>";

				if(i<18){
					$albumHolder.find(".album-col-left ul").append(template);
				}else{
					$albumHolder.find(".album-col-right ul").append(template);
				}
			}
			showAlbumPhoto = function(){
				var $photo = $(".student-click");
				for(p=0; p<$photo.length;p++){
					$photo.eq(p).delay(p*100).animate({"opacity":"1", "top":"0px"}, 500);
				};
			}
			$(".each-student").eq(15).addClass("ml-400")

		}else if(school == "고창"){
			$albumHolder = $("#ALBUM_GOCHANG");
			_data = graduateData.filter( function(v){
				return v.school == "고창여고"
			})
			$albumHolder.find(".photo-album-col-2 ul").html("");

			for(i=0; i<_data.length; i++){
				var star="";
				if(_data[i].interview == "O"){
					star="<div class='star'><img src='img/star.png' alt=''></div>";
				}
				var classStr = getClassStr(_data[i]);
				
				var template = "<li class='"+classStr+"' data-id='"+_data[i].id+"'><div class='each-photo'><img src='img/photo_st_"+_data[i].id+".png'alt=''>"+star+"</div><p class='name'>"+_data[i].name+"</p><p class='status'>"+_data[i].occu+"<em class='div'>·</em>"+_data[i].residenceCity+"</p></li>";

				if(i<14){
					$albumHolder.find(".album-col-left ul").append(template);
				}else{
					$albumHolder.find(".album-col-right ul").append(template);
				}
			}
			showAlbumPhoto = function(){
				var $photo = $(".student-click");
				for(p=0; p<$photo.length;p++){
					$photo.eq(p).delay(p*100).animate({"opacity":"1", "top":"0px"}, 500);
				};
			}
			$(".each-student").eq(46).addClass("ml-200")

		}
	
	};

	makePhotoAlbum("강릉");
	makePhotoAlbum("고창");

	init();
	$(".loading-page").fadeOut(500, function(){
		$(".story-top-graphic .graphic-holder .cover img").addClass("scaleDown");
		introAnimation();
	});

	var titleAniDone = false; 
	function activTitlePathAni(){
		var $titlePath = $("#PAGE_TITLE path");
		for(t=0; t<$titlePath.length;t++){
			$titlePath.eq(t).delay(t*50).animate({"stroke-dashoffset":"0", "fill-opacity":"1"}, 4500);
			if(t == $titlePath.length-1){
				titleAniDone = true;
			}
		};
	}

	function introAnimation(){
		var $introItem = $(".graphic-text p");
		for(o=0; o<$introItem.length;o++){
			$introItem.eq(o).delay(o*700).animate({"opacity":"1", "top":"0px"}, 1200, "easeOutSine");
			if(o == $introItem.length-1){
				$(".line-deco").delay(2100).animate({"height": ((isMobile)? "300px": "500px")}, 2000, "easeOutSine");
			
			}
			
		};
	}

	var flowChartAniDone = false; 
	function makeChartFlow(){
		$(".chart-step-02").stop().animate({"height":"100%", "opacity":"1"}, 2500);
		$(".chart-step-03").delay(700).stop().animate({"height":"100%", "opacity":"1"}, 3500);
	}

	var albumAniDone = false; 
	var showAlbumPhoto; 

	$(".student-click").on("click", function(){
		var _id = $(this).attr("data-id");

		makeInterviewPage(_id);
		showInterviewPage(_id);
	});

	if(!isMobile){
		$(".each-student").on("mouseover", function(){
			var _id = $(this).attr("data-id");
			console.log(_id);
			if($(this).hasClass("student-path")){
				if( _id<37){
					$("#ITV_GANG").find(".background-map .stu-path").find("img").attr("src","img/map-path-stu-"+_id+".png");
				}else{
					$("#ITV_GOCHANG").find(".background-map .stu-path").find("img").attr("src","img/map-path-stu-"+_id+".png");
				}
				
			}else{
				$(".interview-list-area .background-map .stu-path").find("img").attr("src","");
			}		
		});
	}
	

	$(".back-button").on("click", function(){
		var region = $(this).attr("data-region");
		hideInterviewPage(region);
	});

	$(".switch").on("click", function(){
		var region = $(this).attr("data-region");
		var $body;
		if(region=="gang"){
			$body = $("#ITV_GANG");
		}else{
			$body = $("#ITV_GOCHANG");
		}

		if($(this).parent(".switch-btn-holder").hasClass("on")){
			$(this).parent(".switch-btn-holder").removeClass("on");
			$body.find(".photo-album-col-2").removeClass("switchOn");
		}else{
			$(this).parent(".switch-btn-holder").addClass("on");
			$body.find(".photo-album-col-2").addClass("switchOn");
		}
	});

	

	function makeInterviewPage(dataId){
		var _personData;
		var _qnaData;
		graduateData.forEach( function(v,i,a){
			if (v.id == dataId){
				_personData = v;
			}
		})
		qnaData.forEach( function(v,i,a){
			if (v.id == dataId){
				_qnaData = v;
			}
		})

		var $body;
		if(dataId<37){
			$body = $("#ITV_GANG");
		}else{
			$body = $("#ITV_GOCHANG");
		}
		//console.log(_qnaData);
		$body.find(".background-map .stu-path img").attr("src","img/map-path-stu-"+dataId+".png");
		$body.find(".interview-paper-wrapper .interview-area .top-status .photo").attr("src", "img/photo_st_"+dataId+".png");
		$body.find(".interview-paper-wrapper .interview-area .top-status .nameOcc .name").html(_personData.name);
		$body.find(".interview-paper-wrapper .interview-area .top-status .nameOcc .occu").html(_personData.occu);
		$body.find(".interview-paper-wrapper .interview-area .top-status .life-path").html(_qnaData.status);
		
		$body.find(".interview-qa-holder").html("");
		var qnaSetArr = _qnaData.qnaSet.split("<p class='qu'>");
		qnaSetArr.shift();
		qnaSetArr = qnaSetArr.map(function(v,i,a){
			return "<p class='qu'>"+v;
			
		});
		//console.log(qnaSetArr);

		for(q=0; q<qnaSetArr.length;q++){
			var tempStr = "<div class='each-qa-set'>"+qnaSetArr[q]+"</div>";
			$body.find(".interview-qa-holder").append(tempStr);
		}
		
		if(isMobile){
			if(_personData.noGraphic == "O"){
				$body.find(".mobile-path-map .map-layer .stu-path img").attr("src","");
				$body.find(".mobile-path-map").hide();
			}else if(_personData.noGraphic !== "O"){
				$body.find(".mobile-path-map .map-layer .stu-path img").attr("src","img/map-path-stu-"+dataId+".png");
				$body.find(".mobile-path-map").show();
			}
		}

	}

	function showInterviewPage(id){
		var $body;
		if(id<37){
			$body = $("#ITV_GANG");
		}else{
			$body = $("#ITV_GOCHANG");
		}
		if(isMobile){
			$body.find(".photo-album-wrapper").fadeOut();
			$body.find(".photo-album-wrapper").addClass("hidden");
			var movePos =$body.offset().top;
			$("html, body").stop().animate({scrollTop: movePos-35},500, function(){
				$body.find(".interview-paper-wrapper").fadeIn(100, function(){
					$body.find(".interview-paper-wrapper").addClass("show");
				});
			});
		}else{
			$body.find(".photo-album-wrapper").addClass("hidden");
			$body.find(".interview-paper-wrapper").addClass("show");
			$body.find(".background-map").addClass("show");
		}

	};

	function hideInterviewPage(region){
		var $body;
		if(region=="gang"){
			$body = $("#ITV_GANG");
		}else{
			$body = $("#ITV_GOCHANG");
		}

		if(isMobile){
			$body.find(".interview-paper-wrapper").removeClass("show");
			setTimeout(function(){
				$body.find(".interview-paper-wrapper").fadeOut();
			}, 500);
			$body.find(".photo-album-wrapper").fadeIn( function(){
				var movePos =$body.offset().top;
				$("html, body").stop().animate({scrollTop: movePos-35},500);
				$body.find(".photo-album-wrapper").removeClass("hidden");
			});

			
		}else{
			$body.find(".photo-album-wrapper").removeClass("hidden");
			$body.find(".interview-paper-wrapper").removeClass("show");
			$body.find(".background-map").removeClass("show");
		}


		$(".interview-qa-holder").scrollTop(0);
	};

	$(window).scroll(function(){
		var nowScroll = $(window).scrollTop();
		if(nowScroll > screenHeight*0.5){
			if(titleAniDone==false){
				titleAniDone = true;
				activTitlePathAni();
			}
		}

		if(!isMobile){
			if(nowScroll > $("#FLOW_CHART").offset().top - screenHeight*0.6){
				if(flowChartAniDone==false){
					flowChartAniDone = true;
					makeChartFlow();
				}
			}else if(flowChartAniDone==true){
				flowChartAniDone = false;
				$(".chart-step-02").css({"height":"1px", "opacity":"0"});
				$(".chart-step-03").css({"height":"1px", "opacity":"0"});
			}
		}

		if(nowScroll > $("#ALBUM_GANG").offset().top - screenHeight*0.6){
			if(albumAniDone==false){
				albumAniDone = true;
				showAlbumPhoto();
			}
		}

		

	});
	   
});



function sendSns(s) {
  var url = encodeURIComponent(location.href),
	  txt = encodeURIComponent($("title").html());
  switch (s) {
    case 'facebook':
      window.open('http://www.facebook.com/sharer/sharer.php?u=' + url);
      break;
    case 'twitter':
      window.open('http://twitter.com/intent/tweet?text=' + txt + '&url=' + url);
      break;
  }
}
