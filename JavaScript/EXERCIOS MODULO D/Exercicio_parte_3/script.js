var ano = document.getElementById('nasceu')
ano = Number(ano.value)
var foto = document.getElementById('foto')
var mullher
var homem
var idade = 2024-ano

function calcular(){
    alert(ano)
    if(homem){
        if(ano<18){
            foto.src = 'adolescente_homem.png'
        }
    }
}

function decidir(){
     mullher = true
     homem = false
}

function decidir2(){
    mullher = false
    homem = true
}