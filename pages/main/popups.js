let offset = 0;
const slider = document.querySelector('.pets-items');

document.querySelector('.arrow-next').addEventListener('click', function(){
    if(window.innerWidth>=1280){
offset = offset + 1050;
if(offset>2100){
    offset=0;
}
    }
if(window.innerWidth<768){
    offset = offset + 305;
if(offset>2100){
    offset=0;
}
}
slider.style.left = -offset + 'px';

})



document.querySelector('.arrow-prev').addEventListener('click', function(){
    if(window.innerWidth>=1280){
    offset = offset -1050;
    if(offset<0){
        offset=2100;
    }
}
if(window.innerWidth<768){
    offset = offset - 305;
if(offset<0){
    offset=2100;
}
}
    slider.style.left = -offset + 'px';
    })

    const card = document.querySelectorAll('.pets-item');
    const body = document.querySelector('body');
    
    const popupClose = document.querySelectorAll('.popup-close');
    const popup = document.querySelectorAll('.popup')
    
    for (let i=0; i<card.length;i++){
        card[i].addEventListener('click',()=>{
    body.classList.add('body-active');
        })
    }
    
    for (let i=0; i<popupClose.length;i++){
        popupClose[i].addEventListener('click',()=>{
    body.classList.remove('body-active');
        })
    }