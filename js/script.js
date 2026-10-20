// === Função que gera um número aleatório de 1 a 10 ===
function gerarNumero() {
  return Math.floor(Math.random() * 10) + 1;
}

// === Variáveis do jogo ===
let numeroSecreto = gerarNumero();
let tentativas = 0;

// === Conecta o JavaScript aos elementos do HTML ===
const input = document.getElementById("palpite");
const btnTentar = document.getElementById("btnTentar");
const btnReiniciar = document.getElementById("btnReiniciar");
const mensagem = document.getElementById("mensagem");

// === Função principal que verifica o palpite ===
function verificarPalpite() {
  // Impede tentativas após vitória
  if (btnTentar.disabled) return;

  const palpite = Number(input.value);
  tentativas++;

  // Validação do input
  if (!palpite || palpite < 1 || palpite > 10) {
    mensagem.textContent = "⚠️ Digite um número entre 1 e 100.";
    input.value = "";
    input.focus();
    return;
  }

  // Verifica se acertou
  if (palpite === numeroSecreto) {
    mensagem.innerHTML = `🎉 Acertou!<br>O número era ${numeroSecreto}.<br>Tentativas: ${tentativas}`;
    btnTentar.disabled = true;
  } 
  // Verifica se é menor
  else if (palpite < numeroSecreto) {
    mensagem.textContent = "📈 Tente um número MAIOR!";
  } 
  // É maior
  else {
    mensagem.textContent = "📉 Tente um número MENOR!";
  }

  input.value = "";
  input.focus();
}

// === Função para reiniciar o jogo ===
function reiniciarJogo() {
  // Gera novo número secreto
  numeroSecreto = gerarNumero();
  
  // Reseta tentativas
  tentativas = 0;
  
  // Limpa mensagem
  mensagem.textContent = "";
  
  // Limpa e foca no input
  input.value = "";
  input.focus();
  
  // Reabilita botão Tentar
  btnTentar.disabled = false;
}

// === Verifica se pode processar o Enter ===
function verificarTeclaEnter(e) {
  if (e.key === "Enter" && !btnTentar.disabled) {
    verificarPalpite();
  }
}

// === Eventos ===
btnTentar.addEventListener("click", verificarPalpite);
btnReiniciar.addEventListener("click", reiniciarJogo);
input.addEventListener("keydown", verificarTeclaEnter);

// Foca no input ao carregar a página
input.focus();
