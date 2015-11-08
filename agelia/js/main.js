(function ($) {
       var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
     if (!isMobile) {
     } 
})(jQuery);
$(document).ready(function(){
     $('.modal-trigger').leanModal({
     	opacity: .9
     });
     $('#inputSearch').focus(function(event) {
     	$('#'+$(this).attr('data-href')).fadeIn('400');
     	$(this).addClass('active');
     	$('<div class="overlayDropdown"></div>').appendTo('body');
     	$('.overlayDropdown').fadeIn('400');
     }).focusout(function(event) {
     	$('#'+$(this).attr('data-href')).fadeOut('400');
     	$(this).removeClass('active');
     	$('.overlayDropdown').fadeOut('400').remove();
     });
   // dropdown
     $('.button-dropdown').on('click', function(event) {
     	event.preventDefault();
     	
     	var attr = $(this).attr('data-activates'),
     		id = $('#'+attr);

     	id.addClass('openDropdown');
     });	
     $('.closeDropdown').on('click', function(event) {
     	event.preventDefault();
     	
     	$(this).parents('.dropdown').removeClass('openDropdown');
     });
     // end
   // menu hover
   function hoverMenu (OPTION_ACTIVE,OPTION,FOLLOWER,MENU) {
     // body...
     var OPTION_ACTIVE = $(OPTION_ACTIVE);
     var OPTION = $(OPTION);
     var FOLLOWER = $(FOLLOWER);

      // Set the initial position of 'FOLLOWER' based on the current value of the class 'ACTIVE'
       var FOLLOWER_INIT_POSITION = OPTION_ACTIVE.position();
       var FOLLOWER_INIT_WIDTH = OPTION_ACTIVE.height();
        FOLLOWER.css({
          'top': (FOLLOWER_INIT_POSITION.top) + 'px',
          'height': FOLLOWER_INIT_WIDTH + 'px'
        });

      OPTION.on('mouseover', function() {
        POSITION = $(this).position();

       
        FOLLOWER.css({
          'height': $(this).height(),
          'top': (POSITION.top) + 'px'
        });
      });

      // Reset position of the 'ACTIVE' class when mouse leave the 'main-menu' area.
      $(MENU).on('mouseleave', function() {
        FOLLOWER.css({
          'top': (FOLLOWER_INIT_POSITION.top) + 'px',
          'height': FOLLOWER_INIT_WIDTH + 'px'
        });
      });
   }
   hoverMenu('.menu-list li.active','.menu-list li','#userHover','.menu-list');
   $('.menu-user').on('click', '.toggle-dropdown', function(event) {
     event.preventDefault();
     
     var attr = $(this).attr('data-id'),
          id = '#'+attr;
          $(this).toggleClass('active');
        $(id).slideToggle(400);
         hoverMenu('.menu-list li.active','.menu-list li','#userHover','.menu-list');
   });  
    function hoverMenu2 (OPTION,FOLLOWER,MENU) {
     var OPTION = $(OPTION);
     var FOLLOWER = $(FOLLOWER);

      OPTION.on('mouseover', function() {
        POSITION = $(this).position();

      
        FOLLOWER.css({
          'height': $(this).height(),
          'top': (POSITION.top) + 'px',
          'display': 'block'
        });
      });

      // Reset position of the 'ACTIVE' class when mouse leave the 'main-menu' area.
      $(MENU).on('mouseleave', function() {
        FOLLOWER.css({
          'display' : 'none'
        });
      });
   }
   hoverMenu2('.menu_nav .nav-item','#navHover','.menu_nav');
// end menu
/*steps modal*/
   $('.step-button').on('click', function(event) {
     event.preventDefault();
     var href = $(this).attr('href'),
         id = '#'+href;
         $('.regModal-steps').removeClass('activeStep');

         $(id).addClass('activeStep');
   });  
   $('.regModalButton').click(function(event) {
     event.preventDefault();
     $('.regModal-steps').removeClass('activeStep');
     $('#regModal').find('.regModal-steps').first().addClass('activeStep');
   });
// end

// carousel
 var owl = $('#slider'),
    owlPop = $('#popProd'),
    owlNew = $('#newProd'),
    owlProductCard = $('#prdouctCardSlider');
 owl.owlCarousel({
    items:1,
    margin:30,
    smartSpeed:450
});
 owlProductCard.owlCarousel({
    items:3,
    margin:15,
    smartSpeed:450,
    callbacks:true
});

  owlProductCard.find('.owl-item').first().addClass('currSlide');
 $('#prdouctCardSliderNext').click(function() {
    var currSlide =  owlProductCard.find('.currSlide');
        owlProductCard.trigger('next.owl.carousel');
        currSlide.next().addClass('currSlide')
        currSlide.first().removeClass('currSlide')
       $('#productCardImgTop').attr('src', ''+owlProductCard.find('.currSlide').last().find('.slide-img').attr('src')+'');
     
  })
  $('#prdouctCardSliderPrev').click(function() {
      var currSlide =  owlProductCard.find('.currSlide');
          owlProductCard.trigger('prev.owl.carousel');
          currSlide.prev().addClass('currSlide')
          currSlide.last().removeClass('currSlide')
       $('#productCardImgTop').attr('src', ''+owlProductCard.find('.currSlide').first().find('.slide-img').attr('src')+'');

  })
  owlProductCard.on('click', '.owl-item', function(event) {
    event.preventDefault();
    owlProductCard.find('.currSlide').removeClass('currSlide')
    $(this).addClass('currSlide');
    $('#productCardImgTop').attr('src', ''+$(this).find('.slide-img').attr('src')+'');
  });
function owlCarousels (id,left,right) {
   id.owlCarousel({
      items:4,
      margin: 15,
      smartSpeed:450,
      nav: false
  });
  $('#'+right).click(function() {
      id.trigger('next.owl.carousel');
  })
  $('#'+left).click(function() {
      id.trigger('prev.owl.carousel');
  })
}
owlCarousels(owlPop,'pop-cat-l','pop-cat-r')
owlCarousels(owlNew,'new-cat-l','new-cat-r')

 // prduct
 $('.in-basket-item').on('click', function(event) {
   event.preventDefault();
   // $(this).parents('.product').find('.product-button').removeClass('active');
   $(this).parents('.product').find('.product-button').toggleClass('in-basket');
 });
 // 
 $('.product-button').on('click', function(event) {
   event.preventDefault();
   if (!$(this).hasClass('in-basket')) {
     $(this).toggleClass('active');
     $(this).parents('.product').find('.product-top').toggleClass('active');
     $(this).parents('.product').find('.dropup').toggleClass('open');
   }else{
     $(this).parents('.product').find('.product-top').toggleClass('active');
      $(this).parents('.product').find('.dropup').toggleClass('open');
   }
 });
 // prduct
 $('.clicked-item').on('click', function(event) {
   event.preventDefault();
   
   $(this).toggleClass('active');
 });
});