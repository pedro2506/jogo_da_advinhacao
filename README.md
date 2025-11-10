# 🎯 Jogo de Adivinhação (1 a 10)

Um pequeno jogo feito em **HTML + JavaScript puro**, onde o jogador tenta adivinhar um número secreto gerado automaticamente entre **1 e 10**.

---


## 🖼️ Demonstração
<h1 align="center">🎯 Jogo da Adivinhação</h1>

<p align="center">
  Tente adivinhar o número secreto entre <strong>1 e 10</strong>!  
  Um mini projeto simples com <strong>HTML, CSS e JavaScript</strong>.
</p>

<p align="center">
 <img src="https://raw.githubusercontent.com/pedro2506/jogo_da_adivinhacao/main/preview.png" alt="Preview do jogo" width="500">
</p>



---

## 📘 Sobre o Projeto

Este projeto foi criado para praticar conceitos básicos de **lógica de programação** e **JavaScript**, incluindo:

- Variáveis (`let`, `const`)
- Estruturas condicionais (`if`, `else if`, `else`)
- Operadores lógicos e comparativos
- Manipulação do DOM (HTML com `getElementById`)
- Funções e eventos (`addEventListener`)

O objetivo é simples: **adivinhar o número secreto** com o menor número de tentativas possível.

---

## 🚀 Como Executar

### 1️⃣ Estrutura de Pastas
Certifique-se de que os arquivos estão organizados assim:
projeto/
├── index.html
└── script.js


### 2️⃣ Abrir o Jogo
Basta abrir o arquivo **index.html** em qualquer navegador (Chrome, Firefox, Edge etc.).

> 💡 Não é necessário nenhum servidor ou instalação — o jogo roda 100% localmente no navegador.

---

## 🧠 Lógica do Jogo

1. O JavaScript gera um número aleatório entre **1 e 10** usando a função:
   ```js
   function gerarNumero() {
     return parseInt((Math.random() * 10) % 10) + 1;
   }
   O jogador digita um número e clica em “Tentar”.

2. O jogador digita um número e clica em “Tentar”.
3. O jogo compara o número digitado com o número secreto:
Se for igual → mostra mensagem de vitória 🎉
Se for menor → mostra “Tente um número maior 📈”
Se for maior → mostra “Tente um número menor 📉”
4. O jogo conta o número de tentativas e exibe na tela quando o jogador acerta.
5. O botão “Reiniciar” recarrega a página e gera um novo número secreto.


🖥️ Funcionalidades

✅ Gera número secreto aleatório
✅ Mostra mensagens dinâmicas na tela
✅ Informa número de tentativas
✅ Aceita tecla Enter como atalho para jogar
✅ Botão para reiniciar o jogo rapidamente


🧩 Tecnologias Utilizadas

HTML5 → estrutura da página
JavaScript (ES6) → lógica e interatividade
(Opcional) CSS3 → para personalizar visualmente o jogo

📂 Arquivos
index.html

Contém a interface do jogo: campo de entrada, botões e mensagens.

script.js

Contém toda a lógica:

Geração do número aleatório

Verificação de palpite

Controle de tentativas

Eventos de clique e teclado

---

## 🧑‍💻 Autor

Feito com 💛 por **Pedro Miranda**  
🔗 [GitHub](https://github.com/pedro2506)
email: t3pedropaulo@gmail.com


🪄 Licença

Este projeto é de uso livre para estudo e aprendizado.
Sinta-se à vontade para modificar, melhorar e compartilhar!
