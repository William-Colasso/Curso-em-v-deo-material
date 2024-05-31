
function calcular(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var idade = ano - Number(fano.value)
    var img = document.createElement('img')
    var fsex = document.getElementsByName('genero')
    var genero = ''
    var resu = document.getElementById('res')
    img.setAttribute('id', 'foto')


    if(fsex[0].checked){
        genero = ' homem'
        if(idade<0){
            //Esperma
            img.setAttribute('src', 'esperma.png')
        }
        else if(idade<12){
            //Moleque
            img.setAttribute('src', 'moleque.png')
        }
        else if(idade<18){
            //Adolescente pia
            img.setAttribute('src', 'adolescente_homem.png')
        }
        else if(idade<60){
            //Adulto
            img.setAttribute('src', 'homem.png')
        }
        else if(idade<100){
            //Idoso
            img.setAttribute('src', 'velho.png')
        }
        else{
            //Esqueleto
            img.setAttribute('src', 'esqueleto.png')
        }
    }else{
        genero='a mulher'
        if(idade<0){
            //Esperma
            img.setAttribute('src', 'esperma.png')
        }
        else if(idade<12){
            //Moleca
            img.setAttribute('src', 'garota.png')
        }
        else if(idade<18){
            //Adolescente guria
            img.setAttribute('src', 'adolescente_mulher.png')
        }
        else if(idade<60){
            //Adulta
            img.setAttribute('src', 'mulher.png')
        }
        else if(idade<100){
            //Idosa
            img.setAttribute('src', 'velha.png')
        }
        else{
            //Esqueleto
            img.setAttribute('src', 'esqueleto.png')
        }

    }
    
    resu.innerHTML = `Detectamos um${genero} com ${idade} anos de idade`
    resu.appendChild(img)
}