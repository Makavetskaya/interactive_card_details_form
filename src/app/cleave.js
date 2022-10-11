let form = document.querySelector('.form')
    inputs = document.querySelectorAll('.input')

// form.addEventListener('submit', e=>{

// })
    
const cleaveNumber = new Cleave('#numberCard', {
    creditCard: true,
    delimiter: ' ',
    onCreditCardTypeChanged: function (type) {
       const cardBrand = document.getElementById('cardBrand')
       visa = 'fa-brands fa-cc-visa',
       mastercard = 'fa-brands fa-cc-mastercard',
       jcb = 'fa-brands fa-cc-jcb',
       discover = 'fa-brands fa-cc-discover',
       ccAmex = 'fa-brands fa-cc-amex'
       switch(type){
        case 'visa':
            cardBrand.setAttribute('class', visa)
            break;
          
        case 'mastercard':
            cardBrand.setAttribute('class', mastercard)
            break;
        case 'jcb':
            cardBrand.setAttribute('class',jcb) 
            break;
        case 'discover':
            cardBrand.setAttribute('class', discover)  
            break; 
        case 'ccAmex':
            cardBrand.setAttribute('class', ccAmex) 
            break;       
        default:
                cardBrand.setAttribute("class", "");
                break;

        }


       
    }
}); 

const cleaveCVC = new Cleave ('#cvcCard', {
    blocks: [3]
})