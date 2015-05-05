'use strict';

/**
 * @ngdoc function
 * @name tpJpaAngularApp.controller:HomesCtrl
 * @description
 * # HomesCtrl
 * Controller of the tpJpaAngularApp
 */
angular.module('tpJpaAngularApp')
  	.controller('HomesCtrl', function ($scope, $http) {

		    // GET
			$http.get('http://localhost:8080/rest/homes').
		  	success(function(data, status, headers, config) {
		  	 	// this callback will be called asynchronously
		   		// when the response is available
		   		console.log("success");
			    $scope.response = "Status code : " + status + "\nData : " + data;
			    $scope.homes = data;
		 	}).
		 	error(function(data, status, headers, config) {
		 		// called asynchronously if an error occurs
	    		// or server returns response with an error status.
		 		$scope.response = "Error : status code : " + status;
		    	console.log("error");
		  	});
  });