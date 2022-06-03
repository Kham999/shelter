const card = document.querySelectorAll('.card');
const body = document.querySelector('body');
const area = document.querySelector('.link-area');
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












const nextBtn = document.querySelector('.fourth-btn');
const lastBtn = document.querySelector('.firth-btn');
const firstBtn = document.querySelector('.first-btn');
const secondBtn = document.querySelector('.second-btn');
const cards = document.querySelector('.cards-container');
const pageNumber = document.querySelector('.nav-number');

const numbers = ['1','2','3','4','5','6','7','8'];
let songIndex = 0;
nextBtn.addEventListener('click',()=>{
    songIndex++;
pageNumber.innerHTML = numbers[songIndex];
if(songIndex>6){
nextBtn.classList.add('next-btn-active');
nextBtn.classList.remove('next-btn');
lastBtn.classList.remove('next-btn');
lastBtn.classList.add('next-btn-active');
firstBtn.classList.remove('prev-btn');
firstBtn.classList.add('next-btn');
secondBtn.classList.remove('prev-btn');
secondBtn.classList.add('next-btn');
}
})

lastBtn.addEventListener('click',()=>{
    pageNumber.innerHTML = numbers[7];
    nextBtn.classList.add('next-btn-active');
nextBtn.classList.remove('next-btn');
lastBtn.classList.remove('next-btn');
lastBtn.classList.add('next-btn-active');
firstBtn.classList.remove('prev-btn');
firstBtn.classList.add('next-btn');
secondBtn.classList.remove('prev-btn');
secondBtn.classList.add('next-btn');
})

secondBtn.addEventListener('click',()=>{
    songIndex--;
    pageNumber.innerHTML = numbers[songIndex];
    if(songIndex<1){
        firstBtn.classList.add('next-btn-active');
firstBtn.classList.remove('next-btn');
secondBtn.classList.remove('next-btn');
secondBtn.classList.add('next-btn-active');
lastBtn.classList.remove('prev-btn');
lastBtn.classList.add('next-btn');
nextBtn.classList.remove('prev-btn');
nextBtn.classList.add('next-btn');
    }
})

