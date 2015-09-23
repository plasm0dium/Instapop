angular.module('instaPhoto')

.factory('instagram', function($resource){
	return {
		fetchPopular: function(callback){
			var api = $resource('https://api.instagram.com/v1/media/popular?client_id=:client_id&callback=JSON_CALLBACK', {
				client_id: '6cf523eaf3e142a6bd7cb892b0191f4c'
			},{
				fetch: {method:'JSONP'}
			});

			api.fetch(function(response){
				callback(response.data);
			});
		}
	}
})