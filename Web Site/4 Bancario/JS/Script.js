const form = document.querySelector('form');

const saida = document.getElementById('saida');

form.onsubmit = (e) => {
    const inputs = new FormData(e.target);


    let saldo = 0;
    let deposito, saque, emprestimo;
    let opcao;
    const limiteEmprestimo = 500; // Define o limite de empréstimo

do {
  console.log();

  opcao = parseInt(prompt("Digite a opção desejada: \n(1) Depósito \n(2) Saque \n(3) Saldo \n(4) Empréstimo \n(0) Sair"));

  switch (opcao) {
    case 1:
      deposito = parseFloat(prompt("Digite o valor do depósito:"));
      saldo += deposito;
      break;

    case 2:
      saque = parseFloat(prompt("Digite o valor do saque:"));
      if (saldo >= saque) {
        saldo -= saque;
        alert("Retire seu dinheiro.");
      } else {
        alert("Saldo insuficiente.");
      }
      break;

    case 3:
      alert("Saldo: " + saldo);
      break;

    case 4:
      emprestimo = parseFloat(prompt("Digite o valor do empréstimo:"));
      if (emprestimo > 0 && emprestimo <= limiteEmprestimo) {
        saldo += emprestimo;
        alert("Empréstimo aprovado. Seu saldo atual é: " + saldo);
      } else {
        alert("Valor de empréstimo inválido ou excede o limite.");
      }
      break;

    case 0:
      alert("Finalizando sistema.");
      alert("Retire seu cartão.");
      break;

    default:
      alert("Valor Inválido. Digite um valor válido.");
  }
} while (opcao !== 0);

  saida.textContent = ("Obrigado. Até logo!");
  return false;
}