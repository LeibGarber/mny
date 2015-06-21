'use strict';
 
angular.module('mny', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise("/");

	$stateProvider
	    .state('login', {
		url: "/",
		templateUrl: "views/login.html",
		controller: 'LoginCtrl as login'
	    })
	    .state('home', {
		url: "/home",
		templateUrl: "views/home.html",
		controller: 'HomeCtrl as main'
//		resolve:{usr:function(auth){return usr.confirmLogin();}}
	    });
    });
