(function(){
	angular.module('app')
		.config(['$routeProvider', function($routeProvider){
			$routeProvider
				.when('/list', {
					templateUrl: 'partials/list',
					controller: 'ListCtrl'
				})
				.when('/:id/task', {
					templateUrl: 'partials/task',
					controller: 'TaskCtrl'
				})
				.otherwise({ redirectTo: '/list' })
		}]);
}());