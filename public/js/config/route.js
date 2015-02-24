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
				.when('/:id/edit', {
					templateUrl: 'partials/edit',
					controller: 'EditCtrl'
				})
				.otherwise({ redirectTo: '/list' })
		}]);
}());