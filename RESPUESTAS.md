## 10. Registro de resultados

| Comprobación | Resultado | Observación |
|---|---|---|
| Respuesta de `GET /salud` | Pendiente de comprobar | Es la ruta que aparece en el código. |
| Primera ejecución de `npm test` | 4 pasaron y 1 falló | La función no rechazaba descuentos mayores al 100 %. |
| Corrección del servicio | 5 pruebas correctas | Agregamos las validaciones del precio y descuento. |
| Nuevas pruebas unitarias | 7 pruebas unitarias correctas | Probamos descuentos del 100 %, valores negativos y `NaN`. |
| Prueba de integración HTTP 400 | 3 pruebas de integración correctas | La API devuelve un error cuando el descuento no es válido. |
| Verificación `npm run typecheck` | Sin errores | No se encontraron errores de tipos. |

## 11. Preguntas de cierre

### 1. ¿Qué diferencia hay entre comprobar manualmente una respuesta y ejecutar una prueba automatizada?

En una prueba manual tenemos que ejecutar el programa y revisar nosotros mismos el resultado. En una automatizada, el código se encarga de comprobar si el resultado es el esperado.

### 2. ¿Cuál fue la causa de la primera prueba fallida?

La función no tenía validaciones y permitía descuentos mayores al 100 %. Por eso, cuando ingresábamos un descuento del 150 %, devolvía un precio negativo en lugar de lanzar un `RangeError`.

### 3. ¿Por qué es útil incluir casos inválidos además de los casos habituales?

Porque nos permite comprobar que el programa no solamente funcione con valores correctos, sino que también sepa detectar y rechazar datos incorrectos.

### 4. ¿Qué parte del sistema comprueba `tests/precios.test.ts` y qué partes comprueba `tests/api.test.ts`?

`precios.test.ts` comprueba directamente la función que calcula los descuentos. En cambio, `api.test.ts` comprueba que la API reciba las solicitudes, utilice la función y devuelva las respuestas HTTP correspondientes.

### 5. ¿Qué ventajas ofrece ejecutar las pruebas después de cada modificación?

Nos ayuda a detectar si algún cambio generó un error y a comprobar que lo que funcionaba antes siga funcionando correctamente.