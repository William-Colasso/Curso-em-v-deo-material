function somar(){
    var tn1 = document.getElementById('num1')
    var tn2 = document.getElementById('num2')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 + n2
    var res = document.getElementById('res')
    res.innerHTML = `A soma entre o número ${n1} e ${n2} é <strong>${s}</strong>`
}