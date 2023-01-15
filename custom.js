$(window).on('load', function(){

	"use strict";
 
 
	/* ========================================================== */
	/*   Navigation Background Color                              */
	/* ========================================================== */
	if($('nav').hasClass('pag-nav')){				$(window).on('scroll', function() {		if($(this).scrollTop() > 250) {			$('.pag-nav').addClass('opaque');		} else {			$('.pag-nav').removeClass('opaque');		}	});		} else {		
	$(window).on('scroll', function() {
		if($(this).scrollTop() > 450) {
			$('.navbar-fixed-top').addClass('opaque');
		} else {
			$('.navbar-fixed-top').removeClass('opaque');
		}
	});		}$(window).on('scroll', function() {		if($(this).scrollTop() > 5250) {			$('#plan-heading-fixed').addClass('table-pricing-head');		} else {			$('#plan-heading-fixed').removeClass('table-pricing-head');		}	});
 
	
	/* ========================================================== */
	/*   Hide Responsive Navigation On-Click                      */
	/* ========================================================== */
	
	  $(".navbar-nav li a").on('click', function(event) {
	    $(".navbar-collapse").collapse('hide');
	  });

	
	/* ========================================================== */
	/*   Navigation Color                                         */
	/* ========================================================== */
	
	

	/* ========================================================== */
	/*   SmoothScroll                                             */
	/* ========================================================== */
	
	$(".navbar-nav li a, a.scrool").on('click', function(e) {
		
		var full_url = this.href;
		var parts = full_url.split("#");
		var trgt = parts[1];
		var target_offset = $("#"+trgt).offset();
		var target_top = target_offset.top;
		
		$('html,body').animate({scrollTop:target_top -70}, 1000);
			return false;
		
	});	
	

});

	/* ========================================================== */
	/*   Popup-Gallery                                            */
	/* ========================================================== *//*
	$('.popup-gallery').find('a.popup1').magnificPopup({
		type: 'image',
		gallery: {
		  enabled:true
		}
	}); 
	
	$('.popup-gallery').find('a.popup2').magnificPopup({
		type: 'image',
		gallery: {
		  enabled:true
		}
	}); 
 
	$('.popup-gallery').find('a.popup3').magnificPopup({
		type: 'image',
		gallery: {
		  enabled:true
		}
	}); 
 
	$('.popup-gallery').find('a.popup4').magnificPopup({
		type: 'iframe',
		gallery: {
		  enabled:false
		}
	});  
 */