var pergunta = document.querySelector(".pergunta-container")
var finalizou = document.querySelector(".finalizou")
var perguntaAtual = 0

window.addEventListener("load", () => {
    let progesso = window.localStorage.getItem("perguntas-quiz")
    console.log(progesso)
    if (progesso) {
        if (progesso >= perguntas.length) finalizado()
        else {
            perguntaAtual = Number(progesso)
            document.querySelector(".continuar").classList.remove("oculto")
        }
    }
    else {
        document.querySelector(".comecar").classList.remove("oculto")
    }
})


function comecar() {
    document.querySelector(".comecar").classList.add("oculto")
    document.querySelector(".continuar").classList.add("oculto")


    fadeIn(pergunta)
    montarPergunta()
}

function montarPergunta() {
    var perguntaSelecionada = perguntas[perguntaAtual]
    document.querySelector(".pergunta").textContent = `${perguntaAtual + 1}. ${perguntaSelecionada.pergunta}`


    var alternativas = ["a", "b", "c", "d"]
    alternativas.forEach(alternativa => {
        let texto = perguntaSelecionada.alternativas[alternativa]
        document.querySelector("#" + alternativa).value = texto
        document.querySelector(`label[for="${alternativa}"]`).textContent = texto
    })

    document.querySelectorAll("input").forEach(input => {
        input.classList.remove("is-valid")
        input.classList.remove("is-invalid")
        input.checked = false
    })
    document.querySelector(".enviar-resposta").classList.remove("oculto")
    document.querySelector(".proxima-pergunta").classList.add("oculto")

}

document.querySelector("#formulario").addEventListener("submit", evento => {
    evento.preventDefault()
    let resposta = document.querySelector("input[name='alternativa']:checked")
    console.log(resposta.id)
    let respostaCorreta = perguntas[perguntaAtual].resposta
    console.log(respostaCorreta)
    if (resposta.id == respostaCorreta) {
        resposta.classList.add("is-valid")
        document.querySelector(".enviar-resposta").classList.add("oculto")
        document.querySelector(".proxima-pergunta").classList.remove("oculto")
    }

    else {
        resposta.classList.add("is-invalid")
        let inputCorreto = document.querySelector("#" + respostaCorreta)
        inputCorreto.classList.add("is-valid")
        document.querySelector(".enviar-resposta").classList.add("oculto")
        document.querySelector(".reiniciar").classList.remove("oculto")

    }

})

function proximaPergunta() {
    perguntaAtual++
    window.localStorage.setItem("perguntas-quiz", perguntaAtual)
    if (perguntaAtual >= perguntas.length) {
        finalizado()
        return
    }
    fadeInOut(pergunta, pergunta)
    setTimeout(() => {
        montarPergunta()
    }, 1000)

}

function reiniciar() {
    perguntaAtual = 0
    window.localStorage.clear()
    if (pergunta.classList.contains("oculto")) fadeOut(finalizou)
    else fadeOut(pergunta)

    setTimeout(() => {
        document.querySelector(".comecar").classList.remove("oculto")
        document.querySelector(".reiniciar").classList.add("oculto")

    })
}

function finalizado() {
    fadeInOut(pergunta, finalizou)
    setTimeout(() => {
        document.querySelector(".reiniciar").classList.remove("oculto")
    }, 2000);
}


function fadeIn(elemento) {
    elemento.classList.remove("oculto")
    elemento.classList.remove("fade-out")
    elemento.classList.add("fade-in")

}


function fadeOut(elemento) {
    elemento.classList.remove("oculto")
    elemento.classList.add("fade-out")
    elemento.classList.remove("fade-in")
    setTimeout(() => {
        elemento.classList.add("oculto")

    }, 1000)
}


function fadeInOut(elemento1, elemento2) {
    elemento1.classList.add("fade-out")
    elemento1.classList.remove("fade-in")
    setTimeout(() => {
        elemento1.classList.add("oculto")
        fadeIn(elemento2)

    }, 1000)

}
