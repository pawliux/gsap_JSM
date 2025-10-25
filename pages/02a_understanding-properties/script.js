import gsap from "gsap";

gsap.to('.box', {
    x: -200,
    y: 100,
    opacity: 1,
    rotation: 360,
    background: '#336699',
    borderRadius: '50%',
    scale: 1.25,
    duration: 2,
    delay: 0,
    ease: 'elastic.out',
    repeat: -1,
    yoyo: true,
    repeatDelay: 0
})