function zipCodeValidator(zipToValidate) {
    if (zipToValidate.length !== 5) {
      return 'invalid zip code';
    } else if (isNaN(zipToValidate)) {
      return 'invalid zip code';
    }
  return 'valid zip code';
}

console.log(zipCodeValidator('21594'));
console.log(zipCodeValidator('3Eds32'));
console.log(zipCodeValidator('9123465'));
