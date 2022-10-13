
//input value handlers

const nameInput = document.querySelector('.name-input')
nameInput.addEventListener('input', e =>{
    document.querySelector('.name').innerHTML = e.target.value
})

const numberInput = document.querySelector('.number-input')
numberInput.addEventListener('input', e=>{
    document.querySelector('.output-number').innerHTML = e.target.value
})

const monthInput = document.querySelector('.month-input')
monthInput.addEventListener('input',e=>{
    document.querySelector('.month-output').innerHTML = e.target.value
})

const yearInput = document.querySelector('.year-input')
yearInput.addEventListener('input',e=>{
    document.querySelector('.year-output').innerHTML= e.target.value
})

const cvInput = document.querySelector('.cv-input')
cvInput.addEventListener('input',e=>{
    document.querySelector('.output-cv').innerHTML = e.target.value
})

