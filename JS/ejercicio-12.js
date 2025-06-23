// Muestra los números multiplos de 5 de 0 a 100 usando un bucle for.
let multiplos = [];

const calculaNumerosMultiplesCincoWhile = () => {
  let i = 0

  while (i < 100) {
    i = i + 5;
    multiplos.push(i);
  }

  console.log(multiplos);

}

console.log(calculaNumerosMultiplesCincoWhile())
