
function sumEvenNumbers(numbers) {
  // escreva seu codigo aqui
  console.log(numbers);
  let soma = 0;
  for (let index of numbers) {
    if (index%2 != 0) {
      soma += index;
    }
  }
  return soma;
}
console.log(sumEvenNumbers([2, 2, 2, 2, 2, 3, 3, 3, 3, 3]));