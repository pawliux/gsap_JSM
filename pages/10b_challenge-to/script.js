import gsap from 'gsap'

const toasts = document.querySelectorAll('.toast');
let lorem;
const toastTypes = ['one', 'two', 'three']
const toastEmojis = ['🔔', '🎉', '🪓']

const showToast = (text) => {
    const toastContainer = document.querySelector('.demo section.flex-center');
    const toast = document.createElement('div');
    toast.classList.add('toast');
    const toastTypeIndex = Math.floor(Math.random() * 3)
    toast.classList.add(toastTypes[toastTypeIndex])
    toast.innerText = `${toastEmojis[toastTypeIndex]} ${text}`;
    toastContainer.appendChild(toast)
    showToastLoop(toast)

    // `<div class="toast one">🔔 You’ve got 99 problems</div>
    //       <div class="toast two">🎉 And 101 merge conflicts</div>
    //       <div class="toast three">🎉 And so on and on...</div>`
}

const getMessage = () => {
    fetch('https://lorem-api.com/api/lorem')
        .then(response => response.text())
        .then((text) => {
            let message = text.split(' ');
            message = message.slice(0, 5)
            showToast(message.join(' '));
        })
}


const showToastLoop = (toast, i) => {
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


// toasts.forEach((toast, i) => {
//     showToastLoop(toast, i)
// })

setInterval(() => {
    getMessage()
}, 5000)
