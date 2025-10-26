import gsap from 'gsap'

const bars = document.querySelectorAll('.bar')

bars.forEach((bar,i) => {
    gsap.fromTo(bar, {
        scaleY: 0.4,
        duration: 0.6,
        easing: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: i*0.1
    }, {
        scaleY: 1.6,
        duration: 0.6,
        repeat: -1,
        yoyo: true,
        delay: i*0.1
    })
})