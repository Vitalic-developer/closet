$('.slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    fade: true,
    responsive: [
        {
            breakpoint: 750,
            settings: {
                dots: false,
            }
        },
    ]

});

$('.for-us-slider').slick({
    infinite: true,
    speed: 500,
    cssEase: 'linear',
});

$('.stages-of-work-slider').slick({
    infinite: true,
    speed: 500,
    cssEase: 'linear',
});

$('.open-popup').click(function() {
    $('.popup-bg').fadeIn(600)
    $('html').addClass('no-scroll')
})
$('.close-popup').click(function() {
    $('.popup-bg').fadeOut(600)
    $('html').removeClass('no-scroll')
})

$('.popup-bg').click(function (e) {
    if (!$(e.target).closest(".popup").length) {
        $('.popup-bg').fadeOut(600);
        $('html').removeClass('no-scroll')
    }
});



