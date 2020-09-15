function oddUpEvenDown(array) {
  var newArray = [];
  for (var i=0; i<array.length; i++) {
    if (array[i] % 2 === 1) {
      newArray.push(array[i] + 1);
    } else {
      newArray.push(array[i] - 1);
    }
  }
  console.log(newArray);
}

oddUpEvenDown([1, 2, 3, 4, 5]);
oddUpEvenDown([23, 15, 18, 14, 32]);
oddUpEvenDown([72, 212, 77, 124, 53]);
