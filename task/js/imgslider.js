(function ($) {
	'use strict';
	$.fn.slider = function (options) {

	//default options
	var settings = $.extend($.fn.slider.defaultOptions, options);

	var init = function () {
		var $this = $(this);
		var width = $this.width();
		$this.find('.image-c').css('width' , width + 'px');
		$this.find('.left.image').css('width' , Math.floor(width * settings.initialPosition));
		$this.find('.versus-polzunok-strelki').css('left' , Math.floor(width * settings.initialPosition)-42);
		if (settings.showInstruction) {
			var $instrDiv = $('<div></div>')
				.addClass('instruction')
				.append('<p></p>');

			$instrDiv.children('p')
				.text(settings.instructionText);

			$this.append($instrDiv);	

			//set left offset of instruction
			$instrDiv.css('left', (settings.initialPosition - $instrDiv.children('p').width() / (2 * width)) * 100 + '%');
		}			
	};

	var slideResize = function (e) {
		e.preventDefault();
		//hide instructions
		$(e.currentTarget).children('.instruction').hide();
		var width;
		if(e.type.startsWith('touch')){
			width = e.originalEvent.touches[0].clientX - e.currentTarget.offsetLeft;
		} else {
			width = e.offsetX === undefined ? e.pageX - e.currentTarget.offsetLeft : e.offsetX;
		}
		$(this).find('.left.image').css('width', width + 'px');
		$(this).find('.versus-polzunok-strelki').css('left', width-42 +'px');
	};

	var enableSliderDrag = function (e) {
		e.preventDefault();
		$(this).css('cursor' , 'ew-resize')
			.on('mousemove.sliderns', slideResize)
			.on('touchmove.sliderns', slideResize);
		$(this).find('.versus-form-js').css('pointer-events', 'none');
		$('#beforeAfter').on('mouseleave',function(){
			$(this).off('mousemove.sliderns')
					.off('touchmove.sliderns');
					console.log('leave')
		})
	};

	var disableSliderDrag = function (e) {
		e.preventDefault();
		$(this).css('cursor', 'auto')
			.off('mousemove.sliderns')
			.off('touchmove.sliderns');
		$('.versus-form-js').css('pointer-events', 'auto');
	};

	var redrawSlider = function () {
		return $('.slider.responsive').each(init);					
	};
	
	$(window).on('resize', redrawSlider);
	return this.each(init)
		.on('click touchstart', slideResize)
		.on('mousedown touchstart', enableSliderDrag)
		.on('mouseup touchend', disableSliderDrag);
	};
	
	$.fn.slider.defaultOptions= {
			initialPosition: 0.001,
			showInstruction: false,
			instructionText: 'Click and Drag'
	};	
/*	var $black_white = $('.versus-well'),
		img_width = $('.black_white .container').width(),
		init_split = Math.round(img_width/2);
  
  $black_white.width(init_split);  

		$('#beforeAfter').mousemove(function(e){
		var offX  = (e.offsetX || e.clientX - $black_white.offset().left);
			$black_white.width(offX);
		});

		$('#beforeAfter').mouseleave(function(e){
		$black_white.stop().animate({
		width: init_split
		},1000)
		});*/
}(jQuery));