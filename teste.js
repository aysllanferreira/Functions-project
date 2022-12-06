function highestNumber(array) {
  const bigNumber = Math.max(...array);
  let counter = 0;

  for (let index = 0; index < array.length; index += 1) {
    if (bigNumber === array[index]) {
      counter += 1;
    }
  }
  return counter;
}
console.log(highestNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]));
