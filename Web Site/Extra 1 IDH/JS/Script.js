const form = document.querySelector('form');

const saidaNomePais = document.getElementById('saidaNomePais');
const saidaIDH = document.getElementById('saidaIDH');
const saidaClassificao = document.getElementById('saidaClassificao');

form.onsubmit = (e) => {
    const inputs = new FormData(e.target);

    // Solicitando ao usuário o nome do país e as notas para os três aspectos
let nomePais = prompt("Digite o nome do país:");
let notaRenda = parseFloat(prompt("Digite a nota de renda (0 a 10):"));
let notaEducacao = parseFloat(prompt("Digite a nota de educação (0 a 10):"));
let notaSaude = parseFloat(prompt("Digite a nota de saúde (0 a 10):"));

// Calculando o IDH
let mediaNotas = (notaRenda + notaEducacao + notaSaude) / 3;
let idh = mediaNotas * 0.1;

// Classificar o país com base no IDH
let classificacao;

switch (true) {
  case idh <= 0.555:
    classificacao = "Baixo desenvolvimento";
    break;

  case idh <= 0.699:
    classificacao = "Médio desenvolvimento";
    break;

  case idh <= 0.799:
    classificacao = "Alto desenvolvimento";
    break;

  default:
    classificacao = "Muito alto desenvolvimento";
    break;
}

// Mostraando o IDH e a classificação do país
saidaNomePais.textContent = (nomePais);
saidaIDH.textContent = ("O IDH do " + nomePais + " é  " + " " + idh.toFixed(3));
saidaClassificao.textContent = ("Classificação = " + classificacao);
  return false;
}