import "./style.css";
/* Introduce un número por un input, y que te muestre la sucesión de Fibonacci según el número introducido.

Por ejemplo, si introduzco un 8, la salida tiene que ser: 0, 1, 1, 2, 3, 5, 8, 13

f0 = 0
f1 = 1
fn = fn -1 + (fn - 2)

f2 = f1 + f0 = 1 + 0 = 1
f3 = f2 + f1 = 1 + 1 = 2
f4 = f3 + f2 = 2 + 1 = 3
f5 = f4 + f3 = 3 + 2 = 5

*/

const numeroSerie = document.getElementById("numeroSerie");
const btnCalcularSerie = document.getElementById("btnCalcularSerie");

let c = 0

const calculoSerieFibonacci = (numero: number) => {
  let sucesion = [];
  let a = 1
  let b = 0
  for (let i = 0; i < numero; i++) {
    c = i

    if (i >= 2) {
      c = a + b
      b = a
      a = c
    }


    sucesion.push(c)
  }
  return sucesion
}


if (
  btnCalcularSerie instanceof HTMLButtonElement &&
  numeroSerie instanceof HTMLInputElement
) {

  btnCalcularSerie.addEventListener("click", () => {
    const numeroFor = parseInt(numeroSerie.value);
    console.log(calculoSerieFibonacci(numeroFor));

  });
}

