Algoritmo "Troca_de_valores"
// Disciplina: Introdução a Lógica de Programação
// Professor: Wesley Oliveira
// Descrição: Algoritmo que fará o usuário digitar dois números e depois exibir os números em outra posição
// Autor(a): Leonardo Luciano de Souza 
// Data atual: 14/09/2024

var num1, num2 : real
num3 : real
inicio
// Seção de Comandos 

   Escreva("Informe um numero: ")
   leia(num1)
   Escreva("Informe outro numero: ")
   leia(num2)
   
   escreval(num1)
   escreval(num2)
   
   //Escreval(num2)
   //escreval(num1)
   
   num3 <- num2
   num2 <- num1
   num1 <- num3
   
   escreval(num1)
   escreval(num2)

fimalgoritmo