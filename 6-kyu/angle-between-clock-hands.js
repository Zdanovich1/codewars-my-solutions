/*
Given a Date (in JS and Ruby) or hours and minutes (in C and Python), return the angle between the two hands of a 12-hour analog clock in radians.
Notes:
The minute hand always points to the exact minute (there is no seconds hand).
The hour hand does not "snap" to the tick marks: e.g. at 6:30 the angle is not 0 because the hour hand is already half way between 6 and 7.
Return the smaller of the angles ( <= π ).
Return π if the hands are opposite.
Examples
at noon the angle is: 0
at 3:00 the angle is: π/2 (90 degrees)
at 6:00 the angle is: π (180 degrees)
at 9:00 the angle is: π/2 (90 degrees)
*/
function handAngle(date) {

   let min = date.getMinutes() * 6;
   let hour = (date.getHours() < 12) ? (date.getHours() * 30) + (date.getMinutes() * 0.5) : ((date.getHours() - 12) * 30) + (date.getMinutes() * 0.5);
   let result = (min > hour) ? min - hour : hour - min;

   return (result <= 180) ? ((result * Math.PI) / 180) : (((360 - result) * Math.PI) / 180);
}