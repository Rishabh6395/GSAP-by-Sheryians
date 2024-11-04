// gsap.from("#page1 #box",{
//     scale: 0,
//     delay:1,
//     duration: 2,
//     rotate: 180
// })
// gsap.from("#page2 #box",{
//     scale: 0,
//     delay:1,
//     duration: 2,
//     rotate: 180,
//     scrollTrigger:{
//         trigger: '#page2 #box',
//         scoller:'body',
//         markers: true,
//         start: "top 60%"
//     }
// })

gsap.from("#page2 h1",{
    opacity:0,
    duration:2,
    x:500,
    scrollTrigger:{
        trigger: "#page2 h1",
        scoller: 'body',
        markers: true,
        start:'top 50%',
        end: '30%',
        scrub: 2 // This propertie use when we need perform animation based on our scroll.
    }
})
gsap.from("#page2 h2",{
    opacity:0,
    duration:2,
    x:-500,
    scrollTrigger:{
        trigger: "#page2 h2",
        scoller: 'body',
        markers: true,
        start:'top 60%',
        end: '30%',
        scrub: 2,
        pin: true,
    }
})