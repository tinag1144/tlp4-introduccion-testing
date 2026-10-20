/** Calcula el precio luego de aplicar un porcentaje de descuento. */
export function calcularPrecioFinal(precio: number, descuento: number): number {

// - El descuento sea un número finito entre 0 y 100, inclusive.
// - Los valores inválidos provoquen un `RangeError`.
  if (!Number.isFinite(descuento) || descuento < 0 || descuento > 100){
    throw new RangeError("El descuento que se quiere aplicar es inválido")
  }
// - El precio sea un número finito, igual o mayor que cero.

  if (!Number.isFinite(precio) || precio < 0){
    throw new RangeError("El precio ingresado es inválido")
  }
  return precio - (precio * descuento) / 100; 
}
