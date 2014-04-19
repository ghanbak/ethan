'use strict';

// Directives

var ethanDirectives = angular.module('ethanDirectives', []);

ethanDirectives.directive("navigation", function() {
    return {
        restrict: "E",
        templateUrl: "partials/menu.html"
    }
});

ethanDirectives.directive("splash", function() {
	return {
		restrict: "E",
		templateUrl: "partials/splash.html"
	}
});

ethanDirectives.directive("rdio", function() {
	return {
		restrict: "E",
		templateUrl: "partials/rdio.html"
	}
});

ethanDirectives.directive("footer", function() {
	return {
		restrict: "E",
		templateUrl: "partials/footer.html"
	}
})