import timer, {getZero} from "./timer.js";

$(document).ready(function () {
    $('.reviews__carousel').slick({
        autoplay: true,
        slidesToShow: 1,
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/right.png"></button>'
    });
});

const phone = document.querySelector('#phone'),
      buttons = document.querySelectorAll('button');

phone.addEventListener('input', (e) => {
    phone.value = phone.value.replace(/\D/, '');
});

buttons.forEach(button => {
    button.addEventListener('click', event => {
        event.preventDefault();
    });
});

timer(1800);