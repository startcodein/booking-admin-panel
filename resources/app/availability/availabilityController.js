(function() {
    'use strict';

angular
    .module('app')
    .controller('availabilityController', availabilityController);

function availabilityController($uibModal, $log) {
  this.items = ['item1', 'item2', 'item3'];
  this.schedules = {
    "MON":[{"start":"08:00:00","end":"10:30:00"},{"start":"11:00:00","end":"13:30:00"},{"start":"14:00:00","end":"16:00:00"}],
    "TUE":[{"start":"10:00:00","end":"10:30:00"},{"start":"11:00:00","end":"13:30:00"},{"start":"14:00:00","end":"16:00:00"}],
    "WED":[{"start":"23:00:00","end":"10:30:00"},{"start":"11:00:00","end":"13:30:00"},{"start":"14:00:00","end":"16:00:00"}],
    "THU":[{"start":"10:00:00","end":"10:30:00"},{"start":"11:00:00","end":"13:30:00"},{"start":"14:00:00","end":"16:00:00"}],
    "FRI":[{"start":"10:00:00","end":"10:30:00"},{"start":"11:00:00","end":"13:30:00"},{"start":"14:00:00","end":"16:00:00"}],
    "SAT":[{"start":"10:00:00","end":"10:30:00"},{"start":"11:00:00","end":"13:30:00"},{"start":"14:00:00","end":"16:00:00"}],
    "Sun":[{"start":"10:00:00","end":"10:30:00"},{"start":"11:00:00","end":"13:30:00"},{"start":"14:00:00","end":"16:00:00"}],
  }

  this.editTime = function (theDay) {
    console.log(theDay);
    // this.schedules[theDay].push({"start":"08:00:00","end":"10:30:00"});
  }

  // Delete scheduled time
  this.deleteTime = function (theWeek, theDay) {
    var index = this.schedules[theWeek].indexOf(theDay);
    this.schedules[theWeek].splice(index,1);
  }

  this.addTime = function () {
    var $ctrl = this;
    var modalInstance = $uibModal.open({
      templateUrl: 'myModalContent.html',
      controller: 'availabilityModalController',
      controllerAs: '$ctrl',
      resolve: {
        items: function () {
          return $ctrl.schedules;
       }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $ctrl.selected = selectedItem;
      console.log(selectedItem);
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });

  };

};

})();
