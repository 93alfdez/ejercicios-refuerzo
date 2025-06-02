import "./style.css";

// 1. Crea un programa que haga un cambio de euros a dólares. Y muestra el resultado por pantalla. 1 euro es 1.09 dólares:
// const cambioEurosADolares = (numero: number) => {
//   return numero * 1.09;
// };

// console.log(cambioEurosADolares(5));

// 2. Lo mismo que el anterior pero create un input y un botón en el que introduzcas la cantidad a convertir.
const cambiarDolares = document.getElementById("cambiarADolares");
const btnCambiarDolares = document.getElementById("btnCambiarADolares");

const cambioEurosADolares = (numero: number) => {
  return numero * 1.09;
};

if (btnCambiarDolares instanceof HTMLButtonElement) {
  btnCambiarDolares.addEventListener("click", () => {
    if (cambiarDolares instanceof HTMLInputElement) {
      let euros = parseFloat(cambiarDolares.value);
      console.log(cambioEurosADolares(euros));
    }
  });
}

// 3. Tenemos un servicio de soporte que nos facturan por horas, desarrolla un programa que le indiques el número de horas que ha realizado y calcule el total que hay que pagar.
