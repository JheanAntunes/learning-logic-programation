const myname: string = "Jhon";
const yourname: string = "Doe";
const copia = "copia";
const copiaCopia = "copia";
const idade: number = 18;
const largerIdade: number = 21;
console.log(myname === yourname); // false
console.log(myname !== yourname); // true

console.log(idade > largerIdade); // false
console.log(idade >= largerIdade); // false

console.log(idade < largerIdade); // true
console.log(idade <= largerIdade); // true

console.log(idade === largerIdade); // false
console.log(idade !== largerIdade); // true

console.log(copia === copiaCopia); // true
console.log(copia !== copiaCopia); // false
