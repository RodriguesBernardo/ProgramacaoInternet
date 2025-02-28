let carros = [];

let carroEmEdicaoIndex = -1;

function adicionarOuEditarCarro() {
  const placa = document.getElementById('placa').value;
  const modelo = document.getElementById('modelo').value;
  const ano = document.getElementById('ano').value;
  const cor = document.getElementById('cor').value;
  const vaga = document.getElementById('vaga').value;

  const novoCarro = {
    placa: placa,
    modelo: modelo,
    ano: ano,
    cor: cor,
    vaga: vaga
  };

  if (carroEmEdicaoIndex === -1) {

    carros.push(novoCarro);
  } else {

    carros[carroEmEdicaoIndex] = novoCarro;

    carroEmEdicaoIndex = -1;
  }

  atualizarLista();
  limparFormulario();
}

function editarCarro(index) {
  const carro = carros[index];
  document.getElementById('placa').value = carro.placa;
  document.getElementById('modelo').value = carro.modelo;
  document.getElementById('ano').value = carro.ano;
  document.getElementById('cor').value = carro.cor;
  document.getElementById('vaga').value = carro.vaga;

  
  carroEmEdicaoIndex = index;
}


function removerCarro(index) {
  carros.splice(index, 1);
  atualizarLista();
}

function limparFormulario() {
  document.getElementById('carForm').reset();
  carroEmEdicaoIndex = -1;
}


function atualizarLista() {
  const carList = document.getElementById('carList');
  carList.innerHTML = '';

  carros.forEach((carro, index) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <span>${carro.placa} - ${carro.modelo} (${carro.ano}, ${carro.cor})</span>
      <span>Vaga: ${carro.vaga}</span>
      <button onclick="editarCarro(${index})">Editar</button>
      <button onclick="removerCarro(${index})">Remover</button>
    `;

    carList.appendChild(listItem);
  });
}

atualizarLista();
