//arrow functions in javascript?
//functions in javascript?

//change navbar styles on scroll
window.addEventListener('scroll', ()=>{
document.querySelector('nav').classList.toggle
('window-scroll',window.scrollY>0)

})


//show/hide faq answer

const faqs =document.querySelectorAll('.faq');

faqs.forEach(faq =>{
    faq.addEventListener('click',()=>{
        faq.classList.toggle('open');

 /*//   change icon
const icon = faq.querySelector('.faq_icon i ');
if(icon.className === 'uil iul-plus'){
    icon.className = "uil uil-minus"
}   else{
    icon.className = "uil uil-plus"
}*/

})
    
   
})



//show/hide nav menu

const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click',()=>{
    menu.getElementsByClassName.display = "flex";
    closeBtn.getElementsByClassName.display ="inline-block";
    menuBtn.getElementsByClassName.display = "none";
})

//close nav menu

const closeNav = ()=>{
    menu.getElementsByClassName.display ="none";
    closeBtn.getElementsByClassName.display = "none";
    menuBtn.getElementsByClassName.display= "inline-block";
}
closeBtn.addEventListener('click',closeNav);