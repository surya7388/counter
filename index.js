const title=document.querySelector('#title')
let counter=0
const Decrement=document.querySelector('#decrement')
const Reset=document.querySelector('#reset')
const increment=document.querySelector('#increment')



Decrement.addEventListener('click',()=>{
   
    
        counter--
        title.textContent=counter
    
     
   })

Reset.addEventListener('click',()=>{
    counter=0
    title.textContent=counter
   })
 increment.addEventListener('click',()=>{
  counter++
  title.textContent=counter
 })