const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const muestraMensajeSegunHora = (hora) => {
  if (hora >= 6 && hora < 12) {
    console.log("Buenos días")
  } else if (hora >= 13 && hora < 20) {
    console.log("Buenas tardes")
  } else {
    console.log("Buenas noches")
  }
}

rl.question(`Dame una hora: `, hora => {
  hora = parseInt(hora);
  if (isNaN(hora) === true) {
    console.log("Dame un número cerdo")
  } else {
    muestraMensajeSegunHora(hora);
  }
  rl.close();
});
