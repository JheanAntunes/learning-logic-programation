class createPersonagem {
  constructor(nome, idade, genero, classe, level, vida) {
    this.nome = nome;
    this.idade = idade;
    this.genero = genero;
    this.classe = classe;
    this.level = level;
    this.vida = vida;
  }

  levelUp() {
    this.level += 1;
    this.vida += 10;
  }

  attack() {
    console.log("Atacando inimigo");
  }

  defend() {
    console.log("Defendendo ataque inimigo");
  }

  run = () => {
    console.log("Fugindo do inimigo");
  };
}

const personagem = new createPersonagem(
  "Lucas",
  25,
  "Masculino",
  "sword",
  1,
  100
);

console.log("personagem: ", personagem);
personagem.levelUp();
console.log("personagem: ", personagem);
personagem.attack();
personagem.defend();
personagem.run();
