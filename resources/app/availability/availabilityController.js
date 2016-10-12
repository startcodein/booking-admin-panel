angular
    .module('app')
    .controller('availabilityController', availabilityController);

function availabilityController() {
  this.schedules = {
    "MON":[{"start":"08:00:00","end":"10:30:00"},{"start":"11:00:00","end":"13:30:00"},{"start":"14:00:00","end":"16:00:00"}],
    "TUE":[{"start":"10:00:00","end":"10:30:00"},{"start":"11:00:00","end":"13:30:00"},{"start":"14:00:00","end":"16:00:00"}],
    "WED":[{"start":"23:00:00","end":"10:30:00"},{"start":"11:00:00","end":"13:30:00"},{"start":"14:00:00","end":"16:00:00"}],
    "THU":[{"start":"10:00:00","end":"10:30:00"},{"start":"11:00:00","end":"13:30:00"},{"start":"14:00:00","end":"16:00:00"}],
    "FRI":[{"start":"10:00:00","end":"10:30:00"},{"start":"11:00:00","end":"13:30:00"},{"start":"14:00:00","end":"16:00:00"}],
    "SAT":[{"start":"10:00:00","end":"10:30:00"},{"start":"11:00:00","end":"13:30:00"},{"start":"14:00:00","end":"16:00:00"}],
    "Sun":[{"start":"10:00:00","end":"10:30:00"},{"start":"11:00:00","end":"13:30:00"},{"start":"14:00:00","end":"16:00:00"}],
  }

  this.addTime = function (theDay) {
    console.log(theDay);
    this.schedules[theDay].push({"start":"08:00:00","end":"10:30:00"});
  }
  this.editTime = function (theDay) {
    console.log(theDay);
    this.schedules[theDay].push({"start":"08:00:00","end":"10:30:00"});
  }

  this.deleteTime = function (theWeek, theDay) {
    var index = this.schedules[theWeek].indexOf(theDay);
    this.schedules[theWeek].splice(index,1);
  }
}
