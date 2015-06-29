'use strict';

angular.module('mny')
    .directive('spendDetail', function () {
	return {
	    templateUrl: 'components/spendDetail.html',
	    restrict: 'A',
	    scope:{
		spendDetail:'=',
	    },
	    transclude:false,
	    controller: function($scope, $state){
		console.log('spendDetail booted');
	//click function to grab fixer.io exchange data
	    }

	};
    });
