(function() {
  'use strict';

  angular
      .module('app')
      .factory('scheduleService', scheduleService);

  // scheduleService.$inject = ['$http', 'logger'];
  scheduleService.$inject = ['$http'];

  // function scheduleService($http, logger) {
  function scheduleService($http) {
      return {
        //   getSchedule: getSchedule,
          updateSchedule: updateSchedule
      };
      /*
      function getSchedule() {
          return $http.get('http://booking.startcode.in/admin/daytime/1')
              .then(getScheduleComplete)
              .catch(getScheduleFailed);

          function getScheduleComplete(response) {
              return response.data;
              // return response;
          }

          function getScheduleFailed(error) {
              // logger.error('XHR Failed for getSchedule.' + error.data);
          }
      }
      */

      function updateSchedule(theData) {
          return $http.post('http://booking.startcode.in/appointment', theData)
              .then(updateScheduleComplete)
              .catch(updateScheduleFailed);

          function updateScheduleComplete(response) {
              // return response.data;
            //   console.log(response);
              return response;
          }

          function updateScheduleFailed(error) {
              console.log(error);
              return error;
              // logger.error('XHR Failed for updateSchedule.' + error.data);
          }
      }
  }

})();
