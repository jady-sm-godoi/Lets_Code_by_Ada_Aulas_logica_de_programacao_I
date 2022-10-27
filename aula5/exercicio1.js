
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55,

const fibonacci = (posicao) => {
    let penultimo = 0
    let ultimo = 1
    let numero = 0;

    if(posicao === 1){
        numero = 1
    }

    for (let i = 1; i < posicao; i++) {
        numero = penultimo + ultimo
        penultimo = ultimo
        ultimo = numero
    }
    return numero;
}

console.log(fibonacci(10))