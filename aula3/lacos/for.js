//contador de passos

// for(var passos = 0; passos <= 3000; passos+=100){
//   console.log(`caminhando: ${passos}`)
// }

// const alunos = [
//   {nome: "Carlos", idade: 18},
//   {nome: "Julia", idade: 28},
//   {nome: "Pedro", idade: 19},
//   {nome: "Aline", idade: 25},
//   {nome: "Joana", idade: 32},
//   {nome: "Maisa", idade: 30},
// ]

// for(let index = 0; index < alunos.length; index++){
//   console.log(`nome: ${alunos[index].nome} tem ${alunos[index].idade}`)
// }

//laço for infinito: NÃO RODAR!!!!!
// for(;;){
//   console.log('infinito');
// }

//******************************************** */
/**
 // Crie um algoritmo usando o for que leia uma lista. 
// Mostre no console apenas os números pares. 
// Esta lista deve ser assim: [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Lista -> [1,2,3,4,5,6,7,8,9]
// [2, 4, 6,8] -> pares
// [1,3,5,7,9] -> impares
 */

const numeros = [1,2,3,4,5,6,7,8,9]
const pares = []
const impares = []

for(let i = 0; i < numeros.length; i++){
  // if(numeros[i] % 2 == 0) {
  //   pares.push(numeros[i]);
  // } else {
  //   impares.push(numeros[i])
  // }
  numeros[i] % 2 == 0 ? pares.push(numeros[i]) : impares.push(numeros[i])
}
console.log(pares)
console.log(impares)