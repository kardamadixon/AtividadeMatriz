// Matriz 3x4
let matriz = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

function somarLinhas() {

    let texto = "";

    // Percorre as linhas
    for (let i = 0; i < 3; i++) {

        // Zera a soma para cada linha
        let soma = 0;

        // Percorre as colunas
        for (let j = 0; j < 4; j++) {

            soma += matriz[i][j];
        }

        texto += "A soma da linha " + i + " é: " + soma + "<br>";
    }

    // Mostra o resultado
    document.getElementById("resultado").innerHTML = texto;
}