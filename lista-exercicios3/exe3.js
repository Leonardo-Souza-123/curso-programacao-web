document.querySelector("#formulario").addEventListener("submit", function(evento) {
    evento.preventDefault()

    var meta = document.querySelector("#meta").value
    var vendas = document.querySelector("#vendas").value

    var resultado =(vendas / meta) * 100

    document.querySelector("#resultado").innerHTML = `atingimos ${resultado.toFixed(2)}% da meta!`
})