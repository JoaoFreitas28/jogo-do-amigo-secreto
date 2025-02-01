# Jogo do Amigo Secreto

Este é um jogo simples de **Amigo Secreto**, onde os participantes inserem seus nomes e, ao clicar no botão "Sortear amigo", o sistema sorteia aleatoriamente quem tirou quem. A aplicação foi construída usando **HTML**, **CSS** e **JavaScript**.

## Funcionalidades

- **Adicionar Participantes**: O usuário pode adicionar os nomes dos participantes ao jogo.
- **Sortear Amigos Secretos**: Após adicionar os participantes, o usuário pode clicar no botão "Sortear amigo" para gerar os pares de amigo secreto aleatórios.
- **Interface Simples**: A interface permite inserir os nomes, ver a lista de amigos e exibir os resultados de forma clara e intuitiva.

## Pré-requisitos

- Um navegador de internet (Chrome, Firefox, etc.).
- O código não depende de servidores ou bancos de dados, pois a lógica é executada completamente no navegador.

## Como Usar

1. **Clone ou baixe o repositório**:
   - Clique no botão "Code" na página do repositório e copie o link do repositório.
   - Abra o terminal e execute o comando abaixo para clonar:
     ```bash
     git clone https://github.com/seu-usuario/amigo-secreto.git
     ```
   
2. **Abra o arquivo `index.html` no navegador**:
   - Depois de clonar o repositório ou baixar os arquivos, abra o arquivo `index.html` no seu navegador para começar a jogar.

3. **Adicionar Participantes**:
   - Na página inicial, digite o nome de cada amigo no campo de texto e clique em **Adicionar**.
   - O nome será adicionado à lista de participantes.

4. **Sortear Amigos Secretos**:
   - Após adicionar os participantes, clique no botão **Sortear amigo** para realizar o sorteio.
   - A lista de resultados aparecerá abaixo, com cada pessoa indicando quem tirou.

## Estrutura do Projeto

O projeto é composto por três arquivos principais:

1. **`index.html`**: Contém a estrutura da página HTML.
2. **`style.css`**: Contém os estilos da página para tornar a interface visualmente agradável.
3. **`app.js`**: Contém a lógica do jogo, como adicionar amigos e realizar o sorteio.

## Como Funciona o Sorteio

- O jogo começa com a adição dos nomes dos participantes na lista.
- Quando o botão "Sortear amigo" é pressionado, o JavaScript embaralha aleatoriamente a lista de amigos e realiza o sorteio, garantindo que ninguém tire a si mesmo.
- O resultado do sorteio é exibido abaixo, com o nome de quem tirou quem.

## Tecnologias Usadas

- **HTML**: Para estruturar a página.
- **CSS**: Para estilizar a interface.
- **JavaScript**: Para a lógica de adicionar amigos e realizar o sorteio.

## Contribuindo

Se você quiser contribuir com melhorias ou corrigir algum erro, siga os passos abaixo:

1. **Fork** este repositório.
2. Crie uma nova branch com suas alterações:
   ```bash
   git checkout -b minha-alteracao
