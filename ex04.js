// Matriz 3x3
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function mostrarDiagonal() {

    let diagonal = "";

    // Percorre linhas e colunas
    for (let i = 0; i < 3; i++) {

        for (let j = 0; j < 3; j++) {

            // Verifica se está na diagonal principal
            if (i === j) {

                diagonal += matriz[i][j] + " ";
            }
        }
    }

    // Mostra resultado
    document.getElementById("resultado").innerHTML =
        "Diagonal principal: " + diagonal;
}