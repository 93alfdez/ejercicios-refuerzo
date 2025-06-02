import "./style.css";

/* 3. Tenemos un servicio de soporte que nos facturan por horas, desarrolla un programa que le indiques el número de horas que ha realizado y calcule el total que hay que pagar.

- Nota la tarifa por hora puede ser un valor constante.
- Total a pagar = Horas trabajadas × Tarifa por hora.*/
const horasTrabajadas = document.getElementById("horasTrabajadas");
const btnHorasTrabajadas = document.getElementById("btnHorasTrabajadas");

const tarifaHora = 30;

const totalPagar = (horasTrabajadas: number) => {
  return horasTrabajadas * tarifaHora;
};

if (btnHorasTrabajadas instanceof HTMLButtonElement) {
  btnHorasTrabajadas?.addEventListener("click", () => {
    if (horasTrabajadas instanceof HTMLInputElement) {
      let horas = parseFloat(horasTrabajadas.value);
      alert(totalPagar(horas));
    }
  });
}
