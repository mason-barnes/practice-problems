////// Notes //////

// Need to create a function.
// The function name will be payscaleAnalyzer.
// The goal of the function is to return the difference between highest and lowest hourly wages
// from a list of wages.
// The function will receive a list of numbers, which are hourly wages.
// The function will return a number representing the difference between
// the highest and lowest hourly wages.
// Will need to store the highest and lowest numbers of the list in a separate area.
// Will need to find the difference between the newly stored numbers.
// Function will then return the difference.
// An example input/output would be: payscaleAnalyzer([28, 34, 21, 39]) -> 18

////// Pseudo code //////

// Create function and add list of numbers as a parameter.
// - In the function, create two variables named "highestWage" and "lowestWage", both equal
//   to the first value in the list of numbers.
// - Next, create a for loop that looks at each number in the list.
//   - Within the loop, create an if loop that checks if the current index of the
//     list of numbers is higher than the value in the highest wage variable.
//     - If the indexed value is higher than the highest wage, make the indexed
//       number value the new highest wage value.
//     - Else if the indexed value is lower than the lowest wage, make the indexed
//       number value the new lowest wage value.
// - Return the difference between the highestWage and lowestWage variables.


function payscaleAnalyzer(payList) {
  var highestWage = payList[0];
  var lowestWage = payList[0];
  for (var i=0; i<payList.length; i++) {
    if (payList[i] > highestWage) {
      highestWage = payList[i];
    } else if (payList[i] < lowestWage) {
      lowestWage = payList[i];
    }
  }
  return highestWage - lowestWage;
}

console.log("Difference in wages:", payscaleAnalyzer([28, 34, 21, 39]));
console.log("Difference in wages:", payscaleAnalyzer([18, 22, 19, 26]));
console.log("Difference in wages:", payscaleAnalyzer([41.50, 27.25, 32.50, 29.60]));
