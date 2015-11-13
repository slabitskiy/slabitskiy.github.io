$(window).load(function(){

	$('body .mini-photo.mingallery').on('click','a',function()
	{
$('body .mini-photo.mingallery li').removeClass('active');
$(this).addClass('active');
		var src=$(this).attr('href');
$('.kvartal-banner img').attr('src',src);
return false;
	});

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

	$('body').on('click','.submit_form',function()
	{
		$('#'+$(this).data('form')).submit();
	});


	$('body .col_title').on('click','button',function()
	{
		$('.col_title button').removeClass('active');
$(this).addClass('active');
var ndiv=$(this).data('id');
$('.block_img div.active').removeClass('active');
$('.block_img div[data-id='+ndiv+']').addClass('active');
	});


	$('body').on('submit','form.form_add',function()
	{
		var form=$(this);
		var src=form.serialize();
		var send=true;
		form.find('input[type="text"], input[type="tell"]').each(function()
		{
			if($(this).val()==''){send=false;}
		});
		if(send)
		{
			$.ajax({
			   type: "POST",
			   url: "/ajax/add_form_result.php",
			   data: src,
			   success: function(msg)
				{
					if(msg!=''){form.html(msg);}
			   }
			 });
		}
		else
		{
		alert('Не все поля заполнены');
		}
		return false;
	})


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

	$('body').on('click', '.marker',function()
	{
var mark=$(this).data('id');
map.setCenter(eval(mark));
	});

	$('body').on('click', '.close_popup span',function()
	{
$('.bg').click();
	})


	$('.phone-block .phones').on('click', function(){
	// $('.select .container').live('click', function(){
		if($('.select .container').hasClass('active')){
			$('.select .container').removeClass('active');
			$('.select .container').next().fadeOut(0);
		} else{
			$('.select .container').addClass('active');
			$('.select .container').next().fadeIn(0);
		}
	});



	$('.checks-me span').on('click', function()
	{

		var id=$(this).data('id');
		$('.phones').find('h2').each(function(){if($(this).data('id')==id){$(this).addClass('display-block');}else{$(this).removeClass('display-block');}})
	// $('.checks-me span').live('click', function(){
		if($(this).hasClass('active')){
			$('.select .container').removeClass('active');
			$('.select .container').next().fadeOut(0);
		} else{
			$(this).parent().find('span').removeClass('active');
			$(this).addClass('active');
			var i_1 = $(this).index();
			var a = $(this).find('name').html();
			$('.select .container').html('').append('<span>'+a+'</span>');
			$('.select .container').removeClass('active');
			$('.select .container').next().fadeOut(0);

$('.kvartal-banner-text2').removeClass('active');
			if(i_1 === 1){
				$('.tabs-point .tab[data-id=3]').get(0).click();
$('.kvartal-banner-text2.name3').addClass('active');

//if($('.tab-point-2').length >0)$('.tab-point-2:nth-child(0)').get(0).click();
			} else
			if(i_1 === 2){
				$('.tabs-point .tab[data-id=2]').get(0).click();
$('.kvartal-banner-text2.name2').addClass('active');
//				if($('.tab-point-2').length >0)$('.tab-point-2:nth-child(1)').get(0).click();
			} else
			if(i_1 === 3){
$('.kvartal-banner-text2.name1').addClass('active');
				$('.tabs-point .tab[data-id=1]').get(0).click();
//				if($('.tab-point-2').length >0)$('.tab-point-2:nth-child(2)').get(0).click();
			}
		}
	});
	$('.tabs-point .tab').on('click', function(){
		var id=$(this).data('id');

		var id=$(this).data('id');
		$('.phones').find('h2').each(function(){if($(this).data('id')==id){$(this).addClass('display-block');}else{$(this).removeClass('display-block');}})
		$('.checks-me').find('span[data-id="'+id+'"]').click();
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
var owl = $("#arendatory-carousel");
 
  owl.owlCarousel({
     
      itemsCustom : [
        [0, 1],
        [600, 2],
        [1000, 4]
      ],
      navigation : true,
	  navigationText: false
 
  });
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
$('.goTop').click(function(e) {
	 e.preventDefault();
	    $('html, body').animate({
	        scrollTop: 0
	    }, 1000);
});
var imgsTab = $('#tabGalleryImgs').find('.imgs-tab'),
	topTabs = $('#galleryTabs'),
	topTab = topTabs.find('.tab'),
	bigImg = $('#bigImgSlider').find('img');

imgsTab.first().addClass('activeTab');
topTab.first().addClass('activeTab');
imgsTab.find('.img').first().addClass('activeImg');
bigImg.attr('src', ''+imgsTab.find('.activeImg').attr('data-img') +'');

$('#tabGalleryImgs').on('click', '.img', function(event) {
	event.preventDefault();
	var src = $(this).attr('data-img');
	bigImg.attr('src', ''+src+'');
	$('#tabGalleryImgs').find('.img').removeClass('activeImg');

	$(this).addClass('activeImg');

});
topTabs.on('click', '.tab', function(event) {
	event.preventDefault();
	var href = $(this).attr('data-herf'),
	tab =$('#tabGalleryImgs').find('#'+href+'');

	topTab.removeClass('activeTab');
	$(this).addClass('activeTab');

	imgsTab.removeClass('activeTab');
	tab.addClass('activeTab');

	imgsTab.find('.img').removeClass('activeImg');
	tab.find('.img').first().addClass('activeImg');

	bigImg.attr('src', ''+tab.find('.activeImg').attr('data-img') +'');
});
	$('#galleryNext').on('click', function(event) {
	event.preventDefault();
	var currTab = $('#tabGalleryImgs').find('.activeTab'),
		currImg = currTab.find('.activeImg');
		if (!$('.activeTab').find('.img').last().hasClass('activeImg')) {
			bigImg.attr('src', ''+currImg.next().attr('data-img') +'');
			currImg.next().addClass('activeImg')
			currImg.first().removeClass('activeImg')
		}else{
			bigImg.attr('src', ''+$('.activeTab').find('.img').first().attr('data-img') +'');
			$('.activeTab').find('.img').first().addClass('activeImg')
			currImg.first().removeClass('activeImg')
		}
	});	
	$('#galleryPrev').on('click', function(event) {
	event.preventDefault();
	var currTab = $('#tabGalleryImgs').find('.activeTab'),
		currImg = currTab.find('.activeImg');
		if (!$('.activeTab').find('.img').first().hasClass('activeImg')) {
			bigImg.attr('src', ''+currImg.next().attr('data-img') +'');
			currImg.prev().addClass('activeImg')
			currImg.last().removeClass('activeImg')
		}else{
			bigImg.attr('src', ''+$('.activeTab').find('.img').last().attr('data-img') +'');
			$('.activeTab').find('.img').last().addClass('activeImg')
			currImg.last().removeClass('activeImg')
		}
	});	



});
 <!--
/*


var message="но-но, нельзя туда";
///////////////////////////////////
      function clickIE4(){
      if (event.button==2){
      alert(message);
      return false;
      }
      }
function clickNS4(e){
      if (document.layers||document.getElementById&&!document.all){
      if (e.which==2||e.which==3){
      alert(message);
      return false;
      }
      }
      }
if (document.layers){
      document.captureEvents(Event.MOUSEDOWN);
      document.onmousedown=clickNS4;
      }
      else if (document.all&&!document.getElementById){
      document.onmousedown=clickIE4;
      }
document.oncontextmenu=new Function("alert(message);return false")
$(document).keydown(function(e) {
    if ((e.which == '115' || e.which == '83' ) && (e.ctrlKey || e.metaKey))
    {
        e.preventDefault();
        alert("но-но, нельзя, сначала деньги - потом сайт");
        return false;
    }

    if ((e.ctrlKey || e.metaKey) && (e.keyCode ==16)){
    	e.preventDefault()
        alert("но-но, нельзя туда");
        return false;

    };
    return true;
}); */
// --> 
