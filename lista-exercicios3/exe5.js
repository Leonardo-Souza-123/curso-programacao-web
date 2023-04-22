document.querySelector("#formulario").addEventListener("submit", function(evento){
    evento.preventDefault()

    var a = document.querySelector("#a").value
    var b = document.querySelector("#b").value
    var c = document.querySelector("#c").value

    var delta = Math.pow(b,2) -(4*a*c)
    console.log(delta)


    var raizDelta = Math.sqrt(delta)
    console.log(raizDelta)

    var x1 = (-b + raizDelta) / (2*a)
    var x2 = (-b - raizDelta) / (2*a)
    console.log(x1,x2)


    document.querySelector("#resultado").innerHTML=`o valor de x1 é : ${x1} <br> o valor de x2 é: ${x2}`

})