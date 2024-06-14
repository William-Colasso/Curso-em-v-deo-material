var metodo = 1
c = 0
//Inicializando Variáveis

if (metodo === 1) {
    console.log("Este é o metodo WHILE")
                                                //Laço de repetição WHILE
    while (c <= 10) {
        console.log(`Hello ${c}`)
        c++
    }



}

else if (metodo === 2) {
    console.log("Este é o metodo DO WHILE")
    do {
        console.log(`Hello ${c + 1}`)       //Laço de repetição DO WHILE
        c++
    }
    while (c <= 10)
}

else {
    console.log("Este é o metodo FOR")
    for (i = 0; i < 10; i++) {
                                            //Laço de repetição FOR

        console.log("Hello " + (i + 1))
    }

}