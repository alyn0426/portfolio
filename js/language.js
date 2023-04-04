$("document").ready(function(){
    
    const url = new URL(location.href).searchParams;
    const language = url.get("lang");
    console.log(language)

    const en_nav = new Array("Profile", "Web Publishing", "Design", "Experience", "Contact")
    const Main_typed = new Array("Growind Web Designer &amp; This is Web Publisher <em>Kim Hye Lin</em> Click the button below to view the next page")
    const Main_btn = new Array("Profile")

    // const Profile = ""
    // 다른 페이지 영문으로 변환할때 쭉 나열하면 됨

    const lang_chk = localStorage.getItem("language");

    if(lang_chk == "en" || language == "en"){
        $("#typed p").html(Main_typed[0]);
        $(".type a").text(Main_btn[0])
        for(let i = 0; i < en_nav.length; i++){
            $(".header .nav ul li a").eq(i).text(en_nav[i])
        }
        //반복문, 상단 네비 메뉴 바꾸기
    }


})