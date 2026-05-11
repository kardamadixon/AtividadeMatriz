let cinema = [
    ["Livre", "Livre", "Livre", "Livre", "Livre"],
    ["Livre", "Livre", "Livre", "Livre", "Livre"],
    ["Livre", "Livre", "Livre", "Livre", "Livre"],
    ["Livre", "Livre", "Livre", "Livre", "Livre"],
    ["Livre", "Livre", "Livre", "Livre", "Livre"]
];

function reservarPoltronas() {

    let linha;
    let coluna;

    while (true) {

        linha = Number(prompt("Digite a linha (0 a 4)\nDigite número negativo para sair:"));

        if (linha < 0) {
            break;
        }

        coluna = Number(prompt("Digite a coluna (0 a 4)\nDigite número negativo para sair:"));

        if (coluna < 0) {
            break;
        }

        if (cinema[linha][coluna] === "Livre") {

            cinema[linha][coluna] = "Ocupada";

            alert("Poltrona reservada com sucesso!");

        } else {

            alert("Essa poltrona já está ocupada!");
        }
    }

    let texto = "Mapa do Cinema:<br><br>";

    for (let i = 0; i < 5; i++) {

        for (let j = 0; j < 5; j++) {

            texto += cinema[i][j] + " | ";
        }

        texto += "<br>";
    }

    document.getElementById("resultado").innerHTML = texto;
}