angular.module('app').controller('retrive', ['$scope', 'request', function ($scope, request) {
		var req = request
		, 	scp = $scope;

		scp.ctrl = {
			msg: '',
			users: [],
			delete: function(user){

				var url = '/api/user/' + user._id + '/delete';
				req.delete(url, user)
					.success(function(data){
							scp.user.msg = 'User ' + user.email + ' register success';

							// Atualizando a lista dos registros que ainda existem no banco de dados
							req.retrive('/api/user/retrive')
								.success(function(data){
									scp.user.users = data;
							}).error(function(err){
									console.log(err);
							});
					}).error(function(err){
							scp.user.msg = 'User register error' + err;
					});
			}
		}

		req.retrive('/api/user/retrive')
			.success(function(data){
				scp.ctrl.users = data
			}).error(function(err){
				console.log(err);
			});
}]);