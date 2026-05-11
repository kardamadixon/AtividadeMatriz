let matriz = [
    ["X", "X", "X"],
    ["O", "", "O"],
    ["", "O", ""]
];

function verificarVencedor() {

    let vencedor = "Ninguém venceu";
    let texto = "";

    for (let i = 0; i < 3; i++) {

        for (let j = 0; j < 3; j++) {

            if (matriz[i][j] === "") {

                texto += "- ";

            } else {

                texto += matriz[i][j] + " ";
            }
        }

        texto += "<br>";
    }

    texto += "<br>";

    for (let i = 0; i < 3; i++) {

        if (
            matriz[i][0] === matriz[i][1] &&
            matriz[i][1] === matriz[i][2] &&
            matriz[i][0] !== ""
        ) {

            vencedor = "O jogador " + matriz[i][0] + " venceu!";
        }
    }

    texto += vencedor;

    document.getElementById("resultado").innerHTML = texto;
}