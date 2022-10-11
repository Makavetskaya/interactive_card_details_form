const form = document.getElementById('form')
const nameCard = document.getElementById('nameCard')
const numberCard = document.getElementById('numberCard')
const monthCard = document.getElementById('monthCard')
const yearCard = document.getElementById('yearCard')
const cvcCard = document.getElementById('cvcCard')


///// errors 
const errorName = document.querySelector('.error-name')
const errorNumber = document.querySelector('.error-number')
const errorData = document.querySelector('.error-data')
const errorCvc = document.querySelector('.error-cvc')



form.addEventListener('submit', e =>{
    e.preventDefault()
    validationInputs()
})

function validationInputs(){
    const nameCardValue = nameCard.value.trim()
    const numberCardValue = numberCard.value.trim()
    const monthCardValue = monthCard.value.trim()
    const yearCardValue = yearCard.value.trim()
    const cvcCardValue = cvcCard.value.trim()

        ///// name
        if (nameCardValue === ''){
            notInvalid(nameCard, errorName, "Can't be blank")
        }else if(!nameCardValue.match(/^[a-zA-Z]+\s[A-Za-z]*$/g)){
            notInvalid(nameCard, errorName, 'Wrong format, letters only')
        }else{
            invalid(nameCard)
        }
         ////// number
        if (numberCardValue === ''){
            notInvalid(numberCard, errorNumber, "Can't be blank")
        }else if(!regNumberCard(numberCardValue)){
            notInvalid(numberCard, errorNumber, "Not a valid number")
        }else{
            invalid(numberCard)
        }
        ///// month
        if(monthCardValue === ''){
            notInvalid(monthCard, errorData,  "Can't be blank")
        } else if(!regMomthCard(monthCardValue)){
            notInvalid(monthCard, errorData,  "Not a valid data")
        }else{
            invalid(monthCard)
        }

        ///// year
        if(yearCardValue === ''){
            notInvalid(yearCard, errorData, "Can't be blank" )
        }else if(!regYearCard(yearCardValue)){
            notInvalid(yearCard, errorData, "Not a valid data" )
        } else{
            invalid(yearCard)
        }
       
        ///// cvc 
        if(cvcCardValue === ''){
            notInvalid(cvcCard, errorCvc, "Can't be blank" )
        } else if(!regCvcCard(cvcCardValue)){
            notInvalid(cvcCard, errorCvc, "Not a valid cvc" )
        } else{
            invalid(cvcCard)
        }
   
   
   
}

function notInvalid(input,el,message){
    input.classList.add('error-invalid')
    el.textContent= message
    
}

function invalid (input){
    input.classList.remove('error-invalid')
  
   
}

      
function regNameCard(name){
    let reg = '/^[a-zA-Z]+\s[A-Za-z]*$/g'
    return reg.test(name)
}

function regNumberCard(number){
     return /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14})$/.test(number)
}

function regMomthCard(month){
    return /^(0?[1-9]|1[012])$/.test(month)
}

function regYearCard(year){
    return /^(19|20)[\d]{2,2}$/.test(year)
}
function regCvcCard(cvc){
    return /^[0-9]{3, 4}$/.test(cvc)
}


