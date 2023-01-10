var partsDetails = {
    /**
    * Function to validate slider
    */

    partsSlider: function () {
        var slider = $('.parts__details-wrap');

        $('.prev').click(function () {
            slider.slick('slickPrev');
            return false;
        });

        $('.next').click(function () {
            slider.slick('slickNext');
            return false;
        });
        slider.slick({
            dots: false,
            infinite: true,
            slidesToShow: 3,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            prevArrow: $('.prev'),
            nextArrow: $('.next'),
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1.1,
                        arrows: false
                    }
                },
            ]
        });
    },
}
$(document).ready(function () {
    partsDetails.partsSlider();
})

