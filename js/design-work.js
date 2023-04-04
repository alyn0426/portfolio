$("document").ready(function(){

    const work_img = [
        // "../이미지폴더/파일명.확장자",
        // "../이미지폴더/파일명.확장자",
        // "../이미지폴더/파일명.확장자"
        // 마지막에 콤마(,) 넣으면 에러 발생
        "https://via.placeholder.com/1200x2000/40E0D0",
        "https://via.placeholder.com/1200x2000/87CEEB",
        "https://via.placeholder.com/1200x2000/D8BFD8",
        "https://via.placeholder.com/1200x2000/FFA07A",
        "https://via.placeholder.com/1200x2000/FFD700",
        "https://via.placeholder.com/1200x2000/8FBC8F"
    ]

    $(".work-content").click(function(e){
        e.preventDefault()
        //클릭해도 제일 위로 올라가지 않음 function(e) 꼭 써줘야함
        //e > 파라미터. 어떠한 정보를 가져와서 출력 작명해도 상관없음
        //preventDefault > 기본적으로 가지고있는 고유의 기능을 삭제하는 기능
        let i = $(this).index();
        $(".window").fadeIn();
        $(".window-content").show();
        $(".window-content img").attr("src", work_img[i])
        $("html, body").css("overflow", "hidden")
        // 클릭해서 새로운 스크롤이 나올때 기존 스크롤을 없애줘야함
        // $(".window-content i").click(function(){
        //     $(".window").fadeOut();
        //     $("html, body").css("overflow", "")
        // })
    })
    $(".window, .window-content i").click(function(){
        $(".window").fadeOut();
        $(".window-content").scrollTop(0).hide();
        $("html, body").css("overflow", "")
    })

    let close = parseInt($(".window-content i").css("top"));
    
    $(".window-content").scroll(function(){
        let pos = $(".window-content").scrollTop();
        console.log(pos)
        $(".window-content i").css("top", pos + close+"px")
    })
    //컨텐츠 클릭시 우측상단 x표시가 고정되지 않는것을 고정시키는 코드
    //최초 닫기 버튼의 위치가 20px (탑값) 모달창이 스크롤이 되면,
    //스크롤이 된 scrollTop 값 + 20을 더해준다.
    //해당 위치에 고정되는 원리
})