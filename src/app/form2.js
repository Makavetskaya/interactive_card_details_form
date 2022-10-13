const form = document.getElementById('form')
const modal = document.getElementById('modal')
const nameCard = document.getElementById('nameCard')
const numberCard = document.getElementById('numberCard')
const monthCard = document.getElementById('monthCard')
const yearCard = document.getElementById('yearCard')
const cvcCard = document.getElementById('cvcCard')
const btn = document.getElementById('submit')
const modalClose = document.querySelector('.close')


///// errors 
const errorName = document.querySelector('.error-name')
const errorNumber = document.querySelector('.error-number')
const errorData = document.querySelector('.error-data')
const errorCvc = document.querySelector('.error-cvc')




form.addEventListener('input', validationInputs)
// btn.addEventListener('submit', btnSubmit)
btn.addEventListener('click', (e) =>{
    let isAllValid = []
    arrInputIsValid.forEach(el =>{
        isAllValid.push(el.getAttribute('is-valid'))
    })
    console.log(isAllValid)

    let isValid = isAllValid.reduce((acc, curr) =>{
        return acc && curr
    })
    console.log(isValid)
    if(isValid === "0"){
        e.preventDefault()
        btn.classList.add('animation')
    } else{
        modal.style.display = 'block'
    }

    
    })


let arrInput = Array.from(form)
console.log(arrInput)

let arrInputIsValid = []

arrInput.forEach( el =>{
    if(el.hasAttribute('data-reg')){
        el.setAttribute('is-valid', '0')
        arrInputIsValid.push(el)
    }
})

console.log(arrInputIsValid)


// function btnSubmit(valid){
//     let isAllValid = []
//     arrInputIsValid.forEach(el =>{
//         isAllValid.push(el.getAttribute('is-valid'))
//     })
//     console.log(isAllValid)

//     let isValid = isAllValid.reduce((acc, curr) =>{
//         return acc && curr
//     })
//     console.log(isValid)
    
    
// }
function validationInputs(){
    const nameCardValue = nameCard.value.trim()
    const numberCardValue = numberCard.value.trim()
    const monthCardValue = monthCard.value.trim()
    const yearCardValue = yearCard.value.trim()
    const cvcCardValue = cvcCard.value.trim()

        ///// name
        if (nameCardValue === ''){
            notInvalid(nameCard, errorName, "Can't be blank")
            nameCard.setAttribute('is-valid', '0')
        }else if(!nameCardValue.match(/^[a-zA-Z]+\s[A-Za-z]*$/g)){
            notInvalid(nameCard, errorName, 'Wrong format, letters only')
            nameCard.setAttribute('is-valid', '0')
        }else{
            invalid(nameCard, errorName, '')
            nameCard.setAttribute('is-valid', '1')

        }
         ////// number
        if (numberCardValue === ''){
            notInvalid(numberCard, errorNumber, "Can't be blank")
            numberCard.setAttribute('is-valid', '0')
        }else if(numberCardValue.length < 16){
            notInvalid(numberCard, errorNumber, "Not a valid number")
            numberCard.setAttribute('is-valid', 'false')
        }else{
            invalid(numberCard, errorNumber, '')
            numberCard.setAttribute('is-valid', '1')
        }
        ///// month
        if(monthCardValue === ''){
            notInvalid(monthCard, errorData,  "Can't be blank")
            monthCard.setAttribute('is-valid', '0')
        } else if(!regMomthCard(monthCardValue)){
            notInvalid(monthCard, errorData,  "Not a valid data")
            monthCard.setAttribute('is-valid', '0')
        }else{
            invalid(monthCard, errorData, '')
            monthCard.setAttribute('is-valid', '1')
        }

        ///// year
        if(yearCardValue === ''){
            notInvalid(yearCard, errorData, "Can't be blank" )
            yearCard.setAttribute('is-valid', '0')
        }else if(!regYearCard(yearCardValue)){
            notInvalid(yearCard, errorData, "Not a valid data" )
            yearCard.setAttribute('is-valid', '0')
        } else{
            invalid(yearCard,errorData, '')
            yearCard.setAttribute('is-valid', '1')
        }
       
        ///// cvc 
        if(cvcCardValue === ''){
            notInvalid(cvcCard, errorCvc, "Can't be blank" )
            cvcCard.setAttribute('is-valid', '0')
        } else if(!regCvcCard(cvcCardValue)){
            notInvalid(cvcCard, errorCvc, "Not a valid cvc" )
            cvcCard.setAttribute('is-valid', '0')
        } else{
            invalid(cvcCard, errorCvc, '')
            cvcCard.setAttribute('is-valid', '1')
        }
      
   
   
   
}

function notInvalid(input,el,message){
    input.classList.add('error-invalid')
    el.textContent= message
    
}

function invalid (input,el,message){
    input.classList.remove('error-invalid')
    el.textContent= message
   
  
   
}

      
function regNameCard(name){
    let reg = '/^[a-zA-Z]+\s[A-Za-z]*$/g'
    return reg.test(name)
}

function regNumberCard(number){
     return /^[0-9]{3}$/.test(number)
}

function regMomthCard(month){
    return /^(0?[1-9]|1[012])$/.test(month)
}

function regYearCard(year){
    return /^(19|20)[\d]{2,2}$/.test(year)
}
function regCvcCard(cvc){
    return /^[0-9]{3}$/.test(cvc)
}


modalClose.addEventListener('click',()=>{
   modal.style.display = 'none',
   form.style.display = 'block'
})



