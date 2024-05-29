var a = document.getElementById('myId')

a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)

function clicar(){
    a.style.background = 'green'
    a.style.color = 'white'
    a.innerHTML = 'CLICOU!'
}

function entrar(){
    a.style.background = 'blue'
    a.style.color = 'white'
    a.innerHTML = 'ENTRANDO...'
}

function sair(){
    a.style.background = 'red'
    a.style.color = 'black'
    a.innerHTML = 'VOLTA!'
}