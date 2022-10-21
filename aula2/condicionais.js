const diaClaro = false;
const tenhoDinheiro = false;


// if(diaClaro && tenhoDinheiro){
//   console.log('Oba!! Vou para a praia.')
// } else {
//   console.log('Deu ruim!! Hj não tem praia.')
// }

// if(diaClaro || tenhoDinheiro){
//   console.log('Oba!! Vou para a praia.')
// } else {
//   console.log('Deu ruim!! Hj não tem praia.')
// }

if(!diaClaro){
  // console.log('Hj fico em casa. Vou assitir um filme!')
} 

const idade = '18';

// if(idade >= 18){
//   console.log('usuário é maior de idade')
// } else {
//   console.log('usuário não é maior de idade')
// }

// if(idade === 18){
//   console.log('Legal! Agora vc é de maior!')
// }

//CONVERTENDO STRING PARA NUMBER
let soma = idade + 35; //1835
// // soma = parseInt(idade) + 35; //53
// // soma = Number(idade) + 35; //53
// soma = +idade + 35; //53
// console.log(soma);

let subtracao = idade - 5;
// console.log(subtracao)


//CONVERTENDO NUMBER PARA STRING
let number = 1000;
// console.log(typeof number)

// number = '' + 1000;
number = number.toString();
// console.log(typeof number)

const diaDaSemana = 5;

// switch (diaDaSemana) {
//   case 0:
//     console.log('domingo')
//     break;
//   case 1:
//       console.log('segunda')
//       break;
//   case 2:
//     console.log('terca')
//     break;
//   case 3:
//     console.log('quarta')
//     break;
//   case 4:
//     console.log('quinta')
//     break;
//   case 5:
//     console.log('sexta')
//     break;
//   case 6:
//     console.log('sabado')
//     break;
//   default:
//     console.log('dia inválido')
//     break;
// }

//OPERADOR TERNÁRIO

// if(diaClaro && tenhoDinheiro){
//   console.log('Oba!! Vou para a praia.')
// } else {
//   console.log('Deu ruim!! Hj não tem praia.')
// }

// diaClaro && tenhoDinheiro 
// ? console.log('Oba!! Vou para a praia.') 
// : console.log('Deu ruim!! Hj não tem praia.')

//COALESCÊNCIA

let user;
user = '' //valor falseavel, é como se não tivesse valor
user = 'Jady'

let username = user || 'Usuário sem nome'
console.log('username:', username)

let saldo;
saldo = 0 //valor falseavel

// console.log(saldo || 'houve um erro')
console.log(saldo ?? 'Houve um erro!!!')
console.log(saldo ? saldo : 'Houve um erro') //igual o com ||