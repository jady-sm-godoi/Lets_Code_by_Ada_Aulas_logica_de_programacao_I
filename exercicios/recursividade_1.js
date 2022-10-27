const fatorial = (num)=>{
    if(num >= 2){
        for(let index = num; index > 1; index--){
            num = num * (index - 1)
        }
        return num
    }
    return 1
}

console.log(fatorial(20)); 