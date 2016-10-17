(function() {
  'use strict';

  angular
      .module('app')
      .factory('availabilityService', availabilityService);

  availabilityService.$inject = ['$http', 'logger'];

  function availabilityService($http, logger) {
      return {
          getAvailability: getAvailability
      };

      function getAvailability() {
          return $http.get('http://rest-service.guides.spring.io/greeting')
              .then(getAvailabilityComplete)
              .catch(getAvailabilityFailed);

          function getAvailabilityComplete(response) {
              return response.data.results;
          }

          function getAvailabilityFailed(error) {
              logger.error('XHR Failed for getAvailability.' + error.data);
          }
      }
  }

})();
