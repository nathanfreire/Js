/**
 * Estudo do Array(vetor)
 * @author Nathan Freire Furukawa Santos
 */

console.clear()
let alunos = []
console.log(typeof(alunos))
//                  0        1        2         3        4          5           6         7         8        9
let alunosEM1 = ["Vitor", "Pedro", "Julia", "Juliana", "Ryan", "Guilherme", "Gustavo", "Sarah", "Felipe", "Lucas"]
console.log(typeof(alunosEM1))
// .lenght (obtem o tamanho da array)
console.log(alunosEM1.length)
// Exibindo dados de um array
console.log(alunosEM1)
// Exibindo um aluno do array
console.log(alunosEM1[2])
// Exibindo os dados do array em uma tabela
console.table(alunosEM1)
// Adicionando um elemento ao vetor || array 
alunosEM1.push("Luiza")
console.table(alunosEM1)
//Modificar um elemento do array
alunosEM1[0] = "Victor"
console.table(alunosEM1)
// Excluir um elemento de um array
delete alunosEM1[1]
console.table(alunosEM1)
// Uso do laço for para percorrer o array
let notas = [3, 8, 5, 9, 2]

//Uso do laço for para percorrer um array
for (let i = 0; i < notas.length; i++) {
    console.log(notas[i])
}

// forEath (simplificação do laço for para uso em array)
notas.forEach((n) => {
    console.log(n)
})

// map (mapeamento da estrutura de dados para calculos ou conversões)
// Exemplo 1: Adicionar 1 ponto as notas
let notaAtulizadas = notas.map((na) => {
    return na + 1
})

console.log(notas)
console.log(notaAtulizadas)

// Exemplo 2: Conversão de um sistema de notas 
/*
    NA - Não atendeu (nota < 5)
    PA - parcialmente atendido (nota entre 5 e 7)
    A  - Atendeu (nota > 7)
*/

let notasConvertidas = notas.map((nc) => {
    if(nc < 5){
        return "NA"
    } else if (nc > 7) {
        return "A"
    } else {
        return "PA"
    }
})

console.log(notas)
console.log(notasConvertidas)