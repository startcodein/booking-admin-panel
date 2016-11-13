(function() {
  'use strict';

  angular
      .module('app')
      .factory('bookingService', bookingService);

  // bookingService.$inject = ['$http', 'logger'];
  bookingService.$inject = ['$http'];

  // function bookingService($http, logger) {
  function bookingService($http) {
      return {
          getBooking: getBooking,
          updateBooking: updateBooking
      };

      function getBooking() {
          return $http.get('http://booking.startcode.in/admin/daytime/1')
              .then(getBookingComplete)
              .catch(getBookingFailed);

          function getBookingComplete(response) {
              return response.data;
              // return response;
          }

          function getBookingFailed(error) {
              // logger.error('XHR Failed for getBooking.' + error.data);
          }
      }

      function updateBooking(theData) {
          return $http.post('http://booking.startcode.in/admin/daytime/1', theData)
              .then(updateBookingComplete)
              .catch(updateBookingFailed);

          function updateBookingComplete(response) {
              // return response.data;
              // return response;
              console.log(response);
          }

          function updateBookingFailed(error) {
              // logger.error('XHR Failed for updateBooking.' + error.data);
          }
      }
  }

})();
