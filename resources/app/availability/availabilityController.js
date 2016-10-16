(function() {
    'use strict';

angular
    .module('app')
    .controller('availabilityController', availabilityController);

function availabilityController($uibModal, $log) {
  var $ctrl = this;
  this.schedules = {
    "MON":[{"start":"08:00:00","end":"10:30:00"},{"start":"11:00:00","end":"13:30:00"},{"start":"14:00:00","end":"16:00:00"}],
    "TUE":[{"start":"10:00:00","end":"10:30:00"},{"start":"11:00:00","end":"13:30:00"},{"start":"14:00:00","end":"16:00:00"}],
    "WED":[{"start":"23:00:00","end":"10:30:00"},{"start":"11:00:00","end":"13:30:00"},{"start":"14:00:00","end":"16:00:00"}],
    "THU":[{"start":"10:00:00","end":"10:30:00"},{"start":"11:00:00","end":"13:30:00"},{"start":"14:00:00","end":"16:00:00"}],
    "FRI":[{"start":"10:00:00","end":"10:30:00"},{"start":"11:00:00","end":"13:30:00"},{"start":"14:00:00","end":"16:00:00"}],
    "SAT":[{"start":"10:00:00","end":"10:30:00"},{"start":"11:00:00","end":"13:30:00"},{"start":"14:00:00","end":"16:00:00"}],
    "Sun":[{"start":"10:00:00","end":"10:30:00"},{"start":"11:00:00","end":"13:30:00"},{"start":"14:00:00","end":"16:00:00"}],
  }

  this.editTime = function (theDay, theTime) {
    var theEditTime = angular.copy(theTime)
    theEditTime.index = $ctrl.schedules[theDay].indexOf(theTime);
    var modalInstance = $uibModal.open({
      templateUrl: 'myModalContent.html',
      controller: 'availabilityModalController',
      controllerAs: '$ctrl',
      size: 'sm',
      resolve: {
         scheduleDay: function() {
             return theDay;
         },
         scheduleTime: function() {
             return theEditTime;
         }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $ctrl.schedules[selectedItem.scheduleOn][selectedItem.index] = {"start":selectedItem.startsAt.toTimeString().split(" ")[0],"end":selectedItem.endsAt.toTimeString().split(" ")[0]}
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });

  }

  // Delete scheduled time
  this.deleteTime = function (theDay, theTime) {
    var index = this.schedules[theDay].indexOf(theTime);
    this.schedules[theDay].splice(index,1);
  }

  this.addTime = function (theDay) {
    var modalInstance = $uibModal.open({
      templateUrl: 'myModalContent.html',
      controller: 'availabilityModalController',
      controllerAs: '$ctrl',
      size: 'sm',
      resolve: {
         scheduleDay: function() {
             return theDay;
         },
         scheduleTime: function() {
             return;
         }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $ctrl.schedules[selectedItem.scheduleOn].push({"start":selectedItem.startsAt.toTimeString().split(" ")[0],"end":selectedItem.endsAt.toTimeString().split(" ")[0]})
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });

  };

};

})();
