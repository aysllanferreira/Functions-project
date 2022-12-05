function decodeLetter(letter) {
  // escreva seu codigo aqui
  console.log(letter);
  let separa = [];
  separa = letter.split('');
  for (let index = 0; index < separa.length; index += 1) {
    // eslint-disable-next-line default-case
    switch (separa[index]) {
      case '@':
        separa[index] = 'a';
        break;
      case '3':
        separa[index] = 'e';
        break;
      case '!':
        separa[index] = 'i';
        break;
      case '0':
        separa[index] = 'o';
        break;
      case 'Ʉ':
        separa[index] = 'u';
        break;
    }
  }
  separa = separa.join('');
  return separa;
}
console.log(decodeLetter('3Ʉ s3mpr3 v0Ʉ 3st@r @qɄ!'));
