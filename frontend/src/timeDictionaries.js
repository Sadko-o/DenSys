const weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function indexToTimeSlot(index) {
  var hour = 8 + Math.floor(index / 2);
  var minute = index % 2 ? "30" : "00";
  return hour + ":" + minute;
}

export { weekDays, indexToTimeSlot };
