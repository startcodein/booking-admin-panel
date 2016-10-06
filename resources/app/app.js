angular.module('myApp', ['ui.router','ui.bootstrap', 'mwl.calendar', 'angularMoment'])
.config(function($stateProvider, $urlRouterProvider) {
	// For any unmatched url, redirect to /state1

	// Now set up the states
	// $stateProvider
	// 	.state('/', {
	// 		url: "/",
	// 		templateUrl: "dashboard.html",
  //           controller: 'homeCtrl',
	// 	})
	// 	.state('time', {
	// 		url: "/time",
	// 		templateUrl: "time.html",
  //           controller: 'timeCtrl',
	// 	})
	// 	.state('register', {
	// 		url: "/register",
	// 		templateUrl: "register.html",
	// 		controller: 'registerCtrl',
	// 	})
	// 	.state('booked', {
	// 		url: "/booked",
	// 		templateUrl: "booked.html",
	// 		controller: 'registerCtrl',
	// 	})
	// 	;
	// $urlRouterProvider.otherwise("/");


  //   .state('state1.list', {
  //     url: "/list",
  //     templateUrl: "partials/state1.list.html",
  //     controller: function($scope) {
  //       $scope.items = ["A", "List", "Of", "Items"];
  //     }
  //   })
  //   .state('state2', {
  //     url: "/state2",
  //     templateUrl: "partials/state2.html"
  //   })
  //   .state('state2.list', {
  //     url: "/list",
  //     templateUrl: "partials/state2.list.html",
  //     controller: function($scope) {
  //       $scope.things = ["A", "Set", "Of", "Things"];
  //     }
  //   });
})
.controller('mainCtrl', ['$scope', function($scope){
	console.log("hello mate");
}])
.service('bookme', function(){
	var theUser = {};
	return{
		addDate: function (argument) {
			theUser.appointmentDate = argument;
			return theUser;
		},
		addRegistration: function (argument) {
			theUser.name = argument.name;
			theUser.mobile = argument.mobile;
			theUser.email = argument.email;
			theUser.city = argument.city;
			theUser.dob = argument.dob;
			console.log(argument);
			return theUser;
		},
		getRegistration: function () {
			return theUser;
		}
	};
});
