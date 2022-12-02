# Boas-vindas ao repositório do exercício de Funções Javascript!
Este projeto foi desenvolvido por Aysllan Ferreira, enquanto estudante na Trybe para servir como material de apoio para as pessoas estudantes se prepararem para o projeto Playground Functions.

# Orientações
	
<details>
<summary><strong>‼ Antes de começar a desenvolver</strong></summary><br />

1. Clone o repositório

	*  Use o comando: `git@github.com:aysllanferreira/Functions-project.git`

* Entre na pasta do repositório que você acabou de clonar:

	*  `cd Functions-project`

2. Instale as dependências

	* Para isso, use o seguinte comando: `npm install`

3. Para poder enviar seu Pull Request, caso queira um code review, siga o passo a passo. Nós temos o Evaluator no Pull Request que também testará seu projeto, mas isso é totalmente opicional, você pode rodar os testes localmente! 

  * Envie seu e-mail respondendo esse forms [aqui](https://forms.gle/2w2pNDEUAJeJqFEp8).
  * Aguarde que em breve te enviarei um e-mail solicitando pra colaborar com o repositório.

4. Crie uma branch a partir da branch `main`

- Verifique que você está na branch `main`
  - Exemplo: `git branch`
- Se você não estiver, mude para a branch `main`
  - Exemplo: `git checkout main`
- Agora crie uma branch à qual você vai submeter os `commits` do seu projeto:
  - Você deve criar uma branch no seguinte formato: `nome-sobrenome-nome-do-projeto`;
  - Exemplo: `git checkout -b paulo-gomes-functions-project`
  * E depois dê o push e crie seu Pull Request.

4. Importante!!!
 * Não mude o nome de nenhuma função!
	
</details>

<details>
<summary><strong>🎛 Linter</strong></summary><br />

Para simular um ambiente real de projeto, nós usaremos o [ESLint](https://eslint.org/) para fazer a análise do código.

Para identificar os erros localmente, use no seu terminal o comando:

```bash
npm run lint
```
Você pode também instalar o plugin do `ESLint` no `VSCode`. Para isso, basta fazer o download do [plugin `ESLint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) e instalá-lo.
	
</details>

<details>
<summary><strong>🛠 Testes</strong></summary><br />

Para os testes serem realizados com exito, certifique-se que a versão do seu node seja de fato a versão 16.

```bash
node -v
```

Caso você esteja utilizando outra versão, você pode usar este comando para alterar sua versão para 16.

```bash
nvm use 16
```

Todos os requisitos serão testados pelo Jest. Para rodar todos os testes, basta rodar no terminal o comando.

```bash
npm test
```
Caso queira testar apenas uma função rode o comando abaixo:

```bash
npm test tests/nome-do-arquivo
```


Por exemplo:

```bash
npm test tests/ex01.spec.js
```

</details>

<br>

### Boa sorte!!!
<br>

# Requisitos Obrigatórios

## 1. Implemente a função `sameValues`.

<details>
  <summary>
  Implemente a função <code>sameValues</code> para criar um programa que receba dois números como parâmetro e retorne se eles são maiores ou igual a 6.
  </summary> <br />

- Verifique se os dois valores passados por parâmetro são maiores ou igual a 6.
- Se sim, retorne a mensagem: true.
- Se nao, retorne a mensagem: false.

**O que será testado:**

- A função `sameValues`, caso passado por parâmetro números maiores ou iguais a 6, retornará true.

- A função `sameValues`, caso passado por parâmetro números menores ou iguais a 6, retornará false.

</details><br>

## 2. Implemente a função `convertToCm`.

<details>
  <summary>
  Implemente a função <code>convertToCm</code> com um programa que receba um valor em metros e o retorne convertido em centímetros.
  </summary> <br />

- O valor recebido por parâmetro será um valor em metros, converta ele para centímetros.

**O que será testado:**

- A função `convertToCm`, receberá um valor em metros e deverá retornar o mesmo valor convertido em centímetros.

</details><br>

## 3. Implemente a função `dobroTriploRaiz`.

<details>
  <summary>
  Implemente a função <code>dobroTriploRaiz</code> com um programa que receba um número e retorne seu dobro, triplo e raiz quadrada.
  </summary> <br />

- O retorno deve ser no formato abaixo especificado.
```bash
"O dobro de 2 é 4, o triplo é 6 e a raiz quadrada é 1.4142135623730951"
```

**O que será testado:**

- A função `dobroTriploRaiz`, deve retornar o dobro, triplo e a raiz quadrada do número passado por parâmetro no formato especificado.

</details><br>

## 4. Implemente a função `createEmail`.

<details>
  <summary>
  Implemente a função <code>createEmail</code> com uma função que receba um nome completo e retorne um e-mail
  </summary> <br />

- Crie uma função que receba um nome completo e retorne um e-mail no seguinte formato:
```bash
nome_sobrenome@aulao.com
```
- Todas as letras devem ser minúsculas.

**O que será testado:**

- A função `createEmail`, deve retornar o e-mail com o formato especificado dado um nome completo como parâmetro.

- A função `createEmail`, deve ter um retorno com todas as letras minúsculas.

</details><br>

## 5. Implemente a função `getPoints`.

<details>
  <summary>
  Implemente a função <code>getPoints</code> que pede a somatória de pontos de um time no torneio de Quadribol.
  </summary> <br />

- Na copa mundial de Quadribol, cada vitória vale 7 pontos, cada empate 3 pontos e derrota 0 pontos
- Escreva uma função que receba o numero de vitorias, empates e derrotas e retorne a pontuação final.

**O que será testado:**

- A função `getPoints`, deverá receber o valor final de pontos de um determinado time, de acordo com suas vitórias, empates e derrotas.

</details><br>

## 6. Implemente a função `sumMinMax`.

<details>
  <summary>
  Implemente a função <code>sumMinMax</code> que deve somar o valor do maior número do array passado por parâmetro com o menor número.
  </summary> <br />

- Deverá ser somado o valor do maior valor do array passado por parâmetro com o menor.
```bash
MAIOR NUMERO + MENOS NUMERO = RESULTADO.
```

**O que será testado:**

- A função `sumMinMax`, deverá retornar a soma do maior e menor valor do array passado por parâmetro.

</details><br>

## 7. Implemente a função `polarEncoder`.

<details>
  <summary>
  Implemente a função <code>polarEncoder</code> que codifica frase para o código Zenit Polar.
  </summary> <br />

- Quando a letra for Z, troque por P.
- Quando a letra for E, troque por O.
- Quando a letra for N, troque por L.
- Quando a letra for I, troque por A.
- Quando a letra for T, troque por R.

- Quando a letra for P, troque por Z.
- Quando a letra for O, troque por E.
- Quando a letra for L, troque por N.
- Quando a letra for A, troque por I.
- Quando a letra for R, troque por T.

```bash
Exemplo: vamos para o hexa brasil = vimes ziti e hoxi btisan
```
- O retorno final deve ser em letras minusculas.

**O que será testado:**

- A função `polarEncoder`, recebendo uma frase como parâmetro, deve substituir cada letra com o que foi especificado acima, criando assim um código de comunicação chamado Zenit Polar.

</details><br>

## 8. Implemente a função `encodeLetter e decodeLetter`.

<details>
  <summary>
  Implemente a função <code>encodeLetter</code> e <code>decodeLetter</code> que codifica e decodifica as vogais para o  código aulão.
  </summary> <br />

- A função `encodeLetter` deve codificar as vogais com a seguinte regra:

```bash
// Quando a letra for A, troque por @.
// Quando a letra for E, troque por 3.
// Quando a letra for I, troque por !.
// Quando a letra for O, troque por 0.
// Quando a letra for U, troque por Ʉ.
```

- A função `decodeLetter` deve codificar as vogais com a seguinte regra:

```bash
// Quando a letra for @, troque por a.
// Quando a letra for 3, troque por e.
// Quando a letra for !, troque por i.
// Quando a letra for 0, troque por o.
// Quando a letra for Ʉ, troque por u.
```

**O que será testado:**

- A função `encodeLetter`, deverá substituir as vogais da frase passada por parâmetro, pelo código especificado acima.

- A função `decodeLetter`, deverá substituir uma frase codificada para as vogais novamente.

</details><br>

## 9. Implemente a função `sumAndMultiplyBy2`.

<details>
  <summary>
  Implemente a função <code>sumAndMultiplyBy2</code> somando todos os valores de um array de números e retorne o valor multiplicado por 2
  </summary> <br />

- Deverá somar todos os números dentro de um array e retornar o valor multiplicado por 2.

**O que será testado:**

- A função `sumAndMultiplyBy2`, deverá somar todos os números dentro de um array e retornar o valor multiplicado por 2.

</details><br>

## 10. Implemente a função `sumEvenNumbers e sumOddNumbers`.

<details>
  <summary>
  Implemente a função <code>sumEvenNumbers e sumOddNumbers</code> que receba um array de números e retorne a soma dos números pares e depois dos ímpares.
  </summary> <br />

- A primeira função deve retornar somente a soma dos números pares.
- A segunda função deve retornar somente a soma dos números ímpares.

**O que será testado:**

- A função `sumEvenNumbers`, deverá retornar somente a soma dos números pares passados num array por parâmetro.

- A função `sumOddNumbers`, deverá retornar somente a soma dos números impares passados num array por parâmetro.

</details><br>

# Requisitos Bônus

## 1. Implemente a função `validateCPF`.

<details>
  <summary>
  Implemente a função <code>validateCPF</code> que recebe um CPF como parâmetro e retorne se ele é válido ou não.
  </summary> <br />

- Lembre-se que o argumento passado sera testado no seguinte formato:
```bash
[1,2,3,4,3,2,1,3,2,3,4]
```

- O retorno deve ser nesse formato:
```bash
CPF: XXX.XXX.XXX-XX" (Onde X é um número).
```

- Caso o CPF seja inválido, retorne:
```bash
CPF Inválido
```

**O que será testado:**

- A função `validateCPF`, receberá um array de números passados por parâmetro e deve retornar no formato especificado o CPF da pessoa caso for válido.

- A função `validateCPF`, caso contenha uma String dentro do Array passado por parâmetro, deve retornar CPF Inválido.

- A função `validateCPF`, caso contenha um número maior do que 9 dentro do array passado por parâmetro, deve retornar CPF Inválido.

- A função `validateCPF`, caso contenha um número menor do que 0 dentro do array passado por parâmetro, deve retornar CPF Inválido.

</details><br>

## 2. Implemente a função `salaryAdjustment`.

<details>
  <summary>
  Implemente a função <code>salaryAdjustment</code> que seja capaz de fazer o reajuste salarial de um funcionário.
  </summary> <br />

- O programa deve receber o salário atual do funcionário e o reajuste em porcentagem.
- Anualmente o funcionário recebe um reajuste anual fixo de `5%`.
- O programa deve retornar o salário atual, o reajuste e o novo salário em `5 anos`.

Exemplo de retorno:
 ```bash
Novo salário em 5 anos: R$ 1234.56
```

**O que será testado:**

- A função `salaryAdjustment`, deverá mostrar o valor atualizado do valor de um funcionário em 5 anos dado um valor passado por parametro.

</details><br>

## 3. Implemente a função `highestNumber e lowestNumber`.

<details>
  <summary>
  Implemente a função <code>highestNumber e lowestNumber</code> que calcule quantas vezes se repete o maior número e menor em um array
  </summary> <br />

- Crie um programa que calcule quantas vezes se repete o maior número em um array.
 ```bash
Exemplo: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10] => 4
```
- Crie um programa que receba um array de números e retorne o menor número.
 ```bash
Exemplo: [1, 2, 3, 4, 5, 1, 7, 8, 9, 10] => 2
```

**O que será testado:**

- A função `highestNumber`, deve mostrar quantas vezes se repete o maior número.
- A função `lowestNumber`, deve mostrar quantas vezes se repete o menor número.

</details><br>
