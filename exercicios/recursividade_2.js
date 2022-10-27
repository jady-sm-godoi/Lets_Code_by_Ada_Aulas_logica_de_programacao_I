const fatorial = (num)=>{
    if(num >= 2){
        return num * fatorial(num -1)
    }
    return 1
}

console.log(fatorial(5));