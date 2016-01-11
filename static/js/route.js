'use strict';

angular
	.module('sumologic')
	.config(config);

	config.$inject = ['$routeProvider'];

	function config($routeProvider)
	{
		$routeProvider
			.when('/', {
				templateUrl : 'static/templates/home.html',
				controller  : 'homeController'
			})
			.otherwise({
				redirectTo :'/'
			});
	}