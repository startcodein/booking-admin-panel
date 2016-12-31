angular
    .module('app')
    .controller('availabilityController', availabilityController);

// availabilityController.$inject = ['availabilityService', 'logger'];
// availabilityController.$inject = ['availabilityService'];

function availabilityController($uibModal, $log, availabilityService) {

  var $ctrl = this;
  this.schedules = {}

  activate();

  function activate() {
      return getAvailability().then(function() {
          // logger.info('Activated Avengers View');
          console.log('Activated Avengers View');
      });
      function getAvailability() {
          return availabilityService.getAvailability()
              .then(function(data) {
                  $ctrl.schedules = data;
                  return $ctrl.schedules;
              });
      }
  }

  function update(theData) {
      return updateAvailability(theData).then(function() {
          // logger.info('Activated Avengers View');
          console.log('update Avengers View');
      });
      function updateAvailability() {
          return availabilityService.updateAvailability(theData)
              .then(function(data) {
                console.log(data);
                  // $ctrl.schedules = data;
                  // return $ctrl.schedules;
              });
      }
  }
// availabilityService
//            .getAvailability()
//            .then(function (attributes) {
//              console.log(attributes);
//              console.log(attributes.data);
//            });


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
    // var index = this.schedules[theDay].indexOf(theTime);
    // this.schedules[theDay].splice(index,1);
    // console.log(this.schedules);
    // var scheduleStructure.weekly_schedule = this.schedules;

    var scheduleStructure = {weekly_schedule:{}};
    scheduleStructure.weekly_schedule = this.schedules;
    // console.log(scheduleStructure);
    update(scheduleStructure);
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
