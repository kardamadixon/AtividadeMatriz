// Matriz 2x2
let matriz = [
    [1, 2],
    [3, 4]
];

function multiplicarMatriz() {

    // Pega o número digitado
    let numero = Number(document.getElementById("numero").value);

    // Nova matriz vazia
    let novaMatriz = [];

    // Percorre as linhas
    for (let i = 0; i < 2; i++) {

        // Cria uma nova linha vazia
        novaMatriz.push([]);

        // Percorre as colunas
        for (let j = 0; j < 2; j++) {

            // Multiplica os valores
            novaMatriz[i][j] = matriz[i][j] * numero;
        }
    }

    let texto = "";

    // Exibe a nova matriz
    for (let i = 0; i < 2; i++) {

        for (let j = 0; j < 2; j++) {

            texto += novaMatriz[i][j] + " ";
        }

        texto += "<br>";
    }

    document.getElementById("resultado").innerHTML = texto;
}