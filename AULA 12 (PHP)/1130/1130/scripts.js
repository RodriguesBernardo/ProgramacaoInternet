const ul = document.getElementById('frutas')

const carregaFrutas = async () => {

    const resposta = await fetch('http://localhost/1130/frutas.php')
    const frutas = await resposta.json();

    for(let i = 0; i < frutas.length; i++){
        const li = document.createElement('li')
        li.innerText = frutas[i].nome
        li.style.backgroundColor = frutas[i].cor
        ul.appendChild(li)
    }
}

carregaFrutas()