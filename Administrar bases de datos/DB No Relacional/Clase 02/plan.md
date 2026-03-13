[← README](../../../README.md) &nbsp;·&nbsp; [← Clase 1](../Clase%2001/plan.md)

---

# Clase 2 — Variables, asignación, operadores y expresiones en JavaScript  
**Fecha:** 13 de marzo  
**Duración:** 2 horas  
**Materia:** Bases de datos no relacionales / Introducción a JavaScript con Node.js

---

## Objetivo de la sesión

Comprender los elementos básicos que permiten **realizar cálculos y manipular datos dentro de un programa**.

Para ello se introducen los siguientes conceptos:

- variables con `let`
- operador de asignación
- operadores aritméticos
- operadores de asignación
- expresiones

Estos elementos permiten construir **instrucciones que producen resultados**, base para cualquier programa.

---

# Parte 1 — Variables

Una **variable** es un espacio donde se almacena un dato para poder utilizarlo posteriormente dentro de un programa.

En JavaScript se pueden declarar variables utilizando la palabra clave:

    let

---

## Ejemplo conceptual

    let edad = 20
    let nombre = "Ana"

En estos ejemplos:

- `edad` y `nombre` son **identificadores**
- `20` y `"Ana"` son **valores**
- las variables permiten **guardar información para usarla después**

---

# Parte 2 — Asignación

El **operador de asignación** se representa con el símbolo:

    =

Su función es **guardar un valor dentro de una variable**.

---

## Ejemplo

    let numero = 10

Esto significa:

guardar el valor **10** dentro de la variable **numero**

Es importante notar que **no representa igualdad matemática**, sino una operación de almacenamiento.

---

# Parte 3 — Operadores

Los **operadores** permiten realizar operaciones entre valores o variables.

---

## Operadores aritméticos

| Operador | Significado |
|--------|--------|
| `+` | suma |
| `-` | resta |
| `*` | multiplicación |
| `/` | división |
| `**` | potencia |

---

## Ejemplo

    let a = 10
    let b = 5

    console.log(a + b)
    console.log(a - b)
    console.log(a * b)
    console.log(a / b)
    console.log(a ** b)

Estos operadores permiten realizar **cálculos matemáticos dentro del programa**.

---

## Operadores de asignación

Los operadores de asignación permiten **modificar el valor de una variable utilizando su valor actual**.

| Operador | Significado |
|--------|--------|
| `+=` | suma y asigna |
| `-=` | resta y asigna |
| `*=` | multiplica y asigna |
| `/=` | divide y asigna |

---

## Ejemplo

    let puntos = 10

    puntos += 5
    puntos *= 2

Esto modifica el valor de la variable utilizando **operaciones acumuladas**.

---

# Parte 4 — Expresiones

Una **expresión** es cualquier combinación de:

- valores
- variables
- operadores

que produce un resultado.

---

## Ejemplos de expresiones

    5 + 3
    a * b
    edad + 1

Las expresiones son importantes porque permiten **generar nuevos valores a partir de datos existentes**.

---

## Ejemplo dentro de una instrucción

    let total = precio * cantidad

En este caso:

- `total` → variable  
- `=` → operador de asignación  
- `precio * cantidad` → **expresión**

---

# Laboratorio — Ejercicios prácticos

## Ejercicio 1

Crear un programa que declare tres variables:

- nombre
- edad
- ciudad

Mostrar su contenido en la consola.

---

## Ejercicio 2

Declarar dos variables numéricas y mostrar:

- suma
- resta
- multiplicación
- división

---

## Ejercicio 3

Crear dos variables con números y calcular su **potencia**.

---

## Ejercicio 4

Crear una variable llamada `contador` con valor inicial **10** y modificar su valor utilizando:

    +=
    -=

Mostrar el resultado final.

---

## Ejercicio 5

Crear un programa que calcule el **total de una compra** utilizando:

- precio
- cantidad

Mostrar el total en consola.

---

# Ejercicios opcionales (práctica adicional)

## Ejercicio 6

Crear un programa que calcule el **área de un rectángulo** usando:

- base
- altura

---

## Ejercicio 7

Crear un programa que calcule el **perímetro de un cuadrado**.

---

## Ejercicio 8

Crear un programa que tenga una variable `puntos` y aplique varias operaciones utilizando:

    +=
    *=
    -=

Mostrar el resultado después de cada operación.

---

## Ejercicio 9

Crear un programa que tenga tres números y calcule el **promedio**.

---

## Ejercicio 10

Crear un programa que calcule el **resultado de la siguiente expresión matemática**:

    (10 + 5) * 2

Mostrar el resultado en consola.

---

# Actividad de análisis

Los alumnos analizarán los programas para identificar:

- qué **variables** se utilizan
- qué **operadores** aparecen
- cuál es la **expresión que genera el resultado**

Esto permite reforzar la habilidad de **leer código y comprender cómo se construyen las instrucciones de un programa**.

---

# Conclusión

En esta sesión se introdujeron los elementos fundamentales para realizar operaciones dentro de un programa en JavaScript.

Se estudiaron:

- variables con `let`
- operador de asignación
- operadores aritméticos
- operadores de asignación
- expresiones

Estos conceptos forman la base para construir programas que **manipulan datos y producen resultados**, habilidad necesaria para continuar con estructuras más complejas en el curso.

---

[← README](../../../README.md) &nbsp;·&nbsp; [← Clase 1](../Clase%2001/plan.md)
