function sumArray(numbersArray) {
  var sum = 0;
  for(var i=0; i<numbersArray.length; i++) {
    sum += numbersArray[i];
  }
  return sum
}
console.log(sumArray([10,5,3,7,2]));
console.log(sumArray([1,2,3,4,5]));
console.log(sumArray([5,3,7,4]));
