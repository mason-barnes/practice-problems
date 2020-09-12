function wordBuilder(string) {
  var quote = "";
  var result = [];
  for (var i=0; i < string.length; i++) {
    quote += string[i];
    result.push(quote);
  }
  return result;
}

console.log(wordBuilder("JavaScript"));
console.log(wordBuilder("Moon"));
console.log(wordBuilder("Stars"));
