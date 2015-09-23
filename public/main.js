var app = angular.module('instaPhoto', ['ngRoute', 'ngResource', 'bootstrapLightbox']);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/gallery', {
			templateUrl: 'views/gallery.view.html',
			controller: 'GalleryCtrl'
		})
		.otherwise({redirectTo: '/gallery'});
}]);