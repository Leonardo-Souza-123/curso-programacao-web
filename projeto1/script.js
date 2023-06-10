var campos = document.querySelectorAll("td")
console.log(campos)

function iniciar() {
    let info = document.querySelector("#info")
    info.classList.remove("oculto")

    let button = document.querySelector("button")
    button.classList.remove("btn-success")
    button.classList.add("btn-danger")
    button.textContent = "reiniciar"
    button.onclick = limpaJogo



    limpaJogo()
}


function limpaJogo() {
    campos.forEach(campo => {
        campo.textContent = ""
        campo.style.cssText = ""
        campo.classList.remove("blocked")
    })
 
    document.querySelector(".vencedor").classList.add("oculto")
    document.querySelector(".velha").classList.add("oculto")
    document.querySelector(".vez").classList.remove("oculto")
    document.querySelector(".jogador").style.cssText = ""
}


campos.forEach(campo => {
    campo.addEventListener("click", evento => {
        let elemento = evento.target
        if (elemento.classList.contains("blocked")) return

        let jogador = document.querySelector(".jogador strong")
        elemento.textContent = jogador.textContent
        elemento.style.color = jogador.style.color
        elemento.classList.add("blocked")
        console.log(jogador.textContent)

        let ganhador = validaJogada()
        if (ganhador) {
            document.querySelector(".vencedor").classList.remove("oculto")
            document.querySelector(".velha").classList.add("oculto")
            document.querySelector(".vez").classList.add("oculto")
            campos.forEach(campo => campo.classList.add("blocked"))
            return
        }

        if (jogador.textContent == "X") {
                jogador.textContent = "O"
                jogador.style.color = "red"
                console.log("X")
            }
            else {
                jogador.textContent = "X"
                jogador.style.color = "blue"
                console.log('O')
            }


    })
})


function validaJogada() {
    let combinacoes = [
        //horizontais
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        //verticais
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        //diagonial
        [0, 4, 8],
        [2, 4, 6]
    ]

    let ganhador = null


    combinacoes.forEach(combinacao => {
        let valor1 = campos[combinacao[0]].textContent
        let valor2 = campos[combinacao[1]].textContent
        let valor3 = campos[combinacao[2]].textContent

        if (!valor1 || !valor2 || !valor3) return

        if (valor1 == valor2 && valor2 == valor3) {
            ganhador = valor1


            let fundo = ""
            if (valor1 == "X") fundo = "blue"
            else fundo = "red"


            campos[combinacao[0]].style.cssText = `background-color: ${fundo}; color: white; `
            campos[combinacao[1]].style.cssText = `background-color: ${fundo}; color: white; `
            campos[combinacao[2]].style.cssText = `background-color: ${fundo}; color: white; `

        }

    })

            let espaçoesEmBranco = 0
            campos.forEach(campo => {
                if(campo.textContent == "") espaçoesEmBranco++
            })


            if (!ganhador && espaçoesEmBranco == 0) {
                document.querySelector(".vencedor").classList.add("oculto")
                document.querySelector(".velha").classList.remove("oculto")
                document.querySelector(".vez").classList.add("oculto")
                document.querySelector(".jogador").style.display="none"
            }

    return ganhador
}