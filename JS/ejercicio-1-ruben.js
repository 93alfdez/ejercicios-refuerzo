/* Hacer un programa que valide si la contraseña introducida por el usuario es correcta o no.
El usuario tendrá tres intentos.
En caso de que el usuario no introduzca la contraseña correcta, se le volverá a mostrar el mismo prompt para que introduzca la contraseña
Si después de los tres intentos la contraseña no es válida, se mostrará el mensaje de 'Contraseña incorrecta'.
En el caso de que sea correcta, se le mostrará un mensaje de bienvenida.

Variación: hacerlo con un bucle while, gestionando el número de intentos, máximo 3.*/

import * as readline from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });


const password = "hola"
let intentos = 0

console.log("Escribe la contraseña")

rl.on('line', line => {

  if (line === password) {
    console.log("Bienvenido")
    rl.close();
  } else {
    intentos = intentos + 1
    if (intentos === 3) {
      console.log("Contraseña incorrecta")
      rl.close();
    }
    console.log("Escribe la contraseña")
  }
}
);