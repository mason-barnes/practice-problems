function isSantaComing(dateObject) {
  var day = dateObject.getDate();
  var month = dateObject.getMonth();
  if (month === 11 && day == 24) {
    console.log(true)
  } else {
    console.log(false);
  }
}

isSantaComing(new Date(2001, 11, 24));
isSantaComing(new Date(2018, 7, 4));
isSantaComing(new Date(1995, 11, 23, 23, 59, 59));
