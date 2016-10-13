angular
    .module('app')
    .controller('availabilityController', availabilityController);

function availabilityController($uibModal) {
  this.schedules = {
    "MON":[{"start":"08:00:00","end":"10:30:00"},{"start":"11:00:00","end":"13:30:00"},{"start":"14:00:00","end":"16:00:00"}],
    "TUE":[{"start":"10:00:00","end":"10:30:00"},{"start":"11:00:00","end":"13:30:00"},{"start":"14:00:00","end":"16:00:00"}],
    "WED":[{"start":"23:00:00","end":"10:30:00"},{"start":"11:00:00","end":"13:30:00"},{"start":"14:00:00","end":"16:00:00"}],
    "THU":[{"start":"10:00:00","end":"10:30:00"},{"start":"11:00:00","end":"13:30:00"},{"start":"14:00:00","end":"16:00:00"}],
    "FRI":[{"start":"10:00:00","end":"10:30:00"},{"start":"11:00:00","end":"13:30:00"},{"start":"14:00:00","end":"16:00:00"}],
    "SAT":[{"start":"10:00:00","end":"10:30:00"},{"start":"11:00:00","end":"13:30:00"},{"start":"14:00:00","end":"16:00:00"}],
    "Sun":[{"start":"10:00:00","end":"10:30:00"},{"start":"11:00:00","end":"13:30:00"},{"start":"14:00:00","end":"16:00:00"}],
  }

  this.items = ['item1', 'item2', 'item3'];
  // this.addTime = function (theDay) {
    // console.log(theDay);
    // this.schedules[theDay].push({"start":"08:00:00","end":"10:30:00"});
  // }
  this.editTime = function (theDay) {
    console.log(theDay);
    // this.schedules[theDay].push({"start":"08:00:00","end":"10:30:00"});
  }

  // Delete scheduled time
  this.deleteTime = function (theWeek, theDay) {
    var index = this.schedules[theWeek].indexOf(theDay);
    this.schedules[theWeek].splice(index,1);
  }
  this.addTime = function (size, parentSelector) {
    // var parentElem = parentSelector ?
      // angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
    var modalInstance = $uibModal.open({
      // animation: $ctrl.animationsEnabled,
      // ariaLabelledBy: 'modal-title',
      // ariaDescribedBy: 'modal-body',
      templateUrl: 'myModalContent.html',
      controller: 'availabilityModalController',
      controllerAs: 'availModCtrl',
      // size: size,
      // appendTo: parentElem,
      resolve: {
        items: function () {
          // return this.items;
        }
      }
    });
  }

}
