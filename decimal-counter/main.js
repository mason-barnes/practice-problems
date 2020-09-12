function decimalPlaceCounter(stringNumber) {
  var newNum = stringNumber.split('.')[1].length;
  if (newNum <= 0) {
    console.log("0");
  }
  console.log(newNum);
}



decimalPlaceCounter("127.245");
decimalPlaceCounter("145");
decimalPlaceCounter("23.00");
