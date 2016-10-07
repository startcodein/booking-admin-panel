angular
  .module('app')
  .config(config);

function config($routeProvider) {
  $routeProvider
    .when('/avengers', {
      templateUrl: 'avengers.html'
    })
    // .otherwise
}
