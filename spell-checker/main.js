////// Notes //////

// Need to make a function named "spellChecker".
// The function will receive two lists, the first being a list of user typed words,
// and the second will be the same list of words with the correct spelling.
// The goal is to compare the two lists, and return two new lists, one with the
// correctly spelled words, and the other with the incorrectly spelled words.
// Example input/output is: spellChecker(["java", "CDS", "HTMO"], ["java", "CSS","HTML"]) -> {correct: ["java"], incorrect: ["CDS","HTMO"]}

////// Pseudo code //////

// Create a function "spellChecker" with two parameters.
// - Create two new variables with empty arrays that will store the correct/incorrect spelled words separately.
// - Next, create a loop that looks at each word in the lists.
//   - Within the loop, check if the current word being checked in both lists match.
//   - If the spelling matches, store the correctly typed word into the correct list variable.
//   - Else if the spelling does not match, store the incorrectly typed word into the incorrect list variable.
// - Return both lists from the function.

function spellChecker(typedWords, correctWords) {
  var correctSpelling = [];
  var incorrectSpelling = [];
  for (var i=0; i<typedWords.length; i++) {
    if (typedWords[i] === correctWords[i]) {
      correctSpelling.push(" " + typedWords[i]);
    } else if (typedWords[i] !== correctWords[i]) {
      incorrectSpelling.push(" " + typedWords[i]);
    }
  }
  return "Correct:" + correctSpelling + " Incorrect:" + incorrectSpelling;
}

console.log(spellChecker(["boy", "duct", "ice cream", "sendwich"], ["boy", "duck", "ice cream", "sandwich"]));
console.log(spellChecker(["jam", "breat", "sound"], ["jam", "bread", "sound"]));
console.log(spellChecker(["java", "CDS", "HTMO"], ["java", "CSS", "HTML"]));
