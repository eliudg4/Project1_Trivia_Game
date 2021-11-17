// Creating a modal popup for my instructions button

const howTo = document.querySelector('#Howto')
const button = document.querySelector('#close')
const modal = document.querySelector('.modal')

howTo.addEventListener('click', () => {
    modal.classList.add('open')
})

button.addEventListener('click', () => {
    modal.classList.remove('open')
})



