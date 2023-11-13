const form = document.querySelector('form');

const saida = document.getElementById('saida');
form.onsubmit = (e) => {
    const inputs = new FormData(e.target);

    // Declarar as variáveis
let opcao, tipoUnidade, valor;

// Mostrar a mensagem inicial
console.log("** Sistema de conversão de unidades de medidas **");

// Mostrar o menu principal
do {
  console.log();

  opcao = parseInt(prompt("Escolha uma opção: \n1) Conversões de tempo \n2) Conversões de tamanho \n3) Conversões de massa \n0) Sair: "));

  // Processar a opção selecionada
  switch (opcao) {
    // Conversões de tempo
    case 1:
      do {
        console.log();
        tipoUnidade = prompt("Escolha uma opção: \nA) Converter tempo de horas para minutos \nB) Converter tempo de minutos para segundos \nC) Cancelar e Sair: ");

        // Processar a opção selecionada
        switch (tipoUnidade) {
          case "A":
            // Converter tempo de horas para minutos
            valor = parseFloat(prompt("Digite o valor em horas: "));
            alert("O valor em minutos é: " + valor * 60);
            break;

          case "B":
            // Converter tempo de minutos para segundos
            valor = parseFloat(prompt("Digite o valor em minutos: "));
            alert("O valor em segundos é: " + valor * 60);
            break;

          case "C":
            // Cancelar e sair
            alert("Cancelando...");
            break;

          default:
            // Opção inválida
            alert("Opção inválida!");
            break;
        }
      } while (tipoUnidade !== "C");
      break;

    case 2:
      // Conversões de tamanho
      do {
        console.log();
        tipoUnidade = prompt("Escolha uma opção: \nA) Converter tamanho de quilômetros para metros \nB) Converter tamanho de metros para centímetros \n0) Cancelar e Sair: ");

        // Processar a opção selecionada
        switch (tipoUnidade) {
          case "A":
            // Converter tamanho de quilômetros para metros
            valor = parseFloat(prompt("Digite o valor em quilômetros: "));
            alert("O valor em metros é: " + valor * 1000);
            break;
          case "B":
            // Converter tamanho de metros para centímetros
            valor = parseFloat(prompt("Digite o valor em metros: "));
            alert("O valor em centímetros é: " + valor * 100);
            break;
          case "C":
            // Cancelar e sair
            alert("Cancelando...");
            break;
          default:
            // Opção inválida
            alert("Opção inválida!");
            break;
        }
      } while (tipoUnidade !== "C");
      break;

    case 3:
      // Conversões de massa
      do {
        console.log();
        tipoUnidade = prompt("Escolha uma opção: A) Converter massa de quilos para gramas B) Converter massa de gramas para miligramas C) Cancelar e Sair: ");

        // Processar a opção selecionada
        switch (tipoUnidade) {
          case "A":
            // Converter massa de quilos para gramas
            valor = parseFloat(prompt("Digite o valor em quilos: "));
            alert("O valor em gramas é: " + valor * 1000);
            break;
          case "B":
            // Converter massa de gramas para miligramas
            valor = parseFloat(prompt("Digite o valor em gramas: "));
            alert("O valor em miligramas é: " + valor * 1000);
            break;
          case "C":
            // Cancelar e sair
            alert("Cancelando...");
            break;
          default:
            // Opção inválida
            alert("Opção inválida!");
            break;
        }
      } while (tipoUnidade !== "C");
      break;

    case 0:
      alert("Finalizando sistema.");
      break;

    default:
      alert("Valor Inválido. Digite um valor válido.");
  }
} while (opcao !== 0);

    

// Mostraando o IDH e a classificação do país
    saida.textContent = ("Obrigado! até logo");
  return false;
}