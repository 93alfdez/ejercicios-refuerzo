// /*Una asignatura está compuesta por cuatro examenes, para aprobar hay que sacar más de un 3 en cada uno de ellos, y la media de los 4 examenes debe tener en total una puntuación de más de 5 (el examen se puntua de 0 a 10), crea un programa en el que introduzcas cuatro notas y te diga si eres apto o no.

// Te pasamos un posible html como referencia (puedes mostrar el resultado por consola o por pantalla):*/
const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const calcularNota = (notas) => {
  let media = notas / 4
  if (media >= 5) {
    console.log(media)
    console.log("Eres apto")
  } else {
    console.log(media)
    console.log("No apto")
  }
}

let respuestas = [];
const totalPreguntas = 4;

console.log('Dame cuatro notas');

rl.on('line', (line) => {

  if (respuestas.length < totalPreguntas) {
    console.log('Dime otra nota');
    nota = parseInt(line)
    if (isNaN(nota) === true) {
      console.log("Dame una nota cerdo")
    } else {
      if (nota > 3) {
        if (nota <= 10) {
          respuestas.push(nota);
        }
      } else {
        console.log("No eres apto")
      }
    }
  } else {
    sumaRespuestas = respuestas[0] + respuestas[1] + respuestas[2] + respuestas[3]
    console.log(calcularNota(sumaRespuestas));
    rl.close();
  }
});



