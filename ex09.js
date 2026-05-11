// Matriz original 2x3
let matrizOriginal = [
    [1, 2, 3],
    [4, 5, 6]
];

function transporMatriz() {

    let matrizTransposta = [];
    let texto = "";

    // Cria a matriz transposta
    for (let j = 0; j < 3; j++) {

        matrizTransposta.push([]);

        for (let i = 0; i < 2; i++) {

            matrizTransposta[j][i] = matrizOriginal[i][j];
        }
    }

    // Mostra a matriz original
    texto += "Matriz Original:<br><br>";

    for (let i = 0; i < 2; i++) {

        for (let j = 0; j < 3; j++) {

            texto += matrizOriginal[i][j] + " ";
        }

        texto += "<br>";
    }

    texto += "<br>";

    // Mostra a matriz transposta
    texto += "Matriz Transposta:<br><br>";

    for (let i = 0; i < 3; i++) {

        for (let j = 0; j < 2; j++) {

            texto += matrizTransposta[i][j] + " ";
        }

        texto += "<br>";
    }

    // Exibe na tela
    document.getElementById("resultado").innerHTML = texto;
}