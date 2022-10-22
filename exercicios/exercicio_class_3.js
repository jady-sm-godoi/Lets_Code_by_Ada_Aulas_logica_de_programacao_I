/**
Crie um código que recebe 3 notas de um aluno entre 0 e 10 e calcule a média.

- Se a média for menor que 5 exiba na tela que esse aluno está reprovado, caso a nota seja maior ou igual a 5 exiba que ele foi aprovado.
- Coloque validação se o usuário preencheu todas as notas e se elas estão entre 0-10, se uma dessas regras de validação não for cumprida, peça para ele começar novamente
 */


let nota1 = 1.0;
let nota2 = 2.3;
let nota3 = 9.0;
const notas = []

if(nota1 != null && nota1 >= 0 && nota1 <= 10){
  notas.push(nota1)
} 
if(nota2 != null && nota2 >= 0 && nota2 <= 10){
  notas.push(nota2)
}
if(nota3 != null && nota3 >= 0 && nota3 <= 10){
  notas.push(nota3)
}

const media = (nota1 + nota2 + nota3) / 3

if(notas.length < 3){
  console.log('Opa! Alguma nota não está certa. Por favor, comece novamente.')
} else if(media < 5){
  console.log(`Que pena! Aluno reprovado. A média das notas foi ${media.toFixed(2)}`)
} else {
  console.log(`Parabéns! Aluno aprovado. A média das notas foi ${media.toFixed(2)}`)
}

const x = prompt('Digite um número:');