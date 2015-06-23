function inArray(needle, haystack) {
    var length = haystack.length;
    for(var i = 0; i < length; i++) {
        if(typeof haystack[i] == 'object') {
            if(arrayCompare(haystack[i], needle)) return true;
        } else {
            if(haystack[i] == needle) return true;
        }
    }
    return false;
}
window.isset = function (v) {
    if (typeof(v) == 'object' && v == 'undefined') {
        return false;
    } else  if (arguments.length === 0) {
        return false;
    } else {
        var buff = arguments[0];
        for (var i = 0; i < arguments.length; i++){
            if (typeof(buff) === 'undefined' || buff === null) return false;
            buff = buff[arguments[i+1]];
        }
    }
    return true;
}

function myconf() {
    var cf = $.Deferred();
        $.ajax({
            type: 'POST',
            url: 'feedback/',
            dataType: 'json',
            data: 'act=cfg',
            success: function(answer) {
                cf.resolve(answer.configs);
            }
        });
    return cf;
}

var mcf = myconf();

mcf.done(function(conf) {

$(document).ready(function() {
(function() {
           var fb = $('.feedback');
           if(fb.length > 0) {
                fb.each(function(){
                    var form = $(this).closest('form'), name = form.attr('name');
                    //console.log(form);
                    if(isset(conf[name]) && isset(conf[name].cfg.antispamjs)) {
                      $(form).prepend('<input type="text" name="'+ conf[name].cfg.antispamjs +'" value="tesby" style="display:none;">');
                    }
                });
            }
  })();
});


/**
 * Отправка форм.
 *
 */

function feedback(vars) {
    var bt = $(vars.form).find('.feedback');
    var btc = bt.clone();
    var bvc = bt.val();
    var cfg = conf[vars.act].cfg;

    $.ajax({
        type: 'POST',
        url: 'feedback/',
        cache: false,
        dataType: 'json',
        data: 'act=' + vars.act + '&' + vars.data,
        beforeSend: function() {
            //$(bt).val('');
            $(bt).prop("disabled", true);
            $(bt).addClass('loading');
        },
        success: function(answer) {
          if(isset(cfg.notify) && !/none/i.test(cfg.notify)) {
           if(/color/i.test(cfg.notify)) {
                 // $(vars.form).find('input[type=text]:visible, textarea:visible, select:visible').css({'borderBottom': '3px solid #209d91'}, 300);
                 if(isset(answer.errors)) {
                     $.each(answer.errors, function(k,val) {
                         var reg = /[a-z]/i;
                         if(reg.test(k)) {
                          var e = $(vars.form).find('[name='+ k +']');
                          if(e.length == 1) {
                           // $(e).css({'border': '1px solid #FF532E'}, 100);
                          }
                        }
                     });
                 } if(isset(answer.infos)) {
                      var li='', $inf = $('<ul>', {id:'feedback-infolist'});
                       $.each(answer.infos, function(k,val) {
                          li += '<li>'+ val +'</li>';
                       });

                      $inf.html(li);

                      $.arcticmodal('close');

                      if(/modal/i.test(cfg.notify)) {
                        // check in modal and close
                          // var m = $('<div class="box-modal" id="feedback-modal-box" />');
                          // m.html($inf);
                          // m.prepend('<div class="modal-close arcticmodal-close">&times;</div>');
                          // $.arcticmodal({content: m});
                          $('.form-contact').find('.active').removeClass('active');
                          $('.feedback').addClass('true');
                          setTimeout(function  () {
                            $('.form-main').removeClass('fadeIn');
                            setTimeout(function  () {
                                $('.contact-from').removeClass('active');
                                $("body,html").removeClass('stop-scroll');                                 
                              },350)
                          },1500)
                      }
                  }

            }
          }
            $(bt).prop("disabled", false);
            $(bt).removeClass('loading');
            if(isset(answer.ok) && answer.ok == 1) {
                $(vars.form)[0].reset();
            }
        }
    });

}

    $(document).on('mouseenter mouseover', '.feedback', function(){
        var form = $(this).closest('form'), name = form.attr('name');
        if(isset(conf[name]) && isset(conf[name].cfg.antispamjs)) {
            $('input[name='+ conf[name].cfg.antispamjs +']').val('');
        }
    });


/**
 * Обработчик кнопки форм.
 * Кнопка должна быть внутри тегов <form> c классом .feedback
 * будет отправлено любое кол-во полей, кроме файлов
 *
 */

$(document).on('click', '.feedback', function(){
   var form = $(this).closest('form'), name = form.attr('name'), obj = {};
       obj.form = form;
       obj.act = name;
       obj.data = $(form).serialize();

      feedback(obj);

    return false;
});

}); // done