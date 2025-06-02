import "./style.css";

// Queremos mostrar el día sin IVA, desarrolla una aplicación en la que le de un precio, calcule su IVA y me muestre el precio sin IVA y cuanto me ahorro en IVA, suponiendo que es un 21%.
const precioProducto = document.getElementById("precioProducto");
const btnPrecioProducto = document.getElementById("btnPrecioProducto");

const iva = 0.79;

const calcularPrecioSinIva = (precio: number) => {
  return precio * iva;
};

const calcularAhorroIva = (precioConIva: number, precioSinIva: number) => {
  return precioConIva - precioSinIva;
};

if (btnPrecioProducto instanceof HTMLButtonElement) {
  btnPrecioProducto.addEventListener("click", () => {
    if (precioProducto instanceof HTMLInputElement) {
      let precio = parseFloat(precioProducto.value);
      let precioSinIva = calcularPrecioSinIva(precio);
      let ahorroIva = calcularAhorroIva(precio, precioSinIva);
      alert(`El precio sin iva es ${precioSinIva} y te ahorras ${ahorroIva}`);
    }
  });
}
