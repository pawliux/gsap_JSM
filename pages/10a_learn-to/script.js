import gsap from 'gsap';

const showToastLoop = () => {
    gsap.to('.toast', {
        opacity: 1,
        y: -120,
        scale: 1,
        duration: 0.8,
        easing: 'power4.out',
        onComplete: () => {
            gsap.to('.toast', {
                delay: 2.5,
                y: 0,
                opacity: 0,
                scale: 0.95,
                duration: 0.7,
                ease: 'power.in',
                onComplete: () => {
                    setTimeout(showToastLoop, 2500);
                }
            })
        }
    })
}

showToastLoop()
