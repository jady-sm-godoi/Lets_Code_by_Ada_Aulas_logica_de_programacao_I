const matriz = [
  [15, 12, 58, 98],
  [42, 57, 36, 1],
  [21, 87, 6, 99]
];

// console.log(matriz[1][2])
const turma = "906 - OIDevs"
const aluno = prompt("Digite o nome do aluno: ")

document.write(`
  <h1>Exibindo uma matriz para a turam ${turma}</h1>
  <h2>Olá, ${aluno}</h2>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ipsa minima iusto quas laborum dignissimos dolor quidem nostrum nesciunt praesentium reiciendis tempore animi cupiditate nihil similique quo, earum libero ullam!</p>
`);

for (let linha = 0; linha < matriz.length; linha++) {
  console.log(matriz[linha]);
  for (let coluna = 0; coluna < matriz[linha].length; coluna++) {
    // console.log(matriz[linha][coluna]);
    document.write(matriz[linha][coluna] + ' | ')
  }
  document.write("<br />")
}