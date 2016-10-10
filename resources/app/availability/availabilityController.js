angular
    .module('app')
    .controller('availabilityController', availabilityController);

function availabilityController(moment) {
  this.calendarView = 'month';
  this.viewDate = new Date();

  this.events = [];

  this.mytime = {};

  this.addEvent = function() {
    this.events.push(this.mytime);
    this.mytime = {};
    // this.events.push({
      // title: 'Monday',
      // startsAt: moment().startOf('monday').toDate(),
      // endsAt: moment().endOf('monday').toDate(),
    // });
    console.log(this.events);
  };

  this.clickOnEvent = function (calendarCell) {
    this.mytime = {
        "title": calendarCell.date.format('dddd'),
        // TODO set start-time if there another time
        "startsAt" : moment().startOf('day'),
        // TODO set end-time if there is another time
        "endsAt" : moment().endOf('day')
    }
  }
  this.startOption = {
    "mstep" : 5,
    // TODO set start-time if there another time
    "startTime": moment().startOf('day'),
    // TODO set end-time if there is another time
    "endTime": moment().endOf('day')
  };
  this.endOption = {
    "mstep" : 5,
    // TODO set start-time if there another time
    "startTime": moment().hours(2).minutes(8),
    // TODO set end-time if there is another time
    "endTime": moment().hours(23).minutes(10)
  };
  this.updateChangeStart = function () {
    // TODO update end-time if start-time more then end-time
    // this.mytime.endsAt = this.mytime.startsAt;
    // console.log(this.mytime.endsAt);
      if(moment(this.mytime.startsAt).isSameOrAfter(moment(this.mytime.endsAt))){
        console.log("event can not start after exceed");
      }else{
        console.log("thudangi kayinj avasanikunu");
      }
    //console.log(moment('2010-10-20').isSameOrBefore(moment('2010-10-21')));
  };
  this.updateChangeEnd = function () {
    // TODO set min="" to same start-time
  };
}
