import gsap from 'gsap'

const button = document.querySelector('.scroll-to-top')

document.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        button.classList.add('show');

        gsap.to(button, {
            y : -20,
            duration : 1,
            yoyo: true,
            ease: 'sine.out',
            repeat: -1
        })

    } else {
        button.classList.remove('show');
    }
})

button.addEventListener('mouseenter', () => {
    gsap.to(button, {
        scale: 1.1,
        backgroundColor: '#339900'
    })
})
button.addEventListener('mouseleave', () => {
    gsap.to(button, {
        scale: 1,
        backgroundColor: '#0984e3'
    })
})
button.addEventListener('click', () => {
    window.scroll(0,0)
})