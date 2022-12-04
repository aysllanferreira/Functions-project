function createEmail(fullName) {
  let mail = fullName.split(" ").join("_");
  return `${mail}@aulao.com`;
}
console.log(createEmail('rodrigo rocha'));
