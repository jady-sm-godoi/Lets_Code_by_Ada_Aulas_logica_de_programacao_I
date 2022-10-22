/*
Escreva um código que simule uma calculadora básica, provendo a leitura de um valor, seguido da operação(+, -, * e /) e do segundo valor.
*/

const turma = "906 - OIDevs"

let firstEnter = prompt('Digite o primeiro número:');
let operator = prompt('Digite o sinal da operação (+ - * ou /');
let secondEnter = prompt('Digite o segundo número:');

const firstNumber = parseFloat(firstEnter);
const secondNumber = parseFloat(secondEnter); 
let resultado;


if(operator === '+'){
  resultado = firstNumber + secondNumber
} else if(operator === '-'){
  resultado = firstNumber - secondNumber
} else if(operator === '*'){
  resultado = firstNumber * secondNumber
} else if(operator === '/'){
  resultado = firstNumber / secondNumber
}

document.write(`
  <h1>Exercício 2 - turma ${turma}</h1>
  <h2>${firstNumber} ${operator} ${secondNumber} = ${resultado}</h2>
`);

