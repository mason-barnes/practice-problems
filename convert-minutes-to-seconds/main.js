////// Notes //////

// -Need to create a function.
// -Function name will be "convertMinutesToSeconds".
// -The goal of the function is to change minutes to seconds.
// -The function will receive a time of minutes and seconds, convert the
//  minutes into seconds, add the new total of seconds, and return the
//  new total.
// -Example input "15:34"
// -Example output "934"

////// Pseudo code //////

// -Create a function named "convertMinutesToSeconds" which receives one
//  parameter "string".
//  -Within the function, create a "minutes" variable. Store the result of
//   the minutes after they have been changed into a number from a string.
//  -Next, create a "seconds" variable. Store the result of
//   the minutes after they have been changed into a number from a string.
//  -Finally, return the result of the minutes variable multiplied by 60, then
//   added to the seconds variable.

function convertMinutesToSeconds(string) {
  var minutes = parseInt(string[0] + string[1]);
  var seconds = parseInt(string[3] + string[4]);
  return minutes * 60 + seconds;
}

console.log(convertMinutesToSeconds("15:34"));
console.log(convertMinutesToSeconds("02:45"));
console.log(convertMinutesToSeconds("08:21"));
