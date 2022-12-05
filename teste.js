function polarEncoder(sentence) {
  const sentLow = sentence.toLowerCase();
  const arrayZenit = sentLow.split('');
  let zenitCod = '';

  for (let index = 0; index < arrayZenit.length; index += 1) {
    if (arrayZenit[index] === 'z') {
      zenitCod += 'p';
    } else if (arrayZenit[index] === 'e') {
      zenitCod += 'o';
    } else if (arrayZenit[index] === 'n') {
      zenitCod += 'l';
    } else if (arrayZenit[index] === 'i') {
      zenitCod += 'a';
    } else if (arrayZenit[index] === 't') {
      zenitCod += 'r';
    } else if (arrayZenit[index] === 'p') {
      zenitCod += 'z';
    } else if (arrayZenit[index] === 'o') {
      zenitCod += 'e';
    } else if (arrayZenit[index] === 'l') {
      zenitCod += 'n';
    } else if (arrayZenit[index] === 'a') {
      zenitCod += 'i';
    } else if (arrayZenit[index] === 'r') {
      zenitCod += 't';
    } else {
      zenitCod += arrayZenit[index];
    }
  }
  return zenitCod;
}

console.log(polarEncoder('vamos para o hexa brasil'));
