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
          getAvailability: getAvailability,
          updateAvailability: updateAvailability
      };

      function getAvailability() {
          return $http.get('http://booking.startcode.in/admin/daytime/1')
              .then(getAvailabilityComplete)
              .catch(getAvailabilityFailed);

          function getAvailabilityComplete(response) {
              return response.data;
              // return response;
          }

          function getAvailabilityFailed(error) {
              // logger.error('XHR Failed for getAvailability.' + error.data);
          }
      }

      function updateAvailability(theData) {
          return $http.post('http://booking.startcode.in/admin/daytime/1', theData)
              .then(updateAvailabilityComplete)
              .catch(updateAvailabilityFailed);

          function updateAvailabilityComplete(response) {
              // return response.data;
              // return response;
              console.log(response);
          }

          function updateAvailabilityFailed(error) {
              // logger.error('XHR Failed for updateAvailability.' + error.data);
          }
      }
  }

})();
