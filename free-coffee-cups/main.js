function freeCoffeeCups(coffeeCups) {
  var freeCups = 0;
  var totalCups = 0;
  for (var i=0; i<coffeeCups; i++) {
    totalCups++;
  }
  var sum = totalCups / 6;
  freeCups = Math.trunc(sum);
  totalCups += freeCups;
  console.log(totalCups);
}

freeCoffeeCups(13);
freeCoffeeCups(6);
freeCoffeeCups(5);
freeCoffeeCups(24);
