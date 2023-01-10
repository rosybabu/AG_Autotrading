var main = {
  /**
  * Function to activate banner slider 
  */
  headerToggle: function () {
    $('.header__humburger').on('click', function (event) {
      $('body').addClass('modal-open');
      $(this).find(".header__toggle--menu").addClass("header__toggle--open");
    });
    $(document).on('click', '.header__close', function () {
      $('.header__toggle--menu').removeClass("header__toggle--open");
      $('body').removeClass('modal-open');
    });
  },
  /**
 * Function to activate mobile phone popup 
 */
  headerPhone: function () {
    $(document).on('click', '.header__mobile--menulink', function () {
      $(this).find(".header__phone--popup").addClass("header__phone--open");
    });
    $(document).on('click', '.header__phone--close', function (e) {
      e.preventDefault();
      setTimeout(function () {
        $('.header__phone--popup').removeClass("header__phone--open");
      }, 50);

    });
  },
  /**
  * Function to activate banner slider 
  */
  bannerSlider: function () {
    $('.banner__row').slick({
      dots: true,
      infinite: true,
      slidesToShow: 1,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 2000,
    });
  },
  /**
  * Function to activate tabslider 
  */
  tabSlider: function () {
  
    $('.section__tabs-nav a').click(function (e) {
      // Check for section__tabs-navactive
      $('.section__tabs-nav li').removeClass('section__tabs-navactive');
      $(this).parent().addClass('section__tabs-navactive');
      // Display section__tabs-navactive tab
      let currentTab = $(this).attr('href');
      $('.section__tabs-content').hide();
      $(currentTab).show();
    });
    $("#tab2").click(function (e) {
      $(".section__cars").hide();
      $(".section__parts").show();
    $("#partstab-select").select2({
        tags: "true",
        placeholder: "Search parts and accessories",
        allowClear: true,
        width: '100%',
      });
    });
    $("#tab1").click(function (e) {
      $(".section__cars").show();
      $(".section__parts").hide();
     
    });
   $("#cartab-select").select2({
    tags:"true",
      placeholder: "Search by make or model",
      allowClear: true,
      width: '100%',
    });
    // $select.data('select2').$container.addClass('tabdropdown--contopen');
    // $select.data('select2').$dropdown.addClass('tabdropdown--open');
 
  },

  /**
   * Function to activate productslider 
   */
  productSlider: function () {
    $('.product__wrap').slick({
      dots: false,
      infinite: true,
      slidesToShow: 3,
      arrows: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            arrows: false,
            adaptiveHeight: true,
          }
        },
      ]
    });
  },

  /**
   * Function to activate testimonialslider 
   */
  testimonialSlider: function () {
    $('.testimonial__content').slick({
      dots: false,
      infinite: true,
      slidesToShow: 2.1,
      arrows: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            arrows: false,
          }
        },
      ]
    });
  },
  headerDropdown: function () {
    $('li.dropdown > a').on('click', function (event) {
      event.preventDefault();
      $(this).toggleClass('selected');
      $(this).parents(".dropdown").find('.dropdown-menu').toggle(300);
      // $(this).parent().siblings().find('ul').hide(200);
      //Hide menu when clicked outside
      $(this).parent().find('ul').parent().mouseleave(function () {
        var thisUI = $(this);
        $('html').click(function () {
          thisUI.children(".dropdown-menu").hide();
          thisUI.children("a").removeClass('selected');
          $('html').unbind('click');
        });
      });
    })
    $('.header__dropdowncol').each(function () {
      $(this).find(".header__dropdowncontent ul li").slice(6).hide();
    })
    if ($(".header__dropdowncontent ul li:hidden").length != 0) {
      $(".header__dropdownsee").show();
    }
    // $(".header__dropdownsee").on("click", function () {
    //   $(".header__dropdowncontent ul li").length;
    //   $(this).parents('.header__dropdowncol').find(".header__dropdowncontent ul li:hidden").slice(0, 20).slideDown();
    //   if ($(".header__dropdowncontent ul li:hidden").length == 0) {
    //     $(this).parents('.header__dropdowncol').find(".header__dropdownsee").show();
    //   } else {
    //     $(this).parents('.header__dropdowncol').find(".header__dropdownsee").hide();
    //   }
    // });
  },
  tabSearch: function () {
    $(document).on('keyup', '.section__search--input input', function () {
      if ((this.value) && this.value.length != 0) {
        $(".placeholder").hide();
        $(".search__container").show();
      }
      else {
        $(".placeholder").show();
        $(".search__container").hide();
      }
    });
  },
  footerDropdown: function () {
    $('.footer__vehicle__title').click(function (e) {
      if ($(window).width() < 1024) {
        e.preventDefault();
        let $this = $(this);
        if ($this.next().hasClass('show')) {
          $this.next().removeClass('show');
          $(this).removeClass("footer-arrow");
          $this.next().slideUp(350);
        } else {
          $this.parents(".footer__row").find('.footer__links__flex').removeClass('show');
          $this.parents(".footer__row").find('.footer__links__flex').slideUp(350);
          $(this).toggleClass("footer-arrow");
          $this.next().toggleClass('show');
          $this.next().slideToggle(350);
        }
      }

    });
  },
  rqtabSlider: function () {
    $('.rq__tab-headwrap a').click(function (e) {
      e.preventDefault();
      $('.rq__tab-headwrap li').removeClass('section__rqtabs--active');
      $(this).parent().addClass('section__rqtabs--active');
      // Display section__tabs-navactive tab
      let currentTab = $(this).attr('href');
      $('.rq__tab--bodyWrap').hide();
      $(currentTab).show();
      $(".errorclass").hide();
    });
  },
  rqtabDropdown: function () {
    //TOGGLING NESTED ul
    $(".drop-down .selected span").click(function () {
      let currentTab = $(this).parents('.rq__tab--input').attr('href');
      $(currentTab).show();


    });

    //SELECT OPTIONS AND HIDE OPTION AFTER SELECTION
    $(".options ul li").click(function () {
      var text = $(this).find("h6").html();
      let currentTab = $(this).parents('.options').attr('id');
      let val = $(".rq__tab-container").find('.rq__tab--input').attr('href');
      $('.rq__tab-container').find('.selected span').html(text);
      // $(".drop-down .selected span").html(text);
      $(".options").hide();
      $
    });


    //HIDE OPTIONS IF CLICKED ANYWHERE ELSE ON PAGE
    $(document).bind('click', function (e) {
      var $clicked = $(e.target);
      if (!$clicked.parents().hasClass("drop-down"))
        $(".drop-down .options").hide();
    });

  }
  ,
  moreScript: function () {
    $(".section__brands").slice(0, 5).show();
    if ($(".section__brands:hidden").length != 0) {
      $(".section__brandsBtn").show();
    }
    $(".section__brandsBtn").on("click", function (e) {
      e.preventDefault();
      $(".section__brands:hidden").show();
      if ($(".section__brands:hidden").length == 0) {
        $(".section__brandsBtn").text("see less");
      }
    });
    $('.section__carsBtn button').on('click', function (event) {
      $(this).parents(".section__carsBtn").next().addClass("showrow");
      $(this).hide();
    });
  },
  imgLazy: function () {
    $("img").attr("loading", "lazy");
  },
  validationForm: function () {
    $('#vehicletypes').on('click', function (e) {
      e.preventDefault();

      $(".errorclass").remove();
      if ($('#cartype').val() == "") {
        $('#cartype').parents(".rq__tab--input ").find('.select2-container').after('<span class="errorclass">car type is required</span>');
      } else {
        $('#cartype').parents(".rq__tab--input ").find('errorclass').hide();
      }
      if ($('#carbrands').val() == "") {
        $('#carbrands').parents(".rq__tab--input ").find('.select2-container').after('<span class="errorclass">car brands is required</span>');
      } else {
        $('#carbrands').parents(".rq__tab--input ").find('errorclass').hide();
      }
      if ($('#model').val() == "") {
        $('#model').parents(".rq__tab--input ").find('.select2-container').after('<span class="errorclass">model is required</span>');
      } else {
        $('#model').parents(".rq__tab--input ").find('errorclass').hide();
      }
      if ($('#model-varient').val() == "") {
        $('#model-varient').parents(".rq__tab--input ").find('.select2-container').after('<span class="errorclass">model varient is required</span>');
      } else {
        $('#model-varient').parents(".rq__tab--input ").find('errorclass').hide();
      }
      if ($('#year').val() == "") {
        $('#year').parents(".rq__tab--input ").find('.select2-container').after('<span class="errorclass">year is required</span>');
      } else {
        $('#year').parents(".rq__tab--input ").find('errorclass').hide();
      }
      if ($('#quantity').val() == "") {
        $('#quantity').parents(".rq__tab--input ").find('input').after('<span class="errorclass">quantity is required</span>');
      } else {
        $('#quantity').parents(".rq__tab--input ").find('errorclass').hide();
      }

      if ($('#tab1 .country').val() == "") {
        $('#tab1 .country').parents(".rq__tab--input ").find('.select2-container').after('<span class="errorclass">country is required</span>');
      } else {
        $('#tab1 .country').parents(".rq__tab--input ").find('errorclass').hide();
      }
      if ($('#fname').val() == "") {
        $('#fname').parents(".rq__tab--input ").find('input').after('<span class="errorclass">name is required</span>');
      } else {
        $('#fname').parents(".rq__tab--input ").find('errorclass').hide();
      }

      if ($('#email').val() == "") {
        $('#email').parents(".rq__tab--input ").find('input').after('<span class="errorclass">email is required</span>');

      } else {
        $('#email').parents(".rq__tab--input ").find('errorclass').hide();
      }
      if ($('#phone').val() == "") {
        $('#phone').parents(".rq__tab--input ").find('input').after('<span class="errorclass">phonenumber is required</span>');
      } else {
        $('#phone').parents(".rq__tab--input ").find('errorclass').hide();
      }
    });
    $('#email').on('keypress', function () {
      $('#email').parents(".rq__tab--input ").find('.errorclass').hide();
      $('#email').parents(".rq__tab--input ").find('.errorvalidn').hide();
      var re = /([A-Z0-9a-z_-][^@])+?@[^$#<>?]+?\.[\w]{2,4}/.test(this.value);
      if (!re) {
        $(this).parents(".rq__tab--input ").find('input').after('<span class="errorvalidn">Please enter valid email </span>');
      } else {
        $(this).parents(".rq__tab--input ").find('.errorvalidn').hide();
      }

    })
    $('#fname').on('keypress', function () {
      $('#fname').parents(".rq__tab--input ").find('.errorclass').hide();
      $('#fname').parents(".rq__tab--input ").find('.errorvalidn').hide();
      var re = /^[A-Za-z\s]*$/.test(this.value);
      if (!re) {
        $(this).parents(".rq__tab--input ").find('input').after('<span class="errorvalidn">Please enter alphabets </span>');
      } else {
        $(this).parents(".rq__tab--input ").find('.errorvalidn').hide();
      }

    })
    $('#quantity').on('keypress', function (e) {
      $('#quantity').parents(".rq__tab--input ").find('.errorclass').hide();
      $('#quantity').parents(".rq__tab--input ").find('.errorvalidn').hide();
      var charCode = (e.which) ? e.which : event.keyCode

      if (String.fromCharCode(charCode).match(/[^0-9]/g)) {
        $('#quantity').parents(".rq__tab--input ").find('.errorvalidn').hide();
        return false;
      }
    })

    $('#phone').on('keypress', function () {
      $('#phone').parents(".rq__tab--input ").find('.errorclass').hide();
    })

    $('#request-quotationpartsbtn').on('click', function (e) {
      e.preventDefault();
      $(".errorclass").remove();
      if ($('#pcategory').val() == "") {
        $('#pcategory').parents(".rq__tab--input ").find('.select2-container').after('<span class="errorclass">category is required</span>');
      } else {
        $('#pcategory').parents(".rq__tab--input ").find('errorclass').hide();
      }

      if ($('#pquantity').val() == "") {
        $('#pquantity').parents(".rq__tab--input ").find('input').after('<span class="errorclass">quantity is required</span>');
      } else {
        $('#pquantity').parents(".rq__tab--input ").find('errorclass').hide();
      }
      if ($('#pcountry').val() == "") {
        $('#pcountry').parents(".rq__tab--input ").find('.select2-container').after('<span class="errorclass">country is required</span>');
      } else {
        $('#pcountry').parents(".rq__tab--input ").find('errorclass').hide();
      }
      if ($('#pname').val() == "") {
        $('#pname').parents(".rq__tab--input ").find('input').after('<span class="errorclass">name is required</span>');
      } else {
        $('#pname').parents(".rq__tab--input ").find('errorclass').hide();
      }
      if ($('#pemail').val() == "") {
        $('#pemail').parents(".rq__tab--input ").find('input').after('<span class="errorclass">email is required</span>');
      } else {
        $('#pemail').parents(".rq__tab--input ").find('errorclass').hide();
      }
      if ($('#phone1').val() == "") {
        $('#phone1').parents(".rq__tab--input ").find('input').after('<span class="errorclass">phone number is required</span>');
      } else {
        $('#phone1').parents(".rq__tab--input ").find('errorclass').hide();
      }
    });
    $('#pemail').on('keypress', function () {
      $('#pemail').parents(".rq__tab--input ").find('.errorclass').hide();
      $('#pemail').parents(".rq__tab--input ").find('.errorvalidn').hide();
      var re = /([A-Z0-9a-z_-][^@])+?@[^$#<>?]+?\.[\w]{2,4}/.test(this.value);
      if (!re) {
        $(this).parents(".rq__tab--input ").find('input').after('<span class="errorvalidn">Please enter valid email </span>');
      } else {
        $(this).parents(".rq__tab--input ").find('.errorvalidn').hide();
      }

    })
    $('#pname').on('keypress', function () {
      $('#pname').parents(".rq__tab--input ").find('.errorclass').hide();
      $('#pname').parents(".rq__tab--input ").find('.errorvalidn').hide();
      var re = /^[A-Za-z\s]*$/.test(this.value);
      if (!re) {
        $(this).parents(".rq__tab--input ").find('input').after('<span class="errorvalidn">Please enter alphabets </span>');
      } else {
        $(this).parents(".rq__tab--input ").find('.errorvalidn').hide();
      }

    })
    $('#pquantity').on('keypress', function (e) {
      $('#pquantity').parents(".rq__tab--input ").find('.errorclass').hide();
      $('#pquantity').parents(".rq__tab--input ").find('.errorvalidn').hide();
      var charCode = (e.which) ? e.which : event.keyCode

      if (String.fromCharCode(charCode).match(/[^0-9]/g)) {
        $('#pquantity').parents(".rq__tab--input ").find('.errorvalidn').hide();
        return false;
      }
    })
    $('#phone1').on('keypress', function () {
      $('#phone1').parents(".rq__tab--input ").find('.errorclass').hide();
    })
    $('.rq__tab--data').on('change', function (e) {
      if ($(this).val() == "") {

        $(this).parents(".rq__tab--input").find(".errorclass").show();
        $(this).parents(".rq__tab--input").find(".errorvalidn").hide();
      }
      else {
        $(this).parents(".rq__tab--input").find(".errorclass").hide();
      }
    });
  },
  contactTab: function () {
    var activeIndex = $('.active-tab').index(),
      $contentlis = $('.tabs-content li'),
      $tabslis = $('.tabs li');

    // Show content of active tab on loads
    $contentlis.eq(activeIndex).show();

    $('.tabs').on('click', 'li', function (e) {
      var $current = $(e.currentTarget),
        index = $current.index();

      $tabslis.removeClass('active-tab');
      $current.addClass('active-tab');
      $contentlis.hide().eq(index).show();
    });
  }
}

$(document).ready(function () {
  main.bannerSlider();
  main.tabSlider();
  main.productSlider();
  main.testimonialSlider();
  main.headerDropdown();
  main.tabSearch();
  main.footerDropdown();
  main.headerToggle();
  main.headerPhone();
  main.rqtabSlider();
  main.rqtabDropdown();
  main.moreScript();
  main.validationForm();
  main.contactTab();
  $(".cartype").select2({
    templateResult: formatState,
  });
  $(".carbrands").select2({
    // templateResult: formatBrands,
    // maximumSelectionLength: 3,
    forceabove : true
  });
  $(".model").select2({
    templateresult: formatModels,
    width: '284px'
  });
  $('.year').select2({

  });
  $('#model-varient').select2({

  });
  $('.country').select2({
  });
  $('.category').select2({
    templateResult: formatCategory,
  });

  function formatBrands(obj) {
    var data = $(obj.element).data();
    var text = $(obj.element).text();
    if (data && data['img_src']) {
      img_src = data['img_src'];
      template = $("+ text + ");
      return template;
    }
  }
  function formatState(state) {
    var data = $(state.element).data();
    var text = $(state.element).text();
    if (data && data['img_src']) {
      img_src = data['img_src'];
      template = $("<div class='car__type--option'><div class='car__single'><img src=\"" + img_src + "\"/><p>" + text + "</p></div>");
      return template;
    }
  }
  function formatModels(state) {
    var data = $(state.element).data();
    var text = $(state.element).text();
    if (data && data['img_src']) {
      img_src = data['img_src'];
      template = $("<div class='car__type--option'><div class='car__single'><img src=\"" + img_src + "\"/><p>" + text + "</p></div>");
      return template;
    }
  }
  function formatCategory(category) {
    var data = $(category.element).data();
    var text = $(category.element).text();
    if (data && data['img_src']) {
      img_src = data['img_src'];
      template = $("<img src=\"" + img_src + "\"/>" + category.text + '</p>');
      return template;
    }
  }

  // init Isotope
  var $parts_sort = $('.parts__list').isotope({
    itemSelector: '.parts__single',
    layoutMode: 'fitRows',
    getSortData: {
      title: '.title',
      price: '.price parseInt',
      sknum: '.sknum',
      date_time: function (itemElem) {
        var datestring = $(itemElem).find('.date_time').text();
        return Date.parse(datestring);
      }

    }
  });

  // vehicle list isotope 
  var $vehicle_sort = $('.explore__vehicles--wrap').isotope({
    itemSelector: '.single__product',
    layoutMode: 'fitRows',
    getSortData: {
      title: '.title',
      yearsort: '.yearsort',   
      category: '[data-category]',
      date_time: function (itemElem) {
        var datestring = $(itemElem).find('.date_time').text();
        return Date.parse(datestring);
      }
    }
  });

  $vehicle_sort.isotope({ sortBy: ".date_time", sortAscending: "desc" });
  // bind sort button click
  $(document).on('click', '.explore__dropdown-menu li a', function () {
    var sortValue = $(this).attr('data-sort-by');
    var direction = $(this).attr('data-sort-direction');
    var isAscending = (direction == 'asc');
    var filterValue = $( this ).attr('data-filter');
    $vehicle_sort.isotope({ filter: filterValue });
    $parts_sort.isotope({ sortBy: sortValue, sortAscending: isAscending });
    $vehicle_sort.isotope({ sortBy: sortValue, sortAscending: isAscending});
  });
  
})
