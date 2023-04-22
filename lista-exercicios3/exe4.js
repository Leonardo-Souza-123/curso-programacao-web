document.querySelector("#formulario").addEventListener("submit", function(evento){
    evento.preventDefault()
    var lista = document.querySelector("#numeros").value
    console.log(lista)
    var array = lista.split(",")
    console.log(array)

    var listaNumeros= array.map(function(numero){
        return Number(numero)
    })
    console.log(listaNumeros)
    console.log(...listaNumeros)

    var maior =Math.max(...listaNumeros)
    console.log(maior)

    document.querySelector("#resultado").innerHTML = `o maior numero é o ${maior}`
})