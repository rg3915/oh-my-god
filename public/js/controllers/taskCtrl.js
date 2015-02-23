(function(){
	angular.module('app')
		.controller('TaskCtrl', ['$scope', 'request', '$routeParams', function ($scope, request, $routeParams) {
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
				task: {}
			};

			updateTask();
			console.log(id);
		}])
}());