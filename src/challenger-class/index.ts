class Personagem {
  constructor(
    public nome: string,
    public idade: number,
    public tipo: string,
    public ataque: string
  ) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
    this.ataque = ataque;
  }

  attack = () => {
    console.log(`o ${this.tipo} atacou usando ${this.ataque}`);
  };
}

const personagem = new Personagem("Goku", 30, "Saiyajin", "Kamehameha");
