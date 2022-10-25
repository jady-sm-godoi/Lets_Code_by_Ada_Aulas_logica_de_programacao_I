/*
  Faça um programa que recebe três números do usuário, e identifica o maior através de uma função e o menor número através de outra função.
*/

// const numero1 = 90;
// const numero2 = 101;
// const numero3 = 3;

const lista = [12, 78, 17];

function maiorNumero(n1, n2, n3){
  return Math.max(n1, n2, n3) 
}

// function menorNumero(n1, n2, n3){
//   return Math.min(n1, n2, n3)
// }

// function menorNumero(array){
//   return Math.min(...array)
// }

function menorNumero(){
  return Math.min(...arguments)
}

console.log(maiorNumero(lista[0], lista[1], lista[2]))
console.log(menorNumero(...lista))