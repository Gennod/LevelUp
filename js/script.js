import timer, { getZero } from "./timer.js";

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
    form = document.querySelector('form');

phone.addEventListener('input', (e) => {
    phone.value = phone.value.replace(/\D/, '');
});


$(function () {
    $("a[href^='#']").click(function () {
        var _href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
        return false;
    });
});

form.addEventListener('submit', event => {
    event.preventDefault();

    form.reset();
});

timer(1800);