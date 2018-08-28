//Exercicio 1
function exercicio1Clique() {
    var x = document.getElementById("guessField").value;
    if (x % 2 == 0) {
        document.getElementById("tipo").innerHTML = "par";
    } else if (x % 2 == 1) {
        document.getElementById("tipo").innerHTML = "impar";
    } else {
        document.getElementById("tipo").innerHTML = "Você não digitou um número";
    }
}

//Exercicio 2
function exercicio2Clique() {
    const dollar = 3.70;
    var cambio = 0;
    var real = document.getElementById("real").value;
    cambio = real/dollar;
    document.getElementById("dollar").innerHTML = "$" + cambio.toFixed(2);

}

//Exercicio 3
var chico = 1.5;
var ze = 1.1;
var ano = 0;
do {
    chico = chico + 0.02;
    ze = ze + 0.03;
    ano++;
} while (chico > ze);
document.getElementById("chicoze").innerHTML = "Em " + ano + " anos Chico e Zé terão a mesma altura";


//Exercicio 4
function exercicio4Clique() {
    const inss = 0.085;
    const irrf = 0.125;
    var descontoInss = 0;
    var descontoIrrf = 0;
    var salario = document.getElementById("salario-form").value;
    document.getElementById("nome").innerHTML += document.getElementById("nome-form").value;
    document.getElementById("salario-bruto").innerHTML += "R$" + salario;
    descontoInss = salario * inss;
    descontoIrrf = salario * irrf;
    var salarioLiquido = salario - descontoInss - descontoIrrf;
    document.getElementById("salario-liquido").innerHTML += "R$" + salarioLiquido + "(Desconto INSS: R$" + descontoInss + " e Desconto IRRF: R$" + descontoIrrf.toFixed(2) + ")";
}

//Exercicio 5
var numero = [];
var menor = 0;
var maior = 0;

for (i = 0; i < 30; i++) {
    numero.push(Math.floor((Math.random() * 15) + 1));
    if (numero[i] < 8) {
        menor++;
    } else if (numero[i] > 10) {
        maior++;
    }
}

var porcentagemMenor = (100 * menor) / numero.length;
var porcentagemMaior = (100 * maior) / numero.length;
document.getElementById("exercicio5").innerHTML = "Menores que 8: " + porcentagemMenor.toFixed(2) + "% / Maiores que 10: " + porcentagemMaior.toFixed(2) + "%";

//Exercicio 6
var num = [];

for (i = 0; i < 10; i++) {
    num.push(Math.floor((Math.random() * 25) + 1));
}

document.getElementById("exercicio6").innerHTML += num;
document.getElementById("exercicio6ordenado").innerHTML += num.sort(function (a, b) { return b - a; });

//Exercicio 7
function exercicio7Clique() {
    var numFatorial = document.getElementById("fatorial-form").value;
    var fatorial = 1;
    if (numFatorial > 0) {
        do {
            fatorial *= numFatorial;
            numFatorial--;
        } while (numFatorial > 0);
        document.getElementById("exercicio7").innerHTML = "O fatorial é " + fatorial;
    } else {
        document.getElementById("exercicio7").innerHTML = "Não é possivel calcular fatorial"
    }
}

//Exercicio 8

function exercicio8() {
    var contagem = document.getElementById("contagem-form").value;
    if (contagem <= 0) {
        document.getElementById("exercicio8").innerHTML = "Não é possível fazer a contagem regressiva";
    } else {
        exercicio8Clique(contagem);
    }
}
function exercicio8Clique(contagem) {
    document.getElementById("exercicio8").innerHTML = contagem;
    contagem--;
    if (contagem >= 0) {
        window.setTimeout(exercicio8Clique, 1000, contagem);
    } else {
        document.getElementById("exercicio8").innerHTML = "AEEEEEE";

    }
}