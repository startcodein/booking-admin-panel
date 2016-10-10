angular
    .module('app')
    .controller('availabilityController', availabilityController);

function availabilityController() {
  this.calendarView = 'month';
  this.viewDate = new Date();

  this.events = [
    // {
    //   title: 'My event title', // The title of the event
    //   startsAt: new Date("2016-10-09T06:00:00.000Z"), // A javascript date object for when the event starts
    //   endsAt: new Date("2016-10-09T07:00:00.000Z"), // Optional - a javascript date object for when the event ends
    //   color: { // can also be calendarConfig.colorTypes.warning for shortcuts to the deprecated event types
    //     primary: '#e3bc08', // the primary event color (should be darker than secondary)
    //     secondary: '#fdf1ba' // the secondary event color (should be lighter than primary)
    //   },
    //   actions: [{ // an array of actions that will be displayed next to the event title
    //     label: '<i class=\'glyphicon glyphicon-pencil\'></i>', // the label of the action
    //     cssClass: 'edit-action', // a CSS class that will be added to the action element so you can implement custom styling
    //     onClick: function(args) { // the action that occurs when it is clicked. The first argument will be an object containing the parent event
    //       console.log('Edit event', args.calendarEvent);
    //     }
    //   }],
    //   draggable: true, //Allow an event to be dragged and dropped
    //   resizable: true, //Allow an event to be resizable
    //   incrementsBadgeTotal: true, //If set to false then will not count towards the badge total amount on the month and year view
    //   recursOn: 'year', // If set the event will recur on the given period. Valid values are year or month
    //   cssClass: 'a-css-class-name', //A CSS class (or more, just separate with spaces) that will be added to the event when it is displayed on each view. Useful for marking an event as selected / active etc
    //   allDay: false // set to true to display the event as an all day event on the day view
    // }
  ];

  this.mytime = new Date();

  this.addEvent = function() {
    this.events.push({
      title: 'Monday',
      startsAt: moment().startOf('monday').toDate(),
      endsAt: moment().endOf('monday').toDate(),
      // color: calendarConfig.colorTypes.important,
    });

    console.log(this.events);
  };

  this.clickOnEvent = function (calendarCell) {
    console.clear();
    console.log(calendarCell.date.format('dddd'));
    // alert("kooy");

    // console.log(calendarCell);
    // console.log(calendarCell.date);
    // console.log(moment(calendarCell.date).format());
    // console.log(moment(calendarCell.date).format('dddd'));
    // console.log(moment(calendarCell.date).utc().format('MMMM Do YYYY, h:mm:ss a'));
    // console.log(moment(calendarCell.date).format('MMMM Do YYYY, h:mm:ss a'));
    // console.log(moment(calendarCell.date).local().format('MMMM Do YYYY, h:mm:ss a'));
  }

  console.log("availability controller");
}
