// const numeros = [1, 2, 3, 4, 5]

// const soma = numeros.reduce((acc, cur, index)=>{
//     console.log('acumulado', acc);
//     console.log('atual', cur);
//     console.log('indice', index);
//     return acc + cur
// })

// console.log(soma);

const alunos = [
    { nome: "Fulano", sobrenome: "de Tal", idade: 25 },
    { nome: "Menino", sobrenome: "Ney", idade: 10 },
    { nome: "Jose", sobrenome: "de Num sei das quantas", idade: 13 },
    { nome: "Maria", sobrenome: "filha de seu Antonio", idade: 30 },
    { nome: "Joana", sobrenome: "filha de seu Antonio" , idade: 50},
];

// const somaIdade = alunos.reduce((acc, {idade: curr}) => {
//     return acc + curr
// }, 0)

const somaIdade = alunos.reduce((acc, {idade}) => acc + idade, 0)

console.log('resultado', somaIdade);