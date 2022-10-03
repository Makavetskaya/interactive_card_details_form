let form = document.querySelector('.form')
    inputs = document.querySelectorAll('.input')

// form.addEventListener('submit', e=>{

// })
    
const cleave = new Cleave('#numberCard', {
    creditCard: true,
    delimiter: ' ',
    onCreditCardTypeChanged: function (type) {
       const cardBrand = document.getElementById('cardBrand')
       visa = 'fa-brands fa-cc-visa',
       mastercard = 'fa-brands fa-cc-mastercard'
       switch(type){
        case 'visa':
            cardBrand.setAttribute('class', visa)
            break;
          
        case 'mastercard':
            cardBrand.setAttribute('class', mastercard)
            break;
        default:
                cardBrand.setAttribute("class", "");
                break;
        }

       
    }
}); 