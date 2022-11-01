const alunos = [
    { nome: "Fulano", sobrenome: "de Tal", idade: 25 },
    { nome: "Menino", sobrenome: "Ney", idade: 10 },
    { nome: "Jose", sobrenome: "de Num sei das quantas", idade: 13 },
    { nome: "Maria", sobrenome: "filha de seu Antonio", idade: 30 },
    { nome: "Joana", sobrenome: "filha de seu Antonio" , idade: 50},
];


//some()
//pelo menos um que atendo ao criterio de comparação -> true
const algumMaiores = alunos.some((aluno) => aluno.idade >= 18)
console.log(algumMaiores);

//every()
//todos os elementos de comparação tem que atender ao critério de comparação -> true
const todosMaiores = alunos.every((aluno) => aluno.idade >= 18)
console.log(todosMaiores);
