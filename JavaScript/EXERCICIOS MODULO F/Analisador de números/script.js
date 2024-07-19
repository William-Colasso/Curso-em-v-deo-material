
var resultado = document.getElementById("resultado")
var saida = document.getElementById("saida")
var array = []
var resultados = ""
function inserir(){
    var input = Number(document.getElementById("input").value)

    if(input<=0 || input>=101){
        alert("Parametros inválidos!")
    }else if(input != null){
        for(let i=0; i<100;i++){

            if(input==array[array.indexOf(input)]){
                alert("Não é possivel colocar um valor já existente")
                break
            }else{
                array.push(input)
                resultados+="O número "+`${input} `+" foi adicionado!"+"\n"
                break
            }
            
        }
    } 
    saida.innerHTML = resultados
    resultado.innerText = ""
}

function estatisticas(){
    var auxi = ""

    auxi += maior(array)
    auxi += menor(array)
    auxi += tamanho(array)
    auxi += media(array)
    auxi +=soma(array)
    resultado.innerText = auxi
}

function maior(vetor){
    let auxi2 = ""
    let auxi3 = -1
    for(let i = 0; i<vetor.length;i++){
        if(vetor[i]>auxi3){
            auxi3 = vetor[i]
        }
    }
    auxi2 = "O maior número é: "+ String(auxi3)+ "\n"
    return auxi2

}

function menor(vetor){
    let auxi2 = ""
    let auxi3 = 101
    for(let i = 0; i<vetor.length;i++){
        if(vetor[i]<auxi3){
            auxi3 = vetor[i]
        }
    }
    auxi2 = "O menor número é: "+ String(auxi3)+ "\n"
    return auxi2
}

function media(vetor){
    let auxi2 = ""
    let auxi3 = 0
    for(let i=0; i<vetor.length;i++){
        auxi3+=vetor[i]
    }

    auxi3 = auxi3/vetor.length
    auxi2 = "A media dos números é: "+String(auxi3)+"\n"

    return auxi2
}

function tamanho(vetor){
    let auxi2 = ""

    auxi2 += "O tamanho do vetor é(quantidade de números): "+String(vetor.length)+"\n"

    return auxi2
}

function soma(vetor){
let auxi2 = ""
let auxi3 = 0
for(let i=0; i<vetor.length;i++){
    auxi3+=vetor[i]
}
    auxi2+= "A soma desses numeros é igual a: "+String(auxi3)+"\n"
    return auxi2
}
