angular.module('app')
	.config(['$routeProvider', function($routeProvider){
		$routeProvider.
		    when('/index', {
		      templateUrl: 'user/create',
		      controller: 'retrive'
		    });
	}]);