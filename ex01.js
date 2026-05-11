// Criando a matriz
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function mostrarMatriz() {

    let texto = "";

    // Percorre as linhas
    for (let i = 0; i < 3; i++) {

        // Percorre as colunas
        for (let j = 0; j < 3; j++) {

            texto += matriz[i][j] + " ";
        }

        // Pula linha
        texto += "<br>";
    }

    // Mostra na tela
    document.getElementById("resultado").innerHTML = texto;
}