import './styles/styles.scss'
import'./app/form.js'

const container = document.querySelector('.container-wrapp-front')
const cardFront = document.querySelector('.card-front')
const numberCard = document.querySelector('.output-number')
const nameCard = document.querySelector('.name')
const dateCard = document.querySelector('.month-output')



container.addEventListener('mousemove', (e)=>{
   let x = (window.innerWidth / 2 - e.pageX) / 10;
   let y = (window.innerHeight / 2 - e.pageY) /10;
   cardFront.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`
   

})
/// Animation in 
container.addEventListener('mouseenter',(e)=>{
   cardFront.style.transition = 'all 0.5s ease'
   numberCard.style.transform = "translateZ(70px)";
   nameCard.style.transform = "translateZ(40px)";
   dateCard.style.transform = "translateZ(40px)";
})
/// Animation out
container.addEventListener('mouseleave', (e)=>{
   cardFront.style.transition = 'all 1s ease'
   numberCard.style.transform='translateZ(0px)'
   nameCard.style.transform = "translateZ(0px)";
   dateCard.style.transform = "translateZ(0px)";
   cardFront.style.transform = 'rotateY(0deg) rotateX(0deg)'
})  

///// card back 
const cardBack = document.querySelector('.card-back')
const containerBack = document.querySelector('.container-wrapp-back')
containerBack .addEventListener('mousemove', (e)=>{
   let x = (window.innerWidth / 2 - e.pageX) / 10;
   let y = (window.innerHeight / 2 - e.pageY) /10;
   cardBack.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`

})

containerBack.addEventListener('mouseenter', e=>{
   cardBack.style.transition = 'all 0.5s ease'
})

containerBack.addEventListener('mouseleave' ,e=>{
   cardBack.style.transition = 'none'
})