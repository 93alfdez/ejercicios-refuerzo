import "./style.css";

/* ¡Por fin es viernes! Escribe un programa que te diga cuantas horas te quedan para llegar al viernes.

¡¡PISTAS!! Para trabajar con fechas JavaScript nos ofrece el objeto date. Para obtener el día actual podemos usar la función: getDay. El siguiente paso sería obtener los días que faltan hasta el viernes: (5 - dia Actual + 7) % 7. Si los dias que faltan son igual a 0 y las horas mayores o igual a 0 los días que faltan son 7 y si no cumple esta condición el valor de días que faltan será el valor del paso anterior.*/

const horasFaltan = document.getElementById("horasFaltan");
const btnCalculaHoras = document.getElementById("btnCalculaHoras");

const fecha = new Date();
const diaActual = fecha.getDay();
const horas = fecha.getHours();

const calculosDiasHastaElViernes = (numero: number) => {
  return (5 - numero + 7) % 7;
};

const calculosHorasActuales = (numero: number) => {
  return 24 - numero;
};

if (btnCalculaHoras instanceof HTMLButtonElement) {
  btnCalculaHoras.addEventListener("click", () => {
    const diasRestantes = calculosDiasHastaElViernes(diaActual);
    const horasHoy = calculosHorasActuales(horas);
    const horasQuedanHastaViernes = horasHoy * (diasRestantes * 24);
    console.log(horas);
    if (diasRestantes === 0 && horasQuedanHastaViernes >= 0) {
      if (horasFaltan instanceof HTMLParagraphElement) {
        horasFaltan.innerText = `Faltan 7 días hasta el viernes`;
      }
    } else {
      if (horasFaltan instanceof HTMLParagraphElement) {
        horasFaltan.innerText = `Faltan ${horasQuedanHastaViernes} horas hasta el viernes`;
      }
    }
  });
}
