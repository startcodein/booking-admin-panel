(function() {
    'use strict';

angular
    .module('app')
    .controller('availabilityModalController', availabilityModalController);

function availabilityModalController($uibModalInstance, items) {
  console.log(items);
  this.items = items;
  this.selected = {
    item: this.items[0]
  };

  this.ok = function () {
    console.log("selected item");
    // console.log(this.selected.item);
    $uibModalInstance.close(this.selected.item);
  };

  this.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
};

})();
