angular
    .module('app')
    .controller('scheduleController', scheduleController);

function scheduleController(bookingService, $state) {
  var $ctrl = this;

  $ctrl.calendarView = 'month';
  $ctrl.viewDate = new Date();
  $ctrl.events =  [{}];
  $ctrl.scheduleDates = [{}];

    $ctrl.eventClicked = function(event){
        console.clear();
        console.log("koooy");
        console.log(event);
        // schedule
        if (event.events.length && event.events[0].is_holiday == 0) {
            // var theDate = moment(event.events[0].day).format("YYYY-MM-DD");
            var theDate = moment(event.date).format("YYYY-MM-DD");
            console.log("hello mate");
            $state.go('scheduleday', {scheduleday:theDate});
        } else {
            console.log("The day is holiday or NO event in this day");
        }
    }

  activate();
  function activate() {
      return getBooking().then(function() {
          for (var i = 0; i < $ctrl.scheduleDates.length; i++) {
              // alert(result.d[i].employeename);
            //   console.log($ctrl.scheduleDates[i].day);
              $ctrl.scheduleDates[i].startsAt = new Date($ctrl.scheduleDates[i].day);
          }

          console.log($ctrl.scheduleDates);
          // document.write(JSON.stringify(json));
          $ctrl.events = $ctrl.scheduleDates;
      });
      function getBooking() {
          return bookingService.getBooking()
              .then(function(data) {
                  $ctrl.scheduleDates = data['current_schedules'];
                  // return $ctrl.scheduleDates;
                //   console.log("hello mate");
                //   console.log($ctrl.scheduleDates);
                  return $ctrl.scheduleDates;
              });
      }
  }

// http://schedule.startcode.in/admin/current-schedule/1

}
