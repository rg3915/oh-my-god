(function(){
	angular.module('app')
		.controller('EditCtrl', ['$scope', 'request', '$routeParams', '$location', function ($scope, request, $routeParams, $location) {
			var scp = $scope
			,	req = request
			, 	id = $routeParams.id
			, 	updateTask = function(){

				var url = '/api/task/' + id + '/retriveById';

				req.retrive(url)
					.success(function(d){
						scp.ctrl.task = d;
						console.log(scp.ctrl.task);
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
				},

				update: function(task){
					var url = '/api/task/' + id + '/update';

					var data = {
						status: task.status,
						date: task.date,
						text: task.text
					}

					req.update(url, data)
						.success(function(d){
							console.log(d);
							$location.path('/#/list')
						}).error(function(e){
							console.log(e);
						})
				}
			};

			updateTask();

		}]);
}());