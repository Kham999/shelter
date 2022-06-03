(function ChangeNav(){
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.nav');
    const menuLinks = document.querySelectorAll('.nav-link');
    const menuCloseItem = document.querySelector('.header-nav-close');
    const logo = document.querySelector('.header-logo');
    const body = document.querySelector('body');
    const area = document.querySelector('.link-area');
    
    burgerItem.addEventListener('click', () => {
menu.classList.add('nav-act');
logo.classList.add('logo-active');
burgerItem.classList.add('logo-active');
body.classList.add('body-active');
});
menuCloseItem.addEventListener('click', () => {
    menu.classList.remove('nav-act');
    logo.classList.remove('logo-active');
    burgerItem.classList.remove('logo-active');
    body.classList.remove('body-active');
});
area.addEventListener('click', ()=>{
    menu.classList.remove('nav-act');
    logo.classList.remove('logo-active');
    burgerItem.classList.remove('logo-active');
    body.classList.remove('body-active');
});
if (window.innerWidth <= 767){
for (let i=0; i<menuLinks.length;i++){
    menuLinks[i].addEventListener('click',()=>{
menu.classList.remove('nav-act');
logo.classList.remove('logo-active');
burgerItem.classList.remove('logo-active');
body.classList.remove('body-active');
    });
}
}
}())