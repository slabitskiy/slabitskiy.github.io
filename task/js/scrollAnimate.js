$(document).ready(function() {
	$.fn.isOnScreen = function(){

    var win = $(window);

    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = (viewport.top - 750) + win.height();

    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();

    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

	};
	$(window).scroll(function(event) {
		var
			innerHeightParent = $('.brutal-level-block-imagewrapper').innerHeight(),
		    heightParent = innerHeightParent - 11;
		if ($('#brutal-level').isOnScreen() === true) {
			if (!$('#brutal-level').hasClass('scrolled')) {
				  $('body').css('overflow', 'hidden');		
				   $('.brutal-level-block-imagewrapper-procent').prop('Counter',0).animate({
				        Counter: 100
				    }, {
				        duration: 3500,
				        step: function (now) {
				           $('.brutal-level-block-imagewrapper-procent').text(Math.ceil(now)+'%');
				        }
				    });
				$('.brutal-level-block-imageinner').animate({'height': heightParent+'px'},3500,function  () {
					$('.button-zapis').addClass('animated shake');
					$('body').css('overflow', 'auto');
				});	
				$('#brutal-level').addClass('scrolled');
			}
		}
	});
});	