const estados = [
    {'nome': 'Rio Grande do Sul', 'sigla': 'RS'},
    {'nome': 'São Paulo', 'sigla': 'SP'},
    {'nome': 'Rio de Janeiro', 'sigla': 'RJ'},
]
const cidades = [
    {'nome': 'Bento Gonçalves', 'sigla': 'RS'},
    {'nome': 'Garibaldi', 'sigla': 'RS'},
    {'nome': 'São Paulo', 'sigla': 'SP'},
    {'nome': 'Rio de Janeiro', 'sigla': 'RJ'},
]

const caixaEstados = document.getElementById('estados')
const caixaCidades = document.getElementById('cidades')

caixaEstados.addEventListener('change', () => {
    montaCidades(caixaEstados.value)
})

const montaOption = (value, label) => {
    const option = document.createElement('option')
    option.setAttribute('value', value)
    option.innerText = label
    return option
}

const montaCidades = (sigla) => {
    caixaCidades.innerText = ""
     
    const option = montaOption('-1', 'Selecione uma cidade')
    caixaCidades.appendChild(option)

    for (let i = 0; i < cidades.length; i++){
        if (cidades[i].sigla === sigla){
            const option = montaOption(cidades[i].nome, 
                cidades[i].nome + ' (' + cidades[i].sigla + ')')
            caixaCidades.appendChild(option)
        }
    }
    caixaCidades.disabled = false
}

const montaEstados = () => {

   

    const option = montaOption('-1', 'Selecione um estado')
    caixaEstados.appendChild(option)

    for (let i = 0; i < estados.length; i++){
        const option = montaOption(estados[i].sigla, estados[i].nome)
        caixaEstados.appendChild(option)
    }
    caixaEstados.disabled = false
}

montaEstados()

