// gsap.to("#box1",{
//     duration:2,
//     x:1200,
//     delay: 1,
//     rotate: 360,
//     backgroundColor: "blue",
//     borderRadius: "50%",
//     scale: 0.5
// })

// gsap.from("h1", {
//     color: "red",
//     opacity: 0,
//     y:20,
//     duration: 2,
//     delay: 1,
//     stagger: 0.8, // jab bhut sare elements ho or hm chate ho ki ek ek kr k chle tb hm stagger ka use krte hai, is case mai hmare pass kafi sare h1's hai.

// })

// gsap.to("#box1",{
//     x:1000,
//     duration: 2,
//     delay: 1,
//     rotate: 360,
//     repeat: -1, // Repeat actually mai do bar chlega kyoki by default ek bar to chlega hi or hmne repeat 1 kr diya iska mtlb ek bar or chlega to total ye do bar chl jayega, or -1 is for infinity movement
//     yoyo: true,
    
// })


// gsap.to("#box1", {
//     x:1500,
//     rotate: 360,
//     duration:1.5,
//     delay:1
// })
// gsap.to("#box2", {
//     x:1500,
//     backgroundColor: "yellow",
//     duration:1.5,
//     delay:2.5,
// })
// gsap.to("#box3", {
//     x:1500,
//     scale: 0.5,
//     duration: 1.5,
//     borderRadius: "50%",
//     delay: 4
// })


var tl = gsap.timeline()

tl.to("#box1",{
    x:1500,
    rotate: 1,
    deuration: 1.5,
    delay: 1,
})

tl.to("#box2",{
    x:1500,
    rotate: 1
})
tl.to("#box3",{
    x:1500,
    rotate: 1
})

