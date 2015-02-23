(function(){
	angular.module('app')
		.controller('TaskCtrl', ['$scope', 'request', '$routeParams', '$location', function ($scope, request, $routeParams, $location) {
			var scp = $scope
			,	req = request
			, 	id = $routeParams.id
			, 	updateTask = function(){

				var url = '/api/task/' + id + '/retriveById';

				req.retrive(url)
					.success(function(d){
						scp.ctrl.task = d;
					}).error(function(e){

					});
			}

			scp.ctrl = {
				task: {},

				delete: function(){

					var url = '/api/task/' + scp.ctrl.task._id + '/delete';

					req.delete(url)
						.success(function(d){
							$location.path('/#/list')
						}).error(function(e){
							
						});
				}
			};

			updateTask();
			console.log(id);
		}])
}());