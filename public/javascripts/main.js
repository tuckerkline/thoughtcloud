angular.module('thoughtApp', ['ngRoute'])

angular.module('thoughtApp')
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/', {
	            templateUrl : '/html/home.html',
	            controller  : 'mainController'
	            })


	            	}])

angular.module('thoughtApp')
	.controller('mainController', ['$scope', '$rootScope', '$http', '$location', function($scope, $rootScope, $http, $location) {

		var lat, lng
		var locURL = {url : ''}

    $scope.showPosition= function(loc){
    	lat = loc.coords.latitude.toString()
    	lng = loc.coords.longitude.toString()
    	locURL.url = "https://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+lng+"&key=AIzaSyCUwxKvlHSXxTblHybE0O0KtodRFFm6UGg"
    	$http.post('/getCity', locURL)
    		.then(function(returnData){
    			console.log(returnData)
    		})
    }

		$scope.getLocation = function() {
			console.log("page loaded")
	    if (navigator.geolocation) {
	        navigator.geolocation.getCurrentPosition($scope.showPosition)
	    } else { 
	        console.log("location services not enabled")
	    }
	  }

	  window.onLoad = $scope.getLocation()
		
}])