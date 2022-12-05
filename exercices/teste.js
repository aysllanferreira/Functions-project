
function polarEncoder(sentence) {
    // escreva seu codigo aqui
    let separar = [];
    separar = sentence.split('');
    for (let index = 0; index < separar.length; index += 1){
       switch(separar[index]){
        case 'z':
            separar[index] = 'p';
        break;
        case 'e':
            separar[index] = 'o';
        break;
        case 'n':
            separar[index] = 'l';
        break;
        case 'i':
            separar[index] = 'a';
        break;
        case 't':
            separar[index] = 'r';
        break;
        case 'p':
            separar[index] = 'z';
        break;
        case 'o':
            separar[index] = 'e';
        break;
        case 'l':
            separar[index] = 'n';
        break;
        case 'a':
            separar[index] = 'i';
        break;
        case 'r':
            separar[index] = 't';
        break;
       }
    }
    separar = separar.join('');
    return separar.toString().toLowerCase('');
  }
  console.log(polarEncoder('Vamos para o hexa brasil'));