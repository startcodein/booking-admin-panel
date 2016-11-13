angular
    .module('app')
    .controller('bookingController', bookingController);

function bookingController() {
  var $ctrl = this;

  $ctrl.calendarView = 'month';
  $ctrl.viewDate = new Date();

$ctrl.events =  [{
          "id": 1149,
          "doctor_id": "1",
          "startsAt": "2016-10-24",
          "is_holiday": "1",
          "last_appointment": "00:00:00",
          "total_appointments": "0",
          "remaining_appointments": "0",
          "created_at": "2016-10-23 20:13:42",
          "updated_at": "2016-10-23 20:13:42"
      // }, {
      //     "id": 1150,
      //     "doctor_id": "1",
      //     "day": "2016-10-24",
      //     "is_holiday": "0",
      //     "last_appointment": "08:00:00",
      //     "total_appointments": "28",
      //     "remaining_appointments": "28",
      //     "created_at": "2016-10-23 20:13:42",
      //     "updated_at": "2016-10-23 20:13:42"
      // }, {
      //     "id": 1151,
      //     "doctor_id": "1",
      //     "day": "2016-10-25",
      //     "is_holiday": "0",
      //     "last_appointment": "08:00:00",
      //     "total_appointments": "28",
      //     "remaining_appointments": "28",
      //     "created_at": "2016-10-23 20:13:42",
      //     "updated_at": "2016-10-23 20:13:42"
      // }, {
      //     "id": 1152,
      //     "doctor_id": "1",
      //     "day": "2016-10-26",
      //     "is_holiday": "0",
      //     "last_appointment": "08:00:00",
      //     "total_appointments": "28",
      //     "remaining_appointments": "28",
      //     "created_at": "2016-10-23 20:13:42",
      //     "updated_at": "2016-10-23 20:13:42"
      // }, {
      //     "id": 1153,
      //     "doctor_id": "1",
      //     "day": "2016-10-27",
      //     "is_holiday": "1",
      //     "last_appointment": "00:00:00",
      //     "total_appointments": "0",
      //     "remaining_appointments": "0",
      //     "created_at": "2016-10-23 20:13:42",
      //     "updated_at": "2016-10-23 20:13:42"
      // }, {
      //     "id": 1154,
      //     "doctor_id": "1",
      //     "day": "2016-10-28",
      //     "is_holiday": "1",
      //     "last_appointment": "00:00:00",
      //     "total_appointments": "0",
      //     "remaining_appointments": "0",
      //     "created_at": "2016-10-23 20:13:42",
      //     "updated_at": "2016-10-23 20:13:42"
      // }, {
      //     "id": 1155,
      //     "doctor_id": "1",
      //     "day": "2016-10-29",
      //     "is_holiday": "1",
      //     "last_appointment": "00:00:00",
      //     "total_appointments": "0",
      //     "remaining_appointments": "0",
      //     "created_at": "2016-10-23 20:13:42",
      //     "updated_at": "2016-10-23 20:13:42"
      // }, {
      //     "id": 1156,
      //     "doctor_id": "1",
      //     "day": "2016-10-30",
      //     "is_holiday": "1",
      //     "last_appointment": "00:00:00",
      //     "total_appointments": "0",
      //     "remaining_appointments": "0",
      //     "created_at": "2016-10-23 20:13:42",
      //     "updated_at": "2016-10-23 20:13:42"
      // }, {
      //     "id": 1157,
      //     "doctor_id": "1",
      //     "day": "2016-10-31",
      //     "is_holiday": "0",
      //     "last_appointment": "08:00:00",
      //     "total_appointments": "28",
      //     "remaining_appointments": "28",
      //     "created_at": "2016-10-23 20:13:42",
      //     "updated_at": "2016-10-23 20:13:42"
      // }, {
      //     "id": 1158,
      //     "doctor_id": "1",
      //     "day": "2016-11-01",
      //     "is_holiday": "0",
      //     "last_appointment": "08:00:00",
      //     "total_appointments": "28",
      //     "remaining_appointments": "28",
      //     "created_at": "2016-10-23 20:13:42",
      //     "updated_at": "2016-10-23 20:13:42"
      // }, {
      //     "id": 1159,
      //     "doctor_id": "1",
      //     "day": "2016-11-02",
      //     "is_holiday": "0",
      //     "last_appointment": "08:00:00",
      //     "total_appointments": "28",
      //     "remaining_appointments": "28",
      //     "created_at": "2016-10-23 20:13:42",
      //     "updated_at": "2016-10-23 20:13:42"
      // }, {
      //     "id": 1160,
      //     "doctor_id": "1",
      //     "day": "2016-11-03",
      //     "is_holiday": "1",
      //     "last_appointment": "00:00:00",
      //     "total_appointments": "0",
      //     "remaining_appointments": "0",
      //     "created_at": "2016-10-23 20:13:42",
      //     "updated_at": "2016-10-23 20:13:42"
      // }, {
      //     "id": 1161,
      //     "doctor_id": "1",
      //     "day": "2016-11-04",
      //     "is_holiday": "1",
      //     "last_appointment": "00:00:00",
      //     "total_appointments": "0",
      //     "remaining_appointments": "0",
      //     "created_at": "2016-10-23 20:13:42",
      //     "updated_at": "2016-10-23 20:13:42"
      // }, {
      //     "id": 1162,
      //     "doctor_id": "1",
      //     "day": "2016-11-05",
      //     "is_holiday": "1",
      //     "last_appointment": "00:00:00",
      //     "total_appointments": "0",
      //     "remaining_appointments": "0",
      //     "created_at": "2016-10-23 20:13:42",
      //     "updated_at": "2016-10-23 20:13:42"
      // }, {
      //     "id": 1163,
      //     "doctor_id": "1",
      //     "day": "2016-11-06",
      //     "is_holiday": "1",
      //     "last_appointment": "00:00:00",
      //     "total_appointments": "0",
      //     "remaining_appointments": "0",
      //     "created_at": "2016-10-23 20:13:42",
      //     "updated_at": "2016-10-23 20:13:42"
      // }, {
      //     "id": 1164,
      //     "doctor_id": "1",
      //     "day": "2016-11-07",
      //     "is_holiday": "0",
      //     "last_appointment": "08:00:00",
      //     "total_appointments": "28",
      //     "remaining_appointments": "28",
      //     "created_at": "2016-10-23 20:13:42",
      //     "updated_at": "2016-10-23 20:13:42"
      // }, {
      //     "id": 1165,
      //     "doctor_id": "1",
      //     "day": "2016-11-08",
      //     "is_holiday": "0",
      //     "last_appointment": "08:00:00",
      //     "total_appointments": "28",
      //     "remaining_appointments": "28",
      //     "created_at": "2016-10-23 20:13:42",
      //     "updated_at": "2016-10-23 20:13:42"
      // }, {
      //     "id": 1166,
      //     "doctor_id": "1",
      //     "day": "2016-11-09",
      //     "is_holiday": "0",
      //     "last_appointment": "08:00:00",
      //     "total_appointments": "28",
      //     "remaining_appointments": "28",
      //     "created_at": "2016-10-23 20:13:42",
      //     "updated_at": "2016-10-23 20:13:42"
      // }, {
      //     "id": 1167,
      //     "doctor_id": "1",
      //     "day": "2016-11-10",
      //     "is_holiday": "1",
      //     "last_appointment": "00:00:00",
      //     "total_appointments": "0",
      //     "remaining_appointments": "0",
      //     "created_at": "2016-10-23 20:13:42",
      //     "updated_at": "2016-10-23 20:13:42"
      // }, {
      //     "id": 1168,
      //     "doctor_id": "1",
      //     "day": "2016-11-11",
      //     "is_holiday": "1",
      //     "last_appointment": "00:00:00",
      //     "total_appointments": "0",
      //     "remaining_appointments": "0",
      //     "created_at": "2016-10-23 20:13:42",
      //     "updated_at": "2016-10-23 20:13:42"
      // }, {
      //     "id": 1169,
      //     "doctor_id": "1",
      //     "day": "2016-11-12",
      //     "is_holiday": "1",
      //     "last_appointment": "00:00:00",
      //     "total_appointments": "0",
      //     "remaining_appointments": "0",
      //     "created_at": "2016-10-23 20:13:42",
      //     "updated_at": "2016-10-23 20:13:42"
      // }, {
      //     "id": 1170,
      //     "doctor_id": "1",
      //     "day": "2016-11-13",
      //     "is_holiday": "1",
      //     "last_appointment": "00:00:00",
      //     "total_appointments": "0",
      //     "remaining_appointments": "0",
      //     "created_at": "2016-10-23 20:13:42",
      //     "updated_at": "2016-10-23 20:13:42"
      // }, {
      //     "id": 1171,
      //     "doctor_id": "1",
      //     "day": "2016-11-14",
      //     "is_holiday": "0",
      //     "last_appointment": "08:00:00",
      //     "total_appointments": "28",
      //     "remaining_appointments": "28",
      //     "created_at": "2016-10-23 20:13:42",
      //     "updated_at": "2016-10-23 20:13:42"
      // }, {
      //     "id": 1172,
      //     "doctor_id": "1",
      //     "day": "2016-11-15",
      //     "is_holiday": "0",
      //     "last_appointment": "08:00:00",
      //     "total_appointments": "28",
      //     "remaining_appointments": "28",
      //     "created_at": "2016-10-23 20:13:42",
      //     "updated_at": "2016-10-23 20:13:42"
      // }, {
      //     "id": 1173,
      //     "doctor_id": "1",
      //     "day": "2016-11-16",
      //     "is_holiday": "0",
      //     "last_appointment": "08:00:00",
      //     "total_appointments": "28",
      //     "remaining_appointments": "28",
      //     "created_at": "2016-10-23 20:13:42",
      //     "updated_at": "2016-10-23 20:13:42"
      // }, {
      //     "id": 1174,
      //     "doctor_id": "1",
      //     "day": "2016-11-17",
      //     "is_holiday": "1",
      //     "last_appointment": "00:00:00",
      //     "total_appointments": "0",
      //     "remaining_appointments": "0",
      //     "created_at": "2016-10-23 20:13:42",
      //     "updated_at": "2016-10-23 20:13:42"
      // }, {
      //     "id": 1175,
      //     "doctor_id": "1",
      //     "day": "2016-11-18",
      //     "is_holiday": "1",
      //     "last_appointment": "00:00:00",
      //     "total_appointments": "0",
      //     "remaining_appointments": "0",
      //     "created_at": "2016-10-23 20:13:42",
      //     "updated_at": "2016-10-23 20:13:42"
      // }, {
      //     "id": 1176,
      //     "doctor_id": "1",
      //     "day": "2016-11-19",
      //     "is_holiday": "1",
      //     "last_appointment": "00:00:00",
      //     "total_appointments": "0",
      //     "remaining_appointments": "0",
      //     "created_at": "2016-10-23 20:13:42",
      //     "updated_at": "2016-10-23 20:13:42"
      // }, {
      //     "id": 1177,
      //     "doctor_id": "1",
      //     "day": "2016-11-20",
      //     "is_holiday": "1",
      //     "last_appointment": "00:00:00",
      //     "total_appointments": "0",
      //     "remaining_appointments": "0",
      //     "created_at": "2016-10-23 20:13:42",
      //     "updated_at": "2016-10-23 20:13:42"
      // }, {
      //     "id": 1178,
      //     "doctor_id": "1",
      //     "day": "2016-11-21",
      //     "is_holiday": "0",
      //     "last_appointment": "08:00:00",
      //     "total_appointments": "28",
      //     "remaining_appointments": "28",
      //     "created_at": "2016-10-23 20:13:42",
      //     "updated_at": "2016-10-23 20:13:42"
      // }, {
      //     "id": 1179,
      //     "doctor_id": "1",
      //     "day": "2016-11-22",
      //     "is_holiday": "0",
      //     "last_appointment": "08:00:00",
      //     "total_appointments": "28",
      //     "remaining_appointments": "28",
      //     "created_at": "2016-10-23 20:13:42",
      //     "updated_at": "2016-10-23 20:13:42"
      // }, {
      //     "id": 1180,
      //     "doctor_id": "1",
      //     "day": "2016-11-23",
      //     "is_holiday": "0",
      //     "last_appointment": "08:00:00",
      //     "total_appointments": "28",
      //     "remaining_appointments": "28",
      //     "created_at": "2016-10-23 20:13:42",
      //     "updated_at": "2016-10-23 20:13:42"
      // }, {
      //     "id": 1181,
      //     "doctor_id": "1",
      //     "day": "2016-11-24",
      //     "is_holiday": "1",
      //     "last_appointment": "00:00:00",
      //     "total_appointments": "0",
      //     "remaining_appointments": "0",
      //     "created_at": "2016-10-23 20:13:42",
      //     "updated_at": "2016-10-23 20:13:42"
      // }, {
      //     "id": 1182,
      //     "doctor_id": "1",
      //     "day": "2016-11-25",
      //     "is_holiday": "1",
      //     "last_appointment": "00:00:00",
      //     "total_appointments": "0",
      //     "remaining_appointments": "0",
      //     "created_at": "2016-10-23 20:13:42",
      //     "updated_at": "2016-10-23 20:13:42"
      // }, {
      //     "id": 1183,
      //     "doctor_id": "1",
      //     "day": "2016-11-26",
      //     "is_holiday": "1",
      //     "last_appointment": "00:00:00",
      //
      //     "total_appointments": "0",
      //     "remaining_appointments": "0",
      //     "created_at": "2016-10-23 20:13:42",
      //     "updated_at": "2016-10-23 20:13:42"
      // }, {
      //     "id": 1184,
      //     "doctor_id": "1",
      //     "day": "2016-11-27",
      //     "is_holiday": "1",
      //     "last_appointment": "00:00:00",
      //     "total_appointments": "0",
      //     "remaining_appointments": "0",
      //     "created_at": "2016-10-23 20:13:42",
      //     "updated_at": "2016-10-23 20:13:42"
      // }, {
      //     "id": 1185,
      //     "doctor_id": "1",
      //     "day": "2016-11-28",
      //     "is_holiday": "0",
      //     "last_appointment": "08:00:00",
      //     "total_appointments": "28",
      //     "remaining_appointments": "28",
      //     "created_at": "2016-10-23 20:13:42",
      //     "updated_at": "2016-10-23 20:13:42"
      // }, {
      //     "id": 1186,
      //     "doctor_id": "1",
      //     "day": "2016-11-29",
      //     "is_holiday": "0",
      //     "last_appointment": "08:00:00",
      //     "total_appointments": "28",
      //     "remaining_appointments": "28",
      //     "created_at": "2016-10-23 20:13:42",
      //     "updated_at": "2016-10-23 20:13:42"
      // }, {
      //     "id": 1187,
      //     "doctor_id": "1",
      //     "day": "2016-11-30",
      //     "is_holiday": "0",
      //     "last_appointment": "08:00:00",
      //     "total_appointments": "28",
      //     "remaining_appointments": "28",
      //     "created_at": "2016-10-23 20:13:42",
      //     "updated_at": "2016-10-23 20:13:42"
      // }, {
      //     "id": 1188,
      //     "doctor_id": "1",
      //     "day": "2016-12-01",
      //     "is_holiday": "1",
      //     "last_appointment": "00:00:00",
      //     "total_appointments": "0",
      //     "remaining_appointments": "0",
      //     "created_at": "2016-10-23 20:13:42",
      //     "updated_at": "2016-10-23 20:13:42"
      // }, {
      //     "id": 1189,
      //     "doctor_id": "1",
      //     "day": "2016-12-02",
      //     "is_holiday": "1",
      //     "last_appointment": "00:00:00",
      //     "total_appointments": "0",
      //     "remaining_appointments": "0",
      //     "created_at": "2016-10-23 20:13:42",
      //     "updated_at": "2016-10-23 20:13:42"
      // }, {
      //     "id": 1190,
      //     "doctor_id": "1",
      //     "day": "2016-12-03",
      //     "is_holiday": "1",
      //     "last_appointment": "00:00:00",
      //     "total_appointments": "0",
      //     "remaining_appointments": "0",
      //     "created_at": "2016-10-23 20:13:42",
      //     "updated_at": "2016-10-23 20:13:42"
      // }, {
      //     "id": 1191,
      //     "doctor_id": "1",
      //     "day": "2016-12-04",
      //     "is_holiday": "1",
      //     "last_appointment": "00:00:00",
      //     "total_appointments": "0",
      //     "remaining_appointments": "0",
      //     "created_at": "2016-10-23 20:13:42",
      //     "updated_at": "2016-10-23 20:13:42"
      // }, {
      //     "id": 1192,
      //     "doctor_id": "1",
      //     "day": "2016-12-05",
      //     "is_holiday": "0",
      //     "last_appointment": "08:00:00",
      //     "total_appointments": "28",
      //     "remaining_appointments": "28",
      //     "created_at": "2016-10-23 20:13:42",
      //     "updated_at": "2016-10-23 20:13:42"
      // }, {
      //     "id": 1193,
      //     "doctor_id": "1",
      //     "day": "2016-12-06",
      //     "is_holiday": "0",
      //     "last_appointment": "08:00:00",
      //     "total_appointments": "28",
      //     "remaining_appointments": "28",
      //     "created_at": "2016-10-23 20:13:42",
      //     "updated_at": "2016-10-23 20:13:42"
      // }, {
      //     "id": 1194,
      //     "doctor_id": "1",
      //     "day": "2016-12-07",
      //     "is_holiday": "0",
      //     "last_appointment": "08:00:00",
      //     "total_appointments": "28",
      //     "remaining_appointments": "28",
      //     "created_at": "2016-10-23 20:13:42",
      //     "updated_at": "2016-10-23 20:13:42"
      // }, {
      //     "id": 1195,
      //     "doctor_id": "1",
      //     "day": "2016-12-08",
      //     "is_holiday": "1",
      //     "last_appointment": "00:00:00",
      //     "total_appointments": "0",
      //     "remaining_appointments": "0",
      //     "created_at": "2016-10-23 20:13:42",
      //     "updated_at": "2016-10-23 20:13:42"
      // }, {
      //     "id": 1196,
      //     "doctor_id": "1",
      //     "day": "2016-12-09",
      //     "is_holiday": "1",
      //     "last_appointment": "00:00:00",
      //     "total_appointments": "0",
      //     "remaining_appointments": "0",
      //     "created_at": "2016-10-23 20:13:42",
      //     "updated_at": "2016-10-23 20:13:42"
      // }, {
      //     "id": 1197,
      //     "doctor_id": "1",
      //     "day": "2016-12-10",
      //     "is_holiday": "1",
      //     "last_appointment": "00:00:00",
      //     "total_appointments": "0",
      //     "remaining_appointments": "0",
      //     "created_at": "2016-10-23 20:13:42",
      //     "updated_at": "2016-10-23 20:13:42"
      // }, {
      //     "id": 1198,
      //     "doctor_id": "1",
      //     "day": "2016-12-11",
      //     "is_holiday": "1",
      //     "last_appointment": "00:00:00",
      //     "total_appointments": "0",
      //     "remaining_appointments": "0",
      //     "created_at": "2016-10-23 20:13:42",
      //     "updated_at": "2016-10-23 20:13:42"
      // }, {
      //     "id": 1199,
      //     "doctor_id": "1",
      //     "day": "2016-12-12",
      //     "is_holiday": "0",
      //     "last_appointment": "08:00:00",
      //     "total_appointments": "28",
      //     "remaining_appointments": "28",
      //     "created_at": "2016-10-23 20:13:42",
      //     "updated_at": "2016-10-23 20:13:42"
      // }, {
      //     "id": 1200,
      //     "doctor_id": "1",
      //     "day": "2016-12-13",
      //     "is_holiday": "0",
      //     "last_appointment": "08:00:00",
      //     "total_appointments": "28",
      //     "remaining_appointments": "28",
      //     "created_at": "2016-10-23 20:13:42",
      //     "updated_at": "2016-10-23 20:13:42"
      // }, {
      //     "id": 1201,
      //     "doctor_id": "1",
      //     "day": "2016-12-14",
      //     "is_holiday": "0",
      //     "last_appointment": "08:00:00",
      //     "total_appointments": "28",
      //     "remaining_appointments": "28",
      //     "created_at": "2016-10-23 20:13:42",
      //     "updated_at": "2016-10-23 20:13:42"
      // }, {
      //     "id": 1202,
      //     "doctor_id": "1",
      //     "day": "2016-12-15",
      //     "is_holiday": "1",
      //     "last_appointment": "00:00:00",
      //     "total_appointments": "0",
      //     "remaining_appointments": "0",
      //     "created_at": "2016-10-23 20:13:42",
      //     "updated_at": "2016-10-23 20:13:42"
      // }, {
      //     "id": 1203,
      //     "doctor_id": "1",
      //     "day": "2016-12-16",
      //     "is_holiday": "1",
      //     "last_appointment": "00:00:00",
      //     "total_appointments": "0",
      //     "remaining_appointments": "0",
      //     "created_at": "2016-10-23 20:13:42",
      //     "updated_at": "2016-10-23 20:13:42"
      // }, {
      //     "id": 1204,
      //     "doctor_id": "1",
      //     "day": "2016-12-17",
      //     "is_holiday": "1",
      //     "last_appointment": "00:00:00",
      //     "total_appointments": "0",
      //     "remaining_appointments": "0",
      //     "created_at": "2016-10-23 20:13:42",
      //     "updated_at": "2016-10-23 20:13:42"
      // }, {
      //     "id": 1205,
      //     "doctor_id": "1",
      //     "day": "2016-12-18",
      //     "is_holiday": "1",
      //     "last_appointment": "00:00:00",
      //     "total_appointments": "0",
      //     "remaining_appointments": "0",
      //     "created_at": "2016-10-23 20:13:42",
      //     "updated_at": "2016-10-23 20:13:42"
      // }, {
      //     "id": 1206,
      //     "doctor_id": "1",
      //     "day": "2016-12-19",
      //     "is_holiday": "0",
      //     "last_appointment": "08:00:00",
      //     "total_appointments": "28",
      //     "remaining_appointments": "28",
      //     "created_at": "2016-10-23 20:13:42",
      //     "updated_at": "2016-10-23 20:13:42"
      // }, {
      //     "id": 1207,
      //     "doctor_id": "1",
      //     "day": "2016-12-20",
      //     "is_holiday": "0",
      //     "last_appointment": "08:00:00",
      //     "total_appointments": "28",
      //     "remaining_appointments": "28",
      //     "created_at": "2016-10-23 20:13:42",
      //     "updated_at": "2016-10-23 20:13:42"
      // }, {
      //     "id": 1208,
      //     "doctor_id": "1",
      //     "day": "2016-12-21",
      //     "is_holiday": "0",
      //     "last_appointment": "08:00:00",
      //     "total_appointments": "28",
      //     "remaining_appointments": "28",
      //     "created_at": "2016-10-23 20:13:42",
      //     "updated_at": "2016-10-23 20:13:42"
      // }, {
      //     "id": 1209,
      //     "doctor_id": "1",
      //     "day": "2016-12-22",
      //     "is_holiday": "1",
      //     "last_appointment": "00:00:00",
      //     "total_appointments": "0",
      //     "remaining_appointments": "0",
      //     "created_at": "2016-10-23 20:13:42",
      //     "updated_at": "2016-10-23 20:13:42"
      }];

// http://booking.startcode.in/admin/current-schedule/1

}
