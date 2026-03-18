[← README](../../../README.md) · [← Clase 5](../clase%2005/resumen.md) · [Clase 7 →](../clase%2007/resumen.md)

---

# Clase — Flujo del programa y manejo de cadenas  
**Duración:** 2 horas  
**Materia:** Bases de datos relacionales / Programación con PHP CLI

---

## Objetivo de la sesión

Comprender el **flujo básico de ejecución de un programa** utilizando el modelo:

    Input → Process → Output

y aprender a **combinar texto con variables** mediante:

- concatenación de cadenas
- interpolación de cadenas

Esto permitirá a los alumnos construir **programas que reciban datos y generen mensajes dinámicos**.

---

# Parte 1 — Flujo de un programa (Input → Process → Output)

Se explicó que la mayoría de los programas siguen una estructura básica compuesta por tres etapas.

    Entrada (Input)
        ↓
    Proceso (Process)
        ↓
    Salida (Output)

Este modelo es conocido como **IPO (Input – Process – Output)**.

---

## Entrada (Input)

La **entrada** son los datos que recibe el programa para poder trabajar.

Ejemplos de entrada:

- argumentos enviados desde la consola
- datos introducidos por el usuario
- información almacenada en archivos
- datos provenientes de una base de datos

Ejemplo conceptual:

    nombre = "Juan"

---

## Proceso (Process)

El **proceso** es la etapa donde el programa trabaja con los datos recibidos.

Durante esta fase el programa puede realizar:

- cálculos
- operaciones matemáticas
- manipulación de texto
- comparaciones

Ejemplo conceptual:

    mensaje = "Hola " + nombre

---

## Salida (Output)

La **salida** es el resultado que el programa muestra después de procesar los datos.

La salida puede ser:

- texto en consola
- números
- archivos
- información mostrada en pantalla

Ejemplo conceptual:

    Hola Juan

---

# Ejemplo completo en PHP

Se analizó un programa sencillo que ilustra las tres etapas.

    <?php

    $nombre = $argv[1];        // INPUT

    $mensaje = "Hola " . $nombre;   // PROCESS

    echo $mensaje . PHP_EOL;   // OUTPUT

---

# Ejemplo con operación matemática

    <?php

    $a = $argv[1];     // INPUT
    $b = $argv[2];     // INPUT

    $resultado = $a + $b;   // PROCESS

    echo $resultado . PHP_EOL;   // OUTPUT

---

# Parte 2 — Concatenación de cadenas

Una **cadena (string)** es un tipo de dato que representa **texto**.

Ejemplos:

    "Hola"
    "Juan"
    "Programación"

---

## Concatenación

La **concatenación** consiste en **unir dos o más cadenas para formar una nueva cadena**.

En PHP se utiliza el operador:

    .

Ejemplo:

    <?php

    $nombre = "Ana";

    echo "Hola " . $nombre;

Resultado:

    Hola Ana

---

## Concatenación con varias variables

    <?php

    $nombre = "Carlos";
    $edad = 18;

    echo "Hola " . $nombre . ", tienes " . $edad . " años.";

Resultado:

    Hola Carlos, tienes 18 años.

---

# Parte 3 — Interpolación de cadenas

La **interpolación** ocurre cuando una **variable se inserta directamente dentro de una cadena**.

Esto funciona cuando se utilizan **comillas dobles**.

Ejemplo:

    <?php

    $nombre = "Luis";

    echo "Hola $nombre";

Resultado:

    Hola Luis

---

# Diferencia entre concatenación e interpolación

Concatenación:

    echo "Hola " . $nombre;

Interpolación:

    echo "Hola $nombre";

Ambas producen el mismo resultado.

---

# Laboratorio — Ejercicios prácticos

## Ejercicio 1 [obligatorio]

Crear un programa que reciba un nombre desde la consola y muestre un saludo.

Ejemplo de ejecución:

    php saludo.php Juan

Resultado esperado:

    Hola Juan

---

## Ejercicio 2 [obligatorio]

Crear un programa que reciba dos números y muestre su suma.

Ejemplo de ejecución:

    php suma.php 5 8

Resultado esperado:

    13

---

## Ejercicio 3 [opcinal]

Crear un programa que reciba:

    nombre
    edad

y muestre un mensaje como el siguiente:

    Hola Juan, tienes 18 años.

---

## Ejercicio 4 [opcinal]

Crear un programa que reciba:

    producto
    precio

y muestre un mensaje como:

    Producto: Laptop
    Precio: 15000

---

# Actividad de análisis

Los alumnos identificarán en los programas:

- cuál es la **entrada**
- cuál es el **proceso**
- cuál es la **salida**

Esto refuerza la habilidad de **leer código y comprender qué hace un programa**.

---

# Conclusión

Se reforzó la idea de que los programas generalmente siguen el flujo:

    Input → Process → Output

Además, se aprendió cómo **combinar texto con variables** utilizando:

- concatenación
- interpolación

Estas herramientas permiten generar **mensajes dinámicos y resultados más claros dentro de los programas**.

---

[Ejercicios](ejercicios.md)

---

[← README](../../../README.md) · [← Clase 5](../clase%2005/resumen.md) · [Clase 7 →](../clase%2007/resumen.md)
