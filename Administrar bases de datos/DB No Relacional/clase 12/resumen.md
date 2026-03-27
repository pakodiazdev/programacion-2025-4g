🏠 [← README](../../../README.md) · ⬅️ [← Clase 11](../clase%2011/resumen.md) · Clase 12 · [Clase 13 →](../clase%2013/resumen.md) ➡️ · 🧪 [Ejercicios](ejercicios.md)

---

# Clase 12 — Objetos y JSON en JavaScript

**Fecha:** 23-abril-2026
**Materia:** Bases de datos NO relacionales

---

# 🎯 Objetivo de la sesión

Aprender a trabajar con objetos en JavaScript (equivalentes a arrays asociativos de PHP) y dominar JSON. Estos conceptos son fundamentales porque MongoDB comunica datos exactamente en formato JSON.

---

# 🧠 Parte 1: Objetos en JavaScript

## Declaración de objetos

Un **objeto** en JavaScript es como un array asociativo en PHP: tiene propiedades (claves) y valores.

```js
const alumno = { nombre: 'Ana', edad: 17, promedio: 9.5 };
```

## Acceso a propiedades

Dos formas:

```js
const alumno = { nombre: 'Ana', edad: 17, promedio: 9.5 };

// 1. Notación de punto (más común)
console.log(alumno.nombre);    // Ana
console.log(alumno.edad);      // 17

// 2. Notación de corchetes (como PHP)
console.log(alumno['nombre']); // Ana
console.log(alumno['edad']);   // 17
```

## Modificar y agregar propiedades

```js
const alumno = { nombre: 'Ana', edad: 17 };

// Modificar
alumno.edad = 18;

// Agregar campo nuevo
alumno.email = 'ana@mail.com';

console.log(alumno);
// { nombre: 'Ana', edad: 18, email: 'ana@mail.com' }
```

## Recorrer con for...in

```js
const alumno = { nombre: 'Ana', edad: 17, promedio: 9.5 };

for (const clave in alumno) {
    console.log(clave + ': ' + alumno[clave]);
}

// Salida:
// nombre: Ana
// edad: 17
// promedio: 9.5
```

## Object.keys(), Object.values(), Object.entries()

```js
const alumno = { nombre: 'Ana', edad: 17, promedio: 9.5 };

// Obtener solo las claves
console.log(Object.keys(alumno));
// ['nombre', 'edad', 'promedio']

// Obtener solo los valores
console.log(Object.values(alumno));
// ['Ana', 17, 9.5]

// Obtener pares [clave, valor]
Object.entries(alumno).forEach(([clave, valor]) => {
    console.log(clave + ': ' + valor);
});

// Salida (igual que for...in):
// nombre: Ana
// edad: 17
// promedio: 9.5
```

## Array de objetos

Cuando tienes múltiples registros:

```js
const alumnos = [
    { nombre: 'Ana', promedio: 9.5 },
    { nombre: 'Luis', promedio: 7.2 },
    { nombre: 'María', promedio: 8.8 },
];

for (let i = 0; i < alumnos.length; i++) {
    console.log(alumnos[i].nombre + ': ' + alumnos[i].promedio);
}

// O con forEach:
alumnos.forEach(alumno => {
    console.log(alumno.nombre + ': ' + alumno.promedio);
});

// Salida:
// Ana: 9.5
// Luis: 7.2
// María: 8.8
```

## 🔗 Conexión con MongoDB (recuadro destacado)

> **Dato crítico:** Un documento de MongoDB ES un objeto JavaScript. Cuando el driver de MongoDB devuelve datos, devuelve exactamente esto: objetos JS nativos.
>
> MongoDB agrega automáticamente un campo `_id` a cada documento:
> ```js
> { _id: ObjectId("507f1f77bcf86cd799439011"), nombre: 'Ana', edad: 17 }
> ```
>
> No hay conversión ni traducción: **MongoDB habla objetos JavaScript de forma nativa.** Lo que aprendes hoy sobre objetos es EXACTAMENTE cómo MongoDB comunica datos.

