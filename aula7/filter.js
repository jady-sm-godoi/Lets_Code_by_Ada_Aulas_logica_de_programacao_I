//filter recebe uma função

const alunos = [
    { nome: "Fulano", sobrenome: "de Tal", idade: 25 },
    { nome: "Menino", sobrenome: "Ney", idade: 10 },
    { nome: "Jose", sobrenome: "de Num sei das quantas", idade: 13 },
    { nome: "Maria", sobrenome: "filha de seu Antonio", idade: 30 },
    { nome: "Joana", sobrenome: "filha de seu Antonio" },
    {}
];

// const maioresDeIdade = alunos.filter((aluno)=>{
//     return aluno.idade >= 18
// })

const maioresDeIdade = alunos.filter(({idade})=>idade >= 18)
const comIdade = alunos.filter(({idade})=>idade)
const semIdade = alunos.filter(({idade})=>!idade)

// console.log(maioresDeIdade);
// console.log(comIdade);
// console.log(semIdade);
