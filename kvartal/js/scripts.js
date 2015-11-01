
$(window).load(function(){
	$('.style-input').each(function(){
		$(this).prepend('<div class="click-me"></div>');
		var input = $(this).find('input');
		var i_attr = input.attr('type');
		var i_attr_2 = input.attr('checked');
		var i_label = $(this).find('label');
		if(i_attr === 'checkbox'){
			$(this).addClass('style-checkbox');
		} else 
		if(i_attr === 'radio'){
			$(this).addClass('style-radio');
		}
		if(i_attr_2 === 'checked'){
			$(this).addClass('checked');
			i_label.addClass('active');
		}
	});
	$('.style-input .click-me, .style-input label').on('click', function(){
	// $('.style-input .click-me, .style-input label').live('click', function(){
		var parent_i = $(this).parent();
		var input = parent_i.find('input');
		var input_radio = $('.style-input input[type="radio');
		var if_cheched = input_radio.attr('checked');
		var i_attr = input.attr('type');
		var i_name = input.attr('name');
		var i_label = parent_i.find('label');
		if(i_attr === 'checkbox'){
			if(parent_i.hasClass('checked')){
				parent_i.removeClass('checked');
				input.removeAttr('checked');
				i_label.removeClass('active');
			} else{
				parent_i.addClass('checked');
				input.attr('checked', 'checked');
				i_label.addClass('active');
			}
		} else
		if(i_attr === 'radio'){
			if(parent_i.hasClass('checked')){
				
			} else{
				input_radio.each(function(){
					if($(this).attr('name') === i_name){
						$(this).removeAttr('checked')
						.parent().removeClass('checked');
						parent_i.addClass('checked');
						input.attr('checked', 'checked');
					}
				});
			}
		}
	});
});

$(window).load(function(){
	$('.js-input').jqTransform({imgPath:'jqtransformplugin/img/'});

	$('.slider').each(function(){
		var slides = $(this).find('.slides');
		var img = $(this).find('.slides').find('img');
		var imgFirst = $(this).find('.slides').find('img:first-child');
		var prev = $(this).find('.arrows').find('.prev');
		var next = $(this).find('.arrows').find('.next');
		imgFirst.fadeIn(300);
		next.on('click', function(){
		// next.live('click', function(){
			slides.find('img:first-child').fadeOut(0).next().fadeIn();
			slides.find('img:first-child').remove().appendTo(slides);
		});
		prev.on('click', function(){
		// prev.live('click', function(){
			slides.find('img:first-child').fadeOut()
			slides.find('img:last-child').prependTo(slides).fadeIn();
		});
	});
});


