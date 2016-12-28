angular
    .module('app')
    .controller('bookingController', bookingController);

function bookingController(bookingService, $state) {
  var $ctrl = this;

  $ctrl.calendarView = 'month';
  $ctrl.viewDate = new Date();
  $ctrl.events =  [{}];
  $ctrl.bookingDates = [{}];

  $ctrl.eventClicked = function(event) {
      console.clear();
      console.log(event);
      console.log(event.events[0].day);
      var theDate = moment(event.events[0].day).format("YYYY-MM-DD");
      $state.go('booked', {bookedDay:theDate});
  };

  this.events = [{}];
  // console.log($ctrl.bookingDates);
  // console.log($ctrl.events);


  activate();
  function activate() {
      return getBooking().then(function() {
          // logger.info('Activated Avengers View');
        //   console.log('Activated Avengers View');

          // $ctrl.bookingDates = JSON.parse(JSON.stringify($ctrl.bookingDates).split('"day":').join('"startsAt":'));


          for (var i = 0; i < $ctrl.bookingDates.length; i++) {
              // alert(result.d[i].employeename);
            //   console.log($ctrl.bookingDates[i].day);
              $ctrl.bookingDates[i].startsAt = new Date($ctrl.bookingDates[i].day);
          }

        //   console.log($ctrl.bookingDates);
          // document.write(JSON.stringify(json));
          $ctrl.events = $ctrl.bookingDates;
      });
      function getBooking() {
          return bookingService.getBooking()
              .then(function(data) {
                  $ctrl.bookingDates = data['current_schedules'];
                  // return $ctrl.bookingDates;
                  return $ctrl.bookingDates;
              });
      }
  }

// http://booking.startcode.in/admin/current-schedule/1

}
