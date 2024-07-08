var data = new Date
var segundos = data.getSeconds

function colorir(){

    document.body.style.transition= '2s'
    document.body.style.background = `rgb(${getNumeroInteiroAleatorio(0,255)},${getNumeroInteiroAleatorio(0,255)},${getNumeroInteiroAleatorio(0,255)})`
}


document.addEventListener('mousemove', function(event) {
    setTimeout(() => {
        colorir()
    }, 4000)
});

function getNumeroInteiroAleatorio(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; // O máximo e o mínimo são inclusivos
}


function calcular(){
    var inicio = document.getElementById('inicio').value;
    var inicio2 = Number(inicio); // Conversão para número
    var final = Number(document.getElementById('final').value); 
    var passo = Number(document.getElementById('passos').value); 
    var resultado = document.getElementById('resultado');
    var auxi = "";
    

    if (passo <= 0) {
        alert("O passo não pode ser zero.");
        return;
    }
    

    else{
        for (let i = inicio2; i < final; i += passo) {
            auxi = auxi + String(i) + "👉"
        }
    }
    

    auxi = auxi + "🏁"
    resultado.innerHTML = auxi
}