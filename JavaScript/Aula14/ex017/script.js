function calcular() {
  var numero = Number(document.getElementById("entrada_numero").value);
  var resultado = document.getElementById("resultado");
  var texto = "";
  if (numero == 0) {
    alert("Coloque algum número para calcular!");
  } else {
    var tabuada = [];

    for (let i = 1; i < 11; i++) {
      tabuada[i] = `${numero}x${i}` + "=" + `${i * numero}` + "\n";
      texto += tabuada[i];
    }
    resultado.innerHTML = texto
  }
}
