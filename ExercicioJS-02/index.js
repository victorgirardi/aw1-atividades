//Exercicio 1
function exercicio1Clique() {
    var numero = document.getElementById("exercicio1-campo");
    if (!numero.checkValidity()) {
        document.getElementById("exercicio1-p").innerHTML = numero.validationMessage;
    } else {
        document.getElementById("exercicio1-p").innerHTML = "Numero correto";
    }
}

//Exercicio 2
function exercicio2Clique() {
    var data = document.getElementById("exercicio2-campo").value;
    var dataStr = data.split("-");
    var day = dataStr[2];
    var year = dataStr[0];
    var month = "";

    switch (dataStr[1]) {
        case "01":
            month = "Janeiro"
            break;

        case "02":
            month = "Fevereiro"
            break;

        case "03":
            month = "Março"
            break;

        case "04":
            month = "Abril"
            break;

        case "05":
            month = "Maio"
            break;

        case "06":
            month = "Junho"
            break;

        case "07":
            month = "Julho"
            break;

        case "08":
            month = "Agosto"
            break;

        case "09":
            month = "Setembro"
            break;

        case "10":
            month = "Outubro"
            break;

        case "11":
            month = "Novembro"
            break;

        case "12":
            month = "Dezembro"
            break;
    }

    document.getElementById("exercicio2-p").innerHTML = day + " de " + month + " de " + year;

}

//Exercicio 3
function exercicio3Clique() {
    var peso = document.getElementById("exercicio3-peso").value;
    var altura = document.getElementById("exercicio3-altura").value;
    var sexo = document.getElementById("sexo").value;
    var imc = peso / (Math.pow(altura, 2));

    if (sexo == "homem") {
        if (imc < 20.7) {
            document.getElementById("exercicio3-p").innerHTML = "Abaixo do peso ideal";
        } else if (imc >= 20.7 && imc < 26.4) {
            document.getElementById("exercicio3-p").innerHTML = "Peso ideal";
        } else {
            document.getElementById("exercicio3-p").innerHTML = "Acima do peso ideal";
        }
    } else {
        if (imc < 19) {
            document.getElementById("exercicio3-p").innerHTML = "Abaixo do peso ideal";
        } else if (imc >= 19 && imc < 25.8) {
            document.getElementById("exercicio3-p").innerHTML = "Peso ideal";
        } else {
            document.getElementById("exercicio3-p").innerHTML = "Acima do peso ideal";
        }
    }
}

//Exercicio 4
function exercicio4Clique() {
    var cpf = document.getElementById("exercicio4-campo").value;
    var cpfFormatado = cpf.substring(0, 3) + "." + cpf.substring(3, 6) + "." + cpf.substring(6, 9) + "-" + cpf.substring(9, 11);
    document.getElementById("exercicio4-campo").value = cpfFormatado;
}

//Exercicio 5
function exercicio5Clique() {
    var valorEmprestimo = document.getElementById("exercicio5-valor").value;
    var prestacoes = document.getElementById("exercicio5-prestacoes").value;
    var juros = document.getElementById("exercicio5-juros").value;
    juros = juros / 100;
    var table = document.getElementById("table");
    var row = table.insertRow(1);

    var cell1 = row.insertCell(0);
    cell1.innerHTML = "0";

    var cell1 = row.insertCell(1);
    cell1.innerHTML = valorEmprestimo;

    var cell2 = row.insertCell(2);
    cell2.innerHTML = "---";

    var cell3 = row.insertCell(3);
    cell3.innerHTML = "---";

    var cell4 = row.insertCell(4);
    cell4.innerHTML = "---";

    var amortizacao = valorEmprestimo/prestacoes;
    var jurosTotais = 0;
    var jurosParciais = 0;
    var nRows = 0;

    //table-------------------------------------------
    for (i = 1; i <= prestacoes; i++) {
        var rowValor = table.insertRow(i + 1);
        //var table

        var cellMes = rowValor.insertCell(0);
        cellMes.innerHTML = i;

        var cellSaldo = rowValor.insertCell(1);
        cellSaldo.innerHTML = valorEmprestimo + " - " + amortizacao + " = " + (valorEmprestimo-amortizacao);

        var cellAmortizacao = rowValor.insertCell(2);
        cellAmortizacao.innerHTML = amortizacao;

        var cellJuros = rowValor.insertCell(3);
        cellJuros.innerHTML = valorEmprestimo + "(" + juros + ") = " + (valorEmprestimo*juros);
        jurosParciais = valorEmprestimo * juros;

        var cellPrestacao = rowValor.insertCell(4);
        cellPrestacao.innerHTML = amortizacao + jurosParciais;

        jurosTotais = jurosTotais + jurosParciais;
        valorEmprestimo = valorEmprestimo - amortizacao;
        nRows = i;
    }

    var rowTotal = table.insertRow(nRows + 2);

    var cellTotal = rowTotal.insertCell(0);
    cellTotal.innerHTML = "Total";

    var cellTotalSaldo = rowTotal.insertCell(1);
    cellTotalSaldo.innerHTMl = " ";

    var cellTotalAmort = rowTotal.insertCell(2);
    cellTotalAmort.innerHTML = amortizacao * prestacoes;

    var cellTotalJuros = rowTotal.insertCell(3);
    cellTotalJuros.innerHTML = jurosTotais;

    var cellTotalPrestacao = rowTotal.insertCell(4);
    cellTotalPrestacao.innerHTMl = (amortizacao * prestacoes) + jurosTotais;
}