$( document ).ready(function() {

	$.fn.parallax = function(options){

		var parallaxItem = $(this);
		offset = parallaxItem.offset();
		var defaults = {
		    "start": 0,
		    "stop": offset.top + parallaxItem.height(),
		    "coeff": 0.95
		};
		var opts = $.extend(defaults, options);
		return this.each(function(){
			$(window).bind('scroll', function() {
			    windowTop = $(window).scrollTop();
			    if((windowTop >= opts.start) && (windowTop <= opts.stop)) {
			        newCoord = windowTop * opts.coeff;
			        parallaxItem.css({
			            "background-position": "0 "+ newCoord + "px"
			        });
			    }
			});
		});
	};

	if ( $(window).width() >= 640) {
		$('.rdio-parallax').parallax({ "coeff": -0.15 });
	} else {
		return false;
	}

});