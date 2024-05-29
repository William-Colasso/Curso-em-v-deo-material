

function calc(){
    var vel = window.document.querySelector('input#txtvel')
    var num = Number(vel.value)

    var resultado = document.getElementById('resultado')
    if(num>80){
        resultado.innerHTML = 'MULTADO!'
        resultado.style.background = 'red'
        resultado.style.transition = '0.3s'
        resultado.style.borderRadius = '0px'
    }
    else{
        resultado.innerHTML = 'Dentro'
        resultado.style.background = 'green'
        resultado.style.transition = '0.3s'
        resultado.style.borderRadius = '30px'
    }

}
/*color: white;
    font-size: 25px;
    width: 200px;
    line-height: 200px;
    text-align: center;*/