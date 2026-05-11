// Matriz 3x3
let matriz = [
    [6, 8, 4],
    [1, 3, 5],
    [2, 7, 9]
];

function somarMatriz() {

    let soma = 0;

    // Percorre as linhas
    for (let i = 0; i < 3; i++) {

        // Percorre as colunas
        for (let j = 0; j < 3; j++) {

            soma += matriz[i][j];
        }
    }

    // Mostra o resultado
    document.getElementById("resultado").innerHTML =
        "A soma total é: " + soma;
}