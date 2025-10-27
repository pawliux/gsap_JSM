import gsap from 'gsap'

const buttonDiv = document.querySelector('.reactions')
let buttons;
if (buttonDiv) {
    buttons = buttonDiv.children
}

for (const button of buttons) {
    button.addEventListener('click', (event) => {
        const emoji = button.dataset['emoji'];
        const bubble = document.createElement('div')
        bubble.innerText = emoji
        bubble.className = 'bubble'
        buttonDiv.appendChild(bubble);

        const xLocation = button.getBoundingClientRect().left - buttonDiv.getBoundingClientRect().left - 32
        const yLocation = button.getBoundingClientRect().bottom - buttonDiv.getBoundingClientRect().bottom


        gsap.fromTo(bubble, {
            opacity: 0,
            x: xLocation,
            y: yLocation,
            scale: 1,
            rotation: 0,
            duration: 1,
            ease: 'power2.inOut'
        }, {
            opacity: 1,
            x: xLocation,
            y: yLocation-60,
            scale: 1.2,
            rotation: 360,
            onComplete: () => {
                gsap.to(bubble, {
                    opacity: 0,
                    scale: 1.5,
                    duration: 0.5,
                    y: yLocation-70,
                    ease: 'power1.out'
                })
            }
        })
    })
}