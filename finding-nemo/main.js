////// Notes //////

// -Need to create a function named "findingNemo".
// -The function will receive a sentence, find the name "Nemo", and return
//  the location of "Nemo" within the sentence represented as a numerical value.
// -Using the split method on the sentence will split the sentence up so the word
//  "Nemo" can be found.

////// Pseudo Code //////

// -Create a function named "findingNemo".
//   -Within the function, use the split method on the sentence and pass in
//    an empty space. This will divide the sentence separate words.
//   -Find the index of "Nemo" within the newly split sentence and add 1.
//   -Return the value of the method.
function findingNemo(sentence) {
  return sentence.split(" ").indexOf("Nemo") + 1;
}

console.log(findingNemo("I am Nemo"));
console.log(findingNemo("Where is Nemo my son?"));
console.log(findingNemo("Nemo is my name"));
