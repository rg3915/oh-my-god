if(!window.Global)
{
	window.Global = {};
}

Global.dependences = ['api', 'ngRoute'];

angular.module('app', Global.dependences)
	.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
			$routeProvider
			    .when('/vemaqui', {
			      templateUrl: 'view',
			      controller: 'retrive'
			    })
			    .otherwise({ redirectTo: '/' });

			$locationProvider
				.html5Mode(true);
		}]); 