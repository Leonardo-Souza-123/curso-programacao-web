document.querySelector("#formulario").addEventListener("submit", function(evento){
    evento.preventDefault()


    var cateto1 = document.querySelector("#cateto1").value
    var cateto2 = document.querySelector("#cateto2").value
    var soma = Math.pow(cateto1, 2) + Math.pow(cateto2, 2)
    var hipotenusa = Math.sqrt(soma)
    document.querySelector("#resultado").innerHTML =`a hipotenusa é ${hipotenusa.toFixed(2)}`

})