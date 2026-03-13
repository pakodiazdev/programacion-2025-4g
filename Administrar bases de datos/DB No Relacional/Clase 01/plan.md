[← README](../../../README.md) &nbsp;·&nbsp; [Clase 2 →](../Clase%2002/plan.md)

---

# Clase 01 — Introducción a JavaScript y Node.js  
**Fecha:** 11 de marzo  
**Materia:** Bases de datos no relacionales  
**Tema:** Introducción a JavaScript, Node.js y lectura básica de código

---

# Objetivo del tema

Comprender qué es **JavaScript**, qué es **Node.js** y cómo ejecutar un programa simple desde la consola.

Además, identificar los **elementos básicos dentro de una instrucción de código**, reforzando la habilidad de **leer código**, una habilidad fundamental para cualquier programador.

Este conocimiento también servirá como base para comprender cómo funcionan las **estructuras de datos utilizadas en MongoDB**, que se basan en **JSON (JavaScript Object Notation)**.

---

# Diferencia entre las materias del módulo

Durante el módulo se trabajará con **dos materias distintas**, cada una utilizando un lenguaje diferente.

Bases de datos relacionales

    PHP

Bases de datos no relacionales

    JavaScript

Aunque los lenguajes sean diferentes, muchos conceptos de programación se repiten, por ejemplo:

- variables
- operadores
- expresiones
- instrucciones

El objetivo es comprender **los conceptos de programación**, no únicamente la sintaxis de un lenguaje.

---

# ¿Qué es JavaScript?

JavaScript es un **lenguaje de programación** ampliamente utilizado en el desarrollo de software.

Se utiliza principalmente en:

- desarrollo de páginas web
- desarrollo de servidores
- aplicaciones móviles
- aplicaciones de escritorio
- herramientas de línea de comandos

JavaScript es actualmente uno de los lenguajes de programación **más utilizados en el mundo**.

---

# ¿Qué es Node.js?

Node.js es un **entorno de ejecución para JavaScript**.

Permite ejecutar programas escritos en JavaScript **fuera del navegador**, por ejemplo desde la consola de un sistema operativo.

Node.js fue creado en **2009 por Ryan Dahl**.

Gracias a Node.js es posible utilizar JavaScript para:

- servidores
- herramientas de desarrollo
- automatización
- aplicaciones de consola

Ejemplo de ejecución de un programa:

    node programa.js

---

# Relación con MongoDB

MongoDB es una base de datos **no relacional** que almacena la información utilizando documentos.

Estos documentos tienen una estructura basada en **JSON**.

JSON significa:

    JavaScript Object Notation

Por esta razón es importante comprender **la sintaxis básica de JavaScript**, ya que muchas de las estructuras utilizadas en MongoDB están inspiradas en este lenguaje.

---

# Primer programa en JavaScript

```js
console.log("Hola mundo")
```

Este programa imprime un mensaje en la consola.

Resultado esperado:

    Hola mundo

---

# Análisis del código

Es importante aprender a **leer el código** e identificar sus partes.

Instrucción completa:

    console.log("Hola mundo")

---

# console

    console

`console` es un objeto que permite **interactuar con la consola del sistema**.

La consola es una herramienta que permite mostrar información generada por un programa.

---

# ¿Qué es un objeto?

Un **objeto** es una representación de algo dentro de un programa.

Un objeto puede contener:

- **datos**
- **métodos**

Los datos representan información del objeto.

Los métodos representan acciones que el objeto puede realizar.

Por ahora, lo más importante es entender que un objeto **representa algo** y que puede tener **métodos**.

En este caso, `console` es un objeto.

Ese objeto tiene un método llamado `log`, que se utiliza para **imprimir información en pantalla**.

---

# Método log

    log

Un **método** es una función que pertenece a un objeto.

El método `log` pertenece al objeto `console` y se utiliza para **mostrar información en la consola**.

Por eso en el ejemplo usamos:

    console.log()

Esto significa:

usar el método **log** que pertenece al objeto **console**.

---

# Paréntesis

    ()

Los paréntesis indican que se está **ejecutando una función o método**.

Dentro de los paréntesis se colocan los **datos que se enviarán a la función**.

---

# Literales

Un **literal** es un valor que aparece **directamente escrito en el código**.

Es decir, el valor está presente en el programa **sin necesidad de calcularlo ni obtenerlo de otro lugar**.

Los literales representan datos simples dentro de un programa.

---

## Ejemplo de literal de texto

\`\`\`js
console.log("Hola mundo")
\`\`\`

En este caso:

    "Hola mundo"

es un **literal de texto**.

---

## Ejemplo de literal numérico

\`\`\`js
console.log(5)
\`\`\`

En este caso:

    5

es un **literal numérico**.

---

# Cadena de texto (String)

Una **cadena de texto** o **string** representa texto dentro de un programa.

Las cadenas se escriben entre comillas.

Ejemplos:

    "Hola"
    "Juan"
    "Programación"

Las cadenas de texto son un tipo de **literal**.

---

# Instrucción

Toda la línea completa es una **instrucción**.

Una instrucción es una orden que el programa debe ejecutar.

Ejemplo:

    console.log("Hola mundo")

---

# Ejecución del programa

Para ejecutar el programa se utiliza la consola del sistema.

Si Node.js está configurado en el sistema:

    node hola.js

Resultado:

    Hola mundo

---

# Ejecución en Windows usando la ruta a node.exe

En algunos equipos Node.js **no queda configurado en las variables de entorno (PATH)**.

En ese caso se debe ejecutar usando la **ruta completa del ejecutable**.

Ejemplo:

    "C:\Program Files\nodejs\node.exe" hola.js

Esto ejecuta el programa `hola.js` utilizando directamente el ejecutable de Node.

Este método es similar a ejecutar **php.exe desde XAMPP** cuando PHP no está configurado globalmente.

---

# Uso de console.log()

`console.log()` se utiliza para:

- mostrar mensajes
- imprimir resultados de cálculos
- mostrar valores de variables
- entender qué está haciendo el programa

Ejemplo:

```js
console.log(5 + 3)
```

Resultado:

    8

---

# Conceptos clave

JavaScript

    Lenguaje de programación

Node.js

    Entorno que permite ejecutar JavaScript fuera del navegador

Objeto

    Representación de algo dentro de un programa que puede tener datos y métodos

Método

    Función que pertenece a un objeto

console

    Objeto que permite mostrar información en la consola

log

    Método utilizado para imprimir información

Literal

    Valor escrito directamente en el código

String

    Texto dentro de un programa

Instrucción

    Orden que el programa ejecuta

---

# Preguntas de repaso

1. ¿Qué es JavaScript?
2. ¿Qué es Node.js?
3. ¿Para qué sirve Node.js?
4. ¿Qué es `console`?
5. ¿Qué hace `console.log()`?
6. ¿Qué es una cadena de texto?
7. ¿Qué es un objeto?
8. ¿Qué es un método?
9. ¿Qué es un literal?
10. ¿Cómo se ejecuta un programa en Node.js?

---

# Tema siguiente

En las siguientes sesiones se comenzará a trabajar con:

- variables en JavaScript
- operadores
- expresiones
- objetos y JSON

Estos conceptos permitirán comprender mejor cómo funcionan los **documentos en MongoDB**.

---

[← README](../../../README.md) &nbsp;·&nbsp; [Clase 2 →](../Clase%2002/plan.md)
