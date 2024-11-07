var menu = document.querySelector("#nav i")
var cross = document.querySelector("#full i")

var tl = gsap.timeline();

tl.to("#full",{
    right:0,
    duration: .6
})

tl.from("#full h4",{
    x:100,
    duration:.5,
    stagger:.2,
    opacity: 0
})

tl.from("#full i",{
    opacity: 0,
})

tl.pause()

menu.addEventListener("click", function(){
    tl.play()
})
cross.addEventListener("click", function(){
    tl.reverse()
})