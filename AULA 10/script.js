const lista = document.getElementById('lista')

console.log(lista)


// criar uma tag html
const li = document.createElement('li')



// Adicionar um texto em um elemento no html

li.innerText = "Primeiro item da lista"
console.log(li)

// Adicionar um elemento como filho de outro elemenento HTML
lista.appendChild(li)

// Alterar uma propriedade CSS com o JavaScript
/* li.style.backgroundColor = 'blue'
li.style.color = 'yellow'
li.style.padding = '10px' */

// Gerenciar as classes de um elemento
// Verificar se uma classe está aplicando a um elemento HTML
li.classList.contains('texto')
// Adicionar uma classe a um elemento HTML
li.classList.add('texto')
// Remover uma classe a um elemento HTML
//li.classList.remove()
// Alterar uma classe no elemento HTML
//li.classList.toggle()

// Remova elementos HTML
//lista.removeChild(li)

// Remove todo o conteudo filho de uma lista
//lista.innerText = ""


// Trabalhando com atributos de um elemento HTML 
li.setAttribute('id', 'primeiro-item')
/* 
const vetor = ['Morango', 'Maçã', 'Laranha', 'Limão', 'Melancia']

for (let fruta of vetor){
    const li = document.createElement('li')
    li.classList.add('texto')
    li.innerText = fruta
    lista.appendChild(li)
}

 */
/* 

const btn = document.getElementById('btn')
btn.addEventListener('click', function(){
    const input = document.getElementById('item')
    const li = document.createElement('li')
    li.classList.add('texto')
    li.innerText = input.value
    lista.appendChild(li)
    input.value = ""
    input.focus()   //Manda o Cursos de volta para o input 
})

 */


















