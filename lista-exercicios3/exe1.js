document.querySelector("#formulario").addEventListener("submit", function(evento){
    evento.preventDefault()
    var raio = document.querySelector("#raio").value
    var area = 2 * Math.PI * Number(raio)
    console.log(area)

    document.querySelector("#resultado").innerHTML = `a area é ${area.toFixed(2)}`
})
