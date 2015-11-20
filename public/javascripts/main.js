angular.module('thoughtApp', ['ngRoute'])

angular.module('sandwichApp')
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/', {
	            templateUrl : '/html/login.html',
	            controller  : 'mainController'
	            })


	            	}])

angular.module('sandwichApp')
	.controller('mainController', ['$scope', '$rootScope', '$http', '$location', 'authService', function($scope, $rootScope, $http, $location, authService) {


	}])