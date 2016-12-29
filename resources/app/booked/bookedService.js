(function() {
  'use strict';

  angular
      .module('app')
      .factory('bookedService', bookedService);

  // bookedService.$inject = ['$http', 'logger'];
  bookedService.$inject = ['$http'];

  // function bookedService($http, logger) {
  function bookedService($http) {
      return {
          getbooked: getbooked,
        //   updatebooked: updatebooked
      };

      function getbooked(theDay) {
          console.log(theDay);
          return $http.get('http://booking.startcode.in/admin/appointments/1/'+theDay)
              .then(getbookedComplete)
              .catch(getbookedFailed);

          function getbookedComplete(response) {
              return response.data;
              // return response;
          }

          function getbookedFailed(error) {
              // logger.error('XHR Failed for getbooked.' + error.data);
          }
      }

    //   function updatebooked(theData) {
    //       return $http.post('http://booked.startcode.in/admin/daytime/1', theData)
    //           .then(updatebookedComplete)
    //           .catch(updatebookedFailed);
      //
    //       function updatebookedComplete(response) {
    //           // return response.data;
    //           // return response;
    //           console.log(response);
    //       }
      //
    //       function updatebookedFailed(error) {
    //           // logger.error('XHR Failed for updatebooked.' + error.data);
    //       }
    //   }
  }

})();
