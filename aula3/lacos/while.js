// // let contador = 0;
// let contador = 301;

// // while(contador <= 300){
// //   console.log(contador); 
// //   contador++
// // }

// do {
//   console.log(contador); 
//   contador++
// } while (contador <= 300);

//Você tem um array que está vazio, e precisa preencher o mesmo com 5 numeros aleatórios de 0 a 10

// Math.round(Math.random() * 10)

const lista = [];
let controle = 0

while (controle < 5) {
  lista.push(Math.round(Math.random() * 10))
  controle++
}
console.log(lista)
//____________________________________
//resposta de Miqueia
//os números não se repetem!!
const aleatorios = [];

while(aleatorios.length < 5) {
    let aleatorio = Math.round(Math.random() * 10);

    if(aleatorios.indexOf(aleatorio) === -1) {
        aleatorios.push(aleatorio)
    }
}

console.log(aleatorios)