function fatorial(n){
    fator = 1

    for(let i =n;i>1;i--){
        fator*=i
    }
    return fator
}

console.log(fatorial(16))