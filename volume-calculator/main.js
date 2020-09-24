////// Notes //////

// -Need to create a function.
// -Function name will be "volumeCalculator".
// -The function will receive three different box measurements, and the goal
//  is to find the volume of each box, and add the box volumes together to
//  get the total volume.
// -Will need to get each box volume stored in their own storage after finding volume.
// Example input/output: volumeCalculator([[3, 3, 3], [4, 4, 4], [5, 5, 5]]) -> 216

////// Pseudo Code //////

// -Create a function named "volumeCalculator".
// -Within the function, create a loop that looks through each set of box measurements.
//   -Within the loop, create three storage containers for each box measurement after the volume
//    has been found.
// -Return the result of multiplying box1, box2, and box3 together.

function volumeCalculator(boxesArray) {
  for (var i=0; i<boxesArray.length; i++) {
    var box1 = boxesArray[0][0] * boxesArray[0][1] * boxesArray[0][2];
    var box2 = boxesArray[1][0] * boxesArray[1][1] * boxesArray[1][2];
    var box3 = boxesArray[2][0] * boxesArray[2][1] * boxesArray[2][2];
  }
  return box1 + box2 + box3;
}

console.log(volumeCalculator([[3, 3, 3], [4, 4, 4], [5, 5, 5]]));
console.log(volumeCalculator([[5, 1, 4], [8, 5, 4], [3, 1, 7]]));
console.log(volumeCalculator([[5, 4, 2], [12, 15, 21], [7, 7, 7]]));
