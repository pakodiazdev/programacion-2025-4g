[← Volver al resumen](resumen.md)

---
# Clase 07 - if / else if / else y ciclo while en JavaScript

**Fecha:** 13-abril-2026  
**Materia:** Bases de datos NO relacionales

---

# 📘 Prácticas — Clase 07 (No Relacional / JS Node.js)

## 🎯 Objetivo

Reforzar el uso de:

- Estructuras condicionales `if / else if / else`
- Ciclo `while`
- Entrada de datos con `readline`

---

## 📌 Lineamiento general

Para evitar datos hardcodeados y dar más dinamismo a las prácticas:

- En todos los ejercicios se debe capturar entrada con `readline`.
- No se permite resolver con valores fijos escritos directo en el código.

### Plantilla base sugerida (JavaScript CLI)

```js
const readline = require('../libs/readline');

(async () => {
	console.log('Ingresa el dato 1:');
	const dato1 = await readline();

	console.log('Ingresa el dato 2:');
	const dato2 = await readline();

	// Convertir cuando aplique
	const n1 = Number(dato1);
	const n2 = Number(dato2);

	// Resolver aquí el problema con if/else if/else o while
})();
```

---

# 🧪 Bloque A — Programación (if / else if / else)

> Práctica en pareja. Cada equipo resuelve un enunciado distinto. Los mismos equipos aplican en ambas materias (BDR Clase 13 / BDNR Clase 07).

---

## Práctica 120 — Tarifa de transporte por zona  
**Archivo:** `p120-tarifa-transporte-zona.js`  
**Pareja:** ALCANTAR · BALANDRAN

Leer una zona (`A`, `B`, `C`, `D`).

- Si la zona es `A`, mostrar: `Tarifa $12`
- Si la zona es `B`, mostrar: `Tarifa $15`
- Si la zona es `C`, mostrar: `Tarifa $18`
- En cualquier otro caso, mostrar: `Zona no válida`

---

## Práctica 122 — Nivel de descuento por compra  
**Archivo:** `p122-nivel-descuento-compra.js`  
**Pareja:** BARAJAS · BLANCARTE

Leer el total de compra.

- Si el total es mayor o igual a 2000, mostrar: `Descuento 20%`
- Si el total es mayor o igual a 1000, mostrar: `Descuento 10%`
- Si el total es mayor o igual a 500, mostrar: `Descuento 5%`
- En caso contrario, mostrar: `Sin descuento`

---

## Práctica 124 — Tipo de acceso por horario  
**Archivo:** `p124-tipo-acceso-horario.js`  
**Pareja:** CORRALEJO · DOMINGUEZ

Leer una hora (0 a 23).

- Si la hora está entre 6 y 11, mostrar: `Turno matutino`
- Si la hora está entre 12 y 17, mostrar: `Turno vespertino`
- Si la hora está entre 18 y 22, mostrar: `Turno nocturno`
- En caso contrario, mostrar: `Horario fuera de servicio`

---

## Práctica 126 — Prioridad de ticket  
**Archivo:** `p126-prioridad-ticket.js`  
**Pareja:** FERNANDEZ · GALICIA

Leer el tiempo de espera en minutos.

- Si espera es mayor o igual a 60, mostrar: `Prioridad crítica`
- Si espera es mayor o igual a 30, mostrar: `Prioridad alta`
- Si espera es mayor o igual a 10, mostrar: `Prioridad media`
- En caso contrario, mostrar: `Prioridad normal`

---

## Práctica 128 — Estado de inventario  
**Archivo:** `p128-estado-inventario.js`  
**Pareja:** GALINDO · HERNANDEZ

Leer existencias de un producto.

- Si existencias es mayor o igual a 100, mostrar: `Inventario alto`
- Si existencias es mayor o igual a 50, mostrar: `Inventario medio`
- Si existencias es mayor o igual a 1, mostrar: `Inventario bajo`
- En caso contrario, mostrar: `Sin inventario`

---

## Práctica 130 — Estado del clima por temperatura  
**Archivo:** `p130-estado-clima-temperatura.js`  
**Pareja:** IBARRA · JASSO

Leer una temperatura en grados.

- Si temperatura es mayor o igual a 35, mostrar: `Muy caluroso`
- Si temperatura es mayor o igual a 25, mostrar: `Cálido`
- Si temperatura es mayor o igual a 15, mostrar: `Templado`
- En caso contrario, mostrar: `Frío`

---

## Práctica 132 — Nivel de envío por distancia  
**Archivo:** `p132-nivel-envio-distancia.js`  
**Pareja:** JUAREZ · MONTES

Leer la distancia de envío en km.

- Si distancia es mayor o igual a 1000, mostrar: `Envío nacional`
- Si distancia es mayor o igual a 300, mostrar: `Envío regional`
- Si distancia es mayor o igual a 1, mostrar: `Envío local`
- En caso contrario, mostrar: `Distancia inválida`

---

## Práctica 134 — Categoría de salario  
**Archivo:** `p134-categoria-salario.js`  
**Pareja:** MONTIEL · MORALES

Leer salario mensual.

- Si salario es mayor o igual a 20000, mostrar: `Salario alto`
- Si salario es mayor o igual a 12000, mostrar: `Salario medio`
- Si salario es mayor o igual a 8000, mostrar: `Salario base`
- En caso contrario, mostrar: `Salario por debajo del base`

---

## Práctica 136 — Tipo de suscripción  
**Archivo:** `p136-tipo-suscripcion.js`  
**Pareja:** RODRIGUEZ ARRELLANO · RODRIGUEZ DIAZ

Leer plan (`free`, `basic`, `pro`, `premium`).