---

# 🧠 Parte 2: JSON en JavaScript

## JSON.stringify: Objeto → JSON

Convierte un objeto JavaScript a una cadena JSON:

```js
const alumno = { nombre: 'Ana', edad: 17 };
const json = JSON.stringify(alumno);
console.log(json);
// {"nombre":"Ana","edad":17}
```

Con formato legible (pretty print):

```js
const alumno = { nombre: 'Ana', edad: 17 };
console.log(JSON.stringify(alumno, null, 2));
// {
//   "nombre": "Ana",
//   "edad": 17
// }
```

## JSON.parse: JSON → Objeto

Convierte una cadena JSON de vuelta a un objeto:

```js
const str = '{"nombre":"Ana","edad":17}';
const obj = JSON.parse(str);
console.log(obj.nombre); // Ana
console.log(obj.edad);   // 17
```

## Tabla comparativa PHP vs JavaScript para JSON

| Operación | PHP | JavaScript |
|-----------|-----|-----------|
| Objeto → JSON | `json_encode($arr)` | `JSON.stringify(obj)` |
| JSON → Objeto | `json_decode($json, true)` | `JSON.parse(str)` |
| Pretty print | `JSON_PRETTY_PRINT` flag | `JSON.stringify(obj, null, 2)` |
| Acceso a propiedades | `$obj['nombre']` | `obj.nombre` |
| Agregar campo | `$obj['nuevo'] = valor` | `obj.nuevo = valor` |

## JSON anidado (array de objetos)

```js
const alumnos = [
    { nombre: 'Ana', promedio: 9.5 },
    { nombre: 'Luis', promedio: 7.2 },
];

const json = JSON.stringify(alumnos, null, 2);
console.log(json);

// [
//   {
//     "nombre": "Ana",
//     "promedio": 9.5
//   },
//   {
//     "nombre": "Luis",
//     "promedio": 7.2
//   }
// ]
```

---

# 🎯 Diagrama de equivalencia: Datos en diferentes sistemas

```mermaid
graph LR
    A["Objeto JS\n{nombre:'Ana', edad:17}"]
    B["JSON\n{\"nombre\":\"Ana\",\"edad\":17}"]
    C["Array asociativo PHP\n['nombre'=>'Ana','edad'=>17]"]
    D["Documento MongoDB\n{_id:..., nombre:'Ana', edad:17}"]

    A <-->|JSON.stringify / JSON.parse| B
    C <-->|mismo formato de datos| B
    A <-->|driver MongoDB devuelve esto| D
```

- **A (Objeto JS):** lo que mantienes en memoria en JavaScript
- **C (Array PHP):** cómo lo viste en PHP (conceptualmente idéntico)
- **B (JSON):** el formato universal de intercambio (idéntico en PHP y JS)
- **D (MongoDB):** cómo MongoDB almacena datos (es JSON con `_id`)

Los cuatro representan **lo mismo**, solo con diferentes sintaxis de lenguaje.

---

# 📌 Conclusión

- Un **objeto en JavaScript** es exactamente lo que es un **array asociativo en PHP**
- **JSON es el lenguaje universal** — aparece igual en PHP y JavaScript
- `JSON.stringify()` convierte objeto a JSON; `JSON.parse()` convierte JSON a objeto
- **MongoDB devuelve objetos JavaScript nativamente** — sin conversión
- La progresión es: Objeto → JSON (para guardar/transmitir) → Objeto (para usar)

Dominaste el formato de datos que usa MongoDB. Cuando conectes a MongoDB, estarás trabajando exactamente con estos objetos y JSON.


---

🏠 [← README](../../../README.md) · ⬅️ [← Clase 11](../clase%2011/resumen.md) · Clase 12 · [Clase 13 →](../clase%2013/resumen.md) ➡️ · 🧪 [Ejercicios](ejercicios.md)