$(document).ready(function(){
	var popupLink = $('.popup-link');
	var popup = $('.popup');
	var allBg = $('.bg');
	var close = $('.close-popup');


	function popupclose(){
		allBg.fadeOut(300);
		popup.fadeOut(300);
	}
	allBg.on('click', function(){ popupclose(); });
	// allBg.live('click', function(){ popupclose(); });
	close.on('click', function(){ popupclose(); });
	// close.live('click', function(){ popupclose(); });
	
	popupLink.on('click', function(){
	// popupLink.live('click', function(){
		var winTop = $(window).scrollTop();
		var oneId = $(this).attr('id');
		popup.each(function(){
			var twoId = $(this).attr('id');
			allBg.fadeIn(300);
			if(twoId === oneId){
				var thisWidth = $(this).width();
				$(this).css({
					'top' : winTop + 60 + 'px',
					'left' : '50%',
					'margin-left' : -thisWidth/2 + 'px'
				}).fadeIn(300);
			}
		});
	}); 
	$('.only-num').keydown(function(event) {
	    if  (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || 
	        (event.keyCode == 65 && event.ctrlKey === true) || 
	        (event.keyCode >= 35 && event.keyCode <= 39)) {
	            return;
	    }
	    else {
	        if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
	            event.preventDefault(); 
	        }   
	    }
	});

	$('.select .container').on('click', function(){
	// $('.select .container').live('click', function(){
		if($(this).hasClass('active')){
			$(this).removeClass('active');
			$(this).next().fadeOut(0);
		} else{
			$(this).addClass('active');
			$(this).next().fadeIn(0);
		}
	});

	$('.checks-me span').on('click', function(){
	// $('.checks-me span').live('click', function(){
		if($(this).hasClass('active')){
			$('.select .container').removeClass('active');
			$('.select .container').next().fadeOut(0);
		} else{
			$(this).parent().find('span').removeClass('active');
			$(this).addClass('active');
			var i_1 = $(this).index();
			var a = $(this).html();
			$('.select .container').html('').append(a);
			$('.select .container').removeClass('active');
			$('.select .container').next().fadeOut(0);
			if(i_1 === 0){
				$('.tabs-point .tab:nth-child(1)').get(0).click();
				$('.tab-point-2:nth-child(1)').get(0).click();
			} else
			if(i_1 === 1){
				$('.tabs-point .tab:nth-child(2)').get(0).click();
				$('.tab-point-2:nth-child(2)').get(0).click();
			} else
			if(i_1 === 2){
				$('.tabs-point .tab:nth-child(3)').get(0).click();
				$('.tab-point-2:nth-child(3)').get(0).click();
			}
		}
	});
	$('.tabs-point .tab').on('click', function(){
	// $('.tabs-point .tab').live('click', function(){
		var i_1 = $(this).index();
		$('.tabs-point .tab').removeClass('active');
		$(this).addClass('active');
		$('.slider-point .slider').each(function(){
			var i_2 = $(this).index();
			if(i_1 === i_2){
				$('.slider-point .slider').removeClass('visible');
				$(this).addClass('visible');
				if(i_1 === 0){
					// $('.tabs-point .tab:nth-child(1)').click();
					$('.checks-me span:nth-child(1)').get(0).click();
					$('.tab-point-2:nth-child(1)').get(0).click();
				} else
				if(i_1 === 1){
					// $('.tabs-point .tab:nth-child(2)').click();
					$('.checks-me span:nth-child(2)').get(0).click();
					$('.tab-point-2:nth-child(2)').get(0).click();
				} else
				if(i_1 === 2){
					// $('.tabs-point .tab:nth-child(3)').click();
					$('.checks-me span:nth-child(3)').get(0).click();
					$('.tab-point-2:nth-child(3)').get(0).click();
				}
			}
		});
		$('.map div').each(function(){
			var i_3 = $(this).index();
			if(i_1 === i_3){
				$('.map div').removeClass('visible');
				$(this).addClass('visible');
			}
		})
	});	
	$('.tab-point-2').on('click', function(){
	// $('.tab-point-2').live('click', function(){
		var i_1 = $(this).index();
		$('.tab-point-2').removeClass('active');
		$(this).addClass('active');
		$('.tabs-3 .tab-point-3').each(function(){
			var i_2 = $(this).index();
			if(i_1 === i_2){
				$('.tabs-3 .tab-point-3').removeClass('active');
				$(this).addClass('active');
				if(i_1 === 0){
					$('.tabs-point .tab:nth-child(1)').get(0).click();
					$('.checks-me span:nth-child(1)').get(0).click();
				} else
				if(i_1 === 1){
					$('.tabs-point .tab:nth-child(2)').get(0).click();
					$('.checks-me span:nth-child(2)').get(0).click();
				} else
				if(i_1 === 2){
					$('.tabs-point .tab:nth-child(3)').get(0).click();
					$('.checks-me span:nth-child(3)').get(0).click();
				}
			}
		});
	});


});

jQuery(document).ready(function($) {
	// carousel
	var $owlCarousel = $('.owlCarousel');

	$owlCarousel.owlCarousel({
    loop:true,
    // margin:10,
    // nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})
$('.rightnavOWL').click(function() {
    $owlCarousel.trigger('next.owl.carousel');
})
$('.leftnavOWL').click(function() {
    $owlCarousel.trigger('left.owl.carousel');
})
});