var advanced = {
  /**
  * Function to activate banner slider 
  */
  select: function () {
    $(".transmissionfilter").select2({});
    $(".color").select2({});
    $(".door").select2({});
    $(".skunumber").select2({});
    $(".originparts").select2({});
    $(".brandfit").select2({});
    $(".partbrands").select2({});
    $("#advancedcarbrands").select2({
    });
  },
  /** 
   * function for dropdown
   */
  explore__dropdown: function () {
    $('.explore__dropdown--title').on('click', function (event) {
      event.preventDefault();
      $(this).toggleClass('selected');
      $(this).parent().find('.explore__dropdown-menu').toggleClass("show");
    })
    
    $('.explore__dropdowncontent a').on('click', function () {
      event.preventDefault();
      var text = $(this).text();
      $('.explore__dropdown--title').text(text);
      $('.explore__dropdown-menu').toggleClass("show");
    })
    $(document).on("click", function(event){
      var $trigger = $(".explore__vehicle-__dropdown");
      if($trigger !== event.target && !$trigger.has(event.target).length){
          $(".explore__dropdown-menu").removeClass("show");
      }            
  });
  },
  /**
   * function for button filter
   */
  advanced__search: function () {
    $('.advanced__search--btn').on('click', function (event) {
      event.preventDefault();
      if ($(window).innerWidth() <= 1024) {
        event.preventDefault();
        $(".advanced__search--filterwrap").hide();
      }
      else {
        $(".advanced__search--filterwrap").show();
      }   
      });
    

    $('.explore__vehicle--filterBtn').on('click', function (event) {
      if ($(window).innerWidth() <= 1024) {
        event.preventDefault();
        $(".advanced__search--filterwrap").show();
      }
      else {
        $(".advanced__search--filterwrap").hide();
      }
    });
    $('.filter__done--btn').on('click', function (event) {
      event.preventDefault();
      $(".advanced__search--filterwrap").hide();

    });
 
  },
  /**
   * Reset Form
   */
  formReset: function () {
    $('.advanced__clear input').click(function () {
      $("select").val("").trigger("change");
    });
  },
  /**
     * Function to activate ad__se
     */
  cardetailtab: function () {
    // Show the first ad__se and hide the rest
    $('#ad__ses-nav li:first-child').addClass('active');
    $('.ad__se-content').hide();
    $('.ad__se-content:first').show();
    // Click function
    $('#ad__ses-nav .partstab').click(function (e) {
      e.preventDefault();
      $(this).addClass('active');
      $('.vehicletab').removeClass('active');
      $("#ad__se2").show();
      $("#ad__se1").hide();
   
      // var activecardetailtab = $(this).find('a').attr('href');
      // // $(activecardetailtab).fadeIn();
      // $('.pdt-slider-single-wrap').slick('unslick');
      // $('.pdt-slider-nav-wrap').slick('unslick');
      // cardetails.slider();
      return false;
    });
    $('#ad__ses-nav .vehicletab').click(function (e) {
      e.preventDefault();
      window.location.href="/wps/myportal/home/search?contentPath=/AutoTrade_en/vehicles/brands";
      $(this).addClass('active');
      $('.partstab').removeClass('active');
      $("#ad__se1").show();
      $("#ad__se2").hide();
      
      
      return false;
    });
    $('.header__dropdownparts li').on('click', function (event) {
      $('body').addClass("partsClass");
      if ($('body').hasClass('partsClass')) {
        if ($('.header__dropdownparts li').hasClass('active')) {
          $('.header__dropdownparts li').removeClass('active');
        }
        $('body').find('.partstab').addClass("active");
        let currentTab = $(this).find('a').attr('href');
        $('.ad__se-content').hide();
        $(currentTab).show();
      }
    });
  },
}


$(document).ready(function () {
  advanced.select();
  advanced.explore__dropdown();
  advanced.advanced__search();
  advanced.formReset();
  advanced.cardetailtab();
  $('.explore__vehicles--wrap').isotope({
    itemSelector: '.single__product',
    layoutMode: 'fitRows',
    getSortData: {
      title: '.title',
      yearsort: '.yearsort',
      date_time: function( itemElem ) {
        var datestring=$( itemElem ).find('.date_time').text();
        return Date.parse(datestring);
      }
    },
    sortBy:"date_time",
    
  });
  $('.parts__list').isotope({
    itemSelector: '.parts__single',
    layoutMode: 'fitRows',
    getSortData: {
      title: '.title',
      price: '.price parseInt',
      sknum: '.sknum',
      date_time: function( itemElem ) {
        var datestring=$( itemElem ).find('.date_time').text();
        return Date.parse(datestring);
      }
    
    },
    sortBy:'.date_time'
  });
  $('.explore__dropdowncontent').on( 'click', 'petrol_sort', function() {
    var filterValue = $(this).attr('data-filter');
    $('.explore__vehicles--wrap').isotope({ filter: filterValue,
      itemSelector: '.single__product',
      layoutMode: 'fitRows', });
  });
})

