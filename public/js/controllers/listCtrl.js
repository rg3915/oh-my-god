(function(){
	angular.module('app')
		.controller('ListCtrl', ['$scope', 'request', '$location', '$routeParams', function ($scope, request, $location, $routeParams) {

			var req = request
			, 	scp = $scope
			, 	page = $routeParams.p
			, 	updateList = function(){
					req.retrive('/api/task/' + page + '/retrive')
						.success(function(d){
							
							// Recuperando os dados da API
							scp.ctrl.tasks = d;

						}).error(function(e){
							scp.ctrl.message.status = false;
							scp.ctrl.message.text = 'Error: ' + e;
						});
			}

			scp.ctrl = {
				message: {},
				showMessage: false,
				filterTask: '',
				tasks: [],
				selectedTask: {},
				onSelectedTask: false,
				limitTask: 10,
				currentPage: page,
				nextPage: parseInt(page)  +1,
				prevPage: parseInt(page) -1,

				selectTask: function(task){
					scp.ctrl.selectedTask = task;
					scp.ctrl.onSelectedTask = true;
				},

				updateStatus: function(){

					var url = '/api/task/' + scp.ctrl.selectedTask._id + '/update';

					var data = {
						status: true
					}

					req.update(url, data)
						.success(function(d){
							updateList();
						}).error(function(e){
							console.log('Error: ' + e);
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