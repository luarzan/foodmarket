var selector = document.querySelector('.navigation-selector');
var gear = document.querySelector('.navigation__list-link-gear');
var calendar = document.querySelector('.navigation__list-link-calendar');
var logo = document.querySelector('.navigation__list-link-logo');
var heart = document.querySelector('.navigation__list-link-heart');
var profile = document.querySelector('.navigation__list-link-profile');

selector.style.width = `${logo.offsetWidth}px`
selector.style.left = `${logo.offsetLeft}px`

function moverSelector(elemento){
    selector.style.width = `${elemento.offsetWidth}px`
    selector.style.left = `${elemento.offsetLeft}px`
}

function selectorPadre(e){
    if(e.localName === "img"){
        moverSelector(e.parentElement);
    }else{
        moverSelector(e);
    }
}
gear.addEventListener('click',function(e){
    selectorPadre(e.target)
    })
calendar.addEventListener('click',function(e){
    selectorPadre(e.target)
    })
logo.addEventListener('click',function(e){
    selectorPadre(e.target)
    })
heart.addEventListener('click',function(e){
    selectorPadre(e.target)
    })
profile.addEventListener('click',function(e){
    selectorPadre(e.target)
    })

