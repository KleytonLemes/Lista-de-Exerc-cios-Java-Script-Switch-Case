const form = document.querySelector('form');

const saida = document.getElementById('saida');


form.onsubmit = (e) => {
    let arremesso1 = parseInt(prompt("Digite a pontuação do arremesso 1:"));

    let arremesso2 = parseInt(prompt("Digite a pontuação do arremesso 2:"));

    let arremesso3 = parseInt(prompt("Digite a pontuação do arremesso 3:"));

    let somaTotal = arremesso1 + arremesso2 + arremesso3;

    switch (somaTotal) {
        case 0:
          saida.textContent = ("Avai das petecas");
          break;
      
        case 1:
        case 2:
        case 3:
        case 4:
            saida.textContent = ("Pseudo-petequeiro");
          break;
      
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            saida.textContent = ("Petequeiro de final de semana");
          break;
      
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
            saida.textContent = ("Petequeiro Profissa");
          break;
      
        case 15:
            saida.textContent = ("Deus da peteca");
          break;
      
        default:
            saida.textContent = ("Você é um ladrão");
          break;
      }



    
    
  return false;
}