angular
    .module('app')
    .controller('availabilityModalController', availabilityModalController);

function availabilityModalController($uibModalInstance, items) {
console.log(items);
  // .controller('ModalInstanceCtrl', function () {
    // var this = this;
    this.items = items;
    this.selected = {
      // item: this.items[0]
    };

    this.ok = function () {
      $uibModalInstance.close(this.selected.item);
    };

    this.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  // });

}
