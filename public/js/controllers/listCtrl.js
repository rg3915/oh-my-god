(function(){
	angular.module('app')
		.controller('ListCtrl', ['$scope', 'request', '$location', '$routeParams', function ($scope, request, $location, $routeParams) {

			var req = request
			, 	scp = $scope
			, 	page = $routeParams.p
			, 	updateList = function(){
					req.retrive('/api/task/' + page + '/retrive')
						.success(function(d){
							console.log(d);
							if(d.length <= 0){
								$location.path('/#/0/list');
							}else{
								scp.ctrl.tasks = d;
								scp.ctrl.message.status = true;
								scp.ctrl.message.text = 'Amount from task found: ' + scp.ctrl.tasks.length;
							}

						}).error(function(e){
							scp.ctrl.message.status = false;
							scp.ctrl.message.text = 'Error: ' + e;
						});
			}

			scp.ctrl = {
				message: {},
				showMessage: true,
				filterTask: '',
				tasks: [],
				selectedTask: {},
				onSelectedTask: false,

				selectTask: function(task){
					scp.ctrl.selectedTask = task;
					scp.ctrl.message.status = true;
					scp.ctrl.message.text = 'Task ' + scp.ctrl.selectedTask._id + ' selected';
					scp.ctrl.onSelectedTask = true;
				},

				updateStatus: function(){

					var url = '/api/task/' + scp.ctrl.selectedTask._id + '/update';

					var data = {
						status: true
					}

					req.update(url, data)
						.success(function(d){
							console.log(d);
							updateList();
						}).error(function(e){
							console.log(e);
						})
				},

				create: function(task){

					var url = '/api/task/create';

					req.create(url, task)
						.success(function(d){
							scp.ctrl.message.status = true;
							scp.ctrl.message.text = 'Your task was created with success';
							task.text = '';
							updateList();

						}).error(function(e){

							scp.ctrl.message.status = false;
							scp.ctrl.message.text = 'Error when created your task: ' + e;
						});
				},

				delete: function(){

					var url = '/api/task/' + scp.ctrl.selectedTask._id + '/delete';

					req.delete(url)
						.success(function(d){
							scp.ctrl.message.status = true;
							scp.ctrl.message.text = 'Task deleted with success';
							scp.ctrl.onSelectedTask = false;
							scp.ctrl.selectedTask = {};
							updateList();
						}).error(function(e){
							scp.ctrl.message.status = false;
							scp.ctrl.message.text = 'Error when deleted your task : ' + e;
						});
				}
			}

			updateList();

		}])
}());