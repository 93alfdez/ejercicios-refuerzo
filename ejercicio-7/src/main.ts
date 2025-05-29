import "./style.css";

/* Introduce un número por un input, y que te muestre la sucesión de Fibonacci según el número introducido.

Por ejemplo, si introduzco un 8, la salida tiene que ser: 0, 1, 1, 2, 3, 5, 8, 13*/
const numeroSerie = document.getElementById("numero");
const btnCalcularSerie = document.getElementById("btnCalcularSerie");

const calculoSerieFibonacci = (numero: number) => {
  return numero - 1 + (numero - 2);
};

if (
  btnCalcularSerie instanceof HTMLButtonElement &&
  numeroSerie instanceof HTMLInputElement
) {
  btnCalcularSerie.addEventListener("click", () => {
    const numeroFor = parseInt(numeroSerie.value);
    for (let i = 0; i < numeroFor; i++) {
      console.log(calculoSerieFibonacci(i));
    }
  });
}
