'use strict';

angular.module('mny')
    .controller('HomeCtrl', function($scope, $http, $state, $stateParams, data){

	$scope.landmarks  = {};
	
	$scope.setLandmark = function(key, val){
	    $scope.landmarks[key] = val;
	};


	$scope.spends = [];
	data.read().then(function(pon){
	    $scope.spends = pon;
	});
	$scope.ctgs = [
	    {disp: 'Currency' , tag: 'currency'},
	    {disp: 'Category', tag: 'category'}		
	];

	$scope.$watch('filterBy', function(n, o){
	    var allVals = $scope.spends.map(function(spend){
		return spend[n];
	    });
	    
	    //fill in unique values into an array
	    //shit array into scope.vals

	    var uniqueVals = [];
	    
	    for(var i=0; i<allVals.length; ++i){
		if(uniqueVals.indexOf(allVals[i]) === -1 ){
		    //new unique item
		    uniqueVals.push(allVals[i]);
		}
	    }
	    $scope.vals = uniqueVals;
	});

	$scope.setActive = function(spend){
	    if(spend.activeClass === 'active-spend'){
		spend.activeClass = '';
	    }else{
		spend.activeClass = 'active-spend';
	    }
	    // figure out how to make it so that only one row at a time can be highlited..
	    //make the toggle clicking business operate on individual cells within the table
	    
	};//til here

	$scope.byValue = function(cat, val){
	    return function(item){
		return (item[cat]=== val);
	    }
	}
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

	    
	    return monthNames[monthIndex]+' '+day+' '+year;
	};
	
    });


