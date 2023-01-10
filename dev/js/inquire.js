var inquirepartsForm = {
    /**
    * Function to validate form
    */

    form: function () {
    
      $("#inquire-vehicles").click(function(e){
        e.preventDefault();
            $(".errorclass").remove();
            $(".errorvalidn").remove();
            if ($('#vehiclename').val() == "") {
              $('#vehiclename').parents(".inquire__form--input").find('input').after('<span class="errorclass">name is required</span>');
            } else {
              $('#vehiclename').parents(".inquire__form--input").find('errorclass').hide();
            }
            if ($('#vehiclephone').val() == "") {
              $('#vehiclephone').parents(".inquire__form--input").find('input').after('<span class="errorclass">phonenumber is required</span>');
            } else {
              $('#vehiclephone').parents(".inquire__form--input").find('errorclass').hide();
            }
          });
          $('#vehiclequantity').on('keypress', function (e) {
            $('#vehiclequantity').parents(".inquire__form--input").find('.errorclass').hide();
            $('#vehiclequantity').parents(".inquire__form--input").find('.errorvalidn').hide();
            var charCode = (e.which) ? e.which : event.keyCode    
          
            if (String.fromCharCode(charCode).match(/[^0-9]/g))    {
              $('#vehiclequantity').parents(".inquire__form--input").find('.errorvalidn').hide();
              return false;       
            }     
          })
          $('#vehiclename').on('keypress', function () {
            $('#vehiclename').parents(".inquire__form--input").find('.errorclass').hide();
            $('#vehiclename').parents(".inquire__form--input").find('.errorvalidn').hide();
            var re = /^[A-Za-z\s]*$/.test(this.value);
            if (!re) {
              $(this).parents(".inquire__form--input").find('input').after('<span class="errorvalidn">Please enter alphabets </span>');
            } else {
              $(this).parents(".inquire__form--input").find('.errorvalidn').hide();
            }
            
          })
          $('#vehicleemail').on('keypress', function () {
            $('#vehicleemail').parents(".inquire__form--input").find('.errorclass').hide();
            $('#vehicleemail').parents(".inquire__form--input").find('.errorvalidn').hide();
            var re = /([A-Z0-9a-z_-][^@])+?@[^$#<>?]+?\.[\w]{2,4}/.test(this.value);
            if (!re) {
              $(this).parents(".inquire__form--input").find('input').after('<span class="errorvalidn">Please enter valid email </span>');
            } else {
              $(this).parents(".inquire__form--input").find('.errorvalidn').hide();
            }
            
          })
          $('.errorvalidn').hide();
        $("#inquire-parts").click(function(e){
            e.preventDefault();
            $(".errorclass").remove();
            $(".errorvalidn").remove();
            if ($('#name').val() == "") {
              $('#name').parents(".inquireparts__form--input ").find('input').after('<span class="errorclass">name is required</span>');
            } else {
              $('#name').parents(".inquireparts__form--input").find('errorclass').hide();
            }
            if ($('#phone').val() == "") {
              $('#phone').parents(".inquireparts__form--input ").find('input').after('<span class="errorclass">phonenumber is required</span>');
            } else {
              $('#phone').parents(".inquireparts__form--input").find('errorclass').hide();
            }
          });
          $('#quantity').on('keypress', function (e) {
            $('#quantity').parents(".inquireparts__form--input ").find('.errorclass').hide();
            $('#quantity').parents(".inquireparts__form--input ").find('.errorvalidn').hide();
            var charCode = (e.which) ? e.which : event.keyCode    
          
            if (String.fromCharCode(charCode).match(/[^0-9]/g))    {
              $('#quantity').parents(".inquireparts__form--input").find('.errorvalidn').hide();
              return false;       
            }     
          })
          $('#name').on('keypress', function () {
            $('#name').parents(".inquireparts__form--input ").find('.errorclass').hide();
            $('#name').parents(".inquireparts__form--input").find('.errorvalidn').hide();
            var re = /^[A-Za-z\s]*$/.test(this.value);
            if (!re) {
              $(this).parents(".inquireparts__form--input").find('input').after('<span class="errorvalidn">Please enter alphabets </span>');
            } else {
              $(this).parents(".inquireparts__form--input").find('.errorvalidn').hide();
            }
            
          })
          $('#email').on('keypress', function () {
            $('#email').parents(".inquireparts__form--input").find('.errorclass').hide();
            $('#email').parents(".inquireparts__form--input").find('.errorvalidn').hide();
            var re = /([A-Z0-9a-z_-][^@])+?@[^$#<>?]+?\.[\w]{2,4}/.test(this.value);
            if (!re) {
              $(this).parents(".inquireparts__form--input").find('input').after('<span class="errorvalidn">Please enter valid email </span>');
            } else {
              $(this).parents(".inquireparts__form--input").find('.errorvalidn').hide();
            }
            
          })
          $('#phone').on('keypress', function () {
            $('#phone').parents(".inquireparts__form--input").find('.errorclass').hide();
            $('#phone').parents(".inquireparts__form--input").find('.errorvalidn').hide();
            var re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(this.value);
            if (!re) {
              $(this).parents(".inquireparts__form--input").find('input').after('<span class="errorvalidn">Please enter valid phone number </span>');
            } else {
              $(this).parents(".inquireparts__form--input").find('.errorvalidn').hide();
            }
          })
          $('input').change(function() { 
            $(this).siblings(".error").remove();
         });
         $("#contact-us-submit").click(function(e){
          e.preventDefault();
          $(".errorclass").remove();
          $(".errorvalidn").remove();
          if ($('.contact__form--input #name').val() == "") {
            $('.contact__form--input #name').parents(".contact__form--input ").find('input').after('<span class="errorclass">name is required</span>');
          } else {
            $('.contact__form--input #name').parents(".contact__form--input").find('errorclass').hide();
          }
          if ($('.contact__form--input #phone').val() == "") {
            $('.contact__form--input #phone').parents(".contact__form--input  ").find('input').after('<span class="errorclass">phonenumber is required</span>');
          } else {
            $('.contact__form--input #phone').parents(".contact__form--input ").find('errorclass').hide();
          }
        });
        $('.contact__form--input #phone').on('keypress', function () {
          $('.contact__form--input #phone').parents(".contact__form--input").find('.errorclass').hide();
          $('.contact__form--input #phone').parents(".contact__form--input").find('.errorvalidn').hide();
          var re = /^(?:\\+971|0(0971)?)(?:[234679]|5[01256])[0-9]{7}$/.test(this.value);
          if (!re) {
            $(this).parents(".contact__form--input").find('input').after('<span class="errorvalidn">Please enter valid phone number </span>');
          } else {
            $(this).parents(".contact__form--input").find('.errorvalidn').hide();
          }
        })
        $('.contact__form--input #name').on('keypress', function () {
          $('.contact__form--input #name').parents(".contact__form--input ").find('.errorclass').hide();
          $('.contact__form--input #name').parents(".contact__form--input ").find('.errorvalidn').hide();
          var re = /^[A-Za-z\s]*$/.test(this.value);
          if (!re) {
            $(this).parents(".contact__form--input ").find('input').after('<span class="errorvalidn">Please enter alphabets </span>');
          } else {
            $(this).parents(".contact__form--input ").find('.errorvalidn').hide();
          }
          
        })
    },
   
}
$(document).ready(function () {
    inquirepartsForm.form();   
})

