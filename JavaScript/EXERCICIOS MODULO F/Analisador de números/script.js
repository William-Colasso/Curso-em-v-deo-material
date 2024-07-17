
var resultado = document.getElementById("resultado")
var saida = document.getElementById("saida")
var array = []
var resultados = ""
function inserir(){
    var input = Number(document.getElementById("input").value)

    for(let i=0; i<100;i++){
        if(input===array[i]){
            alert("Não é possivel colocar um valor já existente")
            break
        }else{
            array.push(input)
            resultados+=`O número ${input} foi adicionado!`+"\n"
            break
        }
        
    }
    
    saida.innerText = resultados
}