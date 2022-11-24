

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

//   change icon
const icon = faq.querySelector('.faq_icon i ');

if(icon.className === 'fas fa-plus'){
    icon.className = "fas fa-minus";
}   else{
    icon.className = "fas fa-plus";
}

})
    
   
})



//show/hide nav menu

const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click',()=>{
    menu.style.display = "flex";
    closeBtn.style.display ="inline-block";
    menuBtn.style.display = "none";
})

//close nav menu

const closeNav = ()=>{
    menu.style.display ="none";
    closeBtn.style.display = "none";
    menuBtn.style.display= "inline-block";
}
closeBtn.addEventListener('click',closeNav);


//REVEAL ITEMS ON SCROLL
window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');
 
    for(var i=0; i<reveals.length;i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('.active');
        }else{
            reveals[i].classList.remove('.active');
        }
    }


}