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
      controller: 'bookingController'
    })
    .state('settings', {
      url: '/settings',
      templateUrl: 'public/settings.html',
      controller: 'settingsController'
    })
    $urlRouterProvider.otherwise('/availability');
}
