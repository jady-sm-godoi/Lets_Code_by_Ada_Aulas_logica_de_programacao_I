import alunos from "./alunos.js"; //ES6
// const alunos = require('./alunos') //commonJS

console.log(alunos);

// const alunos = [
//     { nome: "Fulano", sobrenome: "de Tal", idade: 25 },
//     { nome: "Menino", sobrenome: "Ney", idade: 10 },
//     { nome: "Jose", sobrenome: "de Num sei das quantas", idade: 13 },
//     { nome: "Maria", sobrenome: "filha de seu Antonio", idade: 30 },
//     { nome: "Joana", sobrenome: "filha de seu Antonio" , idade: 50},
// ];

const nomes = ["Jady", "Aline", "Julia", "Paula", "Miqueias"]

const index = alunos.findIndex((aluno) => aluno.idade === 25)
const indexNovo = nomes.indexOf("Jady")

console.log(alunos.at(index));