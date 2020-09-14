function freeCoffeeCups(coffeeCups) {
  var freeCups = 0;
  var totalCups = 0;
  for (var i=0; i<coffeeCups; i++) {
    totalCups++;
  }
  var sum = totalCups / 6;
  freeCups = Math.trunc(sum);
  totalCups += freeCups;
  return totalCups;
}

console.log("Total cups:", freeCoffeeCups(13));
console.log("Total cups:", freeCoffeeCups(6));
console.log("Total cups:", freeCoffeeCups(5));
console.log("Total cups:", freeCoffeeCups(24));
