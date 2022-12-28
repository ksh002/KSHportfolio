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


    $(document).on("scroll",function(){
        let scrollTop = $(document).scrollTop();
        // $(".scroll_box").text(scrollTop);
        


        if(scrollTop >= 1600){

            if(checked){
                dynamic(selectStringArr);
            }



        }
    })

    
})