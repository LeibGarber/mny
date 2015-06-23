'use strict';

angular.module('mny')
    .controller('HomeCtrl', function($scope, $http, $state, $stateParams, data){

	data.read().then(function(pon){
	    $scope.spends = pon;
	});

	$scope.formatDate = function(date){
	    var monthNames = [
		"January", "February", "March",
		"April", "May", "June", "July",
		"August", "September", "October",
		"November", "December"
	    ];

	    var day = date.getDate();
	    var monthIndex = date.getMonth();
	    var year = date.getFullYear();

	    console.log(day, monthNames[monthIndex], year);

	    return monthNames[monthIndex]+' '+day+' '+year;
	};
	
    });


