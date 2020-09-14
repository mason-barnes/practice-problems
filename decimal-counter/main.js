function decimalPlaceCounter(stringNumber) {
  var blank = 0;
  var decimalFound = false;
  for (var i=0; i < stringNumber.length; i++) {
    if (stringNumber[i] === '.') {
      decimalFound = true;
    } else if (decimalFound) {
      blank++;
    }
  }
  return blank;
}




console.log("Numbers after decimal: ", decimalPlaceCounter("127.245"));
console.log("Numbers after decimal: ", decimalPlaceCounter("145"));
console.log("Numbers after decimal: ", decimalPlaceCounter("23.00"));
