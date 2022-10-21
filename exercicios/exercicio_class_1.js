/*
Escreva um código que imprima um mês de acordo com o número digitado pelo usuário.
*/

//entrada do usuário em string. Pode ser qualquer valor!
let userNumber = '5';

//transformando a entrada do usuário em número inteiro, se possível
const monthNumber = parseInt(userNumber)

console.log(`o número escolhido foi: ${monthNumber}. Este número corresponde ao mês de ...`)

switch (monthNumber) {
  case 1:
    console.log('janeiro');
    break;
  case 2:
    console.log('fevereiro');
    break;
  case 3:
    console.log('março');
    break;
  case 4:
    console.log('abril');
    break;
  case 5:
    console.log('maio');
    break;
  case 6:
    console.log('junho');
    break;
  case 7:
    console.log('julho');
    break;
  case 8:
    console.log('agosto');
    break;
  case 9:
    console.log('setembro');
    break;
  case 10:
    console.log('outubro');
    break;
  case 11:
    console.log('novembro');
    break;
  case 12:
    console.log('dezembro');;
    break;
  default:
    console.log('Ops! Não entendi! Qual mês você quer? Por favor, digite um número d 1 a 12.')
    break;
}