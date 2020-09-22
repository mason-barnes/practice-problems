////// Notes //////

// -Need to create a function.
// -Function will be named "fogClearer".
// -The function will receive a series of characters "string", remove the letters
//  "f" "o" and "g" if found, and return the remaining characters.
// -Will need to loop through characters and compare each character to "f" "o" and "g".
// -Need storage for remaining characters.
// -Example input: "fffdarkoooooogggggg", example output: "dark".

////// Pseudo Code //////

// -Create a function named "fogClearer".
//   -Within the function, create an empty container to store the remaining characters.
//   -Next, create a loop that will cycle through each letter from the string.
//     -If the character does not match "f" "o" or "g", add the character to the
//      remaining character storage.
//   -If the string is equal to the remaining characters, return "It's a clear day".
//   -Else, return the remaining characters.

function fogClearer(string) {
  var remaining = "";
  for (var i=0; i<string.length; i++) {
    if (string[i] !== "f" && string[i] !== "o" && string[i] !== "g") {
      remaining += string[i];
    }
  }
  if (string === remaining) {
    return "It's a clear day!";
  } else {
    return remaining;
  }
}

console.log(fogClearer("fffdarkooooooggggggg"));
console.log(fogClearer("I like nice trees"));
console.log(fogClearer("foogooooffffhuhooofff"));
