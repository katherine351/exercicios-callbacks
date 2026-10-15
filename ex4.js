function verificarNota(nota, callback) {
    callback(nota);
}

function mostrarResultado(nota) {
    if (nota >= 6) {
        console.log("Aprovado");
    } else {
        console.log("Recuperação");
    }
}

verificarNota(8, mostrarResultado);
verificarNota(5, mostrarResultado);
