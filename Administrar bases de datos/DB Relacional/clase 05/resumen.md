🏠 [← README](../../../README.md) · ⬅️ [← Clase 4](../clase%2004/resumen.md) · ➡️ [Clase 6 →](../clase%2006/resumen.md)

---

# Clase — Literales, operadores y expresiones  
**Fecha:** 10 de marzo  
**Materia:** Bases de datos relacionales / Programación con PHP CLI

---

## Objetivo de la sesión

Comprender los **elementos básicos que componen una instrucción en programación**, identificando:

- literales
- operadores
- expresiones

Además, los alumnos realizaron sus **primeros programas sencillos en PHP CLI**, aplicando estos conceptos.

---

# Literales

Se explicó que los **literales** son valores escritos directamente en el código.

Representan datos concretos que el programa puede utilizar.

Ejemplos de literales:

    10
    3.14
    "Hola"
    true
    false

Los literales pueden representar distintos **tipos de datos**, como números, texto o valores booleanos.

---

# Operadores

Los **operadores** son símbolos que permiten realizar operaciones entre valores.

Durante la clase se revisaron dos tipos principales de operadores:

- operadores aritméticos
- operadores de asignación

---

# Operadores aritméticos

Los operadores aritméticos permiten realizar **operaciones matemáticas**.

| Operador | Operación | Ejemplo | Resultado |
|--------|--------|--------|--------|
| + | suma | 5 + 3 | 8 |
| - | resta | 10 - 4 | 6 |
| * | multiplicación | 6 * 3 | 18 |
| / | división | 10 / 2 | 5 |
| ** | potencia | 2 ** 3 | 8 |

Ejemplo en PHP:

    <?php

    $resultado = 5 + 3;

    echo $resultado;

---

# Operadores de asignación

Los operadores de asignación se utilizan para **guardar un valor dentro de una variable**.

| Operador | Significado | Ejemplo | Resultado |
|--------|--------|--------|--------|
| = | asignación | $a = 10 | la variable guarda 10 |

Ejemplo:

    <?php

    $edad = 18;

---

# Operadores de asignación compuesta

También se revisaron operadores que **combinan una operación aritmética con una asignación**.

Estos operadores modifican directamente el valor de la variable.

| Operador | Significado | Ejemplo | Equivalente |
|--------|--------|--------|--------|
| += | suma y asigna | $a += 5 | $a = $a + 5 |
| -= | resta y asigna | $a -= 3 | $a = $a - 3 |
| *= | multiplica y asigna | $a *= 2 | $a = $a * 2 |
| /= | divide y asigna | $a /= 4 | $a = $a / 4 |

Ejemplo:

    <?php

    $a = 10;

    $a += 5;

    echo $a;

Resultado:

    15

---

# Expresiones

Una **expresión** es una combinación de valores, variables y operadores que produce un resultado.

Ejemplos:

    5 + 3
    10 * 2
    $a + $b

Cada expresión es evaluada por el programa para generar un valor.

---

# Práctica 1 — "Hola soy"

Los alumnos realizaron un pequeño programa donde se utilizó:

- asignación de variables
- literales de tipo cadena
- literales numéricos

El objetivo fue comprender cómo **asignar valores a variables y generar un mensaje utilizando esos valores**.

Ejemplo trabajado:

    <?php

    $nombre = "Juan";
    $edad = 18;

    echo "Hola soy $nombre y tengo $edad años";

Durante esta práctica los alumnos comprendieron:

- cómo asignar valores a variables
- cómo utilizar literales dentro del código
- cómo generar una salida utilizando variables

---

# Práctica 2 — Suma de dos números

En la segunda práctica se solicitó realizar un programa que sumara dos números y mostrara el resultado en un mensaje completo.

Ejemplo de salida esperada:

    La suma de 14 + 10 = 24

Ejemplo de código trabajado:

    <?php

    $a = 14;
    $b = 10;

    $resultado = $a + $b;

    echo "La suma de $a + $b = $resultado";

Los alumnos debían **modificar los valores de las literales** para comprobar cómo cambiaba el resultado del programa.

Esta práctica reforzó:

- uso de variables
- uso de operadores
- evaluación de expresiones
- generación de salidas dinámicas

---

# Tema pendiente

Durante la explicación de operadores se mencionó que existen otros tipos importantes que se verán posteriormente, entre ellos:

- **operadores de comparación**
- **operadores lógicos**

Además, en la siguiente sesión se explicará cómo **combinar cadenas y variables mediante concatenación e interpolación**.

---

# Conclusión

Durante la sesión los alumnos trabajaron con los **primeros elementos fundamentales de programación**:

- literales
- operadores aritméticos
- operadores de asignación
- operadores de asignación compuesta
- expresiones
- variables

Estos conceptos servirán como base para avanzar hacia el **flujo de los programas (Input → Process → Output)** y posteriormente hacia **estructuras de control** dentro del lenguaje.

---

🏠 [← README](../../../README.md) · ⬅️ [← Clase 4](../clase%2004/resumen.md) · ➡️ [Clase 6 →](../clase%2006/resumen.md)
