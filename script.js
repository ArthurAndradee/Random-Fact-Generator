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

        "13. A probabilidade de que em qualquer copo da água encontre pelo menos 1 molécula de água uma vez ingerida por Cleópatra é praticamente 100%.",

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

        "26. As rãs mais venenosas tem apenas 10 milímetros de comprimento.",

        "27. Os lados opostos de um dado sempre somam sete.",

        "28. Todos os ursos polares são considerados canhotos.",

        "29. Uma água-viva não é feita de geleia – mas até 95% dela é realmente feito de água.",

        "30. O sinal do infinito é chamado de lemniscata.",

        "31. Os astronautas da Apollo 8 foram os primeiros a celebrar o Natal no espaço.",

        "32. Acredita-se que o ser humano passa cerca de dois anos de sua vida ao telefone.",

        "33. A Rainha Elizabeth II já foi treinada para ser mecânica.",

        "34. Pensa-se que o Monte Everest já foi muito mais alto do que realmente é hoje – um terremoto o reduziu ao tamanho.",

        "35. Acredita-se que até 50% das pessoas na Terra nunca tiveram que atender uma chamada telefônica.",

        "36. Antigamente na França, esposas infiéis eram forçadas a perseguir galinhas nas ruas, completamente nuas.",

        "37. Na história do Brasil, a moeda oficial mudou pelo menos oito vezes desde os anos 1940.",

        "38. É perfeitamente possível para uma girafa limpar as orelhas com a língua.",

        "39. Um estudo da Universidade de Chicago em 1915 concluiu que a cor mais fácil de detectar à distância é a cor amarela. É por isso que a cor mais popular para táxis é o amarelo.",

        "40. As galinhas têm uma capacidade mais ampla de ver as cores, o que significa que é muito provável que possam ver toda a extensão da paleta de um arco-íris.",
        
        "41. Canetas esferográficas matam até 100 pessoas a cada ano em acidentes de asfixia.",
        
        "42. O cérebro de um avestruz tem mais ou menos o mesmo tamanho de um olho humano.",
        
        "43. Os camelos têm três pálpebras para poder proteger seus olhos da areia.",
        
        "44. Os cientistas mataram acidentalmente o animal mais velho do mundo ao tentar examiná-lo. Tratava-se de um molusco de mais de 500 anos.",
        
        "45. As aranhas são consideradas mais assustadoras do que a morte.",
        
        "46. Em gravidade zero, a chama de uma vela é redonda e azul.",
        
        "47. Diamantes reais não aparecem no raio-X.",
        
        "48. A caligrafia ilegível mostra que os médicos matam mais de 7.000 pessoas e fere mais de 1,5 milhão de pessoas anualmente devido ao uso do medicamento errado.",
        
        "49. A cadeira elétrica foi, acredite ou não, criação de um dentista.",
        
        "50. É possível que um furacão gaste mais energia em apenas dez minutos do que todas as armas nucleares do mundo conseguem em uma explosão.",
    ]

    const selNumber = Math.floor(Math.random() * 50);
    const randomFact = possibleFacts[selNumber];
    
    const generateRandomFact = () => {
        return randomFact;
    };

    console.log(generateRandomFact());

    fact.innerHTML = (generateRandomFact())
}
