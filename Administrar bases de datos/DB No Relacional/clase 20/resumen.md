🏠 [← README](../../../README.md) · ⬅️ [← Clase 19](../clase%2019/resumen.md) · Clase 20 · [Clase 21 →](../clase%2021/resumen.md) ➡️ · 🧪 [Ejercicios](ejercicios.md)

---

# Clase 20 — Módulos en Node.js: `require` y estructura del proyecto

**Fecha:** 14 de mayo de 2026  
**Materia:** Bases de datos no relacionales  
**Tipo:** 📚 Teoría + 🧪 Laboratorio

---

# 🎯 Objetivo de la sesión

Aprender a organizar el código Node.js en **múltiples archivos** usando `require` y `module.exports`. Esta es la arquitectura del proyecto final: cada archivo tiene una responsabilidad específica y los demás lo importan cuando lo necesitan.

---

# 🧠 ¿Por qué dividir el código en archivos?

Igual que en PHP con `require_once`, en Node.js dividir el código mejora la organización y permite trabajar en equipo:

- **`config.js`** — constantes de conexión
- **`conexion.js`** — función que conecta a MongoDB
- **`funciones.js`** — todas las funciones CRUD
- **`index.js`** — el menú principal

---

# 📁 La estructura de archivos del proyecto

```
mi-proyecto/
├── config.js         ← Constantes exportadas: URI, nombre de BD, colección
├── conexion.js       ← Función conectar() exportada
├── funciones.js      ← Funciones CRUD exportadas (async)
└── index.js          ← Menú principal, importa y ejecuta todo
```

---

# 🔧 `require` y `module.exports` — El sistema de módulos de Node.js

En Node.js (con CommonJS, el sistema por defecto), para compartir código entre archivos se usan dos cosas:

- **`module.exports`** — para **exportar** código desde un archivo (hacerlo disponible)
- **`require()`** — para **importar** lo que otro archivo exportó

```js
// archivo-a.js — EXPORTA
function saludar(nombre) {
    console.log(`Hola, ${nombre}`);
}

module.exports = { saludar };

// archivo-b.js — IMPORTA
const { saludar } = require('./archivo-a');
saludar('Luis');   // → Hola, Luis
```

**Punto importante:** El `./` antes del nombre indica que el archivo está en la misma carpeta. Sin `./`, Node.js busca en `node_modules` (paquetes instalados).

---

# 📄 Los cuatro archivos del proyecto

## `config.js` — Constantes de conexión

```js
// config.js
// Datos de conexión a MongoDB

const DB_URI  = 'mongodb://localhost:27017';
const DB_NAME = 'mi_proyecto';
const COL_NAME = 'productos';   // Colección principal

module.exports = { DB_URI, DB_NAME, COL_NAME };
```

**¿Por qué exportar constantes en lugar de variables?**
Para que todos los archivos usen los mismos valores. Si cambias el puerto de MongoDB, solo editas `config.js`.

---

## `conexion.js` — La función que conecta a MongoDB

```js
// conexion.js
const { MongoClient } = require('mongodb');  // Importa el driver de MongoDB
const { DB_URI, DB_NAME } = require('./config');

async function conectar() {
    const cliente = new MongoClient(DB_URI);
    await cliente.connect();
    const db = cliente.db(DB_NAME);
    return { cliente, db };
}

module.exports = { conectar };
```

**¿Qué significa `async`?**
MongoDB es una operación que tarda (accede al disco). `async` / `await` es la forma en que JavaScript "espera" a que termine antes de continuar. Por ahora solo necesitas recordar:
- Pones `async` antes de `function` cuando la función hace operaciones de BD
- Pones `await` antes de las llamadas que tardan (`cliente.connect()`, `db.collection().findOne()`, etc.)

**¿Por qué devolvemos tanto `cliente` como `db`?**
- `db` es el objeto que usarás para hacer consultas
- `cliente` es necesario para cerrar la conexión al terminar (`cliente.close()`)

---

## `funciones.js` — Todas las operaciones CRUD

```js
// funciones.js
const { COL_NAME } = require('./config');

async function listar(db) {
    const col = db.collection(COL_NAME);
    const docs = await col.find().toArray();

    if (docs.length === 0) {
        console.log('No hay registros.');
        return;
    }

    console.log('\n--- Lista ---');
    docs.forEach(doc => {
        console.log(`  [${doc._id}] ${doc.nombre} - $${doc.precio} (stock: ${doc.stock})`);
    });
}

async function agregar(db, nombre, precio, stock) {
    const col = db.collection(COL_NAME);
    await col.insertOne({ nombre, precio: parseFloat(precio), stock: parseInt(stock) });
    console.log(`✅ '${nombre}' agregado.`);
}

async function editar(db, id, nuevoPrecio) {
    const { ObjectId } = require('mongodb');
    const col = db.collection(COL_NAME);
    await col.updateOne(
        { _id: new ObjectId(id) },
        { $set: { precio: parseFloat(nuevoPrecio) } }
    );
    console.log('✅ Precio actualizado.');
}

async function eliminar(db, id) {
    const { ObjectId } = require('mongodb');
    const col = db.collection(COL_NAME);
    await col.deleteOne({ _id: new ObjectId(id) });
    console.log('✅ Documento eliminado.');
}

module.exports = { listar, agregar, editar, eliminar };
```

**¿Qué es `ObjectId`?**
En MongoDB, el campo `_id` no es un número simple como en MySQL: es un `ObjectId`, un identificador especial de 24 caracteres. Para buscar por `_id` debes envolver el string en `new ObjectId(id)`.

---

