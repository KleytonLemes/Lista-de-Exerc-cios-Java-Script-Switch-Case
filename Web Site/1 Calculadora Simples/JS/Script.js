const form = document.querySelector('form');

form.onsubmit = (e) => {
    let resultado
    
    const inputs = new FormData(e.target);

    const numero1 = parseFloat(inputs.get('numero1'));
    const numero2 = parseFloat(inputs.get('numero2'));

     // Verificar se os valores são válidos
     if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, insira números válidos.");
        return;
    }

    do {
        console.log();
        //Menu de opções
        let opcao = prompt("Escolha uma opção: \n(1) Adição \n(2) Subtração \n(3) Divisão \n(4) Multiplicação \n(0) Sair");
      
        // Converta a entrada do usuário em número
        opcao = parseInt(opcao);
      
        // Verifique se o usuário deseja sair
        if (opcao === 0) {
          break; // Saia do loop
        }
      
        // Solicitar os números
        let resultado;
      
        // Realizar a operação com base na escolha do usuário
        switch (opcao) {
          case 1:
            resultado = numero1 + numero2;
            break;
      
          case 2:
            resultado = numero1 - numero2;
            break;
      
          case 3:
            resultado = numero1 / numero2;
            break;
      
          case 4:
            if (numero2 === 0) {
                alert("Não é possível dividir por zero.");
            } else {
                alert(resultado = numero1 * numero2);
            }            
            break;
      
          default:
            alert("Opção inválida");
            continue; // Volte ao início do loop
        }
      
        alert("O resultado da operação é " + resultado);
      } while (true); // Use "true" para que o loop continue até que o usuário escolha sair
      





    

    return false;
}