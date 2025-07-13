import * as readline from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

let tabla = [];

const mostrarTablaMultiplicar = (numero) => {
  for (let i = 0; i <= 10; i++) {
    tabla.push(`${numero} x ${i} = ${numero * i}`)
  }
  console.log(tabla)
}

rl.question(`Dime un número: `, numero => {
  numero = parseInt(numero);
  if (isNaN(numero) === true) {
    console.log("Dime un número de verdad")
  } else {
    mostrarTablaMultiplicar(numero);
  }
  rl.close();
});
