// let a = document.querySelector(".svg svg path")
// console.log(a.getTotalLength())

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

var slider = new Swiper('.swiper-container', {
    speed: 400,
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 70,
    centeredSlides: true,
    breakpoints: {
        1024: {
            spaceBetween: 340
        },
        414: {
            spaceBetween: 150
        }
    }
})

var tooltip = document.getElementById('tooltip');

window.onmousemove = function (ev){
    var x = ev.clientX;
    var y = ev.clientY;
    tooltip.style.top = (y ) + 'px';
    tooltip.style.left = (x + 20) + 'px';
}

document.querySelectorAll('.images-item').forEach(
    function log (el){
        setTimeout(function(){
            el.classList.remove('fade')
        }, 1000)
    }
);

slider.on('slideChange', function(e){
    let index = slider.realIndex;
    let f = document.getElementById('f');
    let s = document.getElementById('s');
    let t = document.getElementById('t');
    document.querySelectorAll('.images-item').forEach(
        function log (el){
            el.classList.add('fade');
            setTimeout(function(){
                el.classList.remove('fade')
            }, 1000)
        }
    );
    if(index == 0){
        f.style.backgroundImage = "url('../img/image3.1.png')"
        s.style.backgroundImage = "url('../img/image11.png')"
        t.style.backgroundImage = "url('../img/image33.png')"
    }
    if(index == 1){
        f.style.backgroundImage = "url('../img/image11.png')"
        s.style.backgroundImage = "url('../img/image33.png')"
        t.style.backgroundImage = "url('../img/image3.1.png')"
    }
    if(index == 2){
        f.style.backgroundImage = "url('../img/image33.png')"
        s.style.backgroundImage = "url('../img/image3.1.png')"
        t.style.backgroundImage = "url('../img/image11.png')"
    }
})

function showMenu(){
    let burger = document.querySelector('.burger');
    let menu = document.getElementById('menuList')
    
    burger.classList.toggle('burger-active');
    menu.classList.toggle('menu-mobile');
    document.getElementById('overlay').classList.toggle('dpb')
}
