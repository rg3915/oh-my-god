angular.module('app').controller('retriveById', ['$scope', 'request', function ($scope, request) {
		var req = request
		, 	scp = $scope;

		scp.ctrl = {
			msg: '',
			users: {},
		}

		var url = '/api/user/54e63c5c65d8a5e4113674b7/retriveById';
		req.retrive(url)
			.success(function(data){
				scp.ctrl.users = data
			}).error(function(err){
				console.log(err);
			});
}]);