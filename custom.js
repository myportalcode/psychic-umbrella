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
	

});document.addEventListener("DOMContentLoaded", function() {var lazyloadImages;    if ("IntersectionObserver" in window) {lazyloadImages = document.querySelectorAll(".img-responsive");var imageObserver = new IntersectionObserver(function(entries, observer) {entries.forEach(function(entry) {if (entry.isIntersecting) {var image = entry.target;image.src = image.dataset.src;image.classList.remove("img-responsive");imageObserver.unobserve(image);}});});lazyloadImages.forEach(function(image) {imageObserver.observe(image);});} else {  var lazyloadThrottleTimeout;lazyloadImages = document.querySelectorAll(".img-responsive");function lazyload () {if(lazyloadThrottleTimeout) {clearTimeout(lazyloadThrottleTimeout);}    lazyloadThrottleTimeout = setTimeout(function() {var scrollTop = window.pageYOffset;lazyloadImages.forEach(function(img) {if(img.offsetTop < (window.innerHeight + scrollTop)) {img.src = img.dataset.src;img.classList.remove('img-responsive');}});if(lazyloadImages.length == 0) { document.removeEventListener("scroll", lazyload);window.removeEventListener("resize", lazyload);window.removeEventListener("orientationChange", lazyload);}}, 20);}document.addEventListener("scroll", lazyload);window.addEventListener("resize", lazyload);window.addEventListener("orientationChange", lazyload);}})