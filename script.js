// 1. Mapeando os elementos do HTML pelo ID
const titulo = document.getElementById('titulo');
const campoNome = document.getElementById('campo-nome');
const btnAtualizar = document.getElementById('btn-atualizar');

const contadorElemento = document.getElementById('contador');
const btnIncrementar = document.getElementById('btn-incrementar');

// Variável para armazenar o valor da contagem
let totalCliques = 0;

// 2. Funcionalidade A: Atualizar mensagem com o nome digitado
btnAtualizar.addEventListener('click', function() {
    const nome = campoNome.value.trim();

    if (nome !== "") {
        titulo.textContent = `Olá, ${nome}!`;
        campoNome.value = ""; // Limpa o campo após enviar
    } else {
        alert("Por favor, digite um nome antes de salvar.");
    }
});

// 3. Funcionalidade B: Incrementar o contador de cliques
btnIncrementar.addEventListener('click', function() {
    totalCliques++; // Soma +1 ao valor atual
    contadorElemento.textContent = totalCliques; // Atualiza o valor na tela
});