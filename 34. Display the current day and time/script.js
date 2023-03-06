let today = new Date();
let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let dayOfWeek = today.getDay();
let hour = today.getHours();
let hour12 = hour % 12;
if (hour12 === 0) {
    hour12 = 12;
}
let minute = today.getMinutes();
let second = today.getSeconds();
let ampm = hour < 12 ? 'AM' : 'PM';
let timeString = hour12 + ' ' + ampm + ' : ' + minute + ' : ' + second;
let outputString = 'Today is: ' + daysOfWeek[dayOfWeek] + '\nCurrent time is: ' + timeString;
console.log(outputString);

