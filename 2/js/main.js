$(document).ready(function(){

    $('#pop_up, #pop_up_1').click(function(){
        $.fancybox([{href : '#request_form'}]);
    });


    $('.menu_button').click(function(){
        $('.menu').slideToggle();
    });


    $('.link').click(function () {
        elementClick = jQuery(this).attr("href")
        destination = jQuery(elementClick).offset().top - 40;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1500);
        return false;
    });



    var words = ['бизнесом','маркетингом ', 'отделом продаж', 'производством', 'доставкой'],
        l = words.length,
        i = 0,
        w = $('.screen_1_content h1 span').text(words[i++]);
    setInterval(function(){
        w.fadeOut();
        setTimeout(function() { w.text(words[i++]).fadeIn(); }, 500);
        if(i >= l) i = 0;
    }, 4000);



    $('.left_menu li').click(function(){
        $(this).parent().find('li').removeClass('active');
        $(this).addClass('active');
        $(this).parent().find('hr.active').removeClass('active');
        $(this).find('hr').addClass('active');

        var index = $(this).index();
        $('.this_menu').find('li.active').removeClass('active');
        $('.this_menu').find('li').eq(index).addClass('active');

    });



    $('.questions ul li p').click(function(){
        $(this).parent().find('span').toggleClass('active');
    });

    $('.bxslider').bxSlider({
        auto: true
    });

    $(".fancybox").fancybox();

    // $('form').validatr();
    // $('form').submit(function() {
    //     if ($.validatr.validateForm($(this))) {
    //         $(this).ajaxSubmit(function() {
    //             $.fancybox([{href : '#success'}]);
    //         });
    //     }
    //
    //     return false;
    // });

    $("input[type='tel']").inputmask("mask", {"mask": "+7 (999) 999-99-99"});

    // Google Analytics Events


    // -- END --

});
