import $ from 'jquery';
window.jQuery = $;
window.$ = $;

$(document).ready(function(){
    $('.fab').click(function(e){
        e.preventDefault();
        console.log(1);
    });
    $('.reviews').slick({
        infinite: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        arrows: true,
        prevArrow: <i class="fas fa-angle-left"></i>,
        nextArrow: <i class="fas fa-angle-right"></i>,
    });
});