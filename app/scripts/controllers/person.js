'use strict';

/**
 * @ngdoc function
 * @name tpJpaAngularApp.controller:PersonsCtrl
 * @description
 * # PersonsCtrl
 * Controller of the tpJpaAngularApp
 */
angular.module('tpJpaAngularApp')
  	.controller('PersonsCtrl', function ($scope, $http) {

	    // GET
		$http.get('http://localhost:8080/rest/persons').
	  	success(function(data, status, headers, config) {
	  	 	// this callback will be called asynchronously
	   		// when the response is available
	   		console.log("success");
		    $scope.response = "Status code : " + status + "\nData : " + data;
		    $scope.persons = data;
	 	}).
	 	error(function(data, status, headers, config) {
	 		// called asynchronously if an error occurs
    		// or server returns response with an error status.
	 		$scope.response = "Error : status code : " + status;
	    	console.log("error");
	  	});
 	 })

	.controller('addPersonCtrl', function ($scope, $http, $window) {
    	$scope.sendPost = function() {
        	$http.post("http://localhost:8080/rest/persons/add", $scope.myForm)
        	.success(function(data, status) {
            	$window.location.href = '#/persons';
       		 })
    	};
    });
