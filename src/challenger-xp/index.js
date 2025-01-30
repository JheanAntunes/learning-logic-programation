//obs: dicas, loops, variaveis, operadores, ifs

const nameHero = "sueprman";
const experienceHero = 20000;
const experienceHeroNumber = experienceHero ? parseFloat(experienceHero) : 0;
let rankHero = "";
if (experienceHeroNumber <= 1.0) {
  rankHero = "Ferro";
} else if (experienceHeroNumber >= 1.001 && experienceHeroNumber <= 2.0) {
  rankHero = "Bronze";
} else if (experienceHeroNumber >= 2.001 && experienceHeroNumber <= 5.0) {
  rankHero = "Prata";
} else if (experienceHeroNumber >= 5.001 && experienceHeroNumber <= 7.0) {
  rankHero = "Ouro";
} else if (experienceHeroNumber >= 7.001 && experienceHeroNumber <= 8.0) {
  rankHero = "Platina";
} else if (experienceHeroNumber >= 8.001 && experienceHeroNumber <= 9.0) {
  rankHero = "Ascendente";
} else if (experienceHeroNumber >= 9.001 && experienceHeroNumber <= 10.0) {
  rankHero = "Imortal";
} else {
  rankHero = "Radiante";
}

console.log(`O Herói de nome ${nameHero} está no nível de ${rankHero}`);

// Função para determinar o nível do herói com base no XP
function determinarNivel(xp) {
  const niveis = [
    { limite: 1000, nome: "Ferro" },
    { limite: 2000, nome: "Bronze" },
    { limite: 5000, nome: "Prata" },
    { limite: 7000, nome: "Ouro" },
    { limite: 8000, nome: "Platina" },
    { limite: 9000, nome: "Ascendente" },
    { limite: 10000, nome: "Imortal" },
    { limite: Infinity, nome: "Radiante" },
  ];

  for (const nivel of niveis) {
    if (xp <= nivel.limite) {
      return nivel.nome;
    }
  }
}

// Variáveis para armazenar o nome e a quantidade de XP do herói
let nome = "Arthur";
let xp = 20500;

// Obter o nível do herói
let nivel = determinarNivel(xp);

// Exibir a mensagem com o nome e o nível do herói
console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
