🎯 Jogo de Adivinhação (1 a 10)

Um pequeno jogo feito em **HTML + JavaScript puro**, onde o jogador tenta adivinhar um número secreto gerado automaticamente entre **1 e 10**.

---


## 🖼️ Demonstração

<img src="https://raw.githubusercontent.com/pedro2506/jogo_da_adivinhacao/main/preview.png" alt="Preview do jogo" width="500">


---

## 📘 Sobre o Projeto

Este projeto foi criado para praticar conceitos fundamentais de lógica de programação e desenvolvimento web, incluindo:

    Variáveis (let, const)
    Estruturas condicionais (if, else if, else)
    Operadores lógicos e comparativos
    Manipulação do DOM com getElementById
    Funções e eventos com addEventListener
    CSS moderno com variáveis e Flexbox
    HTML semântico com tags apropriadas

O objetivo é simples: adivinhar o número secreto com o menor número de tentativas possível!
🛠️ Tecnologias Utilizadas

    HTML5 - Estrutura da página
    CSS3 - Estilização e layout responsivo
    JavaScript (ES6) - Lógica e interatividade

🚀 Como Executar
1️⃣ Clone o repositório
bash

git clone https://github.com/pedro2506/jogo_da_adivinhacao.git
cd jogo_da_adivinhacao

2️⃣ Estrutura de Pastas

projeto/
├── css/
│   └── style.css      # Estilos do jogo
├── js/
│   └── script.js      # Lógica do jogo
├── img/
│   └── preview.png    # Imagem de demonstração
├── index.html         # Página principal
├── README.md          # Documentação
└── LICENSE            # Licença do projeto

3️⃣ Abrir o Jogo

Basta abrir o arquivo index.html em qualquer navegador moderno (Chrome, Firefox, Edge, Safari).

    💡 Não é necessário nenhum servidor ou instalação — o jogo roda 100% localmente no navegador.

🧠 Como Funciona
Lógica do Jogo

    Geração do número secreto: O JavaScript gera um número aleatório entre 1 e 10 usando a função Math.floor(Math.random() * 10) + 1
    Entrada do jogador: O jogador digita um número no campo de entrada e clica em "Tentar" (ou pressiona Enter)
    Comparação e feedback: O jogo compara o palpite com o número secreto:
        ✅ Acertou → Mostra mensagem de vitória com o número de tentativas
        📈 Menor → Indica que deve tentar um número maior
        📉 Maior → Indica que deve tentar um número menor
    Contador de tentativas: O jogo registra quantas tentativas foram necessárias
    Reiniciar: O botão "Reiniciar" gera um novo número secreto sem recarregar a página

Função gerarNumero()
javascript

function gerarNumero() {
  return Math.floor(Math.random() * 10) + 1;
}

Esta função utiliza:

    Math.random() - Gera número decimal entre 0 e 0.999...
    Multiplicação por 10 - Escala para 0 até 9.999...
    Math.floor() - Arredonda para baixo (0 a 9)
    +1 - Ajusta o intervalo para 1 a 10

🎮 Funcionalidades

✅ Gera número secreto aleatório entre 1 e 10
✅ Validação de entrada (apenas números de 1 a 10)
✅ Mensagens dinâmicas de feedback
✅ Contador de tentativas
✅ Suporte à tecla Enter como atalho
✅ Botão de reiniciar sem recarregar a página
✅ Design responsivo para mobile e desktop
✅ Interface moderna com animações suaves
📂 Detalhes dos Arquivos
index.html

Contém a interface do jogo: campo de entrada, botões e mensagens.

script.js

Contém toda a lógica:

Geração do número aleatório

Verificação de palpite

Controle de tentativas

Eventos de clique e teclado

👨‍💻 Autor

Desenvolvido por Pedro Miranda
💬 Projeto educacional para praticar lógica e JavaScript.

🪄 Licença

Este projeto está sob a licença especificada no arquivo LICENSE.
🌟 Contribuições

Sugestões e melhorias são sempre bem-vindas! Sinta-se à vontade para:

    Fazer um fork do projeto
    Criar uma branch para sua feature (git checkout -b feature/MinhaFeature)
    Commit suas mudanças (git commit -m 'Adiciona nova feature')
    Push para a branch (git push origin feature/MinhaFeature)
    Abrir um Pull Request

<p align="center"> Feito com 💛 e ☕ por Pedro Miranda </p>
