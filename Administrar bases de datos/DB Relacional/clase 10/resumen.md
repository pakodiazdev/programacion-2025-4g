🏠 [← README](../../../README.md) · ⬅️ [← Clase 9](../clase%2009/resumen.md) · 🧪 [Ejercicio](ejercicio.md)

---

# Clase 10 — Pensamiento lógico, `if / else` y entrada de datos en PHP CLI      
**Fecha:** 20-marzo-2026
**Duración total:** 2 horas  
**Modalidad:** 1 hr aula + 1 hr laboratorio

---

# 🎯 Objetivo de la sesión

Que el alumno:

- comprenda que programar implica seguir un proceso lógico;
- identifique claramente:
  - **Input (entrada)**
  - **Process (proceso)**
  - **Output (salida)**
- utilice estructuras de decisión con `if / else`;
- aprenda a recibir datos desde teclado en **PHP CLI**;
- desarrolle la capacidad de resolver problemas antes de escribir código;
- construya soluciones completas en **PHP CLI**.

---

# 🧠 Enfoque de la clase

> ❌ Programar no es empezar escribiendo código  
> ✅ Programar es entender primero el problema

Esta clase se mezclo con los temas visto en la clase 04 de No Relacional, ya que los fundamentos y la ténica de entender el problema, extrare o formular un algoritmo, paasar ese algoritmo a un diagrma de flujo, eleboar un pseudocodigo y finalmente 
códificar **aplica para cualquier lenguaje de programción** y es el proceso recomendado para desarrollar nuestro **pensamiento logico** que es vital para poder entender que escribiremos como código, sin esto no hay manera de que puedas códificar un programa, recuerda, **Programar es enseñar a la computadora a resolver un probleme**, NO puedes enseñar algo que antes no sabes resolver por ti mismo.

---



# 📥 Entrada de datos en PHP CLI

Para pedir un dato desde la linea de comando se utiliza la función:

```php
readline()
```

---

## 📄 Ejemplo básico

```php
<?php

$nombre = readline("Ingresa tu nombre: ");
echo "Hola " . $nombre;
```

---

## 📌 Conversión de tipos

```php

echo "Edad: \n";
$dato = readline(); // lee la entrada del usuario como cadena

// Conversión de string a int (entero) 
$edad = intval($dato)


echo "Edad_ \n";
// cast a tipo int
$dato = readline();
$edad = (int) $dato // lee la entrada del usuario como cadena

echo "Precio: \n";
$dato = readline();
// cast a tipo float
$precio = (float) $dato;

```

---

# 🧠 Modelo de resolución

📌 Problema → 📥 Input → ⚙️ Process → 📤 Output  

---

# 🔷 Diagrama

```mermaid
flowchart TD
    A([Inicio]) --> B[/Leer edad/]
    B --> C{¿edad >= 18?}
    C -- Sí --> D["Mayor de edad"]
    C -- No --> E["Menor de edad"]
    D --> F([Fin])
    E --> F
```

---

# 💻 Código ejemplo

```php
<?php

$edad = (int) readline("Ingresa tu edad: ");

if ($edad >= 18) {
    echo "Mayor de edad";
} else {
    echo "Menor de edad";
}
```

---

<img src="ifografia.png">

# ✅ Resultado esperado

El alumno:

- usa `readline()` correctamente
- entiende if/else
- resuelve problemas antes de programar

Ejercicios: [Abrir guía de ejercicios](ejercicio.md)


🏠 [← README](../../../README.md) · ⬅️ [← Clase 09](../clase%2009/resumen.md) | [Clase 11 →](../clase%2011/resumen.md) ➡️ 
