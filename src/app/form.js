
//input value handlers

const nameInput = document.querySelector('.name-input')
nameInput.addEventListener('input', e =>{
    document.querySelector('.name').textContent = e.target.value
})

const numberInput = document.querySelector('.number-input')
numberInput.addEventListener('input', e=>{
    document.querySelector('.output-number').textContent = e.target.value
})

const monthInput = document.querySelector('.month-input')
monthInput.addEventListener('input',e=>{
    document.querySelector('.month-output').textContent = e.target.value
})

const yearInput = document.querySelector('.year-input')
yearInput.addEventListener('input',e=>{
    document.querySelector('.year-output').textContent = e.target.value
})

const cvInput = document.querySelector('.cv-input')
cvInput.addEventListener('input',e=>{
    document.querySelector('.output-cv').textContent = e.target.value
})

