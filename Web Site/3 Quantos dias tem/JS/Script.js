const form = document.querySelector('form');

const saida = document.getElementById('saida');

form.onsubmit = (e) => {
  const inputs = new FormData(e.target);

  const mes = inputs.get('mes');
  let dias

  //Quantidades de dias
  switch (mes) {
    case "1":
    case "2":
    case "3":
    case "5":
    case "7":
    case "8":
    case "10":
    case "12":
      dias = 31;
      break;

    case "4":
    case "6":
    case "9":
    case "11":
      dias = 30;
      break;

    case "2":
      dias = 28;
      break;

    default:
      alert("Mês Inválido! ");
  }

  saida.textContent = ("O mês possui " + dias + " dias");
  return false;
}