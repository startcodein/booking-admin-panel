angular
    .module('app')
    .controller('bookedController', bookedController);

function bookedController(bookedService, $stateParams, day, $uibModal) {
  this.selectedDay = moment($stateParams.bookedDay).format("DD-MMMM-YYYY");
  this.dayBookings = day;
  this.open = function (userProfile) {

    var modalInstance = $uibModal.open({
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'myModalContent.html',
      controller: function (userProfile, $uibModalInstance) {
        var $ctrl = this;
        $ctrl.userProfile = userProfile;
        $ctrl.cancel = function () {
          $uibModalInstance.dismiss('cancel');
        };
      },
      controllerAs: '$ctrl',
      resolve: {
        userProfile: function () {
            return userProfile;
        }
      }
    });

    modalInstance.result.then(function () {
    }, function () {
    });
  };
}
