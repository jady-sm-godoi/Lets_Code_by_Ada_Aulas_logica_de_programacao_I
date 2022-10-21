/*
Escreva um código que simule uma calculadora básica, provendo a leitura de um valor, seguido da operação(+, -, * e /) e do segundo valor.
*/

let firstNumber = 2;
let operator = '/';
let secondNumber = 5;

if(operator === '+'){
  console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`)
} else if(operator === '-'){
  console.log(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`)
} else if(operator === '*'){
  console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`)
} else if(operator === '/'){
  console.log(`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`)
}

