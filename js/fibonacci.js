function fibonacci() {
    var penultimo = 1;
    var ultimo = 1;
    var contador = 0;

    var fibonacciContainer = document.getElementById("fibonacci-container");
    fibonacciContainer.innerHTML = "";

    while (ultimo <= 500) {
        var numeroDiv = document.createElement("div");
        numeroDiv.classList.add("fibonacci-number");
        numeroDiv.textContent = ultimo;
        fibonacciContainer.appendChild(numeroDiv);

        contador++;

        var proximo = penultimo + ultimo;
        penultimo = ultimo;
        ultimo = proximo;
    }

    var totalNumerosDiv = document.createElement("div");
    totalNumerosDiv.textContent = "Sequência Fibonacci: " + contador;
    fibonacciContainer.appendChild(totalNumerosDiv);
    
}

function recarregarPag() {
    location.reload();
}


