function validateCPF(cpf) {
  for (let index = 0; index < cpf.length; index += 1) {
    if (cpf[index] < 0 || cpf[index] > 9 || typeof cpf[index] === 'string' || cpf.length > 11) {
      return 'CPF Inválido';
    }
  }
  const cpfvalido = `CPF: ${cpf.slice(0, 3).join('')}.${cpf.slice(3, 6).join('')}.${cpf.slice(6, 9).join('')}-${cpf.slice(-2).join('')}`;
  return cpfvalido;
}
console.log(validateCPF([1, 2, 3, 4, 3, 2, 1, 3, 2, 5, 4]));
