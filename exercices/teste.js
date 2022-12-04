function createEmail(fullName) {
    // escreva seu codigo aqui
    let email = [];
    email = fullName.toLowerCase().split(' ').join('_');

    return `${email}@aulao.com`;
  }

  console.log(createEmail('Charles Rutemberg'));