- Si plan es `premium`, mostrar: `Acceso total`
- Si plan es `pro`, mostrar: `Acceso avanzado`
- Si plan es `basic`, mostrar: `Acceso estándar`
- En caso contrario, mostrar: `Acceso limitado`

---

## Práctica 138 — Diagnóstico de señal WiFi  
**Archivo:** `p138-diagnostico-senal-wifi.js`  
**Pareja:** ROMERO · SANCHEZ

Leer intensidad de señal en porcentaje.

- Si señal es mayor o igual a 80, mostrar: `Señal excelente`
- Si señal es mayor o igual a 60, mostrar: `Señal buena`
- Si señal es mayor o igual a 30, mostrar: `Señal inestable`
- En caso contrario, mostrar: `Sin señal útil`

---

## Práctica 140 — Nivel de consumo eléctrico  
**Archivo:** `p140-nivel-consumo-electrico.js`  
**Pareja:** VELASCO · VELZASCO · VILLANUEVA _(trío)_

Leer consumo mensual en kWh.

- Si consumo es mayor o igual a 500, mostrar: `Consumo muy alto`
- Si consumo es mayor o igual a 300, mostrar: `Consumo alto`
- Si consumo es mayor o igual a 150, mostrar: `Consumo medio`
- En caso contrario, mostrar: `Consumo bajo`

---

# 🧪 Bloque B — Programación (while)

> Práctica en pareja. Los mismos equipos del Bloque A.

---

## Práctica 143 — Suma de 5 ventas  
**Archivo:** `p143-suma-5-ventas.js`  
**Pareja:** ALCANTAR · BALANDRAN

Usar `while` para leer 5 montos de venta y mostrar la suma total.

> 💡 Pista: necesitas una variable que empiece en `0` y vaya acumulando cada monto leído.

---

## Práctica 145 — Conteo regresivo  
**Archivo:** `p145-conteo-regresivo.js`  
**Pareja:** BARAJAS · BLANCARTE

Leer un número inicial y usar `while` para mostrar el conteo regresivo hasta 0.

> 💡 Pista: la condición del `while` y la actualización de la variable deben hacer que el contador baje en cada vuelta.

---

## Práctica 147 — Suma de pares en rango  
**Archivo:** `p147-suma-pares-rango.js`  
**Pareja:** CORRALEJO · DOMINGUEZ

Leer un límite superior y usar `while` para sumar únicamente números pares desde 1 hasta ese límite.

> 💡 Pista: el operador `%` (módulo) te dice si un número es par cuando el residuo entre 2 es `0`.

---

## Práctica 149 — Captura hasta palabra de salida  
**Archivo:** `p149-captura-palabra-salida.js`  
**Pareja:** FERNANDEZ · GALICIA

Usar `while` para leer palabras hasta que el usuario escriba `salir`. Mostrar cuántas palabras capturó.

> 💡 Pista: un contador que sume `1` en cada vuelta (sin guardar las palabras) es suficiente para saber cuántas se capturaron.

---

## Práctica 151 — Menú repetitivo  
**Archivo:** `p151-menu-repetitivo.js`  
**Pareja:** GALINDO · HERNANDEZ

Construir un menú con `while` que se repita hasta que el usuario elija opción `4` (salir).

> 💡 Pista: la condición del `while` puede ser directamente que la opción leída sea distinta de `4`.

---

## Práctica 153 — Serie de cuadrados  
**Archivo:** `p153-serie-cuadrados.js`  
**Pareja:** IBARRA · JASSO

Leer un número N y mostrar con `while` los cuadrados de 1 hasta N.

> 💡 Pista: usa un contador `i` que empiece en `1`; el cuadrado de cada vuelta es `i * i`.

---

## Práctica 155 — Suma de impares  
**Archivo:** `p155-suma-impares.js`  
**Pareja:** JUAREZ · MONTES

Leer un límite N y usar `while` para sumar únicamente impares desde 1 hasta N.

> 💡 Pista: un número es impar cuando `n % 2` es diferente de `0`.

---

## Práctica 157 — Menor de una lista  
**Archivo:** `p157-menor-lista.js`  
**Pareja:** MONTIEL · MORALES

Leer 6 números con `while` y mostrar cuál fue el menor.

> 💡 Pista: guarda el primero en una variable `menor`; en cada vuelta compara el nuevo número con esa variable y actualízala si el nuevo es menor.

---

## Práctica 159 — Conversión de temperaturas  
**Archivo:** `p159-conversion-temperaturas.js`  
**Pareja:** RODRIGUEZ ARRELLANO · RODRIGUEZ DIAZ

Leer 4 temperaturas en Celsius con `while` y mostrar su conversión a Fahrenheit.

> 💡 Pista: convierte y muestra el resultado dentro del ciclo en la misma vuelta que lees el dato. La fórmula es `F = C * 9/5 + 32`.

---

## Práctica 161 — Conteo de positivos y negativos  
**Archivo:** `p161-conteo-positivos-negativos.js`  
**Pareja:** ROMERO · SANCHEZ

Leer 10 números con `while` y mostrar cuántos son positivos y cuántos negativos.

> 💡 Pista: dos contadores `positivos` y `negativos` que inicias en `0` y aumentas según el número leído son suficientes.

---

## Práctica 164 — Serie Fibonacci básica  
**Archivo:** `p164-serie-fibonacci-basica.js`  
**Pareja:** VELASCO · VELZASCO · VILLANUEVA _(trío)_

Leer N y mostrar con `while` los primeros N términos de la serie Fibonacci.

> 💡 Pista: necesitas dos variables que guarden los dos términos anteriores (`a = 0`, `b = 1`); en cada vuelta muestra `a`, luego calcula el siguiente con `c = a + b` y actualiza las variables.


[← Volver al resumen](resumen.md)