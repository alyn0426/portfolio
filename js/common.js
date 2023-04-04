$("document").ready(function(){
    $(".m-btn").click(function(){
        $(this).toggleClass("on")
        // 혼자있을때는 toggle / 여러개 있을때는 add eq(i) remove
        // this > 내 자신, 선택자를 사용해도 무방함
        $(".m-nav").toggleClass("on")
    })
//모바일 모드일 때 햄버거 버튼 설정



$(".font-box .icon").click(function(){
    $(this).toggleClass("on")
    $(".font-box ul").toggleClass("on")
})
//폰트박스 클릭이벤트


let font = [
    "'GmarketSansMedium'",
    "'S-CoreDream-3Light'",
    "'IBMPlexSansKR-Regular'",
    "'Dovemayo_wild"
]
$(".font-box ul li").mouseover(function(){
    let i = $(this).index();
    $("html").css("font-family", font[i])
}).mouseout(function(){
    $("html").css("font-family", "")
})
//폰트 미리보기 
//""는 비우겠다는 뜻 > 마우스 아웃시 기본으로 돌아옴

$(".font-box ul li").click(function(){
    let i = $(this).index();
    if(i == 0){
        $("html").removeClass()
        localStorage.removeItem("font")
    }else{
        $("html").removeClass().addClass("font"+i);
        localStorage.setItem("font", "font"+i);
    }
})
//폰트 클릭 시 적용하기





$(".header .etc ul li ul li").click(function(){
    let i = $(this).index();
    if(i == 0){
        localStorage.setItem("language", "kr")
    }else{
        localStorage.setItem("language", "en")
    }
})
//한영 변환 시 새로고침이나 페이지 이동해도 유지해주는 코드


const font_list = localStorage.getItem("font");
//폰트 변환 시 새로고침이나 페이지 이동해도 유지
if(font_list !=''){
    $("html").addClass(font_list);
}
//! = 다르다면 == 같다면




$("html").attr("data-dark", false);

const dark_mode = localStorage.getItem("dark");
console.log(dark_mode)

if(dark_mode == "true"){
    $("dark-btn i").removeClass("fa-moon").addClass("fa-sun")
    //모바일 다크모드 아이콘 클릭시 해-달 전환 밑에도 추가
    $("html").attr("data-dark", true);
    $(".header .etc ul li").eq(0).find("i").removeClass("fa-moon").addClass("fa-sun")
    // 새로고침 시 다크모드 전환 아이콘 그대로유지
    $(".contact-content .sns ul li img").attr("src", "images/talk-dark.png");
    // 다크모드 전환 시 이미지 변환(1)
}else{
    $("dark-btn i").removeClass("fa-sun").addClass("fa-moon")
    $("html").attr("data-dark", false);
    $(".header .etc ul li").eq(0).find("i").removeClass("fa-sun").addClass("fa-moon")
    $(".contact-content .sns ul li img").attr("src", "images/talk.png");
    //카톡아이콘 다크모드에서 전환시 되돌아가기(1)
}
//다크모드 유지





$(".header .etc ul li").eq(0).click(function(){
    //eq적는 이유는 달 아이콘만 클릭했을 때 반응하기 위해서 
    $(".header .etc ul li").eq(0).find("i").toggleClass("fa-sun fa-moon")
    //find는 자식을 찾을 때 사용하는 태그
    //toggleClass("a b") > 둘중에 하나가 있을 때 나머지 하나는 없어짐
    $(".dark-btn").eq(0).find("i").toggleClass("fa-sun fa-moon")
    //pc에서 다크모드 후 모바일 화면으로 줄였을때 아이콘 유지

    if($("html").attr("data-dark") == "false"){
        $("html").attr("data-dark", true);
        localStorage.setItem("dark", true)
        // 다크모드 유지
        $(".contact-content .sns ul li img").attr("src", "images/talk-dark.png");
        // 다크모드 전환 시 이미지 변환(2)
    }else{
        $("html").attr("data-dark", false)
        localStorage.removeItem("dark")
        $(".contact-content .sns ul li img").attr("src", "images/talk.png");
        //카톡아이콘 다크모드에서 전환시 되돌아가기(2)
    }

    console.log($("html").attr("data-dark"))


})

$(".dark-btn").click(function(){
    $(".header .etc ul li").eq(0).find("i").toggleClass("fa-sun fa-moon")
    $(".dark-btn").eq(0).find("i").toggleClass("fa-sun fa-moon")

    if($("html").attr("data-dark") == "false"){
        $("html").attr("data-dark", true);
        localStorage.setItem("dark", true)
        $(".contact-content .sns ul li img").attr("src", "images/talk-dark.png");
        // 다크모드 전환 시 이미지 변환(모바일에서도 적용) (3)
    }else{
        $("html").attr("data-dark", false)
        localStorage.removeItem("dark")
        $(".contact-content .sns ul li img").attr("src", "images/talk.png");
        //카톡아이콘 다크모드에서 전환시 되돌아가기(3)
    }
})
//모바일 다크버전 추가 (위에 eq적용되어있어서 따로 적어줘야함)






})