'use strict';

angular.module('mny')
    .directive('fodal', function () {
	return {
	    templateUrl: 'components/fodal.html',
	    restrict: 'A',
	    scope:{
		fodal:'=',
		fodalClose:'&'
	    },
	    transclude:true,
	    controller: function($scope, $state){
		console.log('fodal booted');
	    	$scope.stopBubble = function(e){
		    e.stopPropagation();
		};
	    }

	};
    });
