$(document).ready(function(){function e(e,t){C&&$(window).innerWidth()<=w&&$(".menu_nav").on("click",e,function(e){e.preventDefault(),$(this).parents(t).removeClass("active")})}function t(){C&&$(window).innerWidth()<=w&&$(".menu_nav").on("click",".category-name",function(e){e.preventDefault(),$(this).parents(".category-block").addClass("active")})}function n(){if(C&&$(window).innerWidth()<=w){var e=$(".menu_nav").find(".category-block");e.each(function(e,t){var n='<li class="list-name"><p class="name-text">'+$(this).find(".category-name").find(".name-text").text()+"</p></li>";$(n).prependTo($(this).find(".category-list"))})}}function i(){C&&$(window).innerWidth()<=w&&$(".footer-menu").on("click",".menu-title",function(e){e.preventDefault(),$(this).parent().toggleClass("active"),$(this).parent().find(".menu-list").stop().slideToggle("fast")})}function o(){if(C&&$(window).innerWidth()<=w){var e=$(".product-card");e.each(function(e,t){var n=$(this).find(".card-stars"),i=$(this).find(".card-title"),o=$(this).find(".right-block"),a=$(this).find(".card-slider"),s=$(this).find(".parameter-title"),r=$(this).find(".card-count");o.insertAfter(a),i.clone().appendTo(s),n.appendTo(s.find(".title-text")),r.appendTo(s.find(".title-text"))})}}function a(){C&&$(window).innerWidth()<=w&&$(".sort-filter").find(".filter-button").addClass("closed")}function s(){C&&$(window).innerWidth()<=w&&$(".order-form").find(".step-link").insertBefore($(".order-form").find(".cityInput"))}function r(){C&&$("body").css("width",$(window).innerWidth()+"px")}function l(e,t,n,i){1!=$(i.target).closest(e).closest(t).length&&$(e).removeClass(n)}function c(e,t,n,i){var e=$(e),t=$(t),n=$(n),o=e.position(),a=e.height();n.css({top:o.top+"px",height:a+"px"}),t.on("mouseover",function(){POSITION=$(this).position(),n.css({height:$(this).height(),top:POSITION.top+"px"})}),$(i).on("mouseleave",function(){n.css({top:o.top+"px",height:a+"px"})})}function d(e,t,n){var e=$(e),t=$(t);e.on("mouseover",function(){POSITION=$(this).position(),t.css({height:$(this).height(),top:POSITION.top+"px",opacity:1})}),$(n).on("mouseleave",function(){t.css({opacity:0})})}function p(){$(window).innerWidth()<m&&($(".menu_nav").on("click",".dropdown-item",function(e){e.preventDefault(),$(".menu_nav").find(".active").removeClass("active"),$(this).parent().addClass("active")}),$(".menu_nav").on("click",".dropdown-close",function(e){e.preventDefault(),$(this).parents(".nav-item").removeClass("active")}),$(window).load(function(){$(window).innerWidth()<m?($(".menu_left").css("height",$("body").innerHeight()+"px"),$(".menu_nav").find(".dropdown").css({width:$(window).innerWidth()-$(".menu_left").innerWidth()+"px",height:$("body").innerHeight()+"px"})):($(".menu_nav").find(".dropdown").removeProp("style"),$(".menu_left").removeProp("style"))}))}function u(e,t,n){e.owlCarousel({responsive:{0:{items:1},767:{items:3},1025:{items:4}},margin:15,smartSpeed:450,nav:!1}),$("#"+n).click(function(){e.trigger("next.owl.carousel")}),$("#"+t).click(function(){e.trigger("prev.owl.carousel")})}function f(){function e(){x.owlCarousel({margin:15,smartSpeed:450,callbacks:!0,responsive:{768:{items:2},1025:{items:3}}})}x.children().length>3&&$(window).innerWidth()>m?($(".compare-nav").css("display","block"),e()):x.children().length>2&&$(window).innerWidth()<m?($(".compare-nav").css("display","block"),e()):$(".compare-nav").removeProp("style")}function v(e,t,n){$(e).on("click",function(e){e.preventDefault();var i=$(this).parents(n).find(t);i.each(function(){$(this).find("input").prop("checked")&&$(this).find("input").prop("checked",!1)})})}function h(){(C||$(window).innerWidth()<m)&&$(".product-card").each(function(e,t){var n=$(this).find(".card-reviews"),i=$(this).find("#cardLeftBlock");n.appendTo(i)})}function g(e){var t=e.coords.latitude,n=e.coords.longitude,i=$(".cityInput").find("input"),o=$(".streetInput").find("input");console.log(t+","+n),$.ajax({type:"GET",dataType:"json",url:"http://maps.googleapis.com/maps/api/geocode/json?latlng="+t+","+n+"&sensor=false",data:{},success:function(e){$.each(e.results,function(e,t){$.each(t.address_components,function(e,t){if("locality,political"==t.types&&(""!=t.long_name?(i.val(t.long_name),$(".cityInput").removeClass("invalid"),$(".cityInput").addClass("valid")):(i.val("Местоположение не определенно, введите пожалуйста сами"),$(".cityInput").addClass("invalid")),i.addClass("active"),i.next("label").addClass("active")),"route"==t.types){if(""!=t.long_name){var n=t.long_name;o.val(n.split(" ")[1]),$(".streetInput").removeClass("invalid"),$(".streetInput").addClass("valid"),console.log(t.street_number),console.log(t.route)}else o.val("Местоположение не определенно, введите пожалуйста сами"),$(".streetInput").addClass("invalid");o.addClass("active"),o.next("label").addClass("active")}})}),console.log("Success")},error:function(){console.log("error")}})}var m=1025,w=767,C=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);t(),e(".dropdown-title",".nav-item"),e(".list-name",".category-block"),n(),i(),o(),a(),s(),$(window).resize(function(t){e(".dropdown-title",".nav-item"),e(".list-name",".category-block")}),r(),$(".modal-trigger").leanModal({opacity:.9}),$("select").material_select(),$("#inputSearch").focus(function(e){$("#"+$(this).attr("data-href")).fadeIn("400"),$(this).addClass("active"),$('<div class="overlayDropdown"></div>').appendTo("body"),$(".overlayDropdown").fadeIn("400")}).focusout(function(e){$("#"+$(this).attr("data-href")).fadeOut("400"),$(this).removeClass("active"),$(".overlayDropdown").fadeOut("400").remove()}),$(document).on("click",function(e){l(".dropdown",".header","openDropdown",e),l(".item-link",".menu_left","active",e),l(".menu_left",".row","activeMenu",e),$(window).innerWidth()<m&&l("#headerSearch",".header","active",e),C&&$(window).innerWidth()<w&&$(".overlayDropdown").fadeOut("400").remove()}),$(".header").on("click",".button-infav,.button-buy",function(){window.location.href=""+$(this).prop("href")}),$(".button-dropdown").on("click",function(e){e.preventDefault(),e.stopPropagation();var t=$(this).attr("data-activates"),n=$("#"+t);$(".header").find(".openDropdown").removeClass("openDropdown"),C&&$(window).innerWidth()<w&&($('<div class="overlayDropdown"></div>').appendTo("body"),$(".overlayDropdown").fadeIn("400")),n.addClass("openDropdown")}),$(".closeDropdown").on("click",function(e){e.preventDefault(),$(this).parents(".dropdown").removeClass("openDropdown")}),$(".header-search__button").on("click",".button-link",function(e){e.preventDefault(),e.stopPropagation();var t=$(this).attr("data-activates"),n=$("#"+t);n.addClass("active"),n.find("input").focus()}),$("body").on("click",".closeSearchInputMobile",function(e){e.preventDefault(),$(window).innerWidth()<m&&$("#headerSearch").removeClass("active")}),c(".menu-list li.active",".menu-list li","#userHover",".menu-list"),$(".menu-user").on("click",".toggle-dropdown",function(e){e.preventDefault();var t=$(this).attr("data-id"),n="#"+t;$(this).toggleClass("active"),$(n).slideToggle(400),c(".menu-list li.active",".menu-list li","#userHover",".menu-list")}),$(window).innerWidth()>m&&d(".menu_nav .nav-item","#navHover",".menu_nav"),p(),$(".menu-open").on("click",".open-button",function(e){e.preventDefault(),e.stopPropagation(),$(".menu_left").addClass("activeMenu")}),$(".step-button").on("click",function(e){e.preventDefault();var t=$(this).attr("href"),n="#"+t;$(".regModal-steps").removeClass("activeStep"),$(n).addClass("activeStep")}),$(".regModalButton").click(function(e){e.preventDefault(),$(".regModal-steps").removeClass("activeStep"),$("#regModal").find(".regModal-steps").first().addClass("activeStep")});var k=$("#slider"),b=$("#popProd"),y=$("#newProd"),D=$("#prdouctCardSlider"),x=$("#compareSlider");k.owlCarousel({items:1,margin:30,smartSpeed:450}),$("#indexNavRight").click(function(){k.trigger("next.owl.carousel")}),$("#indexNavLeft").click(function(){k.trigger("prev.owl.carousel")}),D.owlCarousel({items:3,margin:15,smartSpeed:450,callbacks:!0}),D.find(".owl-item").first().addClass("currSlide"),$("#prdouctCardSliderNext").click(function(){var e=D.find(".currSlide");D.trigger("next.owl.carousel"),e.next().addClass("currSlide"),e.first().removeClass("currSlide"),$("#productCardImgTop").attr("src",""+D.find(".currSlide").last().find(".slide-img").attr("src"))}),$("#prdouctCardSliderPrev").click(function(){var e=D.find(".currSlide");D.trigger("prev.owl.carousel"),e.prev().addClass("currSlide"),e.last().removeClass("currSlide"),$("#productCardImgTop").attr("src",""+D.find(".currSlide").first().find(".slide-img").attr("src"))}),D.on("click",".owl-item",function(e){e.preventDefault(),D.find(".currSlide").removeClass("currSlide"),$(this).addClass("currSlide"),$("#productCardImgTop").attr("src",""+$(this).find(".slide-img").attr("src"))}),u(b,"pop-cat-l","pop-cat-r"),u(y,"new-cat-l","new-cat-r"),$(window).resize(function(e){f(),p(),r(),console.log($(window).innerWidth())}),f(),$("#compare-r").click(function(){x.trigger("next.owl.carousel")}),$("#compare-l").click(function(){x.trigger("prev.owl.carousel")}),$(".in-basket-item").on("click",function(e){e.preventDefault(),$(this).parents(".product").find(".product-button").toggleClass("in-basket"),$(this).parents(".product").find(".product-top").removeClass("active"),$(this).parents(".product").find(".dropup").removeClass("open"),console.log("ads")}),$(".product-button").on("click",function(e){e.preventDefault(),$(this).hasClass("in-basket")?($(this).parents(".product").find(".product-top").toggleClass("active"),$(this).parents(".product").find(".dropup").toggleClass("open")):($(this).toggleClass("active"),$(this).parents(".product").find(".product-top").toggleClass("active"),$(this).parents(".product").find(".dropup").toggleClass("open"))}),$(".clicked-item").on("click",function(e){e.preventDefault(),$(this).toggleClass("active")}),$("body").on("click",".openProductModal",function(e){$(window).innerWidth()>=w&&(e.preventDefault(),$(".modalProduct").addClass("visible").css("margin-top",$(window).scrollTop()),$('<div class="overlayDropdown modalOverlay" style="top:0px;background:#546e7a;opacity:.9;z-index:14;"></div>').appendTo("body"),$(".overlayDropdown").fadeIn("400"))}),$("body").on("click",".modalOverlay,.closeModalProduct",function(e){e.preventDefault(),$(".modalProduct").removeClass("visible"),$(".overlayDropdown").fadeOut("400").remove()});var S,_=$(".js-range-slider"),T=$(".js-input"),I=$(".js-input-to"),W=0,P=23e3;_.ionRangeSlider({type:"double",min:W,max:P,from:0,hide_min_max:!0,hide_from_to:!0,onStart:function(e){T.prop("value",e.from),I.prop("value",e.to)},onChange:function(e){T.prop("value",e.from),I.prop("value",e.to)}}),S=_.data("ionRangeSlider"),T.on("change keyup",function(){var e=$(this).prop("value");W>e?e=W:e>P&&(e=P),S.update({from:e,to:e})}),$(".range-reset").on("click",function(e){e.preventDefault(),S.reset(),T.prop("value",W),I.prop("value",P)}),$(".accardion").on("click",".toggle-accardion, .header-title",function(e){e.preventDefault();var t=$(this).parents(".collapsible-header");$(this).parents(".accardion").hasClass("not-accardion")||(t.next().slideToggle(400),t.toggleClass("active"))}),v(".color-reset",".color-checkbox",".color-section"),$(".brand-item").on("click",function(e){e.preventDefault();var t=$(this).find("input");t.prop("checked")?($(this).removeClass("active"),t.prop("checked",!1)):($(this).addClass("active"),t.prop("checked",!0))}),$(".brand-reset").on("click",function(e){e.preventDefault();var t=$(this).parents(".brand-section").find(".brand-item"),n=t.find("input");n.prop("checked",!1),t.removeClass("active")}),$(".favorites-reset").on("click",function(e){e.preventDefault();var t=$(this).parents(".favorites-section").find(".brand-item"),n=t.find("input");n.prop("checked",!1),t.removeClass("active")});var O=$(".favorites-a").children().innerHeight()+15,M='<div class="favorites-all"><p class="all-text">Развернуть</p></div>';$(".favorites-a").children().length>5&&($(".favorites-a").css({height:5*O,overflow:"hidden"}),$(M).appendTo($(".favorites-section").find(".collapsible-body"))),$(".favorites-section").on("click",".favorites-all",function(){$(this).hasClass("open")?(console.log(open),$(".favorites-a").stop().animate({height:5*O},200),$(this).removeClass("open")):($(".favorites-a").stop().animate({height:O*$(".favorites-a").children().length},200),$(this).addClass("open"))});var R=$(window).innerWidth()<=m?$(".menu-right").innerWidth()+15:$(".menu-right").innerWidth()+17;$(".categories-content").css($(".categories-content").hasClass("content-list")?{paddingRight:R+"px"}:{paddingRight:R+"px"}),$(".sort-filter").on("click",".filter-button",function(e){e.preventDefault();var t=$(this).attr("href"),n=$(""+t),i=-1*(n.innerWidth()+1);$(".categories-content").hasClass("content-list")?$(this).hasClass("closed")?(n.css("right",0),$(".categories-content").css({paddingRight:R+"px"}),$(this).removeClass("closed"),$(".content-list").removeClass("full-list")):($(this).addClass("closed"),$(".content-list").addClass("full-list"),n.css("right",i),$(".categories-content").css({paddingRight:"2px"})):$(this).hasClass("closed")?(n.css("right",0),$(".categories-content").css({paddingRight:R+"px"}),$(this).removeClass("closed")):($(this).addClass("closed"),n.css("right",i),$(".categories-content").css({paddingRight:"0px"}))}),h(),$(".form-step").on("change","input",function(){""===$(this).val()?$(this).removeClass("active"):$(this).addClass("active")}),$(".form-step").on("click",".city-place",function(e){e.preventDefault(),navigator.geolocation.getCurrentPosition(g)}),$(".step").on("click",".checkb",function(e){var t=$(this).parents(".step-checkbox");$(this).parents(".step").find(".checked").removeClass("checked"),$(".step").find(".toggle").stop(!0,!1).slideUp("fast"),t.addClass("checked"),t.find(".toggle").stop(!0,!1).slideDown("fast")}),$(".order-steps").on("click",".completeStep>.step-header",function(e){$(this).toggleClass("opened").next().slideToggle("slow")}),$(".step").on("click",".button-link",function(e){e.preventDefault();var t=$(this).parents(".step"),n=t.find(".step-input"),i=!1,o="step-1"===t.prop("id")?".invalid":".checked",a="step-1"===t.prop("id")?0:1,s=t.find(o),r=a,l=$(this).attr("href");"step-1"===t.prop("id")?$(n).each(function(e,t){""===$(this).find(".validate").val()?($(this).addClass("invalid"),i=!1):i=!0}):i=!0,i&&s.length===r&&(t.addClass("completeStep").removeClass("open").find(".step-body").slideUp("slow"),$("body,html").animate({scrollTo:$(""+l).innerHeight()+15},2e3),$(""+l).addClass("open").find(".step-body").slideDown("slow"),i=!0)}),$(".step").on("click",".basket-button",function(e){var t=$(this).attr("href"),n=$(this).parents(".step");$(this).hasClass("hasLink")||(e.preventDefault(),n.removeClass("open").find(".step-body").slideUp("slow"),$("body,html").animate({scrollTo:$(""+t).scrollTop()},2e3),console.log($(""+t).scrollTop()+","+$(""+t).position().top),$(""+t).addClass("open").find(".step-body").slideDown("slow"))}),$(".order-products").on("click",".products-header",function(e){e.preventDefault(),$(this).toggleClass("open"),$(this).next(".products-body").stop().slideToggle("fast")})});