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