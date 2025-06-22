import * as readline from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';

let resultado = 0;

const lanzarDado = () => {
  return parseInt((Math.random() * 6) + 1)
}

const rl = readline.createInterface({ input, output });

console.log('¿Lanzas el dado? [y/n]');

rl.on('line', (line) => {

  let input = line.toLowerCase()

  if (input === "y") {
    let dado = lanzarDado();

    if (dado === 6) {
      console.log("Has perdido, has sacado un 6")
      rl.close();
    } else {
      resultado = resultado + dado

      if (resultado >= 12) {
        console.log(`Has ganado la partida, has sacado un ${resultado}`)
        rl.close();
      } else {
        console.log(`Has sacado un ${dado} y tu resultado es: ${resultado}`)
        console.log("¿Quieres volver a tirar o te plantas? [y/p (plantarse)]")
      }
    }

  } else if (input === "p") {
    console.log(`Te has plantado y tu resultado es: ${resultado}`)
    rl.close();
  } else {
    rl.close();
  }
});



