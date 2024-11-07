function breakText(){
    var h1 = document.querySelector('h1')
    var h1Text = h1.textContent

    var splitted = h1Text.split('')

    var halfValue = splitted.length/2
    var clutter = ""

    splitted.forEach((function(elem,idx){
        if(idx<halfValue){
            clutter += `<span class="a">${elem}</span>`
        }
        else{
            clutter += `<span class="b">${elem}</span>`
        }
    }))

    h1.innerHTML = clutter
}

breakText()

gsap.from("h1 .a",{
    y: 50,
    duration: .6,
    delay: .5,
    stagger:.15,
    opacity:0
})
gsap.from("h1 .b",{
    y: 50,
    duration: .6,
    delay: .5,
    stagger:-.15,
    opacity:0
})
