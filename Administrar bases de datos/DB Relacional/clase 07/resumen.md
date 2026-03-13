[← README](../../../README.md) &nbsp;·&nbsp; [← Clase 6](../clase%2006/resumen-2025-03-10.md)

---

# Clase 7 — Operadores de comparación y estructuras condicionales  
**Fecha:** 13 de marzo  
**Duración:** 2 horas  
**Materia:** Bases de datos relacionales / Programación con PHP CLI

---

## Objetivo de la sesión

Comprender cómo los programas pueden **tomar decisiones** utilizando **comparaciones y condiciones**.

Para ello se introdujeron los siguientes conceptos:

- operadores de comparación
- expresiones booleanas
- introducción a la estructura `if`
- bloques de código

Estos elementos permiten que un programa **ejecute diferentes acciones dependiendo de una condición**.

---

# Parte 1 — Operadores de comparación

Los **operadores de comparación** permiten **comparar dos valores**.

El resultado de una comparación siempre será **verdadero (true)** o **falso (false)**.

---

## Operadores vistos

| Operador | Significado |
|--------|--------|
| `==` | Igual a |
| `!=` | Diferente de |
| `>` | Mayor que |
| `<` | Menor que |
| `>=` | Mayor o igual que |
| `<=` | Menor o igual que |

---

## Ejemplos conceptuales

    5 > 3

Resultado:

    true

---

    10 == 8

Resultado:

    false

---

    7 <= 7

Resultado:

    true

---

# Parte 2 — Expresiones booleanas

Una **expresión booleana** es una expresión cuyo resultado puede ser únicamente:

    true
    false

Las expresiones booleanas normalmente se generan a partir de **comparaciones entre valores**.

Ejemplo:

    edad >= 18

Esta expresión pregunta si **edad es mayor o igual a 18**.

El resultado será:

    true
    false

---

## Importancia en programación

Las expresiones booleanas son importantes porque permiten que un programa **tome decisiones**.

Por ejemplo:

- verificar si una persona es mayor de edad
- comprobar si un número es positivo
- validar información antes de procesarla

---

# Parte 3 — Introducción a la estructura if

La estructura **if** permite ejecutar código **solo cuando una condición es verdadera**.

Estructura general:

    if (condición) {
        instrucciones
    }

Si la condición es **true**, el código dentro del bloque se ejecuta.

Si la condición es **false**, el bloque se omite.

---

## Ejemplo conceptual

    if (edad >= 18) {
        imprimir("Mayor de edad")
    }

Significado:

Si la edad es mayor o igual a 18, entonces se muestra el mensaje **"Mayor de edad"**.

---

# Ejemplo en PHP

    <?php

    $edad = $argv[1];

    if ($edad >= 18) {
        echo "Mayor de edad" . PHP_EOL;
    }

---

# Parte 4 — Bloques de código

Un **bloque de código** es un grupo de instrucciones que se ejecutan juntas.

En muchos lenguajes de programación, los bloques se delimitan con:

    { }

Esto permite agrupar varias instrucciones dentro de una misma estructura.

---

## Ejemplo de bloque

    {
        echo "Linea 1";
        echo "Linea 2";
    }

En este caso el bloque contiene **dos instrucciones**.

---

## Bloques dentro de if

La estructura `if` utiliza bloques para definir qué instrucciones se ejecutarán si la condición es verdadera.

Ejemplo:

    <?php

    $numero = $argv[1];

    if ($numero > 0) {
        echo "El número es positivo" . PHP_EOL;
    }

---


# Conclusión

Se introdujo el concepto de **decisiones dentro de un programa**.

Para ello se estudiaron:

- operadores de comparación
- expresiones booleanas
- estructura `if`
- bloques de código

Estos elementos permiten que los programas **respondan de manera diferente según las condiciones evaluadas**, lo cual es fundamental para desarrollar programas más complejos.

---

[← README](../../../README.md) &nbsp;·&nbsp; [← Clase 6](../clase%2006/resumen-2025-03-10.md)
