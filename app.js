// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar amigo à lista
function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nome = inputAmigo.value.trim();

    if (nome && !amigos.includes(nome)) {
        amigos.push(nome);  // Adiciona o nome ao array
        inputAmigo.value = '';  // Limpa o campo de texto
        mostrarAmigos();  // Atualiza a lista na tela
    } else if (amigos.includes(nome)) {
        alert("Este nome já foi adicionado.");
    } else {
        alert("Por favor, insira um nome.");
    }
}

// Função para exibir a lista de amigos na tela
function mostrarAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';  // Limpa a lista antes de adicionar os novos nomes

    amigos.forEach(nome => {
        const li = document.createElement('li');
        li.textContent = nome;
        listaAmigos.appendChild(li);
    });
}

// Função para sortear os amigos secretos
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("É necessário adicionar pelo menos 2 amigos para sortear.");
        return;
    }

    // Limpa a lista de resultados antes de realizar o sorteio
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';  // Limpa os resultados anteriores

    // Embaralha a lista de amigos para garantir que o sorteio seja aleatório
    const amigosSorteados = [...amigos];  // Copia a lista de amigos
    const resultado = {};

    // Embaralha a lista de amigos
    amigosSorteados.sort(() => Math.random() - 0.5);

    // Sorteia os amigos e os guarda no objeto de resultados
    amigos.forEach((amigo, index) => {
        const amigoSorteado = amigosSorteados[(index + 1) % amigos.length]; // Garante que ninguém tire a si mesmo
        resultado[amigo] = amigoSorteado;
    });

    // Exibe os resultados
    exibirResultado(resultado);
}

// Função para exibir o resultado do sorteio
function exibirResultado(resultado) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';  // Limpa os resultados anteriores

    // Exibe cada sorteio de amigo secreto
    for (const [sorteador, sorteado] of Object.entries(resultado)) {
        const p = document.createElement('p');
        p.textContent = `${sorteador} tirou ${sorteado}`;
        resultadoDiv.appendChild(p);  // Adiciona o resultado na tela
    }
}