//array recebendo no final um valor aleatório entre 0 e 100 até que seu tamanha seja de 20 itens

const array = [5, 4, 3.5, 4, "banana", null, undefined, "chuva"];
console.log(array)


while(array.length < 20){
  array[array.length] = Math.round(Math.random()*100)
}
console.log(array);
//array[array.length] -> uma forma de array.push(valor)
//*******************************************************************

//Como percorrer uma matriz e capturar cada um dos seus valores
//usamos um laço for dentro de outro. 
//O primeiro percorre as linhas e o segundo as colunas.

const tabela = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for(let i = 0; i < tabela.length; i++){
  for(let j = 0; j < tabela[i].length; j++){
    console.log(tabela[i][j]);
}
}
//*************************************************************
//PARA COPIAR UM ARRAY, USE O SPREAD OPERATOR (...)
const arrA = [1, 2, 3, 4, 5];
const arrB = [...arrA];

const arrC = [1, 2, 3, 4, 5];
const arrD = [...arrA, 6, 7, 8, 9, 10];

//DESESTRUTURAÇÃO DE ARRAY
const arrG = [1, 2, 3];
const [a, b, c] = arrG;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

//DESESTRUTURAÇÃO COM SPREAD OPERATOR
const arrM = [1, 2, 3, 4, 5];
const [primeiro, segundo, terceiro, ...resto] = arrM;

console.log(primeiro); // 1
console.log(segundo);  // 2
console.log(terceiro); // 3
console.log(resto);    // [4, 5]