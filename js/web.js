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
    $(document).ready(function(){
        let winWidth = $(document).innerWidth();
        console.log(winWidth);

        if(winWidth >= 1025){
            $("#web .renewal .wdLeft_box > div ul li").addClass("PC_active")
            $("#web .renewal .wdLeft_box > div ul li").removeClass("TB_active")
        } else if(winWidth <= 1024 && winWidth >= 768) {
            $("#web .renewal .wdLeft_box > div ul li").addClass("TB_active")
            $("#web .renewal .wdLeft_box > div ul li").removeClass("PC_active")
        }
         
    })
    $(window).resize(function(){
        let winWidth = $(document).innerWidth();
        console.log(winWidth);

        if(winWidth >= 1025){
            $("#web .renewal .wdLeft_box > div ul li").addClass("PC_active")
        } else{
            $("#web .renewal .wdLeft_box > div ul li").removeClass("PC_active")
        }

        if(winWidth <= 1024 && winWidth >= 768){
            $("#web .renewal .wdLeft_box > div ul li").addClass("TB_active")
        } else{
            $("#web .renewal .wdLeft_box > div ul li").removeClass("TB_active")
        }
    })

    // PC version 스크립트
    $("#web .renewal .wdLeft_box > div ul li:first-child").click(function(){
        if ($(this).hasClass("PC_active")){
            $("html").animate({scrollTop : "0"}, 500);
        }
    })
    $("#web .renewal .wdLeft_box > div ul li:nth-child(2)").click(function(){
        if ($(this).hasClass("PC_active")){
            $("html").animate({scrollTop : "970"}, 500);
        }
    })
    $("#web .renewal .wdLeft_box > div ul li:last-child").click(function(){
        if ($(this).hasClass("PC_active")){
            $("html").animate({scrollTop : "1937"}, 500);
        }
    })

    // Tablet Dvice 스크립트
    $("#web .renewal .wdLeft_box > div ul li:first-child").click(function(){
        if ($(this).hasClass("TB_active")){
            $("html").animate({scrollTop : "0"}, 500);
        }
    })
    $("#web .renewal .wdLeft_box > div ul li:nth-child(2)").click(function(){
        if ($(this).hasClass("TB_active")){
            $("html").animate({scrollTop : "855"}, 500);
        }
    })
    $("#web .renewal .wdLeft_box > div ul li:last-child").click(function(){
        if ($(this).hasClass("TB_active")){
            $("html").animate({scrollTop : "1722"}, 500);
        }
    })

    

    





})



