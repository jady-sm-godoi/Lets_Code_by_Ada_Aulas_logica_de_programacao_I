const alunos = [
  {nome: "Carlos", idade: 18, email: "email@email.com", nota1:7.5, nota2:9.5},
  {nome: "Julia", idade: 28, email: "email@email.com", nota1:10, nota2:8.5},
  {nome: "Pedro", idade: 19, email: "email@email.com", nota1:8, nota2:7},
  {nome: "Aline", idade: 25, email: "email@email.com", nota1:4, nota2:5.5},
  {nome: "Joana", idade: 32, email: "email@email.com", nota1:9, nota2:10},
  {nome: "Maisa", idade: 30, email: "email@email.com", nota1:6.5, nota2:4}
];

alunos.forEach((aluno)=>{
  console.log(aluno.nome)
})