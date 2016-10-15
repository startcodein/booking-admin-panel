(function() {
    'use strict';

angular
    .module('app')
    .controller('availabilityModalController', availabilityModalController);

function availabilityModalController($uibModalInstance, schedule) {
  var dayStart = new Date();
  dayStart.setHours(0);
  dayStart.setMinutes(0),
  dayStart.setSeconds(0);

  var dayEnd = new Date();
  dayEnd.setHours(23);
  dayEnd.setMinutes(59),
  dayEnd.setSeconds(0);

  this.theSchedule = {
    scheduleDay: schedule,
    startsAt: dayStart,
    endsAt: dayEnd
  };

  this.ok = function () {
    $uibModalInstance.close(this.theSchedule);
  };

  this.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
};

})();
