function gerarMatriz() {
    let n = Number(document.getElementById("tamanho").value);
    let matriz = [];
    for (let i = 0; i < n; i++) {

        matriz.push([]);
        for (let j = 0; j < n; j++) {
        if (i === j) {

          matriz[i][j] = 1;

            } else {

                matriz[i][j] = 0;
            }
        }
    }

    let texto = "";

    for (let i = 0; i < n; i++) {

        for (let j = 0; j < n; j++) {

            texto += matriz[i][j] + " ";
        }

        texto += "<br>";
    }

    document.getElementById("resultado").innerHTML = texto;
}