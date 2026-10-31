

/*
==================================================
  DESAFIO: CLASSIFICADOR DE NÍVEL DE HERÓI
  TEMA: NARUTO SHIPPUDEN
==================================================

  CONCEITOS UTILIZADOS:
  - Variáveis
  - Operadores
  - Laços de repetição
  - Estruturas de decisão
==================================================
*/

// 1. CRIANDO A LISTA DE HERÓIS

const herois = [

    { nome: "Naruto Uzumaki", xp: 12000 },
    { nome: "Sasuke Uchiha", xp: 9500 },
    { nome: "Kakashi Hatake", xp: 8500 },
    { nome: "Itachi Uchiha", xp: 7500 },
    { nome: "Sakura Haruno", xp: 4500 },
    { nome: "Gaara do Deserto", xp: 3000 },
    { nome: "Rock Lee", xp: 1800 },
    { nome: "Konohamaru", xp: 800 }

];

// 2. LAÇO DE REPETIÇÃO

for (let i = 0; i < herois.length; i++) {

    // Armazenando o nome e a experiência do herói

    let nome = herois[i].nome;
    let xp = herois[i].xp;

    // 3. VARIÁVEL PARA ARMAZENAR O NÍVEL

    let nivel = "";

    // 4. ESTRUTURA DE DECISÃO

    if (xp < 1000) {

        nivel = "Ferro";

    } else if (xp <= 2000) {

        nivel = "Bronze";

    } else if (xp <= 5000) {

        nivel = "Prata";

    } else if (xp <= 7000) {

        nivel = "Ouro";

    } else if (xp <= 8000) {

        nivel = "Platina";

    } else if (xp <= 9000) {

        nivel = "Ascendente";

    } else if (xp <= 10000) {

        nivel = "Imortal";

    } else {

        nivel = "Radiante";

    }

    // 5. EXIBINDO O RESULTADO

    console.log("==================================");
    console.log("       CLASSIFICADOR NINJA");
    console.log("==================================");

    console.log(
        `O Herói de nome ${nome} está no nível de ${nivel}`
    );

    console.log(`Experiência (XP): ${xp}`);

    console.log("==================================");

}

// FIM DO DESAFIO
