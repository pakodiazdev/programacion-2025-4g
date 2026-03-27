🏠 [← README](../../../README.md) · ⬅️ [← Clase 04](../clase%2004/resumen.md) · Clase 05 · [Clase 06 →](../clase%2006/resumen.md) ➡️

---
# Clase 05 Operadores lógicos, operador `&&`   

**Fecha:** 23-marzo-2026  
**Materia:** Bases de datos NO relacionales  

---

# 🎯 Objetivo del tema

Aprender a **combinar condiciones** usando operadores lógicos dentro de estructuras `if / else`.

---

# 🧠 Idea clave

> Un `if` simple evalúa el resutlado condición boleana 
> Los operadores lógicos permiten evaluar **varias condiciones al mismo tiempo**

---

# 🔗 Operadores lógicos


Los operadores lógicos son símbolos que se utilizan para combinar o modificar condiciones en una expresión.

Sirven para evaluar más de una condición al mismo tiempo y obtener como resultado un valor:

- `true (verdadero)`  
- `false (falso)`

| Operador | Nombre | Evalua | Resutlado| Evalua | Resutlado |
|----------|--------|--------|----------|--------|-----------|
| &&       | AND (Y)   | Si ambas expresiones bolenas sean verdaderas | **true** | si una es falsa | **false** |
| \|\|     | OR  (Ó)   | . | . | . | . |
| !        | NOT (NO) | . | . | . | . |

# Operador Lógico `&&`  — AND (Y lógico) :

Se cumple cuando **todas las condiciones son verdaderas**

|    |    |    |   |   |
|----|----|----|---|---|
| verdadero | && | verdadero | = | verdadero | 
| verdadero | && | falso | = | falso |  
| falso     | && | falso | = | falso |


Ejemplo en código JavaScript

```js
const readline = require('../libs/readline');

(async () => {

  console.log('¿Cuántos años tienes?');
  let edad = await readline();
  edad = Number(edad);

  console.log('¿Tienes tu INE? (SI/NO)');
  let ine = await readline();

  if (edad >= 18 && ine === 'SI') {
    console.log('Puedes pasar');
  } else {
    console.log('NO puedes pasar');
  }

})();
```


---

# 🧩 Tipo de problemas que resuelve

Cuando necesitamos que en un grupo codiciones **TODAS** sean ciertas

Ej:

- validación de acceso (login)
  - usaurio valido
  - contraseña valida

- descuentos con condiciones
  - un monto de compra minimo
  - ser miembro de la tienda

---

# 🧪 Desarrollo del ejemplo

## Enunciado del problema

Crear un programa que solicite:

- usuario
- contraseña

Si el usuario es igual a `"admin"` y la contraseña es igual a `"1234"`, debe mostrar:

```text
Acceso permitido
```

En caso contrario, debe mostrar:

```text
Acceso denegado
```

---

## Algoritmo

1. Inicio  
2. Pedir el usuario  
3. Guardar el usuario  
4. Pedir la contraseña  
5. Guardar la contraseña  
6. Comparar si el usuario es `"admin"` y la contraseña es `"1234"`  
7. Si ambas condiciones son verdaderas, mostrar `"Acceso permitido"`  
8. En caso contrario, mostrar `"Acceso denegado"`  
9. Fin  

---

## Diagrama de flujo

```mermaid
flowchart TD
    A([Inicio]) --> B[/Leer usuario/]
    B --> C[/Leer contraseña/]
    C --> D{Usuario == admin y password == 1234?}
    D -- Si --> E[Mostrar Acceso permitido]
    D -- No --> F[Mostrar Acceso denegado]
    E --> G([Fin])
    F --> G
```

---

## Pseudocódigo

```text
Inicio

  Escribir "Ingresa el usuario:"
  Leer usuario

  Escribir "Ingresa la contraseña:"
  Leer contrasena

  Si usuario = "admin" Y contrasena = "1234" Entonces
      Escribir "Acceso permitido"
  SiNo
      Escribir "Acceso denegado"
  FinSi

Fin
```

---

## Código en JavaScript NodeJS

```js
const readline = require('../libs/readline');

(async () => {

    console.log('Ingresa el usuario:');
    let usuario = await readline();

    console.log('Ingresa la contraseña:');
    let password = await readline();

    if (usuario === 'admin' && password === '1234') {
        console.log('Acceso permitido');
    } else {
        console.log('Acceso denegado');
    }

})();
```

---

# 📌 Conclusión

Los operadores lógicos permiten construir decisiones más completas y acercarse a problemas reales de programación.



# RESUMEN 

<img src="infografia.png" >


# Ejercicios/Practicas

[Ejercicios](ejercicios.md)


🏠 [← README](../../../README.md) · ⬅️ [← Clase 04](../clase%2004/resumen.md) · Clase 05 · [Clase 06 →](../clase%2006/resumen.md) ➡️