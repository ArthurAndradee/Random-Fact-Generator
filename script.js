const body = document.getElementsByClassName("body")

function random() {    
    const fact = document.getElementById("fact")
    const possibleFacts = 
    [
        "1. Existem mais átomos em um único copo de água do que em todos os oceanos da Terra.",

        "2. Se todos os hot dogs que os norte-americanos comem durante 1 ano fossem enfileirados, poderia ser feita uma “ponte” que daria duas vezes a distância entre a Terra e a Lua.",
        
        "3. No século XIV, oficiais franceses executaram um porco em público após ele ter sido acusado de devorar uma criança.",
        
        "4. Cem milhões de anos atrás, os crocodilos tinham pernas longas e podiam galopar atrás de suas presas.",
        
        "5. O algodão doce foi inventado por um dentista.",
        
        "6. Alguns animais, como os polvos, têm três corações separados.",
        
        "7. A água quente congela mais rápido do que a fria.",
        
        "8. Existem mais carros do que pessoas em Los Angeles.",
        
        "9. O plástico bolha foi originalmente projetado para ser usado como papel de parede.",

        "10. A maior palavra da língua portuguesa refere-se a uma doença causada pela inalação de cinzas vulcânicas: pneumoultramicroscopicossilicovulcanoconiótico.",

        "11. Acredita-se que o Livro dos Recordes do Guinness tenha sido roubado mais vezes do que qualquer outro livro da biblioteca. Um recorde adequado!",

        "12. Você substitui cada partícula em seu corpo a cada sete anos. Você literalmente não é a mesma pessoa que era há 7 anos.",

        "13. A probabilidade de que em qualquer copo d’água encontre pelo menos 1 molécula de água uma vez ingerida por Cleópatra é praticamente 100%.",

        "14. A Nutella foi inventada durante a Segunda Guerra Mundial, quando um confeiteiro italiano misturou avelãs com chocolate para estender sua ração de chocolate.",

        "15. Acredita-se que você gasta quase três anos procurando coisas que possa ter perdido.",

        "16. Todo o ouro extraído na história do mundo caberia em um cubo de 20x20x20 metros.",

        "17. Os esquilos plantam milhares de árvores todos os anos, simplesmente por esquecer onde colocaram suas sementes.",

        "18. Os coalas podem dormir até 20 horas por dia.",

        "19. A peça musical mais longa do mundo dura 639 anos.",

        "20. Netuno foi o primeiro planeta a ter sua existência prevista por cálculos antes de ser realmente visto por um telescópio.",

        "21. 90% da população mundial vive no hemisfério norte.",

        "22. É mais provável que você se torne presidente do que ganhe na loteria.",

        "23. A barba pode retardar o processo de envelhecimento, impedindo que a água saia da pele, mantendo-a hidratada.",

        "24. Ninguém sabe quem foi o primeiro que chamou nosso planeta de “Terra”.",

        "25. Um cubo mágico tradicional tem 43.252.003.274.489.856.000 de possíveis combinações diferentes. E, acredite se quiser, cada uma delas pode ser resolvida com 20 movimentos ou menos.",
    ]

    const selNumber = Math.floor(Math.random() * 25);
    const randomFact = possibleFacts[selNumber];
    
    const generateRandomFact = () => {
        return randomFact;
    };

    console.log(generateRandomFact());

    fact.innerHTML = (generateRandomFact())
}