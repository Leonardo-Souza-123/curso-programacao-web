Algoritmo "media"

Var nota1, nota2, nota3, nota4, soma: inteiro
media: real



Inicio
 escreva("digite a nota 1: ")
 leia(nota1)
  escreva("digite a nota 2: ")
 leia(nota2)
  escreva("digite a nota 3: ")
 leia(nota3)
  escreva("digite a nota 4: ")
 leia(nota4)

 soma <- nota1+nota2+nota3+nota4
 
 media <- soma/4
 escreva("a media foi de:")
 escreval(media)

 se media < 6 então
 escreva("aluno reprovado")
 senao
 escreva("aluno aprovado")
 fimse
 

Fimalgoritmo