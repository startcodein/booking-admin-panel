(function() {
  'use strict';

  angular
      .module('app')
      .factory('availabilityService', availabilityService);

  // availabilityService.$inject = ['$http', 'logger'];
  availabilityService.$inject = ['$http'];

  // function availabilityService($http, logger) {
  function availabilityService($http) {
      return {
          getAvailability: getAvailability
      };

      function getAvailability() {
          // return $http.get('http://rest-service.guides.spring.io/greeting')
          return $http.get('http://booking.startcode.in/admin/daytime/1')
              .then(getAvailabilityComplete)
              .catch(getAvailabilityFailed);

          function getAvailabilityComplete(response) {
              // return response.data.results;
              return response;
          }

          function getAvailabilityFailed(error) {
              // logger.error('XHR Failed for getAvailability.' + error.data);
          }
      }
  }

})();
