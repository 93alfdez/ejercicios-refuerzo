// /*Una asignatura está compuesta por cuatro examenes, para aprobar hay que sacar más de un 3 en cada uno de ellos, y la media de los 4 examenes debe tener en total una puntuación de más de 5 (el examen se puntua de 0 a 10), crea un programa en el que introduzcas cuatro notas y te diga si eres apto o no.

// Te pasamos un posible html como referencia (puedes mostrar el resultado por consola o por pantalla):*/
import * as readline from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';

const calcularNota = (notas) => {
  let media = notas / 4
  if (media >= 5) {
    console.log("Eres apto")
  } else {
    console.log("No apto")
  }
}

const rl = readline.createInterface({ input, output });


let respuestas = [];

console.log('Dame cuatro notas');
const totalPreguntas = 4;

rl.on('line', (line) => {

  let nota = parseFloat(line)

  if (isNaN(nota) === true) {
    console.log("Dame una nota cerdo")
    rl.close();
    return
  }

  if (nota >= 3) {
    if (nota <= 10) {
      respuestas.push(nota);
    } else {
      console.log("No es una nota válida")
      rl.close();
      return
    }
  } else {
    console.log("No eres apto")
    rl.close();
    return
  }

  if (respuestas.length < totalPreguntas) {
    console.log('Dime otra nota');
  } else {
    let sumaRespuestas = respuestas[0] + respuestas[1] + respuestas[2] + respuestas[3]
    calcularNota(sumaRespuestas);
    rl.close();
    return
  }
});



