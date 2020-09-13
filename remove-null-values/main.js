function removeNullValues(array) {
  var newArray = [];
  for(var i=0; i<array.length; i++) {
    if (array[i] !== null) {
      newArray.push(array[i]);
    }
  }
  console.log(newArray);
}

removeNullValues([3, 5, null, null, 87, "hello", "goodbye"]);
removeNullValues([true, null, false, {}, null, 43, "node"]);
removeNullValues([null, null, null, 7, null, "eight"]);
