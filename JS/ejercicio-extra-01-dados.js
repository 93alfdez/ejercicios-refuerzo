// /*Una asignatura está compuesta por cuatro examenes, para aprobar hay que sacar más de un 3 en cada uno de ellos, y la media de los 4 examenes debe tener en total una puntuación de más de 5 (el examen se puntua de 0 a 10), crea un programa en el que introduzcas cuatro notas y te diga si eres apto o no.

// Te pasamos un posible html como referencia (puedes mostrar el resultado por consola o por pantalla):*/
import * as readline from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';
import { isStringObject } from 'node:util/types';

let resultado = 0;
let dado = 0;

const lanzarDado = () => {
  dado = parseInt((Math.random() * 6) + 1)
  if (dado === 6) {
    console.log("Has perdido, has sacado un 6")
    rl.close();
  } else {
    if (resultado >= 50) {
      console.log(`Has ganado la partida, has sacado un ${resultado}`)
    } else {
      resultado = resultado + dado
      console.log(`Has sacado un ${dado} y tu resultado es: ${resultado}`)
      console.log("¿Quieres volver a tirar o te plantas? (Escribe 'plantarse' si te plantas)")
    }
  }
}

const rl = readline.createInterface({ input, output });

console.log('¿Lanzas el dado?');

rl.on('line', (line) => {
  if (typeof line === String) {
    if (line === "y") {
      lanzarDado();
    } else if (line === "plantarse") {
      console.log(`Te has plantado y tu resultado es: ${resultado}`)
      rl.close();
    } else if (line === "n" || line === "plantarse") {
      rl.close();
    }
  } else {
    console.log("Escribe 'y' para empezar a jugar")
    if (line === "y") {
      lanzarDado();
    }
  }
});