## `index.js` — El menú principal

```js
// index.js
const readline = require('readline');
const { conectar } = require('./conexion');
const { listar, agregar, editar, eliminar } = require('./funciones');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function preguntar(msg) {
    return new Promise(resolve => rl.question(msg, resolve));
}

async function main() {
    const { cliente, db } = await conectar();
    console.log('✅ Conectado a MongoDB');

    let opcion;
    do {
        console.log('\n=== Mi Proyecto ===');
        console.log('1. Ver registros');
        console.log('2. Agregar registro');
        console.log('3. Editar precio');
        console.log('4. Eliminar registro');
        console.log('0. Salir');

        opcion = await preguntar('Elige una opción: ');

        switch (opcion) {
            case '1':
                await listar(db);
                break;

            case '2':
                const nombre = await preguntar('Nombre: ');
                const precio = await preguntar('Precio: ');
                const stock  = await preguntar('Stock: ');
                await agregar(db, nombre, precio, stock);
                break;

            case '3':
                await listar(db);
                const id1 = await preguntar('ID a editar: ');
                const nuevoPrecio = await preguntar('Nuevo precio: ');
                await editar(db, id1, nuevoPrecio);
                break;

            case '4':
                await listar(db);
                const id2 = await preguntar('ID a eliminar: ');
                await eliminar(db, id2);
                break;

            case '0':
                console.log('¡Hasta luego!');
                break;

            default:
                console.log('Opción no válida.');
        }

    } while (opcion !== '0');

    await cliente.close();
    rl.close();
}

main();
```

---

# 🔗 ¿Cómo fluye el programa?

```
node index.js
    │
    ├── require('./conexion')   → require('./config')   → DB_URI, DB_NAME
    │
    ├── require('./funciones')  → require('./config')   → COL_NAME
    │
    ├── conectar()             → MongoClient → { cliente, db }
    │
    └── switch (opcion)
            ├── '1' → listar(db)
            ├── '2' → agregar(db, ...)
            ├── '3' → editar(db, ...)
            └── '4' → eliminar(db, ...)
```

---

# 🧩 Brevísima intro a objetos: `new MongoClient()`

Igual que en PHP con `new mysqli(...)`, en Node.js también se usa `new` para crear la conexión:

```js
const cliente = new MongoClient(DB_URI);
await cliente.connect();
```

El `new` crea un **objeto** (una variable especial con funciones internas llamadas métodos). Por eso puedes escribir:
```js
cliente.connect()    // Método: conectar
cliente.close()      // Método: cerrar conexión
cliente.db('nombre') // Método: seleccionar BD
```

> **Eso es todo lo que necesitas saber sobre objetos en este semestre.** No escribirás tus propias clases. Solo usas el objeto `cliente` que `MongoClient` creó por ti.

---

# ⚡ Diferencia con PHP: async/await

En PHP, las operaciones de BD son **síncronas** (el programa espera automáticamente). En JavaScript, son **asíncronas** (el programa no espera a menos que se lo digas).

| PHP | Node.js equivalente |
|-----|---------------------|
| `$conn->query($sql)` | `await col.find().toArray()` |
| `$conn->connect_error` | `await cliente.connect()` |
| Espera automática | Necesitas `await` explícito |

**Regla práctica:** Cada vez que hagas una operación de MongoDB (find, insertOne, updateOne, deleteOne, connect, close), escribe `await` delante.

---

# 🛠️ Instalación del driver de MongoDB

Antes de ejecutar el proyecto necesitas instalar el paquete de MongoDB para Node.js:

```bash
cd mi-proyecto
npm init -y
npm install mongodb
```

Esto crea `package.json` y descarga el driver en `node_modules/`.

---

# 🧪 Práctica en parejas

**Objetivo:** Crear la estructura de archivos del proyecto en Node.js.

**Instrucciones:**
1. Crea la carpeta `mi-proyecto/` dentro de `bdnr/clase-20/` del repositorio.
2. Inicializa el proyecto: `npm init -y` + `npm install mongodb`.
3. Crea los cuatro archivos: `config.js`, `conexion.js`, `funciones.js`, `index.js`.
4. En `config.js` pon los datos reales de tu BD (creada en clase 19).
5. Implementa `conexion.js` con la función `conectar()`.
6. Implementa al menos `listar()` en `funciones.js`, adaptada a tu colección.
7. En `index.js` crea el menú con las opciones, aunque solo la opción 1 funcione completamente.
8. Ejecuta con `node index.js` y verifica que conecta y lista los documentos.

**Criterio de éxito:** El programa inicia, muestra el menú, la opción 1 lista los documentos de MongoDB y la opción 0 cierra limpiamente.

---

# 📌 Conclusión

La estructura modular del proyecto Node.js es el espejo exacto de la de PHP:

| PHP | Node.js |
|-----|---------|
| `config.php` con `define()` | `config.js` con `module.exports` |
| `conexion.php` con `new mysqli()` | `conexion.js` con `new MongoClient()` |
| `funciones.php` con funciones normales | `funciones.js` con funciones `async` |
| `index.php` con `require_once` y `switch` | `index.js` con `require` y `switch` + `async main()` |

La diferencia clave es `async/await`: en Node.js debes esperar explícitamente las operaciones de BD. En las siguientes clases completarás todas las funciones CRUD y tendrás la aplicación funcional conectada a MongoDB.

---

🏠 [← README](../../../README.md) · ⬅️ [← Clase 19](../clase%2019/resumen.md) · Clase 20 · [Clase 21 →](../clase%2021/resumen.md) ➡️ · 🧪 [Ejercicios](ejercicios.md)
