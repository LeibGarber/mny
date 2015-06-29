'use strict';

angular.module('mny')
  .service('data', function($http, $q){

      var that = this;

      var spends = [{
	  spend_hash:'spend0',
	  value:200,
	  currency:'NIS',
	  date: new Date,
	  category:'food'
      },{
	  spend_hash:'spend1',
	  value:250,
	  currency:'NIS',
	  date: new Date,
	  category: 'misc'
      },{
	  spend_hash:'spend2',
	  value:20,
	  currency:'USD',
	  date: new Date,
	  category:'transit'
      },{
	  spend_hash:'spend3',
	  value:22,
	  currency:'USD',
	  date: new Date,
	  category:'transit'
      },{
	  spend_hash:'spend4',
	  value:40,
	  currency:'USD',
	  date: new Date,
	  category:'transit'
     },{
	  spend_hash:'spend5',
	  value:15,
	  currency:'USD',
	  date: new Date,
	  category:'food'
      }

	];
     

      this.read = function(){
	  var def = $q.defer();
	  

	  setTimeout(function(){
	      def.resolve(spends);
	  }, 400);

	  // check fb/google login state

	  return def.promise;
      };


  });
