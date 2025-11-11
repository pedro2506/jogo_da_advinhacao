# 🎯 Jogo de Adivinhação (1 a 10)

Um pequeno jogo interativo feito em **HTML, CSS e JavaScript puro**, onde o jogador tenta adivinhar um número secreto gerado automaticamente entre **1 e 10**.

---

## 🖼️ Demonstração

<p align="center">
  <img src="./img/preview.png" 
       alt="Preview do jogo de adivinhação" width="500">
</p>

> **Nota:** Se a imagem não aparecer, verifique se o arquivo `preview.png` está na pasta `img/` do seu repositório.

---

## 📘 Sobre o Projeto

Este projeto foi criado para praticar conceitos fundamentais de **lógica de programação** e **desenvolvimento web**, incluindo:

- **Variáveis** (`let`, `const`)
- **Estruturas condicionais** (`if`, `else if`, `else`)
- **Operadores lógicos e comparativos**
- **Manipulação do DOM** com `getElementById`
- **Funções** e **eventos** com `addEventListener`
- **CSS moderno** com variáveis e Flexbox
- **HTML semântico** com tags apropriadas

O objetivo é simples: **adivinhar o número secreto** com o menor número de tentativas possível!

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura da página
- **CSS3** - Estilização e layout responsivo
- **JavaScript (ES6)** - Lógica e interatividade

---

## 🚀 Como Executar

### 1️⃣ Clone o repositório

```bash
git clone https://github.com/pedro2506/jogo_da_adivinhacao.git
cd jogo_da_adivinhacao
```

### 2️⃣ Estrutura de Pastas

```
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
```

### 3️⃣ Abrir o Jogo

Basta abrir o arquivo **index.html** em qualquer navegador moderno (Chrome, Firefox, Edge, Safari).

> 💡 **Não é necessário nenhum servidor ou instalação** — o jogo roda 100% localmente no navegador.

---

## 🧠 Como Funciona

### Lógica do Jogo

1. **Geração do número secreto**: O JavaScript gera um número aleatório entre 1 e 10 usando a função `Math.floor(Math.random() * 10) + 1`

2. **Entrada do jogador**: O jogador digita um número no campo de entrada e clica em "Tentar" (ou pressiona Enter)

3. **Comparação e feedback**: O jogo compara o palpite com o número secreto:
   - ✅ **Acertou** → Mostra mensagem de vitória com o número de tentativas
   - 📈 **Menor** → Indica que deve tentar um número maior
   - 📉 **Maior** → Indica que deve tentar um número menor

4. **Contador de tentativas**: O jogo registra quantas tentativas foram necessárias

5. **Reiniciar**: O botão "Reiniciar" gera um novo número secreto sem recarregar a página

### Função `gerarNumero()`

```javascript
function gerarNumero() {
  return Math.floor(Math.random() * 10) + 1;
}
```

Esta função utiliza:
- `Math.random()` - Gera número decimal entre 0 e 0.999...
- Multiplicação por 10 - Escala para 0 até 9.999...
- `Math.floor()` - Arredonda para baixo (0 a 9)
- `+1` - Ajusta o intervalo para 1 a 10

---

## 🎮 Funcionalidades

✅ Gera número secreto aleatório entre 1 e 10  
✅ Validação de entrada (apenas números de 1 a 10)  
✅ Mensagens dinâmicas de feedback  
✅ Contador de tentativas  
✅ Suporte à tecla **Enter** como atalho  
✅ Botão de reiniciar sem recarregar a página  
✅ Design responsivo para mobile e desktop  
✅ Interface moderna com animações suaves  

---

## 📂 Detalhes dos Arquivos

### `index.html`
Estrutura da página com:
- Tags semânticas (`<main>`)
- Campo de entrada com atributos de acessibilidade (`aria-label`, `aria-live`)
- Botões de ação
- Área de mensagens dinâmicas

### `css/style.css`
Estilização moderna com:
- **Variáveis CSS** para fácil manutenção
- **Flexbox** para centralização e layout
- **Media queries** para responsividade
- **Transições** e **hover effects**
- **Design glassmorphism** (efeito de vidro)

### `js/script.js`
Lógica completa do jogo:
- Geração de número aleatório otimizada
- Validação robusta de entrada
- Sistema de reinicialização sem reload
- Proteção contra tentativas após vitória
- Eventos de teclado e clique

---

## 🎨 Melhorias Implementadas

Este projeto segue boas práticas de desenvolvimento:

- ✅ **HTML semântico** com tags apropriadas
- ✅ **CSS organizado** com variáveis e comentários
- ✅ **JavaScript moderno** com funções bem nomeadas
- ✅ **Separação de responsabilidades** (HTML/CSS/JS em arquivos distintos)
- ✅ **Responsividade** para diferentes tamanhos de tela
- ✅ **Acessibilidade** com atributos ARIA
- ✅ **Código limpo** e bem comentado

---

## 🧑‍💻 Desenvolvido por: 

**Pedro Miranda**

- 🔗 GitHub: [@pedro2506](https://github.com/pedro2506)
- 📧 Email: t3pedropaulo@gmail.com

---

## 📄 Licença

Este projeto está sob a licença especificada no arquivo [LICENSE](LICENSE).

---

## 🌟 Contribuições

Sugestões e melhorias são sempre bem-vindas! Sinta-se à vontade para:

1. Fazer um fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abrir um Pull Request

---

<p align="center">
  Feito com 💛 e ☕ por Pedro Miranda
</p>
