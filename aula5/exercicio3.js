const numero = 5

const somaRecursiva = (numero) => {
    if(numero === 0){
        return 0
    }
    return numero + somaRecursiva(numero -1)
}

console.log(somaRecursiva(numero));