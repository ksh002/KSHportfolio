$(function(){

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
    
    // skillBox의 탭 이동 및 막대바 애니메이션 효과
    $(".skillBox .skill_left ul li").click(function(){ 
        let i = $(this).index();

        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $(".rightBox").removeClass("active").eq(i).addClass("active");
        $(".border .line").css("margin-top", i*40+"px");
    })

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




})