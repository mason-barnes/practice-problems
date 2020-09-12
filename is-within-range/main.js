function isWithinRange(number, rangeObject) {
  var min = rangeObject.min;
  var max = rangeObject.max;
  if (number >= min && number <= max) {
    console.log("true");
  } else {
    console.log("false");
  }
}

isWithinRange(5, { min: 1, max: 9 });
isWithinRange(12, { min: 15, max: 29 });
isWithinRange(9, { min: 0, max: 9 }) ;
