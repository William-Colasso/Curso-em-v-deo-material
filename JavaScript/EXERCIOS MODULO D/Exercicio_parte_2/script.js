function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var status = document.getElementById('status')
    var data = new Date
    var hora = data.getHours()
    var minutos = data.getMinutes()
    if(minutos<10){
        msg.innerHTML = `A hora atual é: ${hora}:0${minutos} `
    }
    else{
        msg.innerHTML = `A hora atual é: ${hora}:${minutos} `
    }

    if(hora<12){
        img.inne= 'manha.png'
        document.body.style.transition = '2s'
        document.body.style.background = '#E7D0AE'
        status.innerHTML = 'BOM DIA'
    }
    else if(hora>=12 && hora<18){
        document.body.style.transition = '2s'
        status.innerHTML = 'BOA TARDE'
        document.body.style.background ='#608C9F'
        img.src = 'tarde.png'
    }
    else{
        document.body.style.transition = '2s'
        status.innerHTML = 'BOA NOITE'
        document.body.style.background = '#8C578F'
        img.src = 'noite.png'
    }
}


