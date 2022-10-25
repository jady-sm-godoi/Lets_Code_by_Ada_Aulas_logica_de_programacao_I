const alunos = [
  {nome: "Carlos", idade: 18, email: "email@email.com", nota1:7.5, nota2:9.5},
  {nome: "Julia", idade: 28, email: "email@email.com", nota1:10, nota2:8.5},
  {nome: "Pedro", idade: 19, email: "email@email.com", nota1:8, nota2:7},
  {nome: "Aline", idade: 25, email: "email@email.com", nota1:4, nota2:5.5},
  {nome: "Joana", idade: 32, email: "email@email.com", nota1:9, nota2:10},
  {nome: "Maisa", idade: 30, email: "email@email.com", nota1:6.5, nota2:4}
];

// for (const {nome, nota1, nota2} of alunos) {
//   const media = (nota1 + nota2) / 2
//   if(media >= 7){
//     console.log(`${nome} teve média ${media}, então está aprovado`)
//   } else {
//     console.log(`${nome} teve média ${media}, então está reprovado`)
//   }
// }

for (const {nome, nota1, nota2} of alunos) {
  // const media = calcularMedia([nota1, nota2])
  const media = calcularMedia(Array.of(nota1, nota2))
  const resultado = obterResultado(nome, media);
  console.log(resultado)
}

//function tomam posição global na aplicação
// function calcularMedia(n1, n2){
//   return (n1 + n2) / 2
// }
function calcularMedia(notas){
  let somaNotas = 0;
  notas.forEach(nota => {
    somaNotas += nota;
  });
    return (somaNotas) / notas.length;
  }

function obterResultado(nome, media){
  if(media >= 7){
     return `${nome} teve média ${media}, então está aprovado`
  } else {
    return `${nome} teve média ${media}, então está reprovado`
  }
}

