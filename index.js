function findMissingOddNumber(array) {
  for (let index = 1; index < array.length; index++) {
    const element = array[index];
    const prevelement = array[index - 1];
    if (prevelement !== element - 2) {
      console.log();
      return element - 2;
    }
  }
}

console.log(findMissingOddNumber([5, 7, 9, 11, 15, 17]));
