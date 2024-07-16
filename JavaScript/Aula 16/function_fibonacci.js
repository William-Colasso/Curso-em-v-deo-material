function fibonacci (n=1){
    let fator = 1
    let fator2 = 0
    
    for(let i=0;i<n;i++){
        fator2 = fator+fator2
        fator = fator2 - fator
    }
    return fator2
}

console.log(fibonacci(10))