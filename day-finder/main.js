////// Notes //////

// -Need to create a function.
// -The function name will be "dayFinder".
// -The goal is to return the day of the week from the date given.
// -The function will receive a date in the format "MM/DD/YYYY"
//  and return the day of the week.

///// Pseudo code //////

// -Create a function named "dayFinder" and add one date parameter.
//   -Within the function, create a newDate variable that stores a new date
//    using the Date constructor, and passing in the date parameter.
//   -Next, create a switch statement and create cases with numbers associated with
//    the days of the week. Example: case 0: would be "Sunday".
//   -The switch statement will return the corresponding day.

function dayFinder(date) {
  var newDate = new Date(date);
  switch(newDate.getDay()) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
      break;
  }
}

console.log(dayFinder("05/22/1946"));
console.log(dayFinder("01/20/2001"));
console.log(dayFinder("03/15/1988"));
