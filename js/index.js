$("document").ready(function(){
    let typed = new Typed("#typed1",{
        stringsElement: "#typed",
        typeSpeed: 80
    })
    $("#wave-1").wavify({
        height: 800,
        bones: 4,
        color: "#5d7599",
        speed: 0.15,
        amplitude: 30
    })
    $("#wave-2").wavify({
        height: 700,
        bones: 4,
        color: "#abb6c8",
        speed: 0.25,
        amplitude: 40
    })
})