////// Notes //////

// -Need to create a function.
// -Function name will be called "accountNumberProtector".
// -The goal of the function is to receive a 16-digit credit card number, and return
//  the last 4 digits of the given number.
// -Need to have 2 asterisks in front of the returned number.

////// Pseudo code //////

// -Create a function named "accountNumberProtector" that receives a "cardNumberString".
//   -Within the function, return a string of two asterisks added to the result of
//    the expression within "cardNumberString.substring(12)"

function accountNumberProtector(cardNumberString) {
  return "**" + cardNumberString.substring(12);
}

console.log("Card number:", accountNumberProtector("5543223485638832"));
console.log("Card number:", accountNumberProtector("8934235477210943"));
console.log("Card number:", accountNumberProtector("7513635499320192"));
