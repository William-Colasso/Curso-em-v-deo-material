//Exercício de arrays

var array = [0,1,9,6,4,5,7,8,2,3]

for(let i in array){
    console.log(`Na posição ${i} temos o número ${array[i]}` )
}
console.log("Após a ordenação:")

array.sort()

for(let i in array){
    console.log(`Na posição ${i} temos o número ${array[i]}` )
}

console.log(`Tamanho do vetor: ${array.length}`)