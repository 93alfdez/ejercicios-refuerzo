// Muestra los números multiplos de 5 de 0 a 100 usando un bucle for.
let multiplos = [];

const calculaNumerosMultiplesCinco = () => {
  for (let i = 0; i <= 100; i += 5) {
    multiplos.push(i);
  }
  console.log(multiplos);
}

console.log(calculaNumerosMultiplesCinco())