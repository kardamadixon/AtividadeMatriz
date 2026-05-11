// Matriz 4x4
let matriz = [
    [12, 7, 25, 4],
    [9, 30, 15, 2],
    [18, 6, 11, 40],
    [5, 14, 8, 21]
];

function maiorValor() {

    // Começa com o primeiro valor da matriz
    let maior = matriz[0][0];

    // Percorre as linhas
    for (let i = 0; i < 4; i++) {

        // Percorre as colunas
        for (let j = 0; j < 4; j++) {

            // Verifica se encontrou um valor maior
            if (matriz[i][j] > maior) {

                maior = matriz[i][j];
            }
        }
    }

    // Mostra o resultado
    document.getElementById("resultado").innerHTML =
        "O maior valor da matriz é: " + maior;
}