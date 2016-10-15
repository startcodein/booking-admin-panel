(function() {
    'use strict';

angular
    .module('app')
    .controller('availabilityModalController', availabilityModalController);

function availabilityModalController($uibModalInstance, schedule) {
  this.theSchedule = {
    scheduleDay: schedule,
    startsAt: "",
    endsAt: ""
  };

  this.ok = function () {
    $uibModalInstance.close(this.theSchedule);
  };

  this.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
};

})();
