/* alert("Seu tempo esgotou") */


/* let idade = parseInt(prompt('Qual a sua idade ?'))
 */
/* let resposta = confirm("Você estuda no IFRS?") /* Resposta = boolean */

/* console.log("Idade do usuario = " , idade ,"Estuda no " resposta)
 */



/* SOMA */
/* 
let numero1 = parseInt(prompt('Qual o primeiro numero?'))
let numero2 = parseInt(prompt("Qual o segundo numero?"))
let resposta = numero1 + numero2
console.log("A soma dos numeros é:" , resposta) */




function solicitaSoma() {
    let numero1 = parseInt(prompt('Qual o primeiro numero?'))
    let numero2 = parseInt(prompt("Qual o segundo numero?"))
   
    const div = document.getElementById('texto')

    div.innerText = `O resultado da soma é ${numero1 + numero2}`
}


const btnTrocarCor = document.getElementById('trocaCor')
btnTrocarCor.addEventListener('click', function(){
    document.body.style.backgroundColor = 'blue'
})


/* const btn = document.getElementById(`btn`)
btn.addEventListener('click', function(){
    alert('O botao foi clicado')
    solicitaSoma()
})
*/

/* OU */

/* const btn = document.getElementById(`btn`)
btn.addEventListener('click',solicitaSoma) */











