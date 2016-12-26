angular
  .module('app')
  .config(config);

function config($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('dashboard', {
      url: '/dashboard',
      templateUrl: 'public/dashboard.html',
      controller: 'dashboardController'
    })
    .state('availability', {
      url: '/availability',
      templateUrl: 'public/availability.html',
      controller: 'availabilityController',
      controllerAs: "availtrl"
    })
    .state('booking', {
      url: '/booking',
      templateUrl: 'public/booking.html',
      controller: 'bookingController',
      controllerAs: 'bookctrl'
    })
    .state('booked', {
      url: '/booking/{bookedDay}',
      templateUrl: 'public/day.html',
      controller: 'bookedController',
      controllerAs: 'bookedctrl',
      resolve: {
          day: function(bookedService, $stateParams) {
              return bookedService.getbooked($stateParams.bookedDay);
          }
      }
    })
    .state('settings', {
      url: '/settings',
      templateUrl: 'public/settings.html',
      controller: 'settingsController'
    })
    $urlRouterProvider.otherwise('/booking');
}
