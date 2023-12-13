$('.slider-principal').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000
});

$(".botao").click(function() {
    $("html, body").animate({scrollTop: 0}, 800)
})