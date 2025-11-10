// === Função que gera um número aleatório de 1 a 10 ===
function gerarNumero() {
  // Math.random() gera um número decimal entre 0 e 1 (ex: 0.57)
  // Multiplicamos por 10 para ir até 9.999...
  // parseInt() remove as casas decimais
  // +1 garante que o número vá de 1 até 10
  return parseInt((Math.random() * 10) % 10) + 1;
}

// === Define o número secreto usando a função acima ===
const numeroSecreto = gerarNumero();

// Guarda quantas tentativas o jogador fez
let tentativas = 0;

// === Conecta o JavaScript aos elementos do HTML ===
// Pega o campo onde o jogador digita o número
const input = document.getElementById("palpite");
// Botão "Tentar"
const btnTentar = document.getElementById("btnTentar");
// Botão "Reiniciar"
const btnReiniciar = document.getElementById("btnReiniciar");
// Parágrafo onde aparece o resultado
const mensagem = document.getElementById("mensagem");


// === Função principal que roda quando o jogador tenta adivinhar ===
function verificarPalpite() {
  // Converte o valor digitado (string) para número
  const palpite = Number(input.value);

  // Aumenta o contador de tentativas
  tentativas++;

  // Validação: impede números vazios, negativos ou fora do limite
  if (!palpite || palpite < 1 || palpite > 10) {
    mensagem.textContent = "⚠️ Digite um número entre 1 e 10.";
    return; // Sai da função sem continuar
  }

  // Se o palpite for igual ao número secreto
  if (palpite === numeroSecreto) {
    mensagem.innerHTML = `🎉 Acertou !<br>   O número era ${numeroSecreto}.<br>Tentativas: ${tentativas}`;
    btnTentar.disabled = true; // Desativa o botão para evitar novas jogadas
  }
  // Se o palpite for menor que o número secreto
  else if (palpite < numeroSecreto) {
    mensagem.textContent = "📈 Tente um número MAIOR!";
  }
  // Se o palpite for maior que o número secreto
  else {
    mensagem.textContent = "📉 Tente um número MENOR!";
  }

  // Limpa o campo e coloca o cursor novamente
  input.value = "";
  input.focus();
}


// === Função para reiniciar o jogo ===
function reiniciarJogo() {
  // Recarrega a página (gera novo número e zera tentativas)
  location.reload();
}


// === Eventos (ações do jogador) ===

// Quando clicar em "Tentar", roda a função verificarPalpite()
btnTentar.addEventListener("click", verificarPalpite);

// Quando clicar em "Reiniciar", recarrega o jogo
btnReiniciar.addEventListener("click", reiniciarJogo);

// Quando apertar Enter no teclado, também tenta adivinhar
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") verificarPalpite();
});
