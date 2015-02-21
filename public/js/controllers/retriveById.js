(function(){
	angular.module('app')
		.controller('retriveById', ['$scope', 'request', '$routeParams', function ($scope, request, $routeParams) {
			var req = request
			, 	scp = $scope;

			scp.ctrl = {
				msg: '',
				users: {},
			}

			var url = '/api/user/' + $routeParams.id + '/retriveById';
			req.retrive(url)
				.success(function(data){
					scp.ctrl.users = data
				}).error(function(err){
					console.log(err);
				});
		}]);
}());