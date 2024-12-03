Algoritmo "times"
// Disciplina: Introdução a Lógica de Programação
// Professor: Wesley Oliveira
// Descrição: Algoritmo que identifica o estado do time através de seu nome
// Autor(a): Leonardo Luciano de Souza 
// Data atual: 19/09/2024
var time : caractere
Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...

   // entrada de dados
   escreva("Digite  o nome de um time de futebol: ")
   leia (time)

   // processamento de dados
   escolha time
   caso "SAO PAULO", "SANTOS", "PALMEIRAS", "CORINTHIANS"
      escreva ("É um time Paulista!")
   caso "FLAMENGO", "FLUMINENSE", "VASCO", "BOTAFOGO"
      escreva ("É um time carioca!")
   outrocaso
      escreva
      escreva("É de outro estado.")
   fimescolha
fimalgoritmo