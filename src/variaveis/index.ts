//Type dados: string, number, boolean, array, object, tuple, enum, any, void, null, undefined, never

const nome: string = "João";
const idade: number = 27;
const adulto: boolean = true;
const simbolos: symbol = Symbol("qualquer-symbol");
//const big: bigint = 10n;
const frutas = ["Maçã", "Banana", "Pêra"];
const frutas2: Array<string> = ["Maçã", "Banana", "Pêra"];
const objeto: object = {
  chave: "valor",
};

let valor: any;
let valorUndefined: undefined;

const myVoid: VoidFunction = (): void => {};
const errror: never = (() => {
  throw new Error("Erro");
})();
