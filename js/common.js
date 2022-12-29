$(function(){


    // 스크롤 발생시 스크롤 맨 위로 이동할 수 있는 버튼이 등장하는 효과
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $(".slideUp").fadeIn();
        }else{
            $(".slideUp").fadeOut();
        }
    })
    // 버튼 클릭시 스크롤을 맨 위로 이동시켜주는 기능
    $(".slideUp").click(function(){
        $("html").animate({scrollTop : "0"}, 400);
    })

    // #web과 #design info에 있는 btnBox 호버효과
    $(".btnBox").mouseenter(function(){
        $(this).children().css("top",0);
        $(this).children().css("left",0);
    })
    $(".btnBox").mouseleave(function(){
        $(this).children().css("top",20+"%");
        $(this).children().css("left",5+"%");
    })

    // scrolla
    $(".animate").scrolla({
        mobile:true,
        once: true,
        animateCssVersion: 3
    });



})