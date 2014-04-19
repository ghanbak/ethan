$( document ).ready(function() {
// (function($){
	// $.fn.parallax = function(options){

	// 	var parallaxItem = $(this);
	// 	offset = parallaxItem.offset();
	// 	var defaults = {
	// 	    "start": 0,
	// 	    "stop": offset.top + parallaxItem.height(),
	// 	    "coeff": 0.95
	// 	};
	// 	var opts = $.extend(defaults, options);
	// 	return this.each(function(){
	// 		$(window).bind('scroll', function() {
	// 		    windowTop = $(window).scrollTop();
	// 		    if((windowTop >= opts.start) && (windowTop <= opts.stop)) {
	// 		        newCoord = windowTop * opts.coeff;
	// 		        parallaxItem.css({
	// 		            "background-position": "0 "+ newCoord + "px"
	// 		        });
	// 		    }
	// 		});
	// 	});
	// };
	// $('.parallax').parallax({ "coeff": 0.1 });

	// $(window).scroll(function() {
 //        var logo = $('.logo-wrap');
 //        var st = $(this).scrollTop();
 //        logo.height( st );
 //        if( st == 0 ) {
 //            logo.();
 //        } else {
 //            logo.show();
 //        }
 //    }).scroll();

	$(document).scroll(function() {
		var $scrollingDiv = $("#logo");
		var scrollingBox = $(".logo-wrap");
	    var newSize = 100 - ((window.scrollY) / 2);
	    
	    if ( $(window).width() >= 640) {
	    	$scrollingDiv.css({
		        width: newSize + '%'
		    }, 500, 'easeInOutSine');
	    } else {
	    	return false;
	    }

	});

	$(document).scroll(function(){
		var target = $('#myName');
		var targetHeight = target.outerHeight();
	    var scrollPercent = (targetHeight - window.scrollY) / targetHeight;
	    if(scrollPercent >= 0 && $(window).width() >= 640 ) {
	        target.css('opacity', scrollPercent);
	    }
	});
// })(jQuery);
});