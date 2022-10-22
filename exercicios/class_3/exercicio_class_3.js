/**
Crie um código que recebe 3 notas de um aluno entre 0 e 10 e calcule a média.

- Se a média for menor que 5 exiba na tela que esse aluno está reprovado, caso a nota seja maior ou igual a 5 exiba que ele foi aprovado.
- Coloque validação se o usuário preencheu todas as notas e se elas estão entre 0-10, se uma dessas regras de validação não for cumprida, peça para ele começar novamente
 */

const turma = "906 - OIDevs"

let primeiraNota = prompt('Digite a primeiro nota do aluno:');
let segundaNota = prompt('Digite a segunda nota do aluno:');
let terceiraNota = prompt('Digite a terceira nota do aluno:');

const nota1 = parseFloat(primeiraNota);
const nota2 = parseFloat(segundaNota);
const nota3 = parseFloat(terceiraNota);
const notas = []
let resultado;

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
  resultado = 'Opa! Alguma nota não está certa. Por favor, comece novamente.'
} else if(media < 5){
  resultado = `Aluno reprovado! A média das notas foi ${media.toFixed(2)}`
} else {
  resultado = `Aluno aprovado! A média das notas foi ${media.toFixed(2)}`
}

document.write(`
  <h1>Exercício 2 - turma ${turma}</h1>
  <h2>${resultado}</h2>
`);