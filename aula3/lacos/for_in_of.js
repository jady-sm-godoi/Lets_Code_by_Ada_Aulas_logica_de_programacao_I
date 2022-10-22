// const alunos = [
//     {nome: "Carlos", idade: 18},
//     {nome: "Julia", idade: 28},
//     {nome: "Pedro", idade: 19},
//     {nome: "Aline", idade: 25},
//     {nome: "Joana", idade: 32},
//     {nome: "Maisa", idade: 30},
//   ]

  // //for in --> traz os índices dos elementos: aluno = índices
  // for(const aluno in alunos){
  //   console.log(`O aluno ${alunos[aluno].nome} tem ${alunos[aluno].idade} anos`)
  // }

  // //for of --> traz os objetos do array: aluno = cada ítem
  // for(const aluno of alunos){
  //   console.log(`O aluno ${aluno.nome} tem ${aluno.idade} anos`)
  // }

  // //como o item é um objeto com propriedades, dá pra dessestruturar nas propriedades.
  // for(const {nome, idade} of alunos){
  //   console.log(`O aluno ${nome} tem ${idade} anos`)
  // }

  //_________________________________________________________

//EXERCICIO
//Você é um professor, e tem uma lista com alguns alunos(sendo objetos),
//onde as tem-se, nome, nota 1 e nota2. Use o for para percorer esse array
//e calcular a média das duas notas de cada aluno
  const alunos = [
    {nome: "Carlos", idade: 18, email: "email@email.com", nota1:7.5, nota2:9.5},
    {nome: "Julia", idade: 28, email: "email@email.com", nota1:10, nota2:8.5},
    {nome: "Pedro", idade: 19, email: "email@email.com", nota1:8, nota2:7},
    {nome: "Aline", idade: 25, email: "email@email.com", nota1:4, nota2:5.5},
    {nome: "Joana", idade: 32, email: "email@email.com", nota1:9, nota2:10},
    {nome: "Maisa", idade: 30, email: "email@email.com", nota1:6.5, nota2:4}
];

for({nome, nota1, nota2} of alunos){
  let media = (nota1 + nota2) / 2
  console.log(`A média de ${nome} é ${media}`)
}

//desestruturação com alias
for({nome: n, nota1: prova, nota2: trabalho} of alunos){
  let media = (prova + trabalho) / 2
  console.log(`A média de ${n} é ${media}`)
}

