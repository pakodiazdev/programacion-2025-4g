[← Volver al resumen](resumen.md) · [← Volver al README](../../../README.md)

---

# Prácticas — Clase 03
**Tema:** Entrada de datos y toma de decisiones en Node.js CLI

## Convención de nombre de archivo

Usar el formato:

	clase-03/p{numero}-descripcion.js

Ejemplos:

- `clase-03/p1-numero-positivo.js`
- `clase-03/p2-puede-votar.js`
- `clase-03/p3-puede-comprar.js`

---

## Prácticas obligatorias

## Práctica 1 — Número positivo o no positivo

Archivo sugerido:

	clase-03/p1-numero-positivo.js

Leer un número desde línea de comandos y mostrar:

- "Número positivo" si es mayor que 0
- "Número cero o negativo" en caso contrario

Ejemplo de ejecución 1:

	node clase-03/p1-numero-positivo.js 8

Resultado esperado:

	Número positivo

Ejemplo de ejecución 2:

	node clase-03/p1-numero-positivo.js -2

Resultado esperado:

	Número cero o negativo

---

## Práctica 2 — Puede votar

Archivo sugerido:

	clase-03/p2-puede-votar.js

Leer edad desde línea de comandos y mostrar:

- "Puede votar" si edad >= 18
- "No puede votar" en caso contrario

Ejemplo de ejecución 1:

	node clase-03/p2-puede-votar.js 20

Resultado esperado:

	Puede votar

Ejemplo de ejecución 2:

	node clase-03/p2-puede-votar.js 16

Resultado esperado:

	No puede votar

---

## Práctica 3 — Puede comprar

Archivo sugerido:

	clase-03/p3-puede-comprar.js

Leer monto de dinero y mostrar:

- "Puede comprar" si monto > 0
- "No puede comprar" en caso contrario

Ejemplo de ejecución 1:

	node clase-03/p3-puede-comprar.js 150

Resultado esperado:

	Puede comprar

Ejemplo de ejecución 2:

	node clase-03/p3-puede-comprar.js 0

Resultado esperado:

	No puede comprar

---

## Práctica 4 — Número par o impar

Archivo sugerido:

	clase-03/p4-numero-par-impar.js

Leer un número y mostrar:

- "Número par" si el número es divisible entre 2
- "Número impar" en caso contrario

Ejemplo de ejecución 1:

	node clase-03/p4-numero-par-impar.js 14

Resultado esperado:

	Número par

Ejemplo de ejecución 2:

	node clase-03/p4-numero-par-impar.js 9

Resultado esperado:

	Número impar

---

## Prácticas opcionales

## Práctica 5 — Rango permitido

Archivo sugerido:

	clase-03/p5-rango-permitido.js

Leer un número y validar si está entre 1 y 100.

Ejemplo de ejecución 1:

	node clase-03/p5-rango-permitido.js 45

Resultado esperado:

	Está en rango

Ejemplo de ejecución 2:

	node clase-03/p5-rango-permitido.js 101

Resultado esperado:

	Fuera de rango

---

## Práctica 6 — Descuento por monto

Archivo sugerido:

	clase-03/p6-descuento-por-monto.js

Leer monto de compra:

- si monto >= 1000, mostrar "Aplica descuento"
- en otro caso, mostrar "No aplica descuento"

Ejemplo de ejecución 1:

	node clase-03/p6-descuento-por-monto.js 1200

Resultado esperado:

	Aplica descuento

Ejemplo de ejecución 2:

	node clase-03/p6-descuento-por-monto.js 600

Resultado esperado:

	No aplica descuento

---

## Práctica 7 — Acceso por usuario

Archivo sugerido:

	clase-03/p7-acceso-usuario.js

Leer una palabra desde consola y comparar:

- si es "admin", mostrar "Acceso permitido"
- si no, mostrar "Acceso denegado"

Ejemplo de ejecución 1:

	node clase-03/p7-acceso-usuario.js admin

Resultado esperado:

	Acceso permitido

Ejemplo de ejecución 2:

	node clase-03/p7-acceso-usuario.js invitado

Resultado esperado:

	Acceso denegado

---

## Criterios de entrega

- Uso correcto de `process.argv`.
- Conversión correcta con `Number()` cuando aplica.
- Lógica condicional coherente en cada práctica.
- Mensajes de salida claros.

---

[← Volver al resumen](resumen.md) · [← Volver al README](../../../README.md)
