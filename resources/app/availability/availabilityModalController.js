(function() {
    'use strict';

angular
    .module('app')
    .controller('availabilityModalController', availabilityModalController);

function availabilityModalController($uibModalInstance, scheduleDay, scheduleTime) {

  this.theSchedule = {
    scheduleOn: scheduleDay
  };

  if (typeof scheduleTime === "undefined") {
    var dayStart = new Date();
    dayStart.setHours(0);
    dayStart.setMinutes(0),
    dayStart.setSeconds(0);

    var dayEnd = new Date();
    dayEnd.setHours(23);
    dayEnd.setMinutes(59),
    dayEnd.setSeconds(0);
    this.theSchedule.startsAt = dayStart;
    this.theSchedule.endsAt = dayEnd;

  } else {
    var dayStart = new Date();
    dayStart.setHours(scheduleTime.start.split(':')[0]);
    dayStart.setMinutes(scheduleTime.start.split(':')[1]),
    dayStart.setSeconds(scheduleTime.start.split(':')[2]);

    var dayEnd = new Date();
    dayEnd.setHours(scheduleTime.end.split(':')[0]);
    dayEnd.setMinutes(scheduleTime.end.split(':')[1]),
    dayEnd.setSeconds(scheduleTime.end.split(':')[2]);

    this.theSchedule.startsAt = dayStart;
    this.theSchedule.endsAt = dayEnd;
    this.theSchedule.index = scheduleTime.index;
  }

  this.ok = function () {
    $uibModalInstance.close(this.theSchedule);
  };

  this.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
};

})();
