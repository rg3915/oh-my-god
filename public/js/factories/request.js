angular.module('api').factory('request', ['$http', function($http){

	var crud = {
		
		create: function(_url, _data){
			console.log('front > request.js');
			console.log(_data);
			return $http({
				method: 'POST',
				url: _url,
				data: _data
			});
		},

		retrive: function(_url, _data){
			return $http({
				method: 'GET',
				url: _url
			});
		},

		update: function(_url, _data){
			return $http({
				method: 'PUT',
				url: _url,
				data: _data
			})
		},

		delete: function(_url, _data){

			return $http({
				method: 'DELETE',
				url: _url,
				data: _data
			});
		}
	};

	return crud;
	
}]);