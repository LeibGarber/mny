'use strict';

angular.module('mny')
    .directive('navBar', function () {
	return {
	    templateUrl: 'components/navbar.html',
	    restrict: 'A',
	    scope:true,
	    transclude:false,
	    controllerAs:'nvb',
	    controller: function($scope, $state){
		
		this.defroute = '/';

		this.routes = [{state:'home', disp:'Home'}];
	    }
	};
    });
