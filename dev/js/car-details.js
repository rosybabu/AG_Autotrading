var cardetails = {
    /**
    * Function to activate banner slider 
    */
    slider: function () {
        $('.pdt-slider-single-wrap').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: false,
            adaptiveHeight: true,
            useTransform: true,
            speed: 400,
            accessibility: false,
            lazyLoad: 'ondemand',
            responsive: [{
                breakpoint: 1024,
                settings: {
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }]
        });

        $('.pdt-slider-nav-wrap')
            .on('init', function (event, slick) {
                $('.pdt-slider-nav-wrap .slick-slide.slick-current').addClass('is-active');
            })
            .slick({
                slidesToShow: 6,
                slidesToScroll: 1,
                dots: false,
                focusOnSelect: false,
                infinite: false,
                vertical: false,
                arrows: true,
                responsive: [{
                    breakpoint: 1024,
                    settings: {
                        dots: false,
                        slidesToShow: 4.8,
                        slidesToScroll: 1,
                        vertical: false,
                        arrows: false,
                        infinite: false,
                    }
                }]
            });

        $('.pdt-slider-single-wrap').on('afterChange', function (event, slick, currentSlide) {
            $('.pdt-slider-nav-wrap').slick('slickGoTo', currentSlide);
            var currrentNavSlideElem = '.pdt-slider-nav-wrap .slick-slide[data-slick-index="' + currentSlide + '"]';
            $('.pdt-slider-nav-wrap .slick-slide.is-active').removeClass('is-active');
            $(currrentNavSlideElem).addClass('is-active');
        });

        $('.pdt-slider-nav-wrap').on('click', '.slick-slide', function (event) {
            event.preventDefault();
            var goToSingleSlide = $(this).data('slick-index');
            $('.pdt-slider-single-wrap').slick('slickGoTo', goToSingleSlide);
        });
    },
    /**
      * Function to activate car-detailtab
      */
    cardetailtab: function () {
        // Show the first car-detailtab and hide the rest
        $('#car-detailtabs-nav li:first-child').addClass('active');
        $('.car-detailtab-content').hide();
        $('.car-detailtab-content:first').show();

        // Click function
        $('#car-detailtabs-nav li').click(function () {
            $('#car-detailtabs-nav li').removeClass('active');
            $(this).addClass('active');
            $('.car-detailtab-content').hide();

            var activecardetailtab = $(this).find('a').attr('href');
            $(activecardetailtab).fadeIn();
            $('.pdt-slider-single-wrap').slick('unslick');
            $('.pdt-slider-nav-wrap').slick('unslick');
            cardetails.slider();
            return false;
        });
    },
    /**
     * Download PDF
     */
    pdfDownload: function () {
            var pdf = new jsPDF('p', 'pt', 'letter');
            source = $('.car-detailtabs')[0];
            specialElementHandlers = {
                '#bypassme': function (element, renderer) {
                    return true
                }
            };
            margins = {
                top: 80,
                bottom: 60,
                left: 40,
                width: 522
            };
            pdf.fromHTML(
                source, // HTML string or DOM elem ref.
                margins.left, // x coord
                margins.top, { // y coord
                    'width': margins.width, // max width of content on PDF
                    'elementHandlers': specialElementHandlers
                },
    
                function (dispose) {
                    // dispose: object with X, Y of the last line add to the PDF 
                    //          this allow the insertion of new lines after html
                    pdf.save('Test.pdf');
                }, margins
            );
    }

}
$(document).ready(function () {
    cardetails.slider();
    cardetails.cardetailtab();
   
    
    
    $('.download-pdf').click(function (e) {
        e.preventDefault();
        // cardetails.pdfDownload();
        window.print();

    })
})

