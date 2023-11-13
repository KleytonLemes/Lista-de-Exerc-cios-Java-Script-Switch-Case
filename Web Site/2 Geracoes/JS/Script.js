const form = document.querySelector('form');

const saida = document.getElementById('saida');

form.onsubmit = (evento) => {
    const inputs = new FormData(evento.target);

    const anoNascismento = parseInt(inputs.get('anoNascimento'));
    let geracao;

    //caso tenha alguma comparação, tem q por o um true dentro do switch, ao invez de uma variavel
    switch (true){
        case (anoNascismento <= 1946):
            geracao = "Sem Geração";
        break;
        
        case (anoNascismento <= 1964):
            geracao = "Baby Boomer";
        break;
        
        case (anoNascismento <= 1980):
            geracao = "Geração X";
        break;
    
        case (anoNascismento <= 1996):
            geracao = "Geração Y ou Millennials";
        break;
    
        case (anoNascismento <= 2010):
            geracao = "Geração Z";
        break;
        
        default:
            geracao = "Geração Alfa";
}

saida.textContent=("Sua geração é " + geracao)




    return false;
}
