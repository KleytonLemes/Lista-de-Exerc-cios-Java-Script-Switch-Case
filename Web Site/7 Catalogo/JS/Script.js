const form = document.querySelector('form');

const saida1 = document.getElementById('saida1');
const saida2 = document.getElementById('saida2');
const saida3 = document.getElementById('saida3');
const saida4 = document.getElementById('saida4');

form.onsubmit = (e) => {
    const inputs = new FormData(e.target);

    // Solicitar ao usuário que escolha um gênero
    var genero = prompt("Escolha um gênero de série:\n1) Comédia\n2) Drama\n3) Ação");

    // Usando a estrutura switch...case para fornecer recomendações com base na escolha do usuário
    switch (genero) {
        case "1":
            saida1.textContent = ("Recomendação de Comédia");
            saida2.textContent = ("Brooklyn Nine-Nine");
            saida3.textContent = ("O Peso do Talento");
            saida4.textContent = ("O Homem de Toronto");
        break;

        case "2":
            saida1.textContent = ("Recomendação de Drama");
            saida2.textContent = ("Breaking Bad");
            saida3.textContent = ("A favorita");
            saida4.textContent = ("Nomadland");
        break;

        case "3":
            saida1.textContent = ("Recomendação de Ação");
            saida2.textContent = ("Stranger Things");
            saida3.textContent = ("Cabras da Peste");
            saida4.textContent = ("O Último Mercenário");
        break;

        default:
            alert("Opção inválida. Por favor, escolha um gênero válido.");
}



    
  return false;
}






