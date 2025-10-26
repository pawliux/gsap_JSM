import gsap from 'gsap'

const toasts = document.querySelectorAll('.toast');


const showToastLoop = (toast, i) => {
    console.log(toast)
    gsap.to(toast, {
        opacity: 1,
        y: -120,
        scale: 1,
        duration: 0.8,
        ease: 'power4.out',
        onComplete: () => {
            gsap.to(toast, {
                delay: 2.5,
                x: 300,
                opacity: 0,
                scale: 0.95,
                duration: 0.7,
                ease: 'expo.in',
            })
        },

        delay: i * 4
    })
}


toasts.forEach((toast, i) => {
    showToastLoop(toast, i)
})
