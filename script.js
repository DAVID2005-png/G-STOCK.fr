const fas=document.querySelector('#fas')
const homeScreen=document.getElementById("homeScreen")
fas.addEventListener('click', ()=>{
  homeScreen.classList.toggle('open')
})

const fas1=document.querySelector('#fas1')
fas1.addEventListener('click', ()=>{
  homeScreen.classList.toggle('open')
})
