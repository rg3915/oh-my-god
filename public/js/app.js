if(!window.Global)
{
	window.Global = {};
}

Global.dependences = ['api', 'ngRoute'];

angular.module('app', Global.dependences); 