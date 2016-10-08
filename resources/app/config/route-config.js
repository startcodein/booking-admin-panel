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
    .state('kooy', {
      url: '/kooy',
      templateUrl: 'public/kooy.html',
      controller: 'kooyController'
    });
    $urlRouterProvider.otherwise('/dashboard');
}
