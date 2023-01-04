$(function(){

    // 메인페이지 커서 깜빡임 효과
    function blink(){
        target.classList.toggle("active");
    }
        setInterval(blink, 500);

    // Watch for Thank you 타이핑 애니메이션
    let target = document.querySelector("#dynamic");
    let stringText = "Watch for Thank you";
    let selectStringArr = stringText.split("");
    let checked = true; //true 변수

    function dynamic(randomArr){
        if(randomArr.length > 0){
            target.textContent += randomArr.shift();
            setTimeout(function(){
                dynamic(randomArr);
            },80)
            checked = false;//false

        }
    }


    // Watch for Thank you 해상도 width값에 따른 타이핑애니메이션 효과
    $(document).on("scroll",function(){
        let scrollTop = $(document).scrollTop();
        let winWidth = $(document).innerWidth();
        


        if(winWidth <= 1024 && scrollTop >= 1280){
            if(checked){
                dynamic(selectStringArr);
            }
        }

        if(winWidth >= 1025 && scrollTop >= 1600){
            if(checked){
                dynamic(selectStringArr);
            }
        }

        
    })

    
    
})