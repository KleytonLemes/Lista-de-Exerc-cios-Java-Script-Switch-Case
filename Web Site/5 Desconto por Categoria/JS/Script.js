const form = document.querySelector('form');

const saidaOpção = document.getElementById('saidaOpção');
const saidaValorBruto = document.getElementById('saidaValorBruto');
const saidaValorDesconto = document.getElementById('saidaValorDesconto');
const saidaFrete = document.getElementById('saidaFrete');

form.onsubmit = (e) => {
    const inputs = new FormData(e.target);

    const valorCompra = inputs.get('valorCompra');

    do {
        console.log();
        
        let opcao = parseFloat(prompt("Escolha a categoria de assinante: \n1) Assinante Premium \n2) Assinante Gold \n3) Assinante Silver \n4) Não assinante \n0) Sair"));
    
        switch (opcao) {
          case 1:
            valorFinal = valorCompra * 0.8; // 20% de desconto
            saidaOpção.textContent = ("Opção " + opcao);
            saidaValorBruto.textContent = ("Valor da compra bruto: R$ " + valorCompra);
            saidaValorDesconto.textContent = ("Valor da compra com desconto: R$ " + valorFinal);
            saidaFrete.textContent = ("Frete grátis");
            break;
    
          case 2:
            valorFinal = valorCompra * 0.8; // 20% de desconto
            saidaOpção.textContent = ("Opção " + opcao);
            saidaValorBruto.textContent = ("Valor da compra bruto: R$ " + valorCompra);
            saidaValorDesconto.textContent = ("Valor da compra com desconto: R$ " + valorFinal);
            saidaFrete.textContent = ("nValor do frete: R$ 12,50");
            break;
    
          case 3:
            valorFinal = valorCompra * 0.9; // 10% de desconto
            saidaOpção.textContent = ("Opção " + opcao);
            saidaValorBruto.textContent = ("Valor da compra bruto: R$ " + valorCompra);
            saidaValorDesconto.textContent = ("Valor da compra com desconto: R$ " + valorFinal);
            saidaFrete.textContent = ("Valor do frete: R$ 12,50");
            break;
    
          case 4:
            valorFinal = valorCompra;
            saidaOpção.textContent = ("Opção " + opcao);
            saidaValorBruto.textContent = ("Valor da compra bruto: R$ " + valorCompra);
            saidaValorDesconto.textContent = ("Valor da compra com desconto: R$ " + valorFinal);
            saidaFrete.textContent = ("Valor do frete: R$ 12,50");
            break;
    
          case 0:
            console.log("Finalizando sistema! Até logo.");
            break;
    
          default:
            alert("Opção inválida. Digite um valor válido.");
        }
        return false;
      } while (opcao !== 0);
    
  return false;
}