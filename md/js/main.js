$(document).ready(function(){
     var $tabletRez = 1025;
     var $mobRez = 767;
     var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
     $('.slides').owlCarousel({
      items:1
      // margin: 10
     });
     $('.customNextBtn').click(function(event) {
       event.preventDefault();
        $('.slides').trigger('next.owl.carousel');
    });
    var owlProductCard = $('.items-slides');
     owlProductCard.owlCarousel({
       margin: 10,
       responsive:{
           0:{
               items:1
           },
           760:{
               items:3
           },
           1000:{
               items:3
           }
       }
     });
     owlProductCard.find('.owl-item').first().addClass('currSlide');

     $('.items-right').click(function(event) {
       event.preventDefault();
        owlProductCard.trigger('next.owl.carousel');
    });
     $('.items-left').click(function(event) {
       event.preventDefault();
        owlProductCard.trigger('prev.owl.carousel');
    });
    owlProductCard.on('click', '.owl-item', function(event) {
      event.preventDefault();
      owlProductCard.find('.currSlide').removeClass('currSlide');
      $(this).addClass('currSlide');
      $('#productCardImgTop').attr('src', ''+$(this).find('img').attr('src')+'');
    });
     function Input(el){
       $(el).on('change keyup',  function() {
          if ($(this).val() === '') {
                 $(this).parent().removeClass('active');
             }else{
                 $(this).parent().addClass('active');
             }
       });
     }
     Input('#inputSearch');
     $('#inputSearch').focusin( function() {
          $(this).parents('.search-block').find('.search-dropdown').fadeIn(400);
     }).focusout(function(event) {
       $(this).parents('.search-block').find('.search-dropdown').fadeOut(400);

     });
     $('.filter-tabs').on('click','.name',function(event) {
         event.preventDefault();
         var href = $(this).attr('href');

         $('.filter-tabs').find('.active').removeClass('active');
         $('.tabs-content').find('.active').removeClass('active');

         $(this).addClass('active');
         $('.tabs-content').find(''+href).addClass('active');
     });
     // range
     var $range = $(".js-range-slider"),
        $input = $(".js-input"),
        $inputTo = $(".js-input-to"),
        instance,
        min = 0,
        max = 23000;

    $range.ionRangeSlider({
        type: "double",
        min: min,
        max: max,
        from: 0,
        hide_min_max: true,
        hide_from_to: true,
        onStart: function (data) {
            $input.prop("value", data.from);
            $inputTo.prop("value", data.to);
        },
        onChange: function (data) {
            $input.prop("value", data.from);
            $inputTo.prop("value", data.to);
            if (data.from === min && data.to === max) {
                // console.log('true')
                $range.parents('.filter-block').removeClass('hasChecked');
            }else{
                $range.parents('.filter-block').addClass('hasChecked');
            }
        }
    });

    instance = $range.data("ionRangeSlider");
    $input.on("change keyup", function () {
        var val = $(this).prop("value");
        if (val < min) {
            val = min;
        } else if (val > max) {
            val = max;
        }
        instance.update({
            from: val,
            to: val
        });
    });
    $('#reviewModal').on('click', '.star', function(event) {
      event.preventDefault();

      $(this).addClass('full');
      $(this).prevAll().addClass('full');
      $(this).nextAll().removeClass('full');
    });
    function unBind(){
      $('.busket-product').unbind('mouseenter mouseleave');
    }
    if($(document).innerWidth()<991){
      $(window).resize(function(event) {
        unBind();
      });
      unBind();
      }

    $('.busket-link').click(function(event) {
      event.preventDefault();
    });
    // recomendDropdown hover
    $('.busket-product').mouseenter(function(event) {
      var arrow = $('#arrowRecomend'),
          parent = $('.busket-products').offset().top,
          el = $(this).offset().top,
          count = el - parent,
          margin= function(){
            if(count<0){
              return  6;
            }else{
              return  count+6;
            }
            console.log(count);
          };
          arrow.css({
            'top': margin() +'px'
          });

      //
      var recomendDropdown = $('#recomendDropdown');
      recomendDropdown.stop().fadeIn(300);
    }).mouseleave(function(event) {
      var recomendDropdown = $('#recomendDropdown');
      if(recomendDropdown.is(':hover')){
        recomendDropdown.css('display','block');
      }else{
        recomendDropdown.stop().fadeOut(200);
      }
    });
    $('#recomendDropdown').mouseleave(function(event) {
      $(this).stop().fadeOut(200);
    });
     $( "#datepicker" ).datepicker( $.datepicker.regional.ru );
    //  order
    $('.step-delivery').on('click', '.menu-item', function(event) {
      event.preventDefault();
      var href = $(this).attr('href');

      $('.step-delivery').find('.menu-item').removeClass('active');
      $('.delivery-tabs').find('.tab').removeClass('active');
      $('#price-delivery').find('.price').removeClass('active');

      $(this).addClass('active');
      $('#'+href).addClass('active');
      $('#'+href+'-1').addClass('active');
    });
    $('.order-next').on('click','.next-button', function(event) {
        event.preventDefault();
        var href = $(this).attr('href');
        $('.order-steps').find('.step').removeClass('active');
        $('.order-menu').find('.list-item').removeClass('active');
        $('.order-menu').find('.'+href).addClass('active');
        $('#'+href).addClass('active');

    });

    var clicked = false;
    // dropdown
    $('.dropdownGlobal').click(function(event) {
      event.preventDefault();
      if ($(this).hasClass('open')) {
        $(this).find('.dropdown-drop').fadeOut(400);
        $(this).removeClass('open');
      }else{
        $(this).find('.dropdown-drop').fadeIn(400);
        $(this).addClass('open');
      }
    });
    $('.dropdown-drop').on( 'click','.dropdown-item',function(event) {
      event.preventDefault();
      var dropItem = $(this),
          dropItemText = dropItem.text();

          $(this).parents('.dropdownGlobal').find('.dropdown-output').text(dropItemText);

    });
});
