let amigo = {nome:"will", idade:15, peso:90, emagrecer(p=0){
    this.peso -= p
}}
amigo.emagrecer(10)
console.log(("O peso do will é: "+amigo.peso))