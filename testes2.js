//questão 3
// for(let i = 0; i <= 10; i++){
//     console.log(i);
// }

//questão 4
// let soma = 0

// for(let i = 0; i <= 100; i++){
//     soma += i
// }

// console.log(soma);

//questão 5
// for(let i = 1; i <= 1000; i++){
//     if(i % 2 === 0) {
//         console.log(i);
//     }
// }

//questão 6
// let controle = 0
// const primos = []

// for(let numerador = 1; numerador < 100; numerador++){
//     controle = 0
//     for(let denominador = 1; denominador <= numerador; denominador++){
//         if(numerador % denominador === 0) {
//             controle++
//         } 
//     }
//     if(controle == 2){
//         primos.push(numerador)
//     }
// }

// console.log(primos)

// const primos = [1]

// for (let n = 2; n < 100; n++) {
//     for (let d = 2; d <= n; d++) {
//         if(n % d === 0 && n != d){
//             break;
//         }else if(n == d){
//             primos.push(n)
//         }
//     }
    
// }

// console.log(primos);

//_______________________________

/*
Seja n um número natural, tal que n >= 2, 
chama-se fatorial de n o produto de todos os 
números naturais consecutivos de n até 1.

Implemente um programa (utilizando laços) 
que receba um número e retorne o fatorial 
desse número.
*/

// const fatorial = (num)=>{
//     if(num >= 2){
//         for(let index = num; index > 1; index--){
//             num = num * (index - 1)
//         }
//         return num
//     }
//     return 1
// }

// console.log(fatorial(20)); 

//5*4*3*2*1 = 120

//Implemente o programa pedido na questão anterior, 
//desta vez utilizando recursividade.

const fatorial = (num)=>{
    if(num >= 2){
        return num * fatorial(num -1)
    }
    return 1
}

console.log(fatorial(5));
