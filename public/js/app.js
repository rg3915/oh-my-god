if(!window.Global)
{
	window.Global = {};
}

Global.dependences = ['api', 'ngRoute', 'truncate'];

angular.module('app', Global.dependences);