/**
 *  Tipagem dinâmica - JS
 */

// Declaração de variáveis
let nome, idade, peso, altura, vip, imc 



// Entrada de dados
nome = "Nathan Freire"
idade = 17
peso = 73
altura = 1.74
vip = true 

// A linha abaixo verifica o tipo da variável
// console.log(typeof(vip))

console.clear()

//processamento
//imc (indice de massa corporal) | fcm (Frequencia cardiaca máxima)
imc = peso / (altura * altura)
fcm = 208 - (0.7 * idade)

// saida
console.log("ficha do aluno")
console.log("______________")
console.log(`Nome: ${nome}`)
console.log(`Idade: ${idade}`)
console.log(`Peso: ${peso}`)
console.log(`Altura: ${altura}`)
console.log(`Vip: ${vip}`)
console.log(`Imc: ${imc.toFixed(2)}`)
console.log(`Fcm: ${fcm} bpm`)
