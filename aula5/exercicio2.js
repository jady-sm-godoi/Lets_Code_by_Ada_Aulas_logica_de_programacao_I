
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55,

const fibonacci = (posicao) => {
    let numero = 0;

    if(posicao === 2){
        numero = 1
    } else if(posicao > 2){
        numero = fibonacci(posicao - 1) + fibonacci(posicao - 2)
    }

    return numero;
}

console.log(fibonacci(3))

//*********************************

