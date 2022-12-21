$(function(){


    $(".skillBox .skill_left ul li").click(function(){
        let i = $(this).index();

        $(this).addClass('active')
        $(this).siblings().removeClass('active')
        $(".rightBox").removeClass("active").eq(i).addClass("active")
        // $(".rightHtml").css("margin-top", i*60+"px")
    })

    $(".skill-box .left-side ul li").click(function(){
        let i = $(this).index();
        $(".skill-box .left-side ul li").removeClass("active").eq(i).addClass("active")
        $(".right-side > div").removeClass("active").eq(i).addClass("active")
        $(".rightHtml").css("margin-top", i*60+"px")
    })










})