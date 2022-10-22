/*
Escreva um código que imprima um mês de acordo com o número digitado pelo usuário.
*/


//entrada do usuário em string. Pode ser qualquer valor!
const userNumber = prompt('Escreva um número de 1 a 12 e veja qual mês do ano corresponde: ')

//transformando a entrada do usuário em número inteiro, se possível
const monthNumber = parseInt(userNumber)

const turma = "906 - OIDevs"
let resultado;

switch (monthNumber) {
  case 1:
    resultado = 'Janeiro'
    break;
  case 2:
    resultado = 'Fevereiro'
    break;
  case 3:
    resultado = 'Março'
    break;
  case 4:
    resultado = 'Abril'
    break;
  case 5:
    resultado = 'Maio'
    break;
  case 6:
    resultado = 'Junho'
    break;
  case 7:
    resultado = 'Julho'
    break;
  case 8:
    resultado = 'Agosto'
    break;
  case 9:
    resultado = 'Setembro'
    break;
  case 10:
    resultado = 'Outubro'
    break;
  case 11:
    resultado = 'Novembro'
    break;
  case 12:
    resultado = 'Dezembro'
    break;
  default:
    resultado = 'Ops! Deu algo errado!'
    break;
}

document.write(`
  <h1>Exercício 1 - turma ${turma}</h1>
  <h2>O mês que corresponde ao número digitado é:  ${resultado}</h2>
`);