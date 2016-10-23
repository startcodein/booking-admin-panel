angular
    .module('app')
    .controller('bookingController', bookingController);

function bookingController() {
  var $ctrl = this;

  $ctrl.calendarView = 'month';
  $ctrl.viewDate = new Date();


}
