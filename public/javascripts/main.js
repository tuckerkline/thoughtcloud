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
    	console.log("Lat: ", loc.coords.latitude)
    	lat = loc.coords.latitude.toString()
    	// console.log("Long: ", loc.coords.longitude)
    	lng = loc.coords.longitude.toString()
    	locURL.url = "https://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+lng+"&key=AIzaSyCUwxKvlHSXxTblHybE0O0KtodRFFm6UGg"
    	console.log(locURL)
    	$http.post('/getCity', locURL)
    		.then(function(returnData){
    			console.log(returnData)
    		})
    }

		$scope.getLocation = function() {
	    if (navigator.geolocation) {
	        navigator.geolocation.getCurrentPosition($scope.showPosition)
	    } else { 
	        x.innerHTML = "Geolocation is not supported by this browser.";
	    }
	  }
}])