'use strict';

angular.module('mny')
  .service('auth', function($http, $q){

      var that = this;

      this.confirmLogin = function(){
	  var def = $q.defer();

	  // check fb/google login state

	  return def.promise;
      };


  });
