angular.module('api').factory('request', ['$http', function($http){

	var crud = {
		
		create: function(_url, _data){
			$http({
				method: 'POST',
				url: _url,
				data: _data
			});
		},

		retrive: function(_url, _data){
			$http({
				method: 'GET',
				url: _url
			});
		},

		update: function(_url, _data){
			$http({
				method: 'PUT',
				url: _url,
				data: _data
			})
		},

		delete: function(_url, _data){

			var query = {_id = _data._id};

			$http({
				method: 'DELETE',
				url: _url,
				data: query
			});
		}
	};

	return crud;
	
}]);