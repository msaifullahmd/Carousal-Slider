let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let backButton = document.getElementById('back');
let seeMoreButtons = document.querySelectorAll('.seeMore');
let carousal = document.querySelectorAll('.carousal'); 
let listHTML = document.querySelector('.carousal .list');


const showSlider = (type) =>{
    for(let i = 0; i<carousal.length; i++){
        carousal[i].classList.remove('prev' , 'next');

    }
    let items = document.querySelectorAll('.carousal .list .item');
    if(type === 'next'){
        listHTML.appendChild(items[0]);
        for(let i=0; i<carousal.length; i++){
            carousal[i].classList.add('next');

        }
    } 
    if(type === 'prev'){
        let positionLast = items.length - 1;
        listHTML.prepend(items[positionLast]);
        for(let i=0; i<carousal.length; i++){
            carousal[i].classList.add('prev');
        }
    }
}

nextButton.onclick = function(){
    showSlider('next');
}
prevButton.onclick = function(){
    showSlider('prev');
}


seeMoreButtons.forEach(button => {
    button.onclick = function(){
        for(let i=0; i<carousal.length; i++){
            carousal[i].classList.add('showDetail')

        }
    }
})

backButton.onclick = function(){
    for(let i = 0; i<carousal.length; i++){
    carousal[i].classList.remove('showDetail')
    }
}






