function isTheAverageWhole(numbersArray) {
  var total = 0;
  for (var i=0; i<numbersArray.length; i++) {
    var indexVal = numbersArray[i];
    total += indexVal;
  }
  var division = total / numbersArray.length;
  if (Number.isInteger(division)) {
  console.log(true);
  } else {
    console.log(false);
  }
}

isTheAverageWhole([1, 3, 4, 4]);
isTheAverageWhole([3, 4]);
isTheAverageWhole([5, 5, 5]);
