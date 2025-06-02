/*Una asignatura está compuesta por cuatro examenes, para aprobar hay que sacar más de un 3 en cada uno de ellos, y la media de los 4 examenes debe tener en total una puntuación de más de 5 (el examen se puntua de 0 a 10), crea un programa en el que introduzcas cuatro notas y te diga si eres apto o no.

Te pasamos un posible html como referencia (puedes mostrar el resultado por consola o por pantalla):*/
const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const calcularNota = (nota1, nota2, nota3, nota4) => {
  let media = (nota1 + nota2 + nota3 + nota4) / 4
  
  media = parseFloat(media)
  
  if (media >= 5) {
    console.log("Eres apto")
  } else {
    console.log("No apto")
  }
}


rl.question(`Dame cuatro notas: `, (nota1, nota2, nota3, nota4) => {
  calcularNota(nota1, nota2, nota3, nota4);
  rl.close();
});
