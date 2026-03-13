
[← Clase 8](../clase%2008/resumen.md) · [Clase 10 →](../clase%2010/resumen.md)

---

# Clase 09 — Comentarios, else, recordatorio de Git y prácticas de if/else
Materia: Base de datos relacional  
Duración total: 4 horas  

- 2 horas en salón  
- 2 horas en laboratorio  

---

# Objetivo de la sesión

1. Comprender qué son los **comentarios en programación** y para qué se utilizan.
2. Reforzar el uso de **if** e introducir la estructura **else**.
3. Practicar la toma de decisiones en programas.
4. Recordar los **conceptos básicos de Git** antes de comenzar a utilizar repositorios.
5. Respaldar prácticas del curso utilizando **GitHub**.

---

# Distribución del tiempo

| Tema | Tiempo |
|-----|------|
| Comentarios en programación | 15 min |
| Repaso de if | 15 min |
| Introducción a else | 20 min |
| Ejemplos guiados | 20 min |
| Recordatorio de conceptos básicos de Git | 15 min |
| Ejercicios conceptuales | 10 min |
| Crear repositorio y clonarlo | 25 min |
| Integrar prácticas anteriores | 20 min |
| Nuevas prácticas | 40 min |

---

# Parte 1 — Comentarios en programación

Tiempo estimado: 15 minutos

Un **comentario** es texto dentro del código que sirve para explicar lo que hace el programa.

Los comentarios **no se ejecutan**.

Sirven para:

- documentar el programa
- explicar la lógica
- facilitar la lectura del código

## Comentario de una línea

```php
// Este es un comentario
```

## Comentario después de una instrucción

```php
echo "Hola"; // imprime texto
```

## Comentario de varias líneas

```php
/*
Este es un comentario
de varias líneas
*/
```

Se recomienda iniciar cada práctica con un comentario indicando:

- número de práctica
- objetivo del programa

Ejemplo:

```php
// Practica 31
// Determinar si un numero es positivo o negativo
```

---

# Parte 2 — Repaso de la estructura if

Tiempo estimado: 15 minutos

La estructura `if` permite ejecutar código **si una condición se cumple**.

Ejemplo:

```php
<?php

$edad = 20;

if ($edad >= 18) {
    echo "Puede votar";
}
```

Si la condición es verdadera, el bloque se ejecuta.

---

# Parte 3 — Introducción a else

Tiempo estimado: 20 minutos

`else` permite indicar qué hacer cuando la condición **no se cumple**.

Estructura general:

```php
<?php

if (condicion) {
    // instrucciones si se cumple
} else {
    // instrucciones si no se cumple
}
```

Solo uno de los dos bloques se ejecuta.

---

# Ejemplo conceptual

¿Llueve?

Sí → usar paraguas  
No → salir normal  

Esto representa cómo un programa puede **tomar decisiones**.

---

# Parte 4 — Ejemplos de código

Tiempo estimado: 20 minutos

## Mayor de edad

```php
<?php

$edad = 16;

if ($edad >= 18) {
    echo "Puede votar";
} else {
    echo "No puede votar";
}
```

## Número positivo o negativo

```php
<?php

$numero = -4;

if ($numero > 0) {
    echo "Número positivo";
} else {
    echo "Número cero o negativo";
}
```

## Calificación

```php
<?php

$calificacion = 65;

if ($calificacion >= 70) {
    echo "Aprobado";
} else {
    echo "Reprobado";
}
```

---

# Parte 5 — Recordatorio de conceptos básicos de Git

Tiempo estimado: 15 minutos

Antes de comenzar el laboratorio se recuerda qué es **Git**.

Git es un sistema que permite **guardar versiones del trabajo**.

Conceptos importantes:

Repositorio  
Lugar donde se guarda el proyecto.

Commit  
Registro de un cambio realizado en el proyecto.

Push  
Enviar los cambios al repositorio remoto.

Repositorio remoto  
Copia del proyecto almacenada en internet (GitHub).

Flujo básico de trabajo:

editar archivo  
agregar cambios  
crear commit  
subir cambios

Esto permite tener un **historial del trabajo realizado**.

---

# Parte 6 — Ejercicios conceptuales

Tiempo estimado: 10 minutos

Resolver en grupo:

edad para votar  
número positivo o negativo  
calificación aprobatoria  
descuento en compras  

---

# Laboratorio

---

# Actividad 1 — Crear repositorio

Nombre del repositorio:

base-datos-relacional

---

# Actividad 2 — Clonar repositorio

Clonar el repositorio en Visual Studio Code.

---

# Actividad 3 — Crear estructura

```
practicas/
   01-hola-mundo
   02-hola-soy
   03-hola
   04-suma-dos-numeros
```

---

# Actividad 4 — Integrar prácticas anteriores

Copiar prácticas anteriores dentro del repositorio.

Realizar **un commit por práctica**.

---

# Nuevas prácticas — Clase 09

La numeración continúa después de la práctica 30.

---

# Prácticas obligatorias

## Practica 31

Programa que reciba un número.

Si el número es mayor que 0 mostrar:

Número positivo

En caso contrario mostrar:

Número cero o negativo

---

## Practica 32

Programa que reciba la edad de una persona.

Si la edad es mayor o igual a 18 mostrar:

Puede votar

En caso contrario mostrar:

No puede votar

---

# Prácticas opcionales

## Practica 33

Programa que reciba una calificación.

Si la calificación es mayor o igual a 70 mostrar:

Aprobado

En caso contrario mostrar:

Reprobado

---

## Practica 34

Programa que reciba el total de una compra.

Si el total es mayor o igual a 100 mostrar:

Aplica descuento

En caso contrario mostrar:

No aplica descuento

---

# Prácticas complementarias

Practica 35 — número mayor que 10 o pequeño  
Practica 36 — número igual a cero o diferente  
Practica 37 — edad menor a 13 o mayor  
Practica 38 — número mayor a 100 o menor  
Practica 39 — temperatura mayor a 30 o no  
Practica 40 — velocidad mayor a 60 o permitida  
Practica 41 — edad mayor o igual a 65 o no  
Practica 42 — número mayor a 50 o menor  
Practica 43 — número negativo o no negativo  
Practica 44 — número mayor que cinco o menor  
Practica 45 — cantidad mayor a 20 o menor  
Practica 46 — número mayor que uno o no  
Practica 47 — menor de edad o mayor de edad  
Practica 48 — número mayor a 200 o no  
Practica 49 — número mayor a 25 o menor  
Practica 50 — número mayor a 500 o menor
