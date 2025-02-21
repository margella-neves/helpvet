// Função para remover acentos das palavras
function removerAcentos(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Lista de plantas tóxicas (usando arrays para diferentes nomes)
const plantasToxicas = [
    { nomes: ["comigo-ninguém-pode", "dieffenbachia"], 
      descricao: "<p>Essa planta é altamente tóxica para animais e humanos.</p><p>Pode causar irritação, inchaço e dificuldades respiratórias.</p>" },

    { nomes: ["lirio", "lirio-do-vale"], 
      descricao: "<p>O lírio é extremamente perigoso para gatos, podendo causar falência renal.</p>" },

    { nomes: ["espada-de-sao-jorge", "espada-de-ogum"], 
      descricao: "<p>Levemente tóxica. Pode causar irritação na boca e náusea em animais.</p>" },

    { nomes: ["costela-de-adao", "monstera"], 
      descricao: "<p>Pode causar irritação na boca e no trato digestivo de cães e gatos.</p>" },

    { nomes: ["azaleia", "rododendro"], 
      descricao: "<p>Muito tóxica! Pode causar vômitos, diarreia e problemas cardíacos em animais.</p>" },

    { nomes: ["PALICOUREA MARCGRAVII", "cafezinho", "erva de rato", "cafe bravo", "roxa", "roxinha", "roxona", "vick"], 
      descricao: "<p>Muito tóxica! Elevada toxicidade e efeito cumulativo, tem boa palatabilidade.</p><p>Princípio tóxico: Ácido monofuracético.</p><P>Sinais clínicos: Desequilíbrio, tremores musculares, pedalagem, dispnéia, membros distendidos, taquicardia, convulção e morte.</p>"
      },
]

// Função para verificar toxicidade da planta
function verificarToxicidade() {
    let nomePlanta = document.getElementById("nomePlanta").value.trim();
    
    if (nomePlanta === "") {
        document.getElementById("resultado").innerHTML = "⚠️ Por favor, digite o nome de uma planta.";
        document.getElementById("resultado").style.color = "red";
        return;
    }

    // Normaliza o nome digitado (remove acentos e transforma em minúsculas)
    let nomePlantaNormalizado = removerAcentos(nomePlanta.toLowerCase());

    // Percorre a lista para verificar se a planta está na lista de tóxicas
    let plantaEncontrada = plantasToxicas.find(planta => 
        planta.nomes.some(nome => nome === nomePlantaNormalizado)
    );

    if (plantaEncontrada) {
        document.getElementById("resultado").innerHTML = `⚠️ <strong>Atenção!</strong> ${plantaEncontrada.descricao}`;
        document.getElementById("resultado").style.color = "red";
    } else {
        document.getElementById("resultado").innerHTML = `✅ Aparentemente, "${nomePlanta}" não está na nossa lista de plantas tóxicas. Mas sempre consulte um veterinário para ter certeza!`;
        document.getElementById("resultado").style.color = "green";
    }
}
