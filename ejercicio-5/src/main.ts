import "./style.css";

// Igual que el 5, pero eligiendo el tipo de IVA. Puedes crearte un select, con distintos tipos de iva y que se haga el cálculo.

const precioProducto = document.getElementById("precioProducto");
const btnPrecioProducto = document.getElementById("btnPrecioProducto");
const selectIvaProducto = document.getElementById("ivaProducto");

const calcularPrecioSinIva = (precio: number, ivaProducto: number) => {
  return precio * ivaProducto;
};

const calcularAhorroIva = (precioConIva: number, precioSinIva: number) => {
  return precioConIva - precioSinIva;
};

if (btnPrecioProducto instanceof HTMLButtonElement) {
  btnPrecioProducto.addEventListener("click", () => {
    if (precioProducto instanceof HTMLInputElement) {
      let precio = parseFloat(precioProducto.value);
      if (selectIvaProducto instanceof HTMLSelectElement) {
        let ivaProducto = parseFloat(selectIvaProducto.value);
        let precioSinIva = calcularPrecioSinIva(precio, ivaProducto);
        let ahorroIva = calcularAhorroIva(precio, precioSinIva);
        alert(`El precio sin iva es ${precioSinIva} y te ahorras ${ahorroIva}`);
      }
    }
  });
}
