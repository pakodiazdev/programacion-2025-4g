🏠 [← README](../../../README.md) · ⬅️ [← Clase 24](../clase%2024/resumen.md) · Clase 25 · [Clase 26 →](../clase%2026/resumen.md) ➡️

---

# Clase 25 — Kick-off del proyecto integrador

**Fecha:** 1 de junio de 2026  
**Materia:** Bases de datos no relacionales  
**Tipo:** 🚀 Kick-off de proyecto en equipo

---

# 🎯 Objetivo de la sesión

Arrancar oficialmente el proyecto integrador de equipo. Al terminar, cada integrante debe tener su archivo asignado con las funciones vacías (stubs) y el repositorio compartido configurado.

---

# 🧭 El proyecto en contexto

Durante el semestre construiste todas las piezas por separado:

| Clase | Lo que aprendiste |
|-------|-------------------|
| 10–12 | `switch`, funciones, objetos, JSON |
| 13 | Mini-app sin BD (lógica del menú) |
| 14–17 | NoSQL, MongoDB, CRUD en mongosh |
| 18–19 | Modelado, colecciones completas del proyecto |
| 20 | Estructura modular: `config`, `conexion`, `funciones`, `index` |
| 21–24 | CRUD completo desde Node.js conectado a MongoDB |

Hoy juntas todas esas piezas en **una sola aplicación de equipo**.

---

# 👥 Equipos y proyectos

Los mismos equipos del track DBR. El mismo dominio, pero implementado en **Node.js + MongoDB**.

---

# 🗂️ Reparto de responsabilidades

| Integrante | Archivo(s) | Responsabilidad |
|------------|-----------|-----------------|
| A | `config.js` + `conexion.js` | URI de conexión + función `async conectar()` |
| B | `funciones.js` (insert + find) | `async agregar()` + `async listar()` |
| C | `funciones.js` (update + delete) | `async editar()` + `async eliminar()` |
| D (si aplica) | `index.js` | Menú `switch` completo con `async main()` |

---

# 🏗️ Actividad: crear los stubs del proyecto

## Estructura del repositorio

```
proyecto-[nombre-equipo]/
  README.md
  package.json       ← generado con npm init -y
  node_modules/      ← generado con npm install mongodb
  config.js
  conexion.js
  funciones.js
  index.js
```

---

## `config.js` — Integrante A

```js
// config.js
const DB_URI  = 'mongodb://localhost:27017';
const DB_NAME = 'proyecto_[nombre]';        // ← Nombre real de la BD
const COL_NAME = '[coleccion_principal]';   // ← Colección principal

module.exports = { DB_URI, DB_NAME, COL_NAME };
```

---

## `conexion.js` — Integrante A

```js
// conexion.js
const { MongoClient } = require('mongodb');
const { DB_URI, DB_NAME } = require('./config');

async function conectar() {
    const cliente = new MongoClient(DB_URI);
    await cliente.connect();
    const db = cliente.db(DB_NAME);
    return { cliente, db };
}

module.exports = { conectar };
```

---

## `funciones.js` — Integrantes B y C

```js
// funciones.js
const { COL_NAME } = require('./config');

// --- READ ---
async function listar(db) {
    // TODO: db.collection(COL_NAME).find().toArray()
    console.log('[ listar() pendiente ]');
}

// --- CREATE ---
async function agregar(db, datos) {
    // TODO: db.collection(COL_NAME).insertOne(datos)
    console.log('[ agregar() pendiente ]');
}

// --- UPDATE ---
async function editar(db, id, cambios) {
    // TODO: db.collection(COL_NAME).updateOne({ _id: new ObjectId(id) }, { $set: cambios })
    console.log('[ editar() pendiente ]');
}

// --- DELETE ---
async function eliminar(db, id) {
    // TODO: db.collection(COL_NAME).deleteOne({ _id: new ObjectId(id) })
    console.log('[ eliminar() pendiente ]');
}

module.exports = { listar, agregar, editar, eliminar };
```

---

## `index.js` — Integrante D (o A en equipos de 3)

```js
// index.js
const readline = require('readline');
const { conectar }  = require('./conexion');
const { listar, agregar, editar, eliminar } = require('./funciones');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const preguntar = msg => new Promise(r => rl.question(msg, r));

async function main() {
    const { cliente, db } = await conectar();
    console.log('✅ Conectado a MongoDB');

    let op;
    do {
        console.log('\n=== [Nombre del proyecto] ===');
        console.log('1. Ver registros\n2. Agregar\n3. Editar\n4. Eliminar\n0. Salir');
        op = await preguntar('Opción: ');

        switch (op) {
            case '1': await listar(db); break;
            case '2': /* TODO */ break;
            case '3': /* TODO */ break;
            case '4': /* TODO */ break;
            case '0': console.log('¡Hasta luego!'); break;
            default:  console.log('Opción no válida.');
        }
    } while (op !== '0');

    await cliente.close();
    rl.close();
}

main();
```

---

# ✅ Checklist de cierre de esta sesión

- [ ] `npm init -y` + `npm install mongodb` ejecutados
- [ ] Repositorio del proyecto en GitHub con todos los integrantes
- [ ] Los 4 archivos creados con stubs
- [ ] `config.js` con la URI, nombre de BD y colección reales
- [ ] `node index.js` inicia, conecta y muestra el menú (aunque las opciones digan "pendiente")
- [ ] Primer commit: `"kickoff: estructura inicial del proyecto"`
- [ ] Cada integrante sabe qué archivo y qué funciones implementará

---

# 📌 Conclusión

El proyecto integrador cierra el ciclo completo del semestre. En la siguiente sesión cada integrante implementa sus funciones reales con las operaciones MongoDB de su colección.

---

🏠 [← README](../../../README.md) · ⬅️ [← Clase 24](../clase%2024/resumen.md) · Clase 25 · [Clase 26 →](../clase%2026/resumen.md) ➡️
