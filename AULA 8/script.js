/* console.log("hello world")
 */

// Declaração de variáveis
// var, let e cosnt 

let nome = "Bernardo"
const curso = "ADS"


// Estrutura de repetição 

// While
/* let i = 0
while  (i<100){
    i++
    console.log(i)
}
 */

// Do
/* let i = 0 
do {
    i++
    console.log(i)
}while (i<10) */

/* // For
let i = 0
for (i = 0; i < 10; i++) {
    console.log(i)
} */



// Vetores

// const vetor = [1, 2, 3, 4, 5, 6, 7]

/* for (let i = 0; i < vetor.length;i++){
    console.log(vetor[i])
}
 */
/* for(let i in vetor){
    console.log(vetor[i])
} */


/* for(let i of vetor){
    console.log(vetor[i])
} */


// Funções para trabalhar com vetores 

/* const vetor = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
const novo = []
for(let v of vetor){
    novo.push(v*2)
}
console.log(vetor, novo) */



// Criando objeto
/* 
const pessoa = {nome: "Bernardo" , idade: 19} */

// Funções 

function hello(valor) {
    console.log(valor)
}

hello("Olá Mundo ") //chamada à função 




/* 
const times = [{ v: 2, e: 1, d: 1 }, { v: 1, e: 3, d: 0 }]
const times2 = []
for (let time of times) {
    const p = time.v * 3 + time.e
    const j = time.v + time.e + time.d
    times2.push(pontos: p, jogos: j)
}
console.log(times, times2) */




const vetor = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const novo = []

for (let v of vetor){
    novo.push(v*2)
    console.log(novo[v])
}