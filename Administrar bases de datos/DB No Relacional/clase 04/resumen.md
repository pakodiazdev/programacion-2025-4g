🏠 [← README](../../../README.md) · ⬅️ [← Clase 3](../clase%2003/resumen.md)

---

# Clase 04 — Repetición con while y for + validación en Node.js CLI
**Fecha:** viernes 20 de marzo de 2026  
**Duración total:** 3 horas planificadas (2 horas teoría + 1 hora laboratorio)  
**Formato de bloques:** 45 min de trabajo + 5 min de margen + 10 min break entre bloques

---

## 🎯 Objetivo de la sesión

Que el alumno aplique estructuras de repetición para resolver problemas de forma eficiente, integrando:

- ciclos `while` y `for`
- condiciones con `if` / `else`
- validación de datos de entrada

Se consolida la progresión:

    Input ⌨️ → Process ⚙️ → Output 🖥️

pasando de decisiones puntuales (clase 03) a procesos repetitivos con control de salida.

---

# ⏱️ Estructura de la clase

## 📊 Resumen de distribución del tiempo

| Bloque | Trabajo | Margen | Break | Contenido principal |
|-----|------|------|------|------|
| Bloque 1 | 45 min | 5 min | 10 min | Repaso + ciclo `while` |
| Bloque 2 | 45 min | 5 min | 10 min | Ciclo `for` + integración con validación |
| Bloque 3 | 45 min | 5 min | - | Laboratorio guiado |

---

## 📝 Bloque 1 — Repaso y ciclo `while`

`⏱️ Trabajo 45 min + 5 min margen`

### Activación de conocimientos previos (10 min)

Repaso rápido de:

- `if` / `else`
- operadores lógicos
- validación básica

---

### ¿Qué problema resuelven los ciclos? (15 min)

Cuando necesitamos ejecutar instrucciones varias veces, repetir líneas manualmente no es escalable.

Ejemplo sin ciclo (repetición manual):

```js
console.log("Intento 1");
console.log("Intento 2");
console.log("Intento 3");
```

---

### Introducción a `while` (20 min)

Estructura general:

```js
while (condicion) {
  // instrucciones repetitivas
}
```

Ejemplo guiado:

`clase-04/e01-contador-while.js:`
```js
let contador = 1;

while (contador <= 5) {
  console.log("Vuelta " + contador);
  contador++;
}
```

### ⚠️ Error común

Olvidar actualizar la variable de control puede generar ciclo infinito.

---

### Margen pedagógico (5 min)

- resolver dudas rápidas
- verificar comprensión de condición de salida

---

## ☕ Break 1 (10 min)

---

## 📝 Bloque 2 — Ciclo `for` e integración con validación

`⏱️ Trabajo 45 min + 5 min margen`

### Introducción a `for` (20 min)

Estructura general:

```js
for (inicio; condicion; incremento) {
  // instrucciones repetitivas
}
```

Ejemplo guiado:

`clase-04/e02-tabla-for.js:`
```js
let numero = Number(process.argv[2]);

for (let i = 1; i <= 10; i++) {
  console.log(numero + " x " + i + " = " + (numero * i));
}
```

---

### Integrar validación + condicional en ciclos (15 min)

`clase-04/e03-validacion-ciclo.js:`
```js
let n = Number(process.argv[2]);

if (Number.isNaN(n)) {
  console.log("Entrada inválida");
} else {
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      console.log(i + " es par");
    } else {
      console.log(i + " es impar");
    }
  }
}
```

---

### Ejercicio guiado breve (10 min)

Construir en grupo un contador descendente del 10 al 1 usando `for`.

---

### Margen pedagógico (5 min)

- micro cierre teórico
- preparación del laboratorio

---

## ☕ Break 2 (10 min)

---

## 🧪 Bloque 3 — Laboratorio guiado

`⏱️ Trabajo 45 min + 5 min margen`

### Apertura de laboratorio (10 min)

- explicación de consignas
- criterios de evaluación
- estándar de salida por consola

---

### Desarrollo práctico (30 min)

Resolver prácticas obligatorias y opcionales de la sesión.

[Prácticas](practicas.md)

---

### Cierre técnico (5 min)

Revisión rápida de errores frecuentes:

- condición mal definida
- incremento/decremento ausente
- validación omitida

---

### Margen final (5 min)

Retroalimentación final y checklist de entrega.

---

# Criterios de evaluación rápida

- Usa correctamente `while` o `for` según el problema.
- Controla bien la condición de salida.
- Valida entradas antes de procesar.
- Imprime resultados claros y legibles.

---

# 🚀 Siguiente sesión

- funciones en JavaScript
- reutilización de lógica
- modularización de programas

---

🏠 [← README](../../../README.md) · ⬅️ [← Clase 3](../clase%2003/resumen.md)
