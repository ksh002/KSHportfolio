$(function(){

    // 페이지 특정 scroll범위에서 leftBox의 li한테 on클래스를 주는 스크립트
    $(window).scroll(function () {
        let height = $(document).scrollTop();
        // console.log(height);

        if(height < 533){
            $(".wdLeft_box > div ul li:first-child").addClass("on");
            $(".wdLeft_box > div ul li:first-child").siblings().removeClass("on");
        }
        else if(533 < height < 1467){
            $(".wdLeft_box > div ul li:nth-child(2)").addClass("on");
            $(".wdLeft_box > div ul li:nth-child(2)").siblings().removeClass("on");
        }

        if(height > 1467){
            $(".wdLeft_box > div ul li:last-child").addClass("on");
            $(".wdLeft_box > div ul li:last-child").siblings().removeClass("on");
        }
    });


    // leftBox의 li 클릭했을때 오른쪽화면이 지정된 scroll좌표위치로 이동하는 스크립트
    $("#web .renewal .wdLeft_box > div ul li:first-child").click(function(){
        $("html").animate({scrollTop : "0"}, 500);
    });

    $("#web .renewal .wdLeft_box > div ul li:nth-child(2)").click(function(){
        $("html").animate({scrollTop : "970"}, 500);
    });

    $("#web .renewal .wdLeft_box > div ul li:last-child").click(function(){
        $("html").animate({scrollTop : "1937"}, 500);
    })


    







})



