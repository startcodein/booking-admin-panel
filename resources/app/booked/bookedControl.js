angular
    .module('app')
    .controller('bookedController', bookedController);

function bookedController(bookedService, $stateParams, day) {
  console.log("booked day controller");
  console.log(day);
  console.log();
  this.selectedDay = moment($stateParams.bookedDay).format("DD-MMMM-YYYY");
  this.dayBookings = day;
  // getDay();
  // function getDay() {
  //     return getbooked().then(function () {
  //         console.log('dasdasdasds');
  //     });
  //     function getbooked() {
  //         return bookedService.getbooked()
  //             .then(function(data) {
  //               //   $ctrl.bookedDates = data['current_schedules'];
  //                 // return $ctrl.bookingDates;
  //                 return $ctrl.bookedDates;
  //             });
  //     }
  // }
}
