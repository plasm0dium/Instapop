angular.module('instaPhoto')

.controller('GalleryCtrl', ['$scope','instagram', 'Lightbox', function($scope, instagram, Lightbox){
	//Holding images
	$scope.images = [];
	var imgArray = [];
	instagram.fetchPopular(function(data){
		console.log(data);
		$scope.images = data;
		angular.forEach(data, function(value){
			imgArray.push(value.images.standard_resolution);
		});
		$scope.openLightboxModal = function (index) {
    		Lightbox.openModal(imgArray, index);
  		};
	})
}])

