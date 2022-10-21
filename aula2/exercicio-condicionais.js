/* 
As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e você foi contratado para desenvolver um script que calculará os reajustes.

Faça um script que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:

    salários até R$ 1500,00 (incluindo) : aumento de 20%
    salários entre R$ 1500,00 e R$ 1700,00 : aumento de 15%
    salários entre R$ 1700,00 e R$ 2000,00 : aumento de 10%
    salários de R$ 2000,00 em diante : aumento de 5% 
    
Após o aumento ser realizado, informe na tela:
    o salário antes do reajuste;
    o percentual de aumento aplicado;
    o valor do aumento;
    o novo salário, após o aumento.
*/



let salario = '2100';
let novoSalario;

console.log('salario anterior: R$ ' + salario)

// if(salario <= 1500){
//   novoSalario = salario + salario * 0.2
//   console.log('percentual: 20%')
// } else if(salario > 1500 && salario <= 1700){
//   novoSalario = salario + salario * 0.15
//   console.log('percentual: 15%')
// } else if(salario > 1700 && salario <= 2000){
//   novoSalario = salario + salario * 0.1
//   console.log('percentual: 10%')
// } else if(salario > 2000){
//   novoSalario = salario + salario * 0.05
//   console.log('percentual: 5%')
// }

// console.log('valor do aumento: ' + (novoSalario - salario).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}))
// console.log('novo salario: ' + novoSalario.toLocaleString('en-us', {style: 'currency', currency: 'USD'}))


switch (true) {
  case salario <= 1500:
    novoSalario = salario + salario * 0.2
    console.log('percentual: 20%')
    break;
  case salario > 1500 && salario <= 1700:
    novoSalario = salario + salario * 0.15
    console.log('percentual: 15%')
    break;
  case salario > 1700 && salario <= 2000:
    novoSalario = salario + salario * 0.1
    console.log('percentual: 10%')
    break;
  default:
    novoSalario = salario + salario * 0.05
    console.log('percentual: 5%')
    break;
}

console.log('valor do aumento: ' + (novoSalario - salario).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}))
console.log('novo salario: ' + novoSalario.toLocaleString('en-us', {style: 'currency', currency: 'USD'}))