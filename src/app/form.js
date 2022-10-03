const nameInput = document.querySelector('.name-input')
nameInput.addEventListener('input', e =>{
    document.querySelector('.name').textContent = e.target.value
})

const numberInput = document.querySelector('.number-input')
numberInput.addEventListener('input', e=>{
    document.querySelector('.output-number').textContent = e.target.value
})