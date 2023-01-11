$(function(){

    // skillBox의 탭 이동 및 막대바 애니메이션 효과
    $(document).ready(function(){
        let winWidth = $(window).innerWidth();
        console.log(winWidth);

        if(winWidth >= 1008){
            $(".skillBox .skill_left ul").addClass("PC_active")
            $(".skillBox .skill_left ul").removeClass("TB_active")
            $(".skillBox .skill_left ul").removeClass("MB_active")
        } else if(winWidth <= 1007 && winWidth >= 752) {
            $(".skillBox .skill_left ul").addClass("TB_active")
            $(".skillBox .skill_left ul").removeClass("PC_active")
            $(".skillBox .skill_left ul").removeClass("MB_active")
        } else{
            $(".skillBox .skill_left ul").addClass("MB_active")
            $(".skillBox .skill_left ul").removeClass("PC_active")
            $(".skillBox .skill_left ul").removeClass("TB_active")
        }

         
    })
    $(window).resize(function(){
        let winWidth = $(window).innerWidth();
        // console.log(winWidth);
        // PC 스크립트
        if(winWidth >= 1008){
            $(".skillBox .skill_left ul").addClass("PC_active")
        } else{
            $(".skillBox .skill_left ul").removeClass("PC_active")
        }
        // Tablet 스크립트
        if(winWidth <= 1007 && winWidth >= 752){
            $(".skillBox .skill_left ul").addClass("TB_active")
        } else{
            $(".skillBox .skill_left ul").removeClass("TB_active")
        }
        // Mobile 스크립트
        if(winWidth <= 751){
            $(".skillBox .skill_left ul").addClass("MB_active")
        } else{
            $(".skillBox .skill_left ul").removeClass("MB_active")
        }
    })

    $(".skillBox .skill_left ul li").click(function(){
        
        let i = $(this).index();
        console.log(i)

        if($(".skillBox .skill_left ul").hasClass("PC_active")){
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
            $(".rightBox").removeClass("active").eq(i).addClass("active");
            $(".border .line").css("margin-top", i*40 + "px");
        }
        if($(".skillBox .skill_left ul").hasClass("TB_active")){
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
            $(".rightBox").removeClass("active").eq(i).addClass("active");
            $(".border .line").css("margin-top", i*29 + "px");
        }
        if($(".skillBox .skill_left ul").hasClass("MB_active")){
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
            $(".rightBox").removeClass("active").eq(i).addClass("active");
            $(".border .line").css("margin-top", i*29 + "px");
        }
    })
    // 메인페이지 커서 깜빡임 효과
    function blink(){
        target.classList.toggle("active");
    }
    setInterval(blink, 500);

    // Designed By Sung Hoon 타이핑 애니메이션
    let target = document.querySelector("#dynamic");
    let stringText = "Designed By Sung Hoon";
    let selectStringArr = stringText.split("");

    function dynamic(randomArr){
        if(randomArr.length > 0){
            target.textContent += randomArr.shift();
            setTimeout(function(){
                dynamic(randomArr);
            },80)
        }
    }
    dynamic(selectStringArr);
    
    


    





})