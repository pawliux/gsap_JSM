import gsap from 'gsap'

const front = document.querySelector('.card-face.card-front')
const back = document.querySelector('.card-face.card-back')
const card =  document.querySelector('#card')
let flipped = false

card.addEventListener('click', (event)=>{
    const flipped = gsap.getProperty(card, 'rotationY') === 180
    gsap.to(card, {
        rotationY: flipped ? 0 : 180,
        duration: 0.5,
        ease: 'power1.out'
    })

})

