'use strict';

/**
 * @ngdoc function
 * @name tpJpaAngularApp.controller:DevicesCtrl
 * @description
 * # DevicesCtrl
 * Controller of the tpJpaAngularApp
 */
angular.module('tpJpaAngularApp')
  	.controller('DevicesCtrl', function ($scope, $http) {

		    // GET
			$http.get('http://localhost:8080/rest/devices').
		  	success(function(data, status, headers, config) {
		  	 	// this callback will be called asynchronously
		   		// when the response is available
		   		console.log("success");
			    $scope.response = "Status code : " + status + "\nData : " + data;
			    console.log(data);
			    var d = [] ;
			    for(var i = 0; i < data.length; i++){
			    	console.log("coucou");
		    		d.push({"id":data[i].id, "consumption_avg":data[i].consumption_avg, "height":data[i].height, "width":data[i].width, "lenght":data[i].lenght, "programmable":data[i].programmable, "energyClass":data[i].energyClass  });
			    }
			    $scope.devices = d;
			    console.log(d);
		 	}).
		 	error(function(data, status, headers, config) {
		 		// called asynchronously if an error occurs
	    		// or server returns response with an error status.
		 		$scope.response = "Error : status code : " + status;
		    	console.log("error");
		  	});
  });